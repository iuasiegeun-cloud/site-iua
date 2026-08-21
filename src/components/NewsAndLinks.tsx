import { ArrowUpRight } from 'lucide-react'
import { newsCards, quickLinks } from '../data'
import Reveal from './Reveal'

export default function NewsAndLinks() {
  return (
    <section id="ressources" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_320px] gap-12">
        <div>
          <Reveal>
            <span className="text-gold-600 font-bold text-sm uppercase tracking-wide">Actualités</span>
            <div className="flex items-end justify-between mt-3 mb-8">
              <h2 className="font-display font-bold text-navy-950 text-3xl sm:text-4xl leading-tight">
                Ce qui se passe à l'IUA
              </h2>
              <a
                href="#actualites"
                className="hidden sm:flex items-center gap-1 text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors"
              >
                Voir tout <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <article className="group bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-card hover:-translate-y-1 transition-transform h-full flex flex-col">
                  <div className="overflow-hidden h-40">
                    <img
                      src={card.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-gold-600 mb-2">
                      {card.tag}
                    </span>
                    <h3 className="font-display font-semibold text-navy-950 text-base mb-2 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm text-navy-500 leading-relaxed mb-4 flex-1">{card.excerpt}</p>
                    <a
                      href="#actualites"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-navy-800 hover:text-gold-600 transition-colors"
                    >
                      Lire plus <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <aside className="bg-navy-950 rounded-2xl p-6 sticky top-28">
            <h3 className="font-display font-semibold text-white text-lg mb-1">Liens rapides</h3>
            <div className="h-0.5 w-10 bg-gold-500 rounded-full mb-5" />
            <ul className="flex flex-col">
              {quickLinks.map((link) => (
                <li key={link.label} className="border-b border-white/10 last:border-none">
                  <a
                    href={link.href}
                    className="flex items-center justify-between py-3 text-sm text-navy-100 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#inscription"
              className="mt-6 block text-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold py-3 rounded-full transition-colors"
            >
              S'inscrire à l'IUA
            </a>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
