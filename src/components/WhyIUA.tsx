import { whyIUA } from '../data'
import Icon, { type IconName } from './IconMap'
import Reveal from './Reveal'

export default function WhyIUA() {
  return (
    <section className="relative bg-gold-500 py-20 lg:py-28 overflow-hidden">
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-400/50"
        aria-hidden
      />
      <div
        className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-navy-900/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white/40">
            <img
              src="/assets/team-1.jpg"
              alt="Étudiants de l'Institut Universitaire d'Abidjan"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-navy-950/70 font-bold text-sm uppercase tracking-wide">
              Pourquoi choisir l'IUA
            </span>
            <h2 className="font-display font-bold text-navy-950 text-3xl sm:text-4xl mt-3 mb-8 leading-tight">
              Une communauté dynamique, tournée vers votre réussite
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {whyIUA.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="bg-navy-950 rounded-2xl p-5 h-full">
                  <div className="h-10 w-10 rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
                    <Icon name={item.icon as IconName} size={18} className="text-gold-400" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-navy-200 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
