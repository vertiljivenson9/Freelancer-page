import { Search, MapPin } from 'lucide-react'

export const Hero = () => {
  return (
    <section id="inicio" className="relative w-full py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container relative mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Encuentra el mejor talento
            <span className="text-primary"> latinoamericano</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Conecta con freelancers hispanohablantes de Argentina, México, Colombia y toda Latinoamérica. 
            Calidad profesional a precios competitivos.
          </p>

          <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl">
                <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="¿Qué skill buscas? Ej: React, Diseño, Marketing"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl sm:w-48">
                <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <select className="w-full bg-transparent text-sm text-foreground outline-none cursor-pointer">
                  <option value="">Todos los países</option>
                  <option value="ar">Argentina</option>
                  <option value="mx">México</option>
                  <option value="co">Colombia</option>
                  <option value="cl">Chile</option>
                  <option value="pe">Perú</option>
                  <option value="es">España</option>
                </select>
              </div>
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                <span>Buscar</span>
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <span>Popular:</span>
            {['Desarrollo Web', 'Diseño UX/UI', 'Marketing Digital', 'Redacción'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 rounded-full text-white/80 hover:bg-white/20 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
