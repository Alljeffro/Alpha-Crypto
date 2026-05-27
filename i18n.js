import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const fr = {
  nav: {
    home: 'Accueil', learn: 'E-Learning', airdrops: 'Airdrops',
    wallets: 'Portefeuilles', tracker: 'Tracker', start: 'Commencer'
  },
  hero: {
    badge: 'La porte d\'entrée Web3',
    title: 'Apprends. Participe.',
    titleGold: 'Gagne.',
    subtitle: 'De débutant à crypto-earner en quelques modules. Découvre les meilleurs projets, comprends les airdrops et sécurise tes gains.',
    cta: 'Commencer gratuitement',
    ctaSub: 'Quiz d\'orientation · 3 questions · 30 secondes',
    stats: {
      users: 'Apprenants actifs',
      airdrops: 'Airdrops actifs',
      claimed: 'Dernier airdrop réclamé',
      claimedVal: 'il y a 2 min'
    }
  },
  quiz: {
    title: 'Quel est ton niveau ?',
    subtitle: 'Réponds à 3 questions pour accéder au contenu adapté.',
    q1: 'Qu\'est-ce qu\'un airdrop pour toi ?',
    q1a: ['Je ne sais pas encore', 'Des tokens gratuits', 'Une stratégie de revenu'],
    q2: 'As-tu déjà un portefeuille crypto ?',
    q2a: ['Non, jamais', 'J\'en ai un mais je l\'utilise peu', 'Oui, je gère plusieurs wallets'],
    q3: 'Ton objectif principal ?',
    q3a: ['Comprendre la crypto', 'Participer aux airdrops', 'Maximiser mes gains'],
    next: 'Suivant', finish: 'Voir mon parcours',
    result: {
      beginner: 'Débutant — commençons par les bases !',
      intermediate: 'Intermédiaire — plonge dans les airdrops !',
      advanced: 'Avancé — optimise tes stratégies !'
    }
  },
  learn: {
    title: 'E-Learning',
    subtitle: 'Maîtrise chaque projet, gagne des XP, rejoins via ton lien.',
    modules: 'modules', quiz: 'Quiz', xp: 'XP',
    startModule: 'Commencer le module',
    cta: 'Tu as compris le projet ? Rejoins-le maintenant et commence à gagner'
  },
  airdrops: {
    title: 'Airdrops actifs',
    subtitle: 'Guides pratiques avec statut en temps réel.',
    status: { active: 'Actif', pending: 'En attente TGE', ended: 'Terminé' },
    time: 'Temps requis', cost: 'Coût',
    guide: 'Voir le guide', join: 'Rejoindre'
  },
  wallets: {
    title: 'Portefeuilles & Sécurité',
    subtitle: 'Comprends, choisis et sécurise ton wallet Web3.',
  },
  tracker: {
    title: 'Tracker de gains',
    subtitle: 'Suis tes airdrops et estime tes revenus potentiels.',
    add: 'Ajouter un projet',
    total: 'Valeur estimée totale',
    cols: { project: 'Projet', tokens: 'Tokens farmés', estValue: 'Valeur est. ($)', status: 'Statut', actions: 'Actions' }
  },
  footer: {
    tagline: 'Your gateway to Web3',
    disclaimer: 'Contenu éducatif uniquement. Pas de conseil financier.'
  }
}

const en = {
  nav: {
    home: 'Home', learn: 'E-Learning', airdrops: 'Airdrops',
    wallets: 'Wallets', tracker: 'Tracker', start: 'Get Started'
  },
  hero: {
    badge: 'Your Web3 Gateway',
    title: 'Learn. Participate.',
    titleGold: 'Earn.',
    subtitle: 'From beginner to crypto-earner in a few modules. Discover the best projects, understand airdrops and secure your gains.',
    cta: 'Start for free',
    ctaSub: 'Orientation quiz · 3 questions · 30 seconds',
    stats: {
      users: 'Active learners',
      airdrops: 'Active airdrops',
      claimed: 'Last airdrop claimed',
      claimedVal: '2 min ago'
    }
  },
  quiz: {
    title: 'What\'s your level?',
    subtitle: 'Answer 3 questions to access the right content for you.',
    q1: 'What is an airdrop to you?',
    q1a: ['I don\'t know yet', 'Free tokens', 'An income strategy'],
    q2: 'Do you already have a crypto wallet?',
    q2a: ['No, never', 'I have one but rarely use it', 'Yes, I manage multiple wallets'],
    q3: 'Your main goal?',
    q3a: ['Understand crypto', 'Participate in airdrops', 'Maximize my earnings'],
    next: 'Next', finish: 'See my path',
    result: {
      beginner: 'Beginner — let\'s start with the basics!',
      intermediate: 'Intermediate — dive into airdrops!',
      advanced: 'Advanced — optimize your strategies!'
    }
  },
  learn: {
    title: 'E-Learning',
    subtitle: 'Master each project, earn XP, join via your referral link.',
    modules: 'modules', quiz: 'Quiz', xp: 'XP',
    startModule: 'Start module',
    cta: 'You get the project? Join now and start earning'
  },
  airdrops: {
    title: 'Active Airdrops',
    subtitle: 'Practical guides with real-time status.',
    status: { active: 'Active', pending: 'Pending TGE', ended: 'Ended' },
    time: 'Time required', cost: 'Cost',
    guide: 'View guide', join: 'Join'
  },
  wallets: {
    title: 'Wallets & Security',
    subtitle: 'Understand, choose and secure your Web3 wallet.',
  },
  tracker: {
    title: 'Earnings Tracker',
    subtitle: 'Track your airdrops and estimate potential revenue.',
    add: 'Add project',
    total: 'Total estimated value',
    cols: { project: 'Project', tokens: 'Farmed tokens', estValue: 'Est. value ($)', status: 'Status', actions: 'Actions' }
  },
  footer: {
    tagline: 'Your gateway to Web3',
    disclaimer: 'Educational content only. Not financial advice.'
  }
}

i18n.use(initReactI18next).init({
  resources: { fr: { translation: fr }, en: { translation: en } },
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
