
import HeroSection from "@/components/HeroSection";
import FuturisticCarousel from "@/components/FuturisticCarousel";
import WhyChooseCubeAI from "@/components/WhyChooseCubeAI";
import OurProcess from "@/components/OurProcess";
import ImpactResults from "@/components/ImpactResults";
import ContactCTA from "@/components/ContactCTA";
// import StatsStrips from "@/components/StatsStrips";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <FuturisticCarousel />
      <WhyChooseCubeAI />
      <OurProcess />
      <ImpactResults />
      <ContactCTA />
      {/* <StatsStrips /> */}
    </main>
  );
}
