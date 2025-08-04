/**
 * Error Boundary Component
 * 
 * Catches and displays errors in a dark-themed fallback UI
 * Prevents entire presentation from breaking
 */

'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error for debugging
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const Fallback = this.props.fallback;
        return <Fallback error={this.state.error} reset={this.reset} />;
      }

      return (
        <div className="bg-card rounded-xl border border-red-500/20 p-8 my-8">
          <div className="text-center space-y-4">
            <div className="text-4xl mb-4">⚠️</div>
            <div className="text-white font-semibold text-xl">Component Error</div>
            <div className="text-gray-400 text-sm max-w-md mx-auto">
              A component failed to render properly. This could be due to invalid data or configuration.
            </div>
            {this.state.error && (
              <details className="text-left text-xs text-gray-500 mt-4 bg-gray-800 p-4 rounded-lg">
                <summary className="cursor-pointer mb-2 text-gray-400">Error Details</summary>
                <pre className="whitespace-pre-wrap overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <button
              onClick={this.reset}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * HOC to wrap components with error boundary
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

/**
 * Simple error fallback for specific components
 */
export function ComponentErrorFallback({ 
  error, 
  reset, 
  componentName 
}: { 
  error?: Error; 
  reset: () => void; 
  componentName?: string;
}) {
  return (
    <div className="bg-card rounded-xl border border-red-500/20 p-6">
      <div className="text-center space-y-3">
        <div className="text-2xl">⚠️</div>
        <div className="text-white font-medium">
          {componentName || 'Component'} Error
        </div>
        <div className="text-gray-400 text-sm">
          {error?.message || 'Component failed to render'}
        </div>
        <button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
}