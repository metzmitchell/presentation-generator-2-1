/**
 * MDX Processing Utilities
 * 
 * Handles MDX file processing, frontmatter parsing, and error handling
 * for the presentation generator system.
 */

import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// Type definitions for frontmatter and MDX content
export interface PresentationFrontmatter {
  title: string;
  date: string;
  type: string;
  description?: string;
}

export interface MDXContent {
  frontmatter: PresentationFrontmatter;
  content: string;
  slug: string;
}

export interface MDXProcessingResult {
  success: boolean;
  data?: MDXContent;
  error?: string;
}

/**
 * Validates frontmatter with graceful defaults
 */
export function validateFrontmatter(frontmatter: any): PresentationFrontmatter {
  return {
    title: frontmatter?.title || 'Untitled Presentation',
    date: frontmatter?.date || new Date().toISOString().split('T')[0],
    type: frontmatter?.type || 'presentation',
    description: frontmatter?.description
  };
}

/**
 * Processes MDX file and extracts frontmatter and content
 */
export function processMDXFile(slug: string): MDXProcessingResult {
  try {
    const presentationsDir = join(process.cwd(), 'presentations');
    const filePath = join(presentationsDir, `${slug}.mdx`);
    
    // Read file with error handling
    let fileContent: string;
    try {
      fileContent = readFileSync(filePath, 'utf-8');
    } catch (fileError) {
      return {
        success: false,
        error: `MDX file not found: ${slug}.mdx`
      };
    }

    // Try parsing with gray-matter first (YAML frontmatter)
    let frontmatter: PresentationFrontmatter;
    let content: string;
    
    if (fileContent.startsWith('---')) {
      // Has YAML frontmatter
      const { data: rawFrontmatter, content: mdxContent } = matter(fileContent);
      frontmatter = validateFrontmatter(rawFrontmatter);
      content = mdxContent;
    } else {
      // Check for export const metadata pattern
      const metadataMatch = fileContent.match(/export const metadata = \{([\s\S]*?)\}/);
      if (metadataMatch) {
        try {
          // Extract metadata object
          const metadataStr = `{${metadataMatch[1]}}`;
          const metadataObj = eval(`(${metadataStr})`);
          frontmatter = validateFrontmatter(metadataObj);
          content = fileContent;
        } catch {
          // Fallback to defaults if metadata parsing fails
          frontmatter = validateFrontmatter({});
          content = fileContent;
        }
      } else {
        // No metadata found
        frontmatter = validateFrontmatter({});
        content = fileContent;
      }
    }

    return {
      success: true,
      data: {
        frontmatter,
        content,
        slug
      }
    };

  } catch (error) {
    return {
      success: false,
      error: `Failed to process MDX file: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}

/**
 * Gets list of available presentations
 */
export function getAvailablePresentations(): string[] {
  try {
    const presentationsDir = join(process.cwd(), 'presentations');
    const fs = require('fs');
    
    if (!fs.existsSync(presentationsDir)) {
      return [];
    }

    return fs.readdirSync(presentationsDir)
      .filter((file: string) => file.endsWith('.mdx'))
      .map((file: string) => file.replace('.mdx', ''));
  } catch (error) {
    console.warn('Failed to read presentations directory:', error);
    return [];
  }
}

/**
 * Simple validation for common MDX issues
 */
export function validateMDXContent(content: string): { valid: boolean; issues: string[] } {
  const issues: string[] = [];

  // Check for common component syntax issues
  const componentRegex = /<(\w+)/g;
  const components = content.match(componentRegex);
  
  if (components) {
    const validComponents = ['Hero', 'MetricGrid', 'ChartSection', 'CalloutBox', 'ImageGallery', 'Timeline', 'Section'];
    
    components.forEach(match => {
      const componentName = match.replace('<', '');
      if (!validComponents.includes(componentName)) {
        issues.push(`Unknown component: ${componentName}`);
      }
    });
  }

  // Check for basic data format issues in chart data
  const dataArrayRegex = /data=\{(\[[\s\S]*?\])\}/g;
  const dataMatches = content.match(dataArrayRegex);
  
  if (dataMatches) {
    dataMatches.forEach(match => {
      try {
        // Try to extract and validate data structure
        const dataString = match.replace('data={', '').replace('}', '');
        const data = eval(dataString); // Note: This is for validation only, not execution
        
        if (Array.isArray(data)) {
          data.forEach((item, index) => {
            if (typeof item !== 'object' || typeof item.name !== 'string' || typeof item.value !== 'number') {
              issues.push(`Invalid chart data format at index ${index}: requires {name: string, value: number}`);
            }
          });
        }
      } catch (error) {
        issues.push('Invalid chart data syntax');
      }
    });
  }

  return {
    valid: issues.length === 0,
    issues
  };
}

/**
 * Utility to check if a presentation exists
 */
export function presentationExists(slug: string): boolean {
  try {
    const presentationsDir = join(process.cwd(), 'presentations');
    const filePath = join(presentationsDir, `${slug}.mdx`);
    const fs = require('fs');
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}