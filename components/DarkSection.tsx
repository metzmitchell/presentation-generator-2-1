'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface DarkSectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
  textureStyle?: 'dots' | 'lines' | 'gradient' | 'mesh'
  intensity?: 'subtle' | 'medium' | 'strong'
}

export function DarkSection({ 
  title, 
  subtitle, 
  children,
  textureStyle = 'mesh',
  intensity = 'medium'
}: DarkSectionProps) {
  const getTextureClasses = () => {
    const base = 'absolute inset-0 transition-all duration-1000'
    
    switch (textureStyle) {
      case 'dots':
        return cn(base, 'bg-[radial-gradient(circle_at_1px_1px,rgba(74,158,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] animate-pulse')
      case 'lines':
        return cn(base, 'bg-[linear-gradient(90deg,rgba(74,158,255,0.1)_1px,transparent_1px),linear-gradient(rgba(74,158,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] animate-pulse')
      case 'gradient':
        return cn(base, 'bg-gradient-to-br from-accent-blue/10 via-accent-purple/5 to-accent-green/10 animate-pulse')
      case 'mesh':
        return cn(base, 'bg-[radial-gradient(ellipse_at_top,rgba(74,158,255,0.1),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(176,132,255,0.1),transparent_50%)] animate-pulse')
      default:
        return base
    }
  }

  const getIntensityClasses = () => {
    switch (intensity) {
      case 'subtle':
        return 'opacity-30'
      case 'medium': 
        return 'opacity-50'
      case 'strong':
        return 'opacity-70'
      default:
        return 'opacity-50'
    }
  }

  return (
    <section className="relative overflow-hidden my-20">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-30" />
      
      {/* Main background with gradual transition */}
      <div className="relative bg-gradient-to-b from-background via-card/30 via-surface/50 via-card/30 to-background py-32">
        {/* Animated texture background */}
        <div className={cn(getTextureClasses(), getIntensityClasses())} />
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-blue/5 to-transparent transform -skew-y-1 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-accent-purple/5 to-transparent transform skew-y-1 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          {title && (
            <div className="text-center mb-20">
              <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed max-w-4xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <div className="relative z-20 space-y-12">
            {children}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30" />
    </section>
  )
}