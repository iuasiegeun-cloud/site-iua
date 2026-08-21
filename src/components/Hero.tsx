import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

type Slide =
  | { kind: 'image'; image: string; alt: string }
  | {
      kind: 'banner'
      image: string
      alt: string
      eyebrow: string
      title: string
      tag: string
      cta: { label: string; href: string }
    }

const slides: Slide[] = [
  {
    kind: 'image',
    image: '/assets/hero-rentree.png',
    alt: "Rentrée académique 2026-2027 — les inscriptions sont ouvertes à l'IUA",
  },
  {
    kind: 'banner',
    image: '/assets/amphi-2.jpg',
    alt: 'Amphithéâtre du campus IUA',
    eyebrow: 'Campus & infrastructures',
    title: 'Des amphithéâtres modernes pour apprendre',
    tag: 'Visitez le campus',
    cta: { label: 'Visite virtuelle 360°', href: '#visite-360' },
  },
  {
    kind: 'banner',
    image: '/assets/graduation-2.jpg',
    alt: 'Cérémonie de remise des diplômes IUA',
    eyebrow: 'Réussite étudiante',
    title: 'Des diplômés prêts pour le monde professionnel',
    tag: 'Reconnu CAMES',
    cta: { label: 'Découvrir nos facultés', href: '#facultes' },
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((i: number) => {
    setIndex((i + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    timer.current = setInterval(() => go(index + 1), 6500)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [index, go])

  return (
    <section id="accueil" className="relative pt-16 lg:pt-[92px] bg-navy-950 overflow-hidden">
      <h1 className="sr-only">
        IUA — Institut Universitaire d'Abidjan : Rentrée académique 2026-2027, les inscriptions sont
        ouvertes
      </h1>
      <div className="relative aspect-[874/484]">
        {slides.map((slide, i) => (
          <div
            key={slide.alt}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={i !== index}
          >
            {slide.kind === 'image' ? (
              <img src={slide.image} alt={slide.alt} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <BannerSlide slide={slide} />
            )}
          </div>
        ))}

        {/* Arrows — thin chevrons, no background, matching source design */}
        <button
          onClick={() => go(index - 1)}
          aria-label="Diapositive précédente"
          className="absolute z-20 left-3 sm:left-5 top-1/2 -translate-y-1/2 text-navy-950/80 hover:text-gold-500 transition-colors"
        >
          <ChevronLeft size={34} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => go(index + 1)}
          aria-label="Diapositive suivante"
          className="absolute z-20 right-3 sm:right-5 top-1/2 -translate-y-1/2 text-navy-950/80 hover:text-gold-500 transition-colors"
        >
          <ChevronRight size={34} strokeWidth={2.5} />
        </button>

        {/* Dots */}
        <div className="absolute z-20 bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.alt}
              onClick={() => go(i)}
              aria-label={`Aller à la diapositive ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-7 bg-gold-500' : 'w-2 bg-white/60 hover:bg-white/90'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function BannerSlide({ slide }: { slide: Extract<Slide, { kind: 'banner' }> }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-sky-500 via-sky-600 to-navy-800 overflow-hidden">
      {/* dot-grid decoration */}
      <div
        className="absolute left-0 bottom-0 h-40 w-40 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.9) 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
        aria-hidden
      />
      {/* torn paper corner */}
      <svg
        className="absolute -top-1 -left-1 w-40 h-24 opacity-90"
        viewBox="0 0 200 120"
        aria-hidden
      >
        <path d="M0,0 L200,0 L200,10 C170,30 150,5 120,20 C90,35 80,5 50,18 C25,29 15,8 0,22 Z" fill="white" fillOpacity="0.15" />
      </svg>

      <img
        src={slide.image}
        alt={slide.alt}
        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-25"
      />

      <div className="relative h-full mx-auto max-w-7xl px-6 sm:px-10 flex items-center">
        <div className="max-w-lg">
          <span className="inline-block bg-white text-navy-900 text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full mb-5">
            {slide.eyebrow}
          </span>
          <div className="inline-block bg-navy-950 -skew-x-3 px-5 py-3 mb-3 shadow-card">
            <h2 className="skew-x-3 font-display font-extrabold text-white text-2xl sm:text-4xl leading-tight">
              {slide.title}
            </h2>
          </div>
          <br />
          <span className="inline-block bg-sky-400 text-navy-950 font-bold text-sm sm:text-base px-4 py-1.5 rounded mb-7">
            {slide.tag}
          </span>
          <div>
            <a
              href={slide.cta.href}
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 font-semibold px-6 py-3.5 rounded-full hover:bg-white transition-colors shadow-card"
            >
              {slide.cta.label}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
