import { Link } from 'react-router-dom'
import {
  Globe,
  Plane,
  Compass,
  Home,
  Bus,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users2,
  Award,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function InternationalPage() {
  const sections = [
    {
      title: 'Programme de Mobilité Internationale',
      desc: 'Poursuivez un semestre ou un cycle complet dans nos universités partenaires en France (Rennes 1, Lyon 3, Nantes, Champollion) avec double diplomation.',
      link: '/international/mobilite',
      icon: Plane,
      badge: 'Étudier à l’étranger',
    },
    {
      title: 'Accueil des Étudiants Internationaux',
      desc: 'Guide pas-à-pas pour les étudiants venant d’Afrique et du monde entier : visa d’études, accueil personnalisé à l’aéroport, intégration sur le campus.',
      link: '/international/etudiants',
      icon: Users2,
      badge: 'Venir à l’IUA',
    },
    {
      title: 'Découvrir la Côte d’Ivoire & Abidjan',
      desc: 'Guide pratique pour s’installer : climat tropical, dynamisme économique, coût de la vie, richesse culturelle et hospitalité légendaire.',
      link: '/international/cote-divoire',
      icon: Compass,
      badge: 'Vie Pratique',
    },
    {
      title: 'Guide du Logement Étudiant',
      desc: 'Solutions de résidences universitaires partenaires, colocations et appartements sécurisés à proximité du campus aux Deux Plateaux.',
      link: '/international/logement',
      icon: Home,
      badge: 'Se Loger',
    },
    {
      title: 'Transports & Déplacements',
      desc: 'Comment circuler facilement à Abidjan : bus SOTRA, VTC (Yango, Uber, Heetch), taxis compteurs et lignes rapides.',
      link: '/international/transport',
      icon: Bus,
      badge: 'Mobilité Urbaine',
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="L'IUA à l'International"
        subtitle="Une ouverture sur le monde académique mondial, des accords bilatéraux prestigieux et un accueil d'excellence pour les étudiants de plus de 20 nationalités."
        badge="Ouverture Mondiale"
        breadcrumbs={[{ label: 'International' }]}
        bgImage="/assets/graduation-1.jpg"
      />

      {/* Intro Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-navy-50">
              <p className="text-3xl md:text-4xl font-bold text-navy-900 font-display">20+</p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Nationalités représentées</p>
            </div>
            <div className="p-6 rounded-2xl bg-gold-50">
              <p className="text-3xl md:text-4xl font-bold text-gold-700 font-display">10+</p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Universités étrangères partenaires</p>
            </div>
            <div className="p-6 rounded-2xl bg-navy-50">
              <p className="text-3xl md:text-4xl font-bold text-navy-900 font-display">19</p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Pays de l'espace CAMES</p>
            </div>
            <div className="p-6 rounded-2xl bg-gold-50">
              <p className="text-3xl md:text-4xl font-bold text-gold-700 font-display">100%</p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Accompagnement démarches visa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Subpages */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Hub International
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Explorez nos Services & Guides Internationaux
            </h2>
            <p className="mt-3 text-gray-600 text-sm">
              Que vous souhaitiez partir étudier à l'étranger ou venir étudier en Côte d'Ivoire, nous facilitons votre mobilité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((sec, idx) => {
              const IconComp = sec.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:border-gold-400 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-md">
                        <IconComp size={28} />
                      </div>
                      <span className="px-3 py-1 bg-navy-50 text-navy-900 text-xs font-semibold rounded-full border border-navy-100">
                        {sec.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 mb-3 font-display">
                      {sec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {sec.desc}
                    </p>
                  </div>

                  <Link
                    to={sec.link}
                    className="inline-flex items-center justify-between w-full p-3 bg-gray-50 hover:bg-navy-900 hover:text-white rounded-xl text-xs font-bold text-navy-900 transition-colors"
                  >
                    <span>Consulter le dossier</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Map France banner */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-400 font-bold text-xs uppercase tracking-widest">
                Partenariats Privilégiés
              </span>
              <h2 className="text-3xl font-bold font-display mt-2 mb-4">
                Votre Passerelle Directe vers les Universités Françaises
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Grâce aux conventions cadres signées entre l'IUA et les universités françaises, nos étudiants accèdent à des semestres d'études délocalisés et à des programmes de doubles diplômes reconnus en Europe et à l'international.
              </p>

              <div className="space-y-3 text-xs text-gray-200 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span>Université Rennes 1 (Sciences, Droit, Gestion)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span>Université Jean Moulin Lyon 3 (Droit des Affaires, Management)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span>Nantes Université (Économie, Finance, Technologies)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span>Institut National Universitaire Champollion (Albi/Toulouse)</span>
                </div>
              </div>

              <Link
                to="/partenariats/universites"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-xl shadow-lg transition-colors"
              >
                <span>Découvrir toutes les universités partenaires</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="bg-navy-800/80 p-6 rounded-3xl border border-navy-700 max-w-md w-full">
                <img
                  src="/assets/carte-france.png"
                  alt="Carte des universités partenaires de l'IUA en France"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
