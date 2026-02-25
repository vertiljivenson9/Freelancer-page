import { UserPlus, Search, FileCheck, Handshake } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Crea tu perfil',
    description: 'Regístrate gratis como freelancer o cliente. Completa tu perfil con tus habilidades, experiencia y portafolio.',
    icon: UserPlus,
    color: 'bg-blue-500',
  },
  {
    number: '02',
    title: 'Encuentra talento o proyectos',
    description: 'Busca freelancers por categoría, skill o país. Como freelancer, aplica a los proyectos que se ajusten a tu perfil.',
    icon: Search,
    color: 'bg-purple-500',
  },
  {
    number: '03',
    title: 'Propón y negocia',
    description: 'Envía propuestas detalladas con tu tarifa y timeline. Comunícate directamente con el cliente o freelancer.',
    icon: FileCheck,
    color: 'bg-green-500',
  },
  {
    number: '04',
    title: 'Trabaja y recibe pago',
    description: 'Colabora de forma segura con nuestro sistema de escrow. Recibe pagos protegidos al completar milestones.',
    icon: Handshake,
    color: 'bg-orange-500',
  },
]

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="w-full py-20 bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comienza a trabajar con los mejores freelancers latinos en 4 simples pasos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="bg-slate-800 rounded-2xl p-8 h-full">
                  <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-slate-700 mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-primary"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-slate-800 rounded-2xl">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-slate-800"
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold">Únete a 10,000+ freelancers</p>
              <p className="text-sm text-slate-400">Ya están trabajando en proyectos globales</p>
            </div>
            <button className="px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-colors">
              Crear cuenta gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
