import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
  { id: 1, name: 'Aloo (1kg)', price: 30, emoji: '🥔' },
  { id: 2, name: 'Tamatar (1kg)', price: 25, emoji: '🍅' },
  { id: 3, name: 'Pyaz (1kg)', price: 40, emoji: '🧅' },
  { id: 4, name: 'Doodh (1L)', price: 60, emoji: '🥛' },
  { id: 5, name: 'Bread', price: 45, emoji: '🍞' },
  { id: 6, name: 'Ande (12pcs)', price: 80, emoji: '🥚' },
]

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Poppins', sans-serif; }
  @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-40px) scale(1.1)} }
  @keyframes float2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-20px,30px) scale(0.9)} }
  @keyframes float3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(15px,-25px)} }
  @keyframes fadeIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pulse { 0%,100%{box-shadow:0 0 20px #00ff8844} 50%{box-shadow:0 0 40px #00ff88aa} }
  .orb1{position:fixed;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,#00ff4420,transparent);top:-100px;left:-100px;animation:float1 8s ease-in-out infinite;pointer-events:none;z-index:0}
  .orb2{position:fixed;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle,#00aaff20,transparent);bottom:-80px;right:-80px;animation:float2 10s ease-in-out infinite;pointer-events:none;z-index:0}
  .orb3{position:fixed;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,#aa00ff20,transparent);top:50%;left:50%;animation:float3 6s ease-in-out infinite;pointer-events:none;z-index:0}
  .card{background:rgba(255,255,255,0.05);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:20px;text-align:center;animation:fadeIn 0.5s ease forwards;transition:transform 0.3s,box-shadow 0.3s}
  .card:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(0,255,136,0.15)}
  .add-btn{background:linear-gradient(135deg,#00ff88,#00aaff);color:#000;border:none;padding:10px 0;border-radius:30px;font-weight:700;font-size:14px;width:100%;cursor:pointer;margin-top:10px;animation:pulse 2s infinite;font-family:'Poppins',sans-serif}
  .cart-btn{background:linear-gradient(135deg,#00ff88,#00aaff);color:#000;border:none;padding:10px 20px;border-radius:30px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif}
  .header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;position:relative;z-index:1}
`

export default function Home() {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #020c06 0%, #041a0e 50%, #020c06 100%)', minHeight: '100vh', color: 'white', padding: '20px', fontFamily: 'Poppins, sans-serif' }}>
      <style>{styles}</style>
      <div className="orb1" /><div className="orb2" /><div className="orb3" />
      <div className="header">
        <div>
          <div style={{ fontSize: '22px', fontWeight: '700', background: 'linear-gradient(135deg,#00ff88,#00aaff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🛒 OMYangmart</div>
          <div style={{ fontSize: '11px', color: '#ffffff44', letterSpacing: '2px' }}>FRESH GROCERY</div>
        </div>
        <button className="cart-btn" onClick={() => navigate('/cart')}>
          🛒 {cart.length}
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', position: 'relative', zIndex: 1 }}>
        {products.map((p, i) => (
          <div key={p.id} className="card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div style={{ fontSize: '44px', marginBottom: '8px' }}>{p.emoji}</div>
            <div style={{ fontWeight: '600', fontSize: '13px', marginBottom: '4px' }}>{p.name}</div>
            <div style={{ background: 'linear-gradient(135deg,#00ff88,#00aaff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '700', fontSize: '16px' }}>₹{p.price}</div>
            <button className="add-btn" onClick={() => addToCart(p)}>+ Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}