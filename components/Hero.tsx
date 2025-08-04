'use client'

import { HeroProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import { SpaceIcon } from '@/components/Icon'

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
      'relative overflow-hidden',
      isFullWidth ? [
        'h-screen flex items-center justify-center px-8 lg:px-6 md:px-4',
        // Full viewport coverage with proper positioning
        'w-screen -ml-[50vw] left-1/2'
      ] : 'py-24 my-12 px-8 lg:px-6 md:px-4'
    )}>
      {/* Background gradient effect */}
      {isFullWidth && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-purple/10" />
          {/* Decorative space icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <SpaceIcon name="star" className="absolute top-20 left-20 opacity-20" size="lg" />
            <SpaceIcon name="rocket" className="absolute top-32 right-32 opacity-15" size="xl" />
            <SpaceIcon name="satellite" className="absolute bottom-40 left-16 opacity-10" size="lg" />
            <SpaceIcon name="galaxy" className="absolute bottom-20 right-20 opacity-20" size="xl" />
            <SpaceIcon name="stars" className="absolute top-1/2 left-10 opacity-10" size="lg" />
            <SpaceIcon name="moon-full-moon" className="absolute top-16 right-16 opacity-15" size="lg" />
          </div>
          {/* Bottom fade transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </>
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