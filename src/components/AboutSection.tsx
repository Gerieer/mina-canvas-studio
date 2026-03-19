import { motion } from "framer-motion";
import logoImage from "@/assets/logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <img src={logoImage} alt="Arte Mina" className="w-36 md:w-44 mx-auto mb-10 opacity-90" />
          <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal tracking-wide mb-4">
            Mina Maldonado
          </h2>
          <p className="font-display text-lg text-gold italic">Pintora Mexicana</p>
          <div className="gold-line w-24 mx-auto mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-center"
        >
          <p className="font-body text-warm-gray leading-relaxed text-sm md:text-base font-light">
            Bienvenido al mundo vibrante y emotivo de Mina Maldonado, una artista originaria de Zacatecas, cuya paleta se ha nutrido de la rica cultura mexicana y el realismo con toques de color. Mina ha dedicado parte de su vida a capturar la belleza de las personas a través de lienzos llenos de vida y color.
          </p>
          <p className="font-body text-warm-gray leading-relaxed text-sm md:text-base font-light">
            Su obra es un diálogo entre la vivencia de la persona y la contemporaneidad, donde sus técnicas se fusionan con una visión moderna y personal. Cada pincelada es un reflejo de su pasión por la naturaleza, la figura humana y la esencia de la persona.
          </p>
          <p className="font-body text-warm-gray leading-relaxed text-sm md:text-base font-light italic">
            Te invitamos a explorar su arte y a descubrir la magia que emana de cada una de sus creaciones.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
