import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import citta from "@/assets/citta.jpg";

interface Painting {
  title: string;
  image: string;
  technique: string;
  description: string[];
  closing?: string[];
}

// Obra destacada de la nueva colección. Para agregar obras, duplica el objeto.
const paintings: Painting[] = [
  {
    title: "Citta: arquitectura interior",
    image: citta,
    technique: "Técnica mixta sobre tela, 80 x 60 cm · Octubre 2026",
    description: [
      "En la búsqueda por comprender y conocer más sobre la mente, nace CITTA: una metáfora de ese territorio invisible que habitamos en silencio, donde los pensamientos se entrelazan, los recuerdos permanecen y lo consciente convive con aquello que aún no logramos descubrir.",
      "Como una arquitectura interior, la mente construye espacios, abre ventanas y guarda secretos. Hay lugares donde se acumula lo que hemos vivido, otros donde nacen nuevas ideas y rincones donde el ruido parece detenerse. Sobre nosotros, un espacio se extiende hacia lo desconocido, mientras en el centro permanece la posibilidad de encontrar quietud en medio de todo aquello que nos habita.",
      "CITTA nos invita a mirar hacia dentro y reconocer ese universo que existe dentro de cada uno, aunque compartimos muchas experiencias, cada uno construye y habita su propio mundo interior.",
    ],
    closing: [
      "Porque quizá pasamos gran parte de nuestra vida habitando nuestros pensamientos, sin detenernos a descubrir el lugar en el que nacen.",
      "Un lugar que solo nosotros conocemos y donde, de alguna manera, también vivimos.",
    ],
  },
];

const CollectionNuevaSection = () => {
  const [selected, setSelected] = useState<Painting | null>(null);

  return (
    <section id="nueva-coleccion" className="py-20 md:py-32 bg-muted/20">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal tracking-wide mb-3">
            Nueva Colección
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </motion.div>

        <div className="space-y-20">
          {paintings.map((painting) => (
            <div key={painting.title} className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group cursor-pointer overflow-hidden shadow-lg md:sticky md:top-28"
                onClick={() => setSelected(painting)}
              >
                <img
                  src={painting.image}
                  alt={painting.title}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <h3 className="font-display text-3xl md:text-4xl font-light text-charcoal mb-2">
                  {painting.title}
                </h3>
                <p className="font-body text-sm tracking-wider text-gold uppercase mb-6">
                  {painting.technique}
                </p>
                <div className="gold-line w-12 mb-6" />
                {painting.description.map((p, i) => (
                  <p key={i} className="font-body text-warm-gray text-base md:text-lg font-light leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {painting.closing?.map((p, i) => (
                  <p key={`c-${i}`} className="font-body text-warm-gray text-base md:text-lg font-light leading-relaxed mb-4 italic">
                    {p}
                  </p>
                ))}
                <p className="font-body text-sm tracking-[0.2em] text-charcoal uppercase mt-8">
                  Mina Maldonado
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 text-warm-gray hover:text-charcoal transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square md:aspect-auto flex items-center justify-center bg-muted/30 p-6">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-display text-3xl md:text-4xl font-light text-charcoal mb-2">
                    {selected.title}
                  </h3>
                  <p className="font-body text-sm tracking-wider text-gold uppercase mb-6">
                    {selected.technique}
                  </p>
                  <div className="gold-line w-12 mb-6" />
                  {selected.description.map((p, i) => (
                    <p key={i} className="font-body text-warm-gray text-base font-light leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                  {selected.closing?.map((p, i) => (
                    <p key={`c-${i}`} className="font-body text-warm-gray text-base font-light leading-relaxed mb-4 italic">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CollectionNuevaSection;
