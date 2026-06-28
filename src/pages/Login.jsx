import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  @keyframes bgshift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
  @keyframes glow{0%,100%{box-shadow:0 0 20px rgba(255,255,255,0.2)}50%{box-shadow:0 0 40px rgba(255,255,255,0.4)}}
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
  @keyframes light1{0%,100%{opacity:0.6;transform:scale(1)}50%{opacity:1;transform:scale(1.1)}}
  @keyframes light2{0%,100%{opacity:0.4;transform:scale(1)}50%{opacity:0.8;transform:scale(1.15)}}
  @keyframes light3{0%,100%{opacity:0.3;transform:scale(1)}50%{opacity:0.7;transform:scale(1.2)}}
  @keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  @keyframes particle{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-60px) scale(0);opacity:0}}
  .animated-bg{min-height:100vh;background:linear-gradient(-45deg,#0f0c29,#302b63,#134e5e,#1a1a2e);background-size:400% 400%;animation:bgshift 10s ease infinite;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;font-family:'Poppins',sans-serif;position:relative;overflow:hidden}
  .glass{background:rgba(255,255,255,0.1);backdrop-filter:blur(30px);border:1px solid rgba(255,255,255,0.2);border-radius:24px;padding:28px 24px;animation:fadeUp 0.6s ease forwards;width:100%;max-width:380px;position:relative;z-index:2}
  .input{width:100%;padding:13px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.1);color:white;font-size:15px;font-family:'Poppins',sans-serif;outline:none;box-sizing:border-box;margin-bottom:12px;transition:border 0.3s}
  .input::placeholder{color:rgba(255,255,255,0.5)}
  .input:focus{border-color:rgba(255,255,255,0.5)}
  .login-btn{width:100%;padding:14px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;border:none;border-radius:12px;font-weight:700;font-size:16px;cursor:pointer;font-family:'Poppins',sans-serif;animation:glow 2s infinite;margin-top:6px}
  .error{background:rgba(255,50,50,0.2);border:1px solid rgba(255,50,50,0.4);border-radius:10px;padding:10px 14px;font-size:13px;color:#ffaaaa;margin-bottom:12px}
  .boy-float{animation:float 3s ease-in-out infinite;position:relative;z-index:2}
  .light-ring{position:absolute;border-radius:50%;border:2px solid rgba(255,255,255,0.15)}
  .light1{width:180px;height:180px;animation:light1 3s ease-in-out infinite}
  .light2{width:240px;height:240px;animation:light2 3s ease-in-out infinite 0.5s}
  .light3{width:300px;height:300px;animation:light3 3s ease-in-out infinite 1s}
  .spotlight{position:absolute;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(100,150,255,0.3),transparent);top:50%;left:50%;transform:translate(-50%,-50%)}
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

      {/* Background particles */}
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${4 + i * 2}px`,
          height: `${4 + i * 2}px`,
          borderRadius: '50%',
          background: `rgba(${100 + i * 20},${150 + i * 10},255,0.4)`,
          left: `${10 + i * 12}%`,
          top: `${20 + (i % 3) * 25}%`,
          animation: `particle ${2 + i * 0.5}s ease-in-out infinite ${i * 0.3}s`
        }} />
      ))}

      {/* Delivery Boy Section */}
      <div style={{ position: 'relative', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Light rings behind boy */}
        <div className="light-ring light3" />
        <div className="light-ring light2" />
        <div className="light-ring light1" />
        <div className="spotlight" />

        {/* 3D Boy using Lottie */}
        <div className="boy-float">
          <dotlottie-player
            src="https://lottie.host/8e4d3b7c-5f2a-4e1b-9c8d-2a3b4c5d6e7f/delivery-boy.json"
            background="transparent"
            speed="1"
            style={{ width: '200px', height: '200px' }}
            loop
            autoplay
          />
        </div>
      </div>

      {/* Fallback SVG Boy (shows if lottie fails) */}
      <div className="boy-float" style={{ marginBottom: '8px', position: 'relative', zIndex: 2 }}>
        <svg width="130" height="170" viewBox="0 0 130 170">
          {/* Spotlight glow */}
          <ellipse cx="65" cy="158" rx="40" ry="8" fill="rgba(100,150,255,0.3)" />
          <ellipse cx="65" cy="158" rx="28" ry="5" fill="rgba(100,150,255,0.4)" />

          {/* Legs */}
          <rect x="48" y="115" width="13" height="36" rx="6" fill="#2c3e8c" />
          <rect x="67" y="115" width="13" height="36" rx="6" fill="#2c3e8c" />
          <ellipse cx="54" cy="151" rx="11" ry="5" fill="#1a1a3e" />
          <ellipse cx="73" cy="151" rx="11" ry="5" fill="#1a1a3e" />

          {/* Body - light blue shirt */}
          <rect x="38" y="72" width="52" height="48" rx="14" fill="#5b9bd5" />
          {/* Shirt collar */}
          <path d="M55 72 L65 82 L75 72" fill="#4a8bc4" />
          {/* Shirt button line */}
          <line x1="65" y1="82" x2="65" y2="118" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
          {/* Backpack strap */}
          <path d="M72 75 Q80 85 78 100" stroke="#8B6914" strokeWidth="4" fill="none" strokeLinecap="round" />

          {/* Left arm - down */}
          <rect x="22" y="74" width="17" height="38" rx="8" fill="#5b9bd5" />
          <ellipse cx="30" cy="112" rx="9" ry="7" fill="#f4a261" />

          {/* Right arm - holding box up */}
          <rect x="89" y="60" width="17" height="32" rx="8" fill="#5b9bd5" />

          {/* Delivery box */}
          <rect x="82" y="28" width="38" height="36" rx="5" fill="#d4956a" />
          <rect x="82" y="28" width="38" height="10" rx="5" fill="#c07840" />
          {/* Box tape */}
          <line x1="101" y1="28" x2="101" y2="64" stroke="#e8e8e8" strokeWidth="3" />
          <line x1="82" y1="46" x2="120" y2="46" stroke="#e8e8e8" strokeWidth="3" />
          {/* Barcode on box */}
          <rect x="88" y="50" width="26" height="10" rx="2" fill="white" opacity="0.8" />
          <line x1="91" y1="52" x2="91" y2="58" stroke="#333" strokeWidth="1" />
          <line x1="94" y1="52" x2="94" y2="58" stroke="#333" strokeWidth="1.5" />
          <line x1="97" y1="52" x2="97" y2="58" stroke="#333" strokeWidth="1" />
          <line x1="100" y1="52" x2="100" y2="58" stroke="#333" strokeWidth="1.5" />
          <line x1="103" y1="52" x2="103" y2="58" stroke="#333" strokeWidth="1" />
          <line x1="106" y1="52" x2="106" y2="58" stroke="#333" strokeWidth="1.5" />
          <line x1="109" y1="52" x2="109" y2="58" stroke="#333" strokeWidth="1" />
          <line x1="112" y1="52" x2="112" y2="58" stroke="#333" strokeWidth="1" />

          {/* Neck */}
          <rect x="56" y="60" width="16" height="14" rx="5" fill="#f4a261" />

          {/* Head */}
          <ellipse cx="65" cy="44" rx="24" ry="24" fill="#f4a261" />

          {/* Hair */}
          <ellipse cx="65" cy="23" rx="20" ry="8" fill="#8B4513" />
          <rect x="45" y="20" width="40" height="10" rx="5" fill="#8B4513" />

          {/* Cap */}
          <ellipse cx="65" cy="22" rx="24" ry="8" fill="#5b9bd5" />
          <rect x="41" y="18" width="48" height="12" rx="6" fill="#4a8bc4" />
          {/* Cap logo */}
          <circle cx="65" cy="22" r="6" fill="white" opacity="0.9" />
          <text x="62" y="26" fill="#4a8bc4" fontSize="6" fontWeight="bold">OM</text>
          {/* Cap brim */}
          <rect x="36" y="27" width="56" height="6" rx="3" fill="#3a7ab3" />

          {/* Eyes */}
          <ellipse cx="56" cy="44" rx="5" ry="5.5" fill="white" />
          <ellipse cx="74" cy="44" rx="5" ry="5.5" fill="white" />
          <ellipse cx="57" cy="45" rx="2.5" ry="3" fill="#2c3e50" />
          <ellipse cx="75" cy="45" rx="2.5" ry="3" fill="#2c3e50" />
          <circle cx="58" cy="44" r="1" fill="white" />
          <circle cx="76" cy="44" r="1" fill="white" />

          {/* Eyebrows */}
          <path d="M51 38 Q56 35 61 38" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M69 38 Q74 35 79 38" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Smile */}
          <path d="M55 54 Q65 62 75 54" stroke="#c45200" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Cheeks */}
          <ellipse cx="50" cy="52" rx="6" ry="4" fill="rgba(255,150,100,0.3)" />
          <ellipse cx="80" cy="52" rx="6" ry="4" fill="rgba(255,150,100,0.3)" />
        </svg>
      </div>

      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: '500', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
        🛵 Aapka order deliver karne ke liye ready!
      </div>

      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: '20px', fontWeight: '800', color: 'white' }}>🛒 OMYangmart</div>
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
