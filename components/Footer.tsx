import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a href="mailto:jonathangong2005@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/jonathan-gong-005491263/" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/jogong2718" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Jonathan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
