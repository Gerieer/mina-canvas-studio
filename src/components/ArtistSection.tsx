import { motion } from "framer-motion";
import minaImage from "@/assets/mina-01.jpg";

const ArtistSection = () => {
  return (
    <section className="py-20 md:py-32 bg-cream-dark">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={minaImage}
              alt="Mina Maldonado - Artista"
              className="w-full aspect-[3/4] object-cover shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal tracking-wide mb-3">
              Sobre la Artista
            </h2>
            <div className="gold-line w-16 mb-8" />
            <p className="font-body text-warm-gray leading-relaxed text-sm md:text-base font-light mb-6">
              Nacida en el corazón de Zacatecas, Mina descubrió su pasión por la pintura desde temprana edad. Su conexión con las personas se reflejan en cada uno de sus cuadros, donde los colores vibrantes y las formas expresivas cuentan historias personales y de modernidad.
            </p>
            <p className="font-body text-warm-gray leading-relaxed text-sm md:text-base font-light">
              Actualmente reside en Querétaro, donde ha crecido más su pasión por la pintura, en su estudio, ella se ha convertido en un crisol de creatividad y experimentación. Su formación artística es una combinación de técnicas modernas y un espíritu innovador, lo que le permite crear obras que resuenan con la emoción y la belleza de la persona con su entorno.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
