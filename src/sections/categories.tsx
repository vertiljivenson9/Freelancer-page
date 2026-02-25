import { 
  Code, 
  Palette, 
  PenTool, 
  Megaphone, 
  BarChart3, 
  Video, 
  Headphones, 
  Building2 
} from 'lucide-react'

const categories = [
  {
    name: 'Desarrollo Web',
    description: 'Frontend, Backend, Full Stack',
    icon: Code,
    color: 'bg-blue-500',
    freelancers: '2,450+',
  },
  {
    name: 'Diseño Gráfico',
    description: 'Logos, Branding, Ilustración',
    icon: Palette,
    color: 'bg-purple-500',
    freelancers: '1,890+',
  },
  {
    name: 'Redacción',
    description: 'Copywriting, SEO, Traducción',
    icon: PenTool,
    color: 'bg-green-500',
    freelancers: '1,230+',
  },
  {
    name: 'Marketing',
    description: 'Redes Sociales, Ads, Email',
    icon: Megaphone,
    color: 'bg-orange-500',
    freelancers: '980+',
  },
  {
    name: 'Data & Analytics',
    description: 'BI, Data Science, Excel',
    icon: BarChart3,
    color: 'bg-cyan-500',
    freelancers: '650+',
  },
  {
    name: 'Video & Audio',
    description: 'Edición, Motion, Voice Over',
    icon: Video,
    color: 'bg-red-500',
    freelancers: '720+',
  },
  {
    name: 'Soporte Virtual',
    description: 'VA, Atención al Cliente',
    icon: Headphones,
    color: 'bg-pink-500',
    freelancers: '540+',
  },
  {
    name: 'Negocios',
    description: 'Consultoría, Finanzas, Legal',
    icon: Building2,
    color: 'bg-indigo-500',
    freelancers: '430+',
  },
]

export const Categories = () => {
  return (
    <section id="categorias" className="w-full py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Explora por categorías
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra freelancers especializados en más de 50 categorías profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.name}
                className="group p-6 bg-background border rounded-2xl hover:shadow-xl hover:border-primary transition-all cursor-pointer"
              >
                <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {category.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {category.freelancers} freelancers
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
