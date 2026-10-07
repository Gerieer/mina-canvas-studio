import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArtistSection from "@/components/ArtistSection";
import GallerySection from "@/components/GallerySection";
import CollectionDespuesSection from "@/components/CollectionDespuesSection";
import CollectionOjosCerradosSection from "@/components/CollectionOjosCerradosSection";
import ExhibitionsSection from "@/components/ExhibitionsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ArtistSection />
      <GallerySection />
      <CollectionDespuesSection />
      <CollectionOjosCerradosSection />
      <ExhibitionsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
