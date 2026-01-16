import { motion } from "framer-motion";
import { Dumbbell, ClipboardCheck, BookOpen, Flame, Swords } from "lucide-react";

const services = [
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Treinamento Personalizado",
    description: "Treinos desenvolvidos especialmente para você, respeitando seus objetivos e limites.",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Avaliação Física",
    description: "Avaliação completa para acompanhar sua evolução e ajustar seus treinos.",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Consultoria de Treino",
    description: "Orientação profissional para maximizar seus resultados com segurança.",
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: "AERO",
    description: "Aulas de aeróbico para queimar calorias e melhorar seu condicionamento.",
  },
  {
    icon: <Swords className="w-8 h-8" />,
    title: "FIGHT",
    description: "Aulas de luta para ganhar força, resistência e autoconfiança.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wide">O QUE OFERECEMOS</span>
          <h2 className="font-display text-4xl md:text-6xl mt-2 mb-4">
            A MELHOR <span className="text-gradient">EXPERIÊNCIA</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estamos empenhados em trazer a melhor experiência de treino 
            para você alcançar seus resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="font-display text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5585991903147?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20verificar%20a%20disponibilidade%20para%20agendar%20uma%20aula."
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

export default Benefits;
