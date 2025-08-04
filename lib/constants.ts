// Design system constants for the presentation generator

export const colors = {
  // Backgrounds
  bg: {
    page: '#0f1419',
    card: '#1a1f29',
    surface: '#242b38',
  },
  
  // Text
  text: {
    primary: '#ffffff',
    secondary: '#b8c4d0',
    muted: '#8a96a3',
  },
  
  // Accents
  accent: {
    blue: '#4a9eff',
    green: '#52c93f',
    orange: '#ff8c42',
    red: '#ff5757',
    purple: '#b084ff',
    yellow: '#ffcc33',
  },
  
  border: '#2d3748',
} as const

export const chartColors = {
  // Multi-series charts
  categorical: [
    colors.accent.blue,
    colors.accent.green,
    colors.accent.orange,
    colors.accent.purple,
    colors.accent.red,
    colors.accent.yellow,
  ],
  
  // Single-series charts by scheme
  primary: [colors.accent.blue, '#3182ce', '#2c5aa0'],
  success: [colors.accent.green, '#38a169', '#2f7d32'],
  warning: [colors.accent.orange, '#ed8936', '#d69e2e'],
  error: [colors.accent.red, '#dc2626', '#b91c1c'],
} as const

export const spacing = {
  section: 'py-16 px-8',
  container: 'max-w-7xl mx-auto',
  card: 'p-8 rounded-xl',
  gap: {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  },
} as const

export const typography = {
  h1: 'text-5xl font-bold text-white',
  h2: 'text-4xl font-bold text-white',
  h3: 'text-3xl font-semibold text-white',
  h4: 'text-2xl font-semibold text-white',
  body: 'text-lg text-white leading-relaxed',
  secondary: 'text-lg text-secondary',
  caption: 'text-sm text-muted',
} as const

export const emphasisStyles = {
  highlight: 'bg-accent-blue/20 border-2 border-accent-blue text-white',
  callout: 'bg-card border-2 border-border text-white',
  success: 'bg-accent-green/20 border-2 border-accent-green text-white',
  warning: 'bg-accent-orange/20 border-2 border-accent-orange text-white',
  subtle: 'bg-surface border border-border text-secondary',
  normal: 'bg-card border border-border text-white',
} as const

export const layoutStyles = {
  'full-width': 'w-full',
  'centered': 'text-center',
  'sidebar': 'grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8',
  'text-chart': 'grid grid-cols-2 lg:grid-cols-1 gap-8 items-center',
  'grid': 'grid gap-8',
} as const