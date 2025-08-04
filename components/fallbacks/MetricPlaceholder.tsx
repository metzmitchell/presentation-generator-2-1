/**
 * Metric Placeholder Component
 * 
 * Displays when metric data is invalid or unavailable
 * Maintains dark theme consistency
 */

interface MetricPlaceholderProps {
  error?: string;
}

export function MetricPlaceholder({ error }: MetricPlaceholderProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 min-h-[120px] flex items-center justify-center">
      <div className="text-center space-y-2">
        <div className="text-3xl mb-2">📊</div>
        <div className="text-white font-medium">Metric Unavailable</div>
        {error && (
          <div className="text-sm text-red-400 max-w-xs">
            {error}
          </div>
        )}
        <div className="text-xs text-gray-500">
          Check data format
        </div>
      </div>
    </div>
  );
}