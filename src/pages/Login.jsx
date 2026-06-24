import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (email && password) {
      alert('Login successful!')
      navigate('/')
    } else {
      alert('Email aur password bharo!')
    }
  }

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div style={{ background: '#1a1a2e', borderRadius: '20px', padding: '32px', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ color: '#00ff88', textAlign: 'center', marginBottom: '24px' }}>🛒 OMYangmart</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #00ff88', background: '#0a0a0a', color: 'white', marginBottom: '12px', boxSizing: 'border-box' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #00ff88', background: '#0a0a0a', color: 'white', marginBottom: '20px', boxSizing: 'border-box' }}
        />
        <button onClick={handleLogin} style={{ width: '100%', padding: '12px', background: '#00ff88', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px' }}>
          Login
        </button>
        <p style={{ textAlign: 'center', marginTop: '16px', color: '#888' }}>New user? <span style={{ color: '#00ff88' }}>Register karo</span></p>
      </div>
    </div>
  )
}
