import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import comoElSol from "@/assets/como-el-sol.jpg";
import miMente from "@/assets/mi-mente.jpg";
import proyectoArte from "@/assets/proyecto-arte.jpg";
import proyectoMina from "@/assets/proyecto-mina.jpg";
import anatomia from "@/assets/anatomia-resiliencia.jpg";
import huesos from "@/assets/huesos-y-flores.jpg";
import corazon from "@/assets/corazon.jpg";

interface Painting {
  title: string;
  image: string;
  technique: string;
  description: string[];
}

const paintings: Painting[] = [
  {
    title: "Como el Sol",
    image: comoElSol,
    technique: "Óleo sobre tela, 50 x 50 cm",
    description: [
      "Como el Sol captura un momento lleno de luz y vida, en el que la llegada de la hija transforma todo a su alrededor. La joven, luce una corona de girasoles que simboliza la belleza natural y la energía vital que irradia. Su cabello, movido por el aire, se mezcla con algunos pétalos de los girasoles, dando una sensación de movimiento y frescura.",
      "Su sonrisa refleja una pureza y una alegría que iluminan la obra, mientras el corazón pintado en su costado izquierdo simboliza el amor y la conexión profunda con su ser interior.",
      "Como el Sol no solo es una representación de la hija, sino una metáfora de cómo su presencia, como el sol, trae luz, esperanza y claridad a la vida de la artista.",
    ],
  },
  {
    title: "Mi Mente",
    image: miMente,
    technique: "Óleo y hoja de oro sobre tela, 40 x 30 cm",
    description: [
      "Mi Mente es una obra profundamente introspectiva que busca dar forma a lo intangible, representando la mente como una entidad presente a menudo difícil de controlar. La artista explora su proceso personal de estar consciente, de no dejarse arrastrar por pensamientos vacíos.",
      "En esta obra, la mente se muestra como un rostro con los ojos cerrados, una representación simbólica de que no todo lo que nos dice la mente es cierto.",
      "Mi Mente es un reflejo del viaje hacia la autocomprensión, el control sobre el flujo de pensamientos y la constante búsqueda de la paz interior.",
    ],
  },
  {
    title: "Proyecto Arte",
    image: proyectoArte,
    technique: "Óleo sobre tela, 60 x 50 cm",
    description: [
      "Proyecto Arte es una obra que surge de una profunda reflexión personal, un proceso de autodescubrimiento y sanación. Realizada en una etapa de la vida en la que la artista confrontó las huellas de su infancia, esta pintura es un testimonio de su promesa interna: convertirse en pintora.",
      "La obra está impregnada de luz, tanto en su ejecución como en su mensaje. A través de tonos vibrantes y radiantes.",
      "En Proyecto Arte, la artista no solo honra su promesa de niña, sino que también invita al espectador a reflexionar sobre la importancia de sanar, de iluminar las sombras del pasado y de vivir en la luz de lo que somos en nuestro ser más auténtico.",
    ],
  },
  {
    title: "Proyecto Mina",
    image: proyectoMina,
    technique: "Óleo sobre tela, 60 x 50 cm",
    description: [
      "Proyecto Mina es una obra que refleja el poder y el renacer del autoestima, un testimonio visual de la fuerza interna y la autenticidad que la artista ha logrado abrazar. La pintura irradia empoderamiento, proyectando una energía vibrante y luminosa.",
      "A través de una paleta de luces, la artista transmite la idea de que no existe una sola luz que ilumine el camino, sino muchas. Cada destello representa un momento de claridad, una chispa de fuerza que se suma al crecimiento personal y colectivo.",
      "Proyecto Mina invita al espectador a reflexionar sobre cómo, a través de la luz interior, podemos iluminar el camino no solo para nosotros mismos, sino también para quienes nos rodean.",
    ],
  },
  {
    title: "Anatomía de la Resiliencia",
    image: anatomia,
    technique: "Técnica mixta sobre tela, 80 x 60 cm",
    description: [
      "Pinté este corazón para mostrar el universo que guardo dentro. En su interior pinté una constelación, símbolo del universo que vive dentro de mí, de la fuerza que me eleva cuando necesito recordar quién soy. El corazón está roto, pero sus grietas están unidas con oro, porque creo en la belleza que nace tras la fractura.",
      "En el exterior florecen un girasol y una rama de cerezo: dos presencias que sostienen mi mundo, los amores que siempre serán parte de mí. Afuera, una lluvia suave cae y forma charcos donde mi corazón se refleja.",
      "Anatomía de la resiliencia es mi mapa emocional: mi herida, mi luz, mi amor y mi alma. Es el recordatorio de que incluso con grietas, sigo brillando desde adentro.",
    ],
  },
  {
    title: "Corazón",
    image: corazon,
    technique: "Técnica mixta sobre tela, 80 x 60 cm",
    description: [
      "Una versión íntima del corazón que guarda el universo dentro de sí, donde las grietas se unen con oro en la tradición del kintsugi japonés.",
      "Las flores de cerezo y el girasol emergen como símbolos de los amores que sostienen y dan sentido a la vida.",
      "Una obra que celebra la resiliencia y la belleza que nace de las experiencias vividas.",
    ],
  },
  {
    title: "Huesos y Flores",
    image: huesos,
    technique: "Técnica mixta sobre tela, 80 x 60 cm",
    description: [
      "Pinté Huesos y flores para el Día de Muertos, como un diálogo entre la ausencia y la vida que persiste. En el centro, un esqueleto del que brotan dos flores de cempasúchil desde el costado: son la vida que renace desde lo marchito.",
      "El fondo dorado envuelve la escena como un espacio fuera del tiempo, un plano donde lo humano se vuelve luz. No es oro terrenal, sino un brillo espiritual, el resplandor de lo que no muere.",
      "Siete velas acompañan la figura; una de ellas se ha apagado, mientras las otras arden con llamas grandes que dejan un hilo de humo, como si el aire guardara el suspiro de quienes partieron.",
    ],
  },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<Painting | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal tracking-wide mb-3">
            Galería de Pinturas
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="font-body text-warm-gray text-sm md:text-base font-light max-w-2xl mx-auto">
            Una selección de las obras más representativas de Mina. Cada obra refleja su estilo único y la esencia de la persona.
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
              <div className="aspect-[3/4] overflow-hidden">
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
                <div className="aspect-[3/4] md:aspect-auto">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
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

export default GallerySection;
