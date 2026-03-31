import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-md mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
            Fale Comigo
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Contato
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Quer saber mais sobre o intercâmbio ou tem alguma pergunta? Entre em contato!
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border bg-card px-6 py-4 text-foreground hover:bg-muted transition-all duration-300 shadow-card hover:shadow-elevated"
            >
              <Instagram size={20} className="text-primary" />
              <span className="font-medium">@meu.instagram</span>
            </a>
            <a
              href="mailto:contato@exemplo.com"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border bg-card px-6 py-4 text-foreground hover:bg-muted transition-all duration-300 shadow-card hover:shadow-elevated"
            >
              <Mail size={20} className="text-primary" />
              <span className="font-medium">contato@exemplo.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
