import { Link } from 'react-router-dom'
import {
  Users,
  Trophy,
  Palette,
  HeartHandshake,
  BookOpen,
  Calendar,
  Sparkles,
  ArrowRight,
  Shield,
  Activity,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function VieCampusPage() {
  const campusActivities = [
    {
      title: 'Bureau des Étudiants (BDE - IUA)',
      desc: 'Le cœur battant de la vie associative. Organisation des journées d’intégration, soirées de gala, tournois sportifs et sorties culturelles.',
      icon: Users,
      badge: 'Vie Associative',
    },
    {
      title: 'Clubs Scientifiques & Tech Hub',
      desc: 'Club Informatique (Hackathons, coding challenges, robotique), Club Droit (concours de plaidoirie et procès fictifs), Club Finance & BRVM.',
      icon: Trophy,
      badge: 'Excellence & Projets',
    },
    {
      title: 'Arts, Théâtre & Culture',
      desc: 'Troupe théâtrale de l’IUA, club de débat oratoire, ciné-club et ateliers de création audiovisuelle pour stimuler l’esprit créatif.',
      icon: Palette,
      badge: 'Culture & Créativité',
    },
    {
      title: 'Sports & Bien-être',
      desc: 'Équipes de football, basketball, volley-ball et fitness. Participation aux compétitions universitaires nationales (OISSU).',
      icon: Activity,
      badge: 'Sport Universitaire',
    },
    {
      title: 'Engagement Social & Humanitaire',
      desc: 'Actions caritatives, campagnes de don du sang, mentorat de lycéens et sensibilisation environnementale menées par les étudiants.',
      icon: HeartHandshake,
      badge: 'Citoyenneté & RSE',
    },
    {
      title: 'Journées Carrières & Forums Entreprises',
      desc: 'Rencontres annuelles avec plus de 40 directeurs des ressources humaines et dirigeants d’entreprises pour décrocher stages et premiers emplois.',
      icon: Sparkles,
      badge: 'Insertion Professionnelle',
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Vie de Campus à l'IUA"
        subtitle="Un cadre d'épanouissement intellectuel, associatif et sportif stimulant pour développer vos compétences humaines (soft skills) et construire votre réseau."
        badge="Expérience Étudiante"
        breadcrumbs={[{ label: 'Vie de campus' }]}
        bgImage="/assets/amphi-3.jpg"
      />

      {/* Intro */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Un Campus Vivant & Dynamique
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-4">
              Bien Plus Qu'une Université, Une Communauté
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              À l'Institut Universitaire d'Abidjan, nous croyons qu'une formation réussie allie exigence académique et riche expérience humaine. Nos infrastructures modernes et notre tissu associatif vous permettent d'exprimer vos talents et votre leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusActivities.map((act, idx) => {
              const IconComp = act.icon
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
                        {act.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-900 font-display mb-2">
                      {act.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {act.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Campus Links Banner */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-3xl bg-navy-800/70 border border-navy-700 flex flex-col justify-between">
              <div>
                <BookOpen size={30} className="text-gold-400 mx-auto mb-3" />
                <h3 className="text-base font-bold font-display mb-1.5">Bibliothèques IUA</h3>
                <p className="text-xs text-gray-300 mb-4">Bibliothèque physique climatisée et portail numérique ScholarVox/Dalloz 24h/24.</p>
              </div>
              <Link to="/bibliotheque" className="text-xs font-bold text-gold-400 hover:text-gold-300 inline-flex items-center justify-center gap-1">
                <span>Découvrir la bibliothèque</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-navy-800/70 border border-navy-700 flex flex-col justify-between">
              <div>
                <Sparkles size={30} className="text-gold-400 mx-auto mb-3" />
                <h3 className="text-base font-bold font-display mb-1.5">Ressources & E-Learning</h3>
                <p className="text-xs text-gray-300 mb-4">Accédez aux plateformes FOAD, annales et formulaires administratifs.</p>
              </div>
              <Link to="/ressources" className="text-xs font-bold text-gold-400 hover:text-gold-300 inline-flex items-center justify-center gap-1">
                <span>Accéder aux ressources</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-navy-800/70 border border-navy-700 flex flex-col justify-between">
              <div>
                <Trophy size={30} className="text-gold-400 mx-auto mb-3" />
                <h3 className="text-base font-bold font-display mb-1.5">Témoignages Alumni</h3>
                <p className="text-xs text-gray-300 mb-4">Découvrez les parcours inspirants de nos diplômés en Côte d'Ivoire et à l'international.</p>
              </div>
              <Link to="/temoignages" className="text-xs font-bold text-gold-400 hover:text-gold-300 inline-flex items-center justify-center gap-1">
                <span>Lire les témoignages</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-navy-800/70 border border-navy-700 flex flex-col justify-between">
              <div>
                <Calendar size={30} className="text-gold-400 mx-auto mb-3" />
                <h3 className="text-base font-bold font-display mb-1.5">Guide de l'Étudiant</h3>
                <p className="text-xs text-gray-300 mb-4">Règlement intérieur, examens LMD, chartes et démarches sur le campus.</p>
              </div>
              <Link to="/guide-etudiant" className="text-xs font-bold text-gold-400 hover:text-gold-300 inline-flex items-center justify-center gap-1">
                <span>Consulter le guide</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
