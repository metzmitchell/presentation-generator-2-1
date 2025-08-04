// Component type definitions for the presentation system

export type Layout = 'full-width' | 'centered' | 'sidebar' | 'text-chart' | 'grid'
export type Emphasis = 'highlight' | 'callout' | 'success' | 'warning' | 'subtle' | 'normal'
export type ChartType = 'bar' | 'line' | 'pie' | 'area' | 'scatter'
export type ColorScheme = 'primary' | 'success' | 'warning' | 'error'
export type TimelineStatus = 'completed' | 'current' | 'upcoming'
export type GalleryLayout = 'grid' | 'carousel' | 'comparison'
export type Orientation = 'vertical' | 'horizontal'

// Hero Component
export interface HeroProps {
  title: string
  subtitle?: string
  highlight?: string
  highlightLabel?: string
  layout?: 'full-width' | 'centered'
}

// MetricGrid Component
export interface MetricData {
  label: string
  value: number
  unit?: string
  change?: number
}

export interface MetricGridProps {
  metrics: MetricData[]
  columns?: 2 | 3 | 4
}

// ChartSection Component
export interface ChartData {
  name: string
  value: number
}

export interface ChartSectionProps {
  title: string
  type: ChartType
  data: ChartData[]
  colorScheme?: ColorScheme
  layout?: 'text-chart' | 'full-width'
  children?: React.ReactNode
}

// CalloutBox Component
export interface CalloutBoxProps {
  emphasis: Emphasis
  children: React.ReactNode
}

// ImageGallery Component
export interface ImageItem {
  src: string
  alt: string
  caption?: string
}

export interface ImageGalleryProps {
  images: ImageItem[]
  layout?: GalleryLayout
}

// Timeline Component
export interface TimelineItem {
  title: string
  description?: string
  date?: string
  status?: TimelineStatus
}

export interface TimelineProps {
  items: TimelineItem[]
  orientation?: Orientation
}

// Section Component
export interface SectionProps {
  title?: string
  layout?: 'centered' | 'full-width' | 'sidebar'
  emphasis?: 'normal' | 'subtle'
  children: React.ReactNode
}

// MDX Frontmatter
export interface PresentationFrontmatter {
  title: string
  date: string
  type?: string
}