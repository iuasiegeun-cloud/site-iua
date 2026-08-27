import { Link } from 'react-router-dom'
import {
  Award,
  Building,
  Target,
  ShieldCheck,
  GraduationCap,
  Users2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function AProposPage() {
  const values = [
    {
      title: 'Excellence Académique',
      desc: 'Un corps professoral d’élite composé d’enseignants-chercheurs titulaires du CAMES et de praticiens chevronnés des grandes entreprises.',
    },
    {
      title: 'Rigueur & Éthique',
      desc: 'Le respect des normes déontologiques, l’honnêteté intellectuelle et la ponctualité comme socles de la formation des futurs cadres.',
    },
    {
      title: 'Innovation & Digitalisation',
      desc: 'Des infrastructures technologiques modernes, des plateformes e-learning de pointe (FOAD) et des programmes orientés vers les métiers de demain.',
    },
    {
      title: 'Ouverture Internationale',
      desc: 'Des partenariats actifs avec des universités européennes de premier plan pour des échanges d’étudiants et des doubles diplomations.',
    },
  ]

  const milestones = [
    {
      year: 'Création',
      title: 'Fondation de l’IUA',
      desc: 'Création de l’Institut Universitaire d’Abidjan avec la vision de former l’élite intellectuelle et managériale de la Côte d’Ivoire et de la sous-région.',
    },
    {
      year: 'Reconnaissance',
      title: 'Homologation CAMES',
      desc: 'Inscription de nos diplômes de Licence et Master au répertoire du Conseil Africain et Malgache pour l’Enseignement Supérieur (CAMES).',
    },
    {
      year: 'Distinction',
      title: 'Évaluation MESRS — Mention Bien (15,88/20)',
      desc: 'Classement d’excellence par le Ministère de l’Enseignement Supérieur et de la Recherche Scientifique de Côte d’Ivoire.',
    },
    {
      year: 'Aujourd’hui',
      title: 'Expansion Internationale & FOAD',
      desc: 'Déploiement des programmes de mobilité en France et lancement de la plateforme Formation Ouverte à Distance pour les professionnels.',
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="À Propos de l'Institut Universitaire d'Abidjan"
        subtitle="Découvrez notre histoire, notre vision pédagogique d'excellence et notre engagement résolu pour l'employabilité et la réussite de nos étudiants."
        badge="Notre Identité"
        breadcrumbs={[
          { label: 'Vie de campus', href: '/vie-campus' },
          { label: 'À propos' },
        ]}
        bgImage="/assets/amphi-1.jpg"
      />

      {/* Mission & Vision */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
                Notre Raison d'Être
              </span>
              <h2 className="text-3xl font-bold text-navy-900 font-display mt-1 mb-6">
                Former les Leaders et Bâtisseurs de l'Afrique de Demain
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                L'<strong>Institut Universitaire d'Abidjan (IUA)</strong> est un établissement d'enseignement supérieur privé de référence en Côte d'Ivoire. Situé aux II Plateaux (7ème Tranche, Carrefour Cascades), l'IUA dispense un enseignement pluridisciplinaire de haut niveau axé sur l'acquisition de compétences pratiques et l'employabilité immédiate.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Fidèle aux exigences du système LMD et aux standards du CAMES, l'IUA a bâti sa réputation sur la qualité de son encadrement, la rigueur de ses évaluations et la proximité constante avec le monde de l'entreprise.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="p-4 bg-navy-50 rounded-2xl border border-navy-100">
                  <p className="text-2xl font-black text-navy-900 font-display">15,88 / 20</p>
                  <p className="text-xs text-gray-600 mt-0.5">Note officielle MESRS (Mention Bien)</p>
                </div>
                <div className="p-4 bg-gold-50 rounded-2xl border border-gold-200">
                  <p className="text-2xl font-black text-gold-700 font-display">19 Pays</p>
                  <p className="text-xs text-gray-600 mt-0.5">Reconnaissance CAMES garantie</p>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 text-white rounded-3xl p-8 lg:p-10 shadow-xl">
              <h3 className="text-2xl font-bold font-display mb-4 text-gold-400">
                Le Mot du Président du Conseil
              </h3>
              <blockquote className="text-sm text-gray-300 italic leading-relaxed mb-6">
                « Notre mission à l'IUA est de donner à chaque étudiant non seulement le savoir académique le plus pointu, mais également le savoir-être, l'éthique professionnelle et le courage d'innover qui caractérisent les grands leaders. »
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold text-lg">
                  IUA
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Conseil d'Administration de l'IUA</p>
                  <p className="text-xs text-gray-400">Institut Universitaire d'Abidjan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Piliers Fondateurs
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Nos 4 Valeurs Cardinales
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-gold-400 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-4 font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-navy-900 font-display mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Histoire & Trajectoire
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Les Grandes Étapes de l'IUA
            </h2>
          </div>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-start gap-6">
                <span className="px-3.5 py-1.5 bg-navy-900 text-gold-400 text-xs font-bold rounded-xl shrink-0">
                  {m.year}
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy-900 font-display mb-1">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
