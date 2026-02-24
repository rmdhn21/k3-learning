const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

// Find chapter 2
const ch2Start = code.indexOf("{", code.indexOf("id: 'ch2'"));
const ch3Start = code.indexOf("{", code.indexOf("id: 'ch3'"));

const head = code.substring(0, ch2Start);
const tail = code.substring(ch3Start);

const ch2Content = `  {
    id: 'ch2', num: 2, title: 'Klasifikasi APAR', badge: 'badge-red',
    desc: 'Jenis-jenis alat pemadam api ringan dan penggunaannya berdasarkan kelas kebakaran.',
    icon: '🧯',
    html: \`
<div class="section-header">
  <div class="section-badge badge-red">BAB 2</div>
  <h2 class="section-title">Klasifikasi <span>APAR</span></h2>
  <p class="section-subtitle">Alat Pemadam Api Ringan - Jenis, Kelas Kebakaran & Cara Penggunaan</p>
</div>

<div class="content-block">
  <h3><span class="icon">📖</span> Pengertian APAR</h3>
  <p>APAR (Alat Pemadam Api Ringan) atau <em>Fire Extinguisher</em> adalah alat pemadam api yang dapat dibawa dan digunakan oleh satu orang. APAR berisi media pemadam yang dapat disemprotkan untuk memadamkan api pada tahap awal kebakaran.</p>
  <p>Menurut Permenaker No. 4 Tahun 1980, setiap perusahaan wajib menyediakan APAR di tempat kerja dengan jarak maksimal <strong>15 meter</strong> antar APAR dan tinggi pemasangan <strong>1,2 meter</strong> (125 cm) dari lantai. Instalasi strategis sistem tanggap darurat mewajibkan keberadaan titik peletakkan tabung silinder pemadam pada batas ambang tinggi jangkauan ergonomis tubuh operator rata-rata (kisaran bahu).</p>
</div>

<div class="img-container">
  <img src="images/fire_extinguisher.png" alt="Klasifikasi APAR">
  <div class="img-caption">Jenis-jenis APAR berdasarkan media pemadam dan kelas kebakaran</div>
</div>

<div class="content-block">
  <h3><span class="icon">🔥</span> Kelas Kebakaran</h3>
  <p>Kebakaran dipilah berlandaskan basis senyawa materi molekuler material yang tengah dilalap eksotermik api, sehingga menentukan diferensiasi presisi agen zat pemadam yang mesti disemprotkan:</p>
  <div class="key-points">
    <div class="key-point"><div class="key-point-icon">🅰️</div><div class="key-point-title">Kelas A (Combustible Solid)</div><div class="key-point-desc">Benda padat non-logam: kayu balsa, tumpukan kertas karton, gulungan kain tekstil, polimer plastik, karet</div></div>
    <div class="key-point"><div class="key-point-icon">🅱️</div><div class="key-point-title">Kelas B (Flammable Liquid/Gas)</div><div class="key-point-desc">Cairan/gas korosif mudah terbakar: bensin octane (gasoline), solar, minyak pelumas sintetik, cat thinner aerosol, alkohol, LPG, natural gas.</div></div>
    <div class="key-point"><div class="key-point-icon">©️</div><div class="key-point-title">Kelas C (Electrical Fire)</div><div class="key-point-desc">Tegangan arus listrik aktif tinggi: korsleting trafo panel hubung, kabel induksi arus pendek terbuka. Media pemadam dilarang keras mengandung muatan hantaran konduktor (Air).</div></div>
    <div class="key-point"><div class="key-point-icon">🇩</div><div class="key-point-title">Kelas D (Combustible Metals)</div><div class="key-point-desc">Logam reaktif beringas: magnesium pelek, kepingan serat titanium, lithium silikon baterai, fosfor lab, serbuk aluminium.</div></div>
    <div class="key-point"><div class="key-point-icon">🇰</div><div class="key-point-title">Kelas K (Kitchen Fire)</div><div class="key-point-desc">Minyak masak & lemak dapur komersial. Membutuhkan basuhan lapisan tebal busa <em>saponifikasi</em> sabun kimia (<em>Wet Chemical</em>).</div></div>
  </div>
</div>

<div class="content-block">
  <h3><span class="icon">🧯</span> Jenis Media Pemadam</h3>
  <div class="table-container"><table>
    <thead><tr><th>Media</th><th>Kelas</th><th>Cara Kerja</th><th>Kelebihan</th><th>Kekurangan</th></tr></thead>
    <tbody>
      <tr><td><strong>Air (Water)</strong></td><td>A</td><td>Mendinginkan</td><td>Murah, mudah</td><td>Tidak untuk listrik & minyak</td></tr>
      <tr><td><strong>Busa (Foam / AFFF)</strong></td><td>A, B</td><td>Menyelimuti & mendinginkan</td><td>Efektif untuk cairan</td><td>Tidak untuk listrik</td></tr>
      <tr><td><strong>CO₂</strong></td><td>B, C</td><td>Menghilangkan O₂</td><td>Bersih, untuk elektrikal</td><td>Tidak efektif outdoor, sangat dingin saat disemprotkan</td></tr>
      <tr><td><strong>Dry Chemical Powder (DCP)</strong></td><td>A, B, C</td><td>Memutus reaksi kimia</td><td>Paling serbaguna (Multipurpose ABC)</td><td>Meninggalkan residu lengket kotor</td></tr>
      <tr><td><strong>Wet Chemical</strong></td><td>K</td><td>Saponifikasi (membentuk sabun)</td><td>Khusus dapur</td><td>Terbatas penggunaan</td></tr>
    </tbody>
  </table></div>
</div>

<div class="content-block">
  <h3><span class="icon">📝</span> Cara Penggunaan APAR - Teknik PASS</h3>
  <div class="concept-map">
    <div class="concept-map-title">Teknik PASS</div>
      <div class="mermaid">
graph LR
    NodeP["P - Pull<br/>Tarik pin pengaman"] --> NodeA["A - Aim<br/>Arahkan nozzle ke dasar api"]
    NodeA --> NodeS1["S - Squeeze<br/>Tekan tuas handle"]
    NodeS1 --> NodeS2["S - Sweep<br/>Sapukan ke kiri-kanan"]
    style NodeP fill:#ef4444,color:#fff
    style NodeA fill:#f97316,color:#fff
    style NodeS1 fill:#eab308,color:#000
    style NodeS2 fill:#22c55e,color:#fff
      </div>
  </div>
</div>

<div class="alert alert-info">
    <div class="alert-icon">📏</div>
    <div class="alert-content">
      <div class="alert-title">Jarak Aman Penyemprotan</div>
      <div class="alert-text">Berdiri pada jarak <strong>3-5 meter</strong> dari api. Selalu posisikan diri searah angin (angin dari belakang Anda ke arah api). Pastikan jalur evakuasi di belakang Anda.</div>
    </div>
  </div>

<div class="content-block">
  <h3><span class="icon">⚠️</span> Bahaya Penggunaan Media Pemadam yang Salah</h3>
  <p>Aplikasi implementasi pengerahan taktis penggunaan agen formula senyawa pemadam yang terbukti <strong>tidak saling identik kompatibel</strong> dengan struktur basa material yang tengah terbakar, secara probabilitas dapat memicu perambatan reaksi katastropik bencana destruksi yang jauh lebih fenomenal mematikan ketimbang api awal:</p>
  <div class="img-container">
    <img src="images/image14.png" alt="Dry Chemical Powder APAR">
    <div class="img-caption">APAR jenis Dry Chemical Powder — media pemadam paling serbaguna untuk Kelas A, B, C</div>
  </div>
  <ul>
    <li><strong>Fenomena Katastropik Boil Over (Luapan Mendidih Mematikan):</strong> Kasus nekat menyuntikkan basuhan media cairan benda cair murni (Air/Water) langsung menimpa kolam tangki kobaran api genangan minyak bumi mendidih bersuhu ribuan derajat (Insiden Kelas B) akan seketika mengeksekusi konversi penguapan cairan air menjadi tabir gumpalan uap udara secara spontan kilat (<em>flash evaporation</em>), mengekspansi lipatan volume awal molekulnya secara masif sebesar <strong>1.700 kali lipat</strong> dalam hitungan kurang dari sepersekian detik. Rambatan gelombang ekspansi volume gas dorong ini lantas akan secara frontal melontarkan badai tumpahan bola api minyak murni menyala raksasa (<em>fireball</em>) dengan trajektori sapuan proyektil memusnahkan area luas secara tak terkendali di seluruh perimeter radius kejadian awal.</li>
    <li><strong>Isolator Tabung Pembeku APAR CO₂ (Carbon Dioxide):</strong> Operator pemegang corong tabung tembak diwajibkan menjepit area bagian gagang karet isolator tebal berwarna spesifik, beralasan sifat kurva ekspansi perubahan volume termodinamika instan gas CO2 terkompresi dari ranah wujud cair di dalam ruangan sempit tabung menuju ranah gas di medium atmosfer bebas terbuka akan langsung mereduksi penyerapan drastis temperatur nosel kerucut ujung tembak ke titik rentang pembekuan beku, menyebabkan anomali luka bakar suhu titik rendah (<em>frostbite</em>) yang menghancurkan struktur daging telapak kulit syaraf jika disentuh telanjang secara durasi lama.</li>
  </ul>
</div>

<div class="content-block">
  <h3><span class="icon">🔍</span> Inspeksi Tabung (Regulatori)</h3>
  <ul>
    <li><strong>Regulasi Peletakan Jarak Bebas APAR:</strong> Standar mandatori mewajibkan jarak rute tarik lurus berjalan dari posisi operator berada kapan pun di titik terjauh menuju letak silinder penyimpan APAR terdekat tidak didelegasikan lebih <strong>melebihi jarak 15 meter</strong>, menjamin margin respons detik pertama tak terpotong jauh.</li>
    <li><strong>Norma Spesifikasi Tinggi Dimensi Pemasangan Standar:</strong> Titik stiker petunjuk tanda peringatan letak tabung APAR digantung stabil <strong>125 cm menjuntai di kisaran tinggi dada dari elevasi lantai dasar</strong>, sembari membatasi sisa celah jarak pantat ujung bawah kurva lekuk tabung wajib minimal menjejak melayang <strong>20 cm melayang dari kontur permukaan sentuhan tanah</strong> (mengeliminir risiko akselerasi perkaratan lantai basah).</li>
    <li><strong>Sertifikasi Pengujian Hydrostatic Test Mutlak:</strong> Kalibrasi pembuktian elastisitas kekuatan injeksi tekanan fluida air ekstrem menuju struktur dinding pelindung baja karbon tabung diwajibkan setiap lewat periode <strong>siklus 5 tahun</strong> penuh. Bertujuan esensial membedah letak potensi awal cacat letih material kelelahan logam (<em>metal fatigue</em>) atau reduksi korosi garis rambut siluman pada dinding mikroskopis cangkang silinder internal logam demi mencegah ledakan granat saat operasional kompresi penembakan berlangsung tiba-tiba di ujung tangan pekerja.</li>
  </ul>
</div>

<div class="alert alert-success">
  <div class="alert-icon">💡</div>
  <div class="alert-content">
    <div class="alert-title">Tips Tes</div>
    <div class="alert-text">Hafal teknik <strong>PASS</strong> dan jarak antar APAR <strong>15 meter</strong>. Pertanyaan populer: "Media pemadam yang paling serbaguna?" Jawaban: <strong>Dry Chemical Powder (ABC)</strong>. Tahu juga bahwa menyiram air pada minyak terbakar memicu <strong>Boil Over</strong>.</div>
  </div>
</div>\`
  },
`;

fs.writeFileSync('chapters.js', head + ch2Content + tail);
console.log('Successfully updated chapter 2');
