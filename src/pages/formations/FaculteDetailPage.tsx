import { useParams, Link } from 'react-router-dom'
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Building,
  Monitor,
  Scale,
  DollarSign,
  Languages,
} from 'lucide-react'
import PageHero from '../../components/PageHero'
import { faculties } from '../../data'
import { licencesData } from './LicencesPage'
import { mastersData } from './MastersPage'

interface FacultyDetailInfo {
  name: string
  slug: string
  icon: typeof Monitor
  dean: string
  titleDean: string
  vision: string
  departments: {
    name: string
    description: string
    diplomas: string[]
  }[]
  labs: string[]
  partners: string[]
}

const detailedFaculties: Record<string, FacultyDetailInfo> = {
  'sciences-technologies': {
    name: 'Faculté des Sciences et Technologies',
    slug: 'sciences-technologies',
    icon: Monitor,
    dean: 'Prof. Adama KOUAKOU',
    titleDean: 'Doyen de la Faculté des Sciences & Technologies, Docteur d’État',
    vision: 'Former des ingénieurs d’études, experts en cybersécurité, développeurs et data scientists capables de concevoir les solutions technologiques de l’Afrique émergente.',
    departments: [
      {
        name: 'Département Génie Informatique',
        description: 'Ingénierie logicielle de pointe, développement d’applications web et mobiles, architectures distribuées, Big Data, Intelligence Artificielle et Cybersécurité.',
        diplomas: [
          'Licence en Génie Informatique (GI)',
          'Master en Génie Informatique',
          'Master Big Data & Intelligence Artificielle (IA)',
          'Master en Cybersécurité & Sécurité des Systèmes d’Information',
        ],
      },
      {
        name: 'Département MIAGE (Méthodes Informatiques Appliquées à la Gestion)',
        description: 'Double cursus d’excellence combinant compétences technologiques et management d’entreprise : ingénierie des SI, ERP, audit et transformation digitale.',
        diplomas: [
          'Licence MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)',
          'Master MIAGE (Systèmes d’Information & Management)',
          'Certifications Professionnelles (ITIL, Scrum, Microsoft Azure)',
        ],
      },
    ],
    labs: [
      'Laboratoire d’Intelligence Artificielle, Data Science & Big Data',
      'Centre d’Excellence en Cybersécurité & Défense des Systèmes',
      'FabLab & Incubateur de Projets Logiciels Innovants',
    ],
    partners: ['Université Rennes 1 (France)', 'INU Champollion (France)', 'Partenariats Technologiques & Entreprises'],
  },
  'droit-science-politique': {
    name: 'Faculté de Droit et Science Politique',
    slug: 'droit-science-politique',
    icon: Scale,
    dean: 'Prof. Mireille KOUASSI',
    titleDean: 'Doyenne de la Faculté de Droit, Professeur Agrégée de Droit Privé',
    vision: 'Offrir une solide culture juridique et politique alliant maîtrise du droit national et international OHADA, rigueur éthique et sens du plaidoyer.',
    departments: [
      {
        name: 'Département Droit Privé & Sciences Criminelles',
        description: 'Droit civil, droit commercial des affaires OHADA, droit du travail, des contrats et procédure pénale.',
        diplomas: ['Licence Droit Privé', 'Master Droit des Affaires & Fiscalité', 'Certificat Pratique de l’Arbitrage'],
      },
      {
        name: 'Département Droit Public & Science Politique',
        description: 'Droit constitutionnel, droit administratif, contentieux des marchés publics et géopolitique africaine.',
        diplomas: ['Licence Droit Public', 'Master Relations Internationales & Diplomatie'],
      },
    ],
    labs: ['Centre de Recherches Juridiques & OHADA (CRJ-IUA)', 'Clinique Juridique & Aide aux Justiciables'],
    partners: ['Université Jean Moulin Lyon 3', 'Ordre des Avocats de Côte d’Ivoire', 'Chambre Nationale des Notaires'],
  },
  'sciences-eco-gestion': {
    name: 'Faculté des Sciences Économiques et de Gestion',
    slug: 'sciences-eco-gestion',
    icon: DollarSign,
    dean: 'Dr. Charles BLEY',
    titleDean: 'Doyen de la Faculté, Docteur en Sciences de Gestion',
    vision: 'Former des managers performants, des analystes financiers perspicaces et des auditeurs capables de piloter les entreprises dans une économie globalisée.',
    departments: [
      {
        name: 'Département Sciences de Gestion & Comptabilité',
        description: 'Comptabilité financière SYSCOHADA révisé, audit interne et externe, contrôle de gestion et fiscalité.',
        diplomas: ['Licence Finance-Comptabilité', 'Master Audit & Contrôle de Gestion', 'Diplôme d’Expertise Comptable (prépa)'],
      },
      {
        name: 'Département Économie & Finance de Marché',
        description: 'Micro/macroéconomie, analyse quantitative, gestion d’actifs, investissements boursiers BRVM.',
        diplomas: ['Licence Sciences Économiques', 'Master Banque & Marchés Financiers'],
      },
    ],
    labs: ['Observatoire Économique de l’Afrique de l’Ouest', 'Salle des Marchés / Simulation BRVM'],
    partners: ['NSIA Banque', 'Société Générale Côte d’Ivoire', 'Nantes Université'],
  },
  'sciences-humaines-sociales': {
    name: 'Faculté des Sciences Humaines et Sociales',
    slug: 'sciences-humaines-sociales',
    icon: Users,
    dean: 'Prof. Germain DIABATÉ',
    titleDean: 'Doyen, Maître de Conférences CAMES en Sociologie & Communication',
    vision: 'Former des stratèges de la communication, sociologues et experts des dynamiques organisationnelles dotés d’un esprit critique et d’une adaptabilité hors pair.',
    departments: [
      {
        name: 'Département Communication des Organisations & Marketing',
        description: 'Relations publiques, communication digitale, publicité, gestion de crise et médias.',
        diplomas: ['Licence Communication & Marketing', 'Master Stratégies de Communication'],
      },
      {
        name: 'Département Sociologie & Développement Communautaire',
        description: 'Études socio-anthropologiques, gestion des ressources humaines, médiation sociale.',
        diplomas: ['Licence Sociologie', 'Master Sociologie des Organisations'],
      },
    ],
    labs: ['Laboratoire des Usages Numériques & Médias Sociaux', 'Chaire UNESCO Développement & Société'],
    partners: ['Agence Emploi Jeunes', 'Union des Professionnels des Médias', 'Université Bordeaux Montaigne'],
  },
  'arts-lettres': {
    name: 'Faculté des Arts et des Lettres',
    slug: 'arts-lettres',
    icon: Languages,
    dean: 'Dr. Patricia KOFFI',
    titleDean: 'Doyenne, Docteure en Arts & Études Cinématographiques',
    vision: 'Cultiver la créativité, l’excellence linguistique et le professionnalisme dans les industries culturelles et créatives africaines.',
    departments: [
      {
        name: 'Département Cinéma, Télévision & Audiovisuel',
        description: 'Écriture de scénario, prise de vue, réalisation, production cinématographique et montage vidéo.',
        diplomas: ['Licence Cinéma & Audiovisuel', 'Master Production & Réalisation Audiovisuelle'],
      },
      {
        name: 'Département Lettres Modernes & Langues Appliquées',
        description: 'Littératures francophones, traduction professionnelle anglais/espagnol, linguistique appliquée.',
        diplomas: ['Licence Lettres Modernes', 'Licence Traduction & Interprétariat'],
      },
    ],
    labs: ['Studio de Tournage & Plateau TV IUA', 'Salle de Montage & Post-production numérique'],
    partners: ['FESPACO', 'Institut Français d’Abidjan', 'RTI (Radiodiffusion Télévision Ivoirienne)'],
  },
}

export default function FaculteDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const faculty = slug ? detailedFaculties[slug] : null

  if (!faculty) {
    return (
      <div className="min-h-screen bg-gray-50 pt-36 px-4 pb-20 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <Building size={48} className="text-navy-900 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-navy-900 mb-2">Faculté introuvable</h2>
          <p className="text-sm text-gray-600 mb-6">
            La faculté demandée n'existe pas ou le lien est incorrect.
          </p>
          <Link
            to="/formations"
            className="px-6 py-2.5 bg-navy-900 text-white rounded-xl text-sm font-semibold hover:bg-gold-500 hover:text-navy-950 transition-colors inline-block"
          >
            Retour aux formations
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = faculty.icon
  const facultyLicences = licencesData.filter((l) => l.facultySlug === faculty.slug)
  const facultyMasters = mastersData.filter((m) => m.faculty.toLowerCase().includes(faculty.name.toLowerCase().replace('faculté des ', '').replace('faculté de ', '')))

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHero
        title={faculty.name}
        subtitle={faculty.vision}
        badge="Faculté d'Excellence"
        breadcrumbs={[
          { label: 'Formations', href: '/formations' },
          { label: faculty.name },
        ]}
        bgImage="/assets/amphi-3.jpg"
      />

      {/* Dean Intro */}
      <section className="bg-white border-b border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-navy-50/50 border border-navy-100">
            <div className="w-16 h-16 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
              <IconComponent size={32} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-700">Direction Pédagogique</span>
              <h3 className="text-lg font-bold text-navy-900 mt-0.5">{faculty.dean}</h3>
              <p className="text-xs text-gray-600">{faculty.titleDean}</p>
            </div>
            <Link
              to="/admissions"
              className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-bold rounded-xl shadow-sm transition-colors whitespace-nowrap"
            >
              Postuler dans cette Faculté
            </Link>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-600 font-bold text-xs uppercase tracking-widest">
              Organisation
            </span>
            <h2 className="text-3xl font-bold text-navy-900 font-display mt-1">
              Départements & Programmes
            </h2>
            <p className="mt-3 text-gray-600 text-sm">
              Découvrez la structure académique et les spécialités enseignées au sein de cette faculté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.departments.map((dept, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-navy-900 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-2 font-display">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {dept.description}
                  </p>

                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Diplômes préparés :</p>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {dept.diplomas.map((dip, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-gold-500 shrink-0" />
                          <span>{dip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs & Partnerships */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Labs */}
            <div className="p-8 rounded-3xl bg-navy-900 text-white shadow-xl">
              <h3 className="text-xl font-bold font-display mb-4 flex items-center gap-2">
                <BookOpen className="text-gold-400" size={20} />
                Laboratoires & Centres de Pratique
              </h3>
              <p className="text-xs text-gray-300 mb-6">
                Des infrastructures modernes dédiées à l'expérimentation concrète, aux projets tutorés et à la recherche académique.
              </p>
              <ul className="space-y-3">
                {faculty.labs.map((lab, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 bg-navy-800/80 rounded-xl text-xs text-gray-200 border border-navy-700">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    <span>{lab}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-bold font-display text-navy-900 mb-4 flex items-center gap-2">
                <Award className="text-gold-500" size={20} />
                Accords Spécifiques & Partenaires
              </h3>
              <p className="text-xs text-gray-600 mb-6">
                Les étudiants de cette faculté bénéficient de conventions privilégiées pour les stages, doubles diplômes et échanges universitaires.
              </p>
              <ul className="space-y-3">
                {faculty.partners.map((partner, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl text-xs font-semibold text-navy-900 border border-gray-200 shadow-sm">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation across other faculties */}
      <section className="py-12 bg-gray-100 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 text-center">
            Explorer les autres facultés de l'IUA
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {faculties.filter(f => f.slug !== faculty.slug).map((f) => (
              <Link
                key={f.slug}
                to={`/facultes/${f.slug}`}
                className="px-4 py-2 bg-white hover:bg-navy-900 hover:text-white rounded-xl text-xs font-semibold text-gray-800 border border-gray-300 transition-colors shadow-sm"
              >
                {f.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
