import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-40px)}}
  @keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,30px)}}
  @keyframes fadeIn{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
  @keyframes glow{0%,100%{box-shadow:0 0 20px #00ff8844}50%{box-shadow:0 0 40px #00ff88aa}}
  .orb1{position:fixed;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,#00ff4420,transparent);top:-100px;left:-100px;animation:float1 8s ease-in-out infinite;pointer-events:none}
  .orb2{position:fixed;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle,#00aaff20,transparent);bottom:-80px;right:-80px;animation:float2 10s ease-in-out infinite;pointer-events:none}
  .glass{background:rgba(255,255,255,0.05);backdrop-filter:blur(30px);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:36px 28px;animation:fadeIn 0.6s ease forwards}
  .input{width:100%;padding:14px 16px;border-radius:12px;border:1px solid rgba(0,255,136,0.3);background:rgba(255,255,255,0.05);color:white;font-size:15px;font-family:'Poppins',sans-serif;outline:none;box-sizing:border-box;margin-bottom:14px;transition:border 0.3s}
  .input:focus{border-color:#00ff88}
  .login-btn{width:100%;padding:14px;background:linear-gradient(135deg,#00ff88,#00aaff);color:#000;border:none;border-radius:12px;font-weight:700;font-size:16px;cursor:pointer;font-family:'Poppins',sans-serif;animation:glow 2s infinite;margin-top:8px}
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
    <div style={{ background: 'linear-gradient(135deg,#020c06 0%,#041a0e 50%,#020c06 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'Poppins,sans-serif' }}>
      <style>{styles}</style>
      <div className="orb1" /><div className="orb2" />
      <div style={{ width: '100%', maxWidth: '400px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '48px' }}>🛒</div>
          <div style={{ fontSize: '28px', fontWeight: '700', background: 'linear-gradient(135deg,#00ff88,#00aaff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>OMYangmart</div>
          <div style={{ color: '#ffffff44', fontSize: '12px', letterSpacing: '3px', marginTop: '4px' }}>FRESH GROCERY</div>
        </div>
        <div className="glass">
          <h2 style={{ marginBottom: '24px', fontWeight: '600', fontSize: '20px' }}>Welcome Back 👋</h2>
          <input className="input" type="email" placeholder="📧 Email address" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="🔒 Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="login-btn" onClick={handleLogin}>Login →</button>
          <p style={{ textAlign: 'center', marginTop: '20px', color: '#ffffff66', fontSize: '14px' }}>
            New user? <span style={{ color: '#00ff88', cursor: 'pointer' }} onClick={() => navigate('/')}>Register karo</span>
          </p>
        </div>
      </div>
    </div>
  )
}
