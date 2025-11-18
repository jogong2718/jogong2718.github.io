import CustomCursor from "@/components/CustomCursor"
import type { SimpleIcon } from 'simple-icons'
import { siYoutube, siX, siInstagram, siGmail, siGithub } from 'simple-icons'

export default function LinksPage() {
  // helper to render a Simple Icon (uses currentColor)
  const renderIcon = (icon: SimpleIcon) => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<path d="${icon.path}" />` }} />
  )

  const links = [
    { name: "YouTube", url: "https://www.youtube.com/@Jigglytalks", icon: renderIcon(siYoutube) },
    { name: "X (Twitter)", url: "https://x.com/jigglytalks", icon: renderIcon(siX) },
    { name: "Instagram", url: "https://www.instagram.com/jigglytalks/", icon: renderIcon(siInstagram) },
    { name: "Email", url: "mailto:jigglytalks@gmail.com", icon: renderIcon(siGmail) },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jonathan-gong-005491263/",
      icon: (
        <svg className="w-6 h-6 flex-shrink-0 relative -top-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
        </svg>
      )
    },
    { name: "GitHub", url: "https://github.com/jogong2718", icon: renderIcon(siGithub) },
  ]

  return (
    <main className="min-h-screen bg-black text-white cursor-none flex items-center justify-center">
      <CustomCursor />
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-normal tracking-tight">Links</h1>
          <p className="text-gray-400">Connect with me</p>
        </div>

        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  {link.icon}
                </div>
                <span className="text-lg font-medium">{link.name}</span>
              </div>
              <svg
                className="w-5 h-5 text-gray-500 group-hover:text-white transform group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
