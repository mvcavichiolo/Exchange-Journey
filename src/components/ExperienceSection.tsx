import { motion } from "framer-motion";
import { MapPin, School, Clock } from "lucide-react";
import countryside from "@/assets/gallery/countryside.jpg";

const details = [
  { icon: MapPin, label: "Cidade", value: "Exemplo City, Inglaterra" },
  { icon: School, label: "Escola", value: "Exemplo Academy" },
  { icon: Clock, label: "Duração", value: "6 meses (Jan – Jun 2024)" },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
            Vivência
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            A Experiência
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl shadow-elevated"
          >
            <img
              src={countryside}
              alt="Interior da Inglaterra"
              className="h-full w-full object-cover aspect-[4/3] saturate-[0.85] contrast-[1.05]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-5 mb-7">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <d.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{d.label}</p>
                    <p className="font-medium text-foreground">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              A rotina no intercâmbio era dividida entre aulas pela manhã, atividades extracurriculares 
              à tarde e tempo com a família hospedeira. Aos fins de semana, aproveitávamos para explorar 
              a região, visitar cidades históricas e conhecer a cultura local em profundidade.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A experiência vai muito além do idioma — é sobre independência, adaptação e 
              crescimento pessoal em um ambiente completamente novo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
