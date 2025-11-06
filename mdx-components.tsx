import type { MDXComponents } from 'mdx/types'
import * as Components from '@/components'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Hero: Components.Hero,
    MetricGrid: Components.MetricGrid,
    ChartSection: Components.ChartSection,
    CalloutBox: Components.CalloutBox,
    ImageGallery: Components.ImageGallery,
    Timeline: Components.Timeline,
    Section: Components.Section,
    TextCard: Components.TextCard,
    BulletList: Components.BulletList,
    TextHeavy: Components.TextHeavy,
    DarkSection: Components.DarkSection,
  }
}