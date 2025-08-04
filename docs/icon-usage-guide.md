# Icon Usage Guide

## Overview

The Presentation Generator includes two comprehensive icon libraries designed for professional presentations:

- **Doodle Icons**: Clean, minimal icons for UI elements and small visual cues
- **Space Icons**: Thematic icons perfect for tech, innovation, and sci-fi presentations

## Icon Categories & Recommendations

### Doodle Icons (Category: `doodle`)

#### Interface Icons (`interface/`)
Perfect for presentation controls and UI elements:
- `analytics` - For data and metrics sections
- `dashboard` - Overview or summary slides  
- `target` - Goals and objectives
- `trophy` - Achievements and results
- `bulb` - Ideas and innovation
- `rocket` - Growth or launch content
- `star` - Ratings, quality, excellence

#### Financial Icons (`finance/`)
Business and financial presentations:
- `trend-up`, `trend-down` - Performance indicators
- `piggy-bank` - Savings and cost reduction
- `cash` - Revenue and profitability  
- `bank` - Financial institutions
- `wallet` - Personal finance

#### Arrow Icons (`arrows/`)
Navigation and flow indicators:
- `arrow-up`, `arrow-down` - Directional emphasis
- `arrow-right` - Process flow
- `chevrons-right` - Next steps
- `arrow-circle-up` - Positive trends

### Space Icons (Category: `space`)

#### Celestial Objects
- `earth` - Global, worldwide themes
- `mars` - Exploration, new frontiers
- `moon-full-moon` - Phases, cycles, completeness
- `sun` - Energy, power, central themes
- `galaxy` - Big picture, scale, universe

#### Technology & Innovation
- `rocket` - Launch, growth, startup themes
- `satellite` - Communication, connectivity
- `space-shuttle` - Complex projects, missions
- `international-space-station` - Collaboration
- `telescope` - Vision, future-looking

#### Characters & Sci-Fi
- `astronaut` - Exploration, pioneers
- `alien-1` through `alien-5` - Different perspectives
- `millennium-falcon` - Speed, agility
- `death-star` - Power, scale (use carefully)

## Size Guidelines

### Doodle Icons
- `sm` (16px) - Inline with text, small indicators
- `md` (24px) - Default for most UI elements
- `lg` (32px) - Section headers, important callouts
- `xl` (48px) - Rare, only for major focal points

### Space Icons  
- `md` (24px) - Small decorative elements
- `lg` (32px) - Standard decorative usage
- `xl` (48px) - Hero sections, major visuals
- Custom sizes via className for background elements

## Usage Examples by Component

### Hero Component
```tsx
<Hero 
  title="Mars Mission 2025"
  subtitle="Exploring new frontiers in space technology"
  // Background decoration automatically included
/>

// Manual icon additions
<div className="flex items-center gap-4">
  <SpaceIcon name="rocket" size="xl" variant="filled" />
  <h1>Launch Strategy</h1>
</div>
```

### MetricGrid Component
```tsx
<MetricGrid 
  metrics={[
    // TrendIcon automatically used for change indicators
    {label: "Revenue", value: 2.4, unit: "M", change: 34}
  ]}
/>

// Custom metric with icon
<div className="metric-card">
  <DoodleIcon name="finance/trend-up" size="md" />
  <span>34% Growth</span>
</div>
```

### CalloutBox Component
```tsx
<CalloutBox theme="success">
  <div className="flex items-center gap-3">
    <DoodleIcon name="interface/trophy" size="lg" />
    <h3>Achievement Unlocked</h3>
  </div>
  <p>Record quarterly performance...</p>
</CalloutBox>
```

### Section Headers
```tsx
<Section>
  <div className="flex items-center gap-4 mb-8">
    <SpaceIcon name="galaxy" size="lg" variant="outline" />
    <h2>Market Overview</h2>
  </div>
  {/* content */}
</Section>
```

### TextHeavy Component (Full-Screen Sections)
```tsx
<TextHeavy 
  title="Strategic Vision"
  subtitle="Transforming the industry through innovation"
  items={[
    {
      title: "Global Expansion",
      subtitle: "Worldwide market reach and connectivity",
      spaceIcon: "satellite",          // Space icons automatically rendered extra-large (96px)
      emphasis: "primary"
    },
    {
      title: "Innovation Leadership", 
      subtitle: "Next-generation technology development",
      spaceIcon: "rocket",             // Perfect visual impact for TextHeavy sections
      emphasis: "accent"
    },
    {
      title: "Future Vision",
      subtitle: "Long-term strategic planning and foresight", 
      spaceIcon: "telescope",          // Thematic coherence with space metaphors
      emphasis: "primary"
    }
  ]}
>
**Core Mission**: Lead the industry through **breakthrough innovation** and **strategic partnerships**

Driving transformational change with measurable impact across all market segments.
</TextHeavy>
```

**TextHeavy Best Practice**: 
- **Always use space icons** - they're automatically rendered at 96px (2xl size) for dramatic visual impact
- **Choose thematic icons** that reinforce your message (rocket=innovation, satellite=connectivity, telescope=vision)
- **Maintain consistency** across all items in the same TextHeavy section

## Design Principles

### Visual Hierarchy
1. **Primary**: Use space icons (xl/lg) for main themes
2. **Secondary**: Use doodle icons (md/lg) for section emphasis  
3. **Tertiary**: Use doodle icons (sm/md) for details and UI

### Color & Theme
- All icons automatically styled for dark theme (white/inverted)
- Use `opacity-*` classes for subtle background decoration
- Maintain contrast ratios for accessibility

### Spacing & Layout
```tsx
// Good: Proper spacing
<div className="flex items-center gap-3">
  <DoodleIcon name="interface/star" />
  <span>Premium Feature</span>
</div>

// Good: Background decoration
<div className="relative">
  <SpaceIcon 
    name="stars" 
    className="absolute top-4 right-4 opacity-20" 
    size="lg" 
  />
  <h2>Content here</h2>
</div>
```

## Common Patterns

### Status Indicators
```tsx
// Success
<DoodleIcon name="interface/tick" className="text-green-500" />

// Warning  
<DoodleIcon name="interface/caution" className="text-orange-500" />

// Error
<DoodleIcon name="interface/cross" className="text-red-500" />
```

### Process Flow
```tsx
<div className="flex items-center gap-4">
  <div>Step 1</div>
  <DoodleIcon name="arrows/arrow-right" />
  <div>Step 2</div>
  <DoodleIcon name="arrows/arrow-right" />
  <div>Complete</div>
</div>
```

### Thematic Backgrounds
```tsx
<section className="relative">
  {/* Subtle decoration */}
  <SpaceIcon 
    name="satellite" 
    className="absolute top-8 right-8 opacity-10" 
    size="xl" 
  />
  <SpaceIcon 
    name="star" 
    className="absolute bottom-12 left-12 opacity-15" 
    size="lg" 
  />
  {/* Main content */}
</section>
```

## Performance Notes

- Icons are loaded as static images, not inline SVG
- Use WebP conversion for production if needed
- Consider lazy loading for background decorative icons
- Batch similar icon requests when possible

## Accessibility

- All icons include proper alt text via name prop
- Decorative icons should have `aria-hidden="true"`
- Ensure sufficient color contrast
- Don't rely solely on icons for meaning—include text labels

## Available Icon Lists

### Most Useful Doodle Icons
**Interface**: analytics, bulb, calendar, clock, dashboard, download, globe, home, key, mail, search, setting, star, target, trophy, upload, user

**Finance**: bank, cash, coin, dollar, piggy-bank, safe, trend-up, trend-down, wallet

**Arrows**: arrow-up, arrow-down, arrow-right, arrow-left, chevrons-right, chevrons-up, chevrons-down

### Most Useful Space Icons  
**Popular**: rocket, satellite, earth, galaxy, star, stars, sun, moon-full-moon, astronaut, telescope, space-shuttle

**Thematic**: mars, jupiter, saturn, international-space-station, alien-ship, millennium-falcon, death-star

Use this guide to create visually compelling presentations that leverage our comprehensive icon system effectively.