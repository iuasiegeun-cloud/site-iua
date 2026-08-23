import { Link } from 'react-router-dom'
import {
  Globe2,
  GraduationCap,
  Award,
  CheckCircle2,
  Building,
  ArrowRight,
  BookOpen,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function UniversitesPage() {
  const universities = [
    {
      name: 'Université de Rennes 1',
      city: 'Rennes, France',
      logo: '/assets/logo-rennes1.png',
      badge: 'Sciences, Droit & Gestion',
      desc: 'Pôle d’excellence académique et de recherche réputé en Europe. La convention avec l’IUA permet des semestres d’études en Licence et Master avec reconnaissance mutuelle des crédits.',
      programs: ['Master en Informatique & Sécurité des Systèmes', 'Licence & Master Économie-Finance', 'Échanges d’enseignants-chercheurs'],
    },
    {
      name: 'Université Jean Moulin Lyon 3',
      city: 'Lyon, France',
      logo: '/assets/partner-lyon3-1.png',
      badge: 'Droit & Management',
      desc: 'Une des plus grandes facultés de Droit de France. Ce partenariat offre à nos étudiants juristes et managers des passerelles privilégiées vers les Masters d’excellence lyonnais.',
      programs: ['Master Droit des Affaires & International', 'Master Management International', 'Séminaires conjoints de droit comparé'],
    },
    {
      name: 'Nantes Université',
      city: 'Nantes, France',
      logo: '/assets/partner-nantes.png',
      badge: 'Finance & Ingénierie',
      desc: 'Université pluridisciplinaire innovante. Les étudiants de l’IUA bénéficient de doubles cursus en sciences économiques, gestion des risques et ingénierie de données.',
      programs: ['Licence & Master Banque & Marchés', 'Programmes de recherche en économie du développement'],
    },
    {
      name: 'Institut National Universitaire Champollion',
      city: 'Albi / Toulouse, France',
      logo: '/assets/partner-champollion.png',
      badge: 'Technologies & Sciences Sociales',
      desc: 'Établissement public novateur favorisant la proximité pédagogique et l’insertion. Coopération active dans le domaine des sciences appliquées et des lettres.',
      programs: ['Licence Informatique appliquée', 'Échanges culturels et immersions académiques'],
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Universités Partenaires Internationales"
        subtitle="Découvrez nos accords de coopération académique avec des universités françaises de premier plan pour des cursus d'excellence sans frontières."
        badge="Coopération Académique"
        breadcrumbs={[
          { label: 'Partenariats', href: '/partenariats' },
          { label: 'Universités partenaires' },
        ]}
        bgImage="/assets/carte-france.png"
      />

      {/* Map visual card */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                Réseau Européen
              </span>
              <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-4">
                Une Passerelle Privilégiée Vers la France & l'Europe
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Depuis plus de 15 ans, l'Institut Universitaire d'Abidjan a tissé des liens de confiance solides avec les universités publiques françaises. Ces conventions permettent à nos étudiants de poursuivre une partie de leurs études en France tout en validant leurs diplômes d'origine.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1 bg-navy-50 text-navy-900 rounded-full border border-navy-100">Mobilité Semestrielle</span>
                <span className="px-3 py-1 bg-gold-50 text-gold-900 rounded-full border border-gold-200">Double Diplomation</span>
                <span className="px-3 py-1 bg-navy-50 text-navy-900 rounded-full border border-navy-100">Co-direction de thèses</span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="p-4 bg-navy-900 rounded-3xl border border-navy-800 shadow-xl max-w-xs w-full">
                <img
                  src="/assets/carte-france.png"
                  alt="Carte de France des partenaires"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University detail cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {universities.map((uni, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:border-gold-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="h-16 w-32 p-2 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center">
                      <img
                        src={uni.logo}
                        alt={uni.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="px-3 py-1 bg-navy-50 text-navy-900 text-xs font-semibold rounded-full border border-navy-100">
                      {uni.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 font-display mb-1">{uni.name}</h3>
                  <p className="text-xs font-semibold text-gold-700 mb-4">{uni.city}</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">{uni.desc}</p>

                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Conventions & Cursus Partagés :</p>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {uni.programs.map((prog, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                          <span>{prog}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/international/mobilite"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  <span>Candidater au programme de mobilité</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
