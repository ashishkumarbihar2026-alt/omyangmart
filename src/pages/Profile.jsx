import { useNavigate } from 'react-router-dom'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Poppins',sans-serif;background:#f5f5f5}
  .menu-item{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;background:white;border-bottom:1px solid #f0f0f0;cursor:pointer}
  .menu-item:active{background:#f9f9f9}
  .icon-box{width:44px;height:44px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:20px}
  .quick-btn{display:flex;flex-direction:column;align-items:center;gap:8px;flex:1}
  .quick-icon{width:60px;height:60px;background:white;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 2px 8px rgba(0,0,0,0.08)}
`

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', fontFamily: 'Poppins,sans-serif', paddingBottom: '80px' }}>
      <style>{styles}</style>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg,#1a6b1a,#2d9e2d)', padding: '40px 20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>👤</div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>Mera Account</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }} onClick={() => navigate('/login')}>Login / Register karo →</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { icon: '📦', label: 'Orders' },
            { icon: '❤️', label: 'Wishlist' },
            { icon: '%', label: 'Offers' },
            { icon: '❓', label: 'Help' },
          ].map(item => (
            <div key={item.label} className="quick-btn" style={{ cursor: 'pointer' }}>
              <div className="quick-icon">{item.icon}</div>
              <div style={{ fontSize: '11px', color: 'white', fontWeight: '500' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Savings Banner */}
      <div style={{ margin: '12px 16px', background: 'linear-gradient(135deg,#d4a017,#ffd700)', borderRadius: '16px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '16px', fontWeight: '800', color: '#1a3a1a' }}>💰 FAYDA METER</div>
          <div style={{ fontSize: '12px', color: '#1a3a1a', opacity: 0.8 }}>Aapki lifetime savings</div>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '12px', padding: '8px 16px' }}>
          <div style={{ fontSize: '22px', fontWeight: '800', color: '#1a3a1a' }}>₹0</div>
        </div>
      </div>

      {/* Account Section */}
      <div style={{ margin: '12px 0 4px 16px', fontSize: '12px', color: '#888', fontWeight: '600', letterSpacing: '1px' }}>ACCOUNT</div>
      <div style={{ background: 'white', borderRadius: '0', overflow: 'hidden' }}>
        {[
          { icon: '📋', label: 'My List', sub: 'Saved items' },
          { icon: '📍', label: 'Delivery Addresses', sub: '0 saved addresses' },
          { icon: '💳', label: 'PAN Card Info', sub: 'Required for orders above ₹2 lakh' },
        ].map(item => (
          <div key={item.label} className="menu-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div className="icon-box" style={{ background: '#f0f8f0' }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>{item.label}</div>
                <div style={{ fontSize: '12px', color: '#888' }}>{item.sub}</div>
              </div>
            </div>
            <span style={{ color: '#256fef', fontSize: '18px' }}>›</span>
          </div>
        ))}
      </div>

      {/* Payment Section */}
      <div style={{ margin: '16px 0 4px 16px', fontSize: '12px', color: '#888', fontWeight: '600', letterSpacing: '1px' }}>PAYMENT MODES</div>
      <div style={{ background: 'white' }}>
        {[
          { icon: '👛', label: 'OMYang Wallet', sub: 'Balance: ₹0' },
          { icon: '📱', label: 'UPI / Razorpay', sub: 'Pay instantly' },
          { icon: '🚚', label: 'Cash on Delivery', sub: 'Pay when delivered' },
        ].map(item => (
          <div key={item.label} className="menu-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div className="icon-box" style={{ background: '#f0f8f0' }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>{item.label}</div>
                <div style={{ fontSize: '12px', color: '#888' }}>{item.sub}</div>
              </div>
            </div>
            <span style={{ color: '#256fef', fontSize: '18px' }}>›</span>
          </div>
        ))}
      </div>

      {/* Help Section */}
      <div style={{ margin: '16px 0 4px 16px', fontSize: '12px', color: '#888', fontWeight: '600', letterSpacing: '1px' }}>HELP & SUPPORT</div>
      <div style={{ background: 'white' }}>
        {[
          { icon: '📖', label: 'Guide', sub: 'How to use OMYangmart' },
          { icon: '💬', label: 'Customer Support', sub: '24/7 available' },
          { icon: '⭐', label: 'Rate Us', sub: 'Share your feedback' },
        ].map(item => (
          <div key={item.label} className="menu-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div className="icon-box" style={{ background: '#f0f8f0' }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>{item.label}</div>
                <div style={{ fontSize: '12px', color: '#888' }}>{item.sub}</div>
              </div>
            </div>
            <span style={{ color: '#256fef', fontSize: '18px' }}>›</span>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', borderTop: '1px solid #f0f0f0', display: 'flex', padding: '8px 0' }}>
        {[
          { icon: '🏠', label: 'Home', path: '/' },
          { icon: '🔍', label: 'Search', path: '/' },
          { icon: '🛒', label: 'Cart', path: '/cart' },
          { icon: '👤', label: 'Profile', path: '/profile', active: true },
        ].map(item => (
          <div key={item.label} onClick={() => navigate(item.path)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', cursor: 'pointer', padding: '4px 0' }}>
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            <span style={{ fontSize: '10px', color: item.active ? '#1a6b1a' : '#888', fontWeight: item.active ? '600' : '400' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
      }
