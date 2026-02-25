import { ArrowRight, Sparkles } from 'lucide-react'

export const Cta = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto">
        <div className="relative bg-gradient-to-r from-primary to-violet-500 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Comienza hoy mismo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para llevar tus proyectos al siguiente nivel?
            </h2>

            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Únete a la comunidad de freelancers hispanohablantes más grande de Latinoamérica. 
              Encuentra trabajo remoto o contrata talento de clase mundial.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                <span>Quiero contratar</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold border-2 border-white rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <span>Quiero trabajar</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-6 text-sm text-white/60">
              Registro gratuito • Sin tarjetas de crédito • Cancela cuando quieras
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
