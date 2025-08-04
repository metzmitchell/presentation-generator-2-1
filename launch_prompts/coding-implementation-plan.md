# Visual Presentation Generator - 2-Prompt Implementation Plan

## Overview
This document outlines the implementation plan for creating a beautiful, dark-themed visual presentation generator using Next.js 14+, MDX, and visual-first components. The project is designed for single-prompt AI generation of presentation pages from MDX outlines.

## Project Architecture Summary
- **Single-prompt generation**: MDX outline → complete presentation page
- **Dark theme only**: Optimized for screen sharing and video presentations
- **Visual-first components**: Hero, MetricGrid, ChartSection, CalloutBox, ImageGallery, Timeline, Section
- **Inline data only**: No external JSON/CSV file dependencies
- **Flat structure**: `/presentations/filename.mdx`

---

## PROMPT 1: Foundation & Component Library

### Objective
Set up the Next.js project foundation with the complete visual-first component library and dark theme styling system.

### Scope
1. **Project Setup**: Next.js 14+ with App Router, TypeScript, Tailwind CSS, MDX support
2. **Dark Theme System**: Complete color palette and typography hierarchy
3. **Component Library**: All 7 visual-first components with proper TypeScript interfaces
4. **Styling Framework**: Consistent spacing, responsive design, accessibility
5. **Basic Layout**: App structure and routing setup

### Deliverables for Prompt 1
```
/
├── package.json                    (Next.js 14+, TypeScript, Tailwind, MDX)
├── tailwind.config.js             (Dark theme colors, custom spacing)
├── tsconfig.json                  (TypeScript configuration)
├── next.config.js                 (MDX support configuration)
├── app/
│   ├── layout.tsx                 (Root layout with dark theme)
│   ├── page.tsx                   (Home page with project overview)
│   ├── presentations/
│   │   └── [slug]/page.tsx        (Dynamic presentation page route)
│   └── globals.css                (Dark theme styles, typography)
├── components/
│   ├── Hero.tsx                   (Big impact opening component)
│   ├── MetricGrid.tsx             (Multiple metrics in cards)
│   ├── ChartSection.tsx           (Charts with narrative)
│   ├── CalloutBox.tsx             (Highlighted insights)
│   ├── ImageGallery.tsx           (Visual comparisons)
│   ├── Timeline.tsx               (Process flows)
│   ├── Section.tsx                (Flexible content container)
│   └── ui/                        (Basic UI primitives)
├── lib/
│   ├── types.ts                   (TypeScript interfaces)
│   ├── utils.ts                   (Utility functions)
│   └── constants.ts               (Color schemes, layouts)
└── presentations/                 (Example MDX files)
    └── example-presentation.mdx   (Sample presentation)
```

### Technical Requirements for Prompt 1
- **Next.js 14+** with App Router and static generation
- **TypeScript** with strict mode and proper interfaces
- **Tailwind CSS** with custom dark theme configuration
- **MDX support** with proper component imports
- **Responsive design** using desktop-first approach
- **Accessibility** WCAG compliant color contrasts
- **Component props validation** with TypeScript interfaces

### Color System Implementation
```css
/* Dark theme color palette */
--bg-page: #0f1419;           /* Main background */
--bg-card: #1a1f29;           /* Card backgrounds */
--bg-surface: #242b38;        /* Elevated elements */
--text-primary: #ffffff;      /* Main text */
--text-secondary: #b8c4d0;    /* Supporting text */
--text-muted: #8a96a3;        /* Less important text */
--accent-blue: #4a9eff;       /* Primary accent */
--accent-green: #52c93f;      /* Success/positive */
--accent-orange: #ff8c42;     /* Warning/attention */
--accent-red: #ff5757;        /* Error/negative */
```

### Component Interface Requirements
Each component must include:
- Proper TypeScript interface with all props
- Dark theme styling with consistent colors
- Responsive design patterns
- Accessibility attributes
- Layout options (where applicable)
- Visual emphasis options (where applicable)

---

## HANDOFF DOCUMENT: Project State After Prompt 1

### What Will Be Complete
1. ✅ **Project Foundation**: Next.js 14+ with TypeScript, Tailwind, MDX
2. ✅ **Dark Theme System**: Complete color palette and styling
3. ✅ **Component Library**: All 7 components fully implemented
4. ✅ **Type System**: Complete TypeScript interfaces
5. ✅ **Basic Routing**: Dynamic presentation page routing
6. ✅ **Example Content**: Sample MDX presentation file

### What Will Be Available
- **Complete component library** ready for MDX usage
- **Dark theme styling system** with consistent colors
- **Type-safe interfaces** for all component props
- **Responsive design patterns** for all screen sizes
- **Example MDX presentation** showing component usage

### Project Structure Status
```
✅ Next.js 14+ project setup
✅ All 7 visual-first components implemented
✅ Dark theme color system configured
✅ TypeScript interfaces defined
✅ Tailwind CSS configured with custom theme
✅ MDX support configured
✅ Dynamic routing for presentations
✅ Example MDX presentation file
```

### Key Files to Reference in Prompt 2
- `/components/` - All implemented visual components
- `/lib/types.ts` - TypeScript interfaces and data structures
- `/lib/constants.ts` - Color schemes, layouts, chart types
- `/presentations/example-presentation.mdx` - Component usage examples
- `/app/presentations/[slug]/page.tsx` - MDX rendering logic

---

## PROMPT 2: MDX Processing & AI Generation Optimization

### Objective
Implement the MDX processing pipeline and optimize the system for AI generation, including the single-prompt conversion system.

### Scope
1. **MDX Processing Pipeline**: Parse and render MDX with components
2. **AI Generation Helpers**: Utilities for single-prompt generation
3. **Data Processing**: Inline data validation and formatting
4. **Error Handling**: Graceful degradation and fallbacks
5. **Documentation**: Complete component guidelines and examples
6. **Testing**: Sample presentations and validation

### Deliverables for Prompt 2
```
├── lib/
│   ├── mdx.ts                     (MDX processing utilities)
│   ├── validation.ts              (Data validation helpers)
│   └── ai-helpers.ts              (AI generation utilities)
├── components/
│   ├── fallbacks/                 (Error boundaries and placeholders)
│   │   ├── ChartPlaceholder.tsx   (Chart fallback component)
│   │   ├── MetricPlaceholder.tsx  (Metric fallback component)
│   │   └── ErrorBoundary.tsx      (General error boundary)
│   └── providers/                 (Context providers if needed)
├── presentations/
│   ├── business-results.mdx       (Business presentation example)
│   ├── product-demo.mdx           (Product demo example)
│   ├── quarterly-review.mdx       (Quarterly review example)
│   └── market-analysis.mdx        (Market analysis example)
├── docs/
│   └── ai-generation-guide.md     (Complete AI generation guide)
└── app/
    ├── api/                       (API routes if needed)
    └── presentations/
        └── [slug]/
            ├── page.tsx           (Enhanced with error handling)
            └── loading.tsx        (Loading state)
```

### Technical Requirements for Prompt 2
- **MDX processing** with proper component rendering
- **Data validation** for chart data and metrics
- **Error boundaries** with beautiful dark-themed fallbacks
- **AI optimization** utilities for single-prompt generation
- **Example presentations** covering different use cases
- **Performance optimization** for static generation

### AI Generation Features
1. **Single-prompt template** for converting MDX outlines
2. **Data processing utilities** for inline data validation
3. **Component usage examples** in multiple presentation types
4. **Error handling** that never breaks the presentation
5. **Generation guidelines** for AI prompt engineering

### Success Criteria for Final System
- ✅ **Single-prompt generation**: Complete presentations from MDX outlines
- ✅ **Visual consistency**: Beautiful dark theme across all components
- ✅ **Error resilience**: Graceful degradation when data is invalid
- ✅ **Performance**: Fast loading, static generation
- ✅ **Accessibility**: WCAG compliant, proper contrast ratios
- ✅ **Responsive**: Works on all screen sizes
- ✅ **Professional quality**: Suitable for business presentations

---

## Implementation Guidelines

### For Prompt 1 (Foundation)
```
Create a Next.js 14+ project with the complete visual-first component library for presentation generation.

Requirements:
- Dark theme only (#0f1419 background, white text)
- 7 visual components: Hero, MetricGrid, ChartSection, CalloutBox, ImageGallery, Timeline, Section
- TypeScript interfaces for all props
- Tailwind CSS with custom dark theme
- MDX support with component imports
- Responsive design (desktop-first)
- Professional presentation quality

Reference the updated PRD and component guidelines for complete specifications.
```

### For Prompt 2 (MDX Processing)
```
Complete the MDX processing pipeline and AI generation optimization for the presentation system.

The foundation from Prompt 1 provides:
- Complete component library (7 components)
- Dark theme styling system
- TypeScript interfaces
- Basic MDX routing

Add:
- MDX processing with inline data validation
- Error handling and fallbacks
- AI generation utilities
- Multiple example presentations
- Complete documentation

Focus on single-prompt AI generation capability and error resilience.
```

---

## File Reference for Implementation

### Key Documents
- **PRD**: `/initial_notes/prd_2.md` - Complete project requirements and architecture
- **Component Guidelines**: `/prompts/kpi-report-generation-prompts/component_guidelines.md` - Detailed component specifications
- **This Plan**: Current document with implementation breakdown

### Component Specifications
All component interfaces, props, usage examples, and styling requirements are detailed in the component guidelines document. Each component must follow the dark theme color system and support the specified layout options.

### Success Metrics
- **AI Generation Success**: >95% success rate for MDX outline → presentation conversion
- **Visual Quality**: Professional, presentation-ready output
- **Performance**: Fast loading, optimized for screen sharing
- **Reliability**: Zero layout breaks, consistent dark theme application

This plan ensures optimal context management by splitting the implementation into foundation (Prompt 1) and processing/optimization (Prompt 2), with a clear handoff document to maintain continuity.