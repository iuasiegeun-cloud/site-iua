import { Link } from 'react-router-dom'
import {
  Handshake,
  Globe2,
  Building2,
  Award,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react'
import PageHero from '../../components/PageHero'
import { partnerLogos } from '../../data'

export default function PartenariatsPage() {
  const hubs = [
    {
      title: 'Universités Partenaires Internationales',
      desc: 'Accords bilatéraux avec les universités françaises (Rennes 1, Lyon 3, Nantes, Champollion...) pour l’échange d’enseignants, de chercheurs et de doubles diplômes.',
      link: '/partenariats/universites',
      icon: Globe2,
      badge: 'Académique & Recherche',
    },
    {
      title: 'Entreprises & Institutions Partenaires',
      desc: 'Conventions avec les fleurons de l’économie (NSIA Banque, Société Générale, Agence Emploi Jeunes...) pour l’accueil en stage, l’alternance et l’embauche.',
      link: '/partenariats/entreprises',
      icon: Building2,
      badge: 'Monde Professionnel',
    },
    {
      title: 'Accréditations & Références CAMES',
      desc: 'Diplômes homologués au niveau panafricain par le CAMES et reconnus par le Ministère de l’Enseignement Supérieur et de la Recherche Scientifique (MESRS).',
      link: '/partenariats/accreditations',
      icon: Award,
      badge: 'Reconnaissance Officielle',
    },
    {
      title: 'Bureau d’Aide à l’Insertion Professionnelle (BAIP)',
      desc: 'Coaching carrière, ateliers d’optimisation de CV, simulation d’entretiens d’embauche et organisation du Forum Annuel de Recrutement IUA.',
      link: '/insertion-professionnelle',
      icon: Briefcase,
      badge: 'Accompagnement Carrière',
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Partenariats & Réseau d'Excellence"
        subtitle="Un écosystème puissant d'universités internationales, de groupes bancaires, industriels et d'institutions d'accréditation au service de votre avenir."
        badge="Réseau & Alliances"
        breadcrumbs={[{ label: 'Partenariats' }]}
        bgImage="/assets/graduation-1.jpg"
      />

      {/* Overview Hubs */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hubs.map((hub, idx) => {
              const IconComp = hub.icon
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
                        {hub.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 font-display mb-3">
                      {hub.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {hub.desc}
                    </p>
                  </div>

                  <Link
                    to={hub.link}
                    className="inline-flex items-center justify-between w-full p-3 bg-gray-50 hover:bg-navy-900 hover:text-white rounded-xl text-xs font-bold text-navy-900 transition-colors"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partner Logos Grid */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Confiance Mutuelle
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Ils Nous Font Confiance
            </h2>
            <p className="mt-3 text-gray-600 text-sm">
              Universités prestigieuses, banques, ministères et institutions partenaires de l'IUA.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
            {partnerLogos.map((logo, idx) => (
              <div
                key={idx}
                className="h-24 p-4 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all group"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner banner */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Handshake size={40} className="text-gold-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold font-display mb-3">
            Devenir Entreprise ou Université Partenaire
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Vous souhaitez proposer des stages, co-développer des programmes pédagogiques ou recruter nos futurs diplômés ? Contactez notre Direction des Partenariats.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-xl shadow-lg transition-colors"
          >
            <span>Proposer une convention de partenariat</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
