"use client"
import React from "react"

interface WorkCardProps {
  title: string
  description?: string
  tags?: string[]
  image: string
  year?: string
  className?: string
  index?: number
  link?: string
}

export default function WorkCard({ title, year, image, className = "", index = 0, link }: WorkCardProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`group ${link ? 'cursor-pointer' : ''} ${className}`}
      onClick={handleClick}
    >
      <div className="aspect-video overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
        {year && <p className="text-sm text-gray-400 mt-1">{year}</p>}
      </div>
    </div>
  );
}
