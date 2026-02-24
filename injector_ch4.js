const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

// Find chapter 4
const ch4Start = code.indexOf("{", code.indexOf("id: 'ch4'"));
const ch5Start = code.indexOf("{", code.indexOf("id: 'ch5'"));

const head = code.substring(0, ch4Start);
const tail = code.substring(ch5Start);

const ch4Content = `  {
    id: 'ch4', num: 4, title: 'Incident', badge: 'badge-yellow',
    desc: 'Pemahaman tentang insiden, kecelakaan kerja, dan piramida kecelakaan.',
    icon: '⚡',
    html: \`
<div class="section-header">
  <div class="section-badge badge-yellow">BAB 4</div>
  <h2 class="section-title">Incident & <span>Kecelakaan Kerja</span></h2>
  <p class="section-subtitle">Definisi, Klasifikasi, Piramida Heinrich & Investigasi</p>
</div>

<div class="content-block">
  <h3><span class="icon">📖</span> Definisi</h3>
  <p>Dalam terminologi manajemen keselamatan internasional, klasifikasi bahasa antara kejadian nyaris celaka dan kecelakaan yang menjatuhkan korban harus dipatok secara definitif hitam-putih. Hal ini penting untuk mengurasi data statistik dan menghitung probabilitas matematis (<em>Leading & Lagging Indicators</em>) guna memprediksi jadwal kedatangan malaikat maut di lokasi kerja.</p>
  <ul>
    <li><strong>Incident (Insiden):</strong> Insiden adalah payung terminologi luas (<em>umbrella term</em>) yang menaungi <strong>semua</strong> rentetan kejadian abnormal, pelepasan energi di luar ekspektasi desain operasi, yang secara kebetulan <strong>bisa melukai tubuh fisik manusia dan bisa juga tidak melecetkan sama sekali</strong>. Di dalamnya terdapat irisan himpunan himpunan kosong bernama <em>Hampir Celaka</em> (Near Miss).</li>
    <li><strong>Accident (Kecelakaan Kerja):</strong> Kecelakaan (Accident) adalah subset hasil akhir dari Insiden yang telah dikonfirmasi <strong>secara fisik merobek jaringan ikat, mematahkan tulang keras, menghancurkan aset besi berharga, atau merusak komponen kimia alam laut</strong>. Sebuah <em>accident</em> mutlak meninggalkan trauma fisik yang harus masuk dalam kartu jurnal medis perusahaan.</li>
  </ul>
</div>

<div class="content-block">
  <h3><span class="icon">🔺</span> Piramida Heinrich (1:29:300)</h3>
  <div class="concept-map">
    <div class="concept-map-title">Teori Piramida Kecelakaan Heinrich</div>
    <div class="mermaid">
graph TD
    A["1 Major Injury / Fatality<br/>Cedera Berat / Kematian"] --> B["29 Minor Injuries<br/>Cedera Ringan"]
    B --> C["300 Near Misses / No Injury<br/>Nyaris Celaka / Tanpa Cedera"]
    C --> D["Ribuan Unsafe Acts & Conditions<br/>Tindakan & Kondisi Tidak Aman"]
    style A fill:#ef4444,color:#fff
    style B fill:#f97316,color:#fff
    style C fill:#eab308,color:#000
    style D fill:#3b82f6,color:#fff
    </div>
  </div>
  <p>Korelasinya ditopang oleh fondasi observasi saintifik yang diarsiteki oleh Herbert W. Heinrich (Teori Domino - 1931). Teori ini menggambar sebuah bentuk geometri segitiga piramida. Membuktikan secara kuantitatif statistik angka bahwa untuk menuntun satu nyawa pekerja ke pintu liang lahat (<strong>1 Fatality</strong>), kronologi waktu semesta pasti telah menyuguhkan lebih dahulu rentetan peringatan berupa <strong>29 Minor Injuries</strong> dan gelombang raksasa <strong>300 laporan kasat mata Near Miss</strong> yang diabaikan dan tidak dimitigasi oleh supervisor pengeboran.</p>
</div>

<div class="content-block">
  <h3><span class="icon">📊</span> Klasifikasi Insiden</h3>
  <p>Parameter pembagian cedera didokumentasikan melalui kriteria standar pelaporan (<em>OSHA Recordability</em>) menjadi berlapis:</p>
  <div class="table-container"><table>
    <thead><tr><th>Klasifikasi</th><th>Singkatan</th><th>Deskripsi & Contoh</th></tr></thead>
    <tbody>
      <tr><td><strong>Fatality</strong></td><td>FAT</td><td>Terpisahnya nyawa dari inang raga pekerja seketika di lokasi, atau hembusan napas terakhir di ranjang unit gawat darurat yang diakibatkan langsung oleh efek domino cedera operasi (misal: terjatuh dari menara <em>derrick</em>, ledakan gas sekunder).</td></tr>
      <tr><td><strong>Lost Time Injury</strong></td><td>LTI</td><td>Insiden horison mematikan di mana dokter memvonis pekerja tersebut tidak bisa kembali berdiri melakukan jadwal penugasan shift-nya keesokan harinya (minimal kehilangan 1x24 jam waktu produktif akibat perawatan). Contoh: Patah tulang punggung bawah (<em>lower back pain extrem</em>), putus jari ruas tangan.</td></tr>
      <tr><td><strong>Restricted Work Case</strong></td><td>RWC / RWDC</td><td>Korban cidera masih diizinkan hadir di lantai proyek keesokan paginya, tetapi diturunkan pangkat fisik tugasnya secara drastis menjadi pekerjaan meja (<em>light duty desk work</em>) karena hilangnya fungsi ekstremitas sendi sementara akibat keseleo hebat.</td></tr>
      <tr><td><strong>Medical Treatment Case</strong></td><td>MTC</td><td>Menuntut aplikasi instrumen invasif jahitan jarum medis pada kulit robek dan resep antibiotik keras (<em>prescription level drugs</em>) dari dokter ahli berlisensi, melebihi batas kemampuan kotak P3K mandiri.</td></tr>
      <tr><td><strong>First Aid Case</strong></td><td>FAC</td><td>Goresan permukaan dangkal, memar jaringan lunak, atau serpihan debu gerinda di mata yang cukup disapu air bersih lalu ditempel kapas plester oleh paramedis rig biasa lalu pekerja sehat kembali berdinas dalam hitungan 15 menit.</td></tr>
      <tr><td><strong>Near Miss</strong></td><td>NM</td><td>Nyaris Celaka. Kejadian rantai balok besi jatuh bebas tepat satu jengkal di samping helm pekerja. Tidak menyentuh kulit, namun nyawa hampir melayang.</td></tr>
    </tbody>
  </table></div>
</div>

<div class="content-block">
  <h3><span class="icon">🔍</span> Investigasi Insiden (Root Cause Analysis)</h3>
  <p>Setiap insiden sekecil <em>Near Miss</em> WAJIB dilaporkan dan diinvestigasi secara mendalam. Metodologi investigasi bukan diarahkan untuk mencari kambing hitam (<em>witch hunt & blame culture</em>), melainkan untuk membedah akar anatomi masalah (<strong>Root Cause Analysis / RCA</strong>):</p>
  <ul>
    <li><strong>The "5 Whys" Technique:</strong> Bertanya "Mengapa?" secara iteratif sebanyak lima kali runut ke bawah untuk menembus kulit alasan periferal menuju inti pemicu sistemik yang gagal (misal: Mengapa jatuh? Lantai licin. Mengapa licin? Pipa oli bocor. Mengapa bocor? Seal gasket tidak diganti. Mengapa tidak diganti? Siklus perawatan tertunda akibat jadwal rigger padat).</li>
    <li><strong>Model Keju Swiss (Swiss Cheese Model - James Reason):</strong> Filosofi bahwa tidak ada kecelakaan besar yang diakibatkan oleh satu faktor tunggal. Bencana hanya tercipta ketika lubang-lubang kelemahan beruntun dalam pelat pertahanan sistem pelindung (kebijakan tak tertulis, minimnya pengawasan SIKA, cacat permesinan, hingga kelalaian akhir operator individu) berbaris selaras tak sengaja dalam satu garis lintasan trajektori lurus.</li>
  </ul>
</div>

<div class="content-block">
  <h3><span class="icon">📈</span> KPI & Indikator Keselamatan</h3>
  <p>Tingkat kedisiplinan dan keberhasilan implementasi program diukur dan dihitung melalui rumus rasio laju yang dikenal oleh investor:</p>
  <div class="key-points">
    <div class="key-point"><div class="key-point-icon">📉</div><div class="key-point-title">LTIFR</div><div class="key-point-desc">Lost Time Injury Frequency Rate. Mengedepankan rasio frekuensi kejadian yang memakan korban dibandingkan konversi hitungan satu juta (1.000.000) jam paparan populasi tenaga kerja (<em>Man Hours</em>).</div></div>
    <div class="key-point"><div class="key-point-icon">📊</div><div class="key-point-title">TRIR</div><div class="key-point-desc">Total Recordable Incident Rate. Gabungan FAT + LTI + RWC + MTC per 200.000 jam kerja.</div></div>
    <div class="key-point"><div class="key-point-icon">⚠️</div><div class="key-point-title">Lagging vs Leading</div><div class="key-point-desc"><strong>Lagging Indicators:</strong> Indikator retrospektif yang mencatat kejadian sial yang telah berlalu (jumlah LTI, MTC).<br/><strong>Leading Indicators:</strong> Indikator pencegahan rasional proaktif (jumlah kartu observasi bahaya disetor, persentase kehadiran <em>safety meeting</em>, frekuensi simulasi darurat).</div></div>
  </div>
</div>

<div class="alert alert-info">
  <div class="alert-icon">🔧</div>
  <div class="alert-content">
    <div class="alert-title">Equipment Damage</div>
    <div class="alert-text">Insiden jatuhnya modul kerugian mekanis terisolasi — kecelakaan energi yang merusak fasilitas/mesin berharga bernilai puluhan ribu dolar tanpa memakan korban jiwa manusia. Berpotensi menghentikan <em>lifting operation</em> dan memerlukan audit metalurgi penggantian komponen absolut.</div>
  </div>
</div>

<div class="alert alert-success">
  <div class="alert-icon">💡</div>
  <div class="alert-content">
    <div class="alert-title">Tips Tes</div>
    <div class="alert-text">Hafal urutan keparahan: <strong>FAT > LTI > RWDC > MTC > FAC > Near Miss</strong>. Ingat juga Teori Heinrich perbandingan <strong>1:29:300</strong>. Pahami bahwa tujuan investigasi adalah mencari <strong>Root Cause (Akar Masalah)</strong>, BUKAN menyalahkan pekerja.</div>
  </div>
</div>\`
  },
`;

fs.writeFileSync('chapters.js', head + ch4Content + tail);
console.log('Successfully updated chapter 4');
