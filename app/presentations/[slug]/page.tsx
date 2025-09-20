import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { Metadata } from 'next'
import { processMDXFile, getAvailablePresentations } from '@/lib/mdx'
import { PresentationErrorFallback } from '@/components/fallbacks'
import { ErrorBoundary } from '@/components/fallbacks'
import dynamic from 'next/dynamic'

interface PageProps {
  params: {
    slug: string
  }
}

// Loading component
function PresentationLoading() {
  return (
    <div className="min-h-screen bg-page flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-4xl animate-pulse">📋</div>
        <div className="text-white font-medium">Loading Presentation...</div>
        <div className="text-gray-400 text-sm">Please wait while we prepare your content</div>
      </div>
    </div>
  )
}

// Enhanced error component
function PresentationError({ slug, error }: { slug: string; error?: string }) {
  return <PresentationErrorFallback slug={slug} error={error} />
}

export async function generateStaticParams() {
  try {
    const availablePresentations = getAvailablePresentations()
    return availablePresentations.map(slug => ({ slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params
  
  // Process MDX file to get frontmatter
  const result = processMDXFile(slug)
  
  if (!result.success || !result.data) {
    return {
      title: 'Presentation Not Found',
      description: 'The requested presentation could not be found.'
    }
  }

  const { frontmatter } = result.data
  
  return {
    title: `${frontmatter.title} | Presentation`,
    description: frontmatter.description || `${frontmatter.type} presentation: ${frontmatter.title}`,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description || `${frontmatter.type} presentation`,
      type: 'website',
    }
  }
}

// Create a dynamic import map for all presentations
const presentationImports: Record<string, () => Promise<any>> = {
  'example-presentation': () => import('@/presentations/example-presentation.mdx'),
  'business-results': () => import('@/presentations/business-results.mdx'),
  'market-analysis': () => import('@/presentations/market-analysis.mdx'),
  'quarterly-review': () => import('@/presentations/quarterly-review.mdx'),
  'product-demo': () => import('@/presentations/product-demo.mdx'),
  'multi-line-chart-demo': () => import('@/presentations/multi-line-chart-demo.mdx'),
  'july-2025-marketing-performance-presentation': () => import('@/presentations/july-2025-marketing-performance-presentation.mdx'),
  'kpi-mindset-presentation': () => import('@/presentations/kpi-mindset-presentation.mdx'),
  'august-2025-marketing-performance-presentation': () => import('@/presentations/august-2025-marketing-performance-presentation.mdx'),
  'marketing-direction-for-builders': () => import('@/presentations/marketing-direction-for-builders.mdx'),
  'babrm-helene-impact': () => import('@/presentations/babrm-helene-impact.mdx'),
}

export default async function PresentationPage({ params }: PageProps) {
  const { slug } = params
  
  // Process and validate MDX file
  const result = processMDXFile(slug)
  
  if (!result.success) {
    return <PresentationError slug={slug} error={result.error} />
  }

  // Check if we have a dynamic import for this presentation
  const importFn = presentationImports[slug]
  
  if (!importFn) {
    return <PresentationError slug={slug} error={`No import found for presentation: ${slug}`} />
  }

  try {
    // Use the specific import function
    const MDXContent = dynamic(
      importFn,
      {
        loading: () => <PresentationLoading />,
        ssr: true
      }
    )
    
    return (
      <ErrorBoundary>
        <Suspense fallback={<PresentationLoading />}>
          <div className="min-h-screen bg-page -m-0 p-0">
            <MDXContent />
          </div>
        </Suspense>
      </ErrorBoundary>
    )
  } catch (error) {
    return (
      <PresentationError 
        slug={slug} 
        error={error instanceof Error ? error.message : 'Unknown error occurred'} 
      />
    )
  }
}