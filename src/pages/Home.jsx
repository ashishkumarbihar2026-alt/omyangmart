import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
  { id: 1, name: 'Aloo (1kg)', price: 30, emoji: '🥔' },
  { id: 2, name: 'Tamatar (1kg)', price: 25, emoji: '🍅' },
  { id: 3, name: 'Pyaz (1kg)', price: 40, emoji: '🧅' },
  { id: 4, name: 'Doodh (1L)', price: 60, emoji: '🥛' },
  { id: 5, name: 'Bread', price: 45, emoji: '🍞' },
  { id: 6, name: 'Ande (12pcs)', price: 80, emoji: '🥚' },
]

export default function Home() {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  const addToCart = (product) => {
    setCart([...cart, product])
    alert(`${product.name} cart mein add ho gaya!`)
  }

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: 'white', padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#00ff88', fontSize: '24px', margin: 0 }}>🛒 OMYangmart</h1>
        <button onClick={() => navigate('/cart')} style={{ background: '#00ff88', color: '#000', border: 'none', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold' }}>
          Cart ({cart.length})
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {products.map(p => (
          <div key={p.id} style={{ background: '#1a1a2e', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px' }}>{p.emoji}</div>
            <div style={{ fontWeight: 'bold', margin: '8px 0' }}>{p.name}</div>
            <div style={{ color: '#00ff88', marginBottom: '8px' }}>₹{p.price}</div>
            <button onClick={() => addToCart(p)} style={{ background: '#00ff88', color: '#000', border: 'none', padding: '6px 16px', borderRadius: '20px', fontWeight: 'bold', width: '100%' }}>
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  )
            }
