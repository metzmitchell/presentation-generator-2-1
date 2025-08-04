'use client'

import { MetricGridProps } from '@/lib/types'
import { cn, formatNumber, getChangeColor, getChangeSymbol } from '@/lib/utils'
import { validateMetricData, createMetricsFallback } from '@/lib/validation'
import { MetricPlaceholder } from '@/components/fallbacks'
import { ErrorBoundary } from '@/components/fallbacks'

export function MetricGrid({ metrics, columns = 3 }: MetricGridProps) {
  // Validate metrics data
  const validationResult = validateMetricData(metrics)
  const validatedMetrics = validationResult.valid ? validationResult.data! : createMetricsFallback()
  const gridCols = {
    2: 'grid-cols-2 md:grid-cols-1',
    3: 'grid-cols-3 lg:grid-cols-2 md:grid-cols-1',
    4: 'grid-cols-4 lg:grid-cols-2 md:grid-cols-1',
  }
  
  // Show placeholder if validation fails
  if (!validationResult.valid) {
    return (
      <section className="px-8 lg:px-6 md:px-4 py-16 my-12">
        <div className="max-w-6xl mx-auto">
          <div className={cn(
            'grid gap-8 lg:gap-6',
            gridCols[columns]
          )}>
            {Array.from({ length: columns }, (_, index) => (
              <MetricPlaceholder key={index} error={validationResult.errors.join(', ')} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <ErrorBoundary
      fallback={({ error, reset }) => (
        <section className="px-8 lg:px-6 md:px-4 py-16 my-12">
          <div className="max-w-6xl mx-auto">
            <div className={cn(
              'grid gap-8 lg:gap-6',
              gridCols[columns]
            )}>
              {Array.from({ length: columns }, (_, index) => (
                <MetricPlaceholder key={index} error={error?.message || 'Metric rendering failed'} />
              ))}
            </div>
          </div>
        </section>
      )}
    >
      <section className="px-8 lg:px-6 md:px-4 py-16 my-12">
        <div className="max-w-6xl mx-auto">
          <div className={cn(
            'grid gap-8 lg:gap-6',
            gridCols[columns]
          )}>
            {validatedMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:border-accent-blue/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Metric label */}
              <p className="text-sm text-muted mb-2 uppercase tracking-wider">
                {metric.label}
              </p>
              
              {/* Metric value */}
              <p className="text-4xl lg:text-3xl font-bold text-white mb-3">
                {formatNumber(metric.value, metric.unit)}
              </p>
              
              {/* Change indicator */}
              {metric.change !== undefined && (
                <div className={cn('flex items-center gap-1', getChangeColor(metric.change))}>
                  <span className="text-sm font-medium">
                    {getChangeSymbol(metric.change)}{Math.abs(metric.change)}%
                  </span>
                  {metric.change > 0 ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  ) : metric.change < 0 ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  ) : null}
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}