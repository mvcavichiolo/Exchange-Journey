import { motion } from "framer-motion";
import { londonHighlights } from "@/data/exchangeData";

const LondonSection = () => {
  return (
    <section id="londres" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
            Destaque
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Londres
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-secondary-foreground/60 leading-relaxed">
            A capital britânica foi sem dúvida o ponto alto do intercâmbio. Cada visita revelava uma nova camada desta cidade extraordinária.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {londonHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover saturate-[0.85] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-lg font-bold text-secondary-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-secondary-foreground/60 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LondonSection;
