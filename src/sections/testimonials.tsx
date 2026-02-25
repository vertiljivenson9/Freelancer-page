import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sofia Ramírez',
    role: 'CEO',
    company: 'StartupTech MX',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    country: 'México',
    flag: '🇲🇽',
    rating: 5,
    text: 'Encontré un desarrollador React excepcional en FreelanceLatam. La calidad del trabajo superó mis expectativas y la comunicación fue fluida en español. Definitivamente seguiré usando la plataforma.',
  },
  {
    id: 2,
    name: 'Andrés López',
    role: 'Freelancer',
    company: 'Desarrollador Full Stack',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
    country: 'Colombia',
    flag: '🇨🇴',
    rating: 5,
    text: 'Desde que me uní a FreelanceLatam, mi carrera despegó. He trabajado con clientes de España, México y Argentina. Los pagos son puntuales y el soporte es excelente.',
  },
  {
    id: 3,
    name: 'Carmen Vargas',
    role: 'Directora de Marketing',
    company: 'BrandPro Argentina',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
    country: 'Argentina',
    flag: '🇦🇷',
    rating: 5,
    text: 'Contraté a una copywriter y un diseñador gráfico para nuestra campaña. Ambos entregaron trabajo de alta calidad en tiempo récord. La plataforma facilita mucho el proceso de contratación.',
  },
]

export const Testimonials = () => {
  return (
    <section className="w-full py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de freelancers y clientes confían en FreelanceLatam para sus proyectos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-2xl p-8 border relative"
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <span className="text-lg">{testimonial.flag}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '10,000+', label: 'Freelancers' },
            { value: '5,000+', label: 'Clientes' },
            { value: '25,000+', label: 'Proyectos' },
            { value: '4.9/5', label: 'Calificación promedio' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
