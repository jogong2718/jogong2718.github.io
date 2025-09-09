import Header from "@/components/Header"
import Hero from "@/components/Hero"
import QuoteSection from "@/components/QuoteSection"
import WorkSection from "@/components/WorkSection"
import ProcessSection from "@/components/ProcessSection"
import QuoteHero from "@/components/QuoteHero"
import ClientsSection from "@/components/ClientsSection"
import Footer from "@/components/Footer"
import Section from "@/components/Section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="quote" className="min-h-screen">
        <QuoteSection />
      </Section>
      <Section id="work">
        <WorkSection />
      </Section>
      <Section id="quote-hero">
        <QuoteHero />
      </Section>
      <Section id="process">
        <ProcessSection />
      </Section>
      <Section id="clients">
        <ClientsSection />
      </Section>
      <Footer />
    </main>
  )
}
