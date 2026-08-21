import { MapPin } from 'lucide-react'
import { frenchPartners } from '../data'
import Reveal from './Reveal'

export default function Partners() {
  return (
    <section id="mobilite" className="py-20 lg:py-28 bg-[#f7f8fc]">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="text-gold-600 font-bold text-sm uppercase tracking-wide">
            Programme de mobilité internationale
          </span>
          <h2 className="font-display font-bold text-navy-950 text-3xl sm:text-4xl mt-3 mb-5 leading-tight">
            Nos universités partenaires en France
          </h2>
          <p className="text-navy-600 leading-relaxed mb-8">
            Dans le cadre de sa politique d'ouverture internationale, l'IUA met à la disposition de ses
            étudiants un programme de mobilité académique leur permettant de poursuivre une partie de
            leurs études dans des universités partenaires de renom en Europe, en Amérique du Nord et en Asie.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3">
            {frenchPartners.map((p) => (
              <li
                key={p.name}
                className="flex items-start gap-2.5 bg-white rounded-xl p-3.5 border border-navy-100"
              >
                <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-navy-900 leading-snug">{p.name}</div>
                  <div className="text-xs text-navy-500">{p.city}</div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <img
            src="/assets/carte-france.png"
            alt="Carte des universités partenaires en France"
            className="w-full rounded-3xl shadow-card border border-navy-100"
          />
        </Reveal>
      </div>
    </section>
  )
}
