import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AFFILIATE_LINKS } from '../data/projects'

const DEFAULT_PROJECTS = [
  { id: 1, name: 'Grass',    emoji: '🌿', tokens: 0, estValue: 0, status: 'active',  link: AFFILIATE_LINKS.grass },
  { id: 2, name: 'UpRock',   emoji: '📡', tokens: 0, estValue: 0, status: 'active',  link: AFFILIATE_LINKS.uprock },
  { id: 3, name: 'Atoshi',   emoji: '🌐', tokens: 0, estValue: 0, status: 'active',  link: AFFILIATE_LINKS.atoshi },
  { id: 4, name: 'VeryChat', emoji: '💬', tokens: 0, estValue: 0, status: 'active',  link: AFFILIATE_LINKS.verychat },
  { id: 5, name: 'ME Pass',  emoji: '⚖️', tokens: 0, estValue: 0, status: 'pending', link: AFFILIATE_LINKS.mepass },
]

const STATUS_OPTIONS = ['active', 'pending', 'claimed', 'ended']
const STATUS_COLORS  = { active: '#22c55e', pending: '#eab308', claimed: '#378ADD', ended: '#64748B' }
const STATUS_LABELS  = { active: '🟢 Actif', pending: '🟡 En attente', claimed: '✅ Réclamé', ended: '🔴 Terminé' }
const STATUS_LABELS_EN = { active: '🟢 Active', pending: '🟡 Pending', claimed: '✅ Claimed', ended: '🔴 Ended' }

export default function Tracker() {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const [projects, setProjects] = useState(DEFAULT_PROJECTS)
  const [showAdd, setShowAdd] = useState(false)
  const [newName, setNewName] = useState('')
  const [newEmoji, setNewEmoji] = useState('🪙')
  const [editId, setEditId] = useState(null)

  const sl = lang === 'fr' ? STATUS_LABELS : STATUS_LABELS_EN

  const totalEst = projects.reduce((acc, p) => acc + Number(p.estValue || 0), 0)
  const activeCount = projects.filter(p => p.status === 'active').length
  const claimedCount = projects.filter(p => p.status === 'claimed').length

  const update = (id, field, value) =>
    setProjects(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p))

  const addProject = () => {
    if (!newName.trim()) return
    setProjects(prev => [...prev, {
      id: Date.now(), name: newName.trim(), emoji: newEmoji,
      tokens: 0, estValue: 0, status: 'active', link: ''
    }])
    setNewName(''); setNewEmoji('🪙'); setShowAdd(false)
  }

  const removeProject = (id) => setProjects(prev => prev.filter(p => p.id !== id))

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ color: '#E2EBF5', fontWeight: 800, fontSize: 32, marginBottom: 6 }}>
            {lang === 'fr' ? '📊 Tracker de gains' : '📊 Earnings Tracker'}
          </h1>
          <p style={{ color: '#64748B', fontSize: 16 }}>
            {lang === 'fr' ? 'Suis tes airdrops et estime tes revenus potentiels.' : 'Track your airdrops and estimate potential revenue.'}
          </p>
        </div>
        <button onClick={() => setShowAdd(true)} className="btn-gold" style={{ padding: '10px 20px', fontSize: 14, border: 'none', cursor: 'pointer' }}>
          + {lang === 'fr' ? 'Ajouter un projet' : 'Add project'}
        </button>
      </div>

      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 12, marginBottom: '2rem' }}>
        {[
          { label: lang === 'fr' ? 'Valeur estimée totale' : 'Total estimated value', value: `$${totalEst.toFixed(2)}`, color: '#BA7517' },
          { label: lang === 'fr' ? 'Projets actifs' : 'Active projects', value: activeCount, color: '#22c55e' },
          { label: lang === 'fr' ? 'Projets réclamés' : 'Claimed projects', value: claimedCount, color: '#378ADD' },
          { label: lang === 'fr' ? 'Total projets' : 'Total projects', value: projects.length, color: '#a78bfa' },
        ].map(s => (
          <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '1.25rem' }}>
            <div style={{ color: s.color, fontWeight: 800, fontSize: 26, marginBottom: 4 }}>{s.value}</div>
            <div style={{ color: '#64748B', fontSize: 12, fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Table desktop */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                lang === 'fr' ? 'Projet' : 'Project',
                lang === 'fr' ? 'Tokens farmés' : 'Farmed tokens',
                lang === 'fr' ? 'Valeur est. ($)' : 'Est. value ($)',
                'Statut',
                'Actions',
              ].map(h => (
                <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#64748B', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map(p => (
              <tr key={p.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>

                {/* Project name */}
                <td style={{ padding: '12px', minWidth: 140 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 22 }}>{p.emoji}</span>
                    <div>
                      <span style={{ color: '#E2EBF5', fontWeight: 600, fontSize: 14 }}>{p.name}</span>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#378ADD', fontSize: 11 }}>↗ {lang === 'fr' ? 'Rejoindre' : 'Join'}</a>
                      )}
                    </div>
                  </div>
                </td>

                {/* Tokens */}
                <td style={{ padding: '12px', minWidth: 140 }}>
                  <input
                    type="number" min="0" value={p.tokens}
                    onChange={e => update(p.id, 'tokens', e.target.value)}
                    style={{
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 8, padding: '6px 10px', color: '#E2EBF5', fontSize: 14,
                      width: 110, outline: 'none',
                    }}
                  />
                </td>

                {/* Est value */}
                <td style={{ padding: '12px', minWidth: 140 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ color: '#64748B', fontSize: 14 }}>$</span>
                    <input
                      type="number" min="0" step="0.01" value={p.estValue}
                      onChange={e => update(p.id, 'estValue', e.target.value)}
                      style={{
                        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: 8, padding: '6px 10px', color: '#BA7517', fontSize: 14,
                        width: 100, outline: 'none', fontWeight: 600,
                      }}
                    />
                  </div>
                </td>

                {/* Status */}
                <td style={{ padding: '12px', minWidth: 150 }}>
                  <select
                    value={p.status}
                    onChange={e => update(p.id, 'status', e.target.value)}
                    style={{
                      background: `${STATUS_COLORS[p.status]}15`,
                      border: `1px solid ${STATUS_COLORS[p.status]}40`,
                      borderRadius: 8, padding: '6px 10px',
                      color: STATUS_COLORS[p.status], fontSize: 13, fontWeight: 600,
                      cursor: 'pointer', outline: 'none',
                    }}>
                    {STATUS_OPTIONS.map(s => (
                      <option key={s} value={s} style={{ background: '#0F2035', color: '#E2EBF5' }}>{sl[s]}</option>
                    ))}
                  </select>
                </td>

                {/* Actions */}
                <td style={{ padding: '12px' }}>
                  <button onClick={() => removeProject(p.id)} style={{
                    background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                    borderRadius: 8, padding: '6px 10px', color: '#ef4444', cursor: 'pointer', fontSize: 13,
                  }}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total row */}
      <div style={{
        marginTop: 12, background: 'rgba(186,117,23,0.08)', border: '1px solid rgba(186,117,23,0.2)',
        borderRadius: 12, padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8,
      }}>
        <span style={{ color: '#94A3B8', fontWeight: 600 }}>
          {lang === 'fr' ? '💰 Valeur estimée totale' : '💰 Total estimated value'}
        </span>
        <span style={{ color: '#BA7517', fontWeight: 800, fontSize: 24 }}>${totalEst.toFixed(2)}</span>
      </div>

      {/* Disclaimer */}
      <p style={{ color: '#334155', fontSize: 12, marginTop: '1rem', textAlign: 'center' }}>
        {lang === 'fr'
          ? '⚠️ Les valeurs sont des estimations personnelles. Les prix des tokens peuvent varier. Pas un conseil financier.'
          : '⚠️ Values are personal estimates. Token prices may vary. Not financial advice.'}
      </p>

      {/* Add project modal */}
      {showAdd && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
        onClick={e => e.target === e.currentTarget && setShowAdd(false)}>
          <div style={{ background: '#0F2035', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '2rem', maxWidth: 400, width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#E2EBF5', fontWeight: 700, fontSize: 18, margin: 0 }}>
                {lang === 'fr' ? '+ Ajouter un projet' : '+ Add a project'}
              </h3>
              <button onClick={() => setShowAdd(false)} style={{ background: 'none', border: 'none', color: '#64748B', fontSize: 20, cursor: 'pointer' }}>✕</button>
            </div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
              <input
                value={newEmoji} onChange={e => setNewEmoji(e.target.value)}
                placeholder="🪙" maxLength={2}
                style={{ width: 52, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '10px', color: '#E2EBF5', fontSize: 20, textAlign: 'center', outline: 'none' }}
              />
              <input
                value={newName} onChange={e => setNewName(e.target.value)}
                placeholder={lang === 'fr' ? 'Nom du projet' : 'Project name'}
                style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '10px 14px', color: '#E2EBF5', fontSize: 14, outline: 'none' }}
                onKeyDown={e => e.key === 'Enter' && addProject()}
              />
            </div>
            <button onClick={addProject} className="btn-gold" style={{ width: '100%', padding: '11px', fontSize: 15, border: 'none', cursor: 'pointer' }}>
              {lang === 'fr' ? 'Ajouter →' : 'Add →'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
