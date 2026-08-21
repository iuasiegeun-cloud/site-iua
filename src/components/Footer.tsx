import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin, Music2 } from 'lucide-react'
import { footerLinks, contact } from '../data'

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-950 text-navy-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
          <div>
            <a href="#accueil" className="flex items-center gap-2 mb-4">
              <img src="/assets/logo-iua.png" alt="IUA" className="h-12 w-12" />
              <span className="font-display font-bold text-white text-xl">IUA</span>
            </a>
            <p className="text-sm text-navy-300 leading-relaxed mb-5 max-w-xs">
              Institut Universitaire d'Abidjan — former les leaders de demain depuis plus de 20 ans.
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

          {Object.entries(footerLinks).map(([title, links]) => (
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
          <p>Copyright © {new Date().getFullYear()} Institut Universitaire d'Abidjan. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#confidentialite" className="hover:text-gold-400 transition-colors">
              Politique king elysee
            </a>
            <a href="#conditions" className="hover:text-gold-400 transition-colors">
              Conditions d'utilisation
            </a>
          </div>
          <div className="flex items-center gap-3.5">
            <a href={contact.social.facebook} aria-label="Facebook" className="hover:text-gold-400 transition-colors">
              <Facebook size={16} />
            </a>
            <a href={contact.social.youtube} aria-label="YouTube" className="hover:text-gold-400 transition-colors">
              <Youtube size={16} />
            </a>
            <a href={contact.social.linkedin} aria-label="LinkedIn" className="hover:text-gold-400 transition-colors">
              <Linkedin size={16} />
            </a>
            <a href={contact.social.tiktok} aria-label="TikTok" className="hover:text-gold-400 transition-colors">
              <Music2 size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
