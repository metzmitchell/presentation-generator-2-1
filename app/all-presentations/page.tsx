import Link from 'next/link'

const presentations = [
  {
    slug: 'example-presentation',
    title: 'Example Presentation',
    description: 'A sample presentation to demonstrate the system',
    filename: 'example-presentation.mdx'
  },
  {
    slug: 'business-results',
    title: 'Business Results',
    description: 'Presentation showcasing business performance and outcomes',
    filename: 'business-results.mdx'
  },
  {
    slug: 'market-analysis',
    title: 'Market Analysis',
    description: 'Comprehensive market research and analysis presentation',
    filename: 'market-analysis.mdx'
  },
  {
    slug: 'quarterly-review',
    title: 'Quarterly Review',
    description: 'Quarterly business review and performance metrics',
    filename: 'quarterly-review.mdx'
  },
  {
    slug: 'product-demo',
    title: 'Product Demo',
    description: 'Product demonstration and feature showcase',
    filename: 'product-demo.mdx'
  },
  {
    slug: 'july_2025_presentation',
    title: 'July 2025 Presentation',
    description: 'Special presentation for July 2025',
    filename: 'july_2025_presentation.mdx'
  }
]

export default function AllPresentationsPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent mb-4">
            All Presentations
          </h1>
          <p className="text-xl text-secondary">
            Browse and access all available presentations
          </p>
        </div>

        {/* Navigation back to home */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-muted hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Presentations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((presentation) => (
            <Link
              key={presentation.slug}
              href={`/presentations/${presentation.slug}`}
              className="group block"
            >
              <div className="bg-card border border-border rounded-lg p-6 h-full transition-all duration-200 hover:border-accent-blue/50 hover:shadow-lg hover:shadow-accent-blue/10 group-hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <svg className="w-5 h-5 text-muted group-hover:text-accent-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent-blue transition-colors">
                  {presentation.title}
                </h3>
                
                <p className="text-secondary text-sm mb-4 line-clamp-2">
                  {presentation.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted font-mono">
                    {presentation.filename}
                  </span>
                  <span className="text-xs text-accent-blue font-medium">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-muted text-sm">
            Total presentations: {presentations.length}
          </p>
        </div>
      </div>
    </div>
  )
} 