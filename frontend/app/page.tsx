import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import HeroSectionNew from "@/components/sections/HeroSectionNew";
import AboutSectionNew from "@/components/sections/AboutSectionNew";
import ServicesSectionNew from "@/components/sections/ServicesSectionNew";
import ProjectsSectionNew from "@/components/sections/ProjectsSectionNew";
import ProductsSectionNew from "@/components/sections/ProductsSectionNew";
import WhyChooseUsSectionNew from "@/components/sections/WhyChooseUsSectionNew";
import ProcessSectionNew from "@/components/sections/ProcessSectionNew";
import TechnologiesSectionNew from "@/components/sections/TechnologiesSectionNew";
import CultureSectionNew from "@/components/sections/CultureSectionNew";
import ContactSectionNew from "@/components/sections/ContactSectionNew";
import FeaturedBlogs from "@/components/sections/FeaturedBlogs";

export default function Home() {
  return (
    <main className="w-full">
      {/* <HeroSection/> */}
      <HeroSectionNew />
      <AboutSectionNew />
      <ServicesSectionNew />
      <ProjectsSectionNew />
      <ProductsSectionNew />
      <WhyChooseUsSectionNew />
      <ProcessSectionNew />
      <TechnologiesSectionNew />
      <CultureSectionNew />
      <FeaturedBlogs />
      {/* <ContactSectionNew /> */}
    </main>
  );
}
