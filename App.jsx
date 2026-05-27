import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Airdrops from './pages/Airdrops'
import Wallets from './pages/Wallets'
import Tracker from './pages/Tracker'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/learn"    element={<Learn />} />
          <Route path="/airdrops" element={<Airdrops />} />
          <Route path="/wallets"  element={<Wallets />} />
          <Route path="/tracker"  element={<Tracker />} />
        </Routes>
      </main>
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
      }}>
        <p style={{ fontFamily: 'Georgia, serif', color: '#BA7517', fontWeight: 700, marginBottom: 6 }}>
          Alpha Crypto
        </p>
        <p style={{ color: '#475569', fontSize: 13 }}>Your gateway to Web3</p>
        <p style={{ color: '#334155', fontSize: 12, marginTop: 8 }}>
          Contenu éducatif uniquement — pas de conseil financier.
        </p>
      </footer>
    </>
  )
}
