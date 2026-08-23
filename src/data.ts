export const faculties = [
  {
    name: 'Faculté des Sciences et Technologies',
    slug: 'sciences-technologies',
    desc: 'Génie Informatique, MIAGE, Big Data & Intelligence Artificielle, Cybersécurité.',
  },
  {
    name: 'Faculté de Droit et Science Politique',
    slug: 'droit-science-politique',
    desc: 'Droit privé, droit public, science politique et relations internationales.',
  },
  {
    name: 'Faculté des Arts et des Lettres',
    slug: 'arts-lettres',
    desc: 'Cinéma et production audiovisuelle, lettres modernes, arts appliqués.',
  },
  {
    name: 'Faculté des Sciences Économiques et de Gestion',
    slug: 'sciences-eco-gestion',
    desc: 'Économie, gestion, sciences actuarielles et financières.',
  },
  {
    name: 'Faculté des Sciences Humaines et Sociales',
    slug: 'sciences-humaines-sociales',
    desc: 'Sociologie, communication des organisations, publicité marketing.',
  },
] as const


// ============================================================
// NAVIGATION PRINCIPALE
// ============================================================

export const topNav = [
  {
    label: 'Formation',
    href: '/formations',
    children: [
      ...faculties.map((f) => ({
        label: f.name,
        href: `/facultes/${f.slug}`,
      })),

      {
        label: 'Licences',
        href: '/formations/licences',
      },

      {
        label: 'Masters',
        href: '/formations/masters',
      },

      {
        label: 'Admissions et coûts',
        href: '/admissions',
      },
    ],
  },

  {
    label: 'International',
    href: '/international',
    children: [
      {
        label: 'Programme de mobilité internationale',
        href: '/international/mobilite',
      },

      {
        label: 'Étudiants internationaux',
        href: '/international/etudiants',
      },

      {
        label: 'La Côte d’Ivoire',
        href: '/international/cote-divoire',
      },

      {
        label: 'Logement',
        href: '/international/logement',
      },

      {
        label: 'Transport',
        href: '/international/transport',
      },
    ],
  },

  {
    label: 'Vie de campus',
    href: '/vie-campus',
    children: [
      {
        label: 'À propos',
        href: '/a-propos',
      },

      {
        label: 'Bibliothèque',
        href: '/bibliotheque',
      },

      {
        label: 'Ressources',
        href: '/ressources',
      },

      {
        label: 'Témoignages',
        href: '/temoignages',
      },

      {
        label: 'Guide de l’étudiant',
        href: '/guide-etudiant',
      },
    ],
  },

  {
    label: 'Partenariat',
    href: '/partenariats',
    children: [
      {
        label: 'Nos universités partenaires',
        href: '/partenariats/universites',
      },

      {
        label: 'Entreprises partenaires',
        href: '/partenariats/entreprises',
      },

      {
        label: 'Accréditations CAMES',
        href: '/partenariats/accreditations',
      },

      {
        label: 'Insertion professionnelle',
        href: '/insertion-professionnelle',
      },

      {
        label: 'Contact',
        href: '/contact',
      },
    ],
  },
] as const


// ============================================================
// MAIN NAV
// ============================================================

export const mainNav = [
  {
    label: 'Formation',
    href: '/formations',

    children: [
      ...faculties.map((f) => ({
        label: f.name,
        href: `/facultes/${f.slug}`,
      })),

      {
        label: 'Licences',
        href: '/formations/licences',
      },

      {
        label: 'Masters',
        href: '/formations/masters',
      },

      {
        label: 'Admissions et coûts',
        href: '/admissions',
      },
    ],
  },

  {
    label: 'International',
    href: '/international',

    children: [
      {
        label: 'Programme de mobilité internationale',
        href: '/international/mobilite',
      },

      {
        label: 'Étudiants internationaux',
        href: '/international/etudiants',
      },

      {
        label: 'La Côte d’Ivoire',
        href: '/international/cote-divoire',
      },

      {
        label: 'Logement',
        href: '/international/logement',
      },

      {
        label: 'Transport',
        href: '/international/transport',
      },

      {
        label: 'Guide de l’étudiant',
        href: '/guide-etudiant',
      },
    ],
  },

  {
    label: 'Vie de campus',
    href: '/vie-campus',

    children: [
      {
        label: 'À propos',
        href: '/a-propos',
      },

      {
        label: 'Bibliothèques (Physique & Numérique)',
        href: '/bibliotheque',
      },

      {
        label: 'Ressources',
        href: '/ressources',
      },

      {
        label: 'Témoignages',
        href: '/temoignages',
      },

      {
        label: 'Guide de l’étudiant',
        href: '/guide-etudiant',
      },
    ],
  },

  {
    label: 'Partenariat',
    href: '/partenariats',

    children: [
      {
        label: 'Universités partenaires (France)',
        href: '/partenariats/universites',
      },

      {
        label: 'Entreprises partenaires',
        href: '/partenariats/entreprises',
      },

      {
        label: 'Accréditations (CAMES)',
        href: '/partenariats/accreditations',
      },

      {
        label: 'Contact',
        href: '/contact',
      },
    ],
  },
] as const


// ============================================================
// STATISTIQUES
// ============================================================

export const stats = [
  {
    value: '20+',
    label: 'ans d’excellence académique',
    icon: 'graduation',
  },

  {
    value: '05',
    label: 'facultés pluridisciplinaires',
    icon: 'building',
  },

  {
    value: '19+',
    label: 'pays reconnaissant nos diplômes (CAMES)',
    icon: 'globe',
  },

  {
    value: 'Mention Bien',
    label: 'à l’évaluation officielle du MESRS',
    icon: 'award',
  },
] as const


// ============================================================
// ACTUALITÉS
// ============================================================

export const newsCards = [
  {
    title: 'Rentrée académique 2026-2027',

    excerpt:
      'Les inscriptions et réinscriptions sont ouvertes pour les cycles Licence, Master et formation continue.',

    image: '/assets/amphi-1.jpg',

    tag: 'Admissions',
  },

  {
    title: 'Programme de mobilité internationale',

    excerpt:
      'Poursuivez une partie de vos études dans une université partenaire en Europe, Amérique du Nord ou Asie.',

    image: '/assets/graduation-1.jpg',

    tag: 'International',
  },

  {
    title: 'Cérémonie de remise des diplômes',

    excerpt:
      'Nos lauréats célèbrent une nouvelle promotion de diplômés prêts pour le monde professionnel.',

    image: '/assets/graduation-2.jpg',

    tag: 'Vie étudiante',
  },
] as const


// ============================================================
// LIENS RAPIDES
// ============================================================

export const quickLinks = [
  {
    label: 'Admissions et coûts',
    href: '/admissions',
  },

  {
    label: 'Insertion professionnelle',
    href: '/insertion-professionnelle',
  },

  {
    label: 'Programme de mobilité',
    href: '/international/mobilite',
  },

  {
    label: 'Témoignages',
    href: '/temoignages',
  },

  {
    label: 'Guide de l’étudiant',
    href: '/guide-etudiant',
  },

  {
    label: 'Contact',
    href: '/contact',
  },
] as const


// ============================================================
// POURQUOI IUA
// ============================================================

export const whyIUA = [
  {
    title: 'Diplômes reconnus CAMES',

    desc:
      'Une reconnaissance académique valable dans plus de 19 pays de l’espace francophone.',

    icon: 'award',
  },

  {
    title: 'Ouverture internationale',

    desc:
      'Partenariats avec Rennes 1, Lyon 3, Nantes Université, INU Champollion et bien d’autres.',

    icon: 'globe',
  },

  {
    title: 'Encadrement d’excellence',

    desc:
      'Un corps professoral exigeant et un accompagnement personnalisé de chaque étudiant.',

    icon: 'people',
  },

  {
    title: 'Insertion professionnelle',

    desc:
      'Des partenariats entreprises (NSIA Banque, Société Générale...) pour faciliter votre entrée dans la vie active.',

    icon: 'document',
  },
] as const


// ============================================================
// UNIVERSITÉS PARTENAIRES FRANÇAISES
// ============================================================

export const frenchPartners = [
  {
    name: 'Université Rennes 1',
    city: 'Rennes',
  },

  {
    name: 'Jean Moulin Lyon 3',
    city: 'Lyon',
  },

  {
    name: 'Nantes Université',
    city: 'Nantes',
  },

  {
    name: 'Université Jean-François Champollion',
    city: 'Albi',
  },

  {
    name: 'Paris Business School',
    city: 'Paris',
  },

  {
    name: 'Orléans',
    city: 'Orléans',
  },

  {
    name: 'Université Clermont Auvergne',
    city: 'Clermont-Ferrand',
  },

  {
    name: 'Grenoble Alpes',
    city: 'Grenoble',
  },
] as const


// ============================================================
// LOGOS PARTENAIRES
// ============================================================

export const partnerLogos = [
  {
    src: '/assets/logo-rennes1.png',
    alt: 'Université de Rennes 1',
  },

  {
    src: '/assets/partner-lyon3-1.png',
    alt: 'Université Lyon 3 Jean Moulin',
  },

  {
    src: '/assets/partner-nantes.png',
    alt: 'Nantes Université',
  },

  {
    src: '/assets/partner-champollion.png',
    alt: 'INU Champollion',
  },

  {
    src: '/assets/logo-cames-1.png',
    alt: 'CAMES',
  },

  {
    src: '/assets/logo-ministere.png',
    alt: 'Ministère de l’Enseignement Supérieur',
  },

  {
    src: '/assets/partner-nsia-1.png',
    alt: 'NSIA Banque',
  },

  {
    src: '/assets/partner-societe-generale.png',
    alt: 'Société Générale',
  },

  {
    src: '/assets/partner-emploi-jeunes.png',
    alt: 'Agence Emploi Jeunes',
  },
] as const


// ============================================================
// FOOTER
// ============================================================

export const footerLinks = {
  'Étudier à l’IUA': [
    {
      label: 'À propos',
      href: '/a-propos',
    },

    {
      label: 'Bibliothèque Universitaire',
      href: '/bibliotheque',
    },

    {
      label: 'Ressources',
      href: '/ressources',
    },

    {
      label: 'Admissions et coûts',
      href: '/admissions',
    },

    {
      label: 'Insertion professionnelle',
      href: '/insertion-professionnelle',
    },
  ],

  'Nos facultés': faculties.map((f) => ({
    label: f.name,
    href: `/facultes/${f.slug}`,
  })),

  'Étudiants internationaux': [
    {
      label: 'La Côte d’Ivoire',
      href: '/international/cote-divoire',
    },

    {
      label: 'Logement',
      href: '/international/logement',
    },

    {
      label: 'Transport',
      href: '/international/transport',
    },

    {
      label: 'Guide de l’étudiant',
      href: '/guide-etudiant',
    },
  ],
} as const


// ============================================================
// ESPACES DE CONNEXION
// ============================================================

export const accountPortals = [
  {
    label: 'Espace Étudiant',

    desc:
      'Notes, emploi du temps, documents administratifs',

    href: '/connexion',

    icon: 'graduation',
  },

  {
    label: 'Espace Enseignant',

    desc:
      'Cours, absences, saisie des notes',

    href: '/connexion',

    icon: 'people',
  },

  {
    label: 'Espace Administration',

    desc:
      'Gestion académique et administrative',

    href: '/connexion',

    icon: 'building',
  },
] as const


// ============================================================
// CONTACT
// ============================================================

export const contact = {
  email: 'info@iua-ci.org',

  phones: [
    '+225 27 224 222 65',
    '+225 07 07 23 18 62',
  ],

  address:
    'II Plateaux, 7ème Tranche, Rue L40, Carrefour Cascades — 01 BP 12159 Abidjan 01, Côte d’Ivoire',

  social: {
    facebook:
      'https://facebook.com/iua.abidjan/',

    youtube:
      'https://www.youtube.com/channel/UCSHEPezPG0zl52L14HfYaXQ',

    linkedin:
      'https://ci.linkedin.com/school/institut-universitaire-d-abidjan/',

    tiktok:
      'https://www.tiktok.com/@iua_officiel',
  },
} as const