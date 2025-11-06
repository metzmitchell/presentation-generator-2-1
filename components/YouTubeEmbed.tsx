'use client'

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export function YouTubeEmbed({ videoId, title = 'YouTube video player', className = '' }: YouTubeEmbedProps) {
  // Extract video ID from full URL if provided
  const extractVideoId = (idOrUrl: string): string => {
    // If it's already just an ID (no special characters), return it
    if (!idOrUrl.includes('youtube.com') && !idOrUrl.includes('youtu.be') && !idOrUrl.includes('/')) {
      return idOrUrl
    }
    
    // Extract from embed URL (handles URLs like https://www.youtube.com/embed/VIDEO_ID?si=...)
    const embedMatch = idOrUrl.match(/embed\/([^?&\/]+)/)
    if (embedMatch) return embedMatch[1]
    
    // Extract from youtu.be URL
    const shortMatch = idOrUrl.match(/youtu\.be\/([^?&\/]+)/)
    if (shortMatch) return shortMatch[1]
    
    // Extract from regular YouTube URL
    const regularMatch = idOrUrl.match(/[?&]v=([^&]+)/)
    if (regularMatch) return regularMatch[1]
    
    // If it looks like just an ID, return as-is
    return idOrUrl
  }

  const cleanVideoId = extractVideoId(videoId)
  const embedUrl = `https://www.youtube.com/embed/${cleanVideoId}`

  return (
    <div className={`w-full max-w-4xl mx-auto rounded-lg overflow-hidden ${className}`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  )
}

