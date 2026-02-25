import { Star, MapPin, CheckCircle } from 'lucide-react'

const freelancers = [
  {
    id: 1,
    name: 'María González',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    country: 'Argentina',
    flag: '🇦🇷',
    title: 'Diseñadora UX/UI Senior',
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    rate: 45,
    rating: 4.9,
    reviews: 127,
    verified: true,
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    country: 'México',
    flag: '🇲🇽',
    title: 'Desarrollador Full Stack',
    skills: ['React', 'Node.js', 'TypeScript'],
    rate: 55,
    rating: 5.0,
    reviews: 89,
    verified: true,
  },
  {
    id: 3,
    name: 'Ana Martínez',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    country: 'Colombia',
    flag: '🇨🇴',
    title: 'Copywriter & SEO Expert',
    skills: ['SEO', 'Copywriting', 'Content Strategy'],
    rate: 35,
    rating: 4.8,
    reviews: 156,
    verified: true,
  },
  {
    id: 4,
    name: 'Diego Silva',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    country: 'Chile',
    flag: '🇨🇱',
    title: 'Motion Designer',
    skills: ['After Effects', 'Cinema 4D', 'Animation'],
    rate: 50,
    rating: 4.9,
    reviews: 72,
    verified: false,
  },
  {
    id: 5,
    name: 'Laura Pérez',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    country: 'España',
    flag: '🇪🇸',
    title: 'Marketing Digital',
    skills: ['Google Ads', 'Meta Ads', 'Analytics'],
    rate: 60,
    rating: 4.9,
    reviews: 203,
    verified: true,
  },
  {
    id: 6,
    name: 'Juan Herrera',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    country: 'Perú',
    flag: '🇵🇪',
    title: 'Desarrollador Mobile',
    skills: ['React Native', 'Flutter', 'iOS'],
    rate: 40,
    rating: 4.7,
    reviews: 64,
    verified: true,
  },
]

export const FeaturedFreelancers = () => {
  return (
    <section id="freelancers" className="w-full py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Freelancers destacados
            </h2>
            <p className="text-lg text-muted-foreground">
              Profesionales verificados con las mejores calificaciones
            </p>
          </div>
          <button className="px-6 py-3 text-sm font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-colors">
            Ver todos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-background rounded-2xl p-6 border hover:shadow-xl hover:border-primary transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <img
                    src={freelancer.photo}
                    alt={freelancer.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  {freelancer.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{freelancer.name}</h3>
                    <span className="text-lg">{freelancer.flag}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{freelancer.country}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {freelancer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-foreground">{freelancer.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({freelancer.reviews})</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-foreground">${freelancer.rate}</span>
                  <span className="text-sm text-muted-foreground">/hora</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
