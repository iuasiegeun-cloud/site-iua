import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  Monitor,
  Download,
  FileText,
  Clock,
  Search,
  ExternalLink,
  Laptop,
  CheckCircle2,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function RessourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const downloadableDocs = [
    {
      title: 'Calendrier Académique Officiel 2026-2027',
      category: 'Pédagogie',
      size: 'PDF • 1.2 Mo',
      desc: 'Dates des semestres, sessions d’examens, rattrapages et congés universitaires.',
    },
    {
      title: 'Guide & Charte Anti-Plagiat de l’IUA',
      category: 'Règlement',
      size: 'PDF • 850 Ko',
      desc: 'Normes de citation académique (APA, Chicago) et sanctions en cas de fraude.',
    },
    {
      title: 'Formulaire de Demande d’Attestation & Relevé de Notes',
      category: 'Scolarité',
      size: 'PDF • 420 Ko',
      desc: 'Fiche à remplir pour toute demande de duplicata ou document officiel.',
    },
    {
      title: 'Guide de Rédaction du Mémoire de Fin d’Études (Licence & Master)',
      category: 'Recherche',
      size: 'PDF • 2.1 Mo',
      desc: 'Canevas type, mise en page obligatoire et critères d’évaluation du jury.',
    },
    {
      title: 'Dossier de Candidature Inscription 2026-2027',
      category: 'Admissions',
      size: 'PDF • 650 Ko',
      desc: 'Fiche d’inscription officielle pour les cycles Licence et Master.',
    },
  ]

  const digitalPlatforms = [
    {
      name: 'Plateforme E-Learning (FOAD Moodle)',
      desc: 'Accédez aux supports de cours magistraux, travaux dirigés, devoirs à rendre et cours enregistrés en vidéo.',
      link: '/connexion',
      badge: 'elearning.iua.ci',
      icon: Monitor,
    },
    {
      name: 'Espace Numérique Microsoft 365',
      desc: 'Boîte e-mail institutionnelle @iua-ci.org, Teams pour les classes virtuelles et suite Office complète.',
      link: '/connexion',
      badge: 'Compte Étudiant',
      icon: Laptop,
    },
    {
      name: 'Bibliothèque Universitaire (Physique & Numérique)',
      desc: 'Fonds documentaire de 3 400+ livres, 500+ mémoires, salles de lecture de 400 places et bases en ligne ScholarVox & Dalloz.',
      link: '/bibliotheque',
      badge: 'Base Documentaire',
      icon: BookOpen,
    },
  ]

  const filteredDocs = downloadableDocs.filter(
    (d) =>
      d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Ressources Pédagogiques & E-Services"
        subtitle="Retrouvez l'ensemble des plateformes numériques, documents téléchargeables et services documentaires pour accompagner vos études au quotidien."
        badge="Portail Étudiant"
        breadcrumbs={[
          { label: 'Vie de campus', href: '/vie-campus' },
          { label: 'Ressources' },
        ]}
        bgImage="/assets/amphi-2.jpg"
      />

      {/* Digital Platforms */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Accès En Ligne
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Vos Plateformes Digitales de Travail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalPlatforms.map((p, idx) => {
              const IconComponent = p.icon
              return (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-gold-400 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-md">
                        <IconComponent size={24} />
                      </div>
                      <span className="px-3 py-1 bg-navy-100 text-navy-900 text-xs font-semibold rounded-full">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-900 font-display mb-2">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {p.desc}
                    </p>
                  </div>

                  <Link
                    to={p.link}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    <span>Se connecter à la plateforme</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Document Library Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                Téléchargements Officiels
              </span>
              <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
                Documents & Formulaires Administratifs
              </h2>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher un document..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-gold-400 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md">
                        {doc.category}
                      </span>
                      <span className="text-xs text-gray-400">{doc.size}</span>
                    </div>
                    <h3 className="text-base font-bold text-navy-900 font-display">{doc.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{doc.desc}</p>
                  </div>
                </div>

                <a
                  href="#telecharger"
                  onClick={(e) => {
                    e.preventDefault()
                    alert(`Téléchargement de « ${doc.title} » en cours...`)
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white text-xs font-bold rounded-xl transition-colors shrink-0 self-end sm:self-auto"
                >
                  <Download size={15} />
                  <span>Télécharger (PDF)</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Opening Hours */}
      <section className="py-12 bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Clock size={16} />
                <span>Horaires d'Ouverture</span>
              </div>
              <h3 className="text-2xl font-bold font-display mb-2">Bibliothèque Universitaire & Scolarité</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Située au Bâtiment A du campus des II Plateaux, la bibliothèque offre 250 places assises climatisées, des box de travail de groupe et des postes informatiques connectés à la fibre optique.
              </p>
            </div>

            <div className="bg-navy-800 p-6 rounded-2xl border border-navy-700 space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-navy-700">
                <span className="text-gray-300">Lundi au Vendredi (Bibliothèque)</span>
                <span className="font-bold text-gold-400">07h30 — 19h00 (Non-stop)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-navy-700">
                <span className="text-gray-300">Samedi (Salle de révision)</span>
                <span className="font-bold text-gold-400">08h00 — 16h00</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-300">Service de la Scolarité & Caisses</span>
                <span className="font-bold text-white">08h00 — 17h00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
