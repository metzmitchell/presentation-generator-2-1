# AI Generation Guide: Complete Presentation Creation

## Overview

This guide provides comprehensive instructions for AI-powered generation of presentation pages using the NextGen Presentation Generator. The system is optimized for **single-prompt generation** - converting MDX outlines to complete, beautiful presentation pages.

### Key Design Philosophy
- **Full-screen impact**: Create sections that fill the entire screen height with bold visual hierarchy
- **Modern typography**: Outfit font for display headings, Inter for body text  
- **Enhanced spacing**: Generous spacing between sections (py-20) for better visual breathing room
- **No full-width layouts**: All content constrained to max-w-6xl for optimal readability
- **Rich icon system**: Two comprehensive icon libraries (doodle + space icons) for enhanced visual appeal
- **Number highlighting**: Bold styling for key metrics and data points
- **Textured backgrounds**: Moving gradients and subtle animations for visual interest

## Quick Start

### 1. Single Prompt Template

Use this exact template for AI generation:

```
Generate a beautiful dark-themed presentation page from this MDX outline:

[PASTE YOUR MDX OUTLINE HERE]

Requirements:
- Use the 11 available components: Hero, MetricGrid, ChartSection, CalloutBox, ImageGallery, Timeline, Section, TextCard, BulletList, TextHeavy, DarkSection
- Dark theme with modern typography: Outfit display font, Inter body font
- Enhanced spacing and visual hierarchy for full-screen sections
- New icon system: doodleIcon prop for UI elements, spaceIcon prop for thematic elements
- Number highlighting with **bold** markdown for key metrics
- Textured backgrounds and moving gradients for visual interest
- All data must be inline (no external files)
- Professional presentation quality optimized for screen sharing

Generate the complete Next.js presentation page with proper styling.
```

### 2. MDX Outline Structure

Every MDX outline should follow this structure:

```mdx
---
title: "Your Presentation Title"
date: "2024-12-31"
type: "presentation-type"
description: "Brief description"
---

<Hero 
  title="Main Title" 
  subtitle="Supporting text"
  highlight="Key metric"
  highlightLabel="Metric label"
/>

<MetricGrid 
  metrics={[
    {label: "Revenue", value: 2.4, unit: "M", change: 34}
  ]}
/>

<!-- Additional components... -->
```

## Icon System

The presentation generator now features a comprehensive dual-icon system designed for professional presentations:

### Doodle Icons (doodleIcon prop)
**Best for**: Small UI elements, interface controls, metrics indicators, bullet points
- **Style**: Clean, minimal line-drawn icons optimized for dark themes
- **Categories**: arrows, interface, currency, finance, e-commerce, files, health, logos, emojis, misc
- **Usage**: `doodleIcon="interface/analytics"`, `doodleIcon="arrows/arrow-up"`, `doodleIcon="finance/trend-up"`

### Space Icons (spaceIcon prop)  
**Best for**: Large decorative elements, thematic backgrounds, hero sections, TextHeavy sections, major visual elements
- **Style**: Space/sci-fi themed icons with multiple variants (outline, filled, sticker)
- **Categories**: planets, rockets, satellites, astronauts, space ships, stars, galaxies, aliens
- **Usage**: `spaceIcon="rocket"`, `spaceIcon="galaxy"`, `spaceIcon="earth"`
- **Size**: Automatically rendered extra-large (96px) in TextHeavy sections for maximum visual impact

### Icon Prop Priority
When multiple icon props are provided, the system uses this priority:
1. `doodleIcon` (preferred for UI elements)
2. `spaceIcon` (preferred for thematic elements)  
3. `lucideIcon` (legacy support)
4. `icon` (legacy emoji support)

### Most Useful Icons

**Doodle Icons for Business Presentations**:
- `interface/analytics` - Data analysis sections
- `interface/target` - Goals and objectives
- `interface/trophy` - Achievements and results
- `interface/bulb` - Ideas and innovation
- `finance/trend-up`, `finance/trend-down` - Performance metrics
- `arrows/arrow-up`, `arrows/arrow-down` - Directional emphasis
- `interface/tick` - Completed items
- `interface/star` - Quality, ratings, excellence

**Space Icons for Tech/Innovation Themes**:
- `rocket` - Growth, launches, innovation
- `satellite` - Communication, connectivity
- `earth` - Global themes, worldwide reach
- `galaxy` - Big picture, scale, vision
- `star`, `stars` - Excellence, achievement
- `astronaut` - Exploration, pioneers
- `telescope` - Future vision, analysis

## Component Library Reference

### 1. Hero Component

**Purpose**: Big impact opening with key metrics
**Best for**: Presentation titles, main messages, headline metrics

```mdx
<Hero 
  title="Q4 2024 Results"           // Required: Main title
  subtitle="Record performance"      // Optional: Supporting text
  highlight="34%"                   // Optional: Key metric to highlight
  highlightLabel="Growth"           // Optional: Label for the metric
  layout="full-width"               // Optional: full-width | centered
/>
```

**Visual Impact**: Large typography, gradient background, animated entrance

### 2. MetricGrid Component

**Purpose**: Display multiple KPIs in card layout
**Best for**: Performance dashboards, key metrics overview

```mdx
<MetricGrid 
  metrics={[
    {label: "Revenue", value: 2.4, unit: "M", change: 34},
    {label: "Users", value: 15.6, unit: "K", change: 28},
    {label: "Conversion", value: 4.2, unit: "%", change: 12}
  ]}
  columns={3}                       // Optional: 2 | 3 | 4
/>
```

**Data Format Requirements**:
- `label`: string (required) - Metric name
- `value`: number (required) - Current value
- `unit`: string (optional) - Unit (%, $, K, M, etc.)
- `change`: number (optional) - Percentage change

### 3. ChartSection Component

**Purpose**: Data visualization with supporting narrative
**Best for**: Trends, comparisons, analysis with context

```mdx
<ChartSection 
  title="Monthly Revenue Growth"
  type="line"                       // Required: bar | line | pie | area | scatter
  layout="text-chart"               // Optional: text-chart | full-width
  data={[
    {name: "Oct", value: 1.8},
    {name: "Nov", value: 2.1},
    {name: "Dec", value: 2.4}
  ]}
  colorScheme="success"             // Optional: primary | success | warning | error
>
  Revenue accelerated throughout Q4, driven by strong customer acquisition.
</ChartSection>
```

**Chart Types**:
- `bar`: Categorical comparisons, rankings
- `line`: Trends over time, growth patterns  
- `pie`: Part-to-whole relationships
- `area`: Volume and cumulative data
- `scatter`: Correlation analysis

**Data Format**: MUST be `[{name: string, value: number}]`

### 4. CalloutBox Component

**Purpose**: Highlight key insights and achievements
**Best for**: Key wins, important insights, call-to-action

```mdx
<CalloutBox emphasis="success">
  🎯 **Key Achievement**: Exceeded annual target by 15%
</CalloutBox>

<CalloutBox emphasis="highlight">
  💡 **Key Insight**: Mobile traffic now represents 67% of sessions
</CalloutBox>
```

**Emphasis Options**:
- `highlight`: Blue accent, maximum attention
- `callout`: Bordered box, clear emphasis
- `success`: Green accent, positive news
- `warning`: Orange accent, attention items
- `subtle`: Muted styling, supporting info

### 5. ImageGallery Component

**Purpose**: Visual examples and comparisons
**Best for**: Product screenshots, before/after, visual examples

```mdx
<ImageGallery 
  images={[
    {src: "/images/demo.jpg", alt: "Product demo", caption: "Main interface"},
    {src: "/images/results.jpg", alt: "Results screen", caption: "Analytics view"}
  ]}
  layout="grid"                     // Optional: grid | carousel | comparison
/>
```

### 6. Timeline Component

**Purpose**: Process flows and chronological data
**Best for**: Project timelines, processes, historical progression

```mdx
<Timeline 
  items={[
    {title: "Q1 Foundation", description: "Built infrastructure", status: "completed"},
    {title: "Q2 Growth", description: "Scaled operations", status: "completed"},
    {title: "Q3 Acceleration", description: "Record performance", status: "current"}
  ]}
  orientation="horizontal"          // Optional: vertical | horizontal
/>
```

### 7. Section Component

**Purpose**: Flexible content container with enhanced text formatting
**Best for**: Text content, mixed layouts, general sections

```mdx
<Section title="Next Steps" layout="centered">
  Based on our results, we will focus on three key areas:
  
  1. **Market Expansion**: Target new geographic regions
  2. **Product Innovation**: Launch next-generation features
  3. **Team Growth**: Scale engineering and sales teams
</Section>
```

**Enhanced Features**: Improved bullet list styling, consistent typography, enhanced spacing (py-20), modern display fonts

### 8. TextCard Component

**Purpose**: Highlighted text content with large icons and modern styling
**Best for**: Key insights, important points, feature highlights, standout messages

```mdx
<TextCard 
  title="Key Feature"               // Optional: Card title
  doodleIcon="interface/bulb"       // Optional: Doodle icon (preferred for UI elements)
  spaceIcon="rocket"                // Optional: Space icon (preferred for thematic elements)
  emphasis="highlight"              // Optional: normal | highlight | success | warning | subtle
  layout="horizontal"               // Optional: horizontal | vertical
  variant="standout"                // Optional: default | compact | standout
>
  This feature delivers exceptional value through **automated workflows** and intelligent insights.
</TextCard>

// Legacy support (still works but not recommended)
<TextCard 
  title="Legacy Example"
  icon="🚀"                        // Emoji fallback
  lucideIcon="Rocket"              // Legacy Lucide icon
>
  Legacy icon support maintained for backwards compatibility.
</TextCard>
```

**New Features**:
- **Rich Icon System**: Dual icon libraries with `doodleIcon` and `spaceIcon` props
- **Large Icons**: 64px icons in circular backgrounds with theme colors
- **Smart Icon Selection**: Automatic color theming based on emphasis
- **Variant Options**: `default`, `compact`, `standout` (with hover effects)
- **Enhanced Typography**: Outfit display font for titles
- **Number Highlighting**: Bold styling automatically applied to **markdown bold** text

**Emphasis Options**:
- `normal`: Standard card with subtle gradients and shadows
- `highlight`: Blue accent with gradient background and glow
- `success`: Green accent for positive content
- `warning`: Orange accent for important notices  
- `subtle`: Muted styling for supporting information

**Layout Options**:
- `vertical`: Icon/title above content, centered (default)
- `horizontal`: Icon/title beside content, left-aligned

### 9. BulletList Component

**Purpose**: Enhanced bullet points with icons, titles, numbered lists, and card layouts
**Best for**: Feature lists, benefits, structured content, process steps, numbered instructions

```mdx
<BulletList 
  layout="cards"                    // Optional: vertical | grid | compact | cards
  columns={3}                       // Optional: 1 | 2 | 3 (for grid/cards layout)
  numbered={true}                   // Optional: Enable automatic numbering
  variant="enhanced"                // Optional: default | enhanced
  items={[
    {
      doodleIcon: "finance/trend-up", // Optional: Doodle icon (preferred for UI elements)
      spaceIcon: "rocket",            // Optional: Space icon (preferred for thematic elements)
      title: "Growth Analytics",
      content: "Track performance with **real-time metrics** and insights",
      emphasis: "success",
      number: "1"                     // Optional: Custom number/label
    },
    {
      doodleIcon: "interface/target",
      title: "Targeted Campaigns", 
      content: "Create focused marketing campaigns that **convert**",
      emphasis: "highlight"
    }
  ]}
/>
```

**New Features**:
- **Rich Icon System**: Support for `doodleIcon` and `spaceIcon` props with automatic theming
- **Card Layout**: `cards` layout with hover effects and enhanced styling
- **Numbered Lists**: `numbered={true}` for automatic numbering with highlighted badges
- **Smart Icon Selection**: Automatic color matching based on emphasis settings
- **Enhanced Variant**: Larger text, better spacing with `variant="enhanced"`
- **Number Highlighting**: Custom numbers with `number` prop or auto-numbering

**Layout Options**:
- `vertical`: Stacked list format (default)
- `grid`: Grid layout with responsive columns
- `compact`: Reduced spacing for dense content
- `cards`: Card-based layout with backgrounds and hover effects

**Item Structure**:
- `doodleIcon`: string (optional) - Doodle icon name (preferred for UI elements) e.g. "interface/trophy"
- `spaceIcon`: string (optional) - Space icon name (preferred for thematic elements) e.g. "rocket"
- `lucideIcon`: string (optional) - Legacy Lucide React icon name (backwards compatibility)
- `icon`: string (optional) - Legacy emoji or icon character (fallback)
- `title`: string (optional) - Item title/headline
- `content`: ReactNode (required) - Main content with **bold** highlighting
- `emphasis`: string (optional) - Color emphasis (normal | highlight | success | warning)
- `number`: string/number (optional) - Custom number or label for highlighting

### 10. TextHeavy Component

**Purpose**: Full-screen text sections with large typography and visual hierarchy
**Best for**: Opening statements, key messages, major announcements, section breaks

```mdx
<TextHeavy 
  title="Market Leadership"
  subtitle="Driving innovation through strategic partnerships"
  background="textured"            // Optional: default | textured | gradient
  layout="center"                  // Optional: center | left
  items={[
    {
      title: "Industry Growth",
      subtitle: "Leading market expansion initiatives",
      spaceIcon: "satellite",          // Space icons preferred for TextHeavy sections (extra-large visual impact)
      emphasis: "primary"
    },
    {
      title: "Innovation Focus", 
      subtitle: "Next-generation product development",
      spaceIcon: "rocket",             // Space icons automatically rendered at 96px in TextHeavy
      emphasis: "accent"
    }
  ]}
>
**Strategic Vision**: Transform the industry through **technology** and **partnerships**

Key initiatives driving our success forward with measurable impact.
</TextHeavy>
```

**Features**:
- **Full-Screen Impact**: min-h-screen sections with dramatic typography
- **Extra-Large Space Icons**: Space icons automatically rendered at 96px (2xl) for maximum visual impact
- **Textured Backgrounds**: Moving gradients and animated overlays
- **Large Typography**: 6xl-8xl headlines with Outfit display font
- **Structured Items**: Grid layout for key points with icons and emphasis
- **Rich Content**: Support for additional markdown content

### 11. DarkSection Component

**Purpose**: Sections with animated textured backgrounds and enhanced visual depth
**Best for**: Breaking up content flow, highlighting important sections, creating visual interest

```mdx
<DarkSection 
  title="Performance Insights"
  subtitle="Data-driven results across all metrics"
  textureStyle="mesh"              // Optional: dots | lines | gradient | mesh
  intensity="medium"               // Optional: subtle | medium | strong
>
  <TextCard title="Key Insight" lucideIcon="BarChart3" emphasis="highlight">
    Our strategic approach delivered **40% growth** in key performance indicators
  </TextCard>
  
  <BulletList layout="grid" columns={2} items={[...]} />
</DarkSection>
```

**Features**:
- **Animated Textures**: Moving gradient patterns that respond to scroll
- **Texture Styles**: dots, lines, gradient, mesh patterns
- **Intensity Control**: subtle, medium, strong opacity levels
- **Content Flexibility**: Wrap any combination of other components
- **Visual Depth**: Layered backgrounds with fade transitions

## Presentation Templates

### Business Results Presentation

**Components**: Hero → MetricGrid → ChartSection → TextCard → BulletList → Section
**Best for**: Quarterly reviews, performance reports, stakeholder updates

```mdx
---
title: "Q4 2024 Business Results"
date: "2024-12-31"
type: "business-presentation"
---

<Hero title="Q4 Performance" highlight="34%" highlightLabel="Growth" />
<MetricGrid metrics={[...performance metrics...]} />
<ChartSection title="Revenue Growth" type="line" data={[...]} />

<TextCard title="Key Achievement" icon="🎯" emphasis="success">
  Exceeded annual targets by 15% through strategic market expansion
</TextCard>

<BulletList 
  layout="grid" 
  columns={2}
  items={[
    {icon: "📈", title: "Revenue Growth", content: "34% increase year-over-year"},
    {icon: "👥", title: "Team Expansion", content: "Added 12 new team members"}
  ]}
/>

<Section title="Next Steps">Strategic priorities...</Section>
```

### Product Demo Presentation

**Components**: Hero → ImageGallery → BulletList → Timeline → MetricGrid → CalloutBox
**Best for**: Product launches, feature demos, customer presentations

```mdx
---
title: "Product Demo: Analytics Platform"
type: "product-demo"
---

<Hero title="NextGen Analytics" subtitle="Powerful insights" />
<ImageGallery images={[...product screenshots...]} />

<BulletList 
  layout="grid"
  columns={3}
  items={[
    {icon: "⚡", title: "Real-time Data", content: "Live analytics dashboard"},
    {icon: "🎯", title: "Smart Insights", content: "AI-powered recommendations"},
    {icon: "📊", title: "Custom Reports", content: "Tailored reporting tools"}
  ]}
/>

<Timeline items={[...implementation steps...]} />
<MetricGrid metrics={[...benefits and results...]} />
<CalloutBox emphasis="highlight">Customer testimonial...</CalloutBox>
```

### Market Analysis Presentation

**Components**: Hero → Section → ChartSection → TextCard → Timeline → Section
**Best for**: Market research, competitive analysis, strategic planning

```mdx
---
title: "Market Analysis: SaaS Analytics"
type: "market-research"
---

<Hero title="Market Analysis" highlight="$15.8B" highlightLabel="Market Size" />
<Section title="Overview">Market dynamics...</Section>
<ChartSection title="Growth Trajectory" type="line" data={[...]} />

<TextCard title="Market Opportunity" icon="💡" emphasis="highlight">
  Significant growth potential in the mid-market segment with 40% CAGR projected
</TextCard>

<Timeline items={[...market evolution...]} />
<Section title="Opportunities">Strategic recommendations...</Section>
```

## Data Format Standards

### Chart Data (Required Format)

```typescript
// CORRECT: This format works
[
  {name: "Q1", value: 1.2},
  {name: "Q2", value: 1.8},
  {name: "Q3", value: 2.1}
]

// INCORRECT: These will fail
[
  {label: "Q1", amount: 1.2},      // Wrong property names
  {quarter: "Q1", revenue: "1.2M"} // String values not allowed
]
```

### Metric Data Format

```typescript
// CORRECT: Full metric with all optional fields
{label: "Revenue", value: 2.4, unit: "M", change: 34}

// CORRECT: Minimal metric (only required fields)
{label: "Users", value: 15600}

// INCORRECT: Missing required fields
{value: 2.4, unit: "M"}  // Missing label
```

### Timeline Data Format

```typescript
// CORRECT: Timeline item
{title: "Q1 Launch", description: "Product release", status: "completed"}

// CORRECT: Minimal timeline item
{title: "Phase 1"}

// Status options: "completed" | "current" | "upcoming"
```

### TextCard Data Format

```typescript
// CORRECT: Full TextCard with all options
<TextCard title="Feature" icon="🚀" emphasis="highlight" layout="horizontal">
  Content here
</TextCard>

// CORRECT: Minimal TextCard
<TextCard>Simple content without title or icon</TextCard>
```

### BulletList Data Format

```typescript
// CORRECT: Full BulletList item
{
  icon: "📈",
  title: "Growth Metrics", 
  content: "Detailed description of growth metrics",
  emphasis: "success"
}

// CORRECT: Minimal BulletList item
{
  content: "Simple bullet point content"
}
```

## AI Generation Best Practices

### 1. Choose Icons Strategically

**Icon Selection Guidelines**:
- Use **doodle icons** for business metrics, UI elements, and functional concepts
- Use **space icons** for innovation, technology, growth, and visionary themes
- **TextHeavy sections**: Always use space icons - they're automatically rendered extra-large (96px) for maximum visual impact
- Match icon category to content theme for visual coherence

```mdx
<!-- GOOD: Appropriate icon selection -->
<TextCard title="Revenue Growth" doodleIcon="finance/trend-up" emphasis="success">
  Business metrics with business-focused icons
</TextCard>

<TextCard title="Innovation Strategy" spaceIcon="rocket" emphasis="highlight">
  Innovation themes with space/tech icons
</TextCard>

<BulletList items={[
  {doodleIcon: "interface/analytics", title: "Data Analysis", content: "Business intelligence"},
  {spaceIcon: "satellite", title: "Global Reach", content: "Worldwide expansion"},
  {doodleIcon: "interface/trophy", title: "Achievement", content: "Goal completion"}
]} />

<!-- AVOID: Mixed metaphors -->
<TextCard title="Financial Results" spaceIcon="alien-1" emphasis="success">
  Don't use space aliens for financial data
</TextCard>
```

### 2. Be Specific with Data

```mdx
<!-- GOOD: Specific metrics with context -->
<MetricGrid 
  metrics={[
    {label: "Monthly Recurring Revenue", value: 2.4, unit: "M", change: 34},
    {label: "Customer Acquisition Cost", value: 125, unit: "$", change: -12}
  ]}
/>

<!-- AVOID: Vague or placeholder data -->
<MetricGrid 
  metrics={[
    {label: "Revenue", value: 100, change: 10}
  ]}
/>
```

### 2. Choose Appropriate Chart Types

```mdx
<!-- Time series data: Use line charts -->
<ChartSection type="line" data={[
  {name: "Jan", value: 100},
  {name: "Feb", value: 120},
  {name: "Mar", value: 140}
]} />

<!-- Categorical comparison: Use bar charts -->
<ChartSection type="bar" data={[
  {name: "Product A", value: 45},
  {name: "Product B", value: 32},
  {name: "Product C", value: 23}
]} />

<!-- Part-to-whole: Use pie charts -->
<ChartSection type="pie" data={[
  {name: "Desktop", value: 60},
  {name: "Mobile", value: 35},
  {name: "Tablet", value: 5}
]} />
```

### 3. Use Visual Emphasis Strategically with New Icon System

```mdx
<!-- Highlight major achievements with doodle icons -->
<CalloutBox emphasis="success">
  🎯 **Major Win**: Closed largest deal in company history
</CalloutBox>

<!-- Use TextCard with doodle icons for key insights -->
<TextCard title="Key Insight" doodleIcon="interface/bulb" emphasis="highlight">
  73% of users prefer the new interface design
</TextCard>

<!-- Use space icons for innovation/tech themes -->
<TextCard title="Product Launch" spaceIcon="rocket" emphasis="success">
  Successfully launched our next-generation platform
</TextCard>

<!-- TextHeavy sections: Always use space icons for maximum visual impact -->
<TextHeavy title="Strategic Vision" items={[
  {title: "Innovation", subtitle: "Leading technology advancement", spaceIcon: "rocket"},
  {title: "Global Reach", subtitle: "Worldwide market expansion", spaceIcon: "satellite"},
  {title: "Future Vision", subtitle: "Long-term strategic planning", spaceIcon: "telescope"}
]} />

<!-- Use BulletList with appropriate icon selection -->
<BulletList 
  layout="grid"
  columns={2}
  items={[
    {doodleIcon: "interface/tick", title: "Completed", content: "Phase 1 implementation", emphasis: "success"},
    {doodleIcon: "interface/clock", title: "In Progress", content: "Phase 2 rollout", emphasis: "highlight"}
  ]}
/>

<!-- Mix doodle and space icons based on content -->
<BulletList 
  layout="cards"
  columns={3}
  items={[
    {doodleIcon: "finance/trend-up", title: "Revenue", content: "34% growth", emphasis: "success"},
    {spaceIcon: "satellite", title: "Connectivity", content: "Global expansion", emphasis: "highlight"},
    {doodleIcon: "interface/target", title: "Goals", content: "All targets met", emphasis: "success"}
  ]}
/>

<!-- Flag important warnings -->
<CalloutBox emphasis="warning">
  ⚠️ **Watch Out**: Competition increasing in Q1 2025
</CalloutBox>
```

### 4. Structure for Flow

```mdx
<!-- Start with impact -->
<Hero title="Q4 Results" highlight="Record Quarter" />

<!-- Show key metrics -->
<MetricGrid metrics={[...key performance indicators...]} />

<!-- Provide analysis -->
<ChartSection title="Growth Analysis" type="line" data={[...]}>
  Detailed explanation of the trends and what drove performance.
</ChartSection>

<!-- Highlight key insights with TextCard -->
<TextCard title="Strategic Insight" icon="🎯" emphasis="highlight">
  Market expansion strategy delivered 40% of new revenue growth
</TextCard>

<!-- Show structured benefits with BulletList -->
<BulletList 
  layout="grid"
  columns={3}
  items={[
    {icon: "📈", title: "Revenue", content: "34% growth", emphasis: "success"},
    {icon: "👥", title: "Team", content: "12 new hires", emphasis: "highlight"},
    {icon: "🎯", title: "Goals", content: "All targets met", emphasis: "success"}
  ]}
/>

<!-- End with forward-looking content -->
<Section title="Looking Ahead">Strategic priorities and next steps</Section>
```

## Common Mistakes to Avoid

### 1. Data Format Errors

```mdx
<!-- WRONG: Incorrect data structure -->
<ChartSection data={[
  {label: "Q1", amount: 100}     // Should be: name and value
]} />

<!-- CORRECT: Proper format -->
<ChartSection data={[
  {name: "Q1", value: 100}
]} />
```

### 2. Missing Required Props

```mdx
<!-- WRONG: Missing required title -->
<ChartSection type="bar" data={[...]} />

<!-- CORRECT: Include required props -->
<ChartSection title="Sales by Quarter" type="bar" data={[...]} />
```

### 3. Invalid Enum Values

```mdx
<!-- WRONG: Invalid chart type -->
<ChartSection type="column" />  // Not supported

<!-- CORRECT: Valid chart type -->
<ChartSection type="bar" />     // Supported: bar, line, pie, area, scatter
```

### 4. Incorrect TextCard Usage

```mdx
<!-- WRONG: Invalid emphasis value -->
<TextCard emphasis="error">Content</TextCard>

<!-- CORRECT: Valid emphasis values -->
<TextCard emphasis="highlight">Content</TextCard>  // highlight, success, warning, subtle, normal
```

### 5. Invalid BulletList Structure

```mdx
<!-- WRONG: Missing required content field -->
<BulletList items={[
  {title: "Feature", icon: "🚀"}  // Missing content
]} />

<!-- CORRECT: Include required content -->
<BulletList items={[
  {title: "Feature", icon: "🚀", content: "Description here"}
]} />
```

### 6. External File References

```mdx
<!-- WRONG: External file reference -->
<ChartSection data="./data/sales.json" />

<!-- CORRECT: Inline data -->
<ChartSection data={[{name: "Q1", value: 100}]} />
```

## Error Handling

The system includes robust error handling:

### Chart Data Validation
- Invalid data shows fallback chart with error message
- System continues rendering other components
- Clear error messages for debugging

### Component Error Boundaries
- Individual component failures don't break entire presentation
- Graceful fallback displays with retry options
- Professional appearance maintained

### MDX Processing
- Missing files show helpful error page
- Invalid syntax provides specific guidance
- Loading states for better user experience

## Advanced Tips

### 1. Responsive Design Considerations

```mdx
<!-- Use appropriate column counts for metrics -->
<MetricGrid columns={4} />  <!-- Desktop: 4 cols, Tablet: 2 cols, Mobile: 1 col -->
<MetricGrid columns={3} />  <!-- Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col -->

<!-- Use grid layouts for better organization -->
<BulletList layout="grid" columns={3} />  <!-- Responsive grid -->
```

### 2. Layout Optimization

```mdx
<!-- Text-chart layout for analysis -->
<ChartSection layout="text-chart" title="Analysis">
  Narrative content appears alongside the chart for better context.
</ChartSection>

<!-- Full-width for maximum impact -->
<ChartSection layout="full-width" title="Key Metrics" />

<!-- TextCard layouts for different content -->
<TextCard layout="horizontal">Side-by-side icon and content</TextCard>
<TextCard layout="vertical">Stacked icon and content</TextCard>
```

### 3. Color Scheme Selection

```mdx
<!-- Success theme for positive metrics -->
<ChartSection colorScheme="success" />  <!-- Green theme -->

<!-- Warning theme for attention items -->
<ChartSection colorScheme="warning" />  <!-- Orange theme -->

<!-- Primary theme for general data -->
<ChartSection colorScheme="primary" />  <!-- Blue theme -->
```

### 4. Content Organization with New Components

```mdx
<!-- Use TextCard for standout insights -->
<TextCard title="Key Insight" icon="💡" emphasis="highlight">
  Critical information that needs attention
</TextCard>

<!-- Use BulletList for structured content -->
<BulletList 
  layout="grid"
  columns={2}
  items={[
    {icon: "🎯", title: "Goal", content: "Increase conversion by 25%"},
    {icon: "✅", title: "Result", content: "Achieved 28% improvement"}
  ]}
/>
```

## Troubleshooting

### Common Issues and Solutions

1. **Chart not displaying**
   - Check data format: must be `[{name: string, value: number}]`
   - Verify chart type is valid: bar, line, pie, area, scatter

2. **Metrics showing placeholders**
   - Ensure metrics array has required `label` and `value` fields
   - Check that `value` is a number, not string

3. **Components not rendering**
   - Verify component names are exact: Hero, MetricGrid, ChartSection, TextCard, BulletList, etc.
   - Check that all required props are provided

4. **TextCard not displaying correctly**
   - Verify emphasis values: normal, highlight, success, warning, subtle
   - Check layout values: horizontal, vertical

5. **BulletList items missing**
   - Ensure each item has required `content` field
   - Verify layout values: vertical, grid, compact
   - Check columns value: 1, 2, or 3

6. **Layout issues**
   - All components now use consistent max-w-6xl container width
   - Test responsive behavior on different screen sizes

7. **MDX compilation errors**
   - Ensure proper component syntax: `<ComponentName prop="value" />`
   - Check that all data is inline, no external file references
   - Verify frontmatter format is correct

## Success Checklist

Before generating a presentation, ensure:

- [ ] Frontmatter includes title, date, and type
- [ ] All data is inline (no external files)
- [ ] Chart data uses `{name: string, value: number}` format
- [ ] Metric data includes required `label` and `value` fields
- [ ] Component names are exact (Hero, MetricGrid, ChartSection, CalloutBox, ImageGallery, Timeline, Section, TextCard, BulletList)
- [ ] All required props are provided
- [ ] TextCard emphasis values are valid (normal, highlight, success, warning, subtle)
- [ ] BulletList items include required `content` field
- [ ] Visual emphasis is used strategically
- [ ] Content flows logically from opening to conclusion
- [ ] Professional language appropriate for business presentations

## Example Generation Workflow

1. **Create MDX Outline**
   ```mdx
   ---
   title: "Q4 Performance Review"
   date: "2024-12-31"
   type: "business-results"
   ---
   
   <Hero title="Q4 Performance" highlight="Record Quarter" />
   <MetricGrid metrics={[...]} />
   <TextCard title="Key Achievement" icon="🎯" emphasis="success">
     Major milestone reached
   </TextCard>
   <!-- Additional components -->
   ```

2. **Use AI Prompt Template**
   ```
   Generate a beautiful dark-themed presentation page from this MDX outline:
   [PASTE OUTLINE]
   [REQUIREMENTS]
   ```

3. **Validate Output**
   - Check all components render correctly
   - Verify data formats are correct
   - Test responsive behavior
   - Review professional appearance

4. **Deploy**
   - Save as `/presentations/filename.mdx`
   - Access at `/presentations/filename`
   - Share URL for presentation use

This guide ensures consistent, professional results every time you generate a presentation with AI using all 9 available components.