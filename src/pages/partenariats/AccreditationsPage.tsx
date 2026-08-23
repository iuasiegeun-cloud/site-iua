import { Link } from 'react-router-dom'
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Building,
  FileCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function AccreditationsPage() {
  const camesCountries = [
    'Bénin', 'Burkina Faso', 'Burundi', 'Cameroun', 'Centrafrique',
    'Congo', 'Côte d’Ivoire', 'Gabon', 'Guinée', 'Guinée-Bissau',
    'Guinée Équatoriale', 'Madagascar', 'Mali', 'Niger', 'Rwanda',
    'Sénégal', 'Tchad', 'Togo'
  ]

  const qualityPillars = [
    {
      title: 'Cellule Interne d’Assurance Qualité (CIAQ)',
      desc: 'Veille permanente à la conformité des maquettes pédagogiques avec les standards académiques internationaux et les référentiels du CAMES.',
    },
    {
      title: 'Évaluation des Enseignements par les Étudiants',
      desc: 'À la fin de chaque semestre, les étudiants évaluent anonymement la pédagogie de chaque module pour perfectionner en continu les cours.',
    },
    {
      title: 'Corps Professoral Titulaire du CAMES',
      desc: 'Les enseignants-chercheurs de l’IUA sont inscrits sur les Listes d’Aptitude aux Fonctions de Maître-Assistant, Maître de Conférences et Professeur Titulaire du CAMES.',
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Accréditations CAMES & Reconnaissances"
        subtitle="L'IUA garantit à ses étudiants des diplômes officiellement reconnus par l'État de Côte d'Ivoire (MESRS) et valables dans l'ensemble des 19 pays de l'espace CAMES."
        badge="Qualité & Label Académique"
        breadcrumbs={[
          { label: 'Partenariats', href: '/partenariats' },
          { label: 'Accréditations CAMES' },
        ]}
        bgImage="/assets/amphi-1.jpg"
      />

      {/* Distinction Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-8 rounded-3xl bg-gold-50 border border-gold-200 flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gold-500 text-white flex items-center justify-center shrink-0 shadow-lg">
                <Award size={40} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-gold-900 tracking-wider">Évaluation Ministérielle (MESRS)</span>
                <h3 className="text-2xl font-bold text-navy-900 mt-1 font-display">Mention « BIEN » (15,88 / 20)</h3>
                <p className="text-xs text-gray-600 mt-1">Attribuée par le Ministère de l’Enseignement Supérieur de Côte d’Ivoire.</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-navy-50 border border-navy-100 flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-lg">
                <Globe2 size={40} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-navy-800 tracking-wider">Reconnaissance Panafricaine</span>
                <h3 className="text-2xl font-bold text-navy-900 mt-1 font-display">Inscrit au Répertoire CAMES</h3>
                <p className="text-xs text-gray-600 mt-1">Diplômes de Licence et Master reconnus dans 19 pays d’Afrique.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMES Explanation */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                Label d'Excellence Panafricain
              </span>
              <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-6">
                Pourquoi l'Accréditation CAMES Est-Elle Essentielle ?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Le <strong>Conseil Africain et Malgache pour l'Enseignement Supérieur (CAMES)</strong> est l'institution supranationale chargée d'évaluer et d'accréditer les universités dans l'espace francophone africain.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Un diplôme accrédité CAMES délivré par l'IUA confère à son titulaire :
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-200 text-xs text-gray-800">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>L'équivalence directe</strong> pour concourir dans les fonctions publiques des 19 pays membres.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-200 text-xs text-gray-800">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>La poursuite d'études simplifiée</strong> en Master ou Doctorat dans n'importe quelle université du monde.</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-200 text-xs text-gray-800">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>La confiance immédiate</strong> des multinationales, institutions financières et organisations internationales (ONU, BAD, UA).</span>
                </div>
              </div>
            </div>

            {/* Countries tags */}
            <div className="bg-navy-900 text-white rounded-3xl p-8 lg:p-10 shadow-xl">
              <h3 className="text-xl font-bold font-display mb-2 flex items-center gap-2">
                <Globe2 className="text-gold-400" size={22} />
                Les 19 Pays Membres de l'Espace CAMES
              </h3>
              <p className="text-xs text-gray-300 mb-6">
                Vos diplômes délivrés à l'IUA sont officiellement valables dans tous ces États :
              </p>

              <div className="flex flex-wrap gap-2">
                {camesCountries.map((country, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-navy-800 text-xs font-semibold text-gray-200 rounded-lg border border-navy-700 hover:border-gold-400 transition-colors"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Démarche Qualité
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Notre Engagement Qualité au Quotidien
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityPillars.map((pillar, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-md">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 font-display mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
