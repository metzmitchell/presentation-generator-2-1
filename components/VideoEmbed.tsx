'use client'

import { useState, useEffect } from 'react'

export interface VideoEmbedProps {
  videoId: string
  title: string
  description: string
}

export function VideoEmbed({ videoId, title, description }: VideoEmbedProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Only render iframe on client side
    setMounted(true)
  }, [])

  return (
    <section className="px-8 lg:px-6 md:px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-secondary text-base leading-relaxed">{description}</p>
          </div>
          
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {mounted ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title={title}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ border: 'none' }}
              />
            ) : (
              <div className="absolute top-0 left-0 w-full h-full bg-surface rounded-lg flex items-center justify-center">
                <div className="text-muted">Loading video...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

