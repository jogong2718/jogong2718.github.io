"use client"

import { useEffect, useMemo, useRef, useState } from "react"

// Custom cursor with white dot, halo glow, and animated sparks
export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isCoarse, setIsCoarse] = useState(true) // default to true to prevent SSR issues
  const [interactive, setInteractive] = useState(false)
  const [, setTick] = useState(0) // force re-render per frame for position/sparks
  const target = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const intensity = useRef(0) // 0 = normal, 1 = interactive
  const raf = useRef<number | null>(null)
  const styleElRef = useRef<HTMLStyleElement | null>(null)

  // Check for coarse pointer only on client
  useEffect(() => {
    setMounted(true)
    const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches
    setIsCoarse(coarse)
  }, [])

  // Precompute sparks positions
  const sparks = useMemo(
    () => Array.from({ length: 10 }).map((_, i) => ({
      angle: (i / 10) * Math.PI * 2,
      radius: 12 + (i % 3) * 4,
      phase: Math.random() * Math.PI * 2,
      speed: 0.02 + (i % 5) * 0.004,
      size: 1.5 + (i % 2),
    })),
    []
  )

  useEffect(() => {
    if (isCoarse) return

    // Hide the native cursor globally on fine pointers (Chrome-compatible)
    const styleEl = document.createElement("style")
    styleEl.id = "custom-cursor-hide"
    styleEl.textContent = `
      @media (pointer: fine) {
        *, *:before, *:after {
          cursor: none !important;
        }
        html, body {
          cursor: none !important;
        }
      }
    `
    document.head.appendChild(styleEl)
    styleElRef.current = styleEl
    
    // Also set cursor none on document body as fallback
    document.body.style.cursor = 'none'

    const isElemInteractive = (el: Element | null): boolean => {
      let node: Element | null = el
      while (node && node !== document.body) {
        const tag = node.tagName.toLowerCase()
        if (tag === "a" || tag === "button" || tag === "input" || tag === "select" || tag === "textarea") return true
        const role = (node as HTMLElement).getAttribute("role")
        if (role === "button" || role === "link") return true
        if ((node as HTMLElement).dataset.cursorInteractive !== undefined || (node as HTMLElement).dataset.interactive !== undefined) return true
        const cur = window.getComputedStyle(node as Element).cursor
        if (cur === "pointer") return true
        node = node.parentElement
      }
      return false
    }

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      setInteractive(isElemInteractive(e.target as Element))
    }
    window.addEventListener("mousemove", onMove)

    const animate = () => {
      // Smooth follow
      pos.current.x += (target.current.x - pos.current.x) * 0.7
      pos.current.y += (target.current.y - pos.current.y) * 0.7
      // Smoothly animate intensity toward target
      const targetK = interactive ? 1 : 0
      intensity.current += (targetK - intensity.current) * 0.18
      setTick((t) => (t + 1) % 1_000_000)
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
      if (styleElRef.current) {
        styleElRef.current.remove()
        styleElRef.current = null
      }
      // Restore cursor
      document.body.style.cursor = ''
    }
  }, [isCoarse, interactive])

  if (!mounted || isCoarse) return null

  const k = intensity.current // 0..1
  const lerp = (a: number, b: number) => a + (b - a) * k
  const t = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
  const dotSize = lerp(5, 12)
  const haloSize = lerp(28, 56)
  const fillAlpha = lerp(0.18, 0.4) // white fill disc opacity
  const haloShadow = k > 0.01
    ? `0 0 24px 14px rgba(255,255,255,0.22), 0 0 64px 28px rgba(255,255,255,0.20)`
    : `0 0 16px 10px rgba(255,255,255,0.12), 0 0 44px 18px rgba(180,200,255,0.10)`

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none select-none">
      {/* Anchor container at cursor position */}
      <div style={{ transform: t }} className="absolute top-0 left-0 will-change-transform">
        {/* White fill disc to make whole cursor feel white */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full" style={{
          width: haloSize,
          height: haloSize,
          background: "white",
          opacity: fillAlpha,
        }} />

        {/* Halo shadow/glow */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ width: haloSize, height: haloSize }}>
          <div className="w-full h-full rounded-full" style={{ boxShadow: haloShadow, position: "absolute", inset: 0 }} />
        </div>

        {/* Core dot */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          style={{ width: dotSize, height: dotSize }}
        />

        {/* Sparks (denser and whiter on interactive) */}
        {sparks.map((s, i) => {
          const now = performance.now()
          const a = s.angle + s.phase + now * s.speed * 0.001
          const baseR = s.radius + (1.5 + 2.5 * k) * Math.sin(now * 0.003 + s.phase)
          const r = baseR + 4 * k
          const x = Math.cos(a) * r
          const y = Math.sin(a) * r
          const opacity = 0.55 + 0.35 * k + 0.25 * Math.sin(now * 0.004 + s.phase)
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: s.size,
                height: s.size,
                transform: `translate3d(${x - s.size / 2}px, ${y - s.size / 2}px, 0)`,
                background: "white",
                boxShadow: "0 0 6px rgba(255,255,255,0.9)",
                opacity,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
