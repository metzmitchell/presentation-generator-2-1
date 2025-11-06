import { YouTubeEmbedProps } from '@/lib/types'
import { cn } from '@/lib/utils'

/**
 * Extracts YouTube video ID from various URL formats or returns the ID if already provided
 */
function extractVideoId(videoIdOrUrl: string): string {
  // If it's already just an ID (no slashes or special chars), return it
  if (!videoIdOrUrl.includes('/') && !videoIdOrUrl.includes('?')) {
    return videoIdOrUrl
  }

  // Handle various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/.*[?&]v=([^&\n?#]+)/,
  ]

  for (const pattern of patterns) {
    const match = videoIdOrUrl.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  // If no pattern matches, assume it's already an ID
  return videoIdOrUrl
}

/**
 * Gets padding-bottom percentage for responsive aspect ratio
 */
function getAspectRatioPadding(aspectRatio: '16:9' | '4:3' | '1:1'): string {
  const ratios = {
    '16:9': (9 / 16) * 100, // 56.25%
    '4:3': (3 / 4) * 100,   // 75%
    '1:1': (1 / 1) * 100,   // 100%
  }
  return `${ratios[aspectRatio]}%`
}

export function YouTubeEmbed({
  videoId,
  title,
  aspectRatio = '16:9',
  className,
}: YouTubeEmbedProps) {
  const extractedId = extractVideoId(videoId)
  const embedUrl = `https://www.youtube.com/embed/${extractedId}`

  return (
    <div className={cn('w-full my-4', className)}>
      <div 
        className="relative w-full overflow-hidden rounded-lg bg-surface/20"
        style={{ paddingBottom: getAspectRatioPadding(aspectRatio) }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src={embedUrl}
          title={title || `YouTube video player`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )
}

