"use client"
import React, { useRef, useState } from "react"

interface WorkCardProps {
  title: string
  description?: React.ReactNode
  tags?: string[]
  image: string
  year?: string
  className?: string
  index?: number
  link?: string
}

export default function WorkCard({ title, year, image, className = "", index = 0, link, description }: WorkCardProps) {
  const [open, setOpen] = useState(false)
  const isTouchRef = useRef(false)

  const handleTitlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isTouchRef.current = e.pointerType === "touch"
  }

  const handleTitleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchRef.current) {
      e.preventDefault()
      setOpen((v) => !v)
    }
  }

  return (
    <div className={`group ${link ? "cursor-default" : ""} ${className}`}>
      <div className="aspect-video overflow-hidden mb-4">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </a>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>

      {description && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-64 opacity-100 mb-2" : "max-h-0 opacity-0"
          } group-hover:max-h-64 group-hover:opacity-100 group-hover:mb-2`}
        >
          <div className="text-sm text-gray-300 leading-relaxed">{description}</div>
        </div>
      )}

      <div
        className="select-none"
        onPointerDown={handleTitlePointerDown}
        onClick={handleTitleClick}
      >
        <h3 className="text-lg font-medium text-white">{title}</h3>
        {year && <p className="text-sm text-gray-400 mt-1">{year}</p>}
      </div>
    </div>
  )
}
