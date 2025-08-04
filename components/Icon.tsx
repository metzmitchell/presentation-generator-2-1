'use client'

import { cn } from '@/lib/utils'

export interface IconProps {
  name: string
  category?: 'doodle' | 'space'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
  variant?: 'regular' | 'filled' | 'outline' | 'sticker'
}

// Size mapping for consistent sizing
const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6', 
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
  '2xl': 'w-24 h-24'
}

// Helper function to get icon path based on category and variant
function getIconPath(name: string, category: 'doodle' | 'space', variant: string = 'regular'): string {
  if (category === 'doodle') {
    return `/icons/doodle/SVG/${name}.svg`
  } else {
    // For space icons, map variants to folder structure
    const variantMap = {
      regular: 'regular-outline',
      filled: 'regular-filled-outline', 
      outline: 'regular-outline',
      sticker: 'regular-filled-outline-sticker'
    }
    
    const folderName = variantMap[variant as keyof typeof variantMap] || 'regular-outline'
    return `/icons/space/${folderName}/SVG/${name}.svg`
  }
}

export function Icon({ 
  name, 
  category = 'doodle', 
  size = 'md', 
  className,
  variant = 'regular' 
}: IconProps) {
  const iconPath = getIconPath(name, category, variant)
  
  return (
    <img 
      src={iconPath}
      alt={name}
      className={cn(
        sizeMap[size],
        'inline-block',
        className
      )}
      style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }} // Makes icons white for dark theme
    />
  )
}

// Specialized icon components for common use cases
export function DoodleIcon({ name, size = 'sm', className, ...props }: Omit<IconProps, 'category'>) {
  return <Icon name={name} category="doodle" size={size} className={className} {...props} />
}

export function SpaceIcon({ name, size = 'lg', variant = 'filled', className, ...props }: Omit<IconProps, 'category'>) {
  return <Icon name={name} category="space" size={size} variant={variant} className={className} {...props} />
}

// Trend arrow icons for metrics
export function TrendIcon({ direction, className }: { direction: 'up' | 'down' | 'neutral', className?: string }) {
  if (direction === 'neutral') return null
  
  const iconName = direction === 'up' ? 'arrows/arrow-up' : 'arrows/arrow-down'
  
  return (
    <DoodleIcon 
      name={iconName} 
      size="sm" 
      className={cn('ml-1', className)}
    />
  )
}