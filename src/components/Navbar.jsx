import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/',         label: t('nav.home') },
    { to: '/learn',    label: t('nav.learn') },
    { to: '/airdrops', label: t('nav.airdrops') },
    { to: '/wallets',  label: t('nav.wallets') },
    { to: '/tracker',  label: t('nav.tracker') },
  ]

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(12,26,46,0.92)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: '0 1.5rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="36" height="36" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="12" fill="#185FA5"/>
            <path d="M14 32 C14 20 22 12 30 12 C38 12 35 22 32 32 C29 42 32 52 40 52 C48 52 50 44 50 32 C50 20 42 12 34 12 C26 12 29 22 32 32 C35 42 38 52 30 52 C22 52 14 44 14 32 Z" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M27 27 C29.5 29.5 32 32 34.5 34.5" fill="none" stroke="#BA7517" strokeWidth="5" strokeLinecap="round"/>
            <path d="M34.5 29.5 C32 32 29.5 34.5 27 37" fill="none" stroke="#BA7517" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 18, color: '#E2EBF5', letterSpacing: 1 }}>
            Alpha <span style={{ color: '#BA7517' }}>Crypto</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              padding: '6px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
              textDecoration: 'none', transition: 'all 0.15s',
              color: location.pathname === l.to ? '#378ADD' : '#94A3B8',
              background: location.pathname === l.to ? 'rgba(55,138,221,0.12)' : 'transparent',
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={toggleLang} style={{
            padding: '5px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)',
            background: 'transparent', color: '#94A3B8', fontSize: 13, fontWeight: 600,
            cursor: 'pointer', transition: 'all 0.15s',
          }}>
            {i18n.language === 'fr' ? 'EN' : 'FR'}
          </button>
          <Link to="/learn" className="btn-gold" style={{
            padding: '8px 18px', fontSize: 14, textDecoration: 'none', display: 'inline-block'
          }}>
            {t('nav.start')} →
          </Link>
          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} style={{
            display: 'none', background: 'none', border: 'none', color: '#94A3B8',
            fontSize: 24, cursor: 'pointer',
          }} className="hamburger" aria-label="Menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '1rem 0',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{
              padding: '10px 16px', borderRadius: 8, fontSize: 15,
              textDecoration: 'none', color: '#CBD5E1',
              background: location.pathname === l.to ? 'rgba(55,138,221,0.1)' : 'transparent',
            }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
