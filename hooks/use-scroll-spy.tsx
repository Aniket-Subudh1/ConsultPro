"use client"

import { useEffect, useState } from "react"

export function useScrollSpy(ids: string[], options: IntersectionObserverInit = { threshold: 0.5 }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, options)

    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [ids, options])

  return activeId
}
