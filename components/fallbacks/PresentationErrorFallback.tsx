/**
 * Presentation Error Fallback
 * 
 * Full-page error display for when a presentation fails to load
 * Maintains professional appearance for business presentations
 */

interface PresentationErrorFallbackProps {
  error?: string;
  slug?: string;
  onRetry?: () => void;
}

export function PresentationErrorFallback({ 
  error, 
  slug, 
  onRetry 
}: PresentationErrorFallbackProps) {
  return (
    <div className="min-h-screen bg-page flex items-center justify-center px-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Icon */}
        <div className="text-8xl mb-8">📋</div>
        
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Presentation Unavailable
          </h1>
          <p className="text-xl text-gray-400">
            {error || 'The requested presentation could not be loaded'}
          </p>
        </div>

        {/* Details */}
        {slug && (
          <div className="bg-card rounded-xl p-6 text-left">
            <h3 className="text-white font-medium mb-2">Details:</h3>
            <div className="text-gray-400 text-sm space-y-1">
              <div>Presentation: <code className="text-blue-400">{slug}.mdx</code></div>
              <div>Location: <code className="text-blue-400">/presentations/{slug}.mdx</code></div>
            </div>
          </div>
        )}

        {/* Common Solutions */}
        <div className="bg-card rounded-xl p-6 text-left">
          <h3 className="text-white font-medium mb-3">Common Solutions:</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Check that the MDX file exists in the presentations folder</li>
            <li>• Verify the filename matches the URL (case-sensitive)</li>
            <li>• Ensure valid MDX syntax and component usage</li>
            <li>• Check that all component props follow the correct format</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Try Again
            </button>
          )}
          <a
            href="/"
            className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Go Home
          </a>
        </div>

        {/* Help */}
        <div className="text-center text-xs text-gray-600">
          Need help? Check the component guidelines for proper MDX syntax.
        </div>
      </div>
    </div>
  );
}