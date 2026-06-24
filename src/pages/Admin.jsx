import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const navigate = useNavigate()

  const orders = [
    { id: 1, name: 'Rahul', items: 'Aloo, Tamatar', total: 55, status: 'Pending' },
    { id: 2, name: 'Priya', items: 'Doodh, Bread', total: 105, status: 'Delivered' },
  ]

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: 'white', padding: '16px' }}>
      <button onClick={() => navigate('/')} style={{ background: 'transparent', color: '#00ff88', border: '1px solid #00ff88', padding: '8px 16px', borderRadius: '20px', marginBottom: '20px' }}>
        ← Wapas
      </button>
      <h2 style={{ color: '#00ff88' }}>⚙️ Admin Panel</h2>
      <h3 style={{ color: '#888', marginTop: '20px' }}>Recent Orders:</h3>
      {orders.map(o => (
        <div key={o.id} style={{ background: '#1a1a2e', borderRadius: '12px', padding: '16px', marginBottom: '12px' }}>
          <div style={{ fontWeight: 'bold' }}>{o.name}</div>
          <div style={{ color: '#888', fontSize: '14px' }}>{o.items}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
            <span style={{ color: '#00ff88' }}>₹{o.total}</span>
            <span style={{ color: o.status === 'Delivered' ? '#00ff88' : '#ffaa00' }}>{o.status}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
