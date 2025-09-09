"use client"

import AnimatedText from "./AnimatedText"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-10 py-10 md:px-10 md:py-16">
      {/* Background gradient blur effect */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-[80px] mix-blend-hard-light md:w-full md:h-3/4" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center md:text-left">
          <div className="text-6xl md:text-8xl lg:text-9xl font-normal leading-[0.9] tracking-tight mb-4 text-white">
            <div className="block">
              <AnimatedText delay={0}>Building</AnimatedText>
            </div>
            <div className="block">
              <AnimatedText delay={200}>digital</AnimatedText>
            </div>
            <div className="block">
              <AnimatedText delay={400}>solutions</AnimatedText>
            </div>
            <div className="block md:hidden">
              <AnimatedText delay={600}>that</AnimatedText>
            </div>
            <div className="block md:hidden">
              <AnimatedText delay={800}>matter.</AnimatedText>
            </div>
            <div className="hidden md:block">
              <AnimatedText delay={600}>that matter.</AnimatedText>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
