'use client'

import { useState } from 'react'
import { ImageGalleryProps } from '@/lib/types'
import { cn } from '@/lib/utils'

export function ImageGallery({ images, layout = 'grid' }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  if (layout === 'carousel') {
    return (
      <section className="px-8 lg:px-6 md:px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main image display */}
          <div className="bg-card rounded-xl border border-border p-4 mb-4">
            <div className="relative aspect-video bg-surface rounded-lg overflow-hidden">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="w-full h-full object-contain"
              />
            </div>
            {images[selectedIndex].caption && (
              <p className="text-center text-secondary mt-4">
                {images[selectedIndex].caption}
              </p>
            )}
          </div>
          
          {/* Thumbnail navigation */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    'flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all',
                    selectedIndex === index
                      ? 'border-accent-blue'
                      : 'border-border hover:border-accent-blue/50'
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    )
  }
  
  if (layout === 'comparison' && images.length === 2) {
    return (
      <section className="px-8 lg:px-6 md:px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video bg-surface rounded-lg overflow-hidden mb-4">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                {image.caption && (
                  <p className="text-center text-secondary text-sm">
                    {image.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  // Default grid layout
  return (
    <section className="px-8 lg:px-6 md:px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          'grid gap-6',
          images.length === 1 ? 'grid-cols-1' :
          images.length === 2 ? 'grid-cols-2 md:grid-cols-1' :
          'grid-cols-3 lg:grid-cols-2 md:grid-cols-1'
        )}>
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video bg-surface rounded-lg overflow-hidden mb-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              {image.caption && (
                <p className="text-center text-secondary text-sm">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}