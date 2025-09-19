import AnimatedText from "./AnimatedText"

export default function QuoteSection() {
  return (
    <section className="min-h-screen flex items-start justify-center px-8 pt-10 pb-12 md:px-16 md:pt-40 md:pb-16 sticky top-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.25] tracking-tight text-center text-balance text-white">
          <AnimatedText delay={0}>
            Hi! I'm Jonathan a CS student at the University of Waterloo. Here you'll find a collection of projects I think are fun (and hopefully peak your interest), as well as my professional experiences for j*bs. Oh and also a blog.
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}