import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800",
    alt: "Área de musculação",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800",
    alt: "Área de cardio",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800",
    alt: "Aulas coletivas",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800",
    alt: "Spinning",
    span: "col-span-2",
  },
];

const Gallery = () => {
  return (
    <section id="estrutura" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wide">CONHEÇA</span>
          <h2 className="font-display text-4xl md:text-6xl mt-2 mb-4">
            NOSSA <span className="text-gradient">ESTRUTURA</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ambiente moderno, climatizado e com os melhores equipamentos 
            para você ter a melhor experiência de treino.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-48 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-display text-xl text-foreground">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-primary opacity-90" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          
          <div className="relative z-10 py-16 px-8 text-center">
            <h3 className="font-display text-3xl md:text-5xl text-primary-foreground mb-4">
              PRIMEIRA AULA GRÁTIS!
            </h3>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Venha conhecer nossa estrutura sem compromisso. 
              Agende sua aula experimental agora mesmo.
            </p>
            <a
              href="#contato"
              className="inline-block bg-background text-foreground px-8 py-4 rounded-xl font-bold hover:bg-foreground hover:text-background transition-colors"
            >
              AGENDAR AULA GRÁTIS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
