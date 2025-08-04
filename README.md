# Presentation Generator 2.1

A beautiful, dark-themed visual presentation generator for creating professional presentations from MDX outlines. Designed for screen sharing, video presentations, and business meetings.

## Features

- **Visual-First Components**: 7 specialized components for maximum presentation impact
- **Dark Theme Only**: Optimized for screen sharing with high contrast design
- **MDX Support**: Write presentations in Markdown with embedded React components
- **TypeScript**: Full type safety for all components and props
- **Responsive Design**: Desktop-first approach that adapts to all screen sizes
- **Single-Prompt Generation**: AI-friendly architecture for generating complete presentations

## Components

1. **Hero**: Big impact opening with key metrics
2. **MetricGrid**: Multiple KPIs in beautiful card layout
3. **ChartSection**: Data visualizations with supporting narrative
4. **CalloutBox**: Highlighted insights and achievements
5. **ImageGallery**: Visual comparisons and examples
6. **Timeline**: Process flows and chronological data
7. **Section**: Flexible content with layout options

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the home page.

### Creating Presentations

1. Create a new MDX file in the `/presentations` directory
2. Use the available components to build your presentation
3. Navigate to `/presentations/[filename]` to view your presentation

### Example MDX Structure

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
  data={[
    {name: "Oct", value: 1.8},
    {name: "Nov", value: 2.1}, 
    {name: "Dec", value: 2.4}
  ]}
  colorScheme="success"
>
  Revenue accelerated throughout Q4, driven by strong customer acquisition.
</ChartSection>
```

## Build

```bash
npm run build
```

## Type Checking

```bash
npm run typecheck
```

## Linting

```bash
npm run lint
```

## Dark Theme Color System

- **Background**: `#0f1419` (Main dark background)
- **Card**: `#1a1f29` (Component backgrounds)
- **Text Primary**: `#ffffff` (Main content)
- **Text Secondary**: `#b8c4d0` (Supporting text)
- **Accent Blue**: `#4a9eff` (Primary accent)
- **Accent Green**: `#52c93f` (Success/positive)
- **Accent Orange**: `#ff8c42` (Warning/attention)
- **Accent Red**: `#ff5757` (Error/negative)

## License

MIT