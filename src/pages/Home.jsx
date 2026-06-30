import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const products = [
  { id: 1, name: 'Aloo (1kg)', price: 30, mrp: 40, emoji: '🥔', rating: 4.5, time: '10 min', off: 25, unit: '1 kg' },
  { id: 2, name: 'Tamatar (1kg)', price: 25, mrp: 35, emoji: '🍅', rating: 4.3, time: '10 min', off: 29, unit: '1 kg' },
  { id: 3, name: 'Pyaz (1kg)', price: 40, mrp: 50, emoji: '🧅', rating: 4.6, time: '10 min', off: 20, unit: '1 kg' },
  { id: 4, name: 'Doodh (1L)', price: 60, mrp: 70, emoji: '🥛', rating: 4.8, time: '10 min', off: 14, unit: '1 L' },
  { id: 5, name: 'Bread', price: 45, mrp: 55, emoji: '🍞', rating: 4.2, time: '10 min', off: 18, unit: '1 Pack' },
  { id: 6, name: 'Ande (12pcs)', price: 80, mrp: 96, emoji: '🥚', rating: 4.7, time: '10 min', off: 17, unit: '12 pcs' },
  { id: 7, name: 'Gajar (500g)', price: 20, mrp: 30, emoji: '🥕', rating: 4.4, time: '10 min', off: 33, unit: '500 g' },
  { id: 8, name: 'Palak (250g)', price: 15, mrp: 20, emoji: '🥬', rating: 4.1, time: '10 min', off: 25, unit: '250 g' },
]

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Poppins',sans-serif;background:#f8f8f8}
  .header{background:white;padding:12px 16px;position:sticky;top:0;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,0.08)}
  .search-box{display:flex;align-items:center;background:#f0f0f0;border-radius:12px;padding:10px 14px;gap:8px}
  .search-input{border:none;background:transparent;font-size:14px;font-family:'Poppins',sans-serif;outline:none;width:100%;color:#333}
  .filter-bar{display:flex;gap:8px;padding:10px 16px;overflow-x:auto;background:white;border-bottom:1px solid #f0f0f0}
  .filter-btn{border:1px solid #ddd;background:white;padding:6px 14px;border-radius:20px;font-size:12px;font-family:'Poppins',sans-serif;white-space:nowrap;color:#333;cursor:pointer}
  .product-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;background:#f0f0f0}
  .product-card{background:white;padding:12px;position:relative;cursor:pointer}
  .discount-badge{position:absolute;top:8px;left:8px;background:#256fef;color:white;font-size:9px;font-weight:700;padding:2px 6px;border-radius:4px}
  .add-btn{position:absolute;bottom:12px;right:8px;background:white;border:1.5px solid #256fef;color:#256fef;width:28px;height:28px;border-radius:8px;font-size:18px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center}
  .added-btn{position:absolute;bottom:12px;right:8px;background:#256fef;border:none;color:white;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;display:flex;align-items:center;padding:3px 6px;gap:3px}
  .cart-bar{position:fixed;bottom:56px;left:0;right:0;background:#256fef;padding:12px 20px;display:flex;justify-content:space-between;align-items:center;z-index:99}
  .view-cart-btn{background:white;color:#256fef;border:none;padding:8px 16px;border-radius:8px;font-weight:700;font-size:13px;cursor:pointer;font-family:'Poppins',sans-serif}
  .bottom-nav{position:fixed;bottom:0;left:0;right:0;background:white;border-top:1px solid #f0f0f0;display:flex;padding:8px 0;z-index:100}
  .nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;padding:4px 0}
`

export default function Home() {
  const [cart, setCart] = useState({})
  const [search, setSearch] = useState('')
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u))
    return unsub
  }, [])

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0)
  const totalPrice = products.reduce((sum, p) => sum + (cart[p.id] || 0) * p.price, 0)

  const addItem = (id) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  const removeItem = (id) => setCart(prev => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }))return (
    <div style={{ background: '#f8f8f8', minHeight: '100vh', fontFamily: 'Poppins,sans-serif', paddingBottom: '120px' }}>
      <style>{styles}</style>

      {/* Header */}
      <div className="header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '800', color: '#1a1a1a' }}>🛒 OMYangmart</div>
            <div style={{ fontSize: '11px', color: '#256fef', fontWeight: '500' }}>📍 Aapke Ghar Tak • 10 min</div>
          </div>
          {user ? (
            <div onClick={() => navigate('/profile')} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#f0f8f0', border: '1px solid #1a6b1a', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer' }}>
              <span style={{ fontSize: '14px' }}>👤</span>
              <span style={{ fontSize: '12px', fontWeight: '600', color: '#1a6b1a', maxWidth: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email.split('@')[0]}</span>
            </div>
          ) : (
            <button onClick={() => navigate('/login')} style={{ background: '#f0f8f0', border: '1px solid #1a6b1a', color: '#1a6b1a', padding: '6px 14px', borderRadius: '20px', fontWeight: '600', fontSize: '12px', cursor: 'pointer', fontFamily: 'Poppins,sans-serif' }}>
              Login
            </button>
          )}
        </div>
        <div className="search-box">
          <span style={{ fontSize: '16px', color: '#888' }}>🔍</span>
          <input className="search-input" placeholder="Grocery, vegetables dhundo..." value={search} onChange={e => setSearch(e.target.value)} />
          {search && <span style={{ fontSize: '16px', cursor: 'pointer', color: '#888' }} onClick={() => setSearch('')}>✕</span>}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <button className="filter-btn">⚡ Quick</button>
        <button className="filter-btn">🛍 Shop All</button>
        <button className="filter-btn">≡ Filters</button>
        <button className="filter-btn">↕ Sort</button>
        <button className="filter-btn">🏷 Brands ▾</button>
        <button className="filter-btn">% Discount ▾</button>
      </div>

      {/* Section Title */}
      <div style={{ padding: '12px 16px 8px', fontSize: '15px', fontWeight: '700', color: '#1a1a1a', background: 'white', borderBottom: '1px solid #f0f0f0' }}>🥦 Fresh Vegetables & Grocery</div>

      {/* Product Grid */}
      <div className="product-grid">
        {filtered.map(p => (
          <div key={p.id} className="product-card">
            <span className="discount-badge">{p.off}% off</span>
            <div style={{ fontSize: '48px', textAlign: 'center', margin: '24px 0 6px' }}>{p.emoji}</div>
            <div style={{ fontSize: '10px', color: '#888', marginBottom: '2px' }}>{p.unit}</div>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px', lineHeight: '1.3' }}>{p.name}</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#1a1a1a' }}>₹{p.price}</div>
            <div style={{ fontSize: '10px', color: '#999', textDecoration: 'line-through', marginBottom: '28px' }}>₹{p.mrp}</div>
            {cart[p.id] > 0 ? (
              <div className="added-btn">
                <span onClick={() => removeItem(p.id)}>−</span>
                <span>{cart[p.id]}</span>
                <span onClick={() => addItem(p.id)}>+</span>
              </div>
            ) : (
              <button className="add-btn" onClick={() => addItem(p.id)}>+</button>
            )}
          </div>
        ))}
      </div>

      {/* Cart Bar */}
      {totalItems > 0 && (
        <div className="cart-bar">
          <div>
            <div style={{ color: 'white', fontWeight: '700', fontSize: '14px' }}>{totalItems} items • ₹{totalPrice}</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>Extra charges may apply</div>
          </div>
          <button className="view-cart-btn" onClick={() => navigate('/cart')}>View Cart →</button>
        </div>
      )}

      {/* Bottom Nav */}
      <div className="bottom-nav">
        {[
          { icon: '🏠', label: 'Home', path: '/', active: true },
          { icon: '🔍', label: 'Search', path: '/' },
          { icon: '🛒', label: 'Cart', path: '/cart' },
          { icon: '👤', label: 'Profile', path: '/profile' },
        ].map(item => (
          <div key={item.label} className="nav-item" onClick={() => navigate(item.path)}>
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            <span style={{ fontSize: '10px', color: item.active ? '#1a6b1a' : '#888', fontWeight: item.active ? '600' : '400' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
      }
