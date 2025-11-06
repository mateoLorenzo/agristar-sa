import HomeHero from "@/components/home-hero"
import GradientSeparator from "@/components/gradient-separator"
import CategoryCarousel from "@/components/category-carousel"
import CTASection from "@/components/cta-section"

export default function HomePage() {
  return (
    <main>
      {/* Hero section - maps to the top section with wind turbines in the template */}
      <HomeHero />

      {/* Gradient separator - creates the smooth transition from hero to content */}
      <GradientSeparator />

      {/* Category carousel - maps to the "Subscribe" section with cards in the template */}
      <CategoryCarousel />

      {/* CTA section - maps to the "Became Our Member" section in the template */}
      <CTASection />
    </main>
  )
}
