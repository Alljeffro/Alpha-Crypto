import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AIRDROP_GUIDES } from '../data/projects'

const STATUS_CONFIG = {
  active:  { dot: '🟢', color: '#22c55e', bg: 'rgba(34,197,94,0.1)' },
  pending: { dot: '🟡', color: '#eab308', bg: 'rgba(234,179,8,0.1)' },
  ended:   { dot: '🔴', color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
}

function AirdropCard({ guide, onOpen }) {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const sc = STATUS_CONFIG[guide.status]
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 16, padding: '1.5rem', transition: 'all 0.2s', cursor: 'pointer',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = sc.color + '50'; e.currentTarget.style.background = sc.bg }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}>

      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 32 }}>{guide.emoji}</span>
          <div>
            <h3 style={{ color: '#E2EBF5', fontWeight: 700, fontSize: 18, margin: 0 }}>{guide.name}</h3>
            <span style={{ background: 'rgba(55,138,221,0.12)', color: '#60A5FA', fontSize: 11, padding: '2px 8px', borderRadius: 100, fontWeight: 600 }}>{guide.network}</span>
          </div>
        </div>
        <div style={{ background: sc.bg, border: `1px solid ${sc.color}30`, borderRadius: 100, padding: '4px 12px', fontSize: 12, fontWeight: 700, color: sc.color }}>
          {sc.dot} {lang === 'fr' ? guide.statusLabel : guide.statusLabelEn}
        </div>
      </div>

      {/* Infos */}
      <div style={{ display: 'flex', gap: 12, marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '6px 12px', fontSize: 12 }}>
          <span style={{ color: '#64748B' }}>⏱️ </span>
          <span style={{ color: '#94A3B8', fontWeight: 600 }}>{guide.timePerDay}</span>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '6px 12px', fontSize: 12 }}>
          <span style={{ color: '#64748B' }}>🪙 </span>
          <span style={{ color: '#94A3B8', fontWeight: 600 }}>{lang === 'fr' ? guide.cost : guide.costEn}</span>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => onOpen(guide)} style={{
          flex: 1, padding: '9px', borderRadius: 9, border: `1px solid ${sc.color}40`,
          background: sc.bg, color: sc.color, fontWeight: 600, cursor: 'pointer', fontSize: 13,
        }}>
          📖 {lang === 'fr' ? 'Voir le guide' : 'View guide'}
        </button>
        <a href={guide.link} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{
          flex: 1, padding: '9px', fontSize: 13, textDecoration: 'none', textAlign: 'center',
        }}>
          🚀 {lang === 'fr' ? 'Rejoindre' : 'Join'}
        </a>
      </div>
    </div>
  )
}

function GuideModal({ guide, onClose }) {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const sc = STATUS_CONFIG[guide.status]
  const steps = lang === 'fr' ? guide.steps : guide.stepsEn
  const [done, setDone] = useState([])
  const toggle = (i) => setDone(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: '#0F2035', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '2rem', maxWidth: 520, width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 36 }}>{guide.emoji}</span>
            <div>
              <h2 style={{ color: '#E2EBF5', fontWeight: 700, fontSize: 20, margin: 0 }}>{guide.name}</h2>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 4 }}>
                <span style={{ background: sc.bg, color: sc.color, fontSize: 11, padding: '2px 8px', borderRadius: 100, fontWeight: 700 }}>
                  {sc.dot} {lang === 'fr' ? guide.statusLabel : guide.statusLabelEn}
                </span>
                <span style={{ color: '#64748B', fontSize: 12 }}>⏱️ {guide.timePerDay}</span>
                <span style={{ color: '#64748B', fontSize: 12 }}>🪙 {lang === 'fr' ? guide.cost : guide.costEn}</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#64748B', fontSize: 20, cursor: 'pointer' }}>✕</button>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ color: '#64748B', fontSize: 12 }}>{lang === 'fr' ? 'Progression' : 'Progress'}</span>
            <span style={{ color: '#22c55e', fontSize: 12, fontWeight: 700 }}>{done.length}/{steps.length}</span>
          </div>
          <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.08)' }}>
            <div style={{ height: '100%', width: `${(done.length / steps.length) * 100}%`, background: '#22c55e', borderRadius: 3, transition: 'width 0.3s' }}/>
          </div>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: '2rem' }}>
          {steps.map((step, i) => (
            <div key={i} onClick={() => toggle(i)} style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              background: done.includes(i) ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${done.includes(i) ? '#22c55e30' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 10, padding: '12px', cursor: 'pointer', transition: 'all 0.2s',
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                background: done.includes(i) ? '#22c55e' : 'rgba(255,255,255,0.08)',
                border: `2px solid ${done.includes(i) ? '#22c55e' : 'rgba(255,255,255,0.2)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700, color: done.includes(i) ? '#fff' : '#64748B',
                transition: 'all 0.2s',
              }}>
                {done.includes(i) ? '✓' : i + 1}
              </div>
              <span style={{ color: done.includes(i) ? '#94A3B8' : '#CBD5E1', fontSize: 14, lineHeight: 1.5, textDecoration: done.includes(i) ? 'line-through' : 'none' }}>
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href={guide.link} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ display: 'block', textAlign: 'center', padding: '13px', fontSize: 15, textDecoration: 'none' }}>
          🚀 {lang === 'fr' ? `Rejoindre ${guide.name} maintenant →` : `Join ${guide.name} now →`}
        </a>
      </div>
    </div>
  )
}

export default function Airdrops() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const [filter, setFilter] = useState('all')
  const [activeGuide, setActiveGuide] = useState(null)

  const filtered = filter === 'all' ? AIRDROP_GUIDES : AIRDROP_GUIDES.filter(g => g.status === filter)
  const activeCount = AIRDROP_GUIDES.filter(g => g.status === 'active').length
  const pendingCount = AIRDROP_GUIDES.filter(g => g.status === 'pending').length

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ color: '#E2EBF5', fontWeight: 800, fontSize: 32, marginBottom: 8 }}>{t('airdrops.title')}</h1>
        <p style={{ color: '#64748B', fontSize: 16 }}>{t('airdrops.subtitle')}</p>
      </div>

      {/* Summary stats */}
      <div style={{ display: 'flex', gap: 12, marginBottom: '2rem', flexWrap: 'wrap' }}>
        {[
          { label: lang === 'fr' ? 'Airdrops actifs' : 'Active airdrops', value: activeCount, color: '#22c55e' },
          { label: lang === 'fr' ? 'En attente TGE' : 'Pending TGE', value: pendingCount, color: '#eab308' },
          { label: lang === 'fr' ? 'Tous gratuits' : 'All free', value: '100%', color: '#378ADD' },
        ].map(s => (
          <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1rem 1.5rem', minWidth: 140 }}>
            <div style={{ color: s.color, fontWeight: 800, fontSize: 24 }}>{s.value}</div>
            <div style={{ color: '#64748B', fontSize: 12, fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {['all','active','pending','ended'].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: '7px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: 'pointer',
            border: `1px solid ${filter === f ? '#378ADD' : 'rgba(255,255,255,0.1)'}`,
            background: filter === f ? 'rgba(55,138,221,0.15)' : 'transparent',
            color: filter === f ? '#60A5FA' : '#64748B',
          }}>
            {f === 'all' ? (lang === 'fr' ? 'Tous' : 'All') : f === 'active' ? (lang === 'fr' ? '🟢 Actifs' : '🟢 Active') : f === 'pending' ? (lang === 'fr' ? '🟡 En attente' : '🟡 Pending') : (lang === 'fr' ? '🔴 Terminés' : '🔴 Ended')}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {filtered.map(g => <AirdropCard key={g.id} guide={g} onOpen={setActiveGuide} />)}
      </div>

      {activeGuide && <GuideModal guide={activeGuide} onClose={() => setActiveGuide(null)} />}
    </div>
  )
}
