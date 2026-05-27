import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LEARN_MODULES } from '../data/projects'

function ModuleCard({ mod, onOpen, completed, xpEarned }) {
  const { i18n } = useTranslation()
  const lang = i18n.language
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)', border: `1px solid ${completed ? mod.color + '60' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: 16, padding: '1.5rem', cursor: 'pointer', transition: 'all 0.2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = mod.color + '80'; e.currentTarget.style.background = mod.colorBg }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = completed ? mod.color + '60' : 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
    onClick={() => onOpen(mod)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <span style={{ fontSize: 36 }}>{mod.emoji}</span>
        <div style={{ display: 'flex', gap: 6, flexDirection: 'column', alignItems: 'flex-end' }}>
          {completed && <span style={{ background: mod.color + '20', color: mod.color, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100 }}>✓ {lang === 'fr' ? 'Terminé' : 'Done'}</span>}
          <span style={{ background: 'rgba(186,117,23,0.15)', color: '#BA7517', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100 }}>+{mod.xp} XP</span>
        </div>
      </div>
      <h3 style={{ color: '#E2EBF5', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{mod.name}</h3>
      <p style={{ color: '#64748B', fontSize: 13, marginBottom: '1rem' }}>
        {lang === 'fr' ? mod.difficulty : mod.difficultyEn} · {mod.lessons.length} {lang === 'fr' ? 'leçons' : 'lessons'} · {mod.quiz.length} {lang === 'fr' ? 'quiz' : 'quiz'}
      </p>
      <button style={{
        width: '100%', padding: '10px', borderRadius: 10,
        background: completed ? 'rgba(255,255,255,0.05)' : mod.colorBg,
        border: `1px solid ${mod.color}40`,
        color: mod.color, fontWeight: 600, fontSize: 13, cursor: 'pointer',
      }}>
        {completed ? (lang === 'fr' ? 'Revoir le module' : 'Review module') : (lang === 'fr' ? 'Commencer →' : 'Start →')}
      </button>
    </div>
  )
}

function ModuleView({ mod, onClose, onComplete }) {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const [phase, setPhase] = useState('lesson') // 'lesson' | 'quiz' | 'done'
  const [lessonIdx, setLessonIdx] = useState(0)
  const [quizIdx, setQuizIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const lesson = mod.lessons[lessonIdx]
  const quiz = mod.quiz[quizIdx]

  const nextLesson = () => {
    if (lessonIdx < mod.lessons.length - 1) { setLessonIdx(lessonIdx + 1) }
    else { setPhase('quiz') }
  }

  const handleAnswer = () => {
    if (selected === null) return
    const correct = selected === quiz.answer
    const newScore = correct ? score + 1 : score
    if (quizIdx < mod.quiz.length - 1) {
      setScore(newScore); setQuizIdx(quizIdx + 1); setSelected(null)
    } else {
      setScore(newScore); setShowResult(true)
    }
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: '#0F2035', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '2rem', maxWidth: 560, width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 28 }}>{mod.emoji}</span>
            <div>
              <h2 style={{ color: '#E2EBF5', fontWeight: 700, fontSize: 18, margin: 0 }}>{mod.name}</h2>
              <p style={{ color: '#64748B', fontSize: 12, margin: 0 }}>
                {phase === 'lesson' ? `${lang === 'fr' ? 'Leçon' : 'Lesson'} ${lessonIdx+1}/${mod.lessons.length}` : phase === 'quiz' ? `Quiz ${quizIdx+1}/${mod.quiz.length}` : ''}
              </p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#64748B', fontSize: 20, cursor: 'pointer' }}>✕</button>
        </div>

        {/* Lesson phase */}
        {phase === 'lesson' && (
          <>
            <div style={{ marginBottom: '0.5rem' }}>
              <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
                <div style={{ height: '100%', width: `${((lessonIdx+1)/mod.lessons.length)*100}%`, background: mod.color, borderRadius: 2, transition: 'width 0.3s' }}/>
              </div>
            </div>
            <h3 style={{ color: '#E2EBF5', fontWeight: 700, fontSize: 18, marginBottom: '1rem' }}>
              {lang === 'fr' ? lesson.title : lesson.titleEn}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.75, marginBottom: '2rem' }}>
              {lang === 'fr' ? lesson.content : lesson.contentEn}
            </p>
            <button onClick={nextLesson} style={{ width: '100%', padding: '12px', borderRadius: 10, background: mod.colorBg, border: `1px solid ${mod.color}50`, color: mod.color, fontWeight: 600, cursor: 'pointer', fontSize: 15 }}>
              {lessonIdx < mod.lessons.length - 1 ? (lang === 'fr' ? 'Leçon suivante →' : 'Next lesson →') : (lang === 'fr' ? 'Passer au quiz →' : 'Take the quiz →')}
            </button>
          </>
        )}

        {/* Quiz phase */}
        {phase === 'quiz' && !showResult && (
          <>
            <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
              <div style={{ height: '100%', width: `${((quizIdx+1)/mod.quiz.length)*100}%`, background: '#BA7517', borderRadius: 2, transition: 'width 0.3s' }}/>
            </div>
            <p style={{ color: '#CBD5E1', fontWeight: 600, fontSize: 16, marginBottom: '1rem' }}>
              {lang === 'fr' ? quiz.q : quiz.qEn}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: '1.5rem' }}>
              {(lang === 'fr' ? quiz.options : quiz.optionsEn).map((opt, i) => (
                <button key={i} onClick={() => setSelected(i)} style={{
                  padding: '12px 16px', borderRadius: 10, textAlign: 'left',
                  border: `1px solid ${selected === i ? '#BA7517' : 'rgba(255,255,255,0.1)'}`,
                  background: selected === i ? 'rgba(186,117,23,0.15)' : 'rgba(255,255,255,0.03)',
                  color: selected === i ? '#F59E0B' : '#94A3B8',
                  cursor: 'pointer', fontSize: 14, transition: 'all 0.15s',
                }}>
                  {opt}
                </button>
              ))}
            </div>
            <button onClick={handleAnswer} disabled={selected === null} style={{
              width: '100%', padding: '12px', borderRadius: 10,
              background: 'linear-gradient(135deg, #BA7517, #EF9F27)',
              border: 'none', color: '#fff', fontWeight: 600, cursor: selected === null ? 'not-allowed' : 'pointer',
              opacity: selected === null ? 0.4 : 1, fontSize: 15,
            }}>
              {lang === 'fr' ? 'Valider la réponse' : 'Submit answer'}
            </button>
          </>
        )}

        {/* Result */}
        {(phase === 'quiz' && showResult) && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 56, marginBottom: '1rem' }}>{score === mod.quiz.length ? '🏆' : score >= mod.quiz.length / 2 ? '⭐' : '💪'}</div>
            <h3 style={{ color: '#E2EBF5', fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
              {score}/{mod.quiz.length} {lang === 'fr' ? 'bonnes réponses' : 'correct answers'}
            </h3>
            <p style={{ color: '#64748B', fontSize: 14, marginBottom: '1.5rem' }}>
              +{mod.xp} XP {lang === 'fr' ? 'gagnés !' : 'earned!'}
            </p>
            {/* Affiliation CTA */}
            <div style={{ background: 'linear-gradient(135deg, rgba(24,95,165,0.15), rgba(186,117,23,0.1))', border: '1px solid rgba(55,138,221,0.2)', borderRadius: 14, padding: '1.25rem', marginBottom: '1.5rem' }}>
              <p style={{ color: '#CBD5E1', fontWeight: 600, fontSize: 15, marginBottom: '1rem' }}>
                {lang === 'fr' ? `Tu as compris ${mod.name} ? Rejoins-le maintenant et commence à gagner` : `You get ${mod.name}? Join now and start earning`}
              </p>
              <a href={mod.link} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ display: 'inline-block', padding: '10px 24px', fontSize: 14, textDecoration: 'none' }}>
                {lang === 'fr' ? `Rejoindre ${mod.name} →` : `Join ${mod.name} →`}
              </a>
            </div>
            <button onClick={() => { onComplete(mod.id, mod.xp); onClose() }} style={{ width: '100%', padding: '11px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8', cursor: 'pointer', fontSize: 14 }}>
              {lang === 'fr' ? 'Fermer et continuer' : 'Close and continue'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Learn() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const [activeModule, setActiveModule] = useState(null)
  const [completed, setCompleted] = useState({})
  const [totalXP, setTotalXP] = useState(0)

  const handleComplete = (id, xp) => {
    if (!completed[id]) {
      setCompleted(prev => ({ ...prev, [id]: true }))
      setTotalXP(prev => prev + xp)
    }
  }

  const doneCount = Object.keys(completed).length

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ color: '#E2EBF5', fontWeight: 800, fontSize: 32, marginBottom: 8 }}>{t('learn.title')}</h1>
        <p style={{ color: '#64748B', fontSize: 16 }}>{t('learn.subtitle')}</p>
      </div>

      {/* XP bar */}
      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '1.25rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div>
          <p style={{ color: '#64748B', fontSize: 12, margin: 0, fontWeight: 600 }}>TOTAL XP</p>
          <p style={{ color: '#BA7517', fontSize: 24, fontWeight: 800, margin: 0 }}>{totalXP} XP</p>
        </div>
        <div style={{ flex: 1, minWidth: 150 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ color: '#64748B', fontSize: 12 }}>{doneCount}/{LEARN_MODULES.length} {lang === 'fr' ? 'modules' : 'modules'}</span>
            <span style={{ color: '#BA7517', fontSize: 12, fontWeight: 600 }}>{Math.round((doneCount / LEARN_MODULES.length) * 100)}%</span>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.08)' }}>
            <div style={{ height: '100%', width: `${(doneCount / LEARN_MODULES.length) * 100}%`, background: 'linear-gradient(90deg, #BA7517, #EF9F27)', borderRadius: 4, transition: 'width 0.4s' }}/>
          </div>
        </div>
        {doneCount === LEARN_MODULES.length && (
          <span style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e', fontSize: 13, fontWeight: 700, padding: '6px 14px', borderRadius: 100 }}>
            🏆 {lang === 'fr' ? 'Tous les modules terminés !' : 'All modules done!'}
          </span>
        )}
      </div>

      {/* Modules grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
        {LEARN_MODULES.map(mod => (
          <ModuleCard key={mod.id} mod={mod} onOpen={setActiveModule} completed={!!completed[mod.id]} xpEarned={completed[mod.id] ? mod.xp : 0} />
        ))}
      </div>

      {activeModule && (
        <ModuleView mod={activeModule} onClose={() => setActiveModule(null)} onComplete={handleComplete} />
      )}
    </div>
  )
}
