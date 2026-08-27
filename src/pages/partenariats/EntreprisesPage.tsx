import { Link } from 'react-router-dom'
import {
  Building2,
  Briefcase,
  Users2,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Handshake,
  TrendingUp,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function EntreprisesPage() {
  const corporatePartners = [
    {
      name: 'NSIA Banque',
      sector: 'Banque & Assurances',
      logo: '/assets/partner-nsia-1.png',
      badge: 'Partenaire Majeur',
      desc: 'Groupe financier panafricain de premier plan. NSIA Banque accueille chaque année plusieurs dizaines de stagiaires de l’IUA en finance, comptabilité, gestion des risques et informatique.',
      actions: ['Stages pré-embauche', 'Bourses d’excellence pour les majors de promotion', 'Interventions de cadres dirigeants en Master'],
    },
    {
      name: 'Société Générale Côte d’Ivoire',
      sector: 'Secteur Bancaire & Marchés Financiers',
      logo: '/assets/partner-societe-generale.png',
      badge: 'Banque & Marchés',
      desc: 'Première banque de Côte d’Ivoire, partenaire clé pour l’insertion de nos diplômés en audit, finance de marché, conformité et transformation digitale.',
      actions: ['Recrutement direct via le Forum IUA', 'Parrainage d’ateliers pratiques bancaires', 'Accompagnement de projets tutorés'],
    },
    {
      name: 'Agence Emploi Jeunes (AEJ)',
      sector: 'Institution Publique de l’Emploi',
      logo: '/assets/partner-emploi-jeunes.png',
      badge: 'Insertion Institutionnelle',
      desc: 'Organisme national de promotion de l’emploi en Côte d’Ivoire. Convention active pour le placement de nos diplômés dans les programmes de stages d’apprentissage et de premier emploi.',
      actions: ['Ateliers d’employabilité', 'Financement de projets entrepreneuriaux', 'Accès prioritaire aux guichets d’emplois'],
    },
  ]

  const partnershipTypes = [
    {
      title: 'Accueil en Stage & Recrutement',
      desc: 'Diffusez vos offres de stages de fin d’études et d’emplois directement auprès de nos étudiants et bénéficiez d’une pré-sélection qualifiée par notre BAIP.',
      icon: Briefcase,
    },
    {
      title: 'Parrainage de Promotion & Masterclasses',
      desc: 'Associez l’image de votre entreprise à une promotion d’étudiants et faites intervenir vos experts métiers lors de conférences spécialisées.',
      icon: Users2,
    },
    {
      title: 'Projets de Recherche & Études de Cas Réelles',
      desc: 'Confiez des études de marché, des projets de développement informatique ou des audits juridiques à nos équipes étudiantes supervisées par nos enseignants-chercheurs.',
      icon: TrendingUp,
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Entreprises & Institutions Partenaires"
        subtitle="Un pont direct entre l'université et le monde économique pour garantir des opportunités de stages, d'alternance et d'embauche immédiate à nos étudiants."
        badge="Monde Professionnel"
        breadcrumbs={[
          { label: 'Partenariats', href: '/partenariats' },
          { label: 'Entreprises partenaires' },
        ]}
        bgImage="/assets/graduation-2.jpg"
      />

      {/* Featured partners */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Grandes Entreprises
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Des Leaders Économiques Engagés à Nos Côtés
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePartners.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:border-gold-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="h-16 w-32 p-2 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="px-3 py-1 bg-navy-50 text-navy-900 text-xs font-semibold rounded-full border border-navy-100">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 font-display mb-1">{p.name}</h3>
                  <p className="text-xs font-semibold text-gold-700 mb-4">{p.sector}</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">{p.desc}</p>

                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Axes de Coopération :</p>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {p.actions.map((act, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/insertion-professionnelle"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-navy-50 hover:bg-navy-900 hover:text-white text-navy-900 text-xs font-bold rounded-xl transition-colors"
                >
                  <span>Consulter le pôle insertion</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities for Companies */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Collaboration
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Comment Collaborer Avec l'IUA ?
            </h2>
            <p className="mt-3 text-gray-600 text-sm">
              Découvrez les formats de partenariat adaptés aux besoins en compétences de votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((t, idx) => {
              const IconComp = t.icon
              return (
                <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-md">
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 font-display mb-2">{t.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-xs rounded-xl shadow-lg transition-colors"
            >
              <Handshake size={16} />
              <span>Contactez notre Direction des Relations Entreprises</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
