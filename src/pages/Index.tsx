import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArtistSection from "@/components/ArtistSection";
import GallerySection from "@/components/GallerySection";
import CollectionDespuesSection from "@/components/CollectionDespuesSection";
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
      <ContactSection />
    </div>
  );
};

export default Index;
