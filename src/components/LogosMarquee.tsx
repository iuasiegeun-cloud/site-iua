import { partnerLogos } from '../data'
import Reveal from './Reveal'

export default function LogosMarquee() {
  const doubled = [...partnerLogos, ...partnerLogos]

  return (
    <section className="py-14 border-y border-navy-100 bg-white overflow-hidden">
      <Reveal className="mx-auto max-w-7xl px-6 text-center mb-8">
        <span className="text-navy-500 font-semibold text-sm uppercase tracking-wide">
          Ils nous font confiance — accréditations &amp; partenaires
        </span>
      </Reveal>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex w-max marquee-track">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex items-center justify-center h-20 w-44 shrink-0 px-6 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
            >
              <img src={logo.src} alt={logo.alt} className="max-h-14 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
