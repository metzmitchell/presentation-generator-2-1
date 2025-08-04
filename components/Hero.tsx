'use client'

import { HeroProps } from '@/lib/types'
import { cn } from '@/lib/utils'

export function Hero({ 
  title, 
  subtitle, 
  highlight, 
  highlightLabel, 
  layout = 'full-width' 
}: HeroProps) {
  const isFullWidth = layout === 'full-width'
  
  return (
    <section className={cn(
      'relative overflow-hidden my-12',
      isFullWidth ? 'min-h-screen flex items-center justify-center' : 'py-24',
      'px-8 lg:px-6 md:px-4'
    )}>
      {/* Background gradient effect */}
      {isFullWidth && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-purple/10" />
      )}
      
      <div className={cn(
        'relative z-10 max-w-6xl mx-auto text-center'
      )}>
        {/* Main title */}
        <h1 className="font-display text-7xl lg:text-6xl md:text-5xl font-black text-white mb-8 animate-fade-in leading-tight">
          {title}
        </h1>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="text-2xl lg:text-xl md:text-lg text-secondary mb-16 animate-slide-up max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        
        {/* Highlight metric */}
        {highlight && (
          <div className="animate-scale-in mt-8">
            <div className="inline-flex flex-col items-center p-12 rounded-3xl bg-card/80 backdrop-blur-sm border border-accent-blue/30 shadow-2xl shadow-accent-blue/10">
              <span className="text-7xl lg:text-6xl md:text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent mb-4">
                {highlight}
              </span>
              {highlightLabel && (
                <span className="text-xl lg:text-lg md:text-base text-secondary font-medium">
                  {highlightLabel}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}