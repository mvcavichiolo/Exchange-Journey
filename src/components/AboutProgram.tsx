import { motion } from "framer-motion";
import { Globe, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Intercâmbio Cultural",
    description: "Imersão total na cultura britânica, vivendo com família hospedeira e frequentando escola local.",
  },
  {
    icon: BookOpen,
    title: "Educação Internacional",
    description: "Experiência no sistema educacional britânico com aulas regulares e atividades extracurriculares.",
  },
  {
    icon: Users,
    title: "Programa Governamental",
    description: "Iniciativa do governo estadual que oferece bolsas de intercâmbio para alunos da rede pública.",
  },
];

const AboutProgram = () => {
  return (
    <section id="programa" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
            Sobre o Programa
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Ganhando o Mundo
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            O <strong>Ganhando o Mundo</strong> é um programa de intercâmbio que oferece a estudantes 
            da rede pública a oportunidade de viver uma experiência acadêmica e cultural no exterior. 
            Durante meses, os selecionados vivem em outro país, frequentam escolas locais e mergulham 
            em uma nova cultura.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
              className="rounded-2xl border bg-card p-7 text-center shadow-card hover:shadow-elevated transition-shadow duration-500"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <feat.icon size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{feat.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProgram;
