import { useNavigate } from 'react-router-dom'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-40px)}}
  @keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,30px)}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
  .orb1{position:fixed;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,#ff660015,transparent);top:-150px;right:-100px;animation:float1 8s ease-in-out infinite;pointer-events:none;z-index:0}
  .orb2{position:fixed;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,#ff990015,transparent);bottom:-100px;left:-100px;animation:float2 10s ease-in-out infinite;pointer-events:none;z-index:0}
  .glass{background:rgba(255,255,255,0.05);backdrop-filter:blur(20px);border:1px solid rgba(255,102,0,0.2);border-radius:18px;padding:18px;animation:fadeUp 0.4s ease forwards;margin-bottom:12px}
  .badge-pending{background:rgba(255,170,0,0.2);color:#ffaa00;border:1px solid #ffaa0044;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:600}
  .badge-delivered{background:rgba(0,200,100,0.2);color:#00c864;border:1px solid #00c86444;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:600}
  .back-btn{background:transparent;color:#ff9900;border:1px solid rgba(255,102,0,0.4);padding:10px 20px;border-radius:30px;font-family:'Poppins',sans-serif;cursor:pointer;margin-bottom:20px;font-size:13px}
  .stat-card{background:rgba(255,102,0,0.1);backdrop-filter:blur(20px);border:1px solid rgba(255,102,0,0.2);border-radius:16px;padding:16px;text-align:center;flex:1}
`

const orders = [
  { id: 1, name: 'Rahul Kumar', items: 'Aloo, Tamatar, Pyaz', total: 95, status: 'Pending', time: '10 min ago' },
  { id: 2, name: 'Priya Sharma', items: 'Doodh, Bread', total: 105, status: 'Delivered', time: '25 min ago' },
  { id: 3, name: 'Amit Singh', items: 'Ande, Aloo', total: 110, status: 'Pending', time: '5 min ago' },
]

export default function Admin() {
  const navigate = useNavigate()

  return (
    <div style={{ background: 'linear-gradient(160deg,#0a0500 0%,#1a0a00 50%,#0a0500 100%)', minHeight: '100vh', color: 'white', padding: '20px', fontFamily: 'Poppins,sans-serif' }}>
      <style>{styles}</style>
      <div className="orb1" /><div className="orb2" />
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: '800', background: 'linear-gradient(135deg,#ff6600,#ff9900)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>⚙️ Admin Panel</div>
            <div style={{ fontSize: '11px', color: '#ff990066' }}>OMYangmart Dashboard</div>
          </div>
          <button className="back-btn" onClick={() => navigate('/')}>← Home</button>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <div className="stat-card">
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#ff9900' }}>3</div>
            <div style={{ fontSize: '11px', color: '#ffffff66' }}>Total Orders</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#ff9900' }}>₹310</div>
            <div style={{ fontSize: '11px', color: '#ffffff66' }}>Revenue</div>
          </div>
          <div className="stat-card">
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#00c864' }}>1</div>
            <div style={{ fontSize: '11px', color: '#ffffff66' }}>Delivered</div>
          </div>
        </div>

        {/* Orders */}
        <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px' }}>📦 Recent Orders</div>
        {orders.map((o, i) => (
          <div key={o.id} className="glass" style={{ animationDelay: `${i * 0.1}s` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div style={{ fontWeight: '700', fontSize: '15px' }}>{o.name}</div>
              <span className={o.status === 'Delivered' ? 'badge-delivered' : 'badge-pending'}>{o.status}</span>
            </div>
            <div style={{ color: '#ffffff66', fontSize: '13px', marginBottom: '8px' }}>🛒 {o.items}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ background: 'linear-gradient(135deg,#ff6600,#ff9900)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '700', fontSize: '16px' }}>₹{o.total}</span>
              <span style={{ fontSize: '11px', color: '#ffffff44' }}>🕐 {o.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
          }
