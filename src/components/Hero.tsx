import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
              🏋️ TREINAMENTO PERSONALIZADO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6"
          >
            NÃO PLANEJAMOS
            <span className="text-gradient block">SEUS TREINOS</span>
            <span className="block">PLANEJAMOS O SEU</span>
            <span className="text-gradient block">RESULTADO</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8"
          >
            Fazemos dessa a melhor hora do seu dia. 
            Estamos empenhados em trazer a melhor experiência de treino.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5585991903147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20verificar%20a%20disponibilidade%20para%20agendar%20uma%20aula."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:shadow-neon transition-all duration-300"
            >
              AGENDAR UMA AULA
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border/50 items-center"
          >
            <div>
              <p className="font-display text-3xl md:text-4xl text-primary glow-text">
                5000+
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Alunos ativos
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div>
                <p className="font-display text-3xl md:text-4xl text-primary glow-text">
                  100+
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Equipamentos
                </p>
              </div>
              
              {/* Scroll indicator */}
              <div className="hidden md:flex">
                <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <p className="font-display text-3xl md:text-4xl text-primary glow-text">
                6h-21h
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Seg a Sáb
              </p>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
