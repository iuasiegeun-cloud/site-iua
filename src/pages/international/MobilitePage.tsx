import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Plane,
  GraduationCap,
  Globe2,
  CheckCircle2,
  FileCheck,
  Calendar,
  ArrowRight,
  HelpCircle,
  Building,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function MobilitePage() {
  const [activeTab, setActiveTab] = useState<'conditions' | 'etapes' | 'destinations'>('conditions')

  const destinations = [
    {
      country: 'France',
      unis: [
        { name: 'Université de Rennes 1', field: 'Sciences & Technologies, Économie-Gestion' },
        { name: 'Université Jean Moulin Lyon 3', field: 'Droit Privé, Droit Public, Management' },
        { name: 'Nantes Université', field: 'Sciences Économiques, Finance & Banque' },
        { name: 'INU Jean-François Champollion', field: 'Informatique, Lettres, Sciences Sociales' },
        { name: 'Université Clermont Auvergne', field: 'Gestion de Projets & Économie' },
      ],
    },
    {
      country: 'Royaume-Uni & Canada',
      unis: [
        { name: 'Programmes Passerelles anglophones', field: 'Business Administration & International Law' },
        { name: 'Partenariats d’immersion linguistique', field: 'Perfectionnement Anglais des Affaires' },
      ],
    },
  ]

  const eligibilityCriteria = [
    'Être régulièrement inscrit à l’IUA depuis au moins 1 année académique',
    'Avoir validé l’intégralité des crédits ECTS / CAMES requis (minimum fin de L2 ou L3 pour départ en Master)',
    'Avoir une moyenne générale supérieure ou égale à 12/20 sur l’ensemble du cursus',
    'Justifier d’un comportement exemplaire et de l’absence de sanctions disciplinaires',
    'Avoir un avis favorable du Responsable Pédagogique et du Doyen de Faculté',
    'Justifier des ressources financières nécessaires pour la prise en charge du séjour et du logement',
  ]

  const steps = [
    {
      num: '01',
      title: 'Sélection du programme',
      desc: 'Consultez la liste des universités partenaires compatibles avec votre filière et participez aux réunions d’information organisées en Novembre.',
    },
    {
      num: '02',
      title: 'Dépôt du dossier de mobilité',
      desc: 'Transmettez votre dossier au Pôle Relations Internationales de l’IUA comprenant relevés de notes, CV, lettre de motivation et projet d’études.',
    },
    {
      num: '03',
      title: 'Commission de sélection & Entretien',
      desc: 'Passage devant le jury paritaire IUA / Université partenaire pour validation pédagogique de la candidature.',
    },
    {
      num: '04',
      title: 'Procédure Campus France & Visa',
      desc: 'Accompagnement personnalisé par l’IUA pour la création du compte Études en France, le rendez-vous consulaire et la recherche de logement.',
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Programme de Mobilité Internationale"
        subtitle="Vivez une expérience académique et culturelle unique grâce à nos conventions d'échanges et de doubles diplômes avec des universités européennes."
        badge="Mobilité & Échanges"
        breadcrumbs={[
          { label: 'International', href: '/international' },
          { label: 'Mobilité Internationale' },
        ]}
        bgImage="/assets/graduation-1.jpg"
      />

      {/* Navigation tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-20 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 sm:gap-6 py-3">
            <button
              onClick={() => setActiveTab('conditions')}
              className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl transition-all ${
                activeTab === 'conditions'
                  ? 'bg-navy-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Critères d'Éligibilité
            </button>
            <button
              onClick={() => setActiveTab('etapes')}
              className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl transition-all ${
                activeTab === 'etapes'
                  ? 'bg-navy-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Étapes de la Procédure
            </button>
            <button
              onClick={() => setActiveTab('destinations')}
              className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl transition-all ${
                activeTab === 'destinations'
                  ? 'bg-navy-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Destinations & Universités
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {activeTab === 'conditions' && (
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center">
                  <FileCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 font-display">
                    Conditions pour Candidater à la Mobilité
                  </h3>
                  <p className="text-xs text-gray-500">Critères fixés par la Direction des Affaires Internationales</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {eligibilityCriteria.map((crit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100 text-xs sm:text-sm text-gray-800">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{crit}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-navy-50 rounded-2xl border border-navy-100 flex items-start gap-3 text-xs text-navy-900">
                <HelpCircle size={18} className="text-navy-900 shrink-0 mt-0.5" />
                <div>
                  <strong>Calendrier annuel :</strong> Les candidatures pour les départs de l'année suivante s'ouvrent dès le <strong>1er Novembre</strong> et se clôturent le <strong>15 Février</strong>.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'etapes' && (
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h3 className="text-2xl font-bold text-navy-900 font-display">
                  Parcours de Candidature & Accompagnement
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  L'IUA vous guide pas-à-pas jusqu'à votre arrivée dans votre université d'accueil.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {steps.map((st, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="text-2xl font-black text-gold-500 font-display">{st.num}</span>
                      <h4 className="text-base font-bold text-navy-900 mt-2 mb-2 font-display">{st.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'destinations' && (
            <div className="space-y-8">
              {destinations.map((dest, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <Building className="text-navy-900" size={24} />
                    <h3 className="text-xl font-bold text-navy-900 font-display">
                      Accords Partenaires — {dest.country}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {dest.unis.map((u, uIdx) => (
                      <div key={uIdx} className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                        <h4 className="font-bold text-sm text-navy-900">{u.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">Filières concernées : {u.field}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Help */}
      <section className="py-12 bg-navy-900 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="text-2xl font-bold font-display mb-3">
            Vous avez un projet d'études à l'international ?
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Prenez rendez-vous avec le Responsable des Relations Internationales de l'IUA pour étudier vos options de mobilité.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-xl shadow-lg transition-colors"
          >
            <span>Contacter le Bureau International</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
