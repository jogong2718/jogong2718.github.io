import Header from "@/components/Header"
import Footer from "@/components/Footer"
import InstagramFeed from "@/components/InstagramFeed"
import CustomCursor from "@/components/CustomCursor"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white cursor-none">
      <CustomCursor />
      <Header />
      
      <div className="flex items-center justify-center min-h-[30vh] px-4"> {/* reduced from 80vh */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-normal tracking-tight mt-30">
            Blog
          </h1>
        </div>
      </div>
      
      {/* Instagram feed section */}
      <div className="px-4 py-2">
        <InstagramFeed />
      </div>
      
      <Footer />
    </main>
  )
}