import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "BÁSICO",
    price: "79",
    period: "/mês",
    description: "Ideal para quem está começando",
    features: [
      "Acesso à musculação",
      "Horário comercial (6h-22h)",
      "Vestiário com armário",
      "App de treinos",
    ],
    highlighted: false,
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "PREMIUM",
    price: "129",
    period: "/mês",
    description: "O mais escolhido pelos alunos",
    features: [
      "Acesso 24 horas",
      "Todas as aulas coletivas",
      "Avaliação física mensal",
      "Área de cardio premium",
      "Sauna e spa",
      "1 sessão com personal/mês",
    ],
    highlighted: true,
    icon: <Star className="w-6 h-6" />,
  },
  {
    name: "BLACK",
    price: "199",
    period: "/mês",
    description: "Experiência completa e exclusiva",
    features: [
      "Tudo do Premium +",
      "Personal trainer ilimitado",
      "Nutricionista incluso",
      "Acesso a todas as unidades",
      "Toalha e kit higiene",
      "Estacionamento grátis",
    ],
    highlighted: false,
    icon: <Star className="w-6 h-6 fill-current" />,
  },
];

const Plans = () => {
  return (
    <section id="planos" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wide">NOSSOS PLANOS</span>
          <h2 className="font-display text-4xl md:text-6xl mt-2 mb-4">
            ESCOLHA O SEU <span className="text-gradient">PLANO</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Planos flexíveis que se adaptam ao seu estilo de vida. 
            Sem taxa de matrícula no primeiro mês!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary shadow-neon"
                  : "bg-card border border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  MAIS POPULAR
                </div>
              )}

              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                plan.highlighted ? "bg-primary text-primary-foreground" : "bg-muted text-primary"
              }`}>
                {plan.icon}
              </div>

              <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-muted-foreground text-lg">R$</span>
                <span className={`font-display text-5xl ${plan.highlighted ? "text-primary" : ""}`}>
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-primary text-primary-foreground hover:shadow-neon"
                    : "bg-muted hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                ASSINAR AGORA
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          * Todos os planos com fidelidade mínima de 3 meses. Consulte condições.
        </motion.p>
      </div>
    </section>
  );
};

export default Plans;
