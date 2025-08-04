# Visual Presentation Component Guidelines

## Overview
This document provides comprehensive guidelines for creating beautiful, dark-themed presentation pages using MDX outlines and visual-first components. These guidelines enable AI to generate professional presentation pages from single-prompt requests.

## Core Architecture Principles

### 1. MDX Outline-Based Generation
- **User creates MDX outline** with component hints and content structure
- **Single AI prompt** converts outline to complete presentation page
- **Inline data only** - all metrics and chart data embedded directly
- **Visual-first approach** - prioritize visual impact for presentations

### 2. Dark Theme Only
- **Optimized for screen sharing** and video presentations
- **High contrast design** with white text on dark backgrounds
- **Professional appearance** suitable for business meetings
- **Consistent color palette** with blue, green, orange accents

### 3. Component Flexibility
- **Rich component library** for diverse presentation types
- **Layout control options** (full-width, centered, sidebar, text-chart, grid)
- **Visual emphasis patterns** (highlight, callout, success, warning, subtle)
- **Responsive design** that adapts to all screen sizes

## Visual-First Component Library

### Hero Component
**Purpose**: Big impact opening with key metrics and visual emphasis
**Usage**: 
- Presentation title and main message
- Key headline metrics (growth %, revenue, etc.)
- Executive summary with visual impact

**Props**:
```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  highlight?: string;          // Key metric ("34%", "$2.4M", etc.)
  highlightLabel?: string;     // Label for key metric ("Growth", "Revenue")
  layout?: 'full-width' | 'centered';
}
```

**Example Usage in MDX Outline**:
```mdx
<Hero 
  title="Q4 2024 Results"
  subtitle="Record growth across all metrics"
  highlight="34%"
  highlightLabel="Revenue Growth"
  layout="full-width"
/>
```

### MetricGrid Component
**Purpose**: Display multiple key metrics in beautiful card layout
**Usage**:
- Key performance indicators
- Comparative metrics with changes
- Dashboard-style metric overview

**Props**:
```typescript
interface MetricGridProps {
  metrics: Array<{
    label: string;      // "Revenue", "Users", "Conversion Rate"
    value: number;      // 2.4, 15600, 4.2
    unit?: string;      // "M", "K", "%", "$"
    change?: number;    // Percentage change (34, -12, 8)
  }>;
  columns?: 2 | 3 | 4;  // Grid columns
}
```

**Example Usage in MDX Outline**:
```mdx
<MetricGrid 
  metrics={[
    {label: "Revenue", value: 2.4, unit: "M", change: 34},
    {label: "Users", value: 15.6, unit: "K", change: 28}, 
    {label: "Conversion", value: 4.2, unit: "%", change: 12}
  ]}
  columns={3}
/>
```

### ChartSection Component
**Purpose**: Data visualizations with supporting narrative
**Usage**:
- Trends over time (revenue, traffic, users)
- Categorical comparisons (channels, products, regions)
- Performance analysis with context

**Props**:
```typescript
interface ChartSectionProps {
  title: string;
  type: 'bar' | 'line' | 'pie' | 'area' | 'scatter';
  data: Array<{
    name: string;     // "Q1", "Organic", "Product A"
    value: number;    // 150, 12450, 2.4
  }>;
  colorScheme?: 'primary' | 'success' | 'warning' | 'error';
  layout?: 'text-chart' | 'full-width';
  children?: string; // Supporting narrative content
}
```

**Example Usage in MDX Outline**:
```mdx
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
```

### CalloutBox Component
**Purpose**: Highlight key insights and important information
**Usage**:
- Key achievements and wins
- Important insights and findings
- Warnings or critical information

**Props**:
```typescript
interface CalloutBoxProps {
  emphasis: 'highlight' | 'callout' | 'success' | 'warning' | 'subtle';
  children: string; // The callout text content
}
```

**Example Usage in MDX Outline**:
```mdx
<CalloutBox emphasis="success">
  🎯 **Key Achievement**: Exceeded annual revenue target by 15% with strongest Q4 in company history
</CalloutBox>

<CalloutBox emphasis="highlight">
  💡 **Key Insight**: Mobile traffic now represents 67% of total sessions, up from 52% last quarter
</CalloutBox>
```

### ImageGallery Component
**Purpose**: Visual comparisons and examples
**Usage**:
- Before/after comparisons
- Product showcases
- Visual examples and case studies

**Props**:
```typescript
interface ImageGalleryProps {
  images: Array<{
    src: string;        // Image URL or path
    alt: string;        // Alt text for accessibility
    caption?: string;   // Optional caption
  }>;
  layout?: 'grid' | 'carousel' | 'comparison';
}
```

**Example Usage in MDX Outline**:
```mdx
<ImageGallery 
  images={[
    {src: "/images/before.jpg", alt: "Before implementation", caption: "Original state"},
    {src: "/images/after.jpg", alt: "After implementation", caption: "Improved results"}
  ]}
  layout="comparison"
/>
```

### Timeline Component
**Purpose**: Process flows and chronological information
**Usage**:
- Project timelines and milestones
- Process flows and steps
- Historical progression

**Props**:
```typescript
interface TimelineProps {
  items: Array<{
    title: string;
    description?: string;
    date?: string;
    status?: 'completed' | 'current' | 'upcoming';
  }>;
  orientation?: 'vertical' | 'horizontal';
}
```

**Example Usage in MDX Outline**:
```mdx
<Timeline 
  items={[
    {title: "Q1 Foundation", description: "Built core infrastructure", status: "completed"},
    {title: "Q2-Q3 Growth", description: "Scaled operations", status: "completed"},
    {title: "Q4 Acceleration", description: "Record performance", status: "current"}
  ]}
  orientation="horizontal"
/>
```

### Section Component
**Purpose**: Flexible content container with layout options
**Usage**:
- General content sections
- Text-heavy content with proper typography
- Mixed content with flexible layouts

**Props**:
```typescript
interface SectionProps {
  title?: string;
  layout?: 'centered' | 'full-width' | 'sidebar';
  emphasis?: 'normal' | 'subtle';
  children: React.ReactNode;
}
```

**Example Usage in MDX Outline**:
```mdx
<Section title="Next Steps" layout="centered" emphasis="normal">
  Based on Q4 results, we will focus on three key areas for 2025:
  
  1. **Expand Market Reach**: Target new geographic markets
  2. **Product Innovation**: Launch next-generation features  
  3. **Team Growth**: Scale engineering and sales teams
</Section>
```

## Data Format Standards (Inline Only)

### Chart Data Format
**Required Structure**: All chart data must be inline with this format:
```typescript
{
  name: string;    // Display label ("Q1", "Organic", "Product A")
  value: number;   // Numeric value (150, 12450, 2.4)
}
```

**Examples**:
```typescript
// Revenue by quarter
[
  { name: "Q1", value: 1.2 },
  { name: "Q2", value: 1.8 },
  { name: "Q3", value: 2.1 },
  { name: "Q4", value: 2.4 }
]

// Traffic sources
[
  { name: "Organic", value: 12450 },
  { name: "Direct", value: 3200 },
  { name: "Social", value: 1850 },
  { name: "Email", value: 920 }
]
```

### Metric Data Format
**For MetricGrid and key performance indicators**:
```typescript
{
  label: string;      // Metric name ("Revenue", "Users", "Conversion Rate")
  value: number;      // Current value (2.4, 15600, 4.2)
  unit?: string;      // Unit ("M", "K", "%", "$")
  change?: number;    // Percentage change (34, -12, 8)
}
```

### Timeline Data Format
**For Timeline component items**:
```typescript
{
  title: string;              // Step or milestone title
  description?: string;       // Optional description
  date?: string;             // Optional date ("2024-Q1", "March")
  status?: 'completed' | 'current' | 'upcoming';  // Visual status
}
```

## Layout Guidelines

### Presentation Flow Options
**Flexible structure based on content type**:

**Business Results Presentation**:
1. **Hero** - Title and key headline metric
2. **MetricGrid** - Key performance indicators
3. **ChartSection** - Main performance visualization
4. **CalloutBox** - Key achievement or insight
5. **ChartSection** - Supporting analysis
6. **Section** - Next steps and recommendations

**Product Demo Presentation**:
1. **Hero** - Product name and value proposition
2. **ImageGallery** - Product screenshots or demos
3. **Timeline** - Implementation or usage process
4. **MetricGrid** - Key benefits or results
5. **CalloutBox** - Main selling point

### Layout Options
**Available for most components**:
- **full-width**: Spans entire screen width (maximum visual impact)
- **centered**: Centered content with margins (focused presentation)
- **sidebar**: Two-column layout (text + supporting content)
- **text-chart**: Text alongside visualization (analysis with data)
- **grid**: Multi-item organized display (multiple metrics/items)

### Visual Emphasis Options
**For CalloutBox and other emphasis**:
- **highlight**: Bright blue accent, maximum attention
- **callout**: Bordered box, clear emphasis
- **success**: Green accent, positive news/metrics
- **warning**: Orange accent, attention items
- **subtle**: Muted styling, supporting information

## Dark Theme Color System

### Background Colors (Dark Theme Only)
- **Page Background**: `#0f1419` (Main dark background)
- **Card Background**: `#1a1f29` (Component backgrounds)
- **Surface**: `#242b38` (Elevated elements)

### Text Colors (High Contrast)
- **Primary Text**: `#ffffff` (Main content text)
- **Secondary Text**: `#b8c4d0` (Supporting text)
- **Muted Text**: `#8a96a3` (Less important text)

### Accent Colors (For Charts and Emphasis)
- **Primary Blue**: `#4a9eff` (Default accent, charts)
- **Success Green**: `#52c93f` (Positive metrics, success states)
- **Warning Orange**: `#ff8c42` (Attention items, warnings)
- **Error Red**: `#ff5757` (Negative metrics, errors)
- **Purple**: `#b084ff` (Secondary accent)
- **Yellow**: `#ffcc33` (Highlights)

### Chart Color Schemes
**Pre-defined for different data types**:
- **primary**: Blue theme (`#4a9eff`) for general data
- **success**: Green theme (`#52c93f`) for positive metrics/growth
- **warning**: Orange theme (`#ff8c42`) for attention items
- **error**: Red theme (`#ff5757`) for negative metrics/declines

## MDX Outline Creation Guidelines

### What You Can Request in Your MDX Outline

#### Component Selection
**Choose from these components based on your content**:
- `<Hero>` - Big impact opening with key metrics
- `<MetricGrid>` - Multiple KPIs in card layout
- `<ChartSection>` - Data visualization with narrative
- `<CalloutBox>` - Highlighted insights and achievements
- `<ImageGallery>` - Visual examples and comparisons
- `<Timeline>` - Process flows and chronological data
- `<Section>` - Flexible content with layout options

#### Layout Control
**Specify layouts for visual impact**:
```mdx
<Hero layout="full-width" />           <!-- Maximum impact -->
<ChartSection layout="text-chart" />   <!-- Text + visualization -->
<Section layout="centered" />          <!-- Focused content -->
<MetricGrid columns={3} />             <!-- 3-column grid -->
```

#### Visual Emphasis
**Control attention and hierarchy**:
```mdx
<CalloutBox emphasis="success">Positive news</CalloutBox>
<CalloutBox emphasis="highlight">Key insight</CalloutBox>
<CalloutBox emphasis="warning">Attention item</CalloutBox>
```

#### Chart Types and Data
**Specify chart types and inline data**:
```mdx
<ChartSection 
  type="line"              <!-- Trends over time -->
  colorScheme="success"    <!-- Green theme -->
  data={[
    {name: "Q1", value: 1.2},
    {name: "Q2", value: 1.8}
  ]}
/>
```

## Complete MDX Outline Example

### Business Results Presentation
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
  layout="full-width"
/>

<MetricGrid 
  metrics={[
    {label: "Revenue", value: 2.4, unit: "M", change: 34},
    {label: "Users", value: 15.6, unit: "K", change: 28},
    {label: "Conversion", value: 4.2, unit: "%", change: 12}
  ]}
  columns={3}
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

<CalloutBox emphasis="success">
  🎯 **Key Achievement**: Exceeded annual revenue target by 15% with strongest Q4 in company history
</CalloutBox>

<Timeline 
  items={[
    {title: "Q1 Foundation", description: "Built core infrastructure", status: "completed"},
    {title: "Q2-Q3 Growth", description: "Scaled operations", status: "completed"},
    {title: "Q4 Acceleration", description: "Record performance", status: "current"}
  ]}
/>
```

### Chart Type Guidelines
**Choose the right chart for your data**:

- **bar**: Categorical comparisons ("Revenue by Product", "Traffic by Channel")
- **line**: Trends over time ("Monthly Growth", "Quarterly Performance")
- **pie**: Part-to-whole relationships ("Traffic Sources", "Revenue Breakdown")
- **area**: Volume/cumulative data ("Total Users Over Time")
- **scatter**: Correlation analysis ("Cost vs. Performance")

**Chart Data Requirements**:
- All data must be inline in MDX outline
- Format: `[{name: "Label", value: 123}, ...]`
- No external CSV or JSON files
- Numbers only (no strings for values)

### Color Scheme Guidelines
**Match colors to content meaning**:

- **primary**: Default blue theme for general data
- **success**: Green theme for positive metrics (growth, achievements)
- **warning**: Orange theme for attention items (risks, changes needed)
- **error**: Red theme for negative metrics (declines, problems)

### Writing Guidelines for Content
**Keep content presentation-ready**:

- **Concise and scannable**: Bullet points and short paragraphs
- **Business-focused language**: Appropriate for stakeholders
- **Data-driven insights**: Include specific numbers and percentages
- **Action-oriented**: Clear implications and next steps

## AI Generation Rules

### What AI Must Follow

#### Dark Theme Consistency
- **Always use dark backgrounds**: `#0f1419` for page, `#1a1f29` for cards
- **Always use white text**: `#ffffff` for primary content
- **Use proper accent colors**: Blue, green, orange, red from defined palette
- **Maintain high contrast**: Ensure readability on dark backgrounds

#### Component Usage Rules
- **Follow exact prop interfaces**: Use TypeScript definitions provided
- **Process inline data correctly**: Convert to `{name: string, value: number}` format
- **Apply layouts as specified**: Use user's layout preferences or sensible defaults
- **Maintain visual hierarchy**: Proper spacing and typography scales

#### Data Processing Rules
- **All data must be inline**: No external file references
- **Chart data format is required**: `{name: string, value: number}` only
- **Metric data must include units**: Add "M", "K", "%" where appropriate
- **Handle missing data gracefully**: Use fallback values or hide components

#### Quality Standards
- **Professional presentation quality**: Suitable for business meetings
- **Responsive design**: Must work on all screen sizes
- **Accessible contrast ratios**: Meet WCAG standards
- **Consistent spacing**: Use defined spacing scales

## What You Can't Request

### Limitations and Constraints

#### Component Limitations
- **No custom components**: Use only the provided component library
- **No complex animations**: Simple, reliable interactions only
- **No external integrations**: No APIs, databases, or live data feeds
- **No user interactions**: No forms, buttons, or complex interactivity

#### Data Limitations
- **No external files**: All data must be inline in the MDX outline
- **No CSV/JSON files**: No external data file references
- **Chart data format only**: `{name: string, value: number}` arrays only
- **No real-time data**: Static data only, no live updates
- **No file uploads**: No image uploads or external media

#### Styling Limitations
- **Dark theme only**: No light theme or theme switching
- **No custom CSS**: Use predefined layouts and emphasis options
- **No custom colors**: Use defined color schemes only
- **No custom fonts**: Use system typography hierarchy

#### Layout Limitations
- **Single page only**: No multi-page navigation  
- **Flat structure**: `/presentations/filename.mdx` only
- **Layout options only**: full-width, centered, sidebar, text-chart, grid
- **No custom layouts**: Use predefined options only
- **No absolute positioning**: Rely on component flow

## Single Prompt Template

**Use this exact template when requesting AI to generate your presentation:**

```
Generate a beautiful dark-themed presentation page from this MDX outline:

[PASTE YOUR MDX OUTLINE HERE]

Requirements:
- Use ONLY the 7 components: Hero, MetricGrid, ChartSection, CalloutBox, ImageGallery, Timeline, Section
- Dark theme only: #0f1419 background, #ffffff text, accent colors as specified
- All data must be inline (no external files)
- Follow exact TypeScript interfaces for all component props
- Use layout options: full-width, centered, sidebar, text-chart, grid
- Apply visual emphasis: highlight, callout, success, warning, subtle
- Chart data format: [{name: string, value: number}] only
- Professional presentation quality for screen sharing

Generate the complete Next.js presentation page with proper styling.
```

### Tips for Better Results

1. **Be specific with metrics**: Include exact numbers, units, and changes
2. **Choose appropriate chart types**: Match chart type to your data story  
3. **Use visual emphasis wisely**: Highlight only the most important points
4. **Structure for flow**: Order components to tell a coherent story
5. **Include context**: Add narrative content to explain the data
6. **Keep data simple**: Use `{name: string, value: number}` format only
7. **Test your outline**: Ensure all component props match TypeScript interfaces
8. **Focus on visual impact**: Prioritize presentation quality for screen sharing

---

**This document provides everything you need to create professional presentation pages from MDX outlines. Follow these guidelines for consistent, beautiful results.** 