import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import maresInternos from "@/assets/mares-internos.jpg";
import impermanencia from "@/assets/impermanencia.jpg";
import fantasmaDeHumo from "@/assets/fantasma-de-humo.jpg";

interface Painting {
  title: string;
  image: string;
  technique: string;
  description: string[];
}

const paintings: Painting[] = [
  {
    title: "Mares Internos",
    image: maresInternos,
    technique: "Mixta sobre lienzo, 40 cm de diámetro · 2026",
    description: [
      "Hay viajes que no se realizan hacia nuevos lugares, sino hacia nuestro propio interior.",
      "Mares Internos representa ese espacio íntimo donde habitan nuestras emociones, pensamientos y recuerdos. Como el mar, nuestro mundo interior puede mostrarse sereno o agitado, pero siempre está en constante movimiento.",
      "La figura permanece en calma, rodeada por las olas que forman parte de ella misma, simbolizando la capacidad de reconocer nuestras emociones sin dejarnos arrastrar por ellas.",
      "Esta obra es una invitación a mirar hacia dentro y comprender que, incluso en medio de la incertidumbre, podemos encontrar un lugar de equilibrio y paz.",
    ],
  },
  {
    title: "Impermanencia",
    image: impermanencia,
    technique: "Mixta sobre cartón corrugado, 76 x 102 cm · 2026 · Exposición Arte por la Paz, ArtQro 2026",
    description: [
      "La paz suele imaginarse como un estado permanente, pero pocas veces es así. En medio del ruido, las preocupaciones y la oscuridad que todos enfrentamos en distintos momentos de la vida, la paz aparece a menudo como una luz pequeña pero suficiente para guiarnos.",
      "En esta obra, una figura serena contempla una vela cuya luz ilumina la oscuridad que la rodea. La llama simboliza aquello que nos brinda calma y refugio: una persona, un lugar, una actividad o un instante de silencio. Sin embargo, su reflejo nos recuerda que nada permanece igual para siempre. Tanto la paz como la inquietud son estados cambiantes, parte natural de la experiencia humana.",
      "Impermanencia es una invitación a reconocer la belleza y el valor de esos momentos de calma, aun sabiendo que son transitorios. Porque a veces, una sola luz basta para encontrar paz.",
    ],
  },
  {
    title: "Fantasma de Humo",
    image: fantasmaDeHumo,
    technique: "Mixta sobre lienzo, 40 cm de diámetro · 2026",
    description: [
      "Hay presencias que no desaparecen por completo. Permanecen en los recuerdos, en las emociones y en aquello que alguna vez nos transformó. Como el humo, toman formas cambiantes: aparecen, se desvanecen y vuelven a surgir cuando menos lo esperamos.",
      "En esta obra, la figura emerge entre formas etéreas que parecen construirse y disolverse al mismo tiempo. El humo simboliza aquello que no puede sostenerse con las manos, pero que sigue habitando el interior: recuerdos, pensamientos, ausencias o partes de nosotros mismos que continúan acompañándonos.",
      "Fantasma de Humo habla de la naturaleza fugaz de la memoria y de las huellas invisibles que dejan nuestras experiencias. Porque algunas presencias, aunque no puedan verse con claridad, continúan existiendo dentro de nosotros.",
    ],
  },
];

const CollectionOjosCerradosSection = () => {
  const [selected, setSelected] = useState<Painting | null>(null);

  return (
    <section id="coleccion-ojos-cerrados" className="py-20 md:py-32 bg-muted/20">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal tracking-wide mb-3">
            Colección: Ojos Cerrados
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="font-body text-warm-gray text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed">
            Esta serie explora el paisaje emocional que habita en el interior de las personas. A través de rostros con los ojos cerrados, cada obra representa una emoción, un estado de ánimo o una experiencia humana que suele permanecer oculta a la mirada de los demás.
          </p>
          <p className="font-body text-warm-gray text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed mt-4">
            El mar, el humo, la luz y otros elementos simbólicos se convierten en metáforas de aquello que ocurre dentro de nosotros: los recuerdos que permanecen, lo que debemos soltar, la búsqueda de paz y los procesos de transformación que acompañan la vida.
          </p>
          <p className="font-body text-warm-gray text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed mt-4 italic">
            Los ojos cerrados no representan ausencia, sino introspección. Son una invitación a mirar hacia adentro y reconocer emociones que, aunque invisibles, forman parte de nuestra experiencia compartida.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {paintings.map((painting, i) => (
            <motion.div
              key={painting.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer relative overflow-hidden"
              onClick={() => setSelected(painting)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500 flex items-end">
                <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-display text-xl tracking-wide" style={{ color: "white" }}>
                    {painting.title}
                  </p>
                  <p className="font-body text-sm font-light tracking-wider" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {painting.technique}
                  </p>
                </div>
              </div>
            </motion.div>
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
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CollectionOjosCerradosSection;
