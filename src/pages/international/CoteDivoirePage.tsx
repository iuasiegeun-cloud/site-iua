import { Link } from 'react-router-dom'
import {
  Sun,
  DollarSign,
  Utensils,
  ShieldCheck,
  MapPin,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Coins,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function CoteDivoirePage() {
  const budgetItems = [
    { item: 'Logement étudiant (Studio / Chambre aux II Plateaux)', cost: '80 000 - 150 000 FCFA (~120 - 230 €)' },
    { item: 'Restauration & Alimentation mensuelle', cost: '50 000 - 90 000 FCFA (~75 - 140 €)' },
    { item: 'Transports urbains (Bus, VTC, Taxis)', cost: '25 000 - 45 000 FCFA (~38 - 70 €)' },
    { item: 'Téléphonie & Forfait Internet 4G/Fibre', cost: '10 000 - 20 000 FCFA (~15 - 30 €)' },
    { item: 'Loisirs & Dépenses diverses', cost: '20 000 - 40 000 FCFA (~30 - 60 €)' },
  ]

  const practicalTips = [
    {
      title: 'Climat & Météo',
      desc: 'Climat tropical agréable tout au long de l’année avec une température moyenne de 27°C. Prévoyez des vêtements légers en coton et un parapluie pour la grande saison des pluies (mai à juillet).',
      icon: Sun,
    },
    {
      title: 'Monnaie & Moyens de Paiement',
      desc: 'La monnaie locale est le Franc CFA (XOF), avec une parité fixe avec l’Euro (1 € = 655,957 FCFA). Les paiements mobiles (Wave, Orange Money, MTN) sont acceptés partout pour les achats quotidiens.',
      icon: Coins,
    },
    {
      title: 'Gastronomie & Vie Locale',
      desc: 'Découvrez la richesse culinaire ivoirienne : l’Attiéké au poisson braisé, l’Alloco, le Kédjenou de poulet, le Garba et les fruits tropicaux frais. De nombreux restaurants et maquis modernes entourent le campus.',
      icon: Utensils,
    },
    {
      title: 'Sécurité & Vivre Ensemble',
      desc: 'Abidjan est une métropole cosmopolite et accueillante. Le quartier des II Plateaux où se situe l’IUA est l’un des plus calmes, résidentiels et sécurisés du district d’Abidjan.',
      icon: ShieldCheck,
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Vivre en Côte d'Ivoire & à Abidjan"
        subtitle="Découvrez le cadre de vie exceptionnel, le dynamisme culturel et l'hospitalité ivoirienne qui feront de vos années d'études à l'IUA un souvenir inoubliable."
        badge="Guide de Séjour"
        breadcrumbs={[
          { label: 'International', href: '/international' },
          { label: 'La Côte d’Ivoire' },
        ]}
        bgImage="/assets/amphi-3.jpg"
      />

      {/* Intro Abidjan */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Akwaba en Côte d'Ivoire
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-4">
              Abidjan, le Carrefour Économique et Universitaire de l'Afrique de l'Ouest
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Surnommée « La Perle des Lagunes », Abidjan est une métropole moderne, dynamique et chaleureuse. Capitale culturelle et financière francophone, la ville offre un écosystème propice aux opportunités professionnelles, aux stages et à l'épanouissement personnel.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Tips Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practicalTips.map((tip, idx) => {
              const IconComponent = tip.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:border-gold-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-md">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 font-display mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Monthly Budget Estimation */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Gestion de Budget
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Estimation du Coût de la Vie Étudiante à Abidjan
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Budget indicatif moyen mensuel pour un étudiant vivant aux II Plateaux / Cocody.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <div className="divide-y divide-gray-200">
              {budgetItems.map((item, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-navy-900">{item.item}</span>
                  <span className="text-xs sm:text-sm font-bold text-gold-700 bg-gold-50 px-3 py-1 rounded-lg border border-gold-200 self-start sm:self-auto">
                    {item.cost}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-navy-900 text-white p-6 rounded-2xl">
              <div>
                <p className="text-xs text-gray-300">Budget Mensuel Total Moyen Recommandé</p>
                <p className="text-xl md:text-2xl font-bold font-display text-gold-400">185 000 à 345 000 FCFA (~280 € à 530 €)</p>
              </div>
              <Link
                to="/international/logement"
                className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-bold rounded-xl transition-colors shrink-0"
              >
                Guide Logement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency & Useful Contacts */}
      <section className="py-12 bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Police Secours</p>
              <p className="text-xl font-bold text-gold-400 mt-1 font-display">170 ou 111</p>
            </div>
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Sapeurs-Pompiers Militaires (GSPM)</p>
              <p className="text-xl font-bold text-gold-400 mt-1 font-display">180</p>
            </div>
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">SAMU Abidjan</p>
              <p className="text-xl font-bold text-gold-400 mt-1 font-display">185</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
