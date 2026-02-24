const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

// Find chapter 8
const ch8Start = code.indexOf("{", code.indexOf("id: 'ch8'"));
const ch9Start = code.indexOf("{", code.indexOf("id: 'ch9'"));

const head = code.substring(0, ch8Start);
const tail = code.substring(ch9Start);

const ch8Content = `  {
    id: 'ch8', num: 8, title: 'Peralatan Emergency', badge: 'badge-red',
    desc: 'Peralatan darurat yang wajib tersedia di RIG untuk penanganan keadaan darurat.',
    icon: '🆘',
    html: \`
<div class="section-header">
  <div class="section-badge badge-red">BAB 8</div>
  <h2 class="section-title">Peralatan <span>Emergency</span></h2>
  <p class="section-subtitle">Peralatan Tanggap Darurat & Mitigasi di Lingkungan RIG</p>
</div>

<div class="content-block">
  <p>Jika lapisan pemetaan analisis SIKA, sistem detektor gas otomatis, dan pembatasan mekanis semuanya hancur secara simultan—seperti dalam kasus ledakan sumur migas—parameter akhir perlindungan beralih pada fase mitigasi eksodus absolut melalui aktivasi protokol <strong>Emergency Response Plan (ERP)</strong>. Ekosistem mitigasi di anjungan pengeboran dikelilingi oleh piranti navigasi evakuasi pasif dan intervensi udara pernapasan artifisial.</p>
</div>

<div class="content-block">
  <h3><span class="icon">🚩</span> Navigasi Windsock & Strategi Pelarian</h3>
  <p>Navigasi penyelamatan utama dikoordinasikan secara fisik melalui panduan penunjuk visual berupa kantong angin vertikal (<strong>Windsock</strong>). Alat tiup ini wajib dikonstruksi di struktur geometri ruang bebas pada elevasi tertinggi, yang mudah dilihat tajam dari ruang modul lantai bor utama (<em>drill floor</em>) serta blok mesin penyimpanan tangki material sirkulasi lumpur berat (<em>mud pits area</em>).</p>
  
  <div class="alert alert-warning">
    <div class="alert-icon">🌪️</div>
    <div class="alert-content">
      <div class="alert-title">Arah Lari Evakuasi Gas H₂S</div>
      <div class="alert-text">Sesuai dengan doktrin mutlak pelarian paparan gas toksik Hidrogen Sulfida bertekanan besar, personel dilarang keras melarikan diri *mengikuti* aliran angin (karena akan tersapu gas). Sebaliknya, kru harus bergerak menyamping dan secara eksponensial berlari <strong>MELAWAN trajektori sumber aliran arah datangnya embusan angin (<em>escape upwind of wellbore / crosswind</em>)</strong>.</div>
    </div>
  </div>
</div>

<div class="img-container">
  <img src="images/windsock.png" alt="Windsock and Muster Point">
  <div class="img-caption">Windsock sebagai penunjuk arah angin darurat & Titik Kumpul (Muster Point)</div>
</div>

<div class="content-block">
  <h3><span class="icon">📍</span> Muster Point (Titik Kumpul)</h3>
  <p>Manifes evakuasi diakomodasi ke dalam desain pos stasiun kumpul aman yang disebut titik <em>Briefing Area</em> atau <strong>Muster Point</strong>. Regulasi rig mewajibkan pembangunan sekurang-kurangnya dua buah basis kumpul area pelarian di atas tanah lapang (Primary and Secondary Briefing Areas).</p>
  <p>Rasionalisasi teknis: Penempatan koordinat area kumpul kedua tidak diletakkan bersebelahan, melainkan secara sengaja dipisahkan jauh dengan orientasi sudut proyeksi bersilang sejauh <strong>90 derajat (90 deg off)</strong> memutar area pabrik. Jika rotasi arah angin berubah tiba-tiba menyapu area primer dengan gas mematikan, staf dapat memobilisasi diri memutar menembus garis aman baru ke kamp sekunder tanpa melewati pusat titik bocornya gas.</p>
</div>

<div class="content-block">
  <h3><span class="icon">🫁</span> Respirator Udara Darurat (SCBA & SCAPE)</h3>
  <p>Pada stasiun pelarian ini tersimpan perangkat artifisial respirator tabung tabung kompresi portabel bertekanan positif tinggi:</p>
  <ul>
    <li><strong>SCBA (Self-Contained Breathing Apparatus):</strong> Dipunggung seperti tas ransel. Difungsikan untuk memasok volume liter bernapas bagi divisi paramedis pertolongan dan regu pemadaman spesialis guna menembus pusat titik beracun tanpa henti. (Waktu suplai ±30-45 menit).</li>
    <li><strong>SCAPE (Self-Contained Air Penatration / Escape Unit):</strong> Sering disebut *Escape Hood*. Berbentuk tudung kepala dengan tabung kecil yang dikalungkan. Khusus menunjang kebutuhan napas singkat (±10 menit) murni untuk <em>melarikan diri</em> anggota kru malang turun dari menara tinggi derrick sebelum asfiksia menerkam.</li>
  </ul>
</div>

<div class="content-block">
  <h3><span class="icon">🚨</span> Major Emergency Drill</h3>
  <p>Meskipun kesiapan instalasi navigasi pelarian sangat tinggi, validasi efektivitas harus selalu diuji simulasi melalui praktik besar evakuasi (<em>major emergency drill</em>), seperti simulasi malam hari atau simulasi <em>Man Down</em>. Tantangan nyata pelaporan kalkulasi akurasi (<em>headcount</em>) sangat krusial, karena dalam teror nyata, insting manusia sering memilih memencar tanpa komando prosedural.</p>
</div>

<div class="alert alert-success">
  <div class="alert-icon">💡</div>
  <div class="alert-content">
    <div class="alert-title">Tips Tes</div>
    <div class="alert-text">Hafal arah evakuasi gas: Berjalan/berlari ke arah <strong>Upwind (berlawanan arah angin) atau Crosswind (menyilang arah angin)</strong> sejauhk mungkin dari sumber gas. Pahami beda SCBA (untuk <em>rescue/work</em> durasi panjang) dan SCAPE/EEBA (hanya untuk <em>Escape/lari</em> durasi 10 menit).</div>
  </div>
</div>\`
  },
`;

fs.writeFileSync('chapters.js', head + ch8Content + tail);
console.log('Successfully updated chapter 8');
