import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ThanksSection = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Heart size={28} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Agradecimentos
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Essa experiência só foi possível graças ao apoio da minha família, dos professores que 
            me incentivaram, do programa <strong className="text-foreground">Ganhando o Mundo</strong> e da minha host family
            na Inglaterra. Cada pessoa que cruzou meu caminho nessa jornada deixou uma marca que 
            eu vou carregar para sempre.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Um agradecimento especial à minha escola, que me preparou para esse desafio, e a todos 
            os colegas de intercâmbio que tornaram essa experiência ainda mais especial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThanksSection;
