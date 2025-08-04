'use client'

import { CalloutBoxProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import { emphasisStyles } from '@/lib/constants'

export function CalloutBox({ emphasis, children }: CalloutBoxProps) {
  return (
    <section className="px-8 lg:px-6 md:px-4 py-12 my-12">
      <div className="max-w-6xl mx-auto">
        <div className={cn(
          'p-8 rounded-2xl',
          emphasisStyles[emphasis],
          'animate-fade-in shadow-lg'
        )}>
          <div className={cn(
            'prose prose-invert prose-lg max-w-none',
            'prose-p:text-inherit prose-p:mb-4 prose-p:leading-relaxed',
            'prose-strong:text-white prose-strong:font-bold prose-strong:bg-white/10 prose-strong:px-2 prose-strong:py-1 prose-strong:rounded-md prose-strong:not-italic',
            'prose-em:text-current prose-em:not-italic prose-em:font-medium'
          )}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}