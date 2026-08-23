import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Clock,
  Award,
  Globe,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

interface MasterProgram {
  id: string
  title: string
  faculty: string
  badge: string
  duration: string
  mode: string
  description: string
  doubleDegree?: string
  camesAccredited: boolean
  targetRoles: string[]
  modules: string[]
}

export const mastersData: MasterProgram[] = [
  {
    id: 'mst-big-data-ia',
    title: 'Master Big Data & Intelligence Artificielle (IA)',
    faculty: 'Faculté des Sciences et Technologies',
    badge: 'Data Science & Intelligence Artificielle',
    duration: '2 ans (4 semestres - 120 crédits)',
    mode: 'Présentiel & Projets de recherche',
    description: 'Formation d’élite axée sur le machine learning, le deep learning, le traitement massif de données (Big Data), l’analyse prédictive et la vision par ordinateur.',
    doubleDegree: 'Partenariats internationaux & programmes conjoints',
    camesAccredited: true,
    targetRoles: ['Data Scientist / Ingénieur IA', 'Architecte Big Data / Data Engineer', 'Consultant Business Intelligence & Analytics', 'Chef de projet IA'],
    modules: ['Machine Learning & Deep Learning avancé', 'Architectures distribuées & Big Data (Spark, Hadoop, Kafka)', 'Traitement automatique du langage naturel (NLP) & Computer Vision', 'Éthique des algorithmes & gouvernance de la donnée'],
  },
  {
    id: 'mst-genie-informatique',
    title: 'Master en Génie Informatique',
    faculty: 'Faculté des Sciences et Technologies',
    badge: 'Ingénierie Logicielle & Systèmes',
    duration: '2 ans (4 semestres - 120 crédits)',
    mode: 'Présentiel & Alternance',
    description: 'Formation de haut niveau formant des ingénieurs concepteurs de solutions logicielles complexes, d’architectures distribuées, de cloud computing et d’infrastructures scalables.',
    doubleDegree: 'Double diplôme possible avec nos partenaires académiques',
    camesAccredited: true,
    targetRoles: ['Architecte Logiciel / Lead Tech', 'Ingénieur Systèmes Distribués & Cloud', 'Directeur Technique (CTO)', 'Chef de projet R&D Logiciel'],
    modules: ['Architectures microservices & Cloud Native (Kubernetes, Docker)', 'DevOps, CI/CD et observabilité système', 'Ingénierie logicielle avancée & Design Patterns', 'Systèmes distribués haute performance'],
  },
  {
    id: 'mst-miage',
    title: 'Master MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)',
    faculty: 'Faculté des Sciences et Technologies',
    badge: 'Management des SI & Transformation Digitale',
    duration: '2 ans (4 semestres - 120 crédits)',
    mode: 'Présentiel & FOAD',
    description: 'Double compétence d’excellence formant des cadres dirigeants capables de piloter la stratégie des systèmes d’information, la gouvernance IT et la digitalisation des grandes organisations.',
    doubleDegree: 'Coopération avec des universités européennes partenaires',
    camesAccredited: true,
    targetRoles: ['Directeur des Systèmes d’Information (DSI)', 'Consultant ERP & Systèmes d’Information', 'Manager de la Transformation Digitale', 'Product Owner / Chef de Projet SI'],
    modules: ['Gouvernance et audit des SI (COBIT, ITIL)', 'Intégration d’ERP & progiciels de gestion intégrés', 'Stratégie numérique et management du changement', 'Business Intelligence & tableaux de bord décisionnels'],
  },
  {
    id: 'mst-cybersecurite',
    title: 'Master en Cybersécurité & Sécurité des Systèmes d’Information',
    faculty: 'Faculté des Sciences et Technologies',
    badge: 'Cybersécurité Offensive & Défensive',
    duration: '2 ans (4 semestres - 120 crédits)',
    mode: 'Présentiel & Laboratoire Cyber',
    description: 'Programme de référence pour maîtriser la défense des infrastructures critiques, l’ethical hacking, les tests d’intrusion, la gestion de crise cyber et la conformité aux normes internationales.',
    doubleDegree: 'Double diplomation avec nos universités européennes partenaires',
    camesAccredited: true,
    targetRoles: ['RSSI (Responsable de la Sécurité des SI)', 'Expert Cybersécurité / Pentester', 'Analyste SOC / Ingénieur détection d’incidents', 'Consultant conformité cyber & audit ISO 27001'],
    modules: ['Ethical Hacking, Tests d’intrusion & Sécurité applicative', 'Forensique numérique, SOC & Réponse aux incidents', 'Cryptographie appliquée & sécurité des architectures Cloud', 'Gouvernance, analyse de risques (EBIOS) & ISO 27001'],
  },
  {
    id: 'mst-droit-affaires',
    title: 'Master en Droit des Affaires & Fiscalité des Entreprises',
    faculty: 'Faculté de Droit et Science Politique',
    badge: 'Droit OHADA & International',
    duration: '2 ans (4 semestres - 120 crédits)',
    mode: 'Présentiel & Cours du soir',
    description: 'Spécialisation de haut niveau en droit des sociétés commerciales, ingénierie fiscale, contrats internationaux, fusions-acquisitions et contentieux arbitral.',
    doubleDegree: 'Accords avec l’Université Jean Moulin Lyon 3',
    camesAccredited: true,
    targetRoles: ['Directeur Juridique & Fiscal', 'Avocat d’affaires', 'Fiscaliste d’entreprise', 'Juriste en banque / assurances'],
    modules: ['Droit approfondi des sociétés OHADA', 'Fiscalité des groupes et internationale', 'Droit bancaire & instruments financiers', 'Techniques de négociation et arbitrage'],
  },
  {
    id: 'mst-audit-controle',
    title: 'Master en Audit, Contrôle de Gestion & Finance',
    faculty: 'Faculté des Sciences Économiques et de Gestion',
    badge: 'Finance & Stratégie',
    duration: '2 ans (4 semestres - 120 crédits)',
    mode: 'Présentiel & FOAD',
    description: 'Formation d’élite préparant à l’évaluation financière, au pilotage de la performance, à la consolidation des comptes de groupes et à l’audit légal.',
    doubleDegree: 'Partenariat académique Université Rennes 1',
    camesAccredited: true,
    targetRoles: ['Directeur Administratif et Financier (DAF)', 'Auditeur Senior en cabinet Big 4', 'Contrôleur de Gestion Groupe', 'Consultant financier'],
    modules: ['Normes IFRS et SYSCOHADA consolidé', 'Contrôle de gestion & tableaux de bord prédictifs', 'Audit financier et commissariat aux comptes', 'Évaluation d’entreprises & Private Equity'],
  },
  {
    id: 'mst-banque-marches',
    title: 'Master en Banque, Marchés Financiers & Assurances',
    faculty: 'Faculté des Sciences Économiques et de Gestion',
    badge: 'Marchés Financiers BRVM',
    duration: '2 ans (4 semestres - 120 crédits)',
    mode: 'Présentiel & Séminaires professionnels',
    description: 'Compréhension approfondie des mécanismes de la BRVM, de la gestion d’actifs, de l’analyse des risques bancaires (Bâle II / Bâle III) et de l’ingénierie financière.',
    camesAccredited: true,
    targetRoles: ['Gestionnaire de portefeuille / Trader', 'Analyste Risques de crédit', 'Conseiller clientèle grands comptes', 'Responsable conformité bancaire'],
    modules: ['Gestion de trésorerie & dérivés financiers', 'Réglementation bancaire UEMOA', 'Analyse quantitative et modélisation', 'Fintech et finance digitale'],
  },
  {
    id: 'mst-comm-digitale',
    title: 'Master en Communication Digitale & Stratégies d’Influence',
    faculty: 'Faculté des Sciences Humaines et Sociales',
    badge: 'Communication & Médias',
    duration: '2 ans (4 semestres - 120 crédits)',
    mode: 'Présentiel & Ateliers immersifs',
    description: 'Maîtrise du positionnement de marque, de la communication de crise, de l’influence digitale, du brand journalism et de la réputation des organisations.',
    camesAccredited: true,
    targetRoles: ['Directeur de la Communication (DIRCOM)', 'Chef de projet stratégie de marque', 'Consultant en relations publiques et e-réputation', 'Directeur d’agence de pub'],
    modules: ['Communication de crise et relations médias', 'Marketing d’influence et algorithmes', 'Design thinking & storytelling', 'Éthique des médias et droit du numérique'],
  },
  {
    id: 'mst-management-projets',
    title: 'Master en Management de Projets & Développement Durable',
    faculty: 'Faculté des Sciences Économiques et de Gestion',
    badge: 'Management & RSE',
    duration: '2 ans (4 semestres - 120 crédits)',
    mode: 'Présentiel & Formation Continue',
    description: 'Pilotage de grands programmes d’investissements publics et privés, méthodologies PMI/PRINCE2, transition énergétique et conformité critères ESG.',
    camesAccredited: true,
    targetRoles: ['Directeur de Projets / PMO', 'Chef de projet bailleurs internationaux (BAD, BM)', 'Consultant en stratégie RSE', 'Manager d’opérations'],
    modules: ['Méthodologies PMP & Agile Scrum', 'Montage financier de projets (PPP)', 'Études d’impact environnemental et social', 'Leadership et négociation complexe'],
  },
]

export default function MastersPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Formations en Master (Bac +5)"
        subtitle="Développez une expertise stratégique et devenez un leader reconnu grâce à nos programmes de Master accrédités CAMES et connectés au monde de l'entreprise."
        badge="2nd Cycle Universitaire & Double Diplomation"
        breadcrumbs={[
          { label: 'Formations', href: '/formations' },
          { label: 'Masters' },
        ]}
        bgImage="/assets/graduation-2.jpg"
      />

      {/* Feature banner */}
      <section className="bg-navy-900 text-white py-8 border-b border-navy-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Sparkles className="text-gold-400 shrink-0" size={24} />
              <div>
                <p className="font-bold text-sm">Insertion Rapide</p>
                <p className="text-xs text-gray-300">92% de nos diplômés en poste dans les 6 mois</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="text-gold-400 shrink-0" size={24} />
              <div>
                <p className="font-bold text-sm">Partenariats Universitaires Européens</p>
                <p className="text-xs text-gray-300">Possibilité de double diplomation en France</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="text-gold-400 shrink-0" size={24} />
              <div>
                <p className="font-bold text-sm">Accréditations CAMES</p>
                <p className="text-xs text-gray-300">Diplômes reconnus dans 19 pays d'Afrique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* List of Masters */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mastersData.map((master) => {
              const isExpanded = expandedCard === master.id
              return (
                <div
                  key={master.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gold-400 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-6 sm:p-8">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 bg-navy-50 text-navy-800 text-xs font-semibold rounded-full border border-navy-100">
                        {master.badge}
                      </span>
                      {master.camesAccredited && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          <Award size={13} />
                          Accrédité CAMES
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-navy-900 mb-2 font-display">
                      {master.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 mb-4">
                      {master.faculty}
                    </p>

                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {master.description}
                    </p>

                    {/* Double degree alert if present */}
                    {master.doubleDegree && (
                      <div className="p-3 bg-gold-50 border border-gold-200 rounded-xl mb-6 flex items-center gap-2.5 text-xs text-gold-900 font-medium">
                        <Globe size={16} className="text-gold-600 shrink-0" />
                        <span>{master.doubleDegree}</span>
                      </div>
                    )}

                    {/* Info pill */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-gray-50 rounded-xl mb-6 text-xs text-gray-700">
                      <div className="flex items-center gap-2">
                        <Clock size={15} className="text-navy-900 shrink-0" />
                        <span><strong>Durée :</strong> {master.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap size={15} className="text-gold-600 shrink-0" />
                        <span><strong>Modalités :</strong> {master.mode}</span>
                      </div>
                    </div>

                    {/* Collapsible details */}
                    {isExpanded && (
                      <div className="border-t border-gray-100 pt-6 space-y-6 animate-fadeIn">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-2">
                            <Sparkles size={16} className="text-gold-500" />
                            Modules clés & enseignements
                          </h4>
                          <ul className="grid grid-cols-1 gap-2 text-xs text-gray-600">
                            {master.modules.map((mod, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-gold-500 font-bold">•</span>
                                {mod}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-2">
                            <Briefcase size={16} className="text-navy-700" />
                            Postes et carrières cibles
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {master.targetRoles.map((role, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 bg-navy-50 text-navy-900 text-xs rounded-lg font-medium border border-navy-100"
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer Card */}
                  <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(master.id)}
                      className="text-xs font-semibold text-navy-900 hover:text-gold-600 flex items-center gap-1.5 transition-colors"
                    >
                      <span>{isExpanded ? 'Moins de détails' : 'Modules & débouchés'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <Link
                      to="/admissions"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      <span>Candidater</span>
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
