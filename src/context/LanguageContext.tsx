import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'FR' | 'EN' | 'ESP'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  FR: {
    // Navigation
    'nav.formation': 'Formation',
    'nav.international': 'International',
    'nav.campus': 'Vie de campus',
    'nav.partenariats': 'Partenariat',
    'nav.contact': 'Contact',
    'nav.licences': 'Licences',
    'nav.masters': 'Masters',
    'nav.admissions': 'Admissions et coûts',
    'nav.mobilite': 'Programme de mobilité internationale',
    'nav.etudiants_intl': 'Étudiants internationaux',
    'nav.cote_divoire': 'La Côte d’Ivoire',
    'nav.logement': 'Logement',
    'nav.transport': 'Transport',
    'nav.a_propos': 'À propos',
    'nav.bibliotheque': 'Bibliothèques (Physique & Numérique)',
    'nav.ressources': 'Ressources',
    'nav.temoignages': 'Témoignages',
    'nav.guide_etudiant': 'Guide de l’étudiant',
    'nav.universites': 'Nos universités partenaires',
    'nav.entreprises': 'Entreprises partenaires',
    'nav.accreditations': 'Accréditations CAMES',
    'nav.insertion': 'Insertion professionnelle',
    'nav.mon_compte': 'Mon compte',
    'nav.connexion': 'Connexion',
    'nav.search_placeholder': 'Rechercher sur tout le site...',
    'nav.quick_search': 'Rechercher (Ctrl+K)',
    
    // Header & Utility
    'header.phone': '+225 27 224 222 65',
    'header.email': 'info@iua-ci.org',
    'header.portal': 'Portails d’accès',

    // Search Modal
    'search.title': 'Recherche sur le site IUA',
    'search.placeholder': 'Rechercher sur le site...',
    'search.all_categories': 'Toutes les catégories',
    'search.formations': 'Formations & Diplômes',
    'search.campus': 'Vie de campus & Services',
    'search.international': 'International',
    'search.admissions': 'Admissions & Frais',
    'search.partenariats': 'Partenariats',
    'search.no_results': 'Aucun résultat trouvé pour votre recherche.',
    'search.results_count': 'résultats trouvés',
    'search.esc_to_close': 'Échap pour fermer',

    // Footer
    'footer.description': 'Institut Universitaire d\'Abidjan — former les leaders de demain depuis plus de 20 ans.',
    'footer.rights': 'Tous droits réservés.',
    'footer.terms': 'Conditions d\'utilisation',
  },
  EN: {
    // Navigation
    'nav.formation': 'Academics',
    'nav.international': 'International',
    'nav.campus': 'Campus Life',
    'nav.partenariats': 'Partnerships',
    'nav.contact': 'Contact Us',
    'nav.licences': 'Bachelor Degrees',
    'nav.masters': 'Master Degrees',
    'nav.admissions': 'Admissions & Tuition',
    'nav.mobilite': 'International Exchange Program',
    'nav.etudiants_intl': 'International Students',
    'nav.cote_divoire': 'Discover Côte d’Ivoire',
    'nav.logement': 'Student Housing',
    'nav.transport': 'Transport & Commute',
    'nav.a_propos': 'About IUA',
    'nav.bibliotheque': 'Libraries (Physical & Digital)',
    'nav.ressources': 'Resources & E-Learning',
    'nav.temoignages': 'Alumni Testimonials',
    'nav.guide_etudiant': 'Student Handbook',
    'nav.universites': 'Partner Universities',
    'nav.entreprises': 'Corporate Partners',
    'nav.accreditations': 'CAMES Accreditations',
    'nav.insertion': 'Career & Employability',
    'nav.mon_compte': 'My Account',
    'nav.connexion': 'Sign In',
    'nav.search_placeholder': 'Search the entire website...',
    'nav.quick_search': 'Search (Ctrl+K)',

    // Header & Utility
    'header.phone': '+225 27 224 222 65',
    'header.email': 'info@iua-ci.org',
    'header.portal': 'Access Portals',

    // Search Modal
    'search.title': 'Search IUA Website',
    'search.placeholder': 'Search the website...',
    'search.all_categories': 'All Categories',
    'search.formations': 'Programs & Degrees',
    'search.campus': 'Campus Life & Services',
    'search.international': 'International',
    'search.admissions': 'Admissions & Fees',
    'search.partenariats': 'Partnerships',
    'search.no_results': 'No results found for your search query.',
    'search.results_count': 'results found',
    'search.esc_to_close': 'Esc to close',

    // Footer
    'footer.description': 'Abidjan University Institute — training tomorrow’s leaders for over 20 years.',
    'footer.rights': 'All rights reserved.',
    'footer.terms': 'Terms of Service',
  },
  ESP: {
    // Navigation
    'nav.formation': 'Programas Académicos',
    'nav.international': 'Internacional',
    'nav.campus': 'Vida en el Campus',
    'nav.partenariats': 'Alianzas',
    'nav.contact': 'Contacto',
    'nav.licences': 'Licenciaturas',
    'nav.masters': 'Maestrías',
    'nav.admissions': 'Admisiones y Costos',
    'nav.mobilite': 'Programa de Movilidad Internacional',
    'nav.etudiants_intl': 'Estudiantes Internacionales',
    'nav.cote_divoire': 'Costa de Marfil',
    'nav.logement': 'Alojamiento',
    'nav.transport': 'Transporte',
    'nav.a_propos': 'Acerca de la IUA',
    'nav.bibliotheque': 'Bibliotecas (Física y Digital)',
    'nav.ressources': 'Recursos y E-Learning',
    'nav.temoignages': 'Testimonios',
    'nav.guide_etudiant': 'Guía del Estudiante',
    'nav.universites': 'Universidades Asociadas',
    'nav.entreprises': 'Empresas Colaboradoras',
    'nav.accreditations': 'Acreditaciones CAMES',
    'nav.insertion': 'Inserción Profesional',
    'nav.mon_compte': 'Mi Cuenta',
    'nav.connexion': 'Iniciar Sesión',
    'nav.search_placeholder': 'Buscar en todo el sitio web...',
    'nav.quick_search': 'Buscar (Ctrl+K)',

    // Header & Utility
    'header.phone': '+225 27 224 222 65',
    'header.email': 'info@iua-ci.org',
    'header.portal': 'Portales de Acceso',

    // Search Modal
    'search.title': 'Buscar en el sitio web de la IUA',
    'search.placeholder': 'Buscar en el sitio...',
    'search.all_categories': 'Todas las categorías',
    'search.formations': 'Programas y Títulos',
    'search.campus': 'Vida en el Campus',
    'search.international': 'Internacional',
    'search.admissions': 'Admisiones y Tasas',
    'search.partenariats': 'Alianzas',
    'search.no_results': 'No se encontraron resultados para su búsqueda.',
    'search.results_count': 'resultados encontrados',
    'search.esc_to_close': 'Esc para cerrar',

    // Footer
    'footer.description': 'Instituto Universitario de Abiyán — formando a los líderes del mañana desde hace más de 20 años.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.terms': 'Términos de uso',
  },
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'FR',
  setLang: () => {},
  t: (key: string) => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('iua_lang') as Language
    return saved && ['FR', 'EN', 'ESP'].includes(saved) ? saved : 'FR'
  })

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('iua_lang', newLang)
    
    // Google Translate trigger
    const gtMap: Record<Language, string> = {
      FR: '/fr/fr',
      EN: '/fr/en',
      ESP: '/fr/es',
    }
    document.cookie = `googtrans=${gtMap[newLang]}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=${gtMap[newLang]}; path=/;`;
    window.location.reload();
  }

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['FR']?.[key] || key
  }

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase()
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
