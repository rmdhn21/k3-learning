const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

// Find chapter 3
const ch3Start = code.indexOf("{", code.indexOf("id: 'ch3'"));
const ch4Start = code.indexOf("{", code.indexOf("id: 'ch4'"));

const head = code.substring(0, ch3Start);
const tail = code.substring(ch4Start);

const ch3Content = `  {
    id: 'ch3', num: 3, title: 'Gas Detector', badge: 'badge-blue',
    desc: 'Alat pendeteksi gas berbahaya untuk keselamatan kerja di area RIG.',
    icon: '📡',
    html: \`
<div class="section-header">
  <div class="section-badge badge-blue">BAB 3</div>
  <h2 class="section-title">Gas <span>Detector</span></h2>
  <p class="section-subtitle">Pendeteksi Gas Berbahaya - Jenis, Fungsi & Batas Aman</p>
</div>

<div class="content-block">
  <h3><span class="icon">📖</span> Pengertian Gas Detector</h3>
  <p>Gas Detector adalah instrumen kalibrasi elektronik portabel (<em>portable gas monitor</em>) maupun stasioner (<em>fixed gas detector</em>) yang mutakhir, difungsikan secara mutlak sebagai garda pra-peringatan untuk mengendus, mengukur, mendeteksi, dan membunyikan alarm evakuasi saat mendeteksi ambang batas keberadaan unsur senyala gas hidrokarbon beracun atau konsentrasi massa gas mudah meledak di atmosfer ruang kerja geologi perminyakan (<em>oil & gas environment</em>).</p>
  <p>Dalam operasi pengeboran migas, pelepasan tekanan fluida reservoir campuran bumi sering kali menyemburkan gelembung komponen kimia tak kasat mata namun berspektrum mematikan. Penggunaan unit instrumen detektor 4-gas (<em>4-gas monitor</em>) yang menjepit seragam wajib dikenakan setiap perwira sebelum memasuki perimeter zona penyulingan, ruang tertutup tangki (<em>confined space</em>), atau unit pompa lumpur yang bergejolak.</p>
</div>

<div class="img-container">
  <img src="images/gas_detector.png" alt="Gas Detector">
  <div class="img-caption">Jenis-jenis Gas Detector yang digunakan di industri migas</div>
</div>

<div class="content-block">
  <h3><span class="icon">⚗️</span> Gas Berbahaya di RIG</h3>
  <div class="table-container"><table>
    <thead><tr><th>Gas</th><th>Rumus</th><th>Sifat</th><th>Batas Aman (TWA)</th><th>Bahaya</th></tr></thead>
    <tbody>
      <tr><td><strong>Hydrogen Sulfide</strong></td><td>H₂S</td><td>Bau telur busuk, lebih berat dari udara (<span class="math">1.19</span>)</td><td>10 ppm</td><td>Mematikan >100 ppm, melumpuhkan penciuman >150 ppm (<em>olfactory fatigue</em>)</td></tr>
      <tr><td><strong>Carbon Monoxide</strong></td><td>CO</td><td>Tidak berwarna, tidak berbau, <em>silent killer</em></td><td>25 ppm</td><td>Mengikat hemoglobin <span class="math">200x</span> lebih kuat, asfiksia</td></tr>
      <tr><td><strong>Sulfur Dioxide</strong></td><td>SO₂</td><td>Bau menyengat teroksidasi</td><td>2 ppm</td><td>Iritasi mukosa membran mata & saluran napas asma</td></tr>
      <tr><td><strong>Methane</strong></td><td>CH₄</td><td>Tidak berbau, LEL rendah</td><td>LEL 5%, UEL 15%</td><td>Ledakan volatil, mendesak displasement oksigen</td></tr>
      <tr><td><strong>Oksigen</strong></td><td>O₂</td><td>Normal 20.9%</td><td>19.5%-23.5%</td><td>&lt;19.5% defisiensi, >23.5% akselerator murni pembakaran</td></tr>
    </tbody>
  </table></div>
</div>

<div class="content-block">
  <h3><span class="icon">☠️</span> Karakteristik Mematikan Hydrogen Sulfide (H₂S)</h3>
  <p>Pembunuh senyap nomor konsekutif teratas nomor satu di riwayat pengeboran sumur korosif laut dalam (<em>sour gas well</em>). Gas hidrokarbon ini merayap bocor menyelinap dalam formasi gas sulfur tanpa tanda peringatan pengaduk visual visual.</p>
  <ul>
    <li><strong>Sifat Hidrodinamis Berat:</strong> H2S secara ikatan berat jenis spesifik (<em>specific gravity</em> <strong>1.19</strong>) terbukti murni jauh <strong>lebih membebani bumi</strong> dibanding komposisi udara atmosfer normal (berat jenis 1.0). Alhasil, di hari tak berangin, aliran rembesan gas H2S secara perlahan akan tumpah turun merayap ke dataran struktur lekukan terendah — berkumpul secara tenang mengendap tak tepercik memenuhi kubangan selokan got (<em>trenches</em>), mangkuk sumur bawah panggung (<em>cellar</em>), dan perut cekungan ruang tangki kosong.</li>
  </ul>
</div>

<div class="content-block">
  <h3><span class="icon">📊</span> Level Bahaya H₂S</h3>
  <div class="concept-map">
    <div class="concept-map-title">Tingkat Konsentrasi H₂S & Efeknya</div>
    <div class="mermaid">
graph TD
    A["H₂S - Hydrogen Sulfide"] --> B["0.01-1.5 ppm<br/>Bau terdeteksi (bau telur busuk)"]
    B --> C["10 ppm (TWA)<br/>Batas Aman 8 Jam Kerja"]
    C --> D["15 ppm (STEL)<br/>Batas Paparan Singkat (15 mnt)"]
    D --> E["100 ppm<br/>Melumpuhkan Indra Penciuman"]
    E --> F[">500 ppm<br/>Koma / Kematian Instan"]
    style A fill:#3b82f6,color:#fff
    style C fill:#22c55e,color:#fff
    style D fill:#eab308,color:#000
    style F fill:#ef4444,color:#fff
    </div>
  </div>
  <ul>
    <li><strong>Ambang Ambang Bau Manipulatif:</strong> Keberadaannya menguar menebar indikasi sinyal tajam berupa bau tak sedap mirip ratusan butir bau telur busuk pekat pada konsentrasi serendah <strong>1 ppm</strong>, seakan memberi peringatan ramah. Naasnya, ketika volume kebocoran sulfur mendadak meroket tak terkendali melonjak di atas batas limit <strong>100 ppm sampai 150 ppm</strong>, molekul kimia ini secara harfiah seketika malah akan membakar reseptor membunuh ujung saraf kranial lobus indera penciuman operator seketika (<em>olfactory fatigue / kelumpuhan penciuman</em>). Pekerja tersenyum bodoh merasa aman mengendus udara bersih, walau sebenarnya sel saraf deteksinya telah putus dan ajal sudah bersandar mampir 3 menit di depan matanya (<em>asphyxiation</em> sistem saraf bernapas sentral lumpuh).</li>
    <li><strong>Alarm Peringkat TWA & STEL:</strong> <strong>TWA (<em>Time Weighted Average</em>):</strong> Sensor detektor otomatis akan mulai berkedip melengking agresif menjerit menembus 90 desibel telinga tatkala parameter paparan partikel hidrogen sulfida rata-rata mulai secara konstan menduduki digit ambang konsentrasi <strong>10 ppm</strong> merujuk untuk beban jam siklus perputaran siklus kerja hari penuh 8 jam berturut. <strong>STEL (<em>Short Term Exposure Limit</em>):</strong> Ambang batas lonjakan paparan dosis kilat 15 menit puncak absolut secara fatal dipatok detektor pada alarm meliuk level <strong>15 ppm</strong>.</li>
  </ul>
</div>

<div class="alert alert-success">
  <div class="alert-icon">💡</div>
  <div class="alert-content">
    <div class="alert-title">Tips Tes</div>
    <div class="alert-text">Ketahui sifat H₂S: <strong>Lebih berat dari udara</strong> (berada di tempat rendah) dan menyebabkan <strong>kelumpuhan penciuman</strong>. Batas aman (TWA) adalah <strong>10 ppm</strong>.</div>
  </div>
</div>\`
  },
`;

fs.writeFileSync('chapters.js', head + ch3Content + tail);
console.log('Successfully updated chapter 3');
