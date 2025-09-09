import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WorkCard from "@/components/WorkCard"

const workItems = [
  {
    title: "Paris Olympic Chic",
    year: "2024",
    image: "https://framerusercontent.com/images/YaOzIWmmiUvm8OMLwjLcImSPY.jpg",
    href: "/work/paris-olympic-chic",
  },
  {
    title: "Unveiling Nature's Aura",
    year: "2024",
    image: "https://framerusercontent.com/images/oaI4kG4oUIgknjyoebQOceVpg.jpg",
    href: "/work/unveiling-natures-aura",
  },
  {
    title: "Drive Beyond Horizons",
    year: "2023",
    image: "https://framerusercontent.com/images/IN3tFzngN1c2HhCvNJMC7EUQx8.jpg",
    href: "/work/drive-beyond-horizons",
  },
  {
    title: "Pure Vision",
    year: "2023",
    image: "https://framerusercontent.com/images/eDc8PczAftHSWp6vy9pTinbonAc.jpg",
    href: "/work/pure-vision",
  },
  {
    title: "Unleash the Nike",
    year: "2023",
    image: "https://framerusercontent.com/images/eR25oYUnZ7uyqPDPbyRYt0ptGc.jpg",
    href: "/work/unleash-the-nike",
  },
  {
    title: "Twilight Echoes",
    year: "2023",
    image: "/twilight-echoes-creative-project.jpg",
    href: "/work/twilight-echoes",
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-32 pb-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-normal leading-[0.9] tracking-tight">Work</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workItems.map((item) => (
              <WorkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
