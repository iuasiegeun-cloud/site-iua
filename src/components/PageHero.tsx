import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  badge?: string
  breadcrumbs?: BreadcrumbItem[]
  bgImage?: string
}

export default function PageHero({
  title,
  subtitle,
  badge,
  breadcrumbs = [],
  bgImage,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white pt-36 pb-16 lg:pt-40 lg:pb-20 border-b border-navy-800">
      {/* Background Image / Overlay */}
      {bgImage ? (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/70" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          {/* Subtle geometric circles / mesh */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-navy-700/30 rounded-full blur-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-6 flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-300">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-gold-400 transition-colors"
          >
            <Home size={14} />
            <span>Accueil</span>
          </Link>

          {breadcrumbs.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <ChevronRight size={13} className="text-gray-500" />
              {item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-gold-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gold-400 font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/15 text-gold-400 border border-gold-500/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            {badge}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display max-w-4xl leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
