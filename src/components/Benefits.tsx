import { motion } from "framer-motion";
import { Dumbbell, Users, Clock, Heart, Wifi, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Equipamentos Premium",
    description: "Mais de 100 equipamentos de última geração das melhores marcas do mundo.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Aulas Coletivas",
    description: "Spinning, funcional, yoga, pilates, crossfit e muito mais. +30 modalidades.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Aberto 24 Horas",
    description: "Treine no seu horário. Acesso liberado todos os dias da semana.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Personal Trainers",
    description: "Equipe de profissionais qualificados para te acompanhar em cada etapa.",
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "App Exclusivo",
    description: "Acompanhe seus treinos, evolução e agende aulas pelo nosso aplicativo.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Ambiente Seguro",
    description: "Monitoramento 24h, acesso biométrico e protocolos de higienização.",
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
          <span className="text-primary font-semibold tracking-wide">POR QUE ESCOLHER</span>
          <h2 className="font-display text-4xl md:text-6xl mt-2 mb-4">
            HOME <span className="text-gradient">FITNESS</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Oferecemos a melhor estrutura e atendimento para você alcançar 
            seus objetivos de forma rápida e segura.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {benefit.icon}
                </div>

                <h3 className="font-display text-2xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
