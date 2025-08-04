'use client'

import { ChartSectionProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import { chartColors, colors } from '@/lib/constants'
import { validateChartData, validateChartType, validateColorScheme, createChartFallback } from '@/lib/validation'
import { ChartPlaceholder } from '@/components/fallbacks'
import { ErrorBoundary } from '@/components/fallbacks'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from 'recharts'

export function ChartSection({
  title,
  type,
  data,
  colorScheme = 'primary',
  layout = 'text-chart',
  children,
  dataKeys = ['value'],
  seriesNames,
}: ChartSectionProps) {
  // Validate and sanitize inputs
  const validatedType = validateChartType(type)
  const validatedColorScheme = validateColorScheme(colorScheme)
  const validationResult = validateChartData(data, dataKeys)
  
  // Use fallback data if validation fails
  const chartData = validationResult.valid ? validationResult.data! : createChartFallback(validatedType)
  
  const isTextChart = layout === 'text-chart'
  const chartColor = chartColors[validatedColorScheme as keyof typeof chartColors][0]

  // Show placeholder if data is invalid
  if (!validationResult.valid) {
    return (
      <section className="px-8 lg:px-6 md:px-4 py-16 my-12">
        <div className="max-w-7xl mx-auto">
          <div className={cn(
            isTextChart ? 'grid grid-cols-2 lg:grid-cols-1 gap-8 items-center' : ''
          )}>
            {/* Text content */}
            {(children || title) && (
              <div className={cn(
                isTextChart ? '' : 'mb-8',
                'space-y-4'
              )}>
                {title && (
                  <h2 className="text-3xl font-bold text-white">{title}</h2>
                )}
                {children && (
                  <div className="text-lg text-secondary leading-relaxed">
                    {children}
                  </div>
                )}
              </div>
            )}
            
            {/* Chart placeholder */}
            <ChartPlaceholder 
              type={validatedType}
              title={title}
              error={validationResult.errors.join(', ')}
            />
          </div>
        </div>
      </section>
    )
  }
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface p-3 rounded-lg border border-border">
          <p className="text-sm text-secondary">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-lg font-semibold text-white">
              {entry.name && entry.name !== entry.dataKey && (
                <span style={{ color: entry.color }}>{entry.name}: </span>
              )}
              {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      )
    }
    return null
  }
  
  const renderChart = () => {
    const chartProps = {
      data: chartData,
      margin: { top: 10, right: 10, left: 10, bottom: 10 },
    }
    
    const axisProps = {
      stroke: colors.text.muted,
      style: { fontSize: 12 },
    }
    
    const gridProps = {
      stroke: colors.border,
      strokeDasharray: '3 3',
    }
    
    switch (type) {
      case 'bar':
        return (
          <BarChart {...chartProps}>
            <CartesianGrid {...gridProps} />
            <XAxis dataKey="name" {...axisProps} />
            <YAxis {...axisProps} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" fill={chartColor} radius={[8, 8, 0, 0]} />
          </BarChart>
        )
        
      case 'line':
        return (
          <LineChart {...chartProps}>
            <CartesianGrid {...gridProps} />
            <XAxis dataKey="name" {...axisProps} />
            <YAxis {...axisProps} />
            <Tooltip content={<CustomTooltip />} />
            {dataKeys.map((key, index) => {
              // For multi-line charts, use categorical colors; for single-line, use color scheme
              const color = dataKeys.length > 1 
                ? chartColors.categorical[index % chartColors.categorical.length]
                : chartColors[validatedColorScheme as keyof typeof chartColors][0];
              
              return (
                <Line 
                  key={key}
                  type="monotone" 
                  dataKey={key} 
                  stroke={color} 
                  strokeWidth={3}
                  dot={{ fill: color, r: 6 }}
                  activeDot={{ r: 8 }}
                  name={seriesNames?.[index] || key}
                />
              );
            })}
            {dataKeys.length > 1 && (
              <Legend 
                verticalAlign="bottom" 
                height={36}
                wrapperStyle={{ color: colors.text.secondary }}
              />
            )}
          </LineChart>
        )
        
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ value, percent }) => `${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill={chartColor}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chartColors.categorical[index % chartColors.categorical.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              wrapperStyle={{ color: colors.text.secondary }}
            />
          </PieChart>
        )
        
      case 'area':
        return (
          <AreaChart {...chartProps}>
            <CartesianGrid {...gridProps} />
            <XAxis dataKey="name" {...axisProps} />
            <YAxis {...axisProps} />
            <Tooltip content={<CustomTooltip />} />
            {dataKeys.map((key, index) => {
              // For multi-area charts, use categorical colors; for single-area, use color scheme
              const color = dataKeys.length > 1 
                ? chartColors.categorical[index % chartColors.categorical.length]
                : chartColors[validatedColorScheme as keyof typeof chartColors][0];
              
              return (
                <Area 
                  key={key}
                  type="monotone" 
                  dataKey={key} 
                  stroke={color}
                  strokeWidth={2}
                  fill={color}
                  fillOpacity={0.3}
                  name={seriesNames?.[index] || key}
                />
              );
            })}
            {dataKeys.length > 1 && (
              <Legend 
                verticalAlign="bottom" 
                height={36}
                wrapperStyle={{ color: colors.text.secondary }}
              />
            )}
          </AreaChart>
        )
        
      case 'scatter':
        return (
          <ScatterChart {...chartProps}>
            <CartesianGrid {...gridProps} />
            <XAxis dataKey="name" {...axisProps} />
            <YAxis dataKey="value" {...axisProps} />
            <Tooltip content={<CustomTooltip />} />
            <Scatter name="Data" data={chartData} fill={chartColor}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chartColor} />
              ))}
            </Scatter>
          </ScatterChart>
        )
        
      default:
        return <div>Unsupported chart type</div>
    }
  }
  
  return (
    <section className="px-8 lg:px-6 md:px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          isTextChart ? 'grid grid-cols-2 lg:grid-cols-1 gap-8 items-center' : ''
        )}>
          {/* Text content (left side for text-chart layout) */}
          {(children || title) && (
            <div className={cn(
              isTextChart ? '' : 'mb-8',
              'space-y-4'
            )}>
              {title && (
                <h2 className="text-3xl font-bold text-white">{title}</h2>
              )}
              {children && (
                <div className="text-lg text-secondary leading-relaxed">
                  {children}
                </div>
              )}
            </div>
          )}
          
          {/* Chart (right side for text-chart layout) */}
          <ErrorBoundary
            fallback={({ error, reset }) => (
              <ChartPlaceholder 
                type={validatedType}
                title={title}
                error={error?.message || 'Chart rendering failed'}
              />
            )}
          >
            <div className="bg-card rounded-xl border border-border p-8 animate-fade-in">
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  {renderChart()}
                </ResponsiveContainer>
              </div>
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  )
}