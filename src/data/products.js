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
   [151, 'Snacks', 'Soan Papdi', '200 g', 55, 70, '🍬', '/images/soanpapdi.png'],
  [152, 'Snacks', 'Soan Papdi', '400 g', 110, 135, '🍬', '/images/soanpapdi.png'],
  [153, 'Drinks', 'Junior Horlicks', '500 g', 320, 329, '🥛', '/images/juniorhorlicks.png'],
  [154, 'Drinks', 'Horlicks', '500 g', 260, 264, '🥛', '/images/horlicks.png'],
  [155, 'Drinks', 'Lite Horlicks', '500 g', 320, 325, '🥛', '/images/litehorlicks.png'],
  [156, 'Drinks', 'Horlicks', '1 kg', 430, 440, '🥛', '/images/horlicks1kg.png'],
  [157, 'Health', 'Dabur Chyawanprash', '1 kg', 400, 440, '🍯', '/images/chyawanprash.png'],
  [158, 'Dry Fruits', 'Pista Badam', '250 g', 240, 400, '🥜', '/images/pistabadam.png'],
  [159, 'Dry Fruits', 'Kismis', '250 g', 125, 250, '🍇', '/images/kismis.png'],
  [160, 'Dry Fruits', 'Walnut', '250 g', 300, 650, '🥜', '/images/walnut.png'],
  [161, 'Dry Fruits', 'Anjeer', '250 g', 250, 700, '🟤', '/images/anjeer.png'],
  [162, 'Dry Fruits', 'Kaju', '250 g', 250, 400, '🥜', '/images/kaju.png'],
  [163, 'Dry Fruits', 'Dates', '500 g', 320, 400, '🟤', '/images/dates.png'],
  [164, 'Dry Fruits', 'Kimia Kajur', '250 g', 230, 265, '🟤', '/images/kimakajur.png'],
  [165, 'Snacks', 'Rusk', '200 g', 39, 40, '🍞', '/images/risk.png'],
  [166, 'Snacks', 'Haldirams Bhujia', '200 g', 70, 90, '🥨', '/images/rambhujia.png'],
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
