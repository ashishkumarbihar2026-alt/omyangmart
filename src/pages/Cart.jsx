import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: 'white', padding: '16px' }}>
      <button onClick={() => navigate('/')} style={{ background: 'transparent', color: '#00ff88', border: '1px solid #00ff88', padding: '8px 16px', borderRadius: '20px', marginBottom: '20px' }}>
        ← Wapas
      </button>
      <h2 style={{ color: '#00ff88' }}>🛒 Mera Cart</h2>
      <p style={{ color: '#888' }}>Cart khali hai — products add karo!</p>
      <button onClick={() => navigate('/')} style={{ background: '#00ff88', color: '#000', border: 'none', padding: '12px 24px', borderRadius: '20px', fontWeight: 'bold', marginTop: '20px' }}>
        Shopping Karo
      </button>
    </div>
  )
}
