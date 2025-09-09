"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:top-5">
      <nav className="flex items-center gap-5 px-6 py-4 bg-black/85 backdrop-blur-md border border-white/10 rounded-3xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-white font-medium text-sm hover:text-white/70 transition-colors">
            Jonathan Gong
          </Link>
        </div>

        <div className="w-px h-6 bg-white/10" />

        <div className="flex items-center gap-5">
          <Link href="/blog" className="text-white font-medium text-sm hover:text-white/70 transition-colors">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  )
}
