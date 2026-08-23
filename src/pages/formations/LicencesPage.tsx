import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Clock,
  Award,
  CheckCircle2,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Filter,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

interface LicenceProgram {
  id: string
  title: string
  faculty: string
  facultySlug: string
  badge: string
  duration: string
  bacRequired: string
  description: string
  skills: string[]
  careers: string[]
  camesAccredited: boolean
}

export const licencesData: LicenceProgram[] = [
  {
    id: 'lic-genie-informatique',
    title: 'Licence en Génie Informatique (GI)',
    faculty: 'Faculté des Sciences et Technologies',
    facultySlug: 'sciences-technologies',
    badge: 'Filière Ingénierie & Tech',
    duration: '3 ans (6 semestres - 180 crédits)',
    bacRequired: 'Bac C, D, E ou équivalent scientifique',
    description: 'Formation complète axée sur la conception et le développement de logiciels, l’architecture système, les bases de données avancées, les réseaux et le cloud.',
    skills: ['Conception & développement logiciel (Web, Mobile, Desktop)', 'Bases de données relationnelles et NoSQL', 'Architectures cloud, réseaux et sécurité', 'Gestion de projets informatiques et méthodologies agiles'],
    careers: ['Ingénieur logiciel junior', 'Développeur Full Stack', 'Administrateur de bases de données', 'Architecte applicatif junior'],
    camesAccredited: true,
  },
  {
    id: 'lic-miage',
    title: 'Licence MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)',
    faculty: 'Faculté des Sciences et Technologies',
    facultySlug: 'sciences-technologies',
    badge: 'Double Compétence Informatique & Gestion',
    duration: '3 ans (6 semestres - 180 crédits)',
    bacRequired: 'Bac C, D, E, G2',
    description: 'Cursus d’excellence combinant les sciences informatiques et les sciences de gestion pour former des professionnels des systèmes d’information d’entreprise et du numérique.',
    skills: ['Ingénierie des systèmes d’information (SI)', 'Gestion d’entreprise, comptabilité et audit', 'Développement d’applications métier et ERP', 'Modélisation de processus organisationnels'],
    careers: ['Consultant SI junior', 'Analyste d’affaires (Business Analyst)', 'Développeur d’applications de gestion', 'Assistant chef de projet numérique'],
    camesAccredited: true,
  },
  {
    id: 'lic-droit-prive',
    title: 'Licence en Droit Privé',
    faculty: 'Faculté de Droit et Science Politique',
    facultySlug: 'droit-science-politique',
    badge: 'Sciences Juridiques',
    duration: '3 ans (6 semestres - 180 crédits)',
    bacRequired: 'Bac A1, A2, B, C, D, G2',
    description: 'Enseignement rigoureux des fondamentaux du droit civil, droit commercial OHADA, droit des contrats, des personnes et du travail.',
    skills: ['Maîtrise du droit des affaires OHADA', 'Rédaction d’actes juridiques', 'Contentieux et conseil en entreprise'],
    careers: ['Juriste d’entreprise junior', 'Collaborateur d’avocat / notaire', 'Conseiller juridique'],
    camesAccredited: true,
  },
  {
    id: 'lic-droit-public-politique',
    title: 'Licence en Droit Public & Science Politique',
    faculty: 'Faculté de Droit et Science Politique',
    facultySlug: 'droit-science-politique',
    badge: 'Institutions & Relations Internationales',
    duration: '3 ans (6 semestres - 180 crédits)',
    bacRequired: 'Bac A1, A2, B, C, D',
    description: 'Étude approfondie du droit constitutionnel, droit administratif, contentieux public et relations internationales contemporaines.',
    skills: ['Analyse des politiques publiques', 'Droit des marchés publics', 'Droit international humanitaire'],
    careers: ['Cadre de la fonction publique', 'Chargé d’études politiques / ONG', 'Assistant en diplomatie'],
    camesAccredited: true,
  },
  {
    id: 'lic-sciences-eco-gestion',
    title: 'Licence en Sciences Économiques & Gestion',
    faculty: 'Faculté des Sciences Économiques et de Gestion',
    facultySlug: 'sciences-eco-gestion',
    badge: 'Économie & Management',
    duration: '3 ans (6 semestres - 180 crédits)',
    bacRequired: 'Bac C, D, E, B, G2',
    description: 'Maîtrise de la macroéconomie, microéconomie, gestion d’entreprise, analyse financière et statistiques appliquées.',
    skills: ['Analyse de données économiques', 'Diagnostic financier', 'Contrôle budgétaire', 'Modélisation'],
    careers: ['Analyste économique junior', 'Chargé d’études financières', 'Gestionnaire de projets'],
    camesAccredited: true,
  },
  {
    id: 'lic-finance-comptabilite',
    title: 'Licence en Finance, Comptabilité & Audit',
    faculty: 'Faculté des Sciences Économiques et de Gestion',
    facultySlug: 'sciences-eco-gestion',
    badge: 'Banque & Finance',
    duration: '3 ans (6 semestres - 180 crédits)',
    bacRequired: 'Bac G2, C, D, B',
    description: 'Préparation complète aux normes comptables SYSCOHADA révisé, à la fiscalité ivoirienne, à l’analyse financière et aux opérations bancaires.',
    skills: ['Tenue de comptabilité générale & analytique', 'Fiscalité d’entreprise', 'Audit et contrôle interne'],
    careers: ['Comptable d’entreprise', 'Auditeur junior en cabinet', 'Gestionnaire de trésorerie', 'Agent bancaire'],
    camesAccredited: true,
  },
  {
    id: 'lic-communication-marketing',
    title: 'Licence en Communication, Publicité & Marketing',
    faculty: 'Faculté des Sciences Humaines et Sociales',
    facultySlug: 'sciences-humaines-sociales',
    badge: 'Médias & Stratégie',
    duration: '3 ans (6 semestres - 180 crédits)',
    bacRequired: 'Tout type de Baccalauréat',
    description: 'Formation polyvalente en stratégie de communication digitale, relations presse, branding, études marketing et médias sociaux.',
    skills: ['Stratégie de communication 360°', 'Community management & création de contenu', 'Relations publiques'],
    careers: ['Chargé de communication', 'Chef de publicité junior', 'Social Media Manager', 'Attaché de presse'],
    camesAccredited: true,
  },
  {
    id: 'lic-cinema-audiovisuel',
    title: 'Licence en Cinéma & Production Audiovisuelle',
    faculty: 'Faculté des Arts et des Lettres',
    facultySlug: 'arts-lettres',
    badge: 'Industries Créatives',
    duration: '3 ans (6 semestres - 180 crédits)',
    bacRequired: 'Tout type de Baccalauréat',
    description: 'Apprentissage pratique de l’écriture de scénario, prise de vue, montage vidéo, réalisation de documentaires et production audiovisuelle.',
    skills: ['Écriture de scénario', 'Cadrage, éclairage et prise de son', 'Montage & post-production (Premiere / DaVinci)'],
    careers: ['Réalisateur / Cadreur', 'Monteur audiovisuel', 'Assistant de production TV & cinéma'],
    camesAccredited: true,
  },
]

export default function LicencesPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all')
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const filteredLicences = selectedFaculty === 'all'
    ? licencesData
    : licencesData.filter((item) => item.facultySlug === selectedFaculty)

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Formations en Licence (Bac +3)"
        subtitle="Des cursus de premier cycle universitaire accrédités CAMES pour acquérir des compétences pratiques, théoriques et professionnelles recherchées sur le marché du travail."
        badge="1er Cycle Universitaire"
        breadcrumbs={[
          { label: 'Formations', href: '/formations' },
          { label: 'Licences' },
        ]}
        bgImage="/assets/amphi-1.jpg"
      />

      {/* Filter Tabs */}
      <section className="sticky top-20 z-20 bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Filter size={18} className="text-gray-400 shrink-0 mr-2" />
            <button
              onClick={() => setSelectedFaculty('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedFaculty === 'all'
                  ? 'bg-navy-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Toutes les filières ({licencesData.length})
            </button>

            <button
              onClick={() => setSelectedFaculty('sciences-technologies')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedFaculty === 'sciences-technologies'
                  ? 'bg-navy-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sciences & Tech
            </button>

            <button
              onClick={() => setSelectedFaculty('droit-science-politique')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedFaculty === 'droit-science-politique'
                  ? 'bg-navy-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Droit & Sc. Politique
            </button>

            <button
              onClick={() => setSelectedFaculty('sciences-eco-gestion')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedFaculty === 'sciences-eco-gestion'
                  ? 'bg-navy-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Économie & Gestion
            </button>

            <button
              onClick={() => setSelectedFaculty('sciences-humaines-sociales')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedFaculty === 'sciences-humaines-sociales'
                  ? 'bg-navy-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sciences Humaines
            </button>

            <button
              onClick={() => setSelectedFaculty('arts-lettres')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedFaculty === 'arts-lettres'
                  ? 'bg-navy-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Arts & Lettres
            </button>
          </div>
        </div>
      </section>

      {/* Grid of Licences */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredLicences.map((licence) => {
              const isExpanded = expandedCard === licence.id
              return (
                <div
                  key={licence.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gold-400 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-6 sm:p-8">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 bg-navy-50 text-navy-800 text-xs font-semibold rounded-full border border-navy-100">
                        {licence.badge}
                      </span>
                      {licence.camesAccredited && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          <Award size={13} />
                          Accrédité CAMES
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-navy-900 mb-2 font-display">
                      {licence.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 mb-4">
                      {licence.faculty}
                    </p>

                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {licence.description}
                    </p>

                    {/* Meta tags */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-gray-50 rounded-xl mb-6 text-xs text-gray-700">
                      <div className="flex items-center gap-2">
                        <Clock size={15} className="text-navy-900 shrink-0" />
                        <span><strong>Durée :</strong> {licence.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap size={15} className="text-gold-600 shrink-0" />
                        <span><strong>Profil :</strong> {licence.bacRequired}</span>
                      </div>
                    </div>

                    {/* Collapsible Details */}
                    {isExpanded && (
                      <div className="border-t border-gray-100 pt-6 space-y-6 animate-fadeIn">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-emerald-600" />
                            Compétences développées
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                            {licence.skills.map((skill, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-gold-500 font-bold">•</span>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-2">
                            <Briefcase size={16} className="text-navy-700" />
                            Débouchés professionnels
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {licence.careers.map((career, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 bg-gray-100 text-gray-800 text-xs rounded-lg font-medium"
                              >
                                {career}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(licence.id)}
                      className="text-xs font-semibold text-navy-900 hover:text-gold-600 flex items-center gap-1.5 transition-colors"
                    >
                      <span>{isExpanded ? 'Moins de détails' : 'Voir le programme complet'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <Link
                      to="/admissions"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      <span>Postuler</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
