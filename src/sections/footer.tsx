import { Briefcase, Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  plataforma: [
    { name: 'Cómo funciona', href: '#' },
    { name: 'Para freelancers', href: '#' },
    { name: 'Para clientes', href: '#' },
    { name: 'Precios', href: '#' },
    { name: 'Seguridad', href: '#' },
  ],
  categorias: [
    { name: 'Desarrollo Web', href: '#' },
    { name: 'Diseño Gráfico', href: '#' },
    { name: 'Marketing Digital', href: '#' },
    { name: 'Redacción', href: '#' },
    { name: 'Ver todas', href: '#' },
  ],
  recursos: [
    { name: 'Blog', href: '#' },
    { name: 'Guías', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Comunidad', href: '#' },
    { name: 'Ayuda', href: '#' },
  ],
  empresa: [
    { name: 'Sobre nosotros', href: '#' },
    { name: 'Carreras', href: '#' },
    { name: 'Prensa', href: '#' },
    { name: 'Contacto', href: '#' },
    { name: 'Partners', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
]

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">FreelanceLatam</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              El marketplace líder de freelancers hispanohablantes. 
              Conectamos talento latinoamericano con oportunidades globales.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5" />
                <span>hola@freelancelatam.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5" />
                <span>+52 55 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-3">
              {footerLinks.plataforma.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categorías</h4>
            <ul className="space-y-3">
              {footerLinks.categorias.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 FreelanceLatam. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Términos
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
