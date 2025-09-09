import AnimatedText from "./AnimatedText"

export default function QuoteHero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/100 to-black/80"
          style={{
            maskImage: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%)",
            WebkitMaskImage: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%)",
          }}
        />
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/IMG_1959.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16">
        <div className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[0.9] tracking-tight text-white mix-blend-difference">
          <AnimatedText delay={0}>
            I'm passionate about creating innovative solutions that make a difference. From conceptual design to deployment, I bring technical expertise and creative vision to every project.
          </AnimatedText>

        </div>
      </div>
    </section>
  )
}
