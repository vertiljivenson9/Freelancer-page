import { Clock, DollarSign, MapPin, Briefcase } from 'lucide-react'

const jobs = [
  {
    id: 1,
    title: 'Desarrollador React Senior para E-commerce',
    company: 'TechStart Argentina',
    location: 'Remoto • Argentina',
    type: 'Tiempo completo',
    budget: '$3,000 - $5,000/mes',
    posted: 'Hace 2 horas',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    urgent: true,
  },
  {
    id: 2,
    title: 'Diseñador UX/UI para App Móvil',
    company: 'InnovateMX',
    location: 'Remoto • México',
    type: 'Proyecto',
    budget: '$2,500 - $4,000',
    posted: 'Hace 5 horas',
    skills: ['Figma', 'Prototyping', 'User Research'],
    urgent: false,
  },
  {
    id: 3,
    title: 'Copywriter para Campaña Publicitaria',
    company: 'Marketing Pro Colombia',
    location: 'Remoto • Colombia',
    type: 'Proyecto',
    budget: '$800 - $1,500',
    posted: 'Hace 1 día',
    skills: ['Copywriting', 'Marketing', 'SEO'],
    urgent: false,
  },
  {
    id: 4,
    title: 'Desarrollador WordPress + WooCommerce',
    company: 'E-shop Chile',
    location: 'Remoto • Chile',
    type: 'Tiempo parcial',
    budget: '$1,500 - $2,500/mes',
    posted: 'Hace 1 día',
    skills: ['WordPress', 'WooCommerce', 'PHP', 'CSS'],
    urgent: true,
  },
  {
    id: 5,
    title: 'Editor de Video para YouTube',
    company: 'Creator Studio Perú',
    location: 'Remoto • Perú',
    type: 'Proyecto',
    budget: '$500 - $1,000/mes',
    posted: 'Hace 2 días',
    skills: ['Premiere Pro', 'After Effects', 'Color Grading'],
    urgent: false,
  },
]

export const RecentJobs = () => {
  return (
    <section id="trabajos" className="w-full py-20 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Trabajos recientes
            </h2>
            <p className="text-lg text-muted-foreground">
              Oportunidades freelance actualizadas diariamente
            </p>
          </div>
          <button className="px-6 py-3 text-sm font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-colors">
            Ver todos los trabajos
          </button>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-background rounded-2xl p-6 border hover:shadow-lg hover:border-primary transition-all cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    {job.urgent && (
                      <span className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-lg">
                        Urgente
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{job.company}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.budget}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap">
                  Aplicar ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
