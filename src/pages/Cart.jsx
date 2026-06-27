import { useNavigate } from 'react-router-dom'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Poppins',sans-serif;background:#f8f8f8}
  .bottom-nav{position:fixed;bottom:0;left:0;right:0;background:white;border-top:1px solid #f0f0f0;display:flex;padding:8px 0;z-index:150}
  .nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;padding:4px 0}
`

export default function Cart() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#f8f8f8', minHeight: '100vh', fontFamily: 'Poppins,sans-serif', paddingBottom: '80px' }}>
      <style>{styles}</style>

      {/* Header */}
      <div style={{ background: 'white', padding: '16px 20px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '12px', position: 'sticky', top: 0, zIndex: 100 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>←</button>
        <div>
          <div style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a' }}>Mera Cart 🛒</div>
          <div style={{ fontSize: '12px', color: '#256fef' }}>OMYangmart</div>
        </div>
      </div>

      {/* Empty Cart */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '80px', marginBottom: '16px' }}>🛍️</div>
        <div style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px' }}>Cart khali hai!</div>
        <div style={{ fontSize: '14px', color: '#888', marginBottom: '32px' }}>Kuch tasty cheezein add karo 😊</div>

        {/* Delivery Info */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '20px', width: '100%', maxWidth: '340px', marginBottom: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          {[
            { icon: '⚡', text: '10 minute delivery', sub: 'Ghar tak pahunchayenge' },
            { icon: '🌿', text: 'Fresh products', sub: '100% quality guaranteed' },
            { icon: '💰', text: 'Best prices', sub: 'Lowest prices guaranteed' },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0', borderBottom: '1px solid #f5f5f5' }}>
              <div style={{ width: '40px', height: '40px', background: '#f0f8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>{item.text}</div>
                <div style={{ fontSize: '11px', color: '#888' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => navigate('/')} style={{ background: 'linear-gradient(135deg,#1a6b1a,#2d9e2d)', color: 'white', border: 'none', padding: '14px 40px', borderRadius: '30px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', fontFamily: 'Poppins,sans-serif', boxShadow: '0 4px 20px rgba(26,107,26,0.3)' }}>
          🛒 Shopping Karo
        </button>
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
