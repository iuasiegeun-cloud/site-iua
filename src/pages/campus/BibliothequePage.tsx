import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  Laptop,
  Search,
  Building,
  Globe2,
  Clock,
  CheckCircle2,
  FileText,
  Bookmark,
  ExternalLink,
  ShieldCheck,
  Users,
  Download,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Database,
  Library,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function BibliothequePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'physique' | 'numerique' | 'catalogue'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDomain, setSelectedDomain] = useState<string>('all')

  const stats = [
    { value: '3 400+', label: 'Livres spécialisés & Manuels', desc: 'Fonds physique complet couvrant toutes les facultés' },
    { value: '500+', label: 'Mémoires d’étudiants archivés', desc: 'Travaux de recherche et thèses soutenus à l’IUA' },
    { value: '400+', label: 'Places en salles de lecture', desc: 'Sous-sol aménagé & 2 grandes salles de lecture climatisées' },
    { value: '24h/24', label: 'E-Library & Outils E-learning', desc: 'Accès numérique ScholarVox, Dalloz & plateformes FOAD' },
  ]

  const digitalPlatforms = [
    {
      name: 'ScholarVox Cyberlibris',
      category: 'Pluridisciplinaire & E-books',
      desc: 'Plus de 60 000 e-books universitaires en texte intégral en gestion, économie, droit, sciences et informatique.',
      badge: 'Accès Illimité',
      icon: BookOpen,
      disciplines: ['Informatique', 'Gestion', 'Économie', 'Droit', 'Sciences'],
      link: 'https://www.scholarvox.com',
    },
    {
      name: 'Dalloz & Juris-Classeur',
      category: 'Sciences Juridiques & Droit OHADA',
      desc: 'Fonds documentaire d’excellence : codes officiels annotés, revues juridiques de référence, jurisprudence commentée et encyclopédies.',
      badge: 'Pôle Juridique',
      icon: FileText,
      disciplines: ['Droit Privé', 'Droit Public', 'Droit des Affaires OHADA', 'Fiscalité'],
      link: 'https://www.dalloz.fr',
    },
    {
      name: 'Cairn.info & OpenEdition',
      category: 'Sciences Humaines & Sociales',
      desc: 'Accès à des centaines de revues académiques, magazines et ouvrages de recherche en sociologie, communication et économie.',
      badge: 'Revues Scientifiques',
      icon: Globe2,
      disciplines: ['Sociologie', 'Communication', 'Sciences Politiques', 'Management'],
      link: 'https://www.cairn.info',
    },
    {
      name: 'IEEE Xplore & ACM Digital Library',
      category: 'Informatique & Technologies',
      desc: 'Articles de recherche, conférences et publications internationales de pointe en Intelligence Artificielle, Cybersécurité et Génie Logiciel.',
      badge: 'High-Tech & Recherche',
      icon: Laptop,
      disciplines: ['Génie Informatique', 'Big Data & IA', 'Cybersécurité', 'MIAGE'],
      link: 'https://ieeexplore.ieee.org',
    },
    {
      name: 'DICAMES (Bibliothèque Numérique CAMES)',
      category: 'Recherche Universitaire Africaine',
      desc: 'Archive ouverte institutionnelle du CAMES rassemblant les thèses de doctorat, mémoires de master et publications scientifiques des universités membres.',
      badge: 'Open Access Afrique',
      icon: Database,
      disciplines: ['Toutes spécialités CAMES', 'Recherche appliquée'],
      link: 'https://dicames.online',
    },
    {
      name: 'Hub Ressources & Mémoires IUA',
      category: 'Patrimoine Pédagogique Interne',
      desc: 'Consultez les annales d’examens, supports de cours polycopiés par les professeurs titulaires et les meilleurs mémoires de fin d’études soutenus avec mention.',
      badge: 'Réservé IUA',
      icon: Bookmark,
      disciplines: ['Licences', 'Masters', 'Annales IUA'],
      link: '/connexion',
    },
  ]

  const catalogPreview = [
    {
      title: 'Intelligence Artificielle & Deep Learning : Concepts et Applications Pratiques',
      author: 'Prof. Aurélien GÉRON',
      domain: 'informatique',
      type: 'Physique & Numérique',
      cote: 'INF-402 / IA-2025',
      available: true,
    },
    {
      title: 'Traité de Droit Commercial et des Sociétés Commerciales OHADA (Tome 1 & 2)',
      author: 'Prof. Joseph ISSA-SAYEGH & Paul-Gérard POUGOUE',
      domain: 'droit',
      type: 'Physique (Salle de Droit)',
      cote: 'DRO-108 / OHADA',
      available: true,
    },
    {
      title: 'Systèmes d’Information et Management d’Entreprise (MIAGE & ERP)',
      author: 'Kenneth LAUDON & Jane LAUDON',
      domain: 'informatique',
      type: 'Physique & Numérique (ScholarVox)',
      cote: 'MIA-305 / SI-2024',
      available: true,
    },
    {
      title: 'Cybersécurité et Défense des Systèmes : Hacking Éthique & Normes ISO 27001',
      author: 'Éric CHARTON & Jean-François PIERET',
      domain: 'informatique',
      type: 'Physique & Numérique',
      cote: 'CYB-501 / SEC-2025',
      available: true,
    },
    {
      title: 'Comptabilité Financière Approfondie - Système Comptable SYSCOHADA Révisé',
      author: 'Dr. Marcel KOUADIO',
      domain: 'gestion',
      type: 'Physique (Fonds Éco-Gestion)',
      cote: 'GES-204 / SYSCO',
      available: false,
    },
    {
      title: 'Communication des Organisations et Stratégies d’Influence Digitale',
      author: 'Thierry LIBAERT & Nicolas BAYGERT',
      domain: 'communication',
      type: 'Physique & Numérique',
      cote: 'COM-112 / STRAT',
      available: true,
    },
  ]

  const filteredCatalog = catalogPreview.filter((item) => {
    const matchesDomain = selectedDomain === 'all' || item.domain === selectedDomain
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cote.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDomain && matchesSearch
  })

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Bibliothèque Universitaire de l'IUA"
        subtitle="Un écosystème documentaire complet alliant une grande bibliothèque physique climatisée et un portail numérique d'e-learning accessible 24h/24 pour propulser votre réussite académique."
        badge="Ressources & Savoir"
        breadcrumbs={[
          { label: 'Vie de campus', href: '/vie-campus' },
          { label: 'Bibliothèque' },
        ]}
        bgImage="/assets/amphi-2.jpg"
      />

      {/* Chiffres clés */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((st, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-navy-50/60 border border-navy-100/80">
                <span className="text-3xl font-black text-navy-900 font-display block mb-1">
                  {st.value}
                </span>
                <h3 className="text-sm font-bold text-navy-900 mb-1">{st.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Filter Bar */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-20 z-20 backdrop-blur-md bg-gray-50/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Tous les Espaces
            </button>
            <button
              onClick={() => setActiveTab('physique')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'physique'
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Library size={16} />
              Bibliothèque Physique (Campus)
            </button>
            <button
              onClick={() => setActiveTab('numerique')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'numerique'
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Laptop size={16} />
              Bibliothèque Numérique (24h/24)
            </button>
            <button
              onClick={() => setActiveTab('catalogue')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'catalogue'
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Search size={16} />
              Catalogue & Recherche
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: BIBLIOTHEQUE PHYSIQUE */}
      {(activeTab === 'all' || activeTab === 'physique') && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
              <div className="lg:col-span-7">
                <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                  Sur le Campus de Cocody 7ème Tranche
                </span>
                <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-4">
                  La Bibliothèque Centrale de l'IUA
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Située au cœur du campus universitaire dans un cadre climatisé, calme et propice à la concentration, la bibliothèque physique offre plus de 350 places assises et un accès direct aux rayonnages spécialisés par faculté.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-900">Espaces Silencieux & Coworking</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">Tables individuelles et boxes insonorisés pour le travail de groupe.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                      <Laptop size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-900">Postes Informatiques Connectés</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">Postes dédiés à la recherche documentaire, Wi-Fi haut débit campus.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-900">Fonds Juridique & OHADA</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">Collection complète des traités, codes juridiques et revues d’Afrique.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-navy-900">Pôle Informatique & IA</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">Ouvrages de référence en génie logiciel, MIAGE, data science et cybersécurité.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box Horaires & Conditions */}
              <div className="lg:col-span-5">
                <div className="bg-navy-900 text-white rounded-3xl p-8 shadow-xl border border-navy-800">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gold-500 text-navy-950 flex items-center justify-center font-bold">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display">Horaires & Modalités</h3>
                      <p className="text-xs text-gray-300">Accès sur présentation de la carte d'étudiant</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-gray-200 pb-6 border-b border-white/10">
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span>Lundi au Vendredi :</span>
                      <strong className="text-gold-400">07h30 – 19h00 non-stop</strong>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span>Samedi :</span>
                      <strong className="text-gold-400">08h00 – 16h00</strong>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Dimanche & Jours fériés :</span>
                      <span className="text-gray-400">Fermé</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2 text-xs text-navy-200">
                    <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-2">
                      Règles d'emprunt à domicile :
                    </h4>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-gold-400 shrink-0 mt-0.5" />
                      <span>Jusqu’à <strong>3 ouvrages simultanés</strong> pour une durée de 14 jours.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-gold-400 shrink-0 mt-0.5" />
                      <span>Renouvellement possible en ligne depuis votre compte étudiant.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-gold-400 shrink-0 mt-0.5" />
                      <span>Service de reprographie et impression disponible sur place.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: BIBLIOTHEQUE NUMERIQUE */}
      {(activeTab === 'all' || activeTab === 'numerique') && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                Portail Numérique & E-Learning
              </span>
              <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
                La Bibliothèque Numérique IUA (E-Library 24/7)
              </h2>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Tous les étudiants et enseignants de l’IUA bénéficient d’un accès gratuit et illimité aux plus grandes bases de données universitaires mondiales depuis leur ordinateur, tablette ou smartphone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {digitalPlatforms.map((platform, idx) => {
                const IconComp = platform.icon
                return (
                  <div
                    key={idx}
                    className="p-8 bg-gray-50 rounded-3xl border border-gray-200 hover:border-gold-400 hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-md">
                          <IconComp size={24} />
                        </div>
                        <span className="px-3 py-1 bg-gold-50 text-gold-800 text-[11px] font-bold rounded-full border border-gold-200">
                          {platform.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-navy-900 font-display mb-1">{platform.name}</h3>
                      <p className="text-xs font-semibold text-gold-600 mb-3">{platform.category}</p>
                      <p className="text-xs text-gray-600 leading-relaxed mb-5">{platform.desc}</p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {platform.disciplines.map((d, dIdx) => (
                          <span
                            key={dIdx}
                            className="px-2.5 py-1 bg-white text-gray-700 text-[10px] font-medium rounded-md border border-gray-200"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={platform.link}
                      target={platform.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="w-full py-2.5 px-4 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Accéder à la plateforme</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: CATALOGUE INTERACTIF & RECHERCHE */}
      {(activeTab === 'all' || activeTab === 'catalogue') && (
        <section className="py-16 bg-navy-950 text-white border-t border-navy-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-gold-400 font-bold text-xs uppercase tracking-widest">
                Recherche Rapide
              </span>
              <h2 className="text-3xl font-bold font-display mt-1">
                Catalogue des Ouvrages & Thématiques
              </h2>
              <p className="text-xs text-gray-300 mt-2">
                Consultez la disponibilité des titres en rayon physique ou en version e-book numérique.
              </p>
            </div>

            {/* Barre de recherche et filtre */}
            <div className="max-w-3xl mx-auto mb-10 space-y-4">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher par titre, auteur (ex: Laudon, OHADA, Intelligence Artificielle)..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/15 focus:outline-none focus:border-gold-400 text-sm text-white placeholder-gray-400 transition-all"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
                <button
                  onClick={() => setSelectedDomain('all')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    selectedDomain === 'all' ? 'bg-gold-500 text-navy-950' : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  Toutes disciplines
                </button>
                <button
                  onClick={() => setSelectedDomain('informatique')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    selectedDomain === 'informatique' ? 'bg-gold-500 text-navy-950' : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  Informatique & IA
                </button>
                <button
                  onClick={() => setSelectedDomain('droit')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    selectedDomain === 'droit' ? 'bg-gold-500 text-navy-950' : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  Droit & Sciences Politiques
                </button>
                <button
                  onClick={() => setSelectedDomain('gestion')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    selectedDomain === 'gestion' ? 'bg-gold-500 text-navy-950' : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  Économie & Gestion
                </button>
                <button
                  onClick={() => setSelectedDomain('communication')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    selectedDomain === 'communication' ? 'bg-gold-500 text-navy-950' : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  Communication & Médias
                </button>
              </div>
            </div>

            {/* Liste des résultats catalogue */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {filteredCatalog.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-gold-400/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 border border-gold-500/30">
                        Cote : {item.cote}
                      </span>
                      {item.available ? (
                        <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 size={12} /> Disponible
                        </span>
                      ) : (
                        <span className="text-[10px] text-amber-400 font-semibold">En prêt (Réservable)</span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-white font-display mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-300">{item.author}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Format : {item.type}</span>
                    <Link
                      to="/contact"
                      className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-1"
                    >
                      Demander l'ouvrage <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: GUIDE & AIDE */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-gold-400 font-bold text-xs uppercase tracking-widest">
                Assistance aux Étudiants
              </span>
              <h3 className="text-2xl font-bold font-display mt-1 mb-2">
                Besoin d'aide pour vos recherches documentaires ?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed">
                L'équipe des bibliothécaires et documentalistes de l'IUA vous assiste pour trouver vos sources, rédiger votre bibliographie de mémoire ou activer vos accès numériques.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-xl text-center transition-colors shadow-md"
              >
                Contacter la Bibliothèque
              </Link>
              <Link
                to="/connexion"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 text-center transition-colors"
              >
                Espace Numérique Étudiant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
