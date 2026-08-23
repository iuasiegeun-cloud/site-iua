import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  Building,
  Key,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Zap,
  Droplet,
  Info,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function LogementPage() {
  const [selectedType, setSelectedType] = useState<string>('studio')

  const housingOptions = [
    {
      id: 'studio',
      title: 'Studio Meublé Privatif',
      price: '100 000 - 160 000 FCFA / mois',
      surface: '20 à 35 m²',
      desc: 'Idéal pour une totale autonomie. Comprend une pièce principale avec lit, bureau, kitchenette équipée, salle d’eau privée et climatisation/brasseur d’air.',
      advantages: ['Indépendance totale', 'Proximité immédiate du campus (5 à 15 min à pied)', 'Sécurité 24h/24'],
    },
    {
      id: 'colocation',
      title: 'Colocation en Appartement 2 ou 3 Pièces',
      price: '70 000 - 110 000 FCFA / mois par étudiant',
      surface: '60 à 90 m²',
      desc: 'Partagez un appartement meublé spacieux avec d’autres étudiants de l’IUA. Chambre individuelle avec salon, cuisine et balcon partagés.',
      advantages: ['Économies sur les charges et le loyer', 'Vie sociale enrichissante', 'Grands espaces communs'],
    },
    {
      id: 'chambre',
      title: 'Chambre en Résidence Universitaire Partenaire',
      price: '60 000 - 90 000 FCFA / mois',
      surface: '15 à 20 m²',
      desc: 'Chambre individuelle au sein d’une résidence conventionnée par l’IUA avec conciergerie, gardiennage et espaces d’études communs.',
      advantages: ['Ambiance studieuse garantie', 'Gestionnaire sur place', 'WiFi haut débit inclus'],
    },
  ]

  const recommendedNeighborhoods = [
    {
      name: 'II Plateaux — 7ème Tranche / Cascades',
      distance: '0 à 5 minutes (À pied)',
      badge: 'Quartier du Campus',
      desc: 'Quartier hautement résidentiel, calme et verdoyant où se situe le campus principal de l’IUA. Commerces, supermarchés et pharmacies à proximité.',
    },
    {
      name: 'II Plateaux — Vallon / Boulevard Latrille',
      distance: '10 minutes en transport',
      badge: 'Très Animé & Central',
      desc: 'Secteur dynamique regroupant de nombreux restaurants, banques, centres commerciaux et lignes de transport directes vers le campus.',
    },
    {
      name: 'Cocody — Angré (8ème / 9ème Tranche)',
      distance: '10 à 15 minutes en bus / taxi',
      badge: 'Excellent Rapport Qualité / Prix',
      desc: 'Nombreuses constructions récentes d’immeubles et studios meublés à des tarifs très compétitifs pour les étudiants.',
    },
    {
      name: 'Riviera — Bonoumin / Palmeraie',
      distance: '15 minutes en VTC / Taxi',
      badge: 'Calme & Moderne',
      desc: 'Zone résidentielle agréable avec accès rapide via les nouveaux échangeurs d’Abidjan.',
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Guide du Logement Étudiant"
        subtitle="Trouvez facilement un logement sécurisé, confortable et adapté à votre budget d'études à proximité du campus de l'IUA aux II Plateaux."
        badge="Hébergement & Résidences"
        breadcrumbs={[
          { label: 'International', href: '/international' },
          { label: 'Logement' },
        ]}
        bgImage="/assets/amphi-1.jpg"
      />

      {/* Intro */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Confort & Proximité
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-4">
              Des Solutions de Logement Pour Tous les Profils
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le service logement de l'IUA sélectionne et audite des propriétaires et résidences partenaires afin de garantir aux étudiants un cadre de vie sain, calme et sécurisé.
            </p>
          </div>
        </div>
      </section>

      {/* Housing Types */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {housingOptions.map((opt) => (
              <div
                key={opt.id}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:border-gold-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-md">
                    <Home size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 font-display mb-1">
                    {opt.title}
                  </h3>
                  <p className="text-sm font-black text-gold-700 mb-4 font-display">
                    {opt.price}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">Surface moyenne : {opt.surface}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {opt.desc}
                  </p>

                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Points forts :</p>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {opt.advantages.map((adv, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-navy-50 hover:bg-navy-900 hover:text-white text-navy-900 text-xs font-bold rounded-xl transition-colors"
                >
                  <span>Demander les disponibilités</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Neighborhoods */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Localisation
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Les Quartiers Recommandés à Proximité
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedNeighborhoods.map((n, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-navy-900 px-3 py-1 bg-white rounded-full border border-gray-200">
                      {n.badge}
                    </span>
                    <span className="text-xs text-gold-700 font-bold">{n.distance}</span>
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2 font-display">{n.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Utilities Advice */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 text-white rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
              <Info className="text-gold-400" size={24} />
              Conseils Pratiques Pour la Signature de Votre Bail
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-300">
              <div className="p-4 bg-navy-800 rounded-2xl border border-navy-700">
                <div className="flex items-center gap-2 text-gold-400 font-bold mb-2">
                  <Zap size={16} />
                  <span>Électricité (CIE) & Eau (SODECI)</span>
                </div>
                <p>Vérifiez si le compteur est individuel (recommandé prépayé "Compteur à carte") ou partagé afin d'éviter les surcoûts d'énergie.</p>
              </div>

              <div className="p-4 bg-navy-800 rounded-2xl border border-navy-700">
                <div className="flex items-center gap-2 text-gold-400 font-bold mb-2">
                  <ShieldCheck size={16} />
                  <span>Caution & Avance</span>
                </div>
                <p>En Côte d'Ivoire, la loi encadre les cautions à 2 mois de caution + 2 mois d'avance de loyer. Exigez toujours un reçu officiel signé.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
