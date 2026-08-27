import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  CheckCircle2,
  HelpCircle,
  CreditCard,
  Calendar,
  DollarSign,
  Download,
  ArrowRight,
  PhoneCall,
  Mail,
  Building2,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function AdmissionsPage() {
  const [selectedStatus, setSelectedStatus] = useState<'non-affecte' | 'affecte' | 'international'>('non-affecte')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const steps = [
    {
      step: '01',
      title: 'Dossier de candidature',
      desc: 'Remplissez la fiche d’inscription en ligne ou retirez-la auprès de la scolarité aux II Plateaux (Rue L40).',
    },
    {
      step: '02',
      title: 'Examen du dossier & Entretien',
      desc: 'La commission pédagogique étudie vos relevés de notes et vous convoque à un entretien de motivation.',
    },
    {
      step: '03',
      title: 'Validation & Paiement',
      desc: 'Recevez votre attestation d’admission et effectuez le règlement du premier versement selon l’échéancier choisi.',
    },
    {
      step: '04',
      title: 'Finalisation & Badge étudiant',
      desc: 'Retirez votre kit étudiant, votre compte Microsoft 365 / FOAD et assistez au séminaire d’intégration.',
    },
  ]

  const requiredDocuments = [
    '01 Extrait d’acte de naissance (original ou copie certifiée conforme)',
    '01 Photocopie certifiée conforme de l’attestation de réussite au Baccalauréat',
    '01 Photocopie des relevés de notes du Bac et des bulletins de Terminale',
    '04 Photos d’identité récentes couleur de même tirage',
    '01 Certificat de nationalité pour les candidats ivoiriens ou passeport valide pour les internationaux',
    '01 Certificat de visite médicale délivré par le centre médical agréé IUA',
    'Pour les admissions en Master : Copies certifiées des diplômes et relevés de notes de Licence / Bac +3',
  ]

  const feeTable = {
    'non-affecte': {
      title: 'Étudiants Non Affectés (Candidature Libre / Privée)',
      licence12: '1 200 000 FCFA / an',
      licence3: '1 350 000 FCFA / an',
      master1: '1 600 000 FCFA / an',
      master2: '1 850 000 FCFA / an',
      inscription: '150 000 FCFA (frais d’inscription & kit pédagogique)',
      modalites: 'Paiement échelonné en 3 à 5 tranches sur l’année universitaire',
    },
    'affecte': {
      title: 'Étudiants Affectés par l’État de Côte d’Ivoire (MESRS)',
      licence12: '510 000 FCFA / an (Subvention État déduite)',
      licence3: '650 000 FCFA / an',
      master1: 'Selon orientation ministérielle',
      master2: 'Selon orientation ministérielle',
      inscription: '85 000 FCFA (frais annexes & bibliothèque)',
      modalites: 'Paiement en 3 tranches (Octobre, Janvier, Avril)',
    },
    'international': {
      title: 'Étudiants Internationaux & Zone Hors UEMOA',
      licence12: '1 400 000 FCFA / an (env. 2 135 €)',
      licence3: '1 550 000 FCFA / an (env. 2 360 €)',
      master1: '1 800 000 FCFA / an (env. 2 745 €)',
      master2: '2 000 000 FCFA / an (env. 3 050 €)',
      inscription: '200 000 FCFA (accueil aéroport, accompagnement visa, intégration inclus)',
      modalites: 'Acompte de 50% à l’inscription, solde en 2 versements',
    },
  }

  const faqs = [
    {
      q: 'Quelles sont les dates limites de dépôt de dossier pour 2026-2027 ?',
      a: 'La 1ère session d’inscription se déroule de Juin à Août. La 2ème session (selon places disponibles) a lieu de Septembre à fin Octobre. Pour les étudiants internationaux, nous recommandons de déposer le dossier avant le 31 Juillet pour faciliter l’obtention du visa.',
    },
    {
      q: 'Existe-t-il des facilités de paiement des frais de scolarité ?',
      a: 'Oui, l’IUA propose un paiement fractionné en plusieurs tranches sans frais supplémentaires (3 à 5 versements répartis entre Octobre et Mai).',
    },
    {
      q: 'Les bourses d’études nationales sont-elles acceptées à l’IUA ?',
      a: 'Oui, les étudiants affectés de l’État peuvent bénéficier des bourses nationales de l’enseignement supérieur (Direction des Bourses MESRS). L’IUA propose également des bourses d’excellence internes pour les majors de promotion.',
    },
    {
      q: 'Comment s’inscrire en Formation Ouverte à Distance (FOAD) ?',
      a: 'L’inscription en FOAD suit le même processus avec une sélection sur dossier et une vérification de l’équipement informatique requis pour suivre les cours en ligne.',
    },
  ]

  const currentFees = feeTable[selectedStatus]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Admissions & Frais de Scolarité 2026-2027"
        subtitle="Découvrez toutes les modalités d'inscription, les critères d'éligibilité, les tarifs officiels et les pièces requises pour rejoindre l'IUA."
        badge="Inscriptions Ouvertes"
        breadcrumbs={[
          { label: 'Formations', href: '/formations' },
          { label: 'Admissions & Coûts' },
        ]}
        bgImage="/assets/hero-rentree.png"
      />

      {/* Steps Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Processus Simplifié
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Les 4 Étapes pour Votre Inscription
            </h2>
            <p className="mt-3 text-gray-600 text-sm">
              Notre équipe d'orientation vous accompagne à chaque étape de votre admission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-gold-400 hover:shadow-md transition-all"
              >
                <div className="text-3xl font-black text-navy-900/20 mb-3 font-display">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition Fees Simulator */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Transparence Tarifaire
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Grille des Frais de Formation
            </h2>
            <p className="mt-3 text-gray-600 text-sm">
              Sélectionnez votre statut pour consulter la grille tarifaire applicable à votre cursus.
            </p>
          </div>

          {/* Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <button
                onClick={() => setSelectedStatus('non-affecte')}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  selectedStatus === 'non-affecte'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-navy-900'
                }`}
              >
                Candidature Directe / Non Affecté
              </button>

              <button
                onClick={() => setSelectedStatus('affecte')}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  selectedStatus === 'affecte'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-navy-900'
                }`}
              >
                Affecté de l'État (MESRS)
              </button>

              <button
                onClick={() => setSelectedStatus('international')}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  selectedStatus === 'international'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-navy-900'
                }`}
              >
                Étudiant International
              </button>
            </div>
          </div>

          {/* Fee Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-md p-8 md:p-10">
            <div className="border-b border-gray-100 pb-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-navy-900 font-display">
                  {currentFees.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Frais annuels valables pour l'année académique 2026-2027
                </p>
              </div>
              <div className="px-4 py-2 bg-gold-50 border border-gold-200 rounded-xl text-gold-900 font-semibold text-xs text-center">
                Frais de dossier & Inscription : {currentFees.inscription}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-navy-50/60 border border-navy-100">
                <p className="text-xs font-bold uppercase text-navy-800 tracking-wider">Licence 1 & 2</p>
                <p className="text-2xl font-black text-navy-900 mt-2 font-display">{currentFees.licence12}</p>
                <p className="text-xs text-gray-500 mt-1">Tronc commun & spécialisation progressive</p>
              </div>

              <div className="p-5 rounded-2xl bg-navy-50/60 border border-navy-100">
                <p className="text-xs font-bold uppercase text-navy-800 tracking-wider">Licence 3 (Diplômante)</p>
                <p className="text-2xl font-black text-navy-900 mt-2 font-display">{currentFees.licence3}</p>
                <p className="text-xs text-gray-500 mt-1">Inclut stage et soutenance de rapport</p>
              </div>

              <div className="p-5 rounded-2xl bg-gold-50/60 border border-gold-100">
                <p className="text-xs font-bold uppercase text-gold-900 tracking-wider">Master 1</p>
                <p className="text-2xl font-black text-navy-900 mt-2 font-display">{currentFees.master1}</p>
                <p className="text-xs text-gray-500 mt-1">Approfondissement théorique et pratique</p>
              </div>

              <div className="p-5 rounded-2xl bg-gold-50/60 border border-gold-100">
                <p className="text-xs font-bold uppercase text-gold-900 tracking-wider">Master 2 (Diplômant)</p>
                <p className="text-2xl font-black text-navy-900 mt-2 font-display">{currentFees.master2}</p>
                <p className="text-xs text-gray-500 mt-1">Mémoire de fin d’études & double diplômation</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-3 text-xs text-gray-600">
              <CreditCard size={18} className="text-navy-900 shrink-0 mt-0.5" />
              <div>
                <strong>Modalités de règlement :</strong> {currentFees.modalites}. Paiement accepté par virement bancaire, chèque certifié, ou Mobile Money (Orange Money, Wave, MTN MoMo).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                Constitution du Dossier
              </span>
              <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-6">
                Pièces à Fournir pour l'Inscription
              </h2>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Les dossiers complets doivent être déposés au service de la scolarité de l'IUA ou téléversés via l'espace de préinscription en ligne.
              </p>

              <div className="space-y-3">
                {requiredDocuments.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-800">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-900 text-white rounded-3xl p-8 lg:p-10 shadow-xl">
              <h3 className="text-2xl font-bold font-display mb-4">
                Besoin d'aide pour votre inscription ?
              </h3>
              <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                Nos conseillers pédagogiques sont à votre disposition pour vous orienter vers la filière la plus adaptée à votre profil.
              </p>

              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-center gap-3">
                  <PhoneCall size={18} className="text-gold-400 shrink-0" />
                  <span>+225 27 22 42 22 65 / +225 07 07 23 18 62</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gold-400 shrink-0" />
                  <span>admissions@iua-ci.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 size={18} className="text-gold-400 shrink-0" />
                  <span>II Plateaux 7ème Tranche, Carrefour Cascades</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold rounded-xl transition-colors"
              >
                <span>Prendre rendez-vous d'orientation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 font-display">
              Foire Aux Questions — Admissions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-navy-900 hover:text-gold-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <HelpCircle size={18} className="text-gold-500 shrink-0" />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
