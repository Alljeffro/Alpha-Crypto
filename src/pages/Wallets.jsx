import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { WALLET_GUIDES } from '../data/projects'

export default function Wallets() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const [active, setActive] = useState(null)

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ color: '#E2EBF5', fontWeight: 800, fontSize: 32, marginBottom: 8 }}>{t('wallets.title')}</h1>
        <p style={{ color: '#64748B', fontSize: 16 }}>{t('wallets.subtitle')}</p>
      </div>

      {/* Wallet cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: '3rem' }}>
        {WALLET_GUIDES.map(w => (
          <div key={w.id} style={{
            background: 'rgba(255,255,255,0.04)', border: `1px solid ${active === w.id ? w.color + '50' : 'rgba(255,255,255,0.08)'}`,
            borderRadius: 16, padding: '1.5rem', cursor: 'pointer', transition: 'all 0.2s',
          }}
          onClick={() => setActive(active === w.id ? null : w.id)}
          onMouseEnter={e => { if (active !== w.id) e.currentTarget.style.borderColor = w.color + '40' }}
          onMouseLeave={e => { if (active !== w.id) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 32 }}>{w.emoji}</span>
                <div>
                  <h3 style={{ color: '#E2EBF5', fontWeight: 700, fontSize: 17, margin: 0 }}>{w.name}</h3>
                  <span style={{ color: '#64748B', fontSize: 12 }}>{w.type}</span>
                </div>
              </div>
              <span style={{ fontSize: 18, color: '#64748B', transition: 'transform 0.2s', display: 'inline-block', transform: active === w.id ? 'rotate(180deg)' : 'none' }}>▼</span>
            </div>

            {/* Best for */}
            <div style={{ background: `${w.color}15`, border: `1px solid ${w.color}30`, borderRadius: 8, padding: '8px 12px', marginBottom: '1rem' }}>
              <span style={{ color: w.color, fontSize: 12, fontWeight: 600 }}>
                ✓ {lang === 'fr' ? w.bestFor : w.bestForEn}
              </span>
            </div>

            {/* Expanded content */}
            {active === w.id && (
              <div style={{ marginTop: '1rem' }}>
                {/* Pros */}
                {(lang === 'fr' ? w.pros : w.prosEn).length > 0 && (
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ color: '#22c55e', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>✅ {lang === 'fr' ? 'Avantages' : 'Pros'}</p>
                    {(lang === 'fr' ? w.pros : w.prosEn).map((p, i) => (
                      <p key={i} style={{ color: '#94A3B8', fontSize: 13, margin: '3px 0', paddingLeft: 12 }}>• {p}</p>
                    ))}
                  </div>
                )}
                {/* Cons */}
                {(lang === 'fr' ? w.cons : w.consEn).length > 0 && (
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ color: '#ef4444', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>⚠️ {lang === 'fr' ? 'Inconvénients' : 'Cons'}</p>
                    {(lang === 'fr' ? w.cons : w.consEn).map((c, i) => (
                      <p key={i} style={{ color: '#94A3B8', fontSize: 13, margin: '3px 0', paddingLeft: 12 }}>• {c}</p>
                    ))}
                  </div>
                )}
                {/* Steps */}
                <div>
                  <p style={{ color: '#378ADD', fontSize: 12, fontWeight: 700, marginBottom: 8 }}>📋 {lang === 'fr' ? 'Guide de démarrage' : 'Getting started guide'}</p>
                  {(lang === 'fr' ? w.guide : w.guideEn).map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6, alignItems: 'flex-start' }}>
                      <span style={{ background: `${w.color}20`, color: w.color, fontSize: 10, fontWeight: 700, width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i+1}</span>
                      <span style={{ color: '#94A3B8', fontSize: 13, lineHeight: 1.5 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Security warning */}
      <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 16, padding: '1.5rem' }}>
        <h3 style={{ color: '#ef4444', fontWeight: 700, fontSize: 16, marginBottom: '0.75rem' }}>
          🔐 {lang === 'fr' ? 'Règle d\'or : protège ta seed phrase' : "Golden rule: protect your seed phrase"}
        </h3>
        <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.65 }}>
          {lang === 'fr'
            ? "Ta seed phrase (12 ou 24 mots) est la clé de ton portefeuille. Personne — aucun projet, aucun support, aucun ami — ne te demandera jamais cette phrase. Si quelqu'un te la demande, c'est une arnaque. Note-la sur papier, conserve-la en lieu sûr, et n'en fais jamais de photo numérique."
            : "Your seed phrase (12 or 24 words) is the key to your wallet. Nobody — no project, no support, no friend — will ever ask for this phrase. If someone asks, it's a scam. Write it on paper, keep it safe, and never take a digital photo of it."}
        </p>
      </div>
    </div>
  )
}
