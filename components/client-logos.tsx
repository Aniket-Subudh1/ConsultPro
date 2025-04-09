"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface ClientLogosProps {
  className?: string
}

export function ClientLogos({ className }: ClientLogosProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("client-logos")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.disconnect()
    }
  }, [])

  const logos = [
    {
      name: "Company 1",
      url: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Company 2",
      url: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Company 3",
      url: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop&flip=horizontal",
    },
    {
      name: "Company 4",
      url: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop&flip=both",
    },
    {
      name: "Company 5",
      url: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop&flip=vertical",
    },
    {
      name: "Company 6",
      url: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=200&auto=format&fit=crop&flip=horizontal",
    },
  ]

  return (
    <div id="client-logos" className={`${className || ""}`}>
      <Card className="bg-background/50 backdrop-blur-sm p-8 shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex justify-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-24 relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={logo.url || "/placeholder.svg"} alt={logo.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
