import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import serenidad from "@/assets/serenidad.jpg";
import sentir from "@/assets/sentir.jpg";
import permanencia from "@/assets/permanencia.jpg";
import crecer from "@/assets/crecer.jpg";
import soltar from "@/assets/soltar.jpg";

interface Painting {
  title: string;
  image: string;
  technique: string;
  description: string[];
}

const paintings: Painting[] = [
  {
    title: "Serenidad",
    image: serenidad,
    technique: "Óleo sobre tela, 40 cm de diámetro · Febrero 2026",
    description: [
      "Una sola hoja descansa sobre el agua quieta. Después de la lluvia, el movimiento ha desaparecido y el entorno vuelve poco a poco a la calma.",
      "La hoja flota ligera, sostenida por un agua que ya no se agita. En ese instante aparece la serenidad: no como olvido de lo vivido, sino como la calma que llega cuando todo se aquieta y uno puede simplemente estar. Es el momento en que la mente deja de luchar y el silencio vuelve a ocupar su lugar.",
    ],
  },
  {
    title: "Sentir",
    image: sentir,
    technique: "Óleo sobre tela, 40 cm de diámetro · Febrero 2026",
    description: [
      "Una mano se extiende sobre el agua mientras algunas gotas caen lentamente desde los dedos. Después de la tormenta, el mundo vuelve a sentirse a través del tacto: el frío del agua, la humedad en la piel, el peso de lo que acaba de pasar.",
      "Este cuadro representa el momento de tomar conciencia de lo vivido. Sentir no es solo recordar, es permitir que las emociones pasen por uno, reconocerlas y aceptarlas. En el contacto con el agua aparece una pausa: un instante para percibir, comprender y estar presente en lo que queda después.",
    ],
  },
  {
    title: "Permanencia",
    image: permanencia,
    technique: "Óleo sobre tela, 40 cm de diámetro · Febrero 2026",
    description: [
      "Un girasol permanece erguido mientras las gotas de lluvia aún descansan sobre sus pétalos. El cielo gris recuerda que la tormenta acaba de pasar, pero la flor sigue en pie, luminosa a pesar de la humedad y el peso del agua.",
      "Este cuadro habla de la capacidad de mantenerse firme incluso en medio de la dificultad. Resistir no significa no haber sido afectado por la tormenta, sino continuar presente después de ella. Como el girasol que conserva su luz aun bajo un cielo nublado, hay una fuerza silenciosa que permite seguir adelante.",
    ],
  },
  {
    title: "Crecer",
    image: crecer,
    technique: "Óleo sobre tela, 40 cm de diámetro · Febrero 2026",
    description: [
      "Después de la lluvia, cuando el suelo aún guarda la humedad de la tormenta, comienzan a aparecer pequeñas formas de vida. Los hongos crecen en silencio entre el musgo y la tierra mojada, casi desapercibidos, pero firmes en su presencia.",
      "Este cuadro habla de ese crecimiento discreto que ocurre después de momentos difíciles. No es un crecimiento ruidoso ni inmediato; es lento, silencioso y constante. Como los hongos que nacen de la humedad de la lluvia, a veces las experiencias más intensas dejan el terreno fértil para transformarse y seguir adelante.",
    ],
  },
  {
    title: "Soltar",
    image: soltar,
    technique: "Óleo sobre tela, 40 cm de diámetro",
    description: [
      "El viento mueve el cabello y arrastra algunas hojas que se alejan en el aire. Después de la tormenta, llega el momento de dejar ir aquello que ya pasó. No es un gesto de fuerza, sino de aceptación.",
      "En este cuadro, el movimiento del viento simboliza ese instante en el que se libera lo que pesa. Las hojas que vuelan representan aquello que se suelta para poder seguir adelante. Soltar no significa olvidar, sino permitir que el aire se lleve lo que ya cumplió su tiempo.",
    ],
  },
];

const CollectionDespuesSection = () => {
  const [selected, setSelected] = useState<Painting | null>(null);

  return (
    <section id="coleccion-despues" className="py-20 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal tracking-wide mb-3">
            Colección: Después
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="font-body text-warm-gray text-sm md:text-base font-light max-w-2xl mx-auto">
            Una serie de cinco óleos circulares que exploran lo que queda cuando la tormenta ha pasado: la calma, el tacto, la resistencia, el crecimiento silencioso y la liberación.
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
                  <p className="font-display text-lg tracking-wide" style={{ color: "white" }}>
                    {painting.title}
                  </p>
                  <p className="font-body text-xs font-light tracking-wider" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {painting.technique}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
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
                  <h3 className="font-display text-2xl md:text-3xl font-light text-charcoal mb-2">
                    {selected.title}
                  </h3>
                  <p className="font-body text-xs tracking-wider text-gold uppercase mb-6">
                    {selected.technique}
                  </p>
                  <div className="gold-line w-12 mb-6" />
                  {selected.description.map((p, i) => (
                    <p key={i} className="font-body text-warm-gray text-sm font-light leading-relaxed mb-4">
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

export default CollectionDespuesSection;
