const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

// Find chapter 1
const ch1Start = code.indexOf("{");
const ch2Start = code.indexOf("{", ch1Start + 1);

const head = code.substring(0, ch1Start);
const tail = code.substring(ch2Start);

const ch1Content = `  {
    id: 'ch1', num: 1, title: 'Alat Pelindung Diri (APD)', badge: 'badge-orange',
    desc: 'Perlengkapan wajib untuk melindungi pekerja dari bahaya di tempat kerja.',
    icon: '🦺',
    html: \`
<div class="section-header">
  <div class="section-badge badge-orange">BAB 1</div>
  <h2 class="section-title">Alat Pelindung Diri <span>(APD)</span></h2>
  <p class="section-subtitle">Personal Protective Equipment - Perlindungan terakhir bagi pekerja</p>
</div>

<div class="content-block">
  <h3><span class="icon">📖</span> Pengertian APD</h3>
  <p>Alat Pelindung Diri (APD) adalah suatu alat yang mempunyai kemampuan untuk melindungi seseorang yang fungsinya mengisolasi sebagian atau seluruh tubuh dari potensi bahaya di tempat kerja (Permenaker No. 8 Tahun 2010).</p>
  <p>Lapisan kontrol pertahanan terakhir dalam paradigma mitigasi industri ekstrim—setelah instrumen eliminasi teknik lingkungan dirasa belum mengikis sisa indeks probabilitas bahaya cedera—adalah aplikasi penggunaan matriks pembungkus fisis pada tubuh, yakni Alat Pelindung Diri (APD). Berdasarkan data empiris inspeksi kecelakaan, dua faktor katalis esensial penyebab cidera fisik parah adalah pembangkangan pemakaian baju APD oleh personel secara utuh, dan fakta pemakaian alat perlengkapan APD palsu yang spesifikasi struktur bajanya sama sekali tidak terkalibrasi uji standar teknis impak benturan di lingkungan sumur agresif.</p>
</div>

<div class="alert alert-warning">
    <div class="alert-icon">⚠️</div>
    <div class="alert-content">
      <div class="alert-title">Penting!</div>
      <div class="alert-text">APD merupakan <strong>pertahanan terakhir</strong> (last resort) dalam hierarki pengendalian bahaya. Eliminasi, substitusi, rekayasa teknik, dan pengendalian administratif harus diutamakan terlebih dahulu.</div>
    </div>
  </div>

<div class="img-container">
  <img src="images/ppe_equipment.png" alt="Alat Pelindung Diri">
  <div class="img-caption">Ilustrasi berbagai jenis Alat Pelindung Diri (APD) untuk pekerja RIG</div>
</div>

<div class="content-block">
  <h3><span class="icon">🗂️</span> Jenis-Jenis APD</h3>
  <div class="key-points">
    <div class="key-point"><div class="key-point-icon">⛑️</div><div class="key-point-title">Pelindung Kepala</div><div class="key-point-desc">Safety helmet / hard hat, mencegah benturan benda jatuh</div></div>
    <div class="key-point"><div class="key-point-icon">👓</div><div class="key-point-title">Pelindung Mata</div><div class="key-point-desc">Safety glasses, goggles, face shield dari percikan & debu</div></div>
    <div class="key-point"><div class="key-point-icon">👂</div><div class="key-point-title">Pelindung Telinga</div><div class="key-point-desc">Ear plug & ear muff untuk kebisingan >85 dB</div></div>
    <div class="key-point"><div class="key-point-icon">😷</div><div class="key-point-title">Pelindung Pernapasan</div><div class="key-point-desc">Masker, respirator, SCBA untuk gas beracun & debu</div></div>
    <div class="key-point"><div class="key-point-icon">🧤</div><div class="key-point-title">Pelindung Tangan</div><div class="key-point-desc">Gloves: kulit, karet, anti-panas, anti-kimia</div></div>
    <div class="key-point"><div class="key-point-icon">👢</div><div class="key-point-title">Pelindung Kaki</div><div class="key-point-desc">Safety boots dengan steel toe cap, anti-slip</div></div>
    <div class="key-point"><div class="key-point-icon">🦺</div><div class="key-point-title">Pelindung Badan</div><div class="key-point-desc">Coverall, rompi, apron tahan panas/kimia</div></div>
    <div class="key-point"><div class="key-point-icon">🪢</div><div class="key-point-title">Pelindung Jatuh</div><div class="key-point-desc">Full body harness & lifeline untuk kerja di ketinggian</div></div>
  </div>
</div>

<div class="content-block">
  <h3><span class="icon">📋</span> Detail APD & Standar</h3>
  <div class="table-container"><table>
    <thead><tr><th>APD</th><th>Fungsi</th><th>Standar</th><th>Kapan Digunakan</th></tr></thead>
    <tbody>
      <tr><td><strong>Safety Helmet</strong></td><td>Melindungi kepala dari benturan & benda jatuh</td><td>SNI, ANSI Z89.1</td><td>Selalu di area kerja</td></tr>
      <tr><td><strong>Safety Goggles</strong></td><td>Melindungi mata dari percikan, debu, cahaya</td><td>ANSI Z87.1</td><td>Grinding, welding, kimia</td></tr>
      <tr><td><strong>Ear Plug/Muff</strong></td><td>Mengurangi kebisingan</td><td>SNI, ANSI S3.19</td><td>Area >85 dB (genset, mesin)</td></tr>
      <tr><td><strong>Respirator</strong></td><td>Filter udara dari gas/partikel</td><td>NIOSH 42 CFR 84</td><td>Area gas beracun, debu</td></tr>
      <tr><td><strong>Safety Gloves</strong></td><td>Melindungi tangan dari kimia, panas, tajam</td><td>EN 388, EN 374</td><td>Handling material, kimia</td></tr>
      <tr><td><strong>Safety Boots</strong></td><td>Melindungi kaki, anti-slip, steel toe</td><td>ASTM F2413</td><td>Selalu di area kerja</td></tr>
      <tr><td><strong>Full Body Harness</strong></td><td>Mencegah jatuh dari ketinggian</td><td>ANSI Z359.11</td><td>Kerja di ketinggian >1.8m</td></tr>
      <tr><td><strong>SCBA</strong></td><td>Suplai udara di area terkontaminasi</td><td>NFPA 1981</td><td>Confined space, gas H2S</td></tr>
    </tbody>
  </table></div>
</div>

<div class="content-block">
  <h3><span class="icon">🔄</span> Hierarki Pengendalian Bahaya</h3>
  <div class="concept-map">
    <div class="concept-map-title">Peta Konsep - Hierarki Pengendalian</div>
    <div class="mermaid">
graph TD
    A["Hierarki Pengendalian Bahaya"] --> B["1. Eliminasi<br/>Hilangkan bahaya"]
    A --> C["2. Substitusi<br/>Ganti bahan/proses"]
    A --> D["3. Rekayasa Teknik<br/>Isolasi/modifikasi"]
    A --> E["4. Administratif<br/>SOP, pelatihan, rotasi"]
    A --> F["5. APD<br/>Pertahanan terakhir"]
    style F fill:#f97316,color:#fff
    style A fill:#3b82f6,color:#fff
    </div>
  </div>
</div>

<div class="content-block">
  <h3><span class="icon">🔬</span> Spesifikasi Teknis APD di Industri Migas</h3>
  <p>Maka, untuk mereduksi peluang transfer bahaya paparan cuaca serta gesekan penetrasi material mekanis dan agen aditif lumpur perih pada lapisan epidermis pekerja garis depan pengeboran migas (<em>drilling worker</em>), APD difabrikasi menggunakan kombinasi tekstur material termutakhir dengan desain rekayasa fungsional tingkat tinggi. Spesifikasi komprehensif susunan pakaian pertahanan mekanis yang diinspeksi mutlak bagi semua orang yang melintasi perimeter pintu gerbang proyek anjungan meliputi:</p>
  <div class="img-container">
    <img src="images/image10.jpg" alt="Helm Safety untuk pengeboran">
    <div class="img-caption">Helm khusus pengeboran (Drilling Hard Hat) dengan suspensi peredam kejut</div>
  </div>
  <ul>
    <li><strong>Helm Khusus Pengeboran (Drilling Hard Hat / Safety Helmet):</strong> Konstruksi cetakan arsitektur tempurung kepala direkayasa tebal menggunakan materi polietilena cangkang keras bersuspensi jaring anyam teruji, menahan resistensi serapan momentum sentakan pukulan aksial (<em>shock absorbing capability</em>). Parameter kalibrasi mutlak kekuatan impak jatuh dihitung dalam satuan metrik newton konstan, yang direpresentasikan dalam teori sebagai <strong>Uji Tekan Helm Safety 90 N</strong>, memastikan kerangka suspensinya tak patah ketika terhantam benda masif seukuran penjepit pipa lepas ataupun perangkat instrumen kunci putar besi berat yang terjun bebas ditarik gaya gravitasi lurus dari lantai atap derrick tinggi (<em>dropped tools proyektil</em>).</li>
    <li><strong>Perlindungan Pendengaran Mekanis (Hearing Protection):</strong> Aplikasi peredam vibrasi gelombang mekanik getaran ekstrem suara mesin perputaran bor generator dengan mendikte perpaduan insersi <em>earplugs</em> rongga dalam sekaligus cangkang pembungkus isolasi daun telinga tebal <em>earmuffs</em>, menjaga reseptor saraf agar tak terpapar laju degenaratif trauma bising akustik merusak.</li>
    <li><strong>Seragam Tahan Paparan Termal Ekstrim dan Kimiawi (FR Coveralls / Baju Kerja):</strong> Tidak sekadar baju monyet seragam kain biasa, seragam terusan <em>coverall</em> didesain khusus melilit rapi menyatu dari leher menutup lengan sampai pergelangan kaki. Dibangun berbekal benang polimer penolak api sekelas <em>Fire Retardant</em> tahan panas yang berfungsi menjadi insulator perambatan bara (<em>thermal barrier</em>) di mana material tidak akan meleleh menjadi lilin saat terbakar kilat, dikonstruksi padat menolak impregnasi penetrasi senyawa bahan kimia lumpur hidrokarbon kotoran korosif tajam, sembari dirancang lebar ergonomis menjamin ruang mobilitas sendi otot saat mengangkangi material manual yang besar tanpa mengorbankan siklus sirkulasi aliran ventilasi udara di garis balik iklim ekuator gerah panas.</li>
    <li><strong>Perlindungan Traksi Ekstremitas Sepatu Bor (Safety Footwear / Rig Boots):</strong> Tidak lagi sekadar mengandalkan konstruksi pelindung tulang jari depan plat baja logam pelindung (<em>steel-toe cap protection</em>) meredam beban jatuhan silinder keras, model laras sebatas lutut alas telapak sepatunya diformulasi ulang menggabungkan plat membran pelat kebal tusukan sayat jarum serpihan besi potong dari tanah (<em>swarf penetration protection</em>) berbalut karet kompon karet nitril (<em>nitrile rubber outsole</em>) bersirip kasar tebal, untuk memastikan tingkat cengkraman jaminan stabilitas anti-slip mutlak berdiri menopang punggung ketika harus merayapi pijakan lapisan lumpur dan muntahan lelehan minyak avtur licin di sekeliling lantai pengeboran.</li>
  </ul>
  <p>Penegakan APD tidak hanya menuntun investasi pemakaian awal material keras semata. Parameter penilian korporasi mengevaluasi frekuensi perawatan kelenturan kain anti api, program rekayasa pelatihan cara merakit alat tali jatuh, inspeksi penggantian sol, serta dorongan advokasi perwira ahli departemen K3 untuk melestarikan keyakinan mental operator akan arti urgensinya.</p>
</div>

<div class="alert alert-success">
  <div class="alert-icon">💡</div>
  <div class="alert-content">
    <div class="alert-title">Tips Tes</div>
    <div class="alert-text">Pertanyaan umum: "APD adalah pertahanan ke-?" Jawabannya: <strong>Pertahanan TERAKHIR</strong>. Ingat juga bahwa APD wajib disediakan oleh pengusaha/perusahaan secara cuma-cuma sesuai Permenaker.</div>
  </div>
</div>\`
  },
`;

fs.writeFileSync('chapters.js', head + ch1Content + tail);
console.log('Successfully updated chapter 1');
