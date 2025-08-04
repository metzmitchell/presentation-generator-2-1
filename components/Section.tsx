'use client'

import { SectionProps } from '@/lib/types'
import { cn } from '@/lib/utils'

export function Section({ 
  title, 
  layout = 'centered', 
  emphasis = 'normal',
  children 
}: SectionProps) {
  const emphasisClasses = {
    normal: 'text-primary',
    subtle: 'text-secondary',
  }
  
  const layoutClasses = {
    centered: 'text-center max-w-4xl mx-auto',
    left: 'text-left max-w-5xl',
    wide: 'max-w-6xl mx-auto',
    'full-width': 'max-w-6xl mx-auto', // Legacy support
    sidebar: 'text-left max-w-5xl' // Legacy support
  }
  
  return (
    <section className="px-8 lg:px-6 md:px-4 py-20 my-8">
      <div className="max-w-6xl mx-auto">
        <div className={cn(
          'animate-fade-in',
          layoutClasses[layout] || layoutClasses.centered,
          emphasis === 'subtle' && 'opacity-90'
        )}>
          {title && (
            <h2 className={cn(
              'font-display text-4xl md:text-5xl font-bold mb-16',
              layout === 'centered' ? 'text-center' : 'text-left',
              emphasisClasses[emphasis]
            )}>
              {title}
            </h2>
          )}
          <div className={cn(
            'prose prose-invert prose-xl max-w-none',
            'prose-headings:text-white prose-headings:font-display prose-headings:font-bold',
            'prose-h3:text-2xl prose-h3:mb-6 prose-h3:mt-12',
            'prose-ul:list-none prose-ul:ml-0 prose-li:text-secondary prose-li:mb-6 prose-li:text-lg',
            'prose-li:flex prose-li:items-start prose-li:gap-4',
            'prose-li:before:content-["▶"] prose-li:before:text-accent-blue prose-li:before:text-xl prose-li:before:shrink-0 prose-li:before:mt-1',
            'prose-strong:text-white prose-strong:font-bold prose-strong:bg-accent-blue/20 prose-strong:px-2 prose-strong:py-1 prose-strong:rounded-md prose-strong:not-italic',
            'prose-em:text-accent-blue prose-em:not-italic prose-em:font-medium',
            'prose-p:text-secondary prose-p:mb-8 prose-p:leading-relaxed prose-p:text-lg',
            layout === 'centered' ? 'text-center' : 'text-left',
            emphasisClasses[emphasis]
          )}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}