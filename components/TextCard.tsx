'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import * as LucideIcons from 'lucide-react'

interface TextCardProps {
  title?: string
  icon?: string
  lucideIcon?: keyof typeof LucideIcons
  emphasis?: 'normal' | 'highlight' | 'success' | 'warning' | 'subtle'
  layout?: 'horizontal' | 'vertical'
  variant?: 'default' | 'compact' | 'standout'
  children: ReactNode
}

export function TextCard({ 
  title, 
  icon, 
  lucideIcon,
  emphasis = 'normal', 
  layout = 'vertical',
  variant = 'default',
  children 
}: TextCardProps) {
  const emphasisClasses = {
    normal: 'bg-card/80 backdrop-blur-sm border border-border/50 text-white shadow-lg',
    highlight: 'bg-gradient-to-br from-accent-blue/20 to-accent-blue/10 border-2 border-accent-blue/50 text-white shadow-xl shadow-accent-blue/10',
    success: 'bg-gradient-to-br from-accent-green/20 to-accent-green/10 border-2 border-accent-green/50 text-white shadow-xl shadow-accent-green/10',
    warning: 'bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 border-2 border-accent-orange/50 text-white shadow-xl shadow-accent-orange/10',
    subtle: 'bg-surface/60 backdrop-blur-sm border border-border/30 text-secondary shadow-md',
  }

  const variantClasses = {
    default: 'p-8 rounded-2xl',
    compact: 'p-6 rounded-xl', 
    standout: 'p-10 rounded-3xl transform hover:scale-105 transition-all duration-300'
  }

  const isHorizontal = layout === 'horizontal'
  
  // Render Lucide icon if provided
  const renderIcon = () => {
    if (lucideIcon && LucideIcons[lucideIcon]) {
      const IconComponent = LucideIcons[lucideIcon] as React.ComponentType<{ className?: string }>
      return (
        <div className={cn(
          'rounded-full p-4 shrink-0',
          emphasis === 'highlight' && 'bg-accent-blue/20',
          emphasis === 'success' && 'bg-accent-green/20',
          emphasis === 'warning' && 'bg-accent-orange/20',
          emphasis === 'normal' && 'bg-surface/50',
          emphasis === 'subtle' && 'bg-border/20'
        )}>
          <IconComponent className={cn(
            'h-8 w-8',
            emphasis === 'highlight' && 'text-accent-blue',
            emphasis === 'success' && 'text-accent-green', 
            emphasis === 'warning' && 'text-accent-orange',
            emphasis === 'normal' && 'text-white',
            emphasis === 'subtle' && 'text-muted'
          )} />
        </div>
      )
    }
    
    if (icon) {
      return (
        <div className={cn(
          'rounded-full p-4 shrink-0 text-center',
          emphasis === 'highlight' && 'bg-accent-blue/20',
          emphasis === 'success' && 'bg-accent-green/20',
          emphasis === 'warning' && 'bg-accent-orange/20',
          emphasis === 'normal' && 'bg-surface/50',
          emphasis === 'subtle' && 'bg-border/20'
        )}>
          <span className="text-4xl" role="img" aria-label="icon">
            {icon}
          </span>
        </div>
      )
    }
    
    return null
  }

  return (
    <div className={cn(
      'animate-fade-in transition-all duration-300 my-12',
      emphasisClasses[emphasis],
      variantClasses[variant],
      isHorizontal ? 'flex items-start gap-8' : 'flex flex-col'
    )}>
      {/* Icon and Title Section */}
      <div className={cn(
        isHorizontal ? 'flex items-start gap-8 flex-1' : 'flex flex-col items-center text-center gap-6 mb-8'
      )}>
        {renderIcon()}
        
        <div className={cn(
          isHorizontal ? 'flex-1' : 'w-full'
        )}>
          {title && (
            <h3 className={cn(
              'font-display font-bold text-white mb-6',
              variant === 'standout' ? 'text-3xl' : 'text-2xl',
              isHorizontal ? 'text-left' : 'text-center'
            )}>
              {title}
            </h3>
          )}
          
          <div className={cn(
            'prose prose-invert max-w-none',
            variant === 'standout' ? 'prose-lg' : 'prose-base',
            'prose-p:text-inherit prose-p:mb-4 prose-p:leading-relaxed',
            'prose-ul:list-none prose-ul:ml-0 prose-li:text-inherit prose-li:mb-3',
            'prose-li:flex prose-li:items-start prose-li:gap-3',
            'prose-li:before:content-["→"] prose-li:before:text-accent-blue prose-li:before:font-bold prose-li:before:shrink-0',
            'prose-strong:text-white prose-strong:font-bold prose-strong:bg-accent-blue/20 prose-strong:px-2 prose-strong:py-1 prose-strong:rounded-md prose-strong:not-italic',
            'prose-em:text-accent-blue prose-em:not-italic prose-em:font-medium',
            isHorizontal ? 'text-left' : 'text-center'
          )}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}