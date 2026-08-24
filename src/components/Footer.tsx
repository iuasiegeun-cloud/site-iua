import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin, Music2 } from 'lucide-react'
import { footerLinks, contact, faculties } from '../data'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { lang, t } = useLanguage()

  const getTranslatedFooterLinks = (): Record<string, readonly { label: string; href: string }[]> => {
    if (lang === 'EN') {
      return {
        'Study at IUA': [
          { label: 'About IUA', href: '/a-propos' },

          { label: 'Resources & E-Learning', href: '/ressources' },
          { label: 'Admissions & Tuition', href: '/admissions' },
          { label: 'Career & Placement (BAIP)', href: '/insertion-professionnelle' },
        ],
        'Our Faculties': [
          { label: 'Science & Technologies', href: '/facultes/sciences-technologies' },
          { label: 'Law & Political Science', href: '/facultes/droit-science-politique' },
          { label: 'Arts & Letters', href: '/facultes/arts-lettres' },
          { label: 'Economics & Management', href: '/facultes/sciences-eco-gestion' },
          { label: 'Humanities & Social Sciences', href: '/facultes/sciences-humaines-sociales' },
        ],
        'International Students': [
          { label: 'Côte d’Ivoire', href: '/international/cote-divoire' },
          { label: 'Student Housing', href: '/international/logement' },
          { label: 'Transport & Commute', href: '/international/transport' },
          { label: 'Student Handbook', href: '/guide-etudiant' },
        ],
      }
    }

    if (lang === 'ESP') {
      return {
        'Estudiar en la IUA': [
          { label: 'Acerca de la IUA', href: '/a-propos' },

          { label: 'Recursos y E-Learning', href: '/ressources' },
          { label: 'Admisiones y Costos', href: '/admissions' },
          { label: 'Inserción Profesional', href: '/insertion-professionnelle' },
        ],
        'Nuestras Facultades': [
          { label: 'Ciencias y Tecnologías', href: '/facultes/sciences-technologies' },
          { label: 'Derecho y Ciencias Políticas', href: '/facultes/droit-science-politique' },
          { label: 'Artes y Letras', href: '/facultes/arts-lettres' },
          { label: 'Ciencias Económicas y Gestión', href: '/facultes/sciences-eco-gestion' },
          { label: 'Ciencias Humanas y Sociales', href: '/facultes/sciences-humaines-sociales' },
        ],
        'Estudiantes Internacionales': [
          { label: 'Costa de Marfil', href: '/international/cote-divoire' },
          { label: 'Alojamiento', href: '/international/logement' },
          { label: 'Transporte', href: '/international/transport' },
          { label: 'Guía del Estudiante', href: '/guide-etudiant' },
        ],
      }
    }

    return footerLinks
  }

  const currentFooterLinks = getTranslatedFooterLinks()

  return (
    <footer id="contact" className="bg-navy-950 text-navy-200 pt-16 pb-8 border-t border-navy-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src="/assets/logo-iua.png" alt="IUA" className="h-12 w-12 object-contain" />
              <span className="font-display font-bold text-white text-xl">IUA</span>
            </a>
            <p className="text-sm text-navy-300 leading-relaxed mb-5 max-w-xs">
              {t('footer.description')}
            </p>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="shrink-0 mt-0.5 text-gold-400" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold-400" />
                <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`} className="hover:text-gold-400 transition-colors">
                  {contact.phones[0]}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-gold-400" />
                <a href={`mailto:${contact.email}`} className="hover:text-gold-400 transition-colors">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {Object.entries(currentFooterLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-navy-300 hover:text-gold-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-navy-400">
          <p>Copyright © {new Date().getFullYear()} Institut Universitaire d'Abidjan. {t('footer.rights')}</p>
          <div className="flex items-center gap-4">
            <a href="/contact" className="hover:text-gold-400 transition-colors">
              {t('footer.terms')}
            </a>
          </div>
          <div className="flex items-center gap-3.5">
            <a href={contact.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-gold-400 transition-colors">
              <Facebook size={16} />
            </a>
            <a href={contact.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-gold-400 transition-colors">
              <Youtube size={16} />
            </a>
            <a href={contact.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gold-400 transition-colors">
              <Linkedin size={16} />
            </a>
            <a href={contact.social.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-gold-400 transition-colors">
              <Music2 size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
