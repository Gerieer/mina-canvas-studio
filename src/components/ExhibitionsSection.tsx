import { motion } from "framer-motion";

interface Exhibition {
  title: string;
  note?: string;
}

interface ExhibitionYear {
  year: string;
  exhibitions: Exhibition[];
}

// Agrega nuevas exposiciones aquí (más reciente primero).
const exhibitionsByYear: ExhibitionYear[] = [
  {
    year: "2026",
    exhibitions: [
      { title: "ArtQro 2026" },
      {
        title: "Exposición especial «El Arte por la Paz»",
        note: "Obra presentada: Impermanencia",
      },
      { title: "Arte Libre 2026" },
      { title: "Feria del Arte y el Vino, Tequisquiapan" },
    ],
  },
  {
    year: "2025",
    exhibitions: [{ title: "ArtQro 2025" }, { title: "Arteza Mictlan" }],
  },
];

const ExhibitionsSection = () => {
  return (
    <section id="exhibitions" className="py-20 md:py-32 bg-cream-dark">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal tracking-wide mb-3">
            Exposiciones
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="font-body text-warm-gray text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Muestras y ferias en las que ha participado la obra de Mina Maldonado.
          </p>
        </motion.div>

        <div className="space-y-12">
          {exhibitionsByYear.map((group, groupIndex) => (
            <motion.div
              key={group.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
            >
              <h3 className="font-display text-3xl md:text-4xl font-light text-gold tracking-wide mb-6">
                {group.year}
              </h3>
              <ul>
                {group.exhibitions.map((exhibition) => (
                  <li
                    key={exhibition.title}
                    className="border-b border-border py-5 md:py-6 last:border-b-0"
                  >
                    <p className="font-body text-lg md:text-xl text-charcoal font-light tracking-wide">
                      {exhibition.title}
                    </p>
                    {exhibition.note && (
                      <p className="font-body text-sm md:text-base text-warm-gray font-light italic mt-2">
                        {exhibition.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsSection;
