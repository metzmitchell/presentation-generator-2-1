'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import * as LucideIcons from 'lucide-react'

interface TextHeavyItem {
  title: string
  subtitle?: string
  icon?: string
  lucideIcon?: keyof typeof LucideIcons
  emphasis?: 'primary' | 'secondary' | 'accent'
}

interface TextHeavyProps {
  title?: string
  subtitle?: string
  items: TextHeavyItem[]
  background?: 'default' | 'textured' | 'gradient'
  layout?: 'center' | 'left'
  children?: ReactNode
}

export function TextHeavy({ 
  title, 
  subtitle, 
  items,
  background = 'default',
  layout = 'center',
  children 
}: TextHeavyProps) {
  const backgroundClasses = {
    default: 'bg-background',
    textured: 'bg-background relative overflow-hidden',
    gradient: 'bg-gradient-to-br from-background via-card/20 to-background'
  }

  const renderIcon = (item: TextHeavyItem) => {
    if (item.lucideIcon && LucideIcons[item.lucideIcon]) {
      const IconComponent = LucideIcons[item.lucideIcon] as React.ComponentType<{ className?: string }>
      return <IconComponent className="h-16 w-16 mb-4 mx-auto text-accent-blue" />
    }
    
    if (item.icon) {
      return (
        <div className="text-6xl mb-4 text-center">
          {item.icon}
        </div>
      )
    }
    
    return null
  }

  return (
    <section className={cn(
      'min-h-screen flex items-center justify-center px-8 py-16 relative',
      backgroundClasses[background]
    )}>
      {/* Textured background overlay */}
      {background === 'textured' && (
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20 transform rotate-12 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-tl from-accent-green/10 via-transparent to-accent-orange/10 transform -rotate-12 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )}

      <div className={cn(
        'max-w-6xl mx-auto w-full relative z-10',
        layout === 'center' ? 'text-center' : 'text-left'
      )}>
        {/* Main title and subtitle */}
        {title && (
          <div className="mb-16">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-2xl md:text-3xl text-secondary font-light leading-relaxed max-w-4xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Main content items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {items.map((item, index) => (
            <div 
              key={index}
              className={cn(
                'animate-fade-in transform hover:scale-105 transition-all duration-500',
                layout === 'center' ? 'text-center' : 'text-left'
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {renderIcon(item)}
              
              <h2 className={cn(
                'font-display font-bold mb-4 leading-tight',
                item.emphasis === 'primary' && 'text-4xl md:text-5xl text-white',
                item.emphasis === 'secondary' && 'text-3xl md:text-4xl text-secondary',
                item.emphasis === 'accent' && 'text-3xl md:text-4xl text-accent-blue',
                !item.emphasis && 'text-4xl md:text-5xl text-white'
              )}>
                {item.title}
              </h2>
              
              {item.subtitle && (
                <p className={cn(
                  'font-sans leading-relaxed',
                  item.emphasis === 'primary' && 'text-xl text-secondary',
                  item.emphasis === 'secondary' && 'text-lg text-muted',
                  item.emphasis === 'accent' && 'text-xl text-white',
                  !item.emphasis && 'text-xl text-secondary'
                )}>
                  {item.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Additional content */}
        {children && (
          <div className={cn(
            'prose prose-invert prose-xl max-w-none',
            'prose-p:text-secondary prose-p:mb-6 prose-p:leading-relaxed prose-p:text-xl',
            'prose-ul:list-none prose-ul:ml-0 prose-li:text-secondary prose-li:mb-4 prose-li:text-xl',
            'prose-li:flex prose-li:items-center prose-li:gap-4',
            'prose-li:before:content-["▶"] prose-li:before:text-accent-blue prose-li:before:text-2xl prose-li:before:shrink-0',
            'prose-strong:text-white prose-strong:font-bold prose-strong:text-2xl prose-strong:bg-accent-blue/20 prose-strong:px-3 prose-strong:py-2 prose-strong:rounded-lg prose-strong:not-italic',
            'prose-em:text-accent-blue prose-em:not-italic prose-em:font-medium prose-em:text-2xl',
            layout === 'center' ? 'text-center' : 'text-left'
          )}>
            {children}
          </div>
        )}
      </div>
    </section>
  )
}