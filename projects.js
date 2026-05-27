export const AFFILIATE_LINKS = {
  mepass:   'https://i.mec.me/?c=k989y21b',
  atoshi:   'https://invite.atoshi.org/?code=XVEMZ7',
  verychat: 'https://invite.verychat.io/jefr',
  uprock:   'https://link.uprock.com/i/ef2a9170',
  grass:    'https://app.grass.io/register?referralCode=6aqpqe5ZaPsmjRH',
}

export const LEARN_MODULES = [
  {
    id: 'grass', name: 'Grass', emoji: '🌿',
    color: '#22c55e', colorBg: 'rgba(34,197,94,0.1)',
    xp: 150, link: AFFILIATE_LINKS.grass,
    difficulty: 'Débutant', difficultyEn: 'Beginner',
    lessons: [
      { title: "Qu'est-ce que Grass ?", titleEn: 'What is Grass?', content: "Grass est un réseau décentralisé qui utilise ta bande passante internet inutilisée pour alimenter des outils d'IA. En partageant ta connexion, tu gagnes des points GRASS convertibles en tokens au TGE.", contentEn: "Grass is a decentralized network that uses your unused internet bandwidth to power AI tools. By sharing your connection, you earn GRASS points convertible to tokens at TGE." },
      { title: "Installer l'extension", titleEn: 'Install the extension', content: "Installe l'extension Chrome Grass, crée un compte et laisse-la tourner en arrière-plan. Pas de frais de gas, pas de crypto requise pour commencer.", contentEn: "Install the Grass Chrome extension, create an account and let it run in the background. No gas fees, no crypto required to start." },
      { title: 'Maximiser tes gains', titleEn: 'Maximize your earnings', content: "Utilise Grass sur plusieurs appareils pour multiplier tes gains. Connecte-toi dans des régions à forte demande pour augmenter la valeur de ta bande passante.", contentEn: "Use Grass on multiple devices to multiply your earnings. Connect in high-demand regions to increase your bandwidth value." },
    ],
    quiz: [
      { q: 'Que vend Grass aux entreprises IA ?', qEn: 'What does Grass sell to AI companies?', options: ['Tes données personnelles','Ta bande passante internet','Tes tokens'], optionsEn: ['Your personal data','Your internet bandwidth','Your tokens'], answer: 1 },
      { q: 'Faut-il de la crypto pour démarrer ?', qEn: 'Do you need crypto to start?', options: ["Oui, de l'ETH",'Non, gratuit','Oui, du BTC'], optionsEn: ['Yes, ETH',"No, it's free",'Yes, BTC'], answer: 1 },
      { q: 'Comment multiplier ses gains ?', qEn: 'How to multiply earnings?', options: ['Vendre ses tokens','Utiliser plusieurs appareils','Inviter des amis seulement'], optionsEn: ['Sell tokens','Use multiple devices','Invite friends only'], answer: 1 },
    ]
  },
  {
    id: 'uprock', name: 'UpRock', emoji: '📡',
    color: '#ef4444', colorBg: 'rgba(239,68,68,0.1)',
    xp: 120, link: AFFILIATE_LINKS.uprock,
    difficulty: 'Débutant', difficultyEn: 'Beginner',
    lessons: [
      { title: "Qu'est-ce qu'UpRock ?", titleEn: 'What is UpRock?', content: "UpRock est une application mobile qui te permet de partager ta connexion internet pour alimenter un réseau d'IA. Tu gagnes des UPT (UpRock Tokens) en restant actif.", contentEn: "UpRock is a mobile app that lets you share your internet connection to power an AI network. You earn UPT (UpRock Tokens) by staying active." },
      { title: 'Installation et configuration', titleEn: 'Installation and setup', content: "Télécharge l'app UpRock sur iOS ou Android, inscris-toi avec le lien de parrainage pour obtenir des bonus, puis active le partage de bande passante.", contentEn: "Download the UpRock app on iOS or Android, sign up with the referral link to get bonuses, then enable bandwidth sharing in settings." },
      { title: 'Stratégie de gains', titleEn: 'Earning strategy', content: "Laisse l'app active en arrière-plan 24h/7j. Les pics de gains ont lieu aux heures de forte demande. Combine avec d'autres applis pour diversifier.", contentEn: "Keep the app running 24/7. Peak earnings occur during high-demand hours. Combine with other apps to diversify." },
    ],
    quiz: [
      { q: 'Sur quel appareil utilise-t-on UpRock ?', qEn: 'On which device?', options: ['PC uniquement','Mobile iOS/Android','Tablette seulement'], optionsEn: ['PC only','Mobile iOS/Android','Tablet only'], answer: 1 },
      { q: 'Quel token gagne-t-on avec UpRock ?', qEn: 'What token do you earn?', options: ['GRASS','UPT','ATOSHI'], optionsEn: ['GRASS','UPT','ATOSHI'], answer: 1 },
    ]
  },
  {
    id: 'mepass', name: 'ME Pass', emoji: '⚖️',
    color: '#378ADD', colorBg: 'rgba(55,138,221,0.1)',
    xp: 100, link: AFFILIATE_LINKS.mepass,
    difficulty: 'Intermédiaire', difficultyEn: 'Intermediate',
    lessons: [
      { title: 'Comprendre ME Pass', titleEn: 'Understanding ME Pass', content: "ME Pass est une identité numérique décentralisée sur la blockchain. Elle te permet de prouver ton identité sans révéler tes données — un pilier du Web3.", contentEn: "ME Pass is a decentralized digital identity on the blockchain. It allows you to prove your identity without revealing your data — a Web3 pillar." },
      { title: 'Créer ton identité', titleEn: 'Create your identity', content: "Inscris-toi via le lien de parrainage, complète la vérification d'identité légère, et obtiens ton badge on-chain qui débloque des airdrops exclusifs.", contentEn: "Sign up via the referral link, complete light KYC verification, and get your on-chain badge that unlocks exclusive airdrops." },
    ],
    quiz: [
      { q: "ME Pass est une identité de quel type ?", qEn: 'ME Pass is what type of identity?', options: ['Centralisée','Décentralisée','Gouvernementale'], optionsEn: ['Centralized','Decentralized','Governmental'], answer: 1 },
      { q: 'À quoi sert le badge ME Pass ?', qEn: 'What is the ME Pass badge for?', options: ['Vendre des NFT','Débloquer des airdrops exclusifs','Miner du Bitcoin'], optionsEn: ['Sell NFTs','Unlock exclusive airdrops','Mine Bitcoin'], answer: 1 },
    ]
  },
  {
    id: 'atoshi', name: 'Atoshi', emoji: '🌐',
    color: '#a78bfa', colorBg: 'rgba(167,139,250,0.1)',
    xp: 130, link: AFFILIATE_LINKS.atoshi,
    difficulty: 'Intermédiaire', difficultyEn: 'Intermediate',
    lessons: [
      { title: 'Atoshi, le réseau équitable', titleEn: 'Atoshi, the fair network', content: "Atoshi est un réseau décentralisé basé sur l'équité et la transparence. Son token natif récompense les contributeurs actifs.", contentEn: "Atoshi is a decentralized network based on fairness and transparency. Its native token rewards active contributors." },
      { title: 'Participer et gagner', titleEn: 'Participate and earn', content: "Rejoins via le code XVEMZ7, accomplis des tâches quotidiennes (partage, engagement, référencement) pour accumuler des points avant le TGE.", contentEn: "Join via code XVEMZ7, complete daily tasks (sharing, engagement, referrals) to accumulate points before TGE." },
    ],
    quiz: [
      { q: 'Atoshi récompense quel type utilisateur ?', qEn: 'Atoshi rewards which user type?', options: ['Les investisseurs','Les contributeurs actifs','Les mineurs'], optionsEn: ['Investors','Active contributors','Miners'], answer: 1 },
    ]
  },
  {
    id: 'verychat', name: 'VeryChat', emoji: '💬',
    color: '#f97316', colorBg: 'rgba(249,115,22,0.1)',
    xp: 90, link: AFFILIATE_LINKS.verychat,
    difficulty: 'Débutant', difficultyEn: 'Beginner',
    lessons: [
      { title: 'VeryChat : la messagerie Web3', titleEn: 'VeryChat: the Web3 messenger', content: "VeryChat est une application de messagerie décentralisée qui récompense ses utilisateurs avec des tokens pour leur activité quotidienne.", contentEn: "VeryChat is a decentralized messaging app that rewards users with tokens for their daily activity." },
      { title: 'Rejoindre et activer', titleEn: 'Join and activate', content: "Utilise le lien d'invitation pour créer ton compte et obtenir un bonus de bienvenue. Complète ton profil, rejoins des groupes et reste actif.", contentEn: "Use the invitation link to create your account and get a welcome bonus. Complete your profile, join groups and stay active." },
    ],
    quiz: [
      { q: 'Comment gagner des tokens sur VeryChat ?', qEn: 'How to earn tokens on VeryChat?', options: ['En achetant des tokens',"En étant actif sur l'app",'En minant'], optionsEn: ['By buying tokens','By being active on the app','By mining'], answer: 1 },
    ]
  },
]

export const AIRDROP_GUIDES = [
  {
    id: 'grass', name: 'Grass', emoji: '🌿',
    status: 'active', statusLabel: 'Actif', statusLabelEn: 'Active',
    timePerDay: '5 min', cost: 'Gratuit', costEn: 'Free',
    network: 'Solana', link: AFFILIATE_LINKS.grass,
    steps: ["Installe l'extension Chrome Grass","Inscris-toi avec le lien de parrainage","Laisse l'extension active en arrière-plan","Vérifie tes points dans le dashboard","Invite des amis pour 20% de commission"],
    stepsEn: ['Install the Grass Chrome extension','Sign up with the referral link','Keep the extension running in background','Check your points in the dashboard','Invite friends for 20% commission'],
  },
  {
    id: 'uprock', name: 'UpRock', emoji: '📡',
    status: 'active', statusLabel: 'Actif', statusLabelEn: 'Active',
    timePerDay: '0 min (passif)', cost: 'Gratuit', costEn: 'Free',
    network: 'Solana', link: AFFILIATE_LINKS.uprock,
    steps: ["Télécharge l'app UpRock (iOS/Android)","Crée un compte via le lien de parrainage","Active le partage de bande passante","Laisse tourner en arrière-plan","Surveille tes UPT chaque semaine"],
    stepsEn: ['Download the UpRock app (iOS/Android)','Create account via referral link','Enable bandwidth sharing','Keep running in background','Check your UPT weekly'],
  },
  {
    id: 'mepass', name: 'ME Pass', emoji: '⚖️',
    status: 'pending', statusLabel: 'En attente TGE', statusLabelEn: 'Pending TGE',
    timePerDay: '10 min', cost: 'Gratuit', costEn: 'Free',
    network: 'Ethereum', link: AFFILIATE_LINKS.mepass,
    steps: ["Inscris-toi via le lien de parrainage","Complète la vérification d'identité légère","Obtiens ton badge d'identité on-chain","Accomplis les tâches journalières","Attends l'annonce du TGE"],
    stepsEn: ['Sign up via the referral link','Complete light identity verification','Get your on-chain identity badge','Complete daily tasks','Wait for the TGE announcement'],
  },
  {
    id: 'atoshi', name: 'Atoshi', emoji: '🌐',
    status: 'active', statusLabel: 'Actif', statusLabelEn: 'Active',
    timePerDay: '15 min', cost: 'Gratuit', costEn: 'Free',
    network: 'BSC', link: AFFILIATE_LINKS.atoshi,
    steps: ['Rejoins avec le code XVEMZ7','Complète le profil utilisateur','Accomplis les tâches quotidiennes','Partage et invite pour plus de points','Surveille les annonces TGE'],
    stepsEn: ['Join with code XVEMZ7','Complete the user profile','Complete daily tasks','Share and invite for more points','Monitor TGE announcements'],
  },
  {
    id: 'verychat', name: 'VeryChat', emoji: '💬',
    status: 'active', statusLabel: 'Actif', statusLabelEn: 'Active',
    timePerDay: '10 min', cost: 'Gratuit', costEn: 'Free',
    network: 'TON', link: AFFILIATE_LINKS.verychat,
    steps: ['Installe VeryChat via le lien','Crée ton compte et complète ton profil','Rejoins des groupes actifs','Envoie des messages pour gagner des points','Invite des amis pour multiplier tes gains'],
    stepsEn: ['Install VeryChat via the link','Create your account and complete profile','Join active groups','Send messages to earn points','Invite friends to multiply earnings'],
  },
]

export const WALLET_GUIDES = [
  {
    id: 'safepal', name: 'SafePal', emoji: '🔒',
    type: 'Hardware + Software', color: '#a78bfa',
    pros: ['Wallet hardware abordable (~50$)','App mobile complète','Support 30+ blockchains','Intégration DeFi native'],
    prosEn: ['Affordable hardware wallet (~$50)','Complete mobile app','Supports 30+ blockchains','Native DeFi integration'],
    cons: ['Moins connu que Ledger','Interface perfectible'],
    consEn: ['Less known than Ledger','Interface could be improved'],
    bestFor: 'Débutants cherchant sécurité + mobilité',
    bestForEn: 'Beginners seeking security + mobility',
    guide: ['Achète le SafePal S1 sur le site officiel','Configure l\'appareil hors-ligne','Note ta seed phrase (24 mots) sur papier','Installe l\'app SafePal sur ton téléphone','Connecte le hardware via QR code'],
    guideEn: ['Buy the SafePal S1 from official website','Configure the device offline','Write your seed phrase (24 words) on paper','Install the SafePal app on your phone','Connect hardware via QR code'],
  },
  {
    id: 'metamask', name: 'MetaMask', emoji: '🦊',
    type: 'Software (Browser)', color: '#f97316',
    pros: ["Standard de l'industrie",'Compatible avec tout','Gratuit','Nombreuses intégrations'],
    prosEn: ['Industry standard','Compatible with everything','Free','Many integrations'],
    cons: ['Seulement EVM (ETH, BSC...)','Cible des hackers','Pas idéal pour mobile'],
    consEn: ['EVM only (ETH, BSC...)','Hacker target','Not ideal for mobile'],
    bestFor: 'Utilisation DeFi et dApps Ethereum',
    bestForEn: 'DeFi and Ethereum dApps usage',
    guide: ["Installe l'extension sur Chrome/Firefox","Crée un nouveau portefeuille","Sauvegarde ta phrase secrète hors-ligne","Ajoute les réseaux BSC, Polygon si besoin","N'ouvre jamais un lien suspect"],
    guideEn: ['Install the Chrome/Firefox extension','Create a new wallet','Save your secret phrase offline','Add BSC, Polygon networks if needed','Never open a suspicious link'],
  },
  {
    id: 'trust', name: 'Trust Wallet', emoji: '🛡️',
    type: 'Software (Mobile)', color: '#378ADD',
    pros: ['Multi-chaîne natif','Interface simple','Gratuit','Owned by Binance'],
    prosEn: ['Native multi-chain','Simple interface','Free','Owned by Binance'],
    cons: ['Code source partiellement fermé','Moins de dApps que MetaMask'],
    consEn: ['Partially closed source','Fewer dApps than MetaMask'],
    bestFor: 'Utilisateurs mobile multi-chaîne',
    bestForEn: 'Mobile multi-chain users',
    guide: ['Télécharge Trust Wallet sur iOS/Android','Crée un wallet ou importe l\'existant','Active l\'authentification biométrique','Active la sauvegarde cloud chiffrée','Connecte-toi aux dApps avec WalletConnect'],
    guideEn: ['Download Trust Wallet on iOS/Android','Create a wallet or import existing','Enable biometric authentication','Enable encrypted cloud backup','Connect to dApps with WalletConnect'],
  },
  {
    id: 'security', name: 'Sécurité avancée', emoji: '🔐',
    type: 'Best practices', color: '#22c55e',
    pros: ['Protège 100% de tes assets','Simple à appliquer','Aucun coût','Indispensable'],
    prosEn: ['Protects 100% of your assets','Simple to apply','No cost','Essential'],
    cons: [], consEn: [],
    bestFor: 'Tout utilisateur crypto',
    bestForEn: 'Every crypto user',
    guide: ['Ne partage JAMAIS ta seed phrase','Stocke la seed phrase sur papier','Utilise un email dédié à la crypto','Active le 2FA sur tous tes comptes','Méfie-toi des faux sites (vérifie URL)','Utilise un wallet séparé pour les tests'],
    guideEn: ['NEVER share your seed phrase','Store seed phrase on paper','Use a dedicated crypto email','Enable 2FA on all accounts','Beware of fake sites (check URL)','Use a separate wallet for testing'],
  }
]
