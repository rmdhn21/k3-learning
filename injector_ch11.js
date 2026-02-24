const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

// Since chapter 11 is the last chapter, we don't need a tail to append after it,
// but we just need to append it before the `];` at the end or rewrite everything using fix_chapters.js.
// We are going to just output the snippet for fix_chapters.js to pick up.

const ch11Content = `  {
    id: 'ch11', num: 11, title: 'Review Materi Penting', badge: 'badge-orange',
    desc: 'Rangkuman esensial materi K3 RIG: APAR, APD, Gas Detector, SCBA, dan Hierarki Pengendalian.',
    icon: '📋',
    html: \`
<div class="section-header">
  <div class="section-badge badge-orange">BAB 11</div>
  <h2 class="section-title">Review <span>Materi Penting</span></h2>
  <p class="section-subtitle">Rangkuman Komprehensif Persiapan Tes Kerja RIG</p>
</div>

<div class="content-block">
  <h3><span class="icon">🦺</span> 1. APD Khusus di RIG & SCBA</h3>
  <ul>
    <li><strong>Alat Pelindung Diri (APD)</strong> adalah lapis pertahanan <strong>TERAKHIR</strong>. APD diwajibkan secara hukum (Permenaker) dan harus disediakan perusahaan. APD RIG meliputi: <strong>Safety Helmet (ANSI Z89.1)</strong>, <strong>Safety Glasses/Goggles</strong>, <strong>Ear Plug/Muff (di atas 85 dB)</strong>, <strong>Coverall (Baju FR / Fire Retardant)</strong>, <strong>Safety Gloves</strong>, dan <strong>Safety Boots (Steel Toe)</strong>.</li>
    <li><strong>SCBA (Self-Contained Breathing Apparatus):</strong> Alat pernapasan portabel independen yang mutlak digunakan saat operasi di zona <em>Confined Space</em> (Ruang Terbatas) atau area darurat dengan kadar oksigen kurang dari 19.5% atau terpapar gas asfiksia mematikan.
      <ul>
        <li><strong>Komponen Utama:</strong> Tabung silinder udara bertekanan tinggi, regulator katup penurun tekanan, <em>facepiece</em> (masker wajah kedap udara), <em>harness</em> gendongan, dan manometer (indikator sisa tekanan dengan alarm pita suara otomatis saat udara tersisa 25%).</li>
        <li><strong>Tipe SCBA:</strong> <em>Open-circuit</em> (udara hembusan dibuang ke luar, durasi 30-60 menit) dan <em>Closed-circuit</em> (udara hembusan disaring *scrubber* karbon dioksida dan didaur ulang, durasi lebih lama hingga 4 jam, cocok untuk operasi <em>Mine Rescue</em>).</li>
      </ul>
      <div class="video-container" style="margin: 20px 0; position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); background-color: #000;">
        <video style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" controls preload="metadata">
            <source src="videos/scba.mp4" type="video/mp4">
            Maaf, browser Anda tidak mendukung pemutar video HTML5.
        </video>
      </div>
    </li>
  </ul>
</div>

<div class="content-block">
  <h3><span class="icon">🔄</span> 2. Hierarki Pengendalian & Sistem Izin Kerja</h3>
  <div class="key-points">
    <div class="key-point"><div class="key-point-icon">1️⃣</div><div class="key-point-title">Eliminasi</div><div class="key-point-desc">Menghilangkan sumber bahaya sepenuhnya. (Paling efektif)</div></div>
    <div class="key-point"><div class="key-point-icon">2️⃣</div><div class="key-point-title">Substitusi</div><div class="key-point-desc">Mengganti bahan, mesin, proses berisiko dengan yang lebih aman.</div></div>
    <div class="key-point"><div class="key-point-icon">3️⃣</div><div class="key-point-title">Rekayasa Teknik</div><div class="key-point-desc">Memasang sistem ventilasi (exhaust), menutupi area (isolasi/barikade).</div></div>
    <div class="key-point"><div class="key-point-icon">4️⃣</div><div class="key-point-title">Administratif & PTW</div><div class="key-point-desc"><strong>Permit To Work (PTW):</strong> Sistem Surat Izin Kerja Administratif yang ketat mengikat, membatasi waktu paparan (rotasi), merilis SOP, dan mewajibkan Toolbox Meeting harian.</div></div>
    <div class="key-point"><div class="key-point-icon">5️⃣</div><div class="key-point-title">APD</div><div class="key-point-desc">Lapisan pelindung langsung pada tubuh. (Pertahanan terakhir)</div></div>
  </div>
</div>

<div class="content-block">
  <h3><span class="icon">📡</span> 3. Gas Detector & Cara Membacanya</h3>
  <p>Gas detector <em>(Gas Monitor)</em> digunakan oleh kru spesialis (Authorized Gas Tester) untuk memvalidasi kelaikan udara pernapasan secara kuantitatif sebelum mengeluarkan Permit to Work. Terbagi menjadi <strong>Portable Gas Detector</strong> (dibawa di saku *coverall*) dan <strong>Fixed Gas Detector</strong> (terpasang permanen di *wellhead, shale shaker*, dan tangki lumpur yang rawan riwayat H₂S).</p>
  <ul>
    <li><strong>Sifat H₂S:</strong> Gas asfiksia dengan kepekatan bau telur busuk di awal, namun mengeksekusi <strong>kelumpuhan saraf penciuman penciuman (>100 ppm)</strong> hitungan detik. Karena molekul <strong>lebih berat dari udara (SG: 1.19)</strong>, kebocoran selalu tumpah ke tempat terendah (*trenches, cellar*).</li>
    <li><strong>Cara Baca Batas Aman Pekerja (H₂S & CO):</strong> 
      <ul>
        <li><strong>TWA (Time Weighted Average):</strong> Beban puncak harian 8 jam. Diatur di angka <strong>10 ppm untuk H₂S</strong> dan <strong>25 ppm untuk Karbon Monoksida (CO)</strong>.</li>
        <li><strong>STEL (Short Term Exposure Limit):</strong> Batas paparan kilat 15 menit. Disetel di angka <strong>15 ppm untuk H₂S</strong>.</li>
      </ul>
    </li>
    <li><strong>Oksigen (O₂) & LEL:</strong> Batas oksigen absolut adalah <strong>19.5% hingga 23.5%</strong>. Sementara LEL (Lower Explosive Limit) adalah persentase minimal percampuran gas dengan oksigen udara yang bisa disulut. Ambang alarm evakuasi LEL dari *Gas Detector* biasanya disetting sangat ketat mentok pada limit deteksi <strong>10% asupan LEL sesungguhnya</strong>.</li>
  </ul>
</div>

<div class="content-block">
  <h3><span class="icon">⚠️</span> 4. Bahaya Kerja di RIG (Oilfield Hazards)</h3>
  <p>Lingkungan pengeboran minyak memiliki risiko katastropik khusus. Pekerja RIG dilingkupi oleh potensi cedera dari:</p>
  <ul>
    <li><strong>Dropped Objects (Benda Jatuh):</strong> Perangkat alat bor yang jatuh bebas dari atas menara <em>derrick</em>.</li>
    <li><strong>Pinch Points / Caught-Between:</strong> Terjepit di antara dua benda besi besar yang sedang bergerak atau berputar, seperti rangkaian pipa bor.</li>
    <li><strong>Tekanan Ekstrem (High Pressure):</strong> Semburan liar (blowout) lumpur fluida, gas, cairan hidrolik pecah selang.</li>
    <li><strong>Slip, Trip, Fall:</strong> Terpeleset di lantai bor yang licin terkena tumpahan minyak/lumpur.</li>
  </ul>
  <div class="alert alert-warning">
    <div class="alert-icon">⚠️</div>
    <div class="alert-content">
      <div class="alert-title">Ingat Stop Work Authority (SWA)</div>
      <div class="alert-text">Kapanpun pekerja melihat *Unsafe Condition* atau *Unsafe Act* di kondisi di atas, mereka mempunyai **HAK PENUH** menurut asas korporat untuk meneriakkan "Stop Kerja" hingga bahaya tertangani.</div>
    </div>
  </div>
</div>

<div class="content-block">
  <h3><span class="icon">🔥</span> 5. Basic Fire Fighting & Klasifikasi APAR</h3>
  <p>Klasifikasi kelas kebakaran penting dihafal untuk menyesuaikan penggunaan media pemadam:</p>
  <div class="table-container"><table>
    <thead><tr><th>Kelas</th><th>Sumber Bahan</th><th>Media APAR yang Tepat</th></tr></thead>
    <tbody>
      <tr><td><strong>A</strong></td><td>Padat non-logam (Kayu, Kertas, Plastik)</td><td>Air, Busa (Foam), DCP</td></tr>
      <tr><td><strong>B</strong></td><td>Cair & Gas (Bensin, Solar, LPG)</td><td>Busa (Foam), CO₂, DCP</td></tr>
      <tr><td><strong>C</strong></td><td>Elektrikal (Korsleting Listrik)</td><td>CO₂, DCP (Dilarang pakai Air)</td></tr>
      <tr><td><strong>D</strong></td><td>Logam Reaktif (Magnesium)</td><td>Bubuk Khusus (Special Dry Powder)</td></tr>
      <tr><td><strong>K</strong></td><td>Minyak Dapur Komersial (Lemak)</td><td>Wet Chemical</td></tr>
    </tbody>
  </table></div>
  <p>💡 <em>Dry Chemical Powder (DCP)</em> adalah pemadam paling serbaguna (multipurpose) untuk kelas A, B, dan C. Tidak disarankan menyiram api minyak mentah panas murni dengan air karena memicu ledakan percikan mematikan (<strong>Boil Over</strong>).</p>
</div>

<div class="content-block">
  <h3><span class="icon">🧯</span> Teknik Penggunaan APAR (PASS)</h3>
  <p>Jarak aman penyemprotan adalah <strong>3 sampai 5 meter</strong> dan harus membelakangi arah hembusan angin:</p>
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
  <div class="video-container" style="margin: 20px 0; position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); background-color: #000;">
    <video style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" controls preload="metadata">
        <source src="videos/apar.mp4" type="video/mp4">
        Maaf, browser Anda tidak mendukung pemutar video HTML5.
    </video>
  </div>
</div>

<div class="alert alert-success">
  <div class="alert-icon">💯</div>
  <div class="alert-content">
    <div class="alert-title">Selamat!</div>
    <div class="alert-text">Anda sudah menyelesaikan seluruh rangkuman materi persiapan Tes Kerja RIG. Silakan ambil Kuis Latihan untuk mensimulasi soal-soalnya!</div>
  </div>
</div>\`
  }
\`;

// Exporting so that fix_chapters.js can use it
// fs.writeFileSync is called by fix_chapters.js instead
fs.writeFileSync('chapters.js', 'dummy');
