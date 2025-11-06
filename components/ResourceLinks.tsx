'use client'

import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'

export interface ResourceLink {
  url: string
  title: string
  description: string
  icon?: string
}

export interface ResourceLinksProps {
  links: ResourceLink[]
}

export function ResourceLinks({ links }: ResourceLinksProps) {
  return (
    <section className="px-8 lg:px-6 md:px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group block bg-card border border-border rounded-xl p-6',
                'transition-all duration-200 hover:border-accent-blue/50',
                'hover:shadow-lg hover:shadow-accent-blue/10',
                'hover:scale-[1.02]'
              )}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent-blue transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted group-hover:text-accent-blue transition-colors shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

