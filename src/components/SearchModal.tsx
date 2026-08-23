import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Search,
  X,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Globe2,
  DollarSign,
  Briefcase,
  Phone,
  Sparkles,
  Command,
} from 'lucide-react'
import { searchIndex, type SearchItem } from '../data/searchIndex'
import { useLanguage } from '../context/LanguageContext'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  initialQuery?: string
}

export default function SearchModal({ isOpen, onClose, initialQuery = '' }: SearchModalProps) {
  const [query, setQuery] = useState(initialQuery)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const { t } = useLanguage()

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery)
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, initialQuery])

  // Key navigation (Escape, Up, Down, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const filteredResults = searchIndex.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    if (!query.trim()) {
      return matchesCategory
    }

    const q = query.toLowerCase().trim()
    const matchesTitle = item.title.toLowerCase().includes(q)
    const matchesDesc = item.description.toLowerCase().includes(q)
    const matchesKeywords = item.keywords.some((k) => k.toLowerCase().includes(q))
    const matchesCatLabel = item.categoryLabel.toLowerCase().includes(q)

    return matchesCategory && (matchesTitle || matchesDesc || matchesKeywords || matchesCatLabel)
  })

  const handleSelect = (item: SearchItem) => {
    onClose()
    navigate(item.href)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'formations':
        return <GraduationCap size={16} className="text-gold-500" />
      case 'campus':
        return <BookOpen size={16} className="text-sky-500" />
      case 'international':
        return <Globe2 size={16} className="text-emerald-500" />
      case 'admissions':
        return <DollarSign size={16} className="text-amber-500" />
      case 'partenariats':
        return <Briefcase size={16} className="text-purple-500" />
      case 'contact':
        return <Phone size={16} className="text-rose-500" />
      default:
        return <Sparkles size={16} className="text-gold-500" />
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-navy-950/75 backdrop-blur-md transition-all animate-fadeIn">
      {/* Overlay click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Header Input */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
          <Search size={22} className="text-gold-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            placeholder={t('search.placeholder')}
            className="flex-1 bg-transparent text-sm sm:text-base text-navy-900 placeholder:text-gray-400 outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Effacer"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold bg-gray-200/80 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
          >
            {t('search.esc_to_close')}
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2.5 border-b border-gray-100 bg-white flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              activeCategory === 'all'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t('search.all_categories')}
          </button>
          <button
            onClick={() => setActiveCategory('formations')}
            className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              activeCategory === 'formations'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t('search.formations')}
          </button>
          <button
            onClick={() => setActiveCategory('campus')}
            className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              activeCategory === 'campus'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t('search.campus')}
          </button>
          <button
            onClick={() => setActiveCategory('international')}
            className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              activeCategory === 'international'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t('search.international')}
          </button>
          <button
            onClick={() => setActiveCategory('admissions')}
            className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              activeCategory === 'admissions'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t('search.admissions')}
          </button>
          <button
            onClick={() => setActiveCategory('partenariats')}
            className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              activeCategory === 'partenariats'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t('search.partenariats')}
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <Search size={36} className="mx-auto mb-3 text-gray-300" />
              <p className="text-sm font-medium text-navy-900">{t('search.no_results')}</p>
              <p className="text-xs text-gray-400 mt-1">
                Essayez d'autres mots-clés : Informatique, MIAGE, Droit, Bibliothèque, Frais, Visa...
              </p>
            </div>
          ) : (
            filteredResults.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="p-3 sm:p-4 rounded-2xl border border-gray-100 hover:border-gold-300 bg-white hover:bg-navy-50/40 transition-all cursor-pointer flex items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-navy-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-2 py-0.5 rounded-md border border-gold-200">
                        {item.categoryLabel}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-semibold text-navy-700 bg-navy-50 px-2 py-0.5 rounded-md">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-navy-900 font-display group-hover:text-gold-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-gray-400 group-hover:text-navy-900 group-hover:translate-x-1 transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>
            <strong>{filteredResults.length}</strong> {t('search.results_count')}
          </span>
          <div className="flex items-center gap-3 text-[11px] text-gray-400">
            <span>Navigation rapide</span>
            <span className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-gray-600 font-mono">↵ Entrée</span>
          </div>
        </div>
      </div>
    </div>
  )
}
