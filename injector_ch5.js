const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

// Find chapter 5
const ch5Start = code.indexOf("{", code.indexOf("id: 'ch5'"));
const ch6Start = code.indexOf("{", code.indexOf("id: 'ch6'"));

const head = code.substring(0, ch5Start);
const tail = code.substring(ch6Start);

const ch5Content = `  {
    id: 'ch5', num: 5, title: 'Unsafe Action & Condition', badge: 'badge-purple',
    desc: 'Tindakan dan kondisi tidak aman sebagai penyebab utama kecelakaan kerja.',
    icon: '🚫',
    html: \`
<div class="section-header">
  <div class="section-badge badge-purple">BAB 5</div>
  <h2 class="section-title">Unsafe Action & <span>Unsafe Condition</span></h2>
  <p class="section-subtitle">Dua Penyebab Utama Kecelakaan Kerja (88% vs 10%)</p>
</div>

<div class="content-block">
  <p>Investigasi teoretis terhadap kausalitas insiden kecelakaan kerja selalu berujung pada pemetaan interaksi disfungsional antara pekerja, peralatan, dan lingkungan spasial sistem tempat mereka berfungsi. Secara akademis rancangan DuPont dan praktik lapangan, identifikasi akar preseden yang langsung menyebabkan kecelakaan diisolasi menjadi dua subkategori primer yang dianalisis dalam pelaporan observasi keselamatan harian (PEKA).</p>
</div>

<div class="img-container">
  <img src="images/unsafe_act.png" alt="Unsafe Action & Condition">
  <div class="img-caption">Ilustrasi perbedaan esensial antara Tindakan Tidak Aman dan Kondisi Tidak Aman di tempat kerja</div>
</div>

<div class="content-block">
  <h3><span class="icon">🏃</span> Unsafe Action (Tindakan Tidak Aman) - 88% Penyebab</h3>
  <p>Konsep tindakan tidak aman (<em>Unsafe Action/Act</em>) merujuk pada penyimpangan prosedur—baik disengaja karena kepatuhan yang buruk, kelalaian kognitif, persepsi risiko yang terdistorsi, perilaku <em>macho</em>, maupun rasa percaya diri (<em>overconfidence</em>) yang berlebihan—yang dilakukan langsung oleh elemen manusia di luar protokol aman. Indikator ini merupakan variabel manusiawi yang menuntut intervensi modifikasi perilaku dan <em>safety leadership</em>.</p>
  <div class="key-points">
    <div class="key-point"><div class="key-point-icon">⚠️</div><div class="key-point-title">Contoh Kasus Unsafe Action</div><div class="key-point-desc">
      <ul>
        <li>Mengoperasikan mesin rig (drawworks) tanpa sertifikasi SIO.</li>
        <li>Bekerja di ketinggian tanpa mengaitkan fall arrester lanyard (100% tie-off).</li>
        <li>Merokok di area terlarang (Red Zone) dekat kompresor gas.</li>
        <li>Berjalan melintas persis di bawah peti kemas berton-ton yang sedang diayunkan crane (<em>walking under suspended load</em>).</li>
        <li>Bercanda fisik (<em>horseplay</em>) di lantai bor licin.</li>
      </ul>
    </div></div>
  </div>
</div>

<div class="content-block">
  <h3><span class="icon">🚧</span> Unsafe Condition (Kondisi Tidak Aman) - 10% Penyebab</h3>
  <p>Sebaliknya, kondisi tidak aman (<em>Unsafe Condition</em>) berfokus sepenuhnya pada dimensi lingkungan, keusangan arsitektural infrastruktur, dan pelapukan material mekanis. Ini mewakili bahaya yang menyimpan akumulasi <em>potential energy</em> merusak tanpa harus melibatkan variabel pergerakan atau pelanggaran manusiawi pada waktu kejadian.</p>
  <p>Faktor kegagalan kondisi ini murni berada pada dimensi audit kontrol teknik (<em>engineering control</em>) perusahaan yang gagal melakukan pemeliharaan fasilitas (<em>preventive maintenance</em>).</p>
  <div class="key-points">
    <div class="key-point"><div class="key-point-icon">🏚️</div><div class="key-point-title">Contoh Kasus Unsafe Condition</div><div class="key-point-desc">
      <ul>
        <li>Tergelupasnya isolasi kabel high-voltage mud pump sehingga kawat telanjang.</li>
        <li>Tangga vertikal derrick (<em>monkey board ladder</em>) kropos berkarat.</li>
        <li>Penerangan redup di area cellar pembacaan gauge malam hari.</li>
        <li>Genangan pelumas tumpah (<em>oil spill</em>) di lantai bordes rig memicu bahaya slip.</li>
        <li>Bunyi alarm detektor gas tidak berfungsi karena baterai mati.</li>
      </ul>
    </div></div>
  </div>
</div>

<div class="content-block">
  <h3><span class="icon">🔗</span> Interaksi Disfungsional (The Accident)</h3>
  <p>Kedua variabel patologi kerja ini tidak beroperasi secara terpisah; sering kali sebuah kecelakaan fatal terjadi ketika seorang kru yang melakukan tindakan tidak aman (<em>unsafe act</em>) tanpa sadar memaparkan dirinya pada lingkungan yang secara struktural sudah cacat (<em>unsafe condition</em>), memicu pelepasan energi insiden seketika yang berpotensi menghasilkan LTI atau Fatality.</p>
  <div class="alert alert-warning">
    <div class="alert-icon">⚡</div>
    <div class="alert-content">
      <div class="alert-title">Skenario Kombinasi Maut</div>
      <div class="alert-text">Pekerja <strong>berjalan terburu-buru sambil main HP (Unsafe Act)</strong> melintasi area yang terdapat <strong>tumpahan oli yang belum dibersihkan (Unsafe Condition)</strong>. Hasilnya: Terpeleset, gegar otak (LTI).</div>
    </div>
  </div>
</div>

<div class="alert alert-success">
  <div class="alert-icon">💡</div>
  <div class="alert-content">
    <div class="alert-title">Tips Tes</div>
    <div class="alert-text">Hafal persentase: Unsafe Action (manusia) <strong>88%</strong>, Unsafe Condition (lingkungan/alat) <strong>10%</strong>, Takdir/Act of God <strong>2%</strong>. Cara membedakannya: Kalau itu ulah orang/perilaku = Action. Kalau itu wujud benda/situasi yang rusak/bahaya = Condition.</div>
  </div>
</div>\`
  },
`;

fs.writeFileSync('chapters.js', head + ch5Content + tail);
console.log('Successfully updated chapter 5');
