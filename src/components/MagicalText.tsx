'use client'

import { useEffect, useRef } from 'react'

export default function MagicalText({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = panelRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          } else {
            entry.target.classList.remove('active')
          }
        })
      },
      {
        root: null,
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0,
      }
    )

    observer.observe(el)

    return () => {
      observer.unobserve(el)
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={panelRef} className={`panel ${className}`} id={id}>
      {children}
    </section>
  )
}
