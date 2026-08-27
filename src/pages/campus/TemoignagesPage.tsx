import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Quote,
  Star,
  GraduationCap,
  Briefcase,
  Building,
  CheckCircle2,
  ArrowRight,
  Send,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function TemoignagesPage() {
  const [filterRole, setFilterRole] = useState<'all' | 'alumni' | 'international' | 'actuel'>('all')

  const testimonials = [
    {
      id: '1',
      name: 'Yannick KOUASSI',
      type: 'alumni',
      promotion: 'Promotion 2022 — Master Informatique & SSI',
      currentRole: 'Lead Ingénieur Cybersécurité',
      company: 'Banque Atlantique / Groupe BCP',
      image: '/assets/team-1.jpg',
      quote: 'Grâce à la rigueur des cours et aux travaux pratiques en laboratoire à l’IUA, j’ai été recruté avant même la soutenance de mon mémoire de Master. La reconnaissance CAMES m’a également permis d’intervenir sur des missions régionales dans toute l’Afrique de l’Ouest.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Aminata DIALLO',
      type: 'international',
      promotion: 'Promotion 2023 — Master Droit des Affaires & Fiscalité',
      currentRole: 'Juriste d’Entreprise & Conformité OHADA',
      company: 'Cabinet d’Avocats & Conseil Juridique (Sénégal)',
      image: '/assets/team-2.jpg',
      quote: 'Venue du Sénégal pour étudier à l’IUA, j’ai été immédiatement séduite par l’accueil chaleureux et l’encadrement exceptionnel des professeurs. La double approche théorique et pratique du droit des affaires m’a donné toutes les armes pour réussir au plus haut niveau.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Stéphane BONY',
      type: 'alumni',
      promotion: 'Promotion 2021 — Master Audit & Contrôle de Gestion',
      currentRole: 'Auditeur Senior',
      company: 'Cabinet d’Audit International (Abidjan)',
      image: '/assets/team-3.jpg',
      quote: 'L’IUA m’a appris le sens du détail, la rigueur analytique et le leadership. Les conventions de partenariat avec les entreprises m’ont permis d’obtenir un stage décisif chez NSIA Banque qui a lancé ma carrière.',
      rating: 5,
    },
    {
      id: '4',
      name: 'Marcelle TOURE',
      type: 'actuel',
      promotion: 'Étudiante en Licence 3 Communication & Marketing',
      currentRole: 'Présidente du Club Débat & Art Oratoire',
      company: 'Campus IUA II Plateaux',
      image: '/assets/team-1.jpg',
      quote: 'La vie sur le campus est passionnante ! Entre les cours interactifs et nos activités au BDE, nous développons une aisance oratoire et une confiance en nous indispensables pour notre avenir.',
      rating: 5,
    },
  ]

  const filteredTestimonials = filterRole === 'all'
    ? testimonials
    : testimonials.filter(t => t.type === filterRole)

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Témoignages & Réussites Alumni"
        subtitle="Découvrez les retours d'expérience et les parcours inspirants de nos étudiants et diplômés qui font rayonner l'IUA en entreprise et à l'international."
        badge="Success Stories"
        breadcrumbs={[
          { label: 'Vie de campus', href: '/vie-campus' },
          { label: 'Témoignages' },
        ]}
        bgImage="/assets/graduation-2.jpg"
      />

      {/* Satisfaction figures */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-navy-50">
              <p className="text-3xl sm:text-4xl font-bold text-navy-900 font-display">94%</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Recommandent l'IUA à leur entourage</p>
            </div>
            <div className="p-6 rounded-2xl bg-gold-50">
              <p className="text-3xl sm:text-4xl font-bold text-gold-700 font-display">92%</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Taux d'insertion professionnelle sous 6 mois</p>
            </div>
            <div className="p-6 rounded-2xl bg-navy-50">
              <p className="text-3xl sm:text-4xl font-bold text-navy-900 font-display">15 000+</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Diplômés en activité à travers le monde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setFilterRole('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterRole === 'all'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Tous les témoignages
            </button>
            <button
              onClick={() => setFilterRole('alumni')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterRole === 'alumni'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Diplômés en poste (Alumni)
            </button>
            <button
              onClick={() => setFilterRole('international')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterRole === 'international'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Étudiants Internationaux
            </button>
            <button
              onClick={() => setFilterRole('actuel')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterRole === 'actuel'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Étudiants Actuels
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-gold-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <Quote className="text-navy-200" size={32} />
                  </div>

                  <p className="text-sm text-gray-700 italic leading-relaxed mb-6">
                    « {item.quote} »
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0 border-2 border-gold-400">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-navy-900 font-display">{item.name}</h4>
                    <p className="text-xs text-gold-700 font-semibold">{item.promotion}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.currentRole} — <strong className="text-navy-800">{item.company}</strong></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Testimonial CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <GraduationCap size={40} className="text-gold-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold font-display mb-3">
            Vous êtes diplômé de l'IUA ?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Rejoignez le réseau des Alumni et partagez votre parcours professionnel avec les nouvelles générations d'étudiants.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-xl shadow-lg transition-colors"
          >
            <span>Partager mon témoignage</span>
            <Send size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
