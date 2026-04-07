import { motion } from "framer-motion";
import { processSteps } from "@/data/exchangeData";

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            Passo a Passo
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Preparações
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: "easeOut" }}
              className="relative mb-12 pl-16 md:pl-0 md:w-1/2 md:odd:pr-10 md:even:pl-10 md:odd:text-right md:even:ml-auto"
            >
              <div className="absolute left-4 top-1 h-5 w-5 rounded-full border-2 border-primary bg-card md:left-auto md:right-auto md:odd:right-[-10px] md:even:left-[-10px]" />

              <div className="rounded-2xl border bg-card p-6 shadow-card hover:shadow-elevated transition-shadow duration-500">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Etapa {step.step}
                </span>
                <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
