import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-40px)}}
  @keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,30px)}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
  @keyframes glow{0%,100%{box-shadow:0 0 20px #ff660044}50%{box-shadow:0 0 40px #ff6600aa}}
  .orb1{position:fixed;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,#ff660015,transparent);top:-150px;right:-100px;animation:float1 8s ease-in-out infinite;pointer-events:none}
  .orb2{position:fixed;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,#ff990015,transparent);bottom:-100px;left:-100px;animation:float2 10s ease-in-out infinite;pointer-events:none}
  .glass{background:rgba(255,255,255,0.05);backdrop-filter:blur(30px);border:1px solid rgba(255,102,0,0.2);border-radius:24px;padding:32px 24px;animation:fadeUp 0.6s ease forwards}
  .input{width:100%;padding:14px 16px;border-radius:12px;border:1px solid rgba(255,102,0,0.3);background:rgba(255,255,255,0.05);color:white;font-size:15px;font-family:'Poppins',sans-serif;outline:none;box-sizing:border-box;margin-bottom:14px;transition:border 0.3s}
  .input:focus{border-color:#ff6600}
  .login-btn{width:100%;padding:14px;background:linear-gradient(135deg,#ff6600,#ff9900);color:white;border:none;border-radius:12px;font-weight:700;font-size:16px;cursor:pointer;font-family:'Poppins',sans-serif;animation:glow 2s infinite;margin-top:8px}
  .divider{display:flex;align-items:center;gap:12px;margin:20px 0}
  .divider-line{flex:1;height:1px;background:rgba(255,102,0,0.2)}
`

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (email && password) {
      navigate('/')
    } else {
      alert('Email aur password bharo!')
    }
  }

  return (
    <div style={{background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'Poppins,sans-serif' }}>
      <style>{styles}</style>
      <div className="orb1" /><div className="orb2" />
      <div style={{ width: '100%', maxWidth: '400px', position: 'relative', zIndex: 1 }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '56px', marginBottom: '8px' }}>🛒</div>
          <div style={{ fontSize: '28px', fontWeight: '800', background: 'linear-gradient(135deg,#ff6600,#ff9900)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>OMYangmart</div>
          <div style={{ color: '#ff990055', fontSize: '12px', letterSpacing: '2px', marginTop: '4px' }}>FRESH GROCERY DELIVERY</div>
        </div>

        <div className="glass">
          <h2 style={{ marginBottom: '6px', fontWeight: '700', fontSize: '20px' }}>Welcome Back! 👋</h2>
          <p style={{ color: '#ffffff44', fontSize: '13px', marginBottom: '24px' }}>Login karke shopping shuru karo</p>

          <input className="input" type="email" placeholder="📧 Email address" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="🔒 Password" value={password} onChange={e => setPassword(e.target.value)} />

          <div style={{ textAlign: 'right', marginBottom: '16px', marginTop: '-8px' }}>
            <span style={{ color: '#ff9900', fontSize: '13px', cursor: 'pointer' }}>Forgot Password?</span>
          </div>

          <button className="login-btn" onClick={handleLogin}>Login → </button>

          <div className="divider">
            <div className="divider-line" />
            <span style={{ color: '#ffffff33', fontSize: '12px' }}>ya</span>
            <div className="divider-line" />
          </div>

          <p style={{ textAlign: 'center', color: '#ffffff55', fontSize: '14px' }}>
            Naya account? <span style={{ color: '#ff9900', cursor: 'pointer', fontWeight: '600' }} onClick={() => navigate('/')}>Register karo</span>
          </p>
        </div>
      </div>
    </div>
  )
}
