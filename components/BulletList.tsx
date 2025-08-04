'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import * as LucideIcons from 'lucide-react'
import { DoodleIcon, SpaceIcon } from '@/components/Icon'

interface BulletListProps {
  items: Array<{
    icon?: string
    lucideIcon?: keyof typeof LucideIcons
    doodleIcon?: string
    spaceIcon?: string
    title?: string
    content: ReactNode
    emphasis?: 'normal' | 'highlight' | 'success' | 'warning'
    number?: number | string
  }>
  layout?: 'vertical' | 'grid' | 'compact' | 'cards'
  columns?: 1 | 2 | 3
  numbered?: boolean
  variant?: 'default' | 'enhanced'
}

export function BulletList({ 
  items, 
  layout = 'vertical', 
  columns = 1,
  numbered = false,
  variant = 'default'
}: BulletListProps) {
  const getGridCols = () => {
    if (layout !== 'grid' && layout !== 'cards') return ''
    const colMap = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    }
    return colMap[columns]
  }

  const emphasisClasses = {
    normal: 'text-white',
    highlight: 'text-accent-blue',
    success: 'text-accent-green', 
    warning: 'text-accent-orange',
  }

  const containerClasses = cn(
    'my-12',
    layout === 'grid' || layout === 'cards' ? `grid ${getGridCols()} gap-10` : 'space-y-8',
    layout === 'compact' && 'space-y-4'
  )

  const renderIcon = (item: BulletListProps['items'][0], index: number) => {
    // Number display (highlighted)
    if (numbered || item.number !== undefined) {
      const displayNumber = item.number !== undefined ? item.number : index + 1
      return (
        <div className={cn(
          'flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg shrink-0',
          item.emphasis === 'highlight' && 'bg-gradient-to-br from-accent-blue/20 to-accent-blue/10 border-2 border-accent-blue text-accent-blue',
          item.emphasis === 'success' && 'bg-gradient-to-br from-accent-green/20 to-accent-green/10 border-2 border-accent-green text-accent-green',
          item.emphasis === 'warning' && 'bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 border-2 border-accent-orange text-accent-orange',
          (item.emphasis === 'normal' || !item.emphasis) && 'bg-gradient-to-br from-accent-blue/20 to-accent-blue/10 border-2 border-accent-blue text-accent-blue'
        )}>
          {displayNumber}
        </div>
      )
    }

    // New icon system - doodle icons (preferred for small UI elements)
    if (item.doodleIcon) {
      return (
        <div className={cn(
          'flex items-center justify-center w-12 h-12 rounded-xl shrink-0',
          item.emphasis === 'highlight' && 'bg-accent-blue/20',
          item.emphasis === 'success' && 'bg-accent-green/20',
          item.emphasis === 'warning' && 'bg-accent-orange/20',
          (item.emphasis === 'normal' || !item.emphasis) && 'bg-surface/50'
        )}>
          <DoodleIcon 
            name={item.doodleIcon} 
            size="md" 
            className={cn(
              item.emphasis === 'highlight' && 'brightness-0 saturate-100 invert(50%) sepia(98%) saturate(2618%) hue-rotate(204deg) brightness(99%) contrast(90%)',
              item.emphasis === 'success' && 'brightness-0 saturate-100 invert(61%) sepia(90%) saturate(2618%) hue-rotate(88deg) brightness(99%) contrast(90%)',
              item.emphasis === 'warning' && 'brightness-0 saturate-100 invert(74%) sepia(85%) saturate(2618%) hue-rotate(12deg) brightness(99%) contrast(90%)',
              (item.emphasis === 'normal' || !item.emphasis) && 'brightness-0 saturate-100 invert(100%)'
            )}
          />
        </div>
      )
    }

    // New icon system - space icons (for thematic elements)
    if (item.spaceIcon) {
      return (
        <div className={cn(
          'flex items-center justify-center w-12 h-12 rounded-xl shrink-0',
          item.emphasis === 'highlight' && 'bg-accent-blue/20',
          item.emphasis === 'success' && 'bg-accent-green/20',
          item.emphasis === 'warning' && 'bg-accent-orange/20',
          (item.emphasis === 'normal' || !item.emphasis) && 'bg-surface/50'
        )}>
          <SpaceIcon 
            name={item.spaceIcon} 
            size="md" 
            variant="filled"
            className={cn(
              item.emphasis === 'highlight' && 'brightness-0 saturate-100 invert(50%) sepia(98%) saturate(2618%) hue-rotate(204deg) brightness(99%) contrast(90%)',
              item.emphasis === 'success' && 'brightness-0 saturate-100 invert(61%) sepia(90%) saturate(2618%) hue-rotate(88deg) brightness(99%) contrast(90%)',
              item.emphasis === 'warning' && 'brightness-0 saturate-100 invert(74%) sepia(85%) saturate(2618%) hue-rotate(12deg) brightness(99%) contrast(90%)',
              (item.emphasis === 'normal' || !item.emphasis) && 'brightness-0 saturate-100 invert(100%)'
            )}
          />
        </div>
      )
    }

    // Legacy Lucide icon support
    if (item.lucideIcon && LucideIcons[item.lucideIcon]) {
      const IconComponent = LucideIcons[item.lucideIcon] as React.ComponentType<{ className?: string }>
      return (
        <div className={cn(
          'flex items-center justify-center w-12 h-12 rounded-xl shrink-0',
          item.emphasis === 'highlight' && 'bg-accent-blue/20 text-accent-blue',
          item.emphasis === 'success' && 'bg-accent-green/20 text-accent-green',
          item.emphasis === 'warning' && 'bg-accent-orange/20 text-accent-orange',
          (item.emphasis === 'normal' || !item.emphasis) && 'bg-surface/50 text-white'
        )}>
          <IconComponent className="h-6 w-6" />
        </div>
      )
    }

    // Legacy emoji icon support
    if (item.icon) {
      return (
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-surface/50 shrink-0">
          <span className="text-2xl" role="img" aria-label="bullet">
            {item.icon}
          </span>
        </div>
      )
    }

    // Default bullet
    return (
      <div className={cn(
        'w-3 h-3 rounded-full mt-3 shrink-0',
        item.emphasis === 'highlight' && 'bg-accent-blue',
        item.emphasis === 'success' && 'bg-accent-green',
        item.emphasis === 'warning' && 'bg-accent-orange',
        (item.emphasis === 'normal' || !item.emphasis) && 'bg-accent-blue'
      )} />
    )
  }

  const renderContent = (content: ReactNode) => {
    // If content is a string, render it with markdown styling
    if (typeof content === 'string') {
      return (
        <div 
          className={cn(
            'prose prose-invert max-w-none',
            variant === 'enhanced' ? 'prose-base' : 'prose-sm',
            'prose-p:text-secondary prose-p:mb-3 prose-p:leading-relaxed',
            'prose-ul:list-none prose-ul:ml-0 prose-li:text-secondary prose-li:mb-2',
            'prose-li:flex prose-li:items-start prose-li:gap-3',
            'prose-li:before:content-["→"] prose-li:before:text-accent-blue prose-li:before:font-bold prose-li:before:shrink-0',
            'prose-strong:text-white prose-strong:font-bold prose-strong:bg-accent-blue/20 prose-strong:px-2 prose-strong:py-1 prose-strong:rounded-md prose-strong:not-italic',
            'prose-em:text-accent-blue prose-em:not-italic prose-em:font-medium',
            'prose-h1:text-white prose-h1:font-display prose-h1:font-bold prose-h1:text-2xl prose-h1:mb-4',
            'prose-h2:text-white prose-h2:font-display prose-h2:font-bold prose-h2:text-xl prose-h2:mb-3',
            'prose-h3:text-white prose-h3:font-display prose-h3:font-bold prose-h3:text-lg prose-h3:mb-2',
            'prose-h4:text-white prose-h4:font-display prose-h4:font-bold prose-h4:text-base prose-h4:mb-2',
            'prose-h5:text-white prose-h5:font-display prose-h5:font-bold prose-h5:text-sm prose-h5:mb-2',
            'prose-h6:text-white prose-h6:font-display prose-h6:font-bold prose-h6:text-xs prose-h6:mb-2',
            'prose-blockquote:border-l-4 prose-blockquote:border-accent-blue prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-secondary',
            'prose-code:text-accent-blue prose-code:bg-surface/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm',
            'prose-pre:bg-surface/50 prose-pre:border prose-pre:border-border/30 prose-pre:rounded-lg prose-pre:p-4',
            'prose-a:text-accent-blue prose-a:underline prose-a:decoration-accent-blue/50 prose-a:underline-offset-2 hover:prose-a:decoration-accent-blue',
            'prose-table:border-collapse prose-table:w-full',
            'prose-th:border prose-th:border-border/30 prose-th:bg-surface/50 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-bold',
            'prose-td:border prose-td:border-border/30 prose-td:px-4 prose-td:py-2',
          )}
          dangerouslySetInnerHTML={{ 
            __html: content
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/`(.*?)`/g, '<code>$1</code>')
          }}
        />
      )
    }
    
    // If content is already ReactNode, render it with prose styling
    return (
      <div className={cn(
        'prose prose-invert max-w-none',
        variant === 'enhanced' ? 'prose-base' : 'prose-sm',
        'prose-p:text-secondary prose-p:mb-3 prose-p:leading-relaxed',
        'prose-ul:list-none prose-ul:ml-0 prose-li:text-secondary prose-li:mb-2',
        'prose-li:flex prose-li:items-start prose-li:gap-3',
        'prose-li:before:content-["→"] prose-li:before:text-accent-blue prose-li:before:font-bold prose-li:before:shrink-0',
        'prose-strong:text-white prose-strong:font-bold prose-strong:bg-accent-blue/20 prose-strong:px-2 prose-strong:py-1 prose-strong:rounded-md prose-strong:not-italic',
        'prose-em:text-accent-blue prose-em:not-italic prose-em:font-medium',
        'prose-h1:text-white prose-h1:font-display prose-h1:font-bold prose-h1:text-2xl prose-h1:mb-4',
        'prose-h2:text-white prose-h2:font-display prose-h2:font-bold prose-h2:text-xl prose-h2:mb-3',
        'prose-h3:text-white prose-h3:font-display prose-h3:font-bold prose-h3:text-lg prose-h3:mb-2',
        'prose-h4:text-white prose-h4:font-display prose-h4:font-bold prose-h4:text-base prose-h4:mb-2',
        'prose-h5:text-white prose-h5:font-display prose-h5:font-bold prose-h5:text-sm prose-h5:mb-2',
        'prose-h6:text-white prose-h6:font-display prose-h6:font-bold prose-h6:text-xs prose-h6:mb-2',
        'prose-blockquote:border-l-4 prose-blockquote:border-accent-blue prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-secondary',
        'prose-code:text-accent-blue prose-code:bg-surface/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm',
        'prose-pre:bg-surface/50 prose-pre:border prose-pre:border-border/30 prose-pre:rounded-lg prose-pre:p-4',
        'prose-a:text-accent-blue prose-a:underline prose-a:decoration-accent-blue/50 prose-a:underline-offset-2 hover:prose-a:decoration-accent-blue',
        'prose-table:border-collapse prose-table:w-full',
        'prose-th:border prose-th:border-border/30 prose-th:bg-surface/50 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-bold',
        'prose-td:border prose-td:border-border/30 prose-td:px-4 prose-td:py-2',
      )}>
        {content}
      </div>
    )
  }

  return (
    <section className="px-8 lg:px-6 md:px-4 py-16 my-12">
      <div className="max-w-6xl mx-auto">
        <div className={containerClasses}>
          {items.map((item, index) => (
        <div 
          key={index}
          className={cn(
            'animate-fade-in',
            layout === 'cards' && 'bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 hover:bg-card/70 transition-all duration-300',
            layout === 'cards' ? 'flex flex-col gap-6' : 'flex gap-8 items-start',
            layout === 'compact' ? 'gap-4' : 'gap-8'
          )}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={cn(
            layout === 'cards' ? 'flex items-center gap-4 mb-2' : 'mt-1'
          )}>
            {renderIcon(item, index)}
            
            {layout === 'cards' && item.title && (
              <h4 className={cn(
                'font-display font-bold text-xl',
                emphasisClasses[item.emphasis || 'normal']
              )}>
                {item.title}
              </h4>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            {layout !== 'cards' && item.title && (
              <h4 className={cn(
                'font-display font-bold text-lg mb-2',
                emphasisClasses[item.emphasis || 'normal']
              )}>
                {item.title}
              </h4>
            )}
            
            {renderContent(item.content)}
          </div>
        </div>
          ))}
        </div>
      </div>
    </section>
  )
}