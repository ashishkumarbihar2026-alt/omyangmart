// [id, category, naam, unit, price, mrp, emoji, photo]
// Naya product: sabse neeche nayi line jodo, id hamesha nayi (pichli se bada) rakho.
const rows = [
  [1, 'Sabzi', 'Aloo', '1 kg', 30, 40, '🥔', '/images/file_00000000a85882119971c6a782a8a9af.png'],
  [2, 'Sabzi', 'Tamatar', '1 kg', 25, 35, '🍅', '/images/tamatar.png'],
  [3, 'Sabzi', 'Pyaz', '1 kg', 40, 50, '🧅', '/images/pyaz.png'],
  [33, 'Dairy & Bread', 'Doodh', '1 L', 60, 70, '🥛', '/images/doodh.png'],
  [37, 'Dairy & Bread', 'Ande', '12 pcs', 80, 96, '🥚', '/images/ande.png'],
  [38, 'Dairy & Bread', 'Bread', '1 Pack', 45, 55, '🍞', '/images/bread.png'],
  [45, 'Atta & Dal', 'Atta', '5 kg', 230, 260, '🌾', '/images/atta.png'],
  [46, 'Atta & Dal', 'Basmati Chawal', '1 kg', 110, 130, '🍚', '/images/chawal.png'],
]

export const products = rows.map(([id, cat, n, u, price, mrp, emoji, image]) => ({
  id,
  cat,
  name: `${n} (${u})`,
  unit: u,
  price,
  mrp,
  emoji,
  image,
  rating: +(4 + ((id * 7) % 10) / 10).toFixed(1),
  time: '10 min',
  off: Math.round(((mrp - price) / mrp) * 100),
}))

export const categories = ['All', ...new Set(rows.map(r => r[1]))]
