import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function QuizModal({ onClose }) {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [result, setResult] = useState(null)
  const lang = i18n.language

  const questions = [
    { text: t('quiz.q1'), options: lang === 'fr' ? t('quiz.q1a', { returnObjects: true }) : t('quiz.q1a', { returnObjects: true }) },
    { text: t('quiz.q2'), options: t('quiz.q2a', { returnObjects: true }) },
    { text: t('quiz.q3'), options: t('quiz.q3a', { returnObjects: true }) },
  ]

  const computeResult = (allAnswers) => {
    const total = allAnswers.reduce((a, b) => a + b, 0)
    if (total <= 1) return 'beginner'
    if (total <= 3) return 'intermediate'
    return 'advanced'
  }

  const handleNext = () => {
    if (selected === null) return
    const newAnswers = [...answers, selected]
    if (step < 2) {
      setAnswers(newAnswers)
      setStep(step + 1)
      setSelected(null)
    } else {
      const r = computeResult(newAnswers)
      setResult(r)
    }
  }

  const handleFinish = () => {
    if (result === 'beginner') navigate('/learn')
    else if (result === 'intermediate') navigate('/airdrops')
    else navigate('/tracker')
    onClose()
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
    }} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: '#0F2035', border: '1px solid rgba(55,138,221,0.3)',
        borderRadius: 20, padding: '2rem', maxWidth: 480, width: '100%',
      }}>
        {!result ? (
          <>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h2 style={{ color: '#E2EBF5', fontWeight: 700, fontSize: 20, margin: 0 }}>{t('quiz.title')}</h2>
                <p style={{ color: '#64748B', fontSize: 13, marginTop: 4 }}>{t('quiz.subtitle')}</p>
              </div>
              <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#64748B', fontSize: 20, cursor: 'pointer' }}>✕</button>
            </div>

            {/* Progress */}
            <div style={{ display: 'flex', gap: 6, marginBottom: '1.5rem' }}>
              {[0,1,2].map(i => (
                <div key={i} style={{
                  flex: 1, height: 4, borderRadius: 2,
                  background: i <= step ? '#185FA5' : 'rgba(255,255,255,0.1)',
                  transition: 'background 0.3s',
                }}/>
              ))}
            </div>

            {/* Question */}
            <p style={{ color: '#CBD5E1', fontWeight: 600, fontSize: 16, marginBottom: '1rem' }}>
              {step + 1}. {questions[step].text}
            </p>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: '1.5rem' }}>
              {questions[step].options.map((opt, i) => (
                <button key={i} onClick={() => setSelected(i)} style={{
                  padding: '12px 16px', borderRadius: 10, textAlign: 'left',
                  border: `1px solid ${selected === i ? '#378ADD' : 'rgba(255,255,255,0.1)'}`,
                  background: selected === i ? 'rgba(55,138,221,0.15)' : 'rgba(255,255,255,0.03)',
                  color: selected === i ? '#60A5FA' : '#94A3B8',
                  cursor: 'pointer', fontSize: 14, fontWeight: selected === i ? 600 : 400,
                  transition: 'all 0.15s',
                }}>
                  {opt}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button onClick={handleNext} disabled={selected === null} className="btn-blue" style={{
              width: '100%', padding: '12px', fontSize: 15,
              opacity: selected === null ? 0.4 : 1, cursor: selected === null ? 'not-allowed' : 'pointer',
              border: 'none',
            }}>
              {step < 2 ? t('quiz.next') : t('quiz.finish')} →
            </button>
          </>
        ) : (
          /* Result */
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 56, marginBottom: '1rem' }}>
              {result === 'beginner' ? '🌱' : result === 'intermediate' ? '🚀' : '⚡'}
            </div>
            <h2 style={{ color: '#E2EBF5', fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
              {t(`quiz.result.${result}`)}
            </h2>
            <p style={{ color: '#64748B', fontSize: 14, marginBottom: '2rem' }}>
              {result === 'beginner'
                ? (lang === 'fr' ? 'Nous t\'orientons vers les modules E-Learning.' : 'We redirect you to E-Learning modules.')
                : result === 'intermediate'
                ? (lang === 'fr' ? 'Tu es prêt pour les guides Airdrops !' : 'You\'re ready for the Airdrop guides!')
                : (lang === 'fr' ? 'Accède directement à ton Tracker de gains.' : 'Go straight to your earnings tracker.')
              }
            </p>
            <button onClick={handleFinish} className="btn-gold" style={{ padding: '12px 32px', fontSize: 15, border: 'none', cursor: 'pointer' }}>
              {lang === 'fr' ? 'Voir mon contenu →' : 'See my content →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
