import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, User, ChevronDown, Menu, X, Globe } from 'lucide-react'

import { mainNav, accountPortals } from '../data'
import Icon, { type IconName } from './IconMap'
import SearchModal from './SearchModal'
import { useLanguage, type Language } from '../context/LanguageContext'

const languages: Language[] = ['FR', 'EN', 'ESP']

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)
  const [accountOpen, setAccountOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { lang, setLang, t } = useLanguage()
  const accountRef = useRef<HTMLDivElement>(null)

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setSearchModalOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  /*
   * Bloque le scroll de la page lorsque
   * le menu mobile est ouvert.
   */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  /*
   * Ferme le menu compte lorsque l'utilisateur
   * clique à l'extérieur ou appuie sur Escape.
   */
  useEffect(() => {
    if (!accountOpen) return

    const onClick = (e: MouseEvent) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(e.target as Node)
      ) {
        setAccountOpen(false)
      }
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAccountOpen(false)
      }
    }

    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [accountOpen])

  /*
   * Détecte le scroll pour masquer la barre utilitaire
   * (langues + recherche) et ne garder que la nav
   * principale fixée en haut.
   */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  /*
   * Fermer tous les menus après navigation.
   */
  const closeMenus = () => {
    setMobileOpen(false)
    setOpenMobileMenu(null)
    setOpenDesktopMenu(null)
    setAccountOpen(false)
  }

  // Navigation multilingue
  const getTranslatedNav = () => {
    if (lang === 'EN') {
      return [
        {
          label: 'Academics',
          href: '/formations',
          children: [
            { label: 'Faculty of Science & Technologies', href: '/facultes/sciences-technologies' },
            { label: 'Faculty of Law & Political Science', href: '/facultes/droit-science-politique' },
            { label: 'Faculty of Arts & Letters', href: '/facultes/arts-lettres' },
            { label: 'Faculty of Economics & Management', href: '/facultes/sciences-eco-gestion' },
            { label: 'Faculty of Humanities & Social Sciences', href: '/facultes/sciences-humaines-sociales' },
            { label: 'Bachelor Degrees (Licences)', href: '/formations/licences' },
            { label: 'Master Degrees', href: '/formations/masters' },
            { label: 'Admissions & Tuition', href: '/admissions' },
          ],
        },
        {
          label: 'International',
          href: '/international',
          children: [
            { label: 'International Exchange Program', href: '/international/mobilite' },
            { label: 'International Students', href: '/international/etudiants' },
            { label: 'Discover Côte d’Ivoire', href: '/international/cote-divoire' },
            { label: 'Student Housing', href: '/international/logement' },
            { label: 'Transport & Commute', href: '/international/transport' },
            { label: 'Student Handbook', href: '/guide-etudiant' },
          ],
        },
        {
          label: 'Campus Life',
          href: '/vie-campus',
          children: [
            { label: 'About IUA', href: '/a-propos' },

            { label: 'Resources & E-Learning', href: '/ressources' },
            { label: 'Alumni Testimonials', href: '/temoignages' },
            { label: 'Student Handbook', href: '/guide-etudiant' },
          ],
        },
        {
          label: 'Partnerships',
          href: '/partenariats',
          children: [
            { label: 'Partner Universities', href: '/partenariats/universites' },
            { label: 'Corporate Partners', href: '/partenariats/entreprises' },
            { label: 'CAMES Accreditations', href: '/partenariats/accreditations' },
            { label: 'Career & Employability', href: '/insertion-professionnelle' },
            { label: 'Contact Us', href: '/contact' },
          ],
        },
      ]
    }

    if (lang === 'ESP') {
      return [
        {
          label: 'Programas',
          href: '/formations',
          children: [
            { label: 'Facultad de Ciencias y Tecnologías', href: '/facultes/sciences-technologies' },
            { label: 'Facultad de Derecho y Ciencias Políticas', href: '/facultes/droit-science-politique' },
            { label: 'Facultad de Artes y Letras', href: '/facultes/arts-lettres' },
            { label: 'Facultad de Ciencias Económicas y Gestión', href: '/facultes/sciences-eco-gestion' },
            { label: 'Facultad de Ciencias Humanas y Sociales', href: '/facultes/sciences-humaines-sociales' },
            { label: 'Licenciaturas', href: '/formations/licences' },
            { label: 'Maestrías', href: '/formations/masters' },
            { label: 'Admisiones y Costos', href: '/admissions' },
          ],
        },
        {
          label: 'Internacional',
          href: '/international',
          children: [
            { label: 'Programa de Movilidad Internacional', href: '/international/mobilite' },
            { label: 'Estudiantes Internacionales', href: '/international/etudiants' },
            { label: 'Costa de Marfil', href: '/international/cote-divoire' },
            { label: 'Alojamiento', href: '/international/logement' },
            { label: 'Transporte', href: '/international/transport' },
            { label: 'Guía del Estudiante', href: '/guide-etudiant' },
          ],
        },
        {
          label: 'Vida en el Campus',
          href: '/vie-campus',
          children: [
            { label: 'Acerca de la IUA', href: '/a-propos' },

            { label: 'Recursos y E-Learning', href: '/ressources' },
            { label: 'Testimonios', href: '/temoignages' },
            { label: 'Guía del Estudiante', href: '/guide-etudiant' },
          ],
        },
        {
          label: 'Alianzas',
          href: '/partenariats',
          children: [
            { label: 'Universidades Asociadas', href: '/partenariats/universites' },
            { label: 'Empresas Asociadas', href: '/partenariats/entreprises' },
            { label: 'Acreditaciones CAMES', href: '/partenariats/accreditations' },
            { label: 'Inserción Profesional', href: '/insertion-professionnelle' },
            { label: 'Contacto', href: '/contact' },
          ],
        },
      ]
    }

    return mainNav
  }

  const currentNav = getTranslatedNav()

  return (
    <header>
      {/* =====================================================
          HEADER FIXE
      ====================================================== */}
      <div className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">

        {/* UTILITY BAR — disparaît au scroll */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
            scrolled
              ? 'max-h-0 opacity-0'
              : 'max-h-10 opacity-100'
          }`}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="hidden md:flex items-center justify-end gap-5 py-1.5 text-xs">

              {/* Sélecteur de Langues */}
              <div className="flex items-center gap-1.5 text-navy-600 font-medium">
                <Globe size={13} className="text-gold-500" />
                {languages.map((l, i) => (
                  <span
                    key={l}
                    className="flex items-center gap-1.5"
                  >
                    <button
                      type="button"
                      onClick={() => setLang(l)}
                      className={`hover:text-gold-600 transition-colors px-1 py-0.5 rounded ${
                        lang === l
                          ? 'text-navy-950 font-black underline decoration-gold-500 underline-offset-4'
                          : 'text-navy-500'
                      }`}
                    >
                      {l}
                    </button>

                    {i < languages.length - 1 && (
                      <span className="text-navy-300">
                        |
                      </span>
                    )}
                  </span>
                ))}
              </div>

              {/* Barre de Recherche Globale interactive */}
              <div
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-2 border border-navy-200 hover:border-navy-500 rounded-lg px-3 py-1 bg-gray-50 hover:bg-white transition-all cursor-pointer shadow-2xs"
              >
                <Search size={13} className="text-navy-500" />
                <span className="text-xs text-navy-400 select-none">
                  {t('nav.search_placeholder')}
                </span>
                <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] bg-white border border-gray-200 rounded text-gray-400 font-mono">
                  Ctrl K
                </kbd>
              </div>

            </div>
          </div>
        </div>

        {/* MAIN NAV ROW — toujours visible */}
        <div className="border-b-[3px] border-sky-400">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between gap-4 py-2.5">

              {/* LOGO */}
              <Link
                to="/"
                onClick={closeMenus}
                className="flex items-center gap-2 shrink-0"
              >
                <img
                  src="/assets/logo-iua.png"
                  alt="IUA — Institut Universitaire d'Abidjan"
                  className="h-16 w-16 object-contain"
                />
              </Link>

              {/* DESKTOP NAVIGATION */}
              <nav className="hidden lg:flex items-center gap-3">
                {currentNav.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDesktopMenu(item.label)}
                    onMouseLeave={() => setOpenDesktopMenu(null)}
                  >
                    {/* Menu principal */}
                    <Link
                      to={item.href}
                      onClick={closeMenus}
                      className="flex items-center gap-1.5 border border-navy-900 text-navy-900 font-serif text-[13px] tracking-wide uppercase px-5 py-2.5 hover:bg-navy-900 hover:text-white transition-colors"
                    >
                      {item.label}
                      {item.children && item.children.length > 0 && (
                        <ChevronDown size={13} className="opacity-60" />
                      )}
                    </Link>

                    {/* Sous-menu */}
                    {item.children && item.children.length > 0 && (
                      <div
                        className={`absolute left-0 top-full pt-2 w-72 transition-all duration-150 ${
                          openDesktopMenu === item.label
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 -translate-y-1 pointer-events-none'
                        }`}
                      >
                        <div className="bg-white rounded-lg shadow-card border border-navy-100 py-2 overflow-hidden">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={closeMenus}
                              className="block px-4 py-2 text-sm text-navy-700 hover:bg-navy-50 hover:text-sky-500 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-3">
                {/* Search icon button (Mobile / Tablet) */}
                <button
                  type="button"
                  onClick={() => setSearchModalOpen(true)}
                  aria-label="Rechercher"
                  className="lg:hidden h-10 w-10 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center hover:bg-navy-100 transition-colors"
                >
                  <Search size={18} />
                </button>

                {/* COMPTE */}
                <div className="relative hidden sm:block" ref={accountRef}>
                  <button
                    type="button"
                    onClick={() => setAccountOpen((v) => !v)}
                    aria-label="Mon compte"
                    aria-haspopup="true"
                    aria-expanded={accountOpen}
                    className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-sky-500 transition-colors shrink-0"
                  >
                    <User size={18} />
                  </button>

                  {/* Dropdown compte */}
                  <div
                    className={`absolute right-0 top-full pt-2 w-72 transition-all duration-150 ${
                      accountOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-card border border-navy-100 py-2 overflow-hidden">
                      <p className="px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-navy-400">
                        {t('header.portal')}
                      </p>

                      {accountPortals.map((portal) => (
                        <Link
                          key={portal.label}
                          to={portal.href}
                          onClick={() => setAccountOpen(false)}
                          className="flex items-start gap-3 px-4 py-2.5 hover:bg-navy-50 transition-colors"
                        >
                          <span className="h-8 w-8 shrink-0 rounded-full bg-navy-50 flex items-center justify-center text-navy-700">
                            <Icon name={portal.icon as IconName} size={15} />
                          </span>

                          <span>
                            <span className="block text-sm font-semibold text-navy-900">
                              {portal.label}
                            </span>
                            <span className="block text-xs text-navy-500 leading-snug">
                              {portal.desc}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                  type="button"
                  className="lg:hidden p-2 text-navy-900"
                  aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                  onClick={() => setMobileOpen((v) => !v)}
                >
                  {mobileOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[88px] bottom-0 z-40 bg-white transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto px-6 py-6">
          {/* Recherche mobile */}
          <div
            onClick={() => {
              setMobileOpen(false)
              setSearchModalOpen(true)
            }}
            className="flex items-center gap-3 border border-navy-200 rounded-xl px-4 py-3 bg-gray-50 mb-6 cursor-pointer"
          >
            <Search size={18} className="text-navy-900" />
            <span className="text-sm text-navy-500 font-medium">
              {t('nav.search_placeholder')}
            </span>
          </div>

          {/* Langues mobile */}
          <div className="flex items-center justify-between p-3 bg-navy-50 rounded-xl mb-6">
            <span className="text-xs font-bold text-navy-900 flex items-center gap-1.5">
              <Globe size={14} className="text-gold-500" /> Langue / Language :
            </span>
            <div className="flex items-center gap-2">
              {languages.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-xs rounded-lg font-bold transition-all ${
                    lang === l
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-white text-navy-700 border border-gray-200'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation mobile */}
          {currentNav.map((item) => (
            <div key={item.label} className="border-b border-navy-100 py-1">
              <button
                type="button"
                className="w-full flex items-center justify-between py-3 text-left font-serif uppercase tracking-wide text-navy-900"
                onClick={() =>
                  setOpenMobileMenu((cur) =>
                    cur === item.label ? null : item.label
                  )
                }
              >
                {item.label}
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    openMobileMenu === item.label ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openMobileMenu === item.label && (
                <div className="pb-3 pl-3 flex flex-col gap-1">
                  <Link
                    to={item.href}
                    onClick={closeMenus}
                    className="py-2 text-sm font-semibold text-navy-900"
                  >
                    Voir {item.label}
                  </Link>

                  {item.children?.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      onClick={closeMenus}
                      className="py-2 text-sm text-navy-600 hover:text-sky-500"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* COMPTE MOBILE */}
          <div className="mt-6 border-t border-navy-100 pt-5">
            <p className="text-[11px] font-bold uppercase tracking-wide text-navy-400 mb-3">
              {t('header.portal')}
            </p>

            <div className="flex flex-col gap-2">
              {accountPortals.map((portal) => (
                <Link
                  key={portal.label}
                  to={portal.href}
                  onClick={closeMenus}
                  className="flex items-center gap-3 rounded-lg border border-navy-100 px-4 py-3 hover:bg-navy-50 transition-colors"
                >
                  <span className="h-9 w-9 shrink-0 rounded-full bg-navy-50 flex items-center justify-center text-navy-700">
                    <Icon name={portal.icon as IconName} size={16} />
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-navy-900">
                      {portal.label}
                    </span>
                    <span className="block text-xs text-navy-500 leading-snug">
                      {portal.desc}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        initialQuery={searchQuery}
      />
    </header>
  )
}