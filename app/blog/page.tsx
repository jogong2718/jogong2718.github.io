import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-normal tracking-tight mb-8">
            Blog
          </h1>
          <div className="inline-block px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
            <span className="text-sm font-medium text-white/80">Work in Progress</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            Coming soon - insights, thoughts, and stories from my journey in technology and development.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}