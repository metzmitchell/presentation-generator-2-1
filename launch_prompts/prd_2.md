# Implementation Plan: AI-Reliable Visual Presentation Generator

## Executive Summary
- **Core Purpose**: Generate beautiful, dark-themed visual aid web pages for videos and meetings
- **Single-Prompt Generation**: Complete presentation pages from one MDX outline document
- **Visual-First Design**: Prioritize visual impact and professional appearance for screen sharing
- **AI Reliability**: Simple, predictable architecture that AI can generate consistently

## Core Principles

### 1. **Simplified Architecture**
- **Flat presentation structure** - `/presentations/filename.mdx` only
- **Single-prompt generation** - MDX outline → complete presentation page
- **Visual-first components** - Multiple specialized components for maximum visual impact
- **Dark theme only** - Optimized for screen sharing and video presentations

### 2. **MDX Outline-Based Generation**
- **User creates MDX outline** - Specifies components, layouts, and content
- **AI generates presentation** - Single prompt converts outline to beautiful page
- **Inline data only** - No external JSON files to manage
- **Component hints embedded** - `<Hero>`, `<MetricGrid>`, `<ChartSection>` etc.

### 3. **Project Structure**
```
/
├── presentations/              ← All presentation files (flat structure)
│   ├── q4-results.mdx
│   ├── market-analysis.mdx
│   └── product-demo.mdx
├── src/
│   ├── components/            ← Visual-first components
│   │   ├── Hero.tsx
│   │   ├── MetricGrid.tsx
│   │   ├── ChartSection.tsx
│   │   ├── CalloutBox.tsx
│   │   ├── ImageGallery.tsx
│   │   └── Timeline.tsx
│   └── styles/               ← Dark theme only
└── docs/
    └── component-guidelines.md  ← What you can request
```

### 4. **Generation Workflow**
```
1. Create MDX outline with component hints:
   <Hero title="Q4 Results" highlight="23% growth" />
   <ChartSection type="bar" data={[...]} />
   
2. Single prompt to AI:
   "Generate presentation page from this outline"
   
3. AI outputs complete presentation:
   - Beautiful dark-themed page
   - All components properly styled
   - Inline data included
   - Ready for screen sharing
```

### 5. **Component Guidelines Integration**
- **Reference document**: `/component_guidelines.md` contains comprehensive guidelines
- **What you can request**: Layouts, components, visual emphasis, chart types, color schemes
- **AI generation rules**: Components, data formats, styling patterns that AI must follow
- **Visual design standards**: Dark theme, typography, spacing, accessibility

### 6. **Visual-First Component Library**
**Core Components for Maximum Visual Impact**:
- **Hero** - Big impact opening with key metrics
- **MetricGrid** - Multiple metrics in beautiful cards
- **ChartSection** - Charts with supporting narrative
- **CalloutBox** - Highlighted insights and key points
- **ImageGallery** - Visual comparisons and examples
- **Timeline** - Process flows and chronological data
- **Section** - Flexible content with layout options

### 7. **Layout and Visual Control**
**Layout Options**:
- `full-width` - Spans entire screen width
- `centered` - Centered content with margins
- `sidebar` - Two-column with sidebar
- `text-chart` - Text alongside visualization
- `grid` - Multi-item grid layout

**Visual Emphasis**:
- `highlight` - Bright accent colors
- `callout` - Bordered emphasis boxes
- `success` - Green theme for positive metrics
- `warning` - Orange theme for attention items
- `subtle` - Muted styling for supporting content

### 8. **Chart and Data Visualization**
**Chart Types Available**:
- `bar` - Categorical comparisons
- `line` - Trends over time
- `pie` - Part-to-whole relationships
- `area` - Volume and cumulative data
- `scatter` - Correlation analysis
- `metric-cards` - Key performance indicators

**Color Schemes (Dark Theme)**:
- `primary` - Blue accent colors
- `success` - Green for positive metrics
- `warning` - Orange for attention items
- `error` - Red for negative indicators
- `neutral` - Gray for supporting data

## Example MDX Outline Structure
```mdx
---
title: "Q4 2024 Results"
date: "2024-12-31"
type: "business-presentation"
---

<Hero 
  title="Q4 2024 Performance" 
  subtitle="Record growth across all metrics"
  highlight="34%"
  highlightLabel="Revenue Growth"
/>

<MetricGrid 
  metrics={[
    {label: "Revenue", value: 2.4, unit: "M", change: 34},
    {label: "Users", value: 15.6, unit: "K", change: 28},
    {label: "Conversion", value: 4.2, unit: "%", change: 12}
  ]}
/>

<ChartSection 
  title="Monthly Revenue Growth"
  type="line"
  layout="text-chart"
  data={[
    {name: "Oct", value: 1.8},
    {name: "Nov", value: 2.1}, 
    {name: "Dec", value: 2.4}
  ]}
  colorScheme="success"
>
  Revenue accelerated throughout Q4, driven by strong customer acquisition and improved conversion rates.
</ChartSection>

<CalloutBox emphasis="highlight">
  🎯 **Key Achievement**: Exceeded annual revenue target by 15% with strongest Q4 in company history
</CalloutBox>
```

## AI Generation Process

### Input: Your MDX Outline
- **Component specifications**: Which components to use and how
- **Layout preferences**: How content should be arranged
- **Visual emphasis**: What to highlight and how
- **Data inline**: Charts and metrics embedded directly
- **Content structure**: Text, headings, and narrative flow

### Output: Complete Presentation Page
- **Dark-themed design**: Optimized for screen sharing
- **Professional styling**: Beautiful typography and spacing
- **Responsive layout**: Works on all screen sizes
- **Interactive elements**: Hover effects and smooth animations
- **Accessible design**: Proper contrast and semantic markup

### Single Prompt Template
```
Generate a beautiful dark-themed presentation page from this MDX outline:
[YOUR_MDX_OUTLINE]

Follow the component guidelines in /component_guidelines.md for:
- Component usage and props
- Layout and styling patterns  
- Dark theme color schemes
- Chart types and data formats
- Visual emphasis and hierarchy
```

## Part 1: Business Outcomes & Success Criteria

### 1.1 Core Business Outcomes
- **Single-Prompt Generation**: Complete presentation pages from one MDX outline document
- **Visual-First Design**: Beautiful, dark-themed pages optimized for video presentations and screen sharing
- **Zero Design Breaks**: Consistent, reliable visual output that never breaks layout or styling
- **AI Reliability**: Simple, predictable architecture enabling >95% generation success rate
- **Professional Quality**: Presentation-ready output suitable for business meetings and videos
- **Inline Data Management**: All data embedded directly, no external file dependencies
- **Component Flexibility**: Rich component library enabling diverse visual presentations

### 1.2 Success Metrics
- **Generation Success Rate**: >95% success rate for MDX outline → presentation conversion
- **Visual Quality**: Professional, presentation-ready output suitable for business use
- **Design Consistency**: Zero layout breaks, consistent dark theme application
- **Component Reliability**: All components render correctly with proper styling
- **Data Visualization**: Beautiful, accessible charts with proper contrast ratios
- **Performance**: Fast loading pages optimized for screen sharing
- **User Experience**: Intuitive outline creation with comprehensive component options

### 1.3 Non-Goals
- **No Multi-step Workflows**: Single prompt generation only, no complex analysis pipelines
- **No External Data Management**: Inline data only, no CSV/JSON file handling
- **No Content Management**: Simple file-based approach, no CMS or database
- **No Light Theme**: Dark theme only, optimized for screen sharing
- **No Authentication**: Static generation, no user management needed
- **No Complex Animations**: Simple, reliable interactions only
- **No Build-time Validation**: Runtime graceful degradation sufficient

## Part 2: Technical Architecture

### 2.1 Core Stack Decision
- **Next.js 14+**: App Router with static generation for reliability
- **Essential Components**: React, Next.js, shadcn/ui, recharts for visualizations
- **MDX Processing**: Native MDX support for outline-to-page generation
- **Dark Theme Only**: Tailwind CSS with custom dark color palette
- **TypeScript**: Full type safety for component props and data structures

### 2.2 Component Architecture
**Visual-First Component Library**:
```typescript
// Core presentation components
Hero, MetricGrid, ChartSection, CalloutBox, ImageGallery, Timeline, Section

// Layout options
layout: 'full-width' | 'centered' | 'sidebar' | 'text-chart' | 'grid'

// Visual emphasis
emphasis: 'highlight' | 'callout' | 'success' | 'warning' | 'subtle'

// Chart types
chartType: 'bar' | 'line' | 'pie' | 'area' | 'scatter' | 'metric-cards'
```

### 2.3 Data Flow
- **MDX Outline Input**: User creates outline with component hints
- **AI Processing**: Single prompt converts outline to complete page
- **Inline Data**: All chart data and metrics embedded directly
- **Component Rendering**: React components with proper TypeScript props
- **Static Generation**: Next.js builds to static HTML for reliability

## Part 3: AI-First Development Guidelines

### 3.1 Codebase Predictability

#### Simplified Directory Structure
```
/presentations/                     ← All presentation files (flat)
  q4-results.mdx                   ← User-created MDX outlines
  market-analysis.mdx              ← AI converts to presentation pages
  product-demo.mdx
/src/
  /components/                     ← Visual-first components
    Hero.tsx                       ← Big impact opening
    MetricGrid.tsx                 ← Multiple metrics display
    ChartSection.tsx               ← Charts with narrative
    CalloutBox.tsx                 ← Highlighted insights
    ImageGallery.tsx               ← Visual comparisons
    Timeline.tsx                   ← Process flows
    Section.tsx                    ← Flexible content
  /styles/
    globals.css                    ← Dark theme styles
/docs/
  component-guidelines.md          ← What you can request
```

#### File Naming Conventions
```typescript
// Presentation files: descriptive-kebab-case.mdx
"q4-results.mdx"
"market-analysis-jan.mdx"
"product-demo.mdx"
"quarterly-review.mdx"
"sales-presentation.mdx"

// Component files: PascalCase.tsx
"Hero.tsx"
"MetricGrid.tsx"
"ChartSection.tsx"
"CalloutBox.tsx"
"ImageGallery.tsx"
```

#### Component Interface Patterns
```typescript
// Visual-first component library
interface HeroProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  highlightLabel?: string;
  layout?: 'full-width' | 'centered';
}

interface MetricGridProps {
  metrics: Array<{
    label: string;
    value: number;
    unit?: string;
    change?: number;
  }>;
  columns?: 2 | 3 | 4;
}

interface ChartSectionProps {
  title: string;
  type: 'bar' | 'line' | 'pie' | 'area' | 'scatter';
  data: Array<{name: string; value: number}>;
  colorScheme?: 'primary' | 'success' | 'warning';
  layout?: 'text-chart' | 'full-width';
  children?: string; // Supporting narrative
}

interface CalloutBoxProps {
  emphasis: 'highlight' | 'callout' | 'success' | 'warning';
  children: string;
}
```

### 3.2 AI Context Optimization

#### Comprehensive Code Comments (AI-Friendly)
```typescript
/**
 * AI GENERATION RULES: Visual-First Components
 * 
 * CORE PRINCIPLE: Prioritize visual impact for presentation use
 * 
 * AVAILABLE COMPONENTS:
 * - Hero: Big impact opening with key metrics
 * - MetricGrid: Multiple metrics in beautiful cards
 * - ChartSection: Charts with supporting narrative
 * - CalloutBox: Highlighted insights and key points
 * - ImageGallery: Visual comparisons and examples
 * - Timeline: Process flows and chronological data
 * - Section: Flexible content with layout options
 * 
 * DARK THEME ONLY:
 * - All components use dark background (#0f1419)
 * - White text (#ffffff) for primary content
 * - Blue (#4a9eff), green (#52c93f), orange (#ff8c42) accents
 * - High contrast ratios for accessibility
 * 
 * LAYOUT OPTIONS:
 * - full-width: Spans entire screen width
 * - centered: Centered content with margins
 * - sidebar: Two-column layout
 * - text-chart: Text alongside visualization
 * - grid: Multi-item grid layout
 */

// Example component usage in generated MDX:
// <Hero title="Q4 Results" highlight="34%" highlightLabel="Growth" />
// <ChartSection type="bar" data={[...]} colorScheme="success" />

/**
 * COMPONENT GUIDELINES REFERENCE
 * 
 * The complete component guidelines are documented in:
 * /docs/component-guidelines.md
 * 
 * This document contains:
 * - All available components and their props
 * - Layout and styling options
 * - Visual emphasis patterns
 * - Chart types and color schemes
 * - What you can request in your MDX outline
 * - AI generation rules and constraints
 * 
 * QUICK REFERENCE:
 * Components: Hero, MetricGrid, ChartSection, CalloutBox, ImageGallery, Timeline, Section
 * Layouts: full-width, centered, sidebar, text-chart, grid
 * Emphasis: highlight, callout, success, warning, subtle
 * Charts: bar, line, pie, area, scatter, metric-cards
 * Colors: primary (blue), success (green), warning (orange), error (red)
 */

// AI: Always reference component-guidelines.md for complete specifications
// AI: Follow dark theme patterns consistently
// AI: Prioritize visual impact and presentation quality
```

#### Self-Documenting Structures
```typescript
// AI: Use these design patterns for visual-first presentations
export const presentationDesignSystem = {
  // Dark theme color palette (required)
  colors: {
    background: '#0f1419',     // Main background
    card: '#1a1f29',          // Card backgrounds
    text: '#ffffff',          // Primary text
    accent: {
      blue: '#4a9eff',        // Primary accent
      green: '#52c93f',       // Success/positive
      orange: '#ff8c42',      // Warning/attention
      red: '#ff5757',         // Error/negative
    }
  },

  // Component types for presentations
  components: {
    Hero: 'Big impact opening with key metrics',
    MetricGrid: 'Multiple metrics in cards',
    ChartSection: 'Data visualization with narrative',
    CalloutBox: 'Highlighted insights',
    ImageGallery: 'Visual comparisons',
    Timeline: 'Process flows and chronology',
    Section: 'Flexible content container'
  },

  // Chart types optimized for presentations
  chartTypes: {
    bar: 'Categorical comparisons, rankings',
    line: 'Trends over time, growth patterns',
    pie: 'Part-to-whole relationships',
    area: 'Volume and cumulative data',
    scatter: 'Correlation analysis',
    'metric-cards': 'Key performance indicators'
  },

  // Layout patterns for visual impact
  layouts: {
    'full-width': 'Maximum visual impact, spans screen',
    'centered': 'Focused content with breathing room',
    'sidebar': 'Two-column with supporting content',
    'text-chart': 'Narrative alongside visualization',
    'grid': 'Multi-item organized display'
  }
};

// AI: Use these data structures for inline data (no external files)
export interface ChartData {
  name: string;         // Display label (required)
  value: number;        // Numeric value (required)
}

export interface MetricData {
  label: string;        // Metric name
  value: number;        // Current value
  unit?: string;        // Unit (%, $, K, M, etc.)
  change?: number;      // Change percentage
}

export interface TimelineItem {
  title: string;        // Step title
  description?: string; // Step description
  date?: string;        // Optional date
  status?: 'completed' | 'current' | 'upcoming';
}
```

#### MDX Outline Processing Guidelines (AI Reference)
```typescript
// AI: Use these guidelines when converting MDX outlines to presentations
export const mdxOutlineGuidelines = {
  // 1. RESPECT THE COMPONENT HINTS
  components: {
    rule: "Use the exact components specified in the MDX outline",
    action: "Convert <Hero>, <MetricGrid>, etc. to properly styled components",
    example: "<Hero title='Q4 Results' /> becomes a full Hero component with dark theme styling"
  },

  // 2. APPLY VISUAL-FIRST DESIGN
  visual: {
    rule: "Prioritize visual impact for presentation use",
    patterns: {
      "opening": "Hero component with key metrics and visual emphasis",
      "data": "ChartSection or MetricGrid with beautiful visualizations",
      "insights": "CalloutBox with highlighted key points",
      "content": "Section component with appropriate layout",
      "process": "Timeline component for sequential information"
    }
  },

  // 3. MAINTAIN DARK THEME CONSISTENCY
  styling: {
    rule: "Apply dark theme consistently across all components",
    patterns: {
      "backgrounds": "Dark backgrounds (#0f1419, #1a1f29)",
      "text": "White text (#ffffff) for primary content",
      "accents": "Blue, green, orange accents for emphasis",
      "charts": "Dark-themed charts with proper contrast"
    }
  },

  // 4. INLINE DATA PROCESSING
  data: {
    rule: "Process all data inline, no external file references",
    patterns: {
      "charts": "Convert data arrays to {name: string, value: number} format",
      "metrics": "Process metrics with label, value, unit, change properties",
      "timeline": "Structure timeline items with title, description, status"
    }
  }
};

// AI: Example of processing MDX outline
export const mdxOutlineExample = {
  userMDXOutline: `
    <Hero title="Q4 Results" highlight="34%" highlightLabel="Growth" />
    <MetricGrid metrics={[...]} />
    <ChartSection type="line" data={[...]} colorScheme="success" />
    <CalloutBox emphasis="highlight">Key achievement text</CalloutBox>
  `,
  
  generatedPresentation: {
    // Convert components to fully styled presentation
    components: [
      "Hero with dark theme, large typography, key metrics display",
      "MetricGrid with cards, proper spacing, visual emphasis",
      "ChartSection with green accent, supporting narrative, proper layout",
      "CalloutBox with highlighted styling, proper contrast"
    ],
    
    // Apply consistent dark theme styling
    styling: {
      background: "Dark (#0f1419) with card sections (#1a1f29)",
      typography: "White text with proper hierarchy",
      accents: "Success green for positive metrics",
      layout: "Responsive, presentation-optimized spacing"
    }
  }
};
```

```mdx
---
title: "{{USER_PROVIDED_TITLE}}"
date: "{{USER_PROVIDED_DATE}}"
type: "{{PRESENTATION_TYPE}}"
---

<!-- AI: Convert the user's MDX outline to a beautiful dark-themed presentation -->
<!-- AI: Use visual-first components for maximum presentation impact -->
<!-- AI: Apply dark theme consistently (#0f1419 background, white text) -->
<!-- AI: Process all data inline, no external file references -->

<Hero 
  title="{{FROM_USER_OUTLINE}}"
  subtitle="{{FROM_USER_OUTLINE}}"
  highlight="{{FROM_USER_OUTLINE}}"
  highlightLabel="{{FROM_USER_OUTLINE}}"
  layout="{{USER_SPECIFIED_OR_DEFAULT}}"
/>

<MetricGrid 
  metrics={{{CONVERT_USER_DATA_TO_PROPER_FORMAT}}}
  columns={{USER_SPECIFIED_OR_DEFAULT}}
/>

<ChartSection 
  title="{{FROM_USER_OUTLINE}}"
  type="{{USER_SPECIFIED_CHART_TYPE}}"
  data={{{CONVERT_TO_NAME_VALUE_FORMAT}}}
  colorScheme="{{USER_SPECIFIED_OR_PRIMARY}}"
  layout="{{USER_SPECIFIED_OR_TEXT_CHART}}"
>
  {{USER_PROVIDED_NARRATIVE_CONTENT}}
</ChartSection>

<CalloutBox emphasis="{{USER_SPECIFIED_EMPHASIS}}">
  {{USER_PROVIDED_CALLOUT_TEXT}}
</CalloutBox>

<!-- AI: Continue processing all components from user's MDX outline -->
<!-- AI: Maintain visual consistency and dark theme throughout -->
```

### 3.3 Runtime Reliability

#### Graceful Degradation (No Build-Time Validation)
```typescript
// AI: Use graceful degradation for reliability
// No complex Zod validation - simple runtime checks

// Simple frontmatter validation
export const validateFrontmatter = (frontmatter: any) => {
  return {
    title: frontmatter?.title || 'Untitled Presentation',
    date: frontmatter?.date || new Date().toISOString().split('T')[0],
    type: frontmatter?.type || 'presentation'
  };
};

// Simple chart data validation
export const validateChartData = (data: any[]): ChartData[] => {
  if (!Array.isArray(data)) return [];
  
  return data.filter(item => 
    typeof item?.name === 'string' && 
    typeof item?.value === 'number'
  ).map(item => ({
    name: item.name,
    value: item.value
  }));
};

// Simple metric validation
export const validateMetrics = (metrics: any[]): MetricData[] => {
  if (!Array.isArray(metrics)) return [];
  
  return metrics.filter(metric =>
    typeof metric?.label === 'string' &&
    typeof metric?.value === 'number'
  ).map(metric => ({
    label: metric.label,
    value: metric.value,
    unit: metric.unit || '',
    change: typeof metric.change === 'number' ? metric.change : undefined
  }));
};
```

#### Beautiful Dark-Themed Fallbacks
```typescript
// AI: Use these dark-themed fallback components
export const ChartPlaceholder: React.FC<{ type: string }> = ({ type }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'bar': return '📊';
      case 'line': return '📈';
      case 'pie': return '🥧';
      case 'area': return '📊';
      default: return '📊';
    }
  };

  return (
    <div className="w-full bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center p-12">
      <div className="text-center space-y-4">
        <div className="text-4xl mb-4">{getIcon(type)}</div>
        <div className="text-white font-medium">Chart Unavailable</div>
        <div className="text-sm text-gray-400">Type: {type}</div>
      </div>
    </div>
  );
};

export const MetricPlaceholder: React.FC = () => (
  <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
    <div className="text-center space-y-2">
      <div className="text-2xl mb-2">📊</div>
      <div className="text-white font-medium">Metric Unavailable</div>
      <div className="text-sm text-gray-400">Check data format</div>
    </div>
  </div>
);

// AI: Simple error boundary with dark theme
export const PresentationErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <div className="text-4xl mb-4">⚠️</div>
          <div className="text-white font-medium text-xl">Presentation Error</div>
          <div className="text-gray-400">Please check your MDX outline format</div>
        </div>
      </div>
    );
  }
};
```

#### Development Helpers (Optional)
```typescript
// AI: Simple development helpers (no build-time validation required)
// scripts/check-presentations.ts
import { glob } from 'glob';
import { readFileSync } from 'fs';

export const checkPresentations = async () => {
  const mdxFiles = await glob('presentations/**/*.mdx');
  const stats = {
    total: mdxFiles.length,
    withFrontmatter: 0,
    withComponents: 0
  };

  for (const file of mdxFiles) {
    try {
      const content = readFileSync(file, 'utf-8');
      
      // Check for frontmatter
      if (content.includes('---')) {
        stats.withFrontmatter++;
      }
      
      // Check for components
      if (content.includes('<Hero') || content.includes('<Chart') || content.includes('<Metric')) {
        stats.withComponents++;
      }
    } catch (error) {
      console.warn(`Could not read ${file}`);
    }
  }

  console.log('Presentation files:', stats);
  return stats;
};

// AI: Use this to preview component usage
export const listComponentUsage = async () => {
  const mdxFiles = await glob('presentations/**/*.mdx');
  const components = new Set();
  
  for (const file of mdxFiles) {
    const content = readFileSync(file, 'utf-8');
    const matches = content.match(/<(\w+)/g);
    if (matches) {
      matches.forEach(match => components.add(match.slice(1)));
    }
  }
  
  console.log('Components used:', Array.from(components));
};
```

### 3.4 Single-Prompt Architecture

### 3.5 AI Maintenance & Codebase Optimization

#### CRITICAL: Codebase Maintenance Rules (AI-Enforced)
```typescript
// AI: ALWAYS follow these rules when modifying the codebase
export const codebaseMaintenanceRules = {
  // 1. SEARCH BEFORE ADDING - Always search existing code first
  searchFirst: {
    rule: "Before adding ANY new component, function, or feature, search the entire codebase",
    action: "Use grep_search or codebase_search to find existing implementations",
    examples: [
      "Search for 'chart' before creating new chart components",
      "Search for 'validation' before adding new Zod schemas", 
      "Search for 'layout' before creating new layout patterns"
    ]
  },

  // 2. REFACTOR INSTEAD OF DUPLICATE - Never duplicate code
  noDuplication: {
    rule: "If similar functionality exists, refactor existing code instead of creating new",
    action: "Extend existing components with props/options rather than creating new ones",
    examples: [
      "Extend DataVisualization with new types instead of creating separate components",
      "Add options to ContentSection instead of creating new section types",
      "Extend validation schemas instead of creating new ones"
    ]
  },

  // 3. KEEP IT SIMPLE - Prefer simple solutions over complex ones
  simplicity: {
    rule: "Always choose the simplest solution that works",
    action: "Use existing patterns and avoid over-engineering",
    examples: [
      "Use existing ColorScheme enum instead of creating custom colors",
      "Use existing layout patterns instead of creating new layouts",
      "Use existing validation patterns instead of complex custom validation"
    ]
  },

  // 4. MAINTAIN CONSISTENCY - Follow established patterns
  consistency: {
    rule: "Always follow established naming conventions and patterns",
    action: "Use existing enums, interfaces, and component patterns",
    examples: [
      "Use existing VisualizationType enum for new visualizations",
      "Follow existing component naming patterns (PascalCase.tsx)",
      "Use existing validation patterns with Zod schemas"
    ]
  }
};

// AI: Use this checklist before making ANY changes
export const preChangeChecklist = async (changeDescription: string) => {
  console.log('🔍 PRE-CHANGE CHECKLIST:');
  
  // 1. Search for existing implementations
  console.log('1. Searching for existing similar functionality...');
  // await searchCodebase(changeDescription);
  
  // 2. Check if change can be achieved by extending existing code
  console.log('2. Checking if existing code can be extended...');
  
  // 3. Verify the change follows established patterns
  console.log('3. Verifying consistency with existing patterns...');
  
  // 4. Confirm the change is the simplest solution
  console.log('4. Confirming this is the simplest approach...');
  
  console.log('✅ Checklist complete - proceed with change');
};
```

#### Feature Addition Guidelines (AI-Enforced)
```typescript
// AI: When adding new features, follow this exact process
export const featureAdditionProcess = {
  step1: {
    task: "Search existing codebase for similar functionality",
    action: "Use codebase_search to find existing implementations",
    success: "Found existing code that can be extended"
  },
  
  step2: {
    task: "Extend existing components/patterns instead of creating new",
    action: "Add props, options, or types to existing components",
    success: "Extended existing code rather than duplicating"
  },
  
  step3: {
    task: "Update validation schemas to include new options",
    action: "Extend existing Zod schemas with new fields",
    success: "Validation covers new functionality"
  },
  
  step4: {
    task: "Update documentation and examples",
    action: "Add new examples to existing templates",
    success: "Documentation reflects new capabilities"
  },
  
  step5: {
    task: "Test with existing validation",
    action: "Run existing validation scripts",
    success: "All tests pass with new functionality"
  }
};

// AI: Example of extending existing code instead of creating new
export const extendExistingExample = {
  // ❌ DON'T: Create new component
  // const NewChartComponent = () => { ... }
  
  // ✅ DO: Extend existing component
  const extendedVisualizationConfig = {
    ...existingVisualizationConfig,
    newType: 'new-visualization-type',
    newOptions: {
      // New options that work with existing patterns
    }
  };
  
  // ✅ DO: Extend existing enum
  export enum VisualizationType {
    ...existingTypes,
    NEW_TYPE = 'new-type'  // Add to existing enum
  }
};
```

#### Content Type Extension Process (AI-Enforced)
```typescript
// AI: When adding new content types, follow this process
export const contentTypeExtensionProcess = {
  step1: {
    task: "Check if existing content type can be adapted",
    action: "Review existing content types and see if they can handle the new use case",
    example: "Instead of 'product-demo', maybe 'case-study' can be adapted"
  },
  
  step2: {
    task: "Extend existing validation schemas",
    action: "Add new content type to existing frontmatterSchema enum",
    code: `
      type: z.enum([
        'kpi-report', 
        'market-research', 
        'lead-magnet', 
        'product-demo', 
        'case-study', 
        'educational-content',
        'content-presentation',
        'new-content-type'  // Add here
      ])
    `
  },
  
  step3: {
    task: "Create example template using existing patterns",
    action: "Use existing component patterns and layout structures",
    example: "Use existing HeroSection, ContentSection, and DataVisualization components"
  },
  
  step4: {
    task: "Update documentation with new example",
    action: "Add new template to the example templates section",
    success: "New content type follows all existing patterns"
  }
};
```

#### Codebase Optimization Commands (AI-Enforced)
```typescript
// AI: Run these commands regularly to keep codebase lean
export const optimizationCommands = {
  // Check for duplicate code
  findDuplicates: "grep -r 'export const' src/ | sort | uniq -d",
  
  // Check for unused components
  findUnused: "npx ts-unused-exports tsconfig.json",
  
  // Check bundle size
  checkBundle: "npm run build && npm run analyze",
  
  // Validate all content
  validateContent: "npm run validate-content",
  
  // Run all tests
  runTests: "npm run test && npm run test:visual"
};

// AI: Use this function to analyze codebase before changes
export const analyzeCodebase = async () => {
  console.log('🔍 ANALYZING CODEBASE:');
  
  // 1. Check for existing similar functionality
  // 2. Identify opportunities to extend existing code
  // 3. Find potential code duplication
  // 4. Verify consistency with established patterns
  
  console.log('✅ Analysis complete - proceed with optimal approach');
};
```

#### Template Structure (AI-Fillable)
```typescript
// AI: Use this exact template structure for all pages
export interface PageTemplate {
  metadata: {
    title: string;
    date: string;
    type: 'monthly-kpi' | 'market-research' | 'lead-magnet';
    sections: string[];
  };
  content: {
    hero: HeroContent;
    sections: SectionContent[];
    charts: ChartContent[];
  };
  data: {
    files: string[];  // JSON data file paths
    charts: ChartConfig[];
  };
}

// AI: Fill these content structures
export interface HeroContent {
  title: string;
  subtitle: string;
  highlightValue: number;
  highlightLabel: string;
  backgroundImage?: string;
}

export interface SectionContent {
  title: string;
  content: string;  // Markdown content
  dataTable?: DataTableConfig;
}

export interface ChartContent {
  type: ChartType;
  title: string;
  subtitle?: string;
  dataFile: string;
  colors: ColorScheme;
}
```

#### Variable Placeholders (AI-Replaceable)
```mdx
---
title: "{{MONTH}} {{YEAR}} KPI Report"
date: "{{DATE}}"
type: "monthly-kpi"
sections:
  - hero
  - overview
  - sales-analysis
  - traffic-analysis
  - conclusions
charts:
  - type: "{{CHART_TYPE_1}}"
    data: "{{DATA_FILE_1}}"
    title: "{{CHART_TITLE_1}}"
  - type: "{{CHART_TYPE_2}}"
    data: "{{DATA_FILE_2}}"
    title: "{{CHART_TITLE_2}}"
---

# {{MONTH}} {{YEAR}} KPI Report

<HeroSection 
  title="{{HERO_TITLE}}"
  subtitle="{{HERO_SUBTITLE}}"
  highlightValue={{HIGHLIGHT_VALUE}}
  highlightLabel="{{HIGHLIGHT_LABEL}}"
/>

<ContentSection title="{{SECTION_1_TITLE}}">
  {{SECTION_1_CONTENT}}
  <SalesChart data={{{CHART_1_DATA}}} month="{{MONTH_YEAR}}" />
</ContentSection>

<ContentSection title="{{SECTION_2_TITLE}}">
  {{SECTION_2_CONTENT}}
  <TrafficChart data={{{CHART_2_DATA}}} month="{{MONTH_YEAR}}" />
</ContentSection>
```

#### Generation Workflow (Step-by-Step)
```typescript
// AI: Follow this exact workflow for content generation
export const generatePage = async (prompt: string, data: any) => {
  // Step 1: Validate input data
  const validatedData = inputDataSchema.safeParse(data);
  if (!validatedData.success) {
    throw new Error('Input data validation failed');
  }

  // Step 2: Generate content structure
  const contentStructure = await generateContentStructure(prompt, validatedData.data);
  
  // Step 3: Validate content structure
  const validatedStructure = pageTemplateSchema.safeParse(contentStructure);
  if (!validatedStructure.success) {
    throw new Error('Content structure validation failed');
  }

  // Step 4: Generate MDX content
  const mdxContent = await generateMDXContent(validatedStructure.data);
  
  // Step 5: Validate MDX syntax
  const mdxValidation = await validateMDX(mdxContent);
  if (!mdxValidation.valid) {
    throw new Error('MDX validation failed');
  }

  // Step 6: Write files
  await writeContentFiles(validatedStructure.data, mdxContent);
  
  // Step 7: Run build validation
  await validateAllContent();
  
  return {
    success: true,
    files: validatedStructure.data.data.files,
    charts: validatedStructure.data.data.charts
  };
};
```

#### AI Prompt Template (Single-Prompt)
```typescript
// AI: Use this exact prompt structure for any content type
export const singlePromptTemplate = `
Generate a complete {{CONTENT_TYPE}} presentation page.

CONTENT TYPE: {{CONTENT_TYPE}}
TITLE: {{CONTENT_TITLE}}
DATE: {{DATE}}

REQUIRED DATA:
{{DATA_REQUIREMENTS}}

REQUIRED SECTIONS:
{{SECTION_REQUIREMENTS}}

VISUALIZATION REQUIREMENTS:
{{VIZ_REQUIREMENTS}}

DESIGN CONSTRAINTS:
- Use only predefined visualization types: chart, image, video, interactive, gallery
- Use only predefined chart types: line, bar, pie, area, scatter, radar
- Use only predefined color schemes: sales, traffic, conversion, success, warning, error
- Use only predefined layout types: text-only, text-image, text-chart, full-width, sidebar, grid
- Prioritize visual design and user experience
- Ensure proper spacing, typography hierarchy, and visual balance
- Use shadcn/ui components for consistent styling
- Support responsive design patterns

OUTPUT FORMAT:
Generate the complete MDX file with frontmatter and all sections.
Include all visualization components with proper data references.
Ensure all validation schemas pass.
Create beautiful, engaging content that prioritizes visual storytelling.

VALIDATION:
- Frontmatter must match frontmatterSchema
- Visualization configs must match visualizationConfigSchema
- All data files must exist and be valid JSON
- MDX syntax must be valid
- Design must be visually appealing and accessible
`;

// AI: Use these as flexible guidelines, not rigid templates
export const contentGuidelines = {
  // General approach - adapt to user's needs
  approach: "Follow the user's outline and adapt components to content",
  
  // Suggested patterns (not required)
  patterns: {
    'data-heavy': "Consider charts and visualizations",
    'story-focused': "Consider images and narrative flow", 
    'interactive': "Consider demos and interactive elements",
    'educational': "Consider examples and practice sections"
  }
};

### 3.6 UI Design Excellence

#### Visual Design Principles (AI-Enforced)
```typescript
// AI: Always follow these design principles for great UI
export const designPrinciples = {
  // Typography Hierarchy
  typography: {
    h1: 'text-4xl md:text-5xl font-bold text-gray-900',
    h2: 'text-3xl font-bold text-gray-900',
    h3: 'text-2xl font-semibold text-gray-800',
    body: 'text-lg text-gray-700 leading-relaxed',
    caption: 'text-sm text-gray-500'
  },

  // Spacing System
  spacing: {
    section: 'py-12 px-6',
    container: 'max-w-7xl mx-auto',
    gap: 'gap-8',
    padding: 'p-6 md:p-8'
  },

  // Color Palette (ADA Compliant)
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a'
    },
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      900: '#14532d'
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      900: '#78350f'
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      900: '#7f1d1d'
    }
  },

  // Component Styling
  components: {
    card: 'bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden',
    button: 'bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors',
    input: 'border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
  }
};

// AI: Use these desktop-first layout patterns for visual consistency
export const layoutPatterns = {
  hero: {
    fullWidth: 'min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-8 lg:px-6 md:px-4',
    contained: 'py-20 px-8 lg:px-6 md:px-4 text-center bg-white',
    withImage: 'grid grid-cols-2 lg:grid-cols-1 gap-12 items-center py-20 px-8 lg:px-6 md:px-4'
  },
  
  section: {
    default: 'py-12 px-8 lg:px-6 md:px-4 max-w-7xl mx-auto',
    fullWidth: 'py-12 px-8 lg:px-6 md:px-4',
    sidebar: 'grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 lg:gap-6 md:gap-4 py-12 px-8 lg:px-6 md:px-4 max-w-7xl mx-auto',
    grid: 'grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 lg:gap-6 md:gap-4 py-12 px-8 lg:px-6 md:px-4 max-w-7xl mx-auto'
  }
};
```

#### Responsive Design Patterns (AI-Enforced)
```typescript
// AI: Always implement desktop-first responsive design
export const responsivePatterns = {
  // Desktop-first approach (default styles)
  desktop: {
    text: 'text-xl',
    spacing: 'px-8 py-12',
    grid: 'grid-cols-3 gap-8',
    container: 'max-w-7xl mx-auto'
  },
  
  // Tablet breakpoint (down from desktop)
  tablet: {
    text: 'lg:text-lg',
    spacing: 'lg:px-6 lg:py-8',
    grid: 'lg:grid-cols-2 lg:gap-6'
  },
  
  // Mobile breakpoint (down from tablet)
  mobile: {
    text: 'md:text-base',
    spacing: 'md:px-4 md:py-6',
    grid: 'md:grid-cols-1 md:gap-4'
  }
};

// AI: Use these desktop-first responsive utilities
export const responsiveClasses = {
  container: 'w-full max-w-7xl mx-auto px-8 lg:px-6 md:px-4',
  text: 'text-xl lg:text-lg md:text-base',
  spacing: 'space-y-8 lg:space-y-6 md:space-y-4',
  grid: 'grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 lg:gap-6 md:gap-4'
};

// AI: Desktop-first layout patterns
export const desktopFirstLayouts = {
  hero: {
    fullWidth: 'min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-8 lg:px-6 md:px-4',
    contained: 'py-20 px-8 lg:px-6 md:px-4 text-center bg-white',
    withImage: 'grid grid-cols-2 lg:grid-cols-1 gap-12 items-center py-20 px-8 lg:px-6 md:px-4'
  },
  
  section: {
    default: 'py-12 px-8 lg:px-6 md:px-4 max-w-7xl mx-auto',
    fullWidth: 'py-12 px-8 lg:px-6 md:px-4',
    sidebar: 'grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 lg:gap-6 md:gap-4 py-12 px-8 lg:px-6 md:px-4 max-w-7xl mx-auto',
    grid: 'grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 lg:gap-6 md:gap-4 py-12 px-8 lg:px-6 md:px-4 max-w-7xl mx-auto'
  }
};
```

#### Animation and Interaction Guidelines (AI-Enforced)
```typescript
// AI: Use these animation patterns for smooth interactions
export const animationPatterns = {
  // Hover effects
  hover: {
    card: 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
    button: 'hover:scale-105 transition-transform duration-200',
    link: 'hover:text-blue-600 transition-colors duration-200'
  },
  
  // Page transitions
  page: {
    fadeIn: 'animate-in fade-in duration-500',
    slideUp: 'animate-in slide-in-from-bottom-4 duration-500',
    scaleIn: 'animate-in zoom-in-95 duration-300'
  },
  
  // Loading states
  loading: {
    skeleton: 'animate-pulse bg-gray-200 rounded',
    spinner: 'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600'
  }
};

// AI: Implement these interaction patterns
export const interactionPatterns = {
  // Smooth scrolling
  scroll: 'scroll-smooth',
  
  // Focus states
  focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  
  // Disabled states
  disabled: 'opacity-50 cursor-not-allowed'
};
```

## Part 4: Visual Design System

### 4.1 Design Tokens (Dark Theme)

#### Core Colors (Always Dark)
```typescript
// AI: Use these colors for all content - pre-tested for contrast
export const colors = {
  // Backgrounds
  bg: {
    page: '#0f1419',     // Main background
    card: '#1a1f29',     // Card/section backgrounds  
    surface: '#242b38',  // Elevated surfaces
  },
  
  // Text (all pass WCAG AA)
  text: {
    primary: '#ffffff',   // Main text
    secondary: '#b8c4d0', // Secondary text
    muted: '#8a96a3',     // Muted text
  },
  
  // Accents (for charts, buttons, highlights)
  accent: {
    blue: '#4a9eff',      // Primary
    green: '#52c93f',     // Success
    orange: '#ff8c42',    // Warning
    red: '#ff5757',       // Error
    purple: '#b084ff',    // Secondary
    yellow: '#ffcc33',    // Highlight
  },
  
  border: '#2d3748',      // Borders
} as const;

// AI: Safe text colors for each background
export const textColors = {
  'bg.page': 'text.primary',      // White text on dark
  'bg.card': 'text.primary',      // White text on cards
  'bg.surface': 'text.primary',   // White text on surfaces
  'accent.blue': 'text.primary',  // White text on blue
  'accent.green': 'text.primary', // White text on green
  'accent.orange': 'text.primary', // Dark text on orange
  'accent.red': 'text.primary',   // White text on red
  'accent.purple': 'text.primary', // White text on purple
  'accent.yellow': 'text.primary', // Dark text on yellow
} as const;
```

#### Typography
```typescript
// AI: Use these for consistent text hierarchy
export const text = {
  h1: 'text-5xl font-bold text-white',
  h2: 'text-4xl font-bold text-white', 
  h3: 'text-3xl font-semibold text-white',
  h4: 'text-2xl font-semibold text-white',
  body: 'text-lg text-white leading-relaxed',
  secondary: 'text-lg text-slate-300',
  caption: 'text-sm text-slate-400',
  link: 'text-blue-400 hover:text-blue-300 underline',
} as const;
```

#### Layout
```typescript
// AI: Use these for consistent spacing
export const layout = {
  section: 'py-16 px-8',
  container: 'max-w-7xl mx-auto',
  card: 'p-8 rounded-xl bg-card border border-border',
  gap: { xs: 'gap-2', sm: 'gap-4', md: 'gap-6', lg: 'gap-8', xl: 'gap-12' },
} as const;
```

### 4.2 Chart Components

#### Chart Colors
```typescript
// AI: Use these color schemes for charts
export const chartColors = {
  // Multi-series charts
  categorical: [
    colors.accent.blue,    // Primary
    colors.accent.green,   // Success  
    colors.accent.orange,  // Warning
    colors.accent.purple,  // Secondary
    colors.accent.red,     // Error
    colors.accent.yellow,  // Highlight
  ],
  
  // Single-series charts
  primary: [colors.accent.blue, '#3182ce', '#2c5aa0'],
  success: [colors.accent.green, '#38a169', '#2f7d32'],
  warning: [colors.accent.orange, '#ed8936', '#d69e2e'],
} as const;
```

#### Chart Types
```typescript
// AI: Use these chart types for different data
export const chartTypes = {
  line: 'Time series, trends over time',
  bar: 'Categorical comparisons, rankings', 
  pie: 'Parts of a whole, percentages',
  doughnut: 'Parts of a whole with center content',
  area: 'Cumulative data, volume over time',
} as const;

// AI: Basic chart config
export const chartConfig = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: colors.text.primary } },
    tooltip: { 
      backgroundColor: colors.bg.surface,
      titleColor: colors.text.primary,
      bodyColor: colors.text.secondary,
    },
  },
  scales: {
    x: { ticks: { color: colors.text.secondary }, grid: { color: colors.border } },
    y: { ticks: { color: colors.text.secondary }, grid: { color: colors.border } },
  },
} as const;
```

#### Usage Rules
```typescript
// AI: Simple rules for consistent design
export const rules = {
  backgrounds: 'Use colors.bg.* for page/card backgrounds',
  text: 'Use colors.text.* for text (all pass WCAG AA)',
  accents: 'Use colors.accent.* for charts, buttons, highlights',
  charts: 'Use chartColors.categorical for multi-series, chartColors.primary for single-series',
} as const;
```
- Responsive behavior

### 4.3 Animation Guidelines
- Performance-safe animations
- Fallback states
- User preferences

### 4.4 Visual Testing
- Screenshot regression setup
- Accessibility audits
- Cross-browser checks

## Part 5: Implementation Phases

### Phase 1: Foundation (Day 1)
- Project setup
- Core structure
- Basic routing

### Phase 2: Components (Day 2)
- Chart components
- Layout system
- MDX integration

### Phase 3: AI Integration (Day 3)
- Validation layer
- Template system
- Generation testing

### Phase 4: Polish (Day 4)
- Visual refinement
- Performance optimization
- Documentation

## Part 6: AI Reliability Checklist

### 6.1 Pre-Generation
- Environment setup
- Template validation
- Schema checks

### 6.2 Generation Process
- Step-by-step workflow
- Error handling
- Validation points

### 6.3 Post-Generation
- Build verification
- Visual regression
- Deployment checks

## Part 7: Maintenance & Operations

### 7.1 Monthly Workflow
- Content creation process
- Data integration steps
- Publishing checklist

### 7.2 Troubleshooting Guide
- Common AI issues
- Visual break fixes
- Performance debugging

### 7.3 Evolution Strategy
- Feature addition guidelines
- Complexity boundaries
- Migration paths

## Appendices

### A. Code Templates
- Monthly report template
- Chart component examples
- Validation schemas

### B. AI Prompt Templates
- Single-prompt structure
- Variable definitions
- Example outputs

### C. Testing Procedures
- Visual regression setup
- Accessibility testing
- Performance benchmarks

---

## Next Steps to Complete This Document

### Immediate Actions (Do First):
1. **Fill Section 1.1-1.3**: Extract specific outcomes from PRD_0.md and clarify success metrics
2. **Stack Decision Confirmed**: Next.js 14+ minimal with App Router for optimal AI generation
3. **Define Project Structure (2.2)**: Create exact folder hierarchy with examples

### Technical Details (Do Second):
4. **Complete Section 3**: Expand AI guidelines with specific code examples
5. **Design System (4.1-4.2)**: Define exact color codes, chart configs


6. **Write Validation Schemas**: Create Zod schemas for all data types

## Part 8: Zod Validation Implementation

### 8.1 Core Validation Schemas

#### KPI Data Validation (`/src/lib/validation/kpi-data.ts`)
```typescript
import { z } from 'zod';

// Step 1: Analysis Output Schema
export const analysisSchema = z.object({
  keyFindings: z.array(z.object({
    insight: z.string(),
    dataSource: z.string(), // file reference
    value: z.number(),
    trend: z.enum(['up', 'down', 'stable']).optional(),
  })),
  metrics: z.array(z.object({
    name: z.string(),
    currentValue: z.number(),
    previousValue: z.number().optional(),
    change: z.number().optional(),
    source: z.string(), // file reference
  })),
  recommendations: z.array(z.string()),
});

// Step 2: Outline Schema  
export const outlineSchema = z.object({
  sections: z.array(z.object({
    title: z.string(),
    type: z.enum(['executive', 'performance', 'analysis', 'recommendations']),
    dataPoints: z.array(z.object({
      label: z.string(),
      value: z.number(),
      source: z.string(),
      chartType: z.enum(['line', 'bar', 'pie']).optional(),
    })),
  })),
});

// Step 3: Presentation Schema
export const presentationSchema = z.object({
  title: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  sections: z.array(z.object({
    component: z.enum(['TitleSlide', 'ContentSlide', 'ChartSlide', 'BulletSlide']),
    data: z.record(z.any()), // Flexible for component-specific data
    chartData: z.array(z.object({
      name: z.string(),
      value: z.number(),
    })).optional(),
  })),
});
```

#### Validation Integration (`/src/lib/validation/validate-steps.ts`)
```typescript
import { analysisSchema, outlineSchema, presentationSchema } from './kpi-data';

export const validateStep1 = (analysisData: unknown) => {
  const result = analysisSchema.safeParse(analysisData);
  if (!result.success) {
    console.error('Step 1 validation failed:', result.error);
    return { valid: false, errors: result.error.issues };
  }
  return { valid: true, data: result.data };
};

export const validateStep2 = (outlineData: unknown) => {
  const result = outlineSchema.safeParse(outlineData);
  if (!result.success) {
    console.error('Step 2 validation failed:', result.error);
    return { valid: false, errors: result.error.issues };
  }
  return { valid: true, data: result.data };
};

export const validateStep3 = (presentationData: unknown) => {
  const result = presentationSchema.safeParse(presentationData);
  if (!result.success) {
    console.error('Step 3 validation failed:', result.error);
    return { valid: false, errors: result.error.issues };
  }
  return { valid: true, data: result.data };
};
```

### 8.2 Prompt Integration

#### Step 1 Analysis Prompt Addition
```markdown
## Output Validation
Your analysis must conform to this structure:
- keyFindings: Array of insights with dataSource and value
- metrics: Array of performance metrics with currentValue and source
- recommendations: Array of actionable recommendations

All data points must include exact file references for validation.
```

#### Step 2 Outline Prompt Addition
```markdown
## Output Validation  
Your outline must include:
- sections: Array with title, type, and dataPoints
- dataPoints: Array with label, value, source, and optional chartType

All values must be numbers, all sources must be file references.
```

#### Step 3 Presentation Prompt Addition
```markdown
## Output Validation
Your presentation must include:
- title: String
- date: YYYY-MM-DD format
- sections: Array with component type and data

All chart data must be in {name: string, value: number} format.
```

### 8.3 Implementation Workflow

#### Generation Pipeline (`/src/lib/generation/workflow.ts`)
```typescript
import { validateStep1, validateStep2, validateStep3 } from '../validation/validate-steps';

export const generateKPIReport = async (monthlyData: string) => {
  // Step 1: Analysis
  const analysisPrompt = `[Your Step 1 prompt] ${monthlyData}`;
  const analysisResult = await callAI(analysisPrompt);
  const validatedAnalysis = validateStep1(analysisResult);
  
  if (!validatedAnalysis.valid) {
    throw new Error(`Analysis validation failed: ${JSON.stringify(validatedAnalysis.errors)}`);
  }

  // Step 2: Outline
  const outlinePrompt = `[Your Step 2 prompt] ${JSON.stringify(validatedAnalysis.data)}`;
  const outlineResult = await callAI(outlinePrompt);
  const validatedOutline = validateStep2(outlineResult);
  
  if (!validatedOutline.valid) {
    throw new Error(`Outline validation failed: ${JSON.stringify(validatedOutline.errors)}`);
  }

  // Step 3: Presentation
  const presentationPrompt = `[Your Step 3 prompt] ${JSON.stringify(validatedOutline.data)}`;
  const presentationResult = await callAI(presentationPrompt);
  const validatedPresentation = validateStep3(presentationResult);
  
  if (!validatedPresentation.valid) {
    throw new Error(`Presentation validation failed: ${JSON.stringify(validatedPresentation.errors)}`);
  }

  return validatedPresentation.data;
};
```

### 8.4 Error Handling & Fallbacks

#### Fallback Components (`/src/components/FallbackComponents.tsx`)
```typescript
export const ValidationErrorFallback = ({ step, errors }: { step: string, errors: any[] }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
    <h3 className="text-red-800 font-medium">Step {step} Validation Failed</h3>
    <ul className="mt-2 text-sm text-red-600">
      {errors.map((error, i) => (
        <li key={i}>{error.path.join('.')}: {error.message}</li>
      ))}
    </ul>
  </div>
);

export const DataErrorFallback = ({ dataType }: { dataType: string }) => (
  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
    <h3 className="text-yellow-800 font-medium">Data Unavailable</h3>
    <p className="text-sm text-yellow-600">Unable to load {dataType} data</p>
  </div>
);
```

### 8.5 Validation Benefits

#### Immediate Benefits
- **Data Integrity**: Ensures all AI-generated data conforms to expected structure
- **Error Prevention**: Catches issues before they cause visual or functional breaks
- **Debugging**: Provides specific error messages for validation failures
- **Type Safety**: Leverages TypeScript integration for compile-time safety

#### Reliability Improvements
- **Step-by-Step Validation**: Each generation step is validated before proceeding
- **Graceful Degradation**: Fallback components prevent broken pages
- **Clear Error Messages**: Specific feedback for AI prompt refinement
- **Consistent Data Flow**: Ensures data integrity through entire pipeline

### Implementation Guide (Do Third):
7. **Detail Each Phase (Section 5)**: Break down into specific tasks with time estimates

8. **Create Templates (Appendix A)**: Write actual MDX and component templates
9. **AI Prompt Engineering (Appendix B)**: Design the single-prompt format

### Quality Assurance (Do Last):
10. **Reliability Checklist (Section 6)**: Create step-by-step verification process
11. **Testing Procedures (Appendix C)**: Define exact test commands and thresholds
12. **Review Against PRD**: Ensure every business outcome is addressed

### Document Completion Checklist:
- [ ] All sections have concrete examples
- [ ] No ambiguous instructions for AI
- [ ] Every decision has a rationale
- [ ] Failure modes are addressed
- [ ] Templates are production-ready
- [ ] AI can follow without human intervention
