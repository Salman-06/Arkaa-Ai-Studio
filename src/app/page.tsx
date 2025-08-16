import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import AiDesignerSection from '@/components/sections/ai-designer-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <AiDesignerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
