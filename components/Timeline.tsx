'use client'

import { TimelineProps } from '@/lib/types'
import { cn } from '@/lib/utils'

export function Timeline({ items, orientation = 'vertical' }: TimelineProps) {
  const statusColors = {
    completed: 'bg-accent-green border-accent-green',
    current: 'bg-accent-blue border-accent-blue animate-pulse',
    upcoming: 'bg-surface border-border',
  }
  
  const statusTextColors = {
    completed: 'text-accent-green',
    current: 'text-accent-blue',
    upcoming: 'text-muted',
  }
  
  if (orientation === 'horizontal') {
    return (
      <section className="px-8 lg:px-6 md:px-4 py-16 my-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-border" />
            
            {/* Timeline items */}
            <div className="relative grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Marker */}
                  <div className="flex items-center justify-center mb-4">
                    <div className={cn(
                      'w-5 h-5 rounded-full border-4',
                      statusColors[item.status || 'upcoming']
                    )} />
                  </div>
                  
                  {/* Content */}
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className={cn(
                      'text-xl font-semibold mb-2',
                      statusTextColors[item.status || 'upcoming']
                    )}>
                      {item.title}
                    </h3>
                    {item.date && (
                      <p className="text-sm text-muted mb-2">{item.date}</p>
                    )}
                    {item.description && (
                      <p className="text-secondary">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  // Default vertical layout
  return (
    <section className="px-8 lg:px-6 md:px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          
          {/* Timeline items */}
          <div className="space-y-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Marker */}
                <div className="flex-shrink-0 w-16 flex justify-center">
                  <div className={cn(
                    'w-5 h-5 rounded-full border-4',
                    statusColors[item.status || 'upcoming']
                  )} />
                </div>
                
                {/* Content */}
                <div className="flex-grow pb-8">
                  <div className="bg-card rounded-xl border border-border p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={cn(
                        'text-xl font-semibold',
                        statusTextColors[item.status || 'upcoming']
                      )}>
                        {item.title}
                      </h3>
                      {item.date && (
                        <span className="text-sm text-muted">{item.date}</span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-secondary">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}