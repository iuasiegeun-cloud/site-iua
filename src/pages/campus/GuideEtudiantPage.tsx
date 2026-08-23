import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  FileCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Heart,
  Scale,
  ShieldCheck,
  Award,
} from 'lucide-react'
import PageHero from '../../components/PageHero'

export default function GuideEtudiantPage() {
  const [selectedSection, setSelectedSection] = useState<number>(0)

  const guideSections = [
    {
      title: 'Système d’Évaluation & Examens (LMD)',
      icon: Award,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p>
            L’année académique est organisée en <strong>deux semestres</strong> de 15 semaines d’enseignement chacun. Chaque semestre correspond à 30 crédits CAMES / ECTS, soit 60 crédits par année.
          </p>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
            <h4 className="font-bold text-navy-900 mb-2">Pondération des Notes :</h4>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong>Contrôle Continu (CC) : 40%</strong> (devoirs sur table, projets, exposés, participation active)</li>
              <li><strong>Examen Terminal (ET) : 60%</strong> (épreuve de fin de semestre)</li>
              <li>Moyenne d'admission au module : <strong>10/20 minimum</strong></li>
            </ul>
          </div>
          <p>
            Une session de rattrapage est systématiquement organisée à la fin de chaque année pour les unités d’enseignement non validées.
          </p>
        </div>
      ),
    },
    {
      title: 'Règlement Intérieur & Charte de Conduite',
      icon: Scale,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p>
            L’IUA accorde une importance primordiale à la discipline, à la ponctualité et au respect mutuel :
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Ponctualité :</strong> Tout retard supérieur à 15 minutes interdit l’accès à la salle de cours.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Tenue vestimentaire :</strong> Une tenue décente, soignée et professionnelle est exigée sur tout le campus.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Carte d’étudiant :</strong> Le port du badge est obligatoire pour pénétrer dans les amphis et les salles de TP.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Santé, Infirmerie & Couverture Médicale',
      icon: Heart,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p>
            Le campus de l'IUA dispose d’une <strong>infirmerie moderne</strong> équipée pour les premiers secours, les consultations générales et le suivi médical préventif.
          </p>
          <div className="p-4 bg-navy-50 rounded-2xl border border-navy-100">
            <h4 className="font-bold text-navy-900 mb-1">Services Inclus dans l’Inscription :</h4>
            <p className="text-xs text-gray-600">
              Visite médicale annuelle obligatoire, consultations infirmières gratuites, pharmacie d'urgence et orientation vers les cliniques partenaires en cas de besoin.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Stages, Projets Tutorés & Soutenances',
      icon: FileCheck,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p>
            En 3ème année de Licence et en 2ème année de Master, un <strong>stage obligatoire en entreprise</strong> (d'une durée de 2 à 6 mois) est requis pour l'obtention du diplôme.
          </p>
          <p>
            Le Bureau d’Aide à l’Insertion Professionnelle (BAIP) vous délivre les conventions de stage et vous assiste dans la recherche d'entreprises d'accueil.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title="Guide Pratique de l'Étudiant"
        subtitle="Toutes les informations essentielles pour réussir votre intégration, comprendre le système d'évaluation LMD et profiter des services du campus."
        badge="Manuel de Réussite"
        breadcrumbs={[
          { label: 'Vie de campus', href: '/vie-campus' },
          { label: 'Guide de l’étudiant' },
        ]}
        bgImage="/assets/amphi-3.jpg"
      />

      {/* Guide accordion layout */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar menu */}
            <div className="space-y-2">
              {guideSections.map((sec, idx) => {
                const IconComp = sec.icon
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedSection(idx)}
                    className={`w-full p-4 rounded-2xl text-left flex items-center gap-3 transition-all ${
                      selectedSection === idx
                        ? 'bg-navy-900 text-white font-bold shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <IconComp size={18} className={selectedSection === idx ? 'text-gold-400' : 'text-navy-900'} />
                    <span className="text-xs sm:text-sm">{sec.title}</span>
                  </button>
                )
              })}
            </div>

            {/* Content Display */}
            <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900 font-display mb-6 pb-4 border-b border-gray-100 flex items-center gap-3">
                <BookOpen className="text-gold-500" size={24} />
                {guideSections[selectedSection].title}
              </h3>

              {guideSections[selectedSection].content}

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <Link
                  to="/ressources"
                  className="text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                >
                  Télécharger le règlement complet en PDF
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-bold rounded-xl transition-colors"
                >
                  Poser une question
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
