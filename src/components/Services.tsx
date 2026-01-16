import { motion } from "framer-motion";
import servicosImage from "@/assets/servicos-home-fitness.png";

const Services = () => {
  return (
    <section id="servicos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold tracking-wide">O QUE OFERECEMOS</span>
          <h2 className="font-display text-4xl md:text-6xl mt-2 mb-4">
            NOSSOS <span className="text-gradient">SERVIÇOS</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <img 
            src={servicosImage} 
            alt="Serviços Home Fitness - Treinamento Personalizado, Avaliação Física, Consultoria de Treino, Aero Fight" 
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5585991903147?text=Oi%2C%20quero%20agendar%20uma%20aula"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:shadow-neon transition-all duration-300"
          >
            AGENDE JÁ O SEU TREINO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
