import { useNavigate } from 'react-router-dom'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-40px)}}
  @keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,30px)}}
  @keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
  .orb1{position:fixed;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,#00ff4420,transparent);top:-100px;left:-100px;animation:float1 8s ease-in-out infinite;pointer-events:none}
  .orb2{position:fixed;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle,#00aaff20,transparent);bottom:-80px;right:-80px;animation:float2 10s ease-in-out infinite;pointer-events:none}
  .glass{background:rgba(255,255,255,0.05);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:20px;animation:fadeIn 0.5s ease forwards}
  .back-btn{background:transparent;color:#00ff88;border:1px solid #00ff88;padding:10px 20px;border-radius:30px;font-family:'Poppins',sans-serif;cursor:pointer;margin-bottom:24px}
  .shop-btn{width:100%;padding:14px;background:linear-gradient(135deg,#00ff88,#00aaff);color:#000;border:none;border-radius:12px;font-weight:700;font-size:16px;cursor:pointer;font-family:'Poppins',sans-serif;margin-top:20px}
`

export default function Cart() {
  const navigate = useNavigate()

  return (
    <div style={{ background: 'linear-gradient(135deg,#020c06 0%,#041a0e 50%,#020c06 100%)', minHeight: '100vh', color: 'white', padding: '20px', fontFamily: 'Poppins,sans-serif' }}>
      <style>{styles}</style>
      <div className="orb1" /><div className="orb2" />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <button className="back-btn" onClick={() => navigate('/')}>← Wapas</button>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '64px' }}>🛒</div>
          <div style={{ fontSize: '22px', fontWeight: '700', background: 'linear-gradient(135deg,#00ff88,#00aaff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Mera Cart</div>
        </div>
        <div className="glass" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛍️</div>
          <div style={{ color: '#ffffff66', fontSize: '16px', marginBottom: '8px' }}>Cart abhi khali hai!</div>
          <div style={{ color: '#ffffff33', fontSize: '13px' }}>Kuch tasty cheezein add karo 😊</div>
          <button className="shop-btn" onClick={() => navigate('/')}>🛒 Shopping Karo</button>
        </div>
      </div>
    </div>
  )
}
