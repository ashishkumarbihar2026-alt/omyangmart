import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Poppins',sans-serif;background:#f8f8f8}
  .bottom-nav{position:fixed;bottom:0;left:0;right:0;background:white;border-top:1px solid #f0f0f0;display:flex;padding:8px 0;z-index:150}
  .nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;padding:4px 0}
  .cart-item{background:white;border-radius:16px;padding:14px;margin-bottom:10px;display:flex;align-items:center;gap:12px;box-shadow:0 2px 8px rgba(0,0,0,0.06)}
  .qty-btn{width:28px;height:28px;border-radius:8px;border:1.5px solid #1a6b1a;background:white;color:#1a6b1a;font-size:16px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center}
  .qty-btn-filled{width:28px;height:28px;border-radius:8px;border:none;background:#1a6b1a;color:white;font-size:16px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center}
  .payment-option{background:white;border-radius:14px;padding:16px;margin-bottom:10px;display:flex;align-items:center;gap:14px;cursor:pointer;border:2px solid transparent;transition:border 0.2s}
  .payment-option.selected{border-color:#1a6b1a;background:#f0f8f0}
  .place-order-btn{width:100%;padding:16px;background:linear-gradient(135deg,#1a6b1a,#2d9e2d);color:white;border:none;border-radius:16px;font-weight:700;font-size:17px;cursor:pointer;font-family:'Poppins',sans-serif;box-shadow:0 4px 20px rgba(26,107,26,0.3)}
`

const sampleCartItems = [
  { id: 1, name: 'Aloo (1kg)', price: 30, emoji: '🥔', qty: 2 },
  { id: 2, name: 'Tamatar (1kg)', price: 25, emoji: '🍅', qty: 1 },
  { id: 4, name: 'Doodh (1L)', price: 60, emoji: '🥛', qty: 1 },
]

const paymentMethods = [
  { id: 'upi', icon: '📱', name: 'UPI Payment', sub: 'GPay, PhonePe, Paytm' },
  { id: 'card', icon: '💳', name: 'Credit / Debit Card', sub: 'Visa, Mastercard, RuPay' },
  { id: 'wallet', icon: '👛', name: 'Wallet', sub: 'Paytm, Amazon Pay' },
  { id: 'cod', icon: '💵', name: 'Cash on Delivery', sub: 'Delivery par payment karo' },
]

export default function Cart() {
  const [items, setItems] = useState(sampleCartItems)
  const [payment, setPayment] = useState('cod')
  const [ordered, setOrdered] = useState(false)
  const navigate = useNavigate()

  const updateQty = (id, delta) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter(i => i.qty > 0))
  }

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const delivery = subtotal >= 299 ? 0 : 20
  const total = subtotal + delivery

  if (ordered) return (
    <div style={{ background: '#f8f8f8', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'Poppins,sans-serif' }}>
      <div style={{ fontSize: '80px', marginBottom: '16px' }}>🎉</div>
      <div style={{ fontSize: '24px', fontWeight: '800', color: '#1a6b1a', marginBottom: '8px' }}>Order Placed!</div>
      <div style={{ fontSize: '14px', color: '#888', marginBottom: '8px', textAlign: 'center' }}>Aapka order confirm ho gaya!</div>
      <div style={{ fontSize: '13px', color: '#256fef', marginBottom: '32px' }}>⏱ 10-15 minutes mein deliver hoga</div>
      <button onClick={() => { setOrdered(false); navigate('/') }} style={{ background: 'linear-gradient(135deg,#1a6b1a,#2d9e2d)', color: 'white', border: 'none', padding: '14px 40px', borderRadius: '30px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', fontFamily: 'Poppins,sans-serif' }}>
        Home Par Jao 🏠
      </button>
    </div>
  )

  return (
    <div style={{ background: '#f8f8f8', minHeight: '100vh', fontFamily: 'Poppins,sans-serif', paddingBottom: '80px' }}>
      <style>{styles}</style>

      {/* Header */}
      <div style={{ background: 'white', padding: '16px 20px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '12px', position: 'sticky', top: 0, zIndex: 100 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>←</button>
        <div>
          <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a' }}>Mera Cart 🛒</div>
          <div style={{ fontSize: '12px', color: '#256fef' }}>{items.length} items</div>
        </div>
      </div>

      <div style={{ padding: '16px' }}>

        {/* Cart Items */}
        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ fontSize: '60px', marginBottom: '12px' }}>🛍️</div>
            <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Cart khali hai!</div>
            <button onClick={() => navigate('/')} style={{ background: '#1a6b1a', color: 'white', border: 'none', padding: '12px 28px', borderRadius: '25px', fontWeight: '700', cursor: 'pointer', fontFamily: 'Poppins,sans-serif', marginTop: '12px' }}>Shopping Karo</button>
          </div>
        ) : (
          <>
            {/* Products */}
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#1a1a1a', marginBottom: '12px' }}>🛒 Products</div>
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div style={{ fontSize: '40px' }}>{item.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>{item.name}</div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#1a6b1a', marginTop: '2px' }}>₹{item.price}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                  <span style={{ fontSize: '15px', fontWeight: '700', minWidth: '20px', textAlign: 'center' }}>{item.qty}</span>
                  <button className="qty-btn-filled" onClick={() => updateQty(item.id, 1)}>+</button>
                </div>
              </div>
            ))}

            {/* Bill Summary */}
            <div style={{ background: 'white', borderRadius: '16px', padding: '16px', marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>🧾 Bill Summary</div>
              {[
                { label: 'Subtotal', value: `₹${subtotal}` },
                { label: 'Delivery', value: delivery === 0 ? 'FREE 🎉' : `₹${delivery}` },
                { label: 'Discount', value: '-₹0' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px', color: '#666' }}>
                  <span>{row.label}</span>
                  <span style={{ color: row.value.includes('FREE') ? '#1a6b1a' : '#1a1a1a', fontWeight: '500' }}>{row.value}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontWeight: '800', fontSize: '15px' }}>
                <span>Total</span>
                <span style={{ color: '#1a6b1a' }}>₹{total}</span>
              </div>
              {delivery > 0 && <div style={{ fontSize: '11px', color: '#888', marginTop: '6px' }}>₹{299 - subtotal} aur add karo — FREE delivery milegi! 🚚</div>}
            </div>

            {/* Payment Methods */}
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#1a1a1a', marginBottom: '12px' }}>💳 Payment Method</div>
            {paymentMethods.map(method => (
              <div key={method.id} className={`payment-option ${payment === method.id ? 'selected' : ''}`} onClick={() => setPayment(method.id)}>
                <div style={{ fontSize: '28px' }}>{method.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>{method.name}</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>{method.sub}</div>
                </div>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: `2px solid ${payment === method.id ? '#1a6b1a' : '#ddd'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {payment === method.id && <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1a6b1a' }} />}
                </div>
              </div>
            ))}

            {/* Place Order */}
            <button className="place-order-btn" onClick={() => setOrdered(true)}>
              🛵 Place Order • ₹{total}
            </button>
          </>
        )}
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav">
        {[
          { icon: '🏠', label: 'Home', path: '/' },
          { icon: '🔍', label: 'Search', path: '/' },
          { icon: '🛒', label: 'Cart', path: '/cart', active: true },
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
