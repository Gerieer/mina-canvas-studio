import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-cream-dark">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal tracking-wide mb-3">
            Contacto
          </h2>
          <div className="gold-line w-24 mx-auto mb-10" />

          <div className="space-y-6">
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-warm-gray mb-2">
                Consultas generales
              </p>
              <a
                href="mailto:contacto@artemina.mx"
                className="font-body text-charcoal hover:text-gold transition-colors inline-flex items-center gap-2"
              >
                <Mail size={16} />
                contacto@artemina.mx
              </a>
            </div>

            <div className="gold-line w-12 mx-auto" />

            <a
              href="http://www.instagram.com/arte_minna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-charcoal hover:text-gold transition-colors"
            >
              <Instagram size={18} />
              <span className="text-sm tracking-wider">@arte_minna</span>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="font-body text-xs text-warm-gray tracking-wider">
              © {new Date().getFullYear()} Arte Mina · Mina Maldonado
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
