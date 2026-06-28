import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  @keyframes bgshift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
  @keyframes glow{0%,100%{box-shadow:0 0 20px rgba(255,255,255,0.2)}50%{box-shadow:0 0 40px rgba(255,255,255,0.4)}}
  @keyframes walk{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
  @keyframes wave{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-20deg)}}
  @keyframes boxbounce{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-5px) rotate(3deg)}}
  @keyframes blink{0%,90%,100%{transform:scaleY(1)}95%{transform:scaleY(0.1)}}
  @keyframes shadow{0%,100%{transform:scaleX(1);opacity:0.3}50%{transform:scaleX(0.7);opacity:0.15}}
  .animated-bg{min-height:100vh;background:linear-gradient(-45deg,#0f0c29,#302b63,#134e5e,#1a1a2e);background-size:400% 400%;animation:bgshift 10s ease infinite;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;font-family:'Poppins',sans-serif}
  .glass{background:rgba(255,255,255,0.1);backdrop-filter:blur(30px);border:1px solid rgba(255,255,255,0.2);border-radius:24px;padding:28px 24px;animation:fadeUp 0.6s ease forwards;width:100%;max-width:380px}
  .input{width:100%;padding:13px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.1);color:white;font-size:15px;font-family:'Poppins',sans-serif;outline:none;box-sizing:border-box;margin-bottom:12px;transition:border 0.3s}
  .input::placeholder{color:rgba(255,255,255,0.5)}
  .input:focus{border-color:rgba(255,255,255,0.5)}
  .login-btn{width:100%;padding:14px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;border:none;border-radius:12px;font-weight:700;font-size:16px;cursor:pointer;font-family:'Poppins',sans-serif;animation:glow 2s infinite;margin-top:6px}
  .error{background:rgba(255,50,50,0.2);border:1px solid rgba(255,50,50,0.4);border-radius:10px;padding:10px 14px;font-size:13px;color:#ffaaaa;margin-bottom:12px}
  .boy{animation:walk 1s ease-in-out infinite;position:relative;display:inline-block}
  .arm-right{animation:wave 1s ease-in-out infinite;transform-origin:top left;display:inline-block}
  .box-anim{animation:boxbounce 1s ease-in-out infinite;display:inline-block}
  .eye{animation:blink 3s ease-in-out infinite;display:inline-block;transform-origin:center}
  .ground-shadow{animation:shadow 1s ease-in-out infinite;transform-origin:center}
`

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (!email || !password) { setError('Email aur password bharo!'); return }
    if (password.length < 6) { setError('Password 6+ chars ka hona chahiye!'); return }
    setLoading(true); setError('')
    try {
      navigate('/')
    } catch (err) {
      setError('Error: ' + err.message)
    }
    setLoading(false)
  }

  return (
    <div className="animated-bg">
      <style>{styles}</style>

      {/* Delivery Boy */}
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <div className="boy">
          <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
            {/* Shadow */}
            <ellipse className="ground-shadow" cx="60" cy="155" rx="35" ry="6" fill="rgba(0,0,0,0.3)" />

            {/* Legs */}
            <rect x="45" y="110" width="12" height="35" rx="6" fill="#3b5bdb" />
            <rect x="63" y="110" width="12" height="35" rx="6" fill="#3b5bdb" />
            {/* Shoes */}
            <ellipse cx="51" cy="145" rx="10" ry="5" fill="#1a1a2e" />
            <ellipse cx="69" cy="145" rx="10" ry="5" fill="#1a1a2e" />

            {/* Body */}
            <rect x="38" y="70" width="44" height="45" rx="12" fill="#4c6ef5" />
            {/* Delivery logo on shirt */}
            <rect x="48" y="80" width="24" height="16" rx="4" fill="rgba(255,255,255,0.2)" />
            <text x="52" y="92" fill="white" fontSize="8" fontWeight="bold">OMY</text>

            {/* Left Arm (down) */}
            <rect x="22" y="72" width="16" height="36" rx="8" fill="#4c6ef5" />
            <ellipse cx="30" cy="108" rx="8" ry="6" fill="#ffa94d" />

            {/* Right Arm (holding box) - animated */}
            <g className="arm-right">
              <rect x="82" y="68" width="16" height="30" rx="8" fill="#4c6ef5" />
              {/* Box in hand */}
              <g className="box-anim">
                <rect x="76" y="42" width="34" height="30" rx="4" fill="#ffd43b" />
                <rect x="76" y="42" width="34" height="8" rx="4" fill="#fab005" />
                {/* Box ribbon */}
                <line x1="93" y1="42" x2="93" y2="72" stroke="#fa5252" strokeWidth="2.5" />
                <line x1="76" y1="56" x2="110" y2="56" stroke="#fa5252" strokeWidth="2.5" />
                {/* OMY text on box */}
                <text x="82" y="68" fill="#1a1a2e" fontSize="7" fontWeight="bold">OMY📦</text>
              </g>
            </g>

            {/* Neck */}
            <rect x="53" y="58" width="14" height="14" rx="4" fill="#ffa94d" />

            {/* Head */}
            <ellipse cx="60" cy="42" rx="22" ry="22" fill="#ffa94d" />

            {/* Helmet/Cap */}
            <ellipse cx="60" cy="24" rx="22" ry="8" fill="#3b5bdb" />
            <rect x="38" y="20" width="44" height="12" rx="6" fill="#4c6ef5" />
            <rect x="34" y="28" width="52" height="6" rx="3" fill="#3b5bdb" />

            {/* Eyes */}
            <g className="eye">
              <ellipse cx="52" cy="42" rx="4" ry="4.5" fill="white" />
              <ellipse cx="68" cy="42" rx="4" ry="4.5" fill="white" />
              <ellipse cx="53" cy="43" rx="2" ry="2.5" fill="#1a1a2e" />
              <ellipse cx="69" cy="43" rx="2" ry="2.5" fill="#1a1a2e" />
              {/* Eye shine */}
              <circle cx="54" cy="42" r="0.8" fill="white" />
              <circle cx="70" cy="42" r="0.8" fill="white" />
            </g>

            {/* Smile */}
            <path d="M52 52 Q60 58 68 52" stroke="#c45200" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Waiting text */}
        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', fontWeight: '500', marginTop: '4px' }}>
          🛵 Delivery boy wait kar raha hai...
        </div>
      </div>

      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '22px', fontWeight: '800', color: 'white' }}>🛒 OMYangmart</div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', letterSpacing: '2px' }}>FRESH GROCERY DELIVERY</div>
      </div>

      {/* Login Card */}
      <div className="glass">
        <h2 style={{ marginBottom: '4px', fontWeight: '700', fontSize: '18px', color: 'white' }}>
          {isRegister ? 'Naya Account 🎉' : 'Welcome Back! 👋'}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '20px' }}>
          {isRegister ? 'Register karke shopping shuru karo' : 'Login karke order karo'}
        </p>

        {error && <div className="error">⚠️ {error}</div>}

        <input className="input" type="email" placeholder="📧 Email address" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="🔒 Password (min 6 chars)" value={password} onChange={e => setPassword(e.target.value)} />

        <button className="login-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? '⏳ Please wait...' : isRegister ? 'Register →' : 'Login →'}
        </button>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '16px' }}>
          {isRegister ? 'Account hai? ' : 'Naya user? '}
          <span style={{ color: 'white', cursor: 'pointer', fontWeight: '700', textDecoration: 'underline' }}
            onClick={() => { setIsRegister(!isRegister); setError('') }}>
            {isRegister ? 'Login karo' : 'Register karo'}
          </span>
        </p>
      </div>
    </div>
  )
              }
