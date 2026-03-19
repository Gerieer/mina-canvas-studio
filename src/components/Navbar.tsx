import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-display text-lg tracking-[0.15em] uppercase transition-colors ${
            scrolled ? "text-charcoal" : ""
          }`}
          style={scrolled ? {} : { color: "white" }}
        >
          Arte Mina
        </button>
        <div className="flex gap-6 md:gap-8">
          {[
            { label: "Sobre", id: "about" },
            { label: "Galería", id: "gallery" },
            { label: "Contacto", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-body text-xs tracking-[0.2em] uppercase hover:text-gold transition-colors ${
                scrolled ? "text-warm-gray" : ""
              }`}
              style={scrolled ? {} : { color: "rgba(255,255,255,0.8)" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
