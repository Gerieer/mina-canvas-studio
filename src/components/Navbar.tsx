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
      <div className="container max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex flex-wrap items-center justify-center md:justify-between gap-x-3 gap-y-1.5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`w-full text-center md:w-auto md:text-left font-display text-base md:text-xl tracking-[0.1em] md:tracking-[0.15em] uppercase transition-colors whitespace-nowrap ${
            scrolled ? "text-charcoal" : ""
          }`}
          style={scrolled ? {} : { color: "white" }}
        >
          Arte Mina
        </button>
        <div className="flex items-center justify-center gap-3 md:gap-8">
          {[
            { label: "Sobre", id: "about" },
            { label: "Galería", id: "gallery" },
            { label: "Exposiciones", id: "exhibitions" },
            { label: "Contacto", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-body text-[10px] md:text-sm tracking-[0.06em] md:tracking-[0.2em] uppercase hover:text-gold transition-colors whitespace-nowrap ${
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
