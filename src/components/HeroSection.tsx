import { motion } from "framer-motion";
import heroImage from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Arte Mina - Pintora Mexicana Contemporánea"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] uppercase drop-shadow-lg"
          style={{ color: "white" }}
        >
          Mina Maldonado
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-32 md:w-48 h-px bg-gold my-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-base md:text-lg tracking-[0.3em] uppercase font-light drop-shadow-md"
          style={{ color: "white" }}
        >
          Pintora Mexicana Contemporánea
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
