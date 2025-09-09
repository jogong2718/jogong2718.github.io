import AnimatedText from "./AnimatedText"

export default function QuoteSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-16 md:px-16 sticky top-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[0.9] tracking-tight text-center text-balance text-white">
          <AnimatedText delay={0}>
            I believe great code is more than functional—it's elegant, scalable, and tells a story. Every project is an opportunity to solve real problems while crafting experiences that users love and developers can build upon.
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}
