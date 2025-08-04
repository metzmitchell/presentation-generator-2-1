/**
 * Loading page for presentations
 * 
 * Displays while MDX content is being processed and rendered
 * Maintains dark theme consistency
 */

export default function Loading() {
  return (
    <div className="min-h-screen bg-page flex items-center justify-center px-8">
      <div className="text-center space-y-6">
        {/* Animated icon */}
        <div className="text-6xl animate-pulse">📋</div>
        
        {/* Loading text */}
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-white">
            Loading Presentation
          </h1>
          <p className="text-gray-400">
            Please wait while we prepare your content...
          </p>
        </div>

        {/* Loading animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Progress indicator */}
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}