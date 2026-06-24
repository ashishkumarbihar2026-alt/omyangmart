import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
  { id: 1, name: 'Aloo (1kg)', price: 30, emoji: '🥔', rating: 4.5, time: '10-15 min', off: '10% OFF' },
  { id: 2, name: 'Tamatar (1kg)', price: 25, emoji: '🍅', rating: 4.3, time: '10-15 min', off: '15% OFF' },
  { id: 3, name: 'Pyaz (1kg)', price: 40, emoji: '🧅', rating: 4.6, time: '10-15 min', off: '5% OFF' },
  { id: 4, name: 'Doodh (1L)', price: 60, emoji: '🥛', rating: 4.8, time: '10-15 min', off: '20% OFF' },
  { id: 5, name: 'Bread', price: 45, emoji: '🍞', rating: 4.2, time: '10-15 min', off: '10% OFF' },
  { id: 6, name: 'Ande (12pcs)', price: 80, emoji: '🥚', rating: 4.7, time: '10-15 min', off: '12% OFF' },
]

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Poppins',sans-serif}
  @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-40px)}}
  @keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,30px)}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
  @keyframes pulse{0%,100%{box-shadow:0 0 15px #d4a01744}50%{box-shadow:0 0 30px #d4a017aa}}
  .orb1{position:fixed;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,#d4a01720,transparent);top:-150px;right:-100px;animation:float1 8s ease-in-out infinite;pointer-events:none;z-index:0}
  .orb2{position:fixed;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,#ffd70015,transparent);bottom:-100px;left:-100px;animation:float2 10s ease-in-out infinite;pointer-events:none;z-index:0}
  .search-bar{width:100%;padding:13px 16px 13px 44px;border-radius:14px;border:1px solid rgba(212,160,23,0.3);background:rgba(255,255,255,0.07);color:white;font-size:14px;font-family:'Poppins',sans-serif;outline:none;box-sizing:border-box}
  .offer-badge{background:linear-gradient(135deg,#d4a017,#ffd700);color:#1a3a1a;font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px}
  .card{background:rgba(255,255,255,0.05);backdrop-filter:blur(20px);border:1px solid rgba(212,160,23,0.2);border-radius:18px;padding:16px;animation:fadeUp 0.4s ease forwards;transition:transform 0.3s;cursor:pointer}
  .card:active{transform:scale(0.97)}
  .add-btn{background:linear-gradient(135deg,#d4a017,#ffd700);color:#1a3a1a;border:none;padding:9px 0;border-radius:25px;font-weight:700;font-size:13px;width:100%;cursor:pointer;margin-top:10px;font-family:'Poppins',sans-serif;animation:pulse 2s infinite}
  .cart-fab{position:fixed;bottom:24px;right:20px;background:linear-gradient(135deg,#d4a017,#ffd700);color:#1a3a1a;border:none;padding:14px 20px;border-radius:30px;font-weight:700;font-size:15px;cursor:pointer;z-index:100;box-shadow:0 8px 30px #d4a01755;font-family:'Poppins',sans-serif}
  .section-title{font-size:17px;font-weight:700;margin:20px 0 12px;color:#ffd700}
  .offer-card{background:rgba(212,160,23,0.1);backdrop-filter:blur(20px);border:1px solid rgba(212,160,23,0.25);border-radius:16px;padding:16px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
  .apply-btn{background:linear-gradient(135deg,#d4a017,#ffd700);color:#1a3a1a;padding:8px 14px;border-radius:20px;font-size:12px;font-weight:700;border:none;cursor:pointer;font-family:'Poppins',sans-serif}
`

export default function Home() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  const addToCart = (product) => setCart([...cart, product])

  return (
    <div style={{ background: 'linear-gradient(160deg,#0a1f0a 0%,#0d2b0d 40%,#0a1f0a 100%)', minHeight: '100vh', color: 'white', paddingBottom: '100px', fontFamily: 'Poppins,sans-serif' }}>
      <style>{styles}</style>
      <div className="orb1" /><div className="orb2" />

      {/* Header */}
      <div style={{ background: 'rgba(10,40,10,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(212,160,23,0.2)', padding: '16px 20px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: '800', background: 'linear-gradient(135deg,#d4a017,#ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🛒 OMYangmart</div>
            <div style={{ fontSize: '11px', color: '#d4a01788', letterSpacing: '1px' }}>📍 Aapke Ghar Tak</div>
          </div>
          <div style={{ background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.3)', borderRadius: '20px', padding: '6px 14px', fontSize: '13px', fontWeight: '600', color: '#ffd700' }}>
            🛒 {cart.length}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px' }}>🔍</span>
          <input className="search-bar" placeholder="Grocery dhundo..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      <div style={{ padding: '16px 20px', position: 'relative', zIndex: 1 }}>
        {/* Offers */}
        <div className="section-title">🏷️ Aaj Ke Offers</div>
        <div className="offer-card">
          <div>
            <div style={{ fontWeight: '700', fontSize: '15px', color: '#ffd700' }}>FLAT ₹30 OFF</div>
            <div style={{ fontSize: '12px', color: '#ffffff66' }}>₹199 se upar ke orders par</div>
          </div>
          <button className="apply-btn">APPLY</button>
        </div>
        <div className="offer-card">
          <div>
            <div style={{ fontWeight: '700', fontSize: '15px', color: '#ffd700' }}>FREE DELIVERY</div>
            <div style={{ fontSize: '12px', color: '#ffffff66' }}>₹299 se upar ke orders par</div>
          </div>
          <button className="apply-btn">APPLY</button>
        </div>

        {/* Products */}
        <div className="section-title">🥦 Fresh Grocery</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {filtered.map((p, i) => (
            <div key={p.id} className="card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span className="offer-badge">{p.off}</span>
                <span style={{ fontSize: '10px', color: '#ffffff44' }}>⏱ {p.time}</span>
              </div>
              <div style={{ fontSize: '42px', textAlign: 'center', margin: '8px 0' }}>{p.emoji}</div>
              <div style={{ fontWeight: '600', fontSize: '13px', textAlign: 'center' }}>{p.name}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '6px 0' }}>
                <span style={{ background: 'linear-gradient(135deg,#d4a017,#ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '700', fontSize: '16px' }}>₹{p.price}</span>
                <span style={{ fontSize: '11px', color: '#ffd700' }}>⭐ {p.rating}</span>
              </div>
              <button className="add-btn" onClick={() => addToCart(p)}>+ Add</button>
            </div>
          ))}
        </div>
      </div>

      {cart.length > 0 && (
        <button className="cart-fab" onClick={() => navigate('/cart')}>
          🛒 {cart.length} items · Cart Dekho →
        </button>
      )}
    </div>
  )
      }
