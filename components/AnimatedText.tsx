"use client"

import { useEffect, useRef } from "react"

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
}

export default function AnimatedText({ children, className = "", delay = 0 }: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = textRef.current
    if (!element) return

    const words = children.split(" ")
    element.innerHTML = words
      .map(
        (word, index) =>
          `<span style="display: inline-block; opacity: 0.001; filter: blur(10px); transform: translateY(40px);" data-word="${index}">${word}</span>`,
      )
      .join(" ")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const wordSpans = element.querySelectorAll("[data-word]")
            wordSpans.forEach((span, index) => {
              setTimeout(
                () => {
                  if (span instanceof HTMLElement) {
                    span.style.transition = "all 0.8s cubic-bezier(0.44, 0, 0.56, 1)"
                    span.style.opacity = "1"
                    span.style.filter = "blur(0px)"
                    span.style.transform = "translateY(0px)"
                  }
                },
                delay + index * 100,
              )
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [children, delay])

  return <div ref={textRef} className={className} />
}
