import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-[75vh] min-h-[520px] overflow-hidden">
      <img
        src="https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251008_181521%20(1).jpg"
        alt="Londres ao entardecer"
        className="absolute inset-0 h-full w-full object-cover saturate-[0.85] contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/40 to-background" />
      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-primary/50 bg-primary/20 px-7 py-3 text-sm uppercase tracking-[0.25em] text-secondary-foreground font-semibold backdrop-blur-md shadow-elevated"
        >
          🇬🇧 Programa Ganhando o Mundo · 2025
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-tight"
        >
          Meu Intercâmbio na{" "}
          <span className="text-secondary-foreground drop-shadow-lg">Inglaterra</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="mt-5 max-w-xl text-secondary-foreground/75 font-sans text-lg leading-relaxed"
        >
          Uma jornada de descobertas, aprendizado e memórias que transformaram minha visão de mundo.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          href="#programa"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elevated hover:brightness-110 transition-all duration-300"
        >
          Conhecer a história
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
