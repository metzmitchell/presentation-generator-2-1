/**
 * Chart Placeholder Component
 * 
 * Displays when chart data is invalid or unavailable
 * Maintains dark theme consistency
 */

interface ChartPlaceholderProps {
  type: string;
  title?: string;
  error?: string;
}

export function ChartPlaceholder({ type, title, error }: ChartPlaceholderProps) {
  const getIcon = (chartType: string) => {
    switch (chartType.toLowerCase()) {
      case 'bar': return '📊';
      case 'line': return '📈';
      case 'pie': return '🥧';
      case 'area': return '📊';
      case 'scatter': return '📊';
      default: return '📊';
    }
  };

  return (
    <div className="w-full bg-card rounded-xl border border-border p-12 min-h-[300px] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-6xl mb-4">{getIcon(type)}</div>
        <div className="text-white font-semibold text-xl">Chart Unavailable</div>
        {title && (
          <div className="text-gray-400 text-lg">{title}</div>
        )}
        <div className="text-sm text-gray-500">
          Type: {type}
        </div>
        {error && (
          <div className="text-sm text-red-400 max-w-md mx-auto">
            {error}
          </div>
        )}
        <div className="text-xs text-gray-600">
          Check data format: [{`{name: "string", value: number}`}]
        </div>
      </div>
    </div>
  );
}