import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  BookOpen,
  Award,
  ArrowRight,
  CheckCircle2,
  Users,
  Search,
  Monitor,
  Building,
  Scale,
  DollarSign,
  Languages,
} from 'lucide-react'
import PageHero from '../../components/PageHero'
import { faculties } from '../../data'

const facultyIcons: Record<string, typeof Monitor> = {
  'sciences-technologies': Monitor,
  'droit-science-politique': Scale,
  'sciences-eco-gestion': DollarSign,
  'sciences-humaines-sociales': Users,
  'arts-lettres': Languages,
}

export default function FormationsPage() {
  const [selectedCycle, setSelectedCycle] = useState<'all' | 'licence' | 'master' | 'foad'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const cycles = [
    {
      id: 'licence',
      title: 'Cycle Licence (Bac +3)',
      credits: '180 crédits ECTS / CAMES',
      desc: 'Formations initiales professionnalisantes et fondamentales en 6 semestres avec stage pratique obligatoire en 3ème année.',
      link: '/formations/licences',
      count: '15+ filières',
    },
    {
      id: 'master',
      title: 'Cycle Master (Bac +5)',
      credits: '120 crédits ECTS / CAMES',
      desc: 'Programmes de spécialisation et de recherche de haut niveau pour former des cadres supérieurs, managers et experts sectoriels.',
      link: '/formations/masters',
      count: '12+ spécialités',
    },
    {
      id: 'foad',
      title: 'Formation Ouverte à Distance (FOAD)',
      credits: 'Même reconnaissance académique',
      desc: 'Dispositif e-learning souple et interactif pour étudiants et professionnels en activité avec plateformes numériques dédiées.',
      link: '/connexion',
      count: '100% en ligne',
    },
  ]

  const filteredFaculties = faculties.filter(
    (f) =>
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.desc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Nos Offres de Formations d'Excellence"
        subtitle="Un cursus universitaire complet, axé sur l'employabilité, la rigueur académique et l'ouverture internationale, homologué par le CAMES et le MESRS."
        badge="Offre Académique 2026-2027"
        breadcrumbs={[{ label: 'Formations' }]}
        bgImage="/assets/amphi-2.jpg"
      />

      {/* Presentation Bar */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-navy-50 border border-navy-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                <Award size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-navy-900">Accréditation CAMES</h4>
                <p className="text-sm text-gray-600">Reconnaissance dans 19 pays d'Afrique francophone</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gold-50 border border-gold-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500 text-white flex items-center justify-center shrink-0">
                <GraduationCap size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-navy-900">Évaluation MESRS</h4>
                <p className="text-sm text-gray-600">Mention Bien (15,88/20) délivrée par le Ministère</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-navy-50 border border-navy-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                <BookOpen size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-navy-900">Système LMD</h4>
                <p className="text-sm text-gray-600">Normes internationales Licence - Master - Doctorat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cycles Académiques */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy-900 font-display">
              Nos Paliers Universitaires
            </h2>
            <p className="mt-3 text-gray-600 text-base">
              Que vous soyez titulaire du Baccalauréat ou diplômé de l'enseignement supérieur, l'IUA propose des filières adaptées à vos ambitions professionnelles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cycles.map((cycle) => (
              <div
                key={cycle.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-gold-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 bg-navy-100 text-navy-800 text-xs font-semibold rounded-full mb-4">
                    {cycle.count}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{cycle.title}</h3>
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-wide mb-4">
                    {cycle.credits}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{cycle.desc}</p>
                </div>

                <Link
                  to={cycle.link}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-navy-900 text-white hover:bg-gold-500 hover:text-navy-950 font-medium text-sm rounded-xl transition-colors"
                >
                  <span>Explorer les programmes</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les 5 Facultés */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                Structure Pédagogique
              </span>
              <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
                Nos 05 Facultés Pluridisciplinaires
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher une faculté..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculties.map((faculty) => {
              const IconComponent = facultyIcons[faculty.slug] || Building
              return (
                <div
                  key={faculty.slug}
                  className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-navy-900 hover:text-white transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-gold-500 text-navy-900 group-hover:text-navy-950 flex items-center justify-center mb-5 shadow-sm transition-colors">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-white mb-2 font-display">
                      {faculty.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed mb-6">
                      {faculty.desc}
                    </p>
                  </div>

                  <Link
                    to={`/facultes/${faculty.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-gold-400 group-hover:translate-x-1 transition-all"
                  >
                    <span>Voir les départements & filières</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Inscription / Admissions */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-display">
            Prêt à rejoindre l'Institut Universitaire d'Abidjan ?
          </h2>
          <p className="mt-4 text-gray-300 text-base max-w-2xl mx-auto">
            Consultez le guide des admissions, les pièces requises et le barème des frais de scolarité pour l'année académique 2026-2027.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="px-6 py-3.5 bg-gold-500 text-navy-950 hover:bg-gold-400 font-bold rounded-xl shadow-lg transition-colors"
            >
              Conditions & Coûts d'Admission
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-navy-800 border border-navy-700 hover:bg-navy-700 text-white font-semibold rounded-xl transition-colors"
            >
              Contacter le Secrétariat
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
