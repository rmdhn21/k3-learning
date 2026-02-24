// K3 Learning - Chapter Data (1-10)
const CHAPTERS = [
  {
    id: 'ch1', num: 1, title: 'Alat Pelindung Diri (APD)', badge: 'badge-orange',
    desc: 'Perlengkapan wajib untuk melindungi pekerja dari bahaya di tempat kerja.',
    icon: '🦺',
    html: `
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
</div>`
  },
  {
    id: 'ch2', num: 2, title: 'Klasifikasi APAR', badge: 'badge-red',
    desc: 'Jenis-jenis alat pemadam api ringan dan penggunaannya berdasarkan kelas kebakaran.',
    icon: '🧯',
    html: `
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
</div>`
  },
  {
    id: 'ch3', num: 3, title: 'Gas Detector', badge: 'badge-blue',
    desc: 'Alat pendeteksi gas berbahaya untuk keselamatan kerja di area RIG.',
    icon: '📡',
    html: `
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
</div>`
  },
  {
    id: 'ch4', num: 4, title: 'Incident', badge: 'badge-yellow',
    desc: 'Pemahaman tentang insiden, kecelakaan kerja, dan piramida kecelakaan.',
    icon: '⚡',
    html: `
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
</div>`
  },
  {
    id: 'ch5', num: 5, title: 'Unsafe Action & Condition', badge: 'badge-purple',
    desc: 'Tindakan dan kondisi tidak aman sebagai penyebab utama kecelakaan kerja.',
    icon: '🚫',
    html: `
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
</div>`
  },
  {
    id: 'ch6', num: 6, title: 'Bahaya Pekerjaan di RIG', badge: 'badge-cyan',
    desc: 'Berbagai jenis bahaya dan risiko yang ada di lingkungan kerja pengeboran minyak.',
    icon: '🏗️',
    html: `
<div class="section-header">
  <div class="section-badge badge-cyan">BAB 6</div>
  <h2 class="section-title">Bahaya Pekerjaan <span>di RIG</span></h2>
  <p class="section-subtitle">Identifikasi Bahaya Ekstrem & Manajemen Risiko Pengeboran Migas</p>
</div>

<div class="content-block">
  <p>Operasional hulu di fasilitas anjungan pengeboran (<em>drilling rig</em>), baik di lingkungan lepas pantai (<em>offshore</em>) maupun daratan (<em>onshore</em>), secara universal diakui sebagai salah satu area kerja dengan agregasi risiko fisis tertinggi di dunia industri. Berbagai bentuk energi mematikan dapat terlepas tanpa peringatan fisis yang kentara, menuntut metodologi Analisis Keselamatan Kerja (<em>Job Safety Analysis / JSA</em>) yang ekstensif sebelum eksekusi setiap aktivitas.</p>
</div>

<div class="img-container">
  <img src="images/oil_rig_hazards.png" alt="Bahaya di RIG">
  <div class="img-caption">Berbagai energi mematikan dan risiko tinggi di fasilitas anjungan pengeboran</div>
</div>

<div class="content-block">
  <h3><span class="icon">⚙️</span> Identifikasi Bahaya Kinetik & Fisik</h3>
  <p>Identifikasi bahaya di area rig mencakup spektrum energi yang sangat luas dan mematikan:</p>
  <ul>
    <li><strong>Pinch Points (Titik Jepit Ganda):</strong> Mekanisme logam berat yang bergerak berlawanan arah, seperti penanganan pipa (<em>pipe handling</em>) menggunakan tongs dan slip di lantai bor (<em>rig floor</em>). Secara konstan mengancam anggota tubuh pekerja dengan risiko amputasi atau cedera tulang hancur (<em>crush injury</em>).</li>
    <li><strong>Dropped Objects (Benda Jatuh):</strong> Risiko kejatuhan material alat kerja (kunci inggris, mur baut, pelat baja) dari ketinggian menara bor (<em>derrick</em>) merupakan ancaman proyektil mematikan yang kecepatan jatuhnya diakselerasi gravitasi. Helm keselamatan (<em>Hard Hat</em>) dirancang khusus untuk memitigasi risiko ini.</li>
    <li><strong>Bahaya Kelistrikan (Electrocution):</strong> Modul <em>Top Drive</em> raksasa dan motor penggerak <em>drawworks</em> menggunakan arus tegangan sangat tinggi (ribuan volt) yang dapat berakibat fatal jika terjadi malfungsi insulasi.</li>
    <li><strong>Kebisingan Industri (Noise Hazard):</strong> Suara menderu dari generator diesel (<em>genset</em>) dan pompa lumpur (<em>mud pump</em>) yang beroperasi 24 jam nonstop memicu kehilangan pendengaran permanen (<em>Noise Induced Hearing Loss</em>) jika tidak menggunakan earplug/earmuff.</li>
  </ul>
</div>

<div class="content-block">
  <h3><span class="icon">🌋</span> Ancaman Terbesar Pengeboran: BLOWOUT</h3>
  <p>Namun, dari semua risiko yang dipetakan di atas dan sekitar fasilitas rig, ancaman terbesar terhadap kelangsungan aset triliunan rupiah dan nyawa seluruh awak rig berada ribuan kaki jauh di dalam perut bumi: <strong>kegagalan pengendalian tekanan formasi sumur (<em>well control failure</em>)</strong>.</p>
  
  <div class="key-points">
    <div class="key-point"><div class="key-point-icon">⚖️</div><div class="key-point-title">Ekuilibrium Tekanan</div><div class="key-point-desc">Integritas struktural sumur dipertahankan melalui ekuilibrium (keseimbangan) antara: <strong>Tekanan Formasi (Pore Pressure)</strong> dari dalam bumi MELAWAN <strong>Tekanan Hidrostatik (Hydrostatic Pressure)</strong> dari berat jenis sirkulasi cairan lumpur pemboran (<em>drilling mud</em>) ke arah bawah.</div></div>
  </div>

  <h4>Proses Terjadinya Blowout:</h4>
  <ol>
    <li><strong>Kondisi Defisit (Underbalance):</strong> Keseimbangan termodinamis goyah di mana tekanan hidrostatik lumpur (karena kurang padat, atau lumpur hilang ke formasi) berada <em>di bawah</em> ambang batas tekanan formasi bumi.</li>
    <li><strong>KICK (Intrusi Awal):</strong> Fluida bertekanan luar biasa dari dalam reservoir/bumi (gas alam, minyak, air garam) menyerbu masuk secara agresif ke dalam lubang bor (<em>annulus</em>). Intrusi awal inilah yang disebut aliran "Kick".</li>
    <li><strong>Tanda Peringatan Dini:</strong> Kru harus bisa membaca parameter kelainan seperti: lonjakan volume tangki lumpur secara misterius di permukaan (<em>pit gain</em>), atau lumpur tetap mengalir deras walau pompa utama rig sudah dimatikan total.</li>
    <li><strong>BLOWOUT (Bencana):</strong> Jika "Kick" gagal diatasi dan dibiarkan berkeskspansi merambat naik ke permukaan atmosfer... Boom! Terjadilah pelepasan liar minyak dan gas bertekanan luar biasa destruktif ke udara. Tersulut sedikit saja statis api, rig terbakar leleh dan hancur lebur (seperti tragedi Deepwater Horizon).</li>
  </ol>
</div>

<div class="content-block">
  <h3><span class="icon">🛡️</span> BOP (Blowout Preventer)</h3>
  <p>Sebagai garda pertahanan mekanis baja lapis terakhir terhadap ancaman ekstrim bawah tanah ini, arsitektur dasar rig dilengkapi dengan <strong>Blowout Preventer (BOP)</strong> tumpuk (<em>BOP Stack</em>) seberat puluhan ton yang dipasang tepat mengangkangi kepala sumur.</p>
  <ul>
    <li>BOP terdiri dari susunan katup pendorong hidraulik raksasa yang dirancang mampu menjepit pipa pemboran (<em>Pipe Rams</em>).</li>
    <li>Mampu menutup rapat lubang sumur secara total jika pipa sudah dicabut (<em>Blind Rams</em>).</li>
    <li>Bahkan sanggup memotong paksa sekaligus menghancurkan pipa bor baja murni di dalamnya (<em>Shear Rams / Blind Shear Rams</em>) bagaikan gunting raksasa demi menyegel lorong sumur untuk menyelamatkan rig dari ledakan.</li>
  </ul>
  <p>Melalui sistem penguncian BOP ini, gas bawah bumi dapat ditahan, diisolasi, dan sirkulasinya dialihkan secara terkontrol ke sistem pembuangan <em>choke manifold</em>, lalu sumur "dimatikan" menggunakan lumpur berat (<em>kill mud</em>).</p>
</div>

<div class="alert alert-success">
  <div class="alert-icon">💡</div>
  <div class="alert-content">
    <div class="alert-title">Tips Tes</div>
    <div class="alert-text">Pegang erat perbedaan: <strong>KICK</strong> adalah masuknya tekanan gas formasi ke dalam lubang sumur (awal masalah). <strong>BLOWOUT</strong> adalah ketika gas tersebut sudah menyembur liar tak terkendali ke atas permukaan (bencana). Alat pencegahnya: <strong>BOP (Blowout Preventer)</strong>.</div>
  </div>
</div>`
  },
  {
    id: 'ch7', num: 7, title: 'Surat Izin Kerja Aman', badge: 'badge-green',
    desc: 'Sistem permit to work untuk pengendalian pekerjaan berbahaya.',
    icon: '📋',
    html: `
<div class="section-header">
  <div class="section-badge badge-green">BAB 7</div>
  <h2 class="section-title">Surat Izin <span>Kerja Aman</span></h2>
  <p class="section-subtitle">Permit to Work (PTW) System - Pengendalian Pekerjaan Berbahaya</p>
</div>

<div class="content-block">
  <p>Mengingat interaksi eskalasi bahaya yang begitu dominan di setiap inisi ruang pabrik migas, pihak manajemen perusahaan mengandalkan kerangka kerja pengawasan regulasi presisi berbasis dokumen otorisasi prosedural. Di kawasan industri nasional seperti entitas operasional eksplorasi, prosedur birokratis esensial ini diimplementasikan melalui mekanisme penerbitan <strong>Surat Izin Kerja Aman (SIKA)</strong> atau <em>Permit to Work (PTW)</em>.</p>
</div>

<div class="img-container">
  <img src="images/image16.jpg" alt="Working at Height Permit">
  <div class="img-caption">Pekerjaan risiko tinggi mutlak memerlukan Surat Izin Kerja Aman (PTW) divalidasi oleh pengawas lapangan</div>
</div>

<div class="content-block">
  <h3><span class="icon">📝</span> Fungsi Esensial SIKA</h3>
  <p>SIKA <strong>bukanlah</strong> instrumen sekadar administrasi tanda tangan kosong; ini adalah persetujuan teknis mengikat secara definitif yang disepakati antara <strong>pemegang otoritas wilayah operasional</strong> (fasilitas kontrol produksi) dan <strong>pelaksana perbaikan konstruksi lapangan</strong> (kontraktor teknis) mengenai langkah mitigasi setiap bahaya <em>sebelum</em> alat perkakas boleh dinyalakan.</p>
  <p>Dokumen perizinan ini mensyaratkan:</p>
  <ul>
    <li>Deskripsi spasial pekerjaan yang amat spesifik (lokasi & elevasi).</li>
    <li>Kuantitas daftar kru eksekutor.</li>
    <li>Daftar validasi perlengkapan pelindung (APD khusus).</li>
    <li>Persiapan jenis alat perlindungan api spesifik di pos penjagaan (APAR standby).</li>
    <li>Kewajiban menginklusi kerangka Analisis Keselamatan Kerja (JSA) terperinci di lembar lampirannya.</li>
  </ul>
</div>

<div class="content-block">
  <h3><span class="icon">📜</span> 4 Jenis Izin Kerja Utama (Permit)</h3>
  <p>Berdasarkan variasi tingkatan energi intervensi proses, format SIKA distratifikasi menjadi empat izini spesifik:</p>
  
  <div class="key-points">
    <div class="key-point"><div class="key-point-icon">🔥</div><div class="key-point-title">1. Izin Kerja Panas (Hot Work Permit)</div><div class="key-point-desc">Diberlakukan ketat spesifik pada operasi pengelasan busur listrik (<em>welding</em>), pemotongan besi baja nyala obor gas (<em>cutting torch</em>), dan mesin gerinda yang menghasilkan percikan bunga api pijar. <strong>Syarat Mutlak:</strong> Pemindaian gas di lokasi harus menunjukkan hasil <strong>0% LEL</strong> atmosfer mudah terbakar sebelum dimulai.</div></div>
    
    <div class="key-point"><div class="key-point-icon">❄️</div><div class="key-point-title">2. Izin Kerja Dingin (Cold Work Permit)</div><div class="key-point-desc">Mengelola operasi perawatan rutin tanpa api terbuka: pembersihan tangki, pengecatan, perbaikan fasilitas hidraulik, atau erecting perancah (scaffolding). Meski "dingin", tetap menyimpan potensi bahaya tertimpa (gravitasi jatuh material) atau terjepit.</div></div>
    
    <div class="key-point"><div class="key-point-icon">🕳️</div><div class="key-point-title">3. Izin Masuk Ruang Terbatas (Confined Space Entry)</div><div class="key-point-desc">Birokrasi <strong>paling mematikan</strong>. Wajib untuk masuk ke dalam tangki, vessel separator, atau gorong-gorong. Persyaratan absolut: Continuous gas monitoring (O2 harus 19.5%-23.5%), kipas blower ventilasi, dan minimal satu orang <em>Standby Person/Hole Watch</em> di luar berbekal katrol tripod.</div></div>
    
    <div class="key-point"><div class="key-point-icon">⛏️</div><div class="key-point-title">4. Izin Kerja Penggalian (Excavation Permit)</div><div class="key-point-desc">Otorisasi manuver alat berat menembus permukaan tanah. Berisiko fatal jika memutus isolasi kabel high-voltage bawah tanah atau merobek pipa gas terpendam tanpa denah peta yang valid.</div></div>
  </div>
</div>

<div class="content-block">
  <h3><span class="icon">🔒</span> Prosedur Isolasi LOTO (Lock Out Tag Out)</h3>
  <p>Berkaitan erat dengan sistem SIKA, setiap pekerjaan perbaikan mekanis atau inspeksi ke dalam rahang mesin bor besar (seperti <em>mud pump</em>, <em>drawworks</em>, atau pemanas air) mengharuskan pelaksana untuk mengeksekusi prosedur pemutusan daya tersistem yang dikenal sebagai <strong>LOTO (Lock Out, Tag Out)</strong>.</p>
  <ul>
    <li><strong>Lock Out (Kunci):</strong> Memutus sirkuit breaker sumber listrik (atau menahan valep aliran gas/uap panas) menggunakan gembok fisik milik pekerja itu sendiri. Selama gembok tersebut terpasang, tidak ada orang lain (bahkan manager sekalipun) yang boleh atau bisa menghidupkan mesin tersebut.</li>
    <li><strong>Tag Out (Label):</strong> Menempelkan label peringatan "DANGER - DO NOT OPERATE" lengkap dengan nama pekerja, tanggal, dan departemennya.</li>
  </ul>
  <p>LOTO menjamin montir tidak akan tergiling roda gigi saat sedang berada di dalam ruang mesin akibat kelalaian tombol start yang ditekan dari ruang kontrol.</p>
</div>

<div class="alert alert-success">
  <div class="alert-icon">💡</div>
  <div class="alert-content">
    <div class="alert-title">Tips Tes</div>
    <div class="alert-text">Soal ujian akan sering menguji syarat *Confined Space*. Selalu ingat peran vital <strong>Hole Watch / Standby Person</strong>. Pahami juga fungsi <strong>LOTO</strong> adalah memutus dan "menggembok" aliran energi sebelum perbaikan mesin.</div>
  </div>
</div>`
  },
  {
    id: 'ch8', num: 8, title: 'Peralatan Emergency', badge: 'badge-red',
    desc: 'Peralatan darurat yang wajib tersedia di RIG untuk penanganan keadaan darurat.',
    icon: '🆘',
    html: `
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
</div>`
  },
  {
    id: 'ch9', num: 9, title: 'Materi K3', badge: 'badge-orange',
    desc: 'Dasar-dasar Sistem Manajemen Keselamatan dan Kesehatan Kerja (K3) korporat.',
    icon: '📚',
    html: `
<div class="section-header">
  <div class="section-badge badge-orange">BAB 9</div>
  <h2 class="section-title">Materi <span>K3</span></h2>
  <p class="section-subtitle">Sistem Manajemen K3 & Corporate Safety Framework</p>
</div>

<div class="content-block">
  <p>Industri ekstraksi minyak dan gas bumi beroperasi di dalam spektrum risiko yang sangat tinggi. Keselamatan dan Kesehatan Kerja (K3) di sektor ini bukan sekadar pemenuhan kepatuhan terhadap regulasi administratif, melainkan sebuah kerangka keandalan operasional absolut yang dirancang untuk menjaga integritas aset, melindungi nyawa manusia, dan mencegah bencana lingkungan berskala masif (seperti tumpahan minyak di laut terbuka).</p>
  <p>Di atas semua instalasi piranti baja, sertifikasi ahli K3 Migas menuntut kepatuhan yang ketat terhadap doktrin wawasan administratif <strong>Corporate Safety Framework</strong>.</p>
</div>

<div class="img-container">
  <img src="images/k3_material.png" alt="Sistem Manajemen K3">
  <div class="img-caption">Implementasi Sistem Manajemen K3 (SMK3) di lingkungan kerja industri migas</div>
</div>

<div class="content-block">
  <h3><span class="icon">🏛️</span> Standar & Sistem Manajemen</h3>
  <ul>
    <li><strong>ISO 45001:</strong> Standar internasional emas untuk Sistem Manajemen Kesehatan dan Keselamatan Kerja (OH&S). Dirancang untuk melindungi pekerja dan pengunjung dari kecelakaan kerja dan penyakit akibat kerja.</li>
    <li><strong>CSMS (Contractor Safety Management System):</strong> Sistem komprehensif untuk me-manage (mengevaluasi, menyaring, dan mengawasi) rekam jejak K3 dari perusahaan subkontraktor (vendor) yang akan bekerja di area berisiko tinggi milik perusahaan induk. Kontraktor dengan catatan kecelakaan buruk akan digugurkan dalam tender.</li>
    <li><strong>SUPREME (Sustainability Pertamina Expectations for Management Excellence):</strong> Sistem manajemen K3LH terintegrasi milik PT Pertamina (Persero) yang mengadopsi best practices kelas dunia untuk memastikan keandalan operasi.</li>
  </ul>
</div>

<div class="content-block">
  <h3><span class="icon">🛡️</span> 12 Pertamina Corporate Life Saving Rules (CLSR)</h3>
  <p>Berdasarkan RCA (Root Cause Analysis) dari rentetan kecelakaan fatal masa lalu, diformulasikanlah 12 aturan emas harga mati yang tidak menoleransi pelanggaran sedikitpun:</p>
  
  <div class="table-container"><table>
    <thead><tr><th>No</th><th>Elemen CLSR</th><th>Aturan Mutlak</th></tr></thead>
    <tbody>
      <tr><td>1</td><td><strong>Tools & Equipment</strong></td><td>Dilarang menggunakan perkakas modifikasi bengkel independen (non-standar). Wajib validasi sertifikat kelayakan.</td></tr>
      <tr><td>2</td><td><strong>Safe Zone Position</strong></td><td>Wajib berada di luar lintasan ayunan proyektil lifting crane (<em>line of fire</em>) dan hindari paparan semburan pipa bertekanan.</td></tr>
      <tr><td>3</td><td><strong>Permit to Work</strong></td><td>Dilarang memulai pekerjaan berisiko tanpa <em>Surat Izin Kerja Aman (SIKA)</em> yang telah disahkan otorisasi.</td></tr>
      <tr><td>4</td><td><strong>Isolation (LOTO)</strong></td><td>Wajib memasang gembok isolasi daya mekanis/listrik (<em>Lock Out Tag Out</em>) saat memperbaiki mesin.</td></tr>
      <tr><td>5</td><td><strong>Confined Space</strong></td><td>Wajib memvalidasi nihil racun dan %O2 dengan Gas Detector sebelum bernaung di ventilasi hampa tangki/vessel.</td></tr>
      <tr><td>6</td><td><strong>Lifting Operation</strong></td><td>Tali sling asupan crane harus disesuaikan dengan bobot kalkulasi di bawah wewenang <em>Rigger</em> dan Operator bersertifikat.</td></tr>
      <tr><td>7</td><td><strong>Fit to Work</strong></td><td>Inspeksi medis harian (cek tensi darah) rutin dan larangan keras bekerja di bawah pengaruh alkohol/narkoba.</td></tr>
      <tr><td>8</td><td><strong>Working at Height</strong></td><td>Wajib mengenakan <em>Full Body Harness</em> dengan <em>100% tie-off</em> (kait ganda) ke struktur independen saat di ketinggian >1.8m.</td></tr>
      <tr><td>9</td><td><strong>Personal Floatation Device</strong></td><td>Wajib mengenakan rompi pelampung (<em>life jacket</em>) saat transfer personel (contoh: via ayunan <em>Billy Pugh</em>) di perairan laut (offshore).</td></tr>
      <tr><td>10</td><td><strong>System Override</strong></td><td>Dilarang mem-bypass, melumpuhkan sensor api, atau mematikan sistem sakelar <em>Emergency Shutdown (ESD)</em> sepihak.</td></tr>
      <tr><td>11</td><td><strong>Asset Integrity</strong></td><td>Inspeksi ketebalan pipa dan lambung bejana bertekanan mutlak dilakukan untuk mendeteksi penipisan akibat korosi.</td></tr>
      <tr><td>12</td><td><strong>Driving Safety</strong></td><td>Wajib memakai sabuk pengaman (<em>seatbelt</em>), larangan menggunakan HP saat mengemudi mobil pangkalan, patuhi batas kecepatan batas.</td></tr>
    </tbody>
  </table></div>
</div>

<div class="alert alert-success">
  <div class="alert-icon">💡</div>
  <div class="alert-content">
    <div class="alert-title">Tips Tes</div>
    <div class="alert-text">Soal ujian akan sering memutar tentang kepanjangan <strong>CSMS</strong> (Sistem menilai <em>safety kontraktor</em>). Jika ditanya tentang standar internasional OH&S yang menggantikan OHSAS 18001, jawabannya adalah <strong>ISO 45001</strong>.</div>
  </div>
</div>`
  },
  {
    id: 'ch10', num: 10, title: 'Segitiga API', badge: 'badge-red',
    desc: 'Teori termodinamika kebakaran dan klasifikasi elemen dasar pembakaran.',
    icon: '🔥',
    html: `
<div class="section-header">
  <div class="section-badge badge-red">BAB 10</div>
  <h2 class="section-title">Segitiga <span>API</span></h2>
  <p class="section-subtitle">Teori Termodinamika Kebakaran - Elemen Dasar Pembakaran</p>
</div>

<div class="content-block">
  <p>Untuk mengendalikan bahaya kebakaran di fasilitas produksi dan anjungan pengeboran, pemahaman dasar mengenai fisika dan kimiawi api mutlak dikuasai oleh setiap personel. Secara fundamental, proses pembakaran dijelaskan melalui dua model teoretis yang saling melengkapi dalam ilmu termodinamika kebakaran: Segitiga Api dan Tetrahedron Api.</p>
</div>

<div class="img-container">
  <img src="images/fire_triangle.png" alt="Segitiga Api">
  <div class="img-caption">Model Segitiga Api & Tetrahedron Api: Interaksi Panas, Bahan Bakar, Oksigen, dan Rantai Reaksi Kimia</div>
</div>

<div class="content-block">
  <h3><span class="icon">🔺</span> 1. Segitiga Api (Fire Triangle)</h3>
  <p>Segitiga api memodelkan tiga elemen fisik dasar yang harus hadir secara bersamaan pada waktu dan ruang yang sama untuk menginisiasi reaksi oksidasi cepat. Konsep ini hanya menjelaskan tercetusnya sebuah <em>percikan</em> awal atau pijar murni (<em>glowing/smoldering</em>), namun belum nyala api yang stabil.</p>
  <div class="key-points">
    <div class="key-point"><div class="key-point-icon">🌬️</div><div class="key-point-title">Oksigen (Oxygen)</div><div class="key-point-desc">Dalam kondisi normal, udara mengandung ±21% oksigen secara volume. Agar proses pembakaran dapat terjadi, konsentrasi oksigen minimal yang dibutuhkan di lingkungan umumnya berada di atas ambang batas <strong>15 s.d 16%</strong> (tergantung material). Jika &lt; 15%, api mati lemas.</div></div>
    
    <div class="key-point"><div class="key-point-icon">🌡️</div><div class="key-point-title">Panas (Heat / Energi Aktivasi)</div><div class="key-point-desc">Energi penyuplai untuk menaikkan suhu bahan bakar hingga mencapai <em>titik nyalanya (flash point)</em>. Sumber pemicu ekstrem di migas: percikan las/gerinda listrik statis, gesekan baja kompresi pipa, reaksi panas senyawa material lumpur bor, hingga korsleting kabel.</div></div>
    
    <div class="key-point"><div class="key-point-icon">🛢️</div><div class="key-point-title">Bahan Bakar (Fuel)</div><div class="key-point-desc">Materi fisis obyek pemicu terbakar. Wujud padat (kayu/kertas balsa plastik), berwujud cair (minyak mentah/crude, BBM avtur, bahan pelumas diesel), dan berwujud gas (gas bumi alam butana, hidrogen propana kental).</div></div>
  </div>
</div>

<div class="content-block">
  <h3><span class="icon">🔷</span> 2. Tetrahedron Api (Piramida Api 4 Dimensi)</h3>
  <p>Teori Segitiga Api memiiki batasan karena keberadaan ketiga elemen di atas faktanya hanya memicu pijar membara tanpa jilatan lidah api (<em>flaming</em>) berkesinambungan. Untuk melahirkan dinding lidah api menyala abadi, termodinamika modern menggunakan konsep empat dimensi bersisian: <strong>Tetrahedron Api (Fire Tetrahedron)</strong>.</p>
  <p>Tetrahedron ini menambahkan elemen keempat yang ajaib secara kimiawi, yaitu <strong>Rantai Reaksi Kimia (Uninhibited Chemical Chain Reaction)</strong>.</p>
  <p><strong>Mekanisme Rantaian:</strong> Pada fase kritis ini, pembakaran tiga sudut awal melepaskan balasan energi panas yang teramat sangat besar fungsinya untuk mulai merejam/memecah sel molekuler bahan bakar menjadi ion "radikal bebas" ekstrim reaktif. Radikal bebas gas ini lalu bereaksi dengan sisa molekul oksigen murni atmosfer secara repetitif terus-menerus tanpa putus dalam sebuah siklus umpan balik eksotermis kimia yang ajaib mampu menyambung asupan siklus menopang hidup dirinya sendiri secara mandiri 24 jam tanpa jeda sampai tak bersisa unsur bahan.</p>
</div>

<div class="content-block">
  <h3><span class="icon">📊</span> Dinamika Gas: LEL & UEL</h3>
  <p>Dalam membedah campuran bakar bahan berwujud kumpulan spesifik gas atau evaporasi penguapan uap partikel cairan hidrokarbon, proses sintesis pembakaran hanya dapat absolut terinisiasi spontan jika dan hanya jika, perpaduan komposisi rasio konsentrasi gas bercampur perbandingan udara berada selaras absolut persis di ambang <em>Flammable Range (Rentang Mampu Nyala / Explosive Range)</em>.</p>
  <ul>
    <li><strong>LEL (Lower Explosive Limit) / Batas Bawah Ledakan:</strong> Ambang batas rasio minimum presentase takar ukuran sebuah gas beracun/hidrokarbon bercampur atmosfer yang cukup tipis menyulut ledakan (zona batas uap terlalu miskin "Too Lean"). Jika propana ber-LEL 2.1% dicampur konsentrasi detektor ruang 1.9%, gas selamanya tak terinisiasi membakar karena kurang makan.</li>
    <li><strong>UEL (Upper Explosive Limit) / Batas Atas Ledakan:</strong> Ambang dinding batas batas tertinggi perbandingan ukuran rasio. Di atas titik ini (misal propana UEL 9.5% tapi konsentrasi ruang 10%), maka ruangan jenuh kepenuhan bensin tanpa molekul oksigen buat disenyawakan, tak akan menginisiasi percikan menyala membakar (zona uap kelewat terlalu kaya "Too Rich").</li>
  </ul>
</div>

<div class="content-block">
  <h3><span class="icon">🧯</span> 4 Teknik Pemadaman Berbasis Tetrahedron</h3>
  <p>Mengerti teori Tetrahedron Api bermakna penguasaan teknik dasar taktik pemadaman api (Firefighting Tactics) dengan mengeliminasi / menghancurkan cukup <strong>Satu (1) dari Empat Sudut Pilar Piramida</strong> tersebut:</p>
  <div class="table-container"><table>
    <thead><tr><th>Nama Strategi Tindakan</th><th>Prinsip Terminologi Mekanis</th><th>Contoh Aplikasi di Lapangan</th></tr></thead>
    <tbody>
      <tr><td><strong>1. Cooling (Pendinginan)</strong></td><td>Menyerang sudut <strong>PANAS (Heat)</strong>. Menurunkan suhu ekstrem cairan bahan hingga drastis anjlok turun terjun merosot jauh melintasi di bawah batas ambang Flash Point (Titik Nyala awal).</td><td>Menyiramkan tembakan debit selang meriam air deras (Water Monitor) membilas mendinginkan punggung pelat baja tebal kontainer tangki bensin yang mulai memuai memerah.</td></tr>
      <tr><td><strong>2. Smothering (Isolasi Tabir)</strong></td><td>Menyerobot merebut pasokan suplai hirup senyawa pernapasan <strong>OKSIGEN (Oxygen)</strong> pembakaran.</td><td>Menyemprot blanket selimut busa pekat padat kental (AFFF / Foam) melapisi atas genangan kuah sup kawah sumbatan minyak menyala sehingga memblokade oksigen. Atau pakai Fire Blanket karung menindi wajan api dapur.</td></tr>
      <tr><td><strong>3. Starvation (Perlaparan)</strong></td><td>Memblokade asupan <strong>BAHAN BAKAR (Fuel)</strong> yang bisa dimakan sisa jilatan serpih api.</td><td>Strategi mengunci putar mati memblokir <em>Block Valve</em> (katup gerbang pipa) agar suplai pompa solar berhenti mancur kucur menyembur, biarkan sisi sisa pipa terbakar sendirian kandas. Memindahkan tumpukan kardus stok barang yang selamat menjauhi lintasan laju arah jalaran amukan api merambat.</td></tr>
      <tr><td><strong>4. Chemical Inhibition (Inhibitor Rantai)</strong></td><td>Menembus <strong>RANTAI REAKSI KIMIA</strong> pada tingkatan nano molekuler lidah gas partikel kobaran terbang. Teknik modern instan memutus rantai radikal bebas oksigen api saat dihembus di udara seketika langsung mati lumpuh putus secara kilatan petir murni di udara.</td><td>Menghentak menembakkan kabut lebat corong tabung debu tepung kimia kering ajaib bertekanan serbuk halus putih (<em>Dry Chemical Powder/DCP</em> Extinguisher), yang serbuk putihnya itu murni bertugas mencekik leher sel udara apinya yang melayang di angkasa.</td></tr>
    </tbody>
  </table></div>
</div>

<div class="alert alert-success">
  <div class="alert-icon">💡</div>
  <div class="alert-content">
    <div class="alert-title">Tips Tes</div>
    <div class="alert-text">Perbedaan Segitiga vs Tetrahedron: Segitiga butuh <strong>Panas, Bahan Bakar, Oksigen</strong>. Tetrahedron nambah elemen ke-4: <strong>Rantai Reaksi Kimia</strong> (bikin api nyala terus). Hafal 4 teknik matiin api: <strong>Cooling</strong> (air), <strong>Smothering</strong> (busa/cekin udara), <strong>Starvation</strong> (tutup valve fuel), dan <strong>Inhibition</strong> (bubuk DCP/putus rantai kimia). Ingat O2 minimal <strong>15%</strong>.</div>
  </div>
</div>`
  }

];
