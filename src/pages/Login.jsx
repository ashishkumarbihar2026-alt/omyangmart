import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  @keyframes bgshift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-40px)}}
  @keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,30px)}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
  @keyframes glow{0%,100%{box-shadow:0 0 20px rgba(255,255,255,0.2)}50%{box-shadow:0 0 40px rgba(255,255,255,0.4)}}
  .animated-bg{min-height:100vh;background:linear-gradient(-45deg,#0f0c29,#302b63,#134e5e,#71b280,#f7971e,#1a1a2e,#0f3460,#24243e);background-size:400% 400%;animation:bgshift 10s ease infinite;display:flex;align-items:center;justify-content:center;padding:20px;font-family:'Poppins',sans-serif}
  .orb1{position:fixed;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,0.08),transparent);top:-150px;right:-100px;animation:float1 8s ease-in-out infinite;pointer-events:none}
  .orb2{position:fixed;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,0.05),transparent);bottom:-100px;left:-100px;animation:float2 10s ease-in-out infinite;pointer-events:none}
  .glass{background:rgba(255,255,255,0.1);backdrop-filter:blur(30px);border:1px solid rgba(255,255,255,0.2);border-radius:24px;padding:32px 24px;animation:fadeUp 0.6s ease forwards;width:100%;max-width:400px}
  .input{width:100%;padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.1);color:white;font-size:15px;font-family:'Poppins',sans-serif;outline:none;box-sizing:border-box;margin-bottom:14px;transition:border 0.3s}
  .input::placeholder{color:rgba(255,255,255,0.5)}
  .input:focus{border-color:rgba(255,255,255,0.5);background:rgba(255,255,255,0.15)}
  .login-btn{width:100%;padding:14px;background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);color:white;border:1px solid rgba(255,255,255,0.3);border-radius:12px;font-weight:700;font-size:16px;cursor:pointer;font-family:'Poppins',sans-serif;animation:glow 2s infinite;margin-top:8px;transition:background 0.3s}
  .login-btn:hover{background:rgba(255,255,255,0.3)}
  .divider{display:flex;align-items:center;gap:12px;margin:20px 0}
  .divider-line{flex:1;height:1px;background:rgba(255,255,255,0.2)}
  .error{background:rgba(255,50,50,0.2);border:1px solid rgba(255,50,50,0.4);border-radius:10px;padding:10px 14px;font-size:13px;color:#ffaaaa;margin-bottom:14px}
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
    if (password.length < 6) { setError('Password kam se kam 6 characters ka hona chahiye!'); return }
    setLoading(true)
    setError('')
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
      navigate('/')
    } catch (err) {
      if (err.code === 'auth/user-not-found') setError('Email nahi mila! Pehle register karo.')
      else if (err.code === 'auth/wrong-password') setError('Password galat hai!')
      else if (err.code === 'auth/email-already-in-use') setError('Yeh email pehle se registered hai!')
      else if (err.code === 'auth/invalid-email') setError('Valid email likho!')
      else setError('Error: ' + err.message)
    }
    setLoading(false)
  }

  return (
    <div className="animated-bg">
      <style>{styles}</style>
      <div className="orb1" /><div className="orb2" />
      <div style={{ width: '100%', maxWidth: '400px', position: 'relative', zIndex: 1 }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '56px', marginBottom: '8px' }}>🛒</div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: 'white', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>OMYangmart</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', letterSpacing: '3px', marginTop: '4px' }}>FRESH GROCERY DELIVERY</div>
        </div>

        <div className="glass">
          <h2 style={{ marginBottom: '6px', fontWeight: '700', fontSize: '20px', color: 'white' }}>
            {isRegister ? 'Naya Account 🎉' : 'Welcome Back! 👋'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '24px' }}>
            {isRegister ? 'Register karke shopping shuru karo' : 'Login karke shopping shuru karo'}
          </p>

          {error && <div className="error">⚠️ {error}</div>}

          <input className="input" type="email" placeholder="📧 Email address" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="🔒 Password (min 6 chars)" value={password} onChange={e => setPassword(e.target.value)} />

          {!isRegister && (
            <div style={{ textAlign: 'right', marginBottom: '16px', marginTop: '-8px' }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', cursor: 'pointer' }}>Forgot Password?</span>
            </div>
          )}

          <button className="login-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? '⏳ Please wait...' : isRegister ? 'Register →' : 'Login →'}
          </button>

          <div className="divider">
            <div className="divider-line" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>ya</span>
            <div className="divider-line" />
          </div>

          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
            {isRegister ? 'Pehle se account hai? ' : 'Naya account? '}
            <span style={{ color: 'white', cursor: 'pointer', fontWeight: '700', textDecoration: 'underline' }}
              onClick={() => { setIsRegister(!isRegister); setError('') }}>
              {isRegister ? 'Login karo' : 'Register karo'}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
