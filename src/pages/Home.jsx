import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import QuizModal from '../components/QuizModal'

const StatCard = ({ value, label, highlight }) => (
  <div style={{
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 14, padding: '1.25rem 1.5rem', textAlign: 'center', flex: 1, minWidth: 140,
  }}>
    <div style={{ fontSize: 26, fontWeight: 700, color: highlight || '#378ADD', marginBottom: 4 }}>{value}</div>
    <div style={{ fontSize: 12, color: '#64748B', fontWeight: 500 }}>{label}</div>
  </div>
)

const AppCard = ({ emoji, name, link, color }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" style={{
    display: 'flex', alignItems: 'center', gap: 10,
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12, padding: '0.75rem 1rem', textDecoration: 'none',
    transition: 'all 0.2s', cursor: 'pointer',
  }}
  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.background = `${color}15` }}
  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}>
    <span style={{ fontSize: 24 }}>{emoji}</span>
    <span style={{ color: '#CBD5E1', fontWeight: 600, fontSize: 14 }}>{name}</span>
    <span style={{ marginLeft: 'auto', color: color, fontSize: 12 }}>↗</span>
  </a>
)

export default function Home() {
  const { t, i18n } = useTranslation()
  const [showQuiz, setShowQuiz] = useState(false)
  const lang = i18n.language

  const apps = [
    { emoji: '🌿', name: 'Grass', link: 'https://app.grass.io/register?referralCode=6aqpqe5ZaPsmjRH', color: '#22c55e' },
    { emoji: '📡', name: 'UpRock', link: 'https://link.uprock.com/i/ef2a9170', color: '#ef4444' },
    { emoji: '⚖️', name: 'ME Pass', link: 'https://i.mec.me/?c=k989y21b', color: '#378ADD' },
    { emoji: '🌐', name: 'Atoshi', link: 'https://invite.atoshi.org/?code=XVEMZ7', color: '#a78bfa' },
    { emoji: '💬', name: 'VeryChat', link: 'https://invite.verychat.io/jefr', color: '#f97316' },
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        maxWidth: 900, margin: '0 auto', padding: '5rem 1.5rem 3rem',
        textAlign: 'center',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(24,95,165,0.15)', border: '1px solid rgba(55,138,221,0.3)',
          borderRadius: 100, padding: '6px 16px', marginBottom: '1.5rem',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }}/>
          <span style={{ color: '#60A5FA', fontSize: 13, fontWeight: 600 }}>{t('hero.badge')}</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', color: '#F1F5F9' }}>
          {t('hero.title')}<br/>
          <span style={{ color: '#BA7517' }}>{t('hero.titleGold')}</span>
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 17, color: '#94A3B8', maxWidth: 600, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          {t('hero.subtitle')}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <button onClick={() => setShowQuiz(true)} className="btn-gold" style={{
            padding: '14px 32px', fontSize: 16, border: 'none', cursor: 'pointer',
          }}>
            {t('hero.cta')} →
          </button>
          <Link to="/airdrops" className="btn-blue" style={{
            padding: '14px 32px', fontSize: 16, textDecoration: 'none',
          }}>
            {lang === 'fr' ? 'Voir les airdrops' : 'View airdrops'} ↗
          </Link>
        </div>
        <p style={{ color: '#475569', fontSize: 13 }}>{t('hero.ctaSub')}</p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 16, marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <StatCard value="2,400+" label={t('hero.stats.users')} />
          <StatCard value="5" label={t('hero.stats.airdrops')} highlight="#22c55e" />
          <StatCard value={t('hero.stats.claimedVal')} label={t('hero.stats.claimed')} highlight="#BA7517" />
        </div>
      </section>

      {/* Apps grid */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1.5rem' }}>
        <h2 style={{ textAlign: 'center', color: '#94A3B8', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          {lang === 'fr' ? 'Projets partenaires' : 'Partner projects'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10 }}>
          {apps.map(a => <AppCard key={a.name} {...a} />)}
        </div>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: 900, margin: '3rem auto', padding: '0 1.5rem' }}>
        <h2 style={{ textAlign: 'center', color: '#E2EBF5', fontSize: 26, fontWeight: 700, marginBottom: '2.5rem' }}>
          {lang === 'fr' ? 'Comment ça marche ?' : 'How does it work?'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {[
            { step: '01', icon: '📚', title: lang === 'fr' ? 'Apprends' : 'Learn', desc: lang === 'fr' ? 'Suis les modules E-Learning adaptés à ton niveau. Gagne des XP en complétant les quiz.' : 'Follow E-Learning modules adapted to your level. Earn XP by completing quizzes.' },
            { step: '02', icon: '🚀', title: lang === 'fr' ? 'Participe' : 'Participate', desc: lang === 'fr' ? 'Rejoins les projets airdrop via les guides pas-à-pas. Moins de 15 min par jour.' : 'Join airdrop projects via step-by-step guides. Less than 15 min per day.' },
            { step: '03', icon: '💰', title: lang === 'fr' ? 'Gagne' : 'Earn', desc: lang === 'fr' ? 'Suis tes gains dans le tracker et convertis tes points en tokens lors des TGE.' : 'Track your gains in the tracker and convert your points to tokens at TGE.' },
          ].map(s => (
            <div key={s.step} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: '1.75rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
                <span style={{ fontSize: 28 }}>{s.icon}</span>
                <span style={{ color: '#185FA5', fontSize: 11, fontWeight: 700, letterSpacing: 2 }}>{s.step}</span>
              </div>
              <h3 style={{ color: '#E2EBF5', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA banner */}
      <section style={{
        maxWidth: 900, margin: '3rem auto 5rem', padding: '0 1.5rem',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(24,95,165,0.2), rgba(186,117,23,0.15))',
          border: '1px solid rgba(55,138,221,0.2)',
          borderRadius: 20, padding: '3rem', textAlign: 'center',
        }}>
          <h2 style={{ color: '#E2EBF5', fontSize: 26, fontWeight: 700, marginBottom: 12 }}>
            {lang === 'fr' ? 'Prêt à rejoindre l\'aventure Web3 ?' : 'Ready to join the Web3 adventure?'}
          </h2>
          <p style={{ color: '#94A3B8', marginBottom: '2rem', fontSize: 15 }}>
            {lang === 'fr' ? 'Commence maintenant, c\'est gratuit.' : 'Start now, it\'s free.'}
          </p>
          <button onClick={() => setShowQuiz(true)} className="btn-gold" style={{ padding: '14px 36px', fontSize: 16, border: 'none', cursor: 'pointer' }}>
            {lang === 'fr' ? 'Passer le quiz d\'orientation →' : 'Take the orientation quiz →'}
          </button>
        </div>
      </section>

      {showQuiz && <QuizModal onClose={() => setShowQuiz(false)} />}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
