import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  .filter-btn{border:1px solid #ddd;background:white;padding:6px 14px;border-radius:20px;font-size:12px;font-family:'Poppins',sans-serif;white-space:nowrap;color:#333;cursor:pointer;display:flex;align-items:center;gap:4px}
  .product-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;background:#f0f0f0;padding:0}
  .product-card{background:white;padding:12px;position:relative;cursor:pointer}
  .product-card:active{background:#fafafa}
  .discount-badge{position:absolute;top:8px;left:8px;background:#256fef;color:white;font-size:9px;font-weight:700;padding:2px 6px;border-radius:4px}
  .wishlist-btn{position:absolute;top:8px;right:8px;background:white;border:none;font-size:16px;cursor:pointer;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 4px rgba(0,0,0,0.15)}
  .add-btn{position:absolute;bottom:12px;right:12px;background:white;border:1.5px solid #256fef;color:#256fef;width:28px;height:28px;border-radius:8px;font-size:18px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:'Poppins',sans-serif}
  .added-btn{position:absolute;bottom:12px;right:12px;background:#256fef;border:none;color:white;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;display:flex;align-items:center;padding:4px 8px;gap:4px;font-family:'Poppins',sans-serif}
  .cart-bar{position:fixed;bottom:0;left:0;right:0;background:#256fef;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;z-index:200}
  .view-cart-btn{background:white;color:#256fef;border:none;padding:8px 16px;border-radius:8px;font-weight:700;font-size:14px;cursor:pointer;font-family:'Poppins',sans-serif;display:flex;align-items:center;gap:6px}
  .section-title{padding:12px 16px 8px;font-size:15px;font-weight:700;color:#1a1a1a;background:white;border-bottom:1px solid #f0f0f0}
`

export default function Home() {
  const [cart, setCart] = useState({})
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0)
  const totalPrice = products.reduce((sum, p) => sum + (cart[p.id] || 0) * p.price, 0)

  const addItem = (id) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  const removeItem = (id) => setCart(prev => ({ ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) }))

  return (
    <div style={{ background: '#f8f8f8', minHeight: '100vh', fontFamily: 'Poppins,sans-serif', paddingBottom: totalItems > 0 ? '70px' : '0' }}>
      <style>{styles}</style>

      {/* Header */}
      <div className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '16px', fontWeight: '800', color: '#1a1a1a' }}>🛒 OMYangmart</div>
            <div style={{ fontSize: '11px', color: '#256fef', fontWeight: '500' }}>📍 Aapke Ghar Tak • 10 min</div>
          </div>
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

      {/* Results text */}
      {search && (
        <div style={{ padding: '8px 16px', fontSize: '12px', color: '#666', background: 'white', borderBottom: '1px solid #f0f0f0' }}>
          Showing results for '<span style={{ color: '#256fef', fontWeight: '600' }}>{search}</span>'
        </div>
      )}

      {/* Section Title */}
      <div className="section-title">🥦 Fresh Vegetables & Grocery</div>

      {/* Product Grid */}
      <div className="product-grid">
        {filtered.map(p => (
          <div key={p.id} className="product-card">
            <span className="discount-badge">{p.off}% off</span>
            <button className="wishlist-btn">🤍</button>
            <div style={{ fontSize: '52px', textAlign: 'center', margin: '24px 0 8px' }}>{p.emoji}</div>
            <div style={{ fontSize: '10px', color: '#888', marginBottom: '2px' }}>{p.unit}</div>
            <div style={{ fontSize: '12px', fontWeight: '600', color: '#1a1a1a', marginBottom: '4px', lineHeight: '1.3' }}>{p.name}</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#1a1a1a' }}>₹{p.price}</div>
            <div style={{ fontSize: '10px', color: '#999', textDecoration: 'line-through' }}>₹{p.mrp}</div>
            <div style={{ height: '32px' }} />
            {cart[p.id] > 0 ? (
              <div className="added-btn">
                <span onClick={() => removeItem(p.id)} style={{ cursor: 'pointer', fontSize: '14px' }}>−</span>
                <span>{cart[p.id]}</span>
                <span onClick={() => addItem(p.id)} style={{ cursor: 'pointer', fontSize: '14px' }}>+</span>
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
          <button className="view-cart-btn" onClick={() => navigate('/cart')}>
            View Cart →
          </button>
        </div>
      )}
    </div>
    {/* Bottom Nav */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', borderTop: '1px solid #f0f0f0', display: 'flex', padding: '8px 0', zIndex: 150 }}>
        {[
          { icon: '🏠', label: 'Home', path: '/' },
          { icon: '🔍', label: 'Search', path: '/' },
          { icon: '🛒', label: 'Cart', path: '/cart' },
          { icon: '👤', label: 'Profile', path: '/profile' },
        ].map(item => (
          <div key={item.label} onClick={() => navigate(item.path)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', cursor: 'pointer', padding: '4px 0' }}>
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            <span style={{ fontSize: '10px', color: item.label === 'Home' ? '#1a6b1a' : '#888', fontWeight: item.label === 'Home' ? '600' : '400' }}>{item.label}</span>
          </div>
        ))}
      </div>
  )
                                                }
