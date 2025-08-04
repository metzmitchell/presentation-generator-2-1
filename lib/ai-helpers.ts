/**
 * AI Generation Utilities
 * 
 * Helper functions and templates for AI-powered presentation generation
 * Optimized for single-prompt MDX outline to complete presentation conversion
 */

import { ChartData, MetricData, TimelineItem } from './types';

// Template structures for AI generation
export interface PresentationTemplate {
  type: 'business-results' | 'product-demo' | 'quarterly-review' | 'market-analysis' | 'case-study' | 'educational-content';
  structure: ComponentStructure[];
  suggestedComponents: string[];
  dataRequirements: DataRequirement[];
}

export interface ComponentStructure {
  component: string;
  purpose: string;
  requiredProps: string[];
  optionalProps: string[];
  example: string;
}

export interface DataRequirement {
  type: 'chart' | 'metrics' | 'timeline' | 'images';
  format: string;
  example: any;
  validation: string;
}

/**
 * Presentation templates for different use cases
 */
export const presentationTemplates: Record<string, PresentationTemplate> = {
  'business-results': {
    type: 'business-results',
    structure: [
      {
        component: 'Hero',
        purpose: 'Opening impact with key headline metric',
        requiredProps: ['title'],
        optionalProps: ['subtitle', 'highlight', 'highlightLabel', 'layout'],
        example: '<Hero title="Q4 2024 Results" highlight="34%" highlightLabel="Growth" />'
      },
      {
        component: 'MetricGrid',
        purpose: 'Key performance indicators overview',
        requiredProps: ['metrics'],
        optionalProps: ['columns'],
        example: '<MetricGrid metrics={[{label: "Revenue", value: 2.4, unit: "M", change: 34}]} />'
      },
      {
        component: 'ChartSection',
        purpose: 'Main performance visualization with narrative',
        requiredProps: ['title', 'type', 'data'],
        optionalProps: ['colorScheme', 'layout', 'children'],
        example: '<ChartSection title="Revenue Growth" type="line" data={[{name: "Q1", value: 1.2}]} />'
      },
      {
        component: 'CalloutBox',
        purpose: 'Key achievements and insights',
        requiredProps: ['emphasis', 'children'],
        optionalProps: [],
        example: '<CalloutBox emphasis="success">🎯 Key Achievement: Record growth</CalloutBox>'
      }
    ],
    suggestedComponents: ['Hero', 'MetricGrid', 'ChartSection', 'CalloutBox', 'Section'],
    dataRequirements: [
      {
        type: 'metrics',
        format: '{label: string, value: number, unit?: string, change?: number}[]',
        example: [{label: "Revenue", value: 2.4, unit: "M", change: 34}],
        validation: 'Must include label and value, optional unit and change percentage'
      },
      {
        type: 'chart',
        format: '{name: string, value: number}[]',
        example: [{name: "Q1", value: 1.2}, {name: "Q2", value: 1.8}],
        validation: 'Each item must have name (string) and value (number)'
      }
    ]
  },

  'product-demo': {
    type: 'product-demo',
    structure: [
      {
        component: 'Hero',
        purpose: 'Product introduction and value proposition',
        requiredProps: ['title'],
        optionalProps: ['subtitle', 'highlight', 'highlightLabel'],
        example: '<Hero title="Product Demo" subtitle="Revolutionary solution" />'
      },
      {
        component: 'ImageGallery',
        purpose: 'Product screenshots and visual examples',
        requiredProps: ['images'],
        optionalProps: ['layout'],
        example: '<ImageGallery images={[{src: "/demo.jpg", alt: "Product demo"}]} />'
      },
      {
        component: 'Timeline',
        purpose: 'Implementation process or user journey',
        requiredProps: ['items'],
        optionalProps: ['orientation'],
        example: '<Timeline items={[{title: "Setup", description: "Easy installation"}]} />'
      },
      {
        component: 'MetricGrid',
        purpose: 'Key benefits and results',
        requiredProps: ['metrics'],
        optionalProps: ['columns'],
        example: '<MetricGrid metrics={[{label: "Time Saved", value: 75, unit: "%"}]} />'
      }
    ],
    suggestedComponents: ['Hero', 'ImageGallery', 'Timeline', 'MetricGrid', 'CalloutBox'],
    dataRequirements: [
      {
        type: 'images',
        format: '{src: string, alt: string, caption?: string}[]',
        example: [{src: "/demo.jpg", alt: "Product demo", caption: "Main interface"}],
        validation: 'Must include src and alt, optional caption'
      },
      {
        type: 'timeline',
        format: '{title: string, description?: string, status?: string}[]',
        example: [{title: "Setup", description: "Easy installation", status: "completed"}],
        validation: 'Must include title, optional description and status'
      }
    ]
  },

  'quarterly-review': {
    type: 'quarterly-review',
    structure: [
      {
        component: 'Hero',
        purpose: 'Quarter overview with key metric',
        requiredProps: ['title'],
        optionalProps: ['subtitle', 'highlight', 'highlightLabel'],
        example: '<Hero title="Q4 2024 Review" highlight="Record Quarter" />'
      },
      {
        component: 'MetricGrid',
        purpose: 'Quarterly performance metrics',
        requiredProps: ['metrics'],
        optionalProps: ['columns'],
        example: '<MetricGrid metrics={[{label: "Revenue", value: 2.4, change: 15}]} />'
      },
      {
        component: 'ChartSection',
        purpose: 'Quarterly trends and analysis',
        requiredProps: ['title', 'type', 'data'],
        optionalProps: ['colorScheme', 'layout'],
        example: '<ChartSection title="Quarterly Growth" type="bar" data={[...]} />'
      },
      {
        component: 'Timeline',
        purpose: 'Key milestones and achievements',
        requiredProps: ['items'],
        optionalProps: ['orientation'],
        example: '<Timeline items={[{title: "Product Launch", date: "Q4"}]} />'
      }
    ],
    suggestedComponents: ['Hero', 'MetricGrid', 'ChartSection', 'Timeline', 'CalloutBox', 'Section'],
    dataRequirements: [
      {
        type: 'metrics',
        format: '{label: string, value: number, unit?: string, change?: number}[]',
        example: [{label: "Revenue", value: 2.4, unit: "M", change: 15}],
        validation: 'Include quarterly metrics with change percentages'
      },
      {
        type: 'chart',
        format: '{name: string, value: number}[]',
        example: [{name: "Q1", value: 100}, {name: "Q2", value: 120}],
        validation: 'Quarterly data points for trend analysis'
      }
    ]
  }
};

/**
 * Generates AI prompt template for presentation creation
 */
export function generateAIPrompt(
  presentationType: string,
  title: string,
  customRequirements?: string
): string {
  const template = presentationTemplates[presentationType];
  
  if (!template) {
    throw new Error(`Unknown presentation type: ${presentationType}`);
  }

  return `Generate a beautiful dark-themed presentation page from this outline:

**Presentation Type**: ${template.type}
**Title**: ${title}

**Required Components** (use these exact components):
${template.structure.map(comp => 
  `- **${comp.component}**: ${comp.purpose}\n  Props: ${comp.requiredProps.join(', ')}${comp.optionalProps.length > 0 ? ` (optional: ${comp.optionalProps.join(', ')})` : ''}\n  Example: ${comp.example}`
).join('\n\n')}

**Data Format Requirements**:
${template.dataRequirements.map(req => 
  `- **${req.type}**: ${req.format}\n  Example: ${JSON.stringify(req.example)}\n  Validation: ${req.validation}`
).join('\n\n')}

**Design Requirements**:
- Dark theme only: #0f1419 background, #ffffff text
- Use accent colors: #4a9eff (blue), #52c93f (green), #ff8c42 (orange), #ff5757 (red)
- All data must be inline (no external files)
- Follow exact TypeScript interfaces for component props
- Use layout options: full-width, centered, sidebar, text-chart, grid
- Apply visual emphasis: highlight, callout, success, warning, subtle
- Professional presentation quality for screen sharing

${customRequirements ? `**Custom Requirements**:\n${customRequirements}\n\n` : ''}

**Output Format**: 
Generate complete MDX file with:
1. Frontmatter (title, date, type)
2. All components with proper props
3. Inline data in correct format
4. Supporting narrative content
5. Professional styling and layout

Generate the complete Next.js presentation page now.`;
}

/**
 * Validates AI-generated content structure
 */
export function validateAIOutput(content: string): {
  valid: boolean;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];

  // Check for frontmatter
  if (!content.includes('---')) {
    issues.push('Missing frontmatter section');
    suggestions.push('Add frontmatter with title, date, and type fields');
  }

  // Check for required components
  const validComponents = ['Hero', 'MetricGrid', 'ChartSection', 'CalloutBox', 'ImageGallery', 'Timeline', 'Section'];
  const foundComponents = validComponents.filter(comp => content.includes(`<${comp}`));
  
  if (foundComponents.length === 0) {
    issues.push('No valid components found');
    suggestions.push('Add at least one component (Hero, MetricGrid, ChartSection, etc.)');
  }

  // Check for data format issues
  const dataMatches = content.match(/data=\{(\[[\s\S]*?\])\}/g);
  if (dataMatches) {
    dataMatches.forEach(match => {
      if (!match.includes('name:') || !match.includes('value:')) {
        issues.push('Invalid chart data format detected');
        suggestions.push('Use format: [{name: "string", value: number}]');
      }
    });
  }

  // Check for metrics format
  const metricsMatches = content.match(/metrics=\{(\[[\s\S]*?\])\}/g);
  if (metricsMatches) {
    metricsMatches.forEach(match => {
      if (!match.includes('label:') || !match.includes('value:')) {
        issues.push('Invalid metrics data format detected');
        suggestions.push('Use format: [{label: "string", value: number, unit?: "string", change?: number}]');
      }
    });
  }

  return {
    valid: issues.length === 0,
    issues,
    suggestions
  };
}

/**
 * Helper to format data for different chart types
 */
export function formatDataForChart(
  data: Array<{[key: string]: any}>,
  chartType: string
): ChartData[] {
  return data.map(item => {
    // Try to find name/label field
    const name = item.name || item.label || item.category || item.period || 'Unknown';
    
    // Try to find numeric value field
    const value = typeof item.value === 'number' ? item.value :
                 typeof item.amount === 'number' ? item.amount :
                 typeof item.count === 'number' ? item.count :
                 typeof item.revenue === 'number' ? item.revenue : 0;
    
    return { name: String(name), value: Number(value) };
  });
}

/**
 * Helper to format metrics data
 */
export function formatMetricsData(
  data: Array<{[key: string]: any}>
): MetricData[] {
  return data.map(item => {
    const metric: MetricData = {
      label: item.label || item.name || 'Metric',
      value: Number(item.value || item.amount || 0)
    };
    
    if (item.unit) metric.unit = String(item.unit);
    if (typeof item.change === 'number') metric.change = item.change;
    
    return metric;
  });
}

/**
 * Single-prompt template generator
 */
export const singlePromptTemplate = `
Generate a complete {{PRESENTATION_TYPE}} presentation page.

**Input MDX Outline:**
{{MDX_OUTLINE}}

**Requirements:**
- Use ONLY the 7 components: Hero, MetricGrid, ChartSection, CalloutBox, ImageGallery, Timeline, Section
- Dark theme only: #0f1419 background, #ffffff text, accent colors as specified
- All data must be inline (no external files)
- Follow exact TypeScript interfaces for all component props
- Chart data format: [{name: string, value: number}] only
- Metric data format: [{label: string, value: number, unit?: string, change?: number}]
- Professional presentation quality for screen sharing

**Output:** Complete MDX file with frontmatter and all components properly styled.
`;

/**
 * Export utility functions for easy access
 */
export const aiHelpers = {
  generateAIPrompt,
  validateAIOutput,
  formatDataForChart,
  formatMetricsData,
  presentationTemplates,
  singlePromptTemplate
};