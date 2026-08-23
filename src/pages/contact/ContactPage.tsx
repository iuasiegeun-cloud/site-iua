import { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  GraduationCap,
  Briefcase,
  Globe2,
  HelpCircle,
  Car,
  Bus,
  ShieldCheck,
} from 'lucide-react'
import PageHero from '../../components/PageHero'
import { contact } from '../../data'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admissions & Inscriptions',
    profile: 'Futur étudiant',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const departments = [
    {
      title: 'Service des Admissions & Concours',
      desc: 'Informations sur les filières, validation de dossiers, frais d’inscription.',
      email: 'admissions@iua-ci.org',
      phone: '+225 27 224 222 65',
      icon: GraduationCap,
    },
    {
      title: 'Pôle Relations Internationales',
      desc: 'Accueil des étudiants étrangers, bourses, programmes d’échanges et visas.',
      email: 'international@iua-ci.org',
      phone: '+225 07 07 23 18 62',
      icon: Globe2,
    },
    {
      title: 'Direction des Partenariats & Stages',
      desc: 'Insertion professionnelle, conventions d’entreprises, offres de stage.',
      email: 'entreprises@iua-ci.org',
      phone: '+225 27 224 222 66',
      icon: Briefcase,
    },
    {
      title: 'Secrétariat Général & Scolarité',
      desc: 'Retrait de diplômes, attestations de réussite, relevés de notes officiels.',
      email: 'scolarite@iua-ci.org',
      phone: '+225 27 224 222 67',
      icon: Building,
    },
  ]

  const faqs = [
    {
      q: 'Quelles sont les heures d’accueil sur le campus ?',
      a: 'Nos bureaux administratifs et le service des admissions sont ouverts du Lundi au Vendredi de 07h30 à 18h00, et le Samedi de 08h00 à 13h00 sans interruption.',
    },
    {
      q: 'Comment se rendre sur le campus de l’IUA ?',
      a: 'Le campus est situé à Abidjan Cocody II Plateaux, 7ème Tranche, Rue L40, au Carrefour Cascades. Il est facilement accessible en VTC (Yango, Uber), taxi compteur et lignes de bus SOTRA / Wibus.',
    },
    {
      q: 'Puis-je déposer mon dossier de candidature en ligne ?',
      a: 'Oui, vous pouvez initier votre pré-inscription en ligne dans la section Admissions de notre site web ou en contactant directement notre service des admissions par email.',
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Contactez l'IUA"
        subtitle="Nos équipes administratives et pédagogiques sont à votre écoute pour vous orienter, répondre à vos questions et vous accompagner dans votre projet d’études."
        badge="Écoute & Orientation"
        breadcrumbs={[{ label: 'Contact' }]}
        bgImage="/assets/amphi-2.jpg"
      />

      {/* Main Info Cards */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-navy-50/50 rounded-2xl border border-navy-100 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-navy-900 font-display text-lg mb-1">Campus Principal</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                {contact.address}
              </p>
              <span className="text-xs font-semibold text-navy-900 mt-auto">Abidjan, Côte d’Ivoire</span>
            </div>

            <div className="p-6 bg-navy-50/50 rounded-2xl border border-navy-100 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-navy-900 font-display text-lg mb-1">Téléphones</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Lignes directes standard & scolarité :
              </p>
              <div className="mt-auto space-y-1">
                {contact.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="block text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-navy-50/50 rounded-2xl border border-navy-100 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-navy-900 font-display text-lg mb-1">Courrier Électronique</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Réponse sous 24 à 48 heures ouvrées :
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-auto text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors break-all"
              >
                {contact.email}
              </a>
            </div>

            <div className="p-6 bg-navy-50/50 rounded-2xl border border-navy-100 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-gold-500 text-navy-950 flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-navy-900 font-display text-lg mb-1">Horaires d'Ouverture</h3>
              <div className="mt-auto space-y-1 text-xs text-gray-600">
                <p><strong className="text-navy-900">Lun – Ven :</strong> 07h30 – 18h00</p>
                <p><strong className="text-navy-900">Samedi :</strong> 08h00 – 13h00</p>
                <p><strong className="text-navy-900">Dimanche :</strong> Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Access Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
                <div className="mb-6">
                  <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                    Formulaire en ligne
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-display mt-1">
                    Envoyez-nous un Message
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Remplissez ce formulaire et notre conseiller d’orientation prendra contact avec vous.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-900 font-display">
                      Message envoyé avec succès !
                    </h3>
                    <p className="text-sm text-emerald-700 max-w-md mx-auto">
                      Merci <span className="font-semibold">{formData.name}</span>. Votre demande a bien été transmise à notre service. Nous vous recontacterons très prochainement à l'adresse <span className="font-semibold">{formData.email}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'Admissions & Inscriptions',
                          profile: 'Futur étudiant',
                          message: '',
                        })
                      }}
                      className="inline-flex items-center justify-center px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Nom & Prénom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ex: Kouamé Jean-Marc"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-navy-900 focus:outline-none text-sm text-gray-900 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Numéro de Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ex: +225 07 00 00 00 00"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-navy-900 focus:outline-none text-sm text-gray-900 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Adresse Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Ex: jean.kouame@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-navy-900 focus:outline-none text-sm text-gray-900 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                          Vous êtes :
                        </label>
                        <select
                          value={formData.profile}
                          onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-navy-900 focus:outline-none text-sm text-gray-900 transition-colors"
                        >
                          <option value="Futur étudiant">Futur étudiant / Bachelier</option>
                          <option value="Étudiant actuel">Étudiant IUA actuel</option>
                          <option value="Parent d’élève">Parent d’élève / Tuteur</option>
                          <option value="Professionnel">Professionnel / Entreprise</option>
                          <option value="Candidat international">Candidat international</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                        Objet de votre demande <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-navy-900 focus:outline-none text-sm text-gray-900 transition-colors"
                      >
                        <option value="Admissions & Inscriptions">Admissions & Frais d'inscription</option>
                        <option value="Licences & Masters">Informations sur les programmes (Licences / Masters)</option>
                        <option value="Étudiants Internationaux">Accueil Étudiants Internationaux</option>
                        <option value="Partenariats & Stages">Partenariats entreprises & Recrutement</option>
                        <option value="Documents & Scolarité">Retrait de diplômes & Relevés</option>
                        <option value="Autre demande">Autre demande</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                        Votre Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Précisez votre demande, vos questions ou votre parcours..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-navy-900 focus:outline-none text-sm text-gray-900 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-navy-950/10 transition-all cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>
                          <Send size={16} className="text-gold-400" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar with Campus Access & Map Info */}
            <div className="lg:col-span-5 space-y-6">
              {/* Directions card */}
              <div className="bg-navy-900 text-white rounded-3xl p-8 shadow-xl">
                <span className="text-gold-400 font-bold text-xs uppercase tracking-widest">
                  Accès au Campus
                </span>
                <h3 className="text-2xl font-bold font-display mt-1 mb-4">
                  Comment venir à l'IUA ?
                </h3>
                <p className="text-xs text-navy-200 leading-relaxed mb-6">
                  Le campus universitaire est stratégiquement implanté dans le quartier résidentiel et sécurisé des II Plateaux 7ème Tranche à Cocody.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3.5 bg-white/5 rounded-2xl border border-white/10">
                    <Car size={20} className="text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">VTC & Taxis</h4>
                      <p className="text-[11px] text-gray-300">Indiquez « IUA 7ème Tranche » ou « Carrefour Cascades » sur Yango ou Uber.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white/5 rounded-2xl border border-white/10">
                    <Bus size={20} className="text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Transports en commun</h4>
                      <p className="text-[11px] text-gray-300">Lignes SOTRA et Wibus desservant l'axe Latrille et la 7ème Tranche.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white/5 rounded-2xl border border-white/10">
                    <ShieldCheck size={20} className="text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Parking Sécurisé</h4>
                      <p className="text-[11px] text-gray-300">Stationnement intérieur gratuit réservé aux étudiants, enseignants et visiteurs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social networks & instant contact */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200">
                <h4 className="font-bold text-navy-900 font-display text-sm mb-3">
                  Restez connecté avec l'IUA
                </h4>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Suivez l'actualité des concours, événements du campus et cérémonies de remise de diplômes sur nos réseaux officiels.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={contact.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 hover:bg-navy-50 text-navy-900 text-xs font-semibold rounded-xl border border-gray-200 transition-colors"
                  >
                    <span>Facebook</span>
                  </a>
                  <a
                    href={contact.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 hover:bg-navy-50 text-navy-900 text-xs font-semibold rounded-xl border border-gray-200 transition-colors"
                  >
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={contact.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 hover:bg-navy-50 text-navy-900 text-xs font-semibold rounded-xl border border-gray-200 transition-colors"
                  >
                    <span>YouTube</span>
                  </a>
                  <a
                    href={contact.social.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 hover:bg-navy-50 text-navy-900 text-xs font-semibold rounded-xl border border-gray-200 transition-colors"
                  >
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Direct Contact */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Contacts Spécifiques
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Joindre un Service Dédié
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Pour un traitement rapide de votre demande, écrivez directement au département concerné.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => {
              const IconComp = dept.icon
              return (
                <div
                  key={idx}
                  className="p-6 bg-gray-50 rounded-2xl border border-gray-200/80 hover:border-gold-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-3">
                      <IconComp size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-navy-900 font-display mb-1">{dept.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">{dept.desc}</p>
                  </div>
                  <div className="space-y-1.5 pt-3 border-t border-gray-200/60 text-xs">
                    <a
                      href={`mailto:${dept.email}`}
                      className="block font-medium text-navy-900 hover:text-gold-600 truncate"
                    >
                      {dept.email}
                    </a>
                    <a
                      href={`tel:${dept.phone.replace(/\s/g, '')}`}
                      className="block text-gray-600 hover:text-navy-900"
                    >
                      {dept.phone}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Questions Fréquentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-display mt-1">
              Tout ce qu'il faut savoir avant de nous contacter
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <HelpCircle size={20} className="text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-navy-900 font-display mb-1.5">{faq.q}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
