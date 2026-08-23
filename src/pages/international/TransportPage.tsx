import { Link } from 'react-router-dom'
import {
  Bus,
  Car,
  Smartphone,
  CreditCard,
  MapPin,
  Navigation,
  CheckCircle2,
  ArrowRight,
  Shield,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function TransportPage() {
  const transitModes = [
    {
      title: 'VTC & Applications Mobiles (Yango, Uber, Heetch)',
      price: '1 500 à 4 000 FCFA par course',
      desc: 'Le moyen le plus rapide, confortable et sécurisé pour se déplacer à toute heure. Vous commandez directement depuis votre smartphone avec prix fixé à l’avance.',
      icon: Smartphone,
      badge: 'Le plus pratique',
    },
    {
      title: 'Taxis Compteurs Rouges / Oranges',
      price: '1 000 à 3 500 FCFA selon la distance',
      desc: 'Taxis officiels d’Abidjan reconnaissables à leur couleur orange. Possibilité de négocier la course ou d’utiliser le compteur kilométrique.',
      icon: Car,
      badge: 'Disponible partout',
    },
    {
      title: 'Taxis Communaux « Wôro-Wôro » Jaunes',
      price: '200 à 400 FCFA par trajet',
      desc: 'Taxis collectifs de couleur jaune spécifiques à la commune de Cocody. Lignes fixes desservant la 7ème Tranche, le Vallon, Angré et Saint-Jean.',
      icon: Navigation,
      badge: 'Le plus économique',
    },
    {
      title: 'Réseau de Bus SOTRA',
      price: '200 à 500 FCFA (ou Pass étudiant mensuel)',
      desc: 'Lignes régulières de bus de la Société des Transports Abidjanais. Tarifs très avantageux avec la carte d’abonnement étudiant SOTRA.',
      icon: Bus,
      badge: 'Tarif Étudiant',
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Transports & Déplacements à Abidjan"
        subtitle="Découvrez tous les moyens de transport urbain pour rejoindre facilement le campus de l'IUA aux II Plateaux et explorer la capitale ivoirienne en toute sérénité."
        badge="Mobilité Urbaine"
        breadcrumbs={[
          { label: 'International', href: '/international' },
          { label: 'Transport' },
        ]}
        bgImage="/assets/amphi-2.jpg"
      />

      {/* Intro */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Accès Facile
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-4">
              Circuler en Toute Liberté à Abidjan
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le campus de l'IUA est idéalement situé aux II Plateaux (7ème Tranche, Carrefour Cascades), au cœur d'un réseau routier fluide connecté aux grands axes de Cocody et du Plateau.
            </p>
          </div>
        </div>
      </section>

      {/* Transit Modes */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transitModes.map((mode, idx) => {
              const IconComp = mode.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:border-gold-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-md">
                        <IconComp size={24} />
                      </div>
                      <span className="px-3 py-1 bg-navy-50 text-navy-900 text-xs font-semibold rounded-full border border-navy-100">
                        {mode.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy-900 font-display mb-1">
                      {mode.title}
                    </h3>
                    <p className="text-xs font-bold text-gold-700 mb-3">
                      Tarif indicatif : {mode.price}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {mode.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Campus Access Map Info */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 text-white rounded-3xl p-8 md:p-10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-gold-400" size={28} />
              <div>
                <h3 className="text-2xl font-bold font-display">Comment Arriver au Campus de l'IUA ?</h3>
                <p className="text-xs text-gray-300">Repères et indications pour les chauffeurs et GPS</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-200">
              <div className="p-4 bg-navy-800 rounded-2xl border border-navy-700">
                <p className="font-bold text-gold-400 mb-1">Repère VTC / Taxi :</p>
                <p>Indiquer au chauffeur : « Cocody II Plateaux 7ème Tranche, Carrefour Cascades, Rue L40, en face de l'Institut Universitaire d'Abidjan ».</p>
              </div>

              <div className="p-4 bg-navy-800 rounded-2xl border border-navy-700">
                <p className="font-bold text-gold-400 mb-1">Depuis l'Aéroport International Félix Houphouët-Boigny :</p>
                <p>Prendre le Boulevard Valéry Giscard d'Estaing (VGE), puis le 3ème Pont (Pont Henri Konan Bédié) vers Cocody Riviera / II Plateaux. Durée moyenne : 30 à 45 minutes.</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-xl shadow-lg transition-colors"
              >
                <span>Voir le plan d'accès complet & contacts</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
