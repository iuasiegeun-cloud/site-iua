import { Link } from 'react-router-dom'
import {
  Plane,
  HeartHandshake,
  Shield,
  FileText,
  Building,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Users,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function EtudiantsIntlPage() {
  const stepsArrival = [
    {
      num: '01',
      title: 'Pré-inscription & Attestation d’Admission',
      desc: 'Dès validation de votre dossier académique par l’IUA, vous recevez votre attestation officielle d’admission requise pour votre demande de visa d’études.',
    },
    {
      num: '02',
      title: 'Demande de Visa d’Études (e-Visa SNEDAI)',
      desc: 'Effectuez votre pré-enrôlement de visa biométrique ivoirien en ligne via le portail officiel SNEDAI ou auprès du consulat de Côte d’Ivoire de votre pays.',
    },
    {
      num: '03',
      title: 'Accueil Personnalisé à l’Aéroport Félix Houphouët-Boigny',
      desc: 'Transmettez votre plan de vol 72h avant le départ : notre équipe d’accueil vous attend à l’aéroport d’Abidjan pour votre transfert sécurisé.',
    },
    {
      num: '04',
      title: 'Installation, Titre de Séjour & Parrainage',
      desc: 'Assistance pour la remise des clés de votre logement, l’achat de votre puce téléphonique locale, l’ouverture de compte bancaire et l’enrôlement du titre de séjour.',
    },
  ]

  const packServices = [
    'Service d’accueil dédié à l’Aéroport International d’Abidjan',
    'Aide à la réservation de logements meublés sécurisés à proximité du campus',
    'Assistance pour l’obtention de la carte de résident / titre de séjour',
    'Kit de bienvenue (Puce téléphonique avec forfait internet, guide étudiant, plan d’Abidjan)',
    'Parrainage par un étudiant de promotion supérieure pour faciliter votre intégration',
    'Couverture médicale et accès prioritaire à l’infirmerie universitaire',
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Étudiants Internationaux"
        subtitle="Bienvenue à l'IUA ! Découvrez toutes les facilités, l'accompagnement personnalisé et les démarches pour réussir vos études universitaires à Abidjan."
        badge="Accueil & Intégration"
        breadcrumbs={[
          { label: 'International', href: '/international' },
          { label: 'Étudiants Internationaux' },
        ]}
        bgImage="/assets/amphi-2.jpg"
      />

      {/* Welcome Banner */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                Une Université Multiculturelle
              </span>
              <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-4">
                Plus de 20 Nationalités Étudient à l'IUA
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                L'Institut Universitaire d'Abidjan accueille chaque année des centaines d'étudiants venus du Sénégal, Mali, Burkina Faso, Gabon, Cameroun, Bénin, Togo, Tchad, Guinée, Congo et d'Europe.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Notre Bureau d'Accueil des Étudiants Internationaux (BAEI) vous assiste à chaque étape, avant votre départ, à votre atterrissage et tout au long de votre scolarité.
              </p>
            </div>

            <div className="w-full md:w-80 p-6 rounded-3xl bg-navy-900 text-white shadow-xl text-center">
              <Users size={36} className="text-gold-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold font-display">Bureau d'Accueil International</h3>
              <p className="text-xs text-gray-300 mt-2 mb-4">Disponible 7j/7 pour vos questions d'admission et d'arrivée</p>
              <a
                href="mailto:international@iua-ci.org"
                className="inline-block w-full py-2.5 px-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-xl transition-colors"
              >
                international@iua-ci.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to arrive */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Votre Parcours
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              De Votre Pays d'Origine Jusqu'à Notre Campus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepsArrival.map((step, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-navy-900/20 font-display">{step.num}</span>
                  <h3 className="text-base font-bold text-navy-900 mt-2 mb-2 font-display">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pack Welcome */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                Service Sérénité
              </span>
              <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-6">
                Le Pack « Bienvenue à Abidjan »
              </h2>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Afin de vous permettre de vous concentrer pleinement sur votre réussite académique dès les premiers jours, l'IUA inclut un dispositif d'accompagnement logistique et social complet.
              </p>

              <div className="space-y-3">
                {packServices.map((srv, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-800">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-50 rounded-3xl p-8 border border-navy-100">
              <h3 className="text-xl font-bold text-navy-900 font-display mb-4">
                Formalités Consulaires & Titre de Séjour
              </h3>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                Les ressortissants des pays membres de la CEDEAO sont exemptés de visa d'entrée mais doivent s'enregistrer pour obtenir la carte de séjour étudiant. Pour les pays hors CEDEAO, le visa biométrique est obligatoire.
              </p>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 mb-6">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Documents requis pour le visa :</h4>
                <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                  <li>Attestation d'admission officielle délivrée par l'IUA</li>
                  <li>Passeport valide au moins 6 mois après le séjour</li>
                  <li>Justificatif de moyens de subsistance (ou prise en charge parentale)</li>
                  <li>Carnet de vaccination international (Fièvre Jaune obligatoire)</li>
                </ul>
              </div>

              <Link
                to="/admissions"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-xs rounded-xl transition-colors"
              >
                <span>Déposer une candidature internationale</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
