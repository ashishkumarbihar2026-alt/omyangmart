
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  @keyframes bgshift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
  @keyframes glow{0%,100%{box-shadow:0 0 20px rgba(255,255,255,0.2)}50%{box-shadow:0 0 40px rgba(255,255,255,0.4)}}
  .animated-bg{min-height:100vh;background:linear-gradient(-45deg,#0f0c29,#302b63,#134e5e,#1a1a2e);background-size:400% 400%;animation:bgshift 10s ease infinite;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;font-family:'Poppins',sans-serif}
  .glass{background:rgba(255,255,255,0.1);backdrop-filter:blur(30px);border:1px solid rgba(255,255,255,0.2);border-radius:24px;padding:28px 24px;animation:fadeUp 0.6s ease forwards;width:100%;max-width:380px}
  .input{width:100%;padding:13px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.1);color:white;font-size:15px;font-family:'Poppins',sans-serif;outline:none;box-sizing:border-box;margin-bottom:12px}
  .input::placeholder{color:rgba(255,255,255,0.5)}
  .input:focus{border-color:rgba(255,255,255,0.5)}
  .login-btn{width:100%;padding:14px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;border:none;border-radius:12px;font-weight:700;font-size:16px;cursor:pointer;font-family:'Poppins',sans-serif;animation:glow 2s infinite;margin-top:6px}
  .error{background:rgba(255,50,50,0.2);border:1px solid rgba(255,50,50,0.4);border-radius:10px;padding:10px 14px;font-size:13px;color:#ffaaaa;margin-bottom:12px}
  .success{background:rgba(50,200,100,0.2);border:1px solid rgba(50,200,100,0.4);border-radius:10px;padding:10px 14px;font-size:13px;color:#aaffaa;margin-bottom:12px}
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
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
      navigate('/')
    } catch (err) {
      if (err.code === 'auth/user-not-found') setError('Email nahi mila! Register karo.')
      else if (err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') setError('Email ya password galat hai!')
      else if (err.code === 'auth/email-already-in-use') setError('Yeh email pehle se registered hai! Login karo.')
      else if (err.code === 'auth/invalid-email') setError('Valid email likho!')
      else setError('Error: ' + err.message)
    }
    setLoading(false)
  }

  return (
    <div className="animated-bg">
      <style>{styles}</style>
      <div style={{ width: '100%', maxWidth: '380px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ fontSize: '48px', marginBottom: '4px' }}>🛒</div>
          <div style={{ fontSize: '24px', fontWeight: '800', color: 'white' }}>OMYangmart</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', letterSpacing: '2px' }}>FRESH GROCERY DELIVERY</div>
        </div>

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
    </div>
  )
}
