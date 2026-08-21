import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, User, ChevronDown, Menu, X } from 'lucide-react'

import { mainNav, accountPortals } from '../data'
import Icon, { type IconName } from './IconMap'

const languages = ['FR', 'EN', 'ESP']

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState('FR')
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)
  const [accountOpen, setAccountOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const accountRef = useRef<HTMLDivElement>(null)

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

  return (
    <header>

      {/* =====================================================
          HEADER FIXE — les deux rangées sont fixées en haut.
          La barre utilitaire (langues + recherche) se replie
          au scroll ; seule la nav principale reste visible.
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
            <div className="hidden md:flex items-center justify-end gap-4 py-1.5 text-xs">

              {/* Langues */}
              <div className="flex items-center gap-1 text-navy-500 font-medium">
                {languages.map((l, i) => (
                  <span
                    key={l}
                    className="flex items-center gap-1"
                  >
                    <button
                      type="button"
                      onClick={() => setLang(l)}
                      className={`hover:text-sky-500 transition-colors ${
                        lang === l
                          ? 'text-navy-900 font-bold'
                          : ''
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

              {/* Recherche */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center border border-navy-200 rounded-md overflow-hidden"
              >
                <input
                  type="search"
                  placeholder="Rechercher"
                  aria-label="Rechercher sur le site"
                  className="px-3 py-1.5 text-xs text-navy-700 placeholder:text-navy-400 outline-none w-40"
                />

                <button
                  type="submit"
                  aria-label="Lancer la recherche"
                  className="px-2.5 h-full text-navy-500 hover:text-sky-500 transition-colors"
                >
                  <Search size={14} />
                </button>
              </form>
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
                className="h-16 w-16"
              />
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION
            ====================================================== */}
            <nav className="hidden lg:flex items-center gap-3">

              {mainNav.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDesktopMenu(item.label)
                  }
                  onMouseLeave={() =>
                    setOpenDesktopMenu(null)
                  }
                >

                  {/* Menu principal */}
                  <Link
                    to={item.href}
                    onClick={closeMenus}
                    className="flex items-center gap-1.5 border border-navy-900 text-navy-900 font-serif text-[13px] tracking-wide uppercase px-5 py-2.5 hover:bg-navy-900 hover:text-white transition-colors"
                  >
                    {item.label}

                    {item.children?.length > 0 && (
                      <ChevronDown
                        size={13}
                        className="opacity-60"
                      />
                    )}
                  </Link>

                  {/* Sous-menu */}
                  {item.children?.length > 0 && (
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

            {/* =====================================================
                RIGHT SIDE
            ====================================================== */}
            <div className="flex items-center gap-3">

              {/* =================================================
                  COMPTE
              ================================================== */}
              <div
                className="relative hidden sm:block"
                ref={accountRef}
              >

                {/* Bouton utilisateur */}
                <button
                  type="button"
                  onClick={() =>
                    setAccountOpen((v) => !v)
                  }
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
                      Se connecter en tant que
                    </p>

                    {accountPortals.map((portal) => (
                      <Link
                        key={portal.label}
                        to={portal.href}
                        onClick={() => setAccountOpen(false)}
                        className="flex items-start gap-3 px-4 py-2.5 hover:bg-navy-50 transition-colors"
                      >

                        <span className="h-8 w-8 shrink-0 rounded-full bg-navy-50 flex items-center justify-center text-navy-700">
                          <Icon
                            name={portal.icon as IconName}
                            size={15}
                          />
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

              {/* =================================================
                  MOBILE BUTTON
              ================================================== */}
              <button
                type="button"
                className="lg:hidden p-2 text-navy-900"
                aria-label={
                  mobileOpen
                    ? 'Fermer le menu'
                    : 'Ouvrir le menu'
                }
                onClick={() =>
                  setMobileOpen((v) => !v)
                }
              >
                {mobileOpen ? (
                  <X size={26} />
                ) : (
                  <Menu size={26} />
                )}
              </button>

            </div>

          </div>
        </div>
        </div>
      </div>

      {/* Spacer pour compenser la hauteur du header fixe — suit l'état
          scrolled pour ne jamais laisser de vide sous le header */}
      

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[88px] bottom-0 z-40 bg-white transition-transform duration-300 ${
          mobileOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >

        <div className="h-full overflow-y-auto px-6 py-6">

          {/* Langues mobile */}
          <div className="flex items-center gap-1 text-sm text-navy-500 font-medium mb-6">

            {languages.map((l, i) => (
              <span
                key={l}
                className="flex items-center gap-1"
              >
                <button
                  type="button"
                  onClick={() => setLang(l)}
                  className={
                    lang === l
                      ? 'text-navy-900 font-bold'
                      : ''
                  }
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

          {/* Navigation mobile */}
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="border-b border-navy-100 py-1"
            >

              {/* Titre menu */}
              <button
                type="button"
                className="w-full flex items-center justify-between py-3 text-left font-serif uppercase tracking-wide text-navy-900"
                onClick={() =>
                  setOpenMobileMenu((cur) =>
                    cur === item.label
                      ? null
                      : item.label
                  )
                }
              >
                {item.label}

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    openMobileMenu === item.label
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </button>

              {/* Sous-menu mobile */}
              {openMobileMenu === item.label && (
                <div className="pb-3 pl-3 flex flex-col gap-1">

                  {/* Lien principal */}
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

          {/* =================================================
              COMPTE MOBILE
          ================================================== */}
          <div className="mt-6 border-t border-navy-100 pt-5">

            <p className="text-[11px] font-bold uppercase tracking-wide text-navy-400 mb-3">
              Se connecter en tant que
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
                    <Icon
                      name={portal.icon as IconName}
                      size={16}
                    />
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
    </header>
  )
}