import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  TrendingUp,
  FileCheck,
  Users2,
  CheckCircle2,
  ArrowRight,
  Send,
  Calendar,
  Sparkles,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function InsertionProPage() {
  const [formSent, setFormSent] = useState(false)

  const baipServices = [
    {
      title: 'Coaching Personnalisé & Ateliers CV',
      desc: 'Séances individuelles et collectives pour structurer un CV d’impact selon les standards RH, rédiger une lettre de motivation percutante et valoriser son profil sur LinkedIn.',
      icon: FileCheck,
    },
    {
      title: 'Simulations d’Entretiens de Recrutement',
      desc: 'Mises en situation réelles face à des Directeurs des Ressources Humaines partenaires pour maîtriser son pitch, gérer le stress et négocier ses prétentions salariales.',
      icon: Users2,
    },
    {
      title: 'Forum Annuel de l’Emploi & des Stages IUA',
      desc: 'Le grand rendez-vous de recrutement sur le campus réunissant plus de 40 entreprises, banques et cabinets pour des entretiens de recrutement express (Job Dating).',
      icon: Calendar,
    },
    {
      title: 'Plateforme d’Offres & Réseau Alumni',
      desc: 'Accès exclusif à la bourse des offres de stage et d’emploi de nos partenaires et mise en relation directe avec les diplômés en poste.',
      icon: Sparkles,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
    setTimeout(() => setFormSent(false), 4000)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Insertion Professionnelle & Carrière"
        subtitle="Le Bureau d'Aide à l'Insertion Professionnelle (BAIP) vous accompagne activement du stage d'immersion jusqu'à votre premier contrat de travail."
        badge="Accompagnement Vers l'Emploi"
        breadcrumbs={[
          { label: 'Partenariats', href: '/partenariats' },
          { label: 'Insertion professionnelle' },
        ]}
        bgImage="/assets/graduation-2.jpg"
      />

      {/* Figures */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-navy-50">
              <p className="text-3xl sm:text-4xl font-bold text-navy-900 font-display">92%</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Des diplômés en poste dans les 6 mois</p>
            </div>
            <div className="p-6 rounded-2xl bg-gold-50">
              <p className="text-3xl sm:text-4xl font-bold text-gold-700 font-display">500+</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Offres de stages & contrats traitées par an</p>
            </div>
            <div className="p-6 rounded-2xl bg-navy-50">
              <p className="text-3xl sm:text-4xl font-bold text-navy-900 font-display">40+</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Grandes entreprises au Forum Emploi IUA</p>
            </div>
          </div>
        </div>
      </section>

      {/* BAIP Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Services du BAIP
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Un Accompagnement Proactif & Personnalisé
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {baipServices.map((srv, idx) => {
              const IconComp = srv.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:border-gold-400 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-md">
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 font-display mb-2">{srv.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{srv.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job Offer deposit Form for Companies */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                Espace Recruteurs
              </span>
              <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-4">
                Déposer une Offre de Stage ou d'Emploi
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Vous recherchez des talents rigoureux, bien formés et rapidement opérationnels en Droit, Informatique, Finance, Comptabilité, Communication ou Économie ? Transmettez-nous votre besoin.
              </p>
              <div className="p-4 bg-navy-50 rounded-2xl border border-navy-100 text-xs text-navy-900">
                <strong>Délai de traitement :</strong> Votre offre est validée et diffusée à nos étudiants sous 24 à 48 heures ouvrées.
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-sm">
              {formSent ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center text-emerald-800">
                  <CheckCircle2 size={36} className="mx-auto mb-2 text-emerald-600" />
                  <h4 className="font-bold text-sm">Offre transmise avec succès !</h4>
                  <p className="text-xs mt-1">Le bureau BAIP prendra contact avec vous très rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-navy-900 mb-1">Nom de l'Entreprise</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: NSIA Banque, Cabinet Juridique..."
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-navy-900 mb-1">Email Professionnel du Recruteur</label>
                    <input
                      type="email"
                      required
                      placeholder="recrutement@entreprise.com"
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-navy-900 mb-1">Intitulé du Poste / Stage</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Stagiaire Développeur Web, Juriste Junior..."
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-navy-900 mb-1">Description du profil recherché</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Missions, compétences requises et niveau d'études..."
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy-900 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Diffuser l'offre aux étudiants</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
