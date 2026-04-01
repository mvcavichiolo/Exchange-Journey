import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutProgram from "@/components/AboutProgram";
import ProcessSection from "@/components/ProcessSection";
import ExperienceSection from "@/components/ExperienceSection";
import GallerySection from "@/components/GallerySection";
import ThanksSection from "@/components/ThanksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutProgram />
      <ProcessSection />
      <ExperienceSection />
      <GallerySection />
      <ThanksSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
