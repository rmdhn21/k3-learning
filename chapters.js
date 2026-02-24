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
  <h3><span class="icon">🎥</span> Video Tutorial: Penggunaan Gas Detector</h3>
  <div class="video-container" style="margin: 20px 0; position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); background-color: #000;">
    <video style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" controls preload="metadata">
        <source src="videos/gas_detector.mp4" type="video/mp4">
        Maaf, browser Anda tidak mendukung pemutar video HTML5.
    </video>
  </div>
  <p>Tonton video di atas untuk memahami cara kalibrasi dasar dan pembacaan level aman pada Portable Gas Detector harian di lapangan kerja.</p>
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
  },
  {
    id: 'ch11', num: 11, title: 'Review Materi Penting', badge: 'badge-orange',
    desc: 'Rangkuman esensial materi K3 RIG: APAR, APD, Gas Detector, SCBA, dan Hierarki Pengendalian.',
    icon: '📋',
    html: `
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
</div>`
  },
  {
    id: 'ch12', num: 12, title: '50 Studi Kasus K3', badge: 'badge-purple',
    desc: 'Melatih kemampuan analisa K3 di RIG dengan 50 soal cerita dan studi kasus komprehensif.',
    icon: '🕵️',
    html: `
<div class="section-header">
  <div class="section-badge badge-purple">BAB 12</div>
  <h2 class="section-title">50 Studi <span>Kasus K3</span></h2>
  <p class="section-subtitle">Asah Insting Keselamatan Anda dengan Skenario Nyata</p>
</div>

<div class="alert alert-info" style="margin-bottom: 30px;">
  <div class="alert-icon">ℹ️</div>
  <div class="alert-content">
    <div class="alert-title">Cara Belajar</div>
    <div class="alert-text">Baca setiap studi kasus dengan saksama. Pikirkan apa tindakan yang benar berdasarkan hirarki pengendalian, SOP, dan insting K3, lalu klik tombol <b>Lihat Jawaban & Pembahasan</b> untuk memvalidasi analisa Anda!</div>
  </div>
</div>

<div class="content-block">
  <h3>Bagian 1: Alat Pelindung Diri (APD)</h3>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 1: Inspeksi Tangki Lumpur</div>
    <div class="case-study-text">Seorang pekerja ditugaskan membersihkan tangki lumpur (mud tank) yang kering. Ia memakai helm, kacamata, wearpack biasa, dan sepatu boot karet awam. Apa kesalahan APD pada pekerja ini berdasarkan standar RIG?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Kesalahan:</b> Wearpack biasa dan sepatu boot karet awam.<br><br>
        <b>Pembahasan:</b> Di area RIG, wearpack <b>wajib</b> berbahan *Fire Retardant (FR)* (tahan api). Selain itu, sepatu boot harus berjenis *Safety Boots* yang memiliki ujung baja (*Steel Toe*) untuk menahan jatuhan benda berat dan sol luar anti-slip spesifik untuk area berminyak (Nitril Rubber). Tangki lumpur juga tergolong *Confined Space*, sehingga wajib disiapkan SCBA <i>standby</i>.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 2: Area Bising Kompresor</div>
    <div class="case-study-text">Anda melewati area *Generator Set* dan kompresor yang menghasilkan kebisingan 90 dB selama 2 jam non-stop. Rekan Anda beralasan tidak pakai pelindung telinga karena "cuma sebentar". Bagaimana respon Anda?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Tindakan:</b> Menerapkan *Stop Work Authority* (SWA) dan menegurnya.<br><br>
        <b>Pembahasan:</b> Batas aman paparan kebisingan tanpa pelindung telinga menurut standar NIOSH/OSHA adalah maksimal <b>85 dB selama 8 jam</b>. Kebisingan 90 dB sudah melewati ambang batas dan dapat merusak sel rambut koklea secara permanen perlahan jika terpapar 2 jam tanpa <i>Ear Plug</i> atau <i>Ear Muff</i>. Alasan "cuma sebentar" adalah salah satu <i>Unsafe Act</i> paling umum.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 3: Bekerja di Ketinggian</div>
    <div class="case-study-text">Dua orang kru *Derrickman* sedang memperbaiki lampu sorot di atas menara bor pada ketinggian 15 meter. Mereka memakai Sabuk Keselamatan (Safety Belt) pinggang biasa. Apakah ini sudah sesuai standar *Fall Protection*?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Kesalahan:</b> Menggunakan <i>Safety Belt</i>.<br><br>
        <b>Pembahasan:</b> Berdasarkan standar *Fall Protection* modern, untuk bekerja di ketinggian (biasanya >1.8 meter), pekerja wajib menggunakan <b>Full Body Harness</b> dengan <i>Double Lanyard</i> dan <i>Shock Absorber</i>. Sabuk pinggang (*Safety Belt*) dilarang karena jika pekerja jatuh, hentakan di pinggang dapat meremukkan tulang belakang dan merusak organ dalam seketika.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 4: Kehilangan Kacamata Safety</div>
    <div class="case-study-text">Seorang *Roustabout* kehilangan kacamata *safety*-nya setelah istirahat makan siang. Karena terburu-buru, ia mencongkel kacamata hitam gaya (sunglasses) miliknya sendiri dan bergegas kembali ke lantai bor. Apa potensi bahayanya?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Bahaya:</b> Kebutaan mekanis akibat pecahan lensa gaya.<br><br>
        <b>Pembahasan:</b> Kacamata pelindung K3 (<i>Safety Glasses</i>) bersertifikat <b>ANSI Z87.1</b> dirancang menggunakan material Polikarbonat yang lentur dan sangat kuat meredam benturan berkecepatan tinggi tanpa pecah berkeping. *Sunglasses* gaya biasa terbuat dari kaca atau plastik murah yang akan hancur menjadi serpihan tajam langsung ke mata jika terkena lontaran kerikil bertekanan, menyebabkan cedera yang jauh lebih fatal.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 5: Tangan Terjepit Pipa</div>
    <div class="case-study-text">Saat proses *Running Casing*, seorang *Floorman* menggunakan sarung tangan kain rajut tipis (cotton gloves) untuk memandu ujung pipa berat yang bergoyang. Tiba-tiba jarinya terjepit (Pinch Point). Mengapa sarung tangan kotor ini memperparah keadaan?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Bahaya:</b> Tergulung dan patah tulang parah <i>(Caught-in)</i>.<br><br>
        <b>Pembahasan:</b> Sarung tangan rajut/kain dilarang di area *drill floor* karena serat kainnya mudah tersangkut (*snag*) pada ulir besi pipa yang berputar mekanis. Ketika kain tersangkut, tangan pekerja otomatis tertarik secara paksa ke dalam mesin. Pekerja RIG wajib menggunakan <b>Impact Gloves</b> berbahan *heavy-duty* kulit dengan bantalan penahan benturan TPR di sepanjang punggung jari untuk meredam syok benturan *Pinch Point*.
      </div>
    </details>
  </div>
</div>

<div class="content-block">
  <h3>Bagian 2: Gas Detector & SCBA</h3>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 6: Alarm H₂S Bunyi Pendek</div>
    <div class="case-study-text">Saat bekerja di dekat *Cellar*, *Personal Gas Detector* milik Anda berbunyi 1 kali ("Tit") lalu diam, dan di layar tertera "2 ppm". Udara sedikit bau telur busuk. Apa yang akan Anda lakukan di lingkungan RIG?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Tindakan:</b> Hentikan kerja (SWA), amankan area, laporkan ke atasan dan keluar dari *cellar* melawan arah angin (crosswind/upwind).<br><br>
        <b>Pembahasan:</b> Walaupun 2 ppm masih di bawah batas TWA (10 ppm), alarm awal menunjukkan bahwa terdapat <b>kebocoran pasif</b> H₂S. Gas H₂S sangat licik dan gasnya terkumpul lebih berat dari udara (tenggelam di *cellar*). Gas tersebut bisa saja melonjak ke 100 ppm dalam hitungan detik. Prinsipnya: sekecil apapun deteksi H₂S, evakuasi dan laporkan (*Do not ignore it*).
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 7: Menyelamatkan Rekan H₂S</div>
    <div class="case-study-text">Anda melihat rekan kerja Anda tiba-tiba pingsan di area *Shale Shaker* setelah mengeluh "bau belerang hilang". Anda berdiri 5 meter jauhnya. Anda berniat kuat berlari masuk menahan napas menyelamatkannya. Bolehkan tindakan Anda?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Tindakan:</b> <b>TIDAK BOLEH SAMA SEKALI.</b><br><br>
        <b>Pembahasan:</b> Tindakan heroik tanpa alat pelindung (*SCBA*) adalah penyebab kematian terbanyak nomor dua <i>(Doomed Rescuer)</i> di insiden H₂S. Konsentrasi pasti di atas 100 ppm (ditandai dengan lumpuhnya daya ciuman - "bau hilang"). Berlari butuh oksigen banyak; satu tarikan napas Anda akan langsung membuat Anda pingsan di sebelahnya. Anda wajib memencet *General Alarm*, lalu gunakan SCBA penuh sebelum mengevakuasi korban.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 8: Persentase Oksigen Menurun</div>
    <div class="case-study-text">Sebelum membersihkan tangki kosong <i>(Confined Space)</i>, *Authorized Gas Tester* mengecek layar angkanya menunjukkan Oksigen (O₂) di level 18.5% dan LEL 0%. Atasan memaksa Anda masuk karena LEL aman. Apa argumen penolakan K3 Anda?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Tindakan:</b> Menolak masuk (SWA) karena asfiksia oksigen.<br><br>
        <b>Pembahasan:</b> Batas minimal absolut konsentrasi Oksigen untuk bekerja tanpa alat bantu pernapasan adalah <b>19.5%</b>. Nilai 18.5% menandakan udara telah terdisplasemen (tersedot) oleh gas inert rahasia lain (seperti Nitrogen murni atau Karbon Dioksida). Masuk tanpa SCBA di level 18.5% akan menyebabkan respons motorik memburuk seketika dan berujung pingsan lemas (*Hypoxia*).
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 9: Penguncian SCBA Terlupakan</div>
    <div class="case-study-text">Seorang regu *Rescue* buru-buru memakai *Open-Circuit* SCBA, lalu terjun ke ruangan beracun. Ia lupa memeriksa jarum *Manometer* yang ternyata tersisa beban tekanan merah (sisa udara 5 menit). Apa nama alarm pencegahan terakhir pada tabung tersebut?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Jawaban:</b> <i>Whistle Alarm / Low-Pressure Warning Alarm</i>.<br><br>
        <b>Pembahasan:</b> Setiap alat SCBA dirancang *fail-safe* dengan peluit internal mekanis. Jika jarum tekanan turun melewati sisa 25% (sekitar 5-10 menit batas pelarian tersisa), tabung udara akan memicu alarm bunyi melengking secara keras otomatis di daun telinga operator, menandakan <b>ia harus SEGERA dievakuasi keluar</b> ruang terbatas tanpa kompromi.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 10: Alarm LEL Berkedip Tinggi</div>
    <div class="case-study-text">Pada operasi *hot work* pengecatan semprot dekat pemanas tangki, gas monitor berkedip merah di nilai LEL: 15%. Welder menganggap 15% masih "kecil" karena belum 100%. Jelaskan kesalahan mematikan pandangan welder ini!</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Kesalahan:</b> 15% LEL bukanlah skala murni gas, itu adalah penanda persentase ambang BATAS BAWAH LEDAKAN.<br><br>
        <b>Pembahasan:</b> LEL (Lower Explosive Limit) adalah titik konsentrasi paling miskin gas di udara yang bisa dipantik api untuk MELEDAK. Standar aman K3 menyatakan alarm akan dibunyikan keras jika LEL mencapai batas <b>10%</b> dari asalnya. Membiarkan LEL 15% saat sedang menyalakan alat *hot work* berarti Anda sedang memicu pemicuan penyalaan bom maut di sekujur ruang kerja Anda.
      </div>
    </details>
  </div>
</div>

<div class="content-block">
  <h3>Bagian 3: Bahaya RIG & Permit To Work (PTW)</h3>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 11: Izin Kerja "Hot Work" Kadaluwarsa</div>
    <div class="case-study-text">Pekerjaan pengelasan (*Hot Work*) pipa utama disetujui dalam Surat Izin Kerja (PTW) hingga pukul 16:00. Pukul 16:15, pengelasan kurang 5 menit lagi untuk selesai kencang total. Bolehkan *welder* menyelesaikan las sisa 5 menit tanpa memperbarui izin?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Jawaban:</b> <b>TIDAK BOLEH. Pekerjaan harus dihentikan paksa detik itu juga.</b><br><br>
        <b>Pembahasan:</b> <i>Permit To Work (PTW)</i> adalah dokumen hukum asasi terikat waktu. Lingkungan atmosfer di area RIG bisa berubah radikal dalam hitungan menit (angin berubah, shift operator gas terganti). Bekerja di luar jam PTW <b>1 detik pun</b> berarti bekerja tanpa uji detektor gas valid yang bisa berujung pada ledakan gas liar akibat loncatan api las.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 12: Temuan "Dropped Object"</div>
    <div class="case-study-text">Seorang kru menemukan baut berukuran besar sebesar kepalan tangan berada bebas di lantai *drill floor* bawah derrick. Ia memungutnya dan akan menaruhnya di meja. Apa tindakan K3 investigasi yang luput ia lakukan?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Tindakan Penting:</b> Melihat ke atas <i>(Look Up)</i> dan melaporkan *Near Miss DROPS*.<br><br>
        <b>Pembahasan:</b> Baut seberat 1 kg yang jatuh dari ketinggian 20 meter menara derrick bisa membunuh seketika (*Fatality*) sekalipun pekerja memakai Hard Hat. Ini dinamakan *DROPS (Dropped Objects)*. Menemukan baut "sisa" berarti ada instalasi di atas yang saat ini <b>LONGGAR dan akan runtuh</b>. Pekerja wajib setop bor, lihat ke atas, lapor pengawas (*Driller*) untuk inspeksi di ketinggian, dan buat laporan *Near-Miss*.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 13: Isolasi Listrik yang Lalai (LOTO)</div>
    <div class="case-study-text">Mekanik ingin membuka kover *Mud Pump* (pompa lumpur hidrolik listrik). Ia menyuruh operator mematikan tombol saklar ke "OFF", lalu mekanik langsung membongkar kover. Konsep fundamental apa yang dilewati sang mekanik?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Kesalahan:</b> Melewati Sistem LOTO <i>(Lockout / Tagout)</i>.<br><br>
        <b>Pembahasan:</b> Mematikan saklar saja tidak pernah cukup. Seseorang bisa saja tidak sengaja menyalakan saklar kembali saat montir berada di dalam mesin penghancur lumpur. K3 mewajibkan sistem isolasi pelepasan seluruh energi bahaya, lalu mengunci sumber panel saklar utama tersebut menggunakan Gembok fisik milik Mekanik bersangkutan dan menyematkan Label Merah (LOTO).
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 14: Confined Space Tanpa Penjaga</div>
    <div class="case-study-text">Tim pembersih terdiri dari 3 orang memasuki tangki berdiameter 8 meter (Confined Space) dengan SCBA terbuka untuk mengecat dinding dasar. Pengawas (Toolpusher) kebetulan disuruh bos ke atas dek. Siapa yang bertanggung jawab penuh menjaga pintu tangki masuk?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Jawaban:</b> Wajib ada <i>Hole Watcher (Standby Person)</i> di luar mulut tangki.<br><br>
        <b>Pembahasan:</b> Aturan K3 *Confined Space* mutlak mewajibkan pekerja yang memiliki peran tunggal sebagai <b>Hole Watcher</b> duduk berdiri siaga di dekat <i>man-hole</i> masuk ruangan terbatas. Tugasnya HANYA memegang tali navigasi, memonitor sisa udara tabung dari radio, dan memanggil tim *Rescue* jika pekerja tertidur lemas pingsan di dalam. *Hole Watcher* dilarang masuk ke dalam bagaimanapun alasannya.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 15: Bahaya Housekeeping yang Buruk</div>
    <div class="case-study-text">Kru sedang repot mengganti pahat bor. Sebuah kain lap gombal besar direndam di dalam tumpahan genangan gemuk (*grease*) dibiarkan tersandar dekat panel gardu saklar dinamo listrik bertegangan tinggi. Apa yang salah dari adegan ini?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Bahaya:</b> Terciptanya Segitiga Api komplit (*Fire Triangle*).<br><br>
        <b>Pembahasan:</b> Genangan minyak gemuk pada kain katun bekerja erat bertindak sebagai sumbu <b>(Bahan Bakar)</b> plus udara luar <b>(Oksigen)</b>. Gardu lilit dinamo bertegangan tinggi akan menciptakan percikan induksi termal <b>(Panas/Pemantik)</b>. Ketiga unsur <i>Fire Triangle</i> terpenuhi solid tanpa pengawasan karena <i>bad housekeeping</i>. Hasil akhirnya bermuara pada ledakan kelas C (Listrik) menjalar ke kelas B (Minyak Cair).
      </div>
    </details>
  </div>
</div>

<div class="content-block">
  <h3>Bagian 4: Lifting & Rigging</h3>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 16: Posisi Mengangkat Beban (Manual Handling)</div>
    <div class="case-study-text">Seorang *Roughneck* harus memindahkan sak semen seberat 40 kg. Ia membungkuk dengan lutut lurus, lalu menarik karung menggunakan otot punggung bawah secara disentak. Apa potensi cedera terburuk dari postur ini?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Cedera:</b> HNP <i>(Herniated Nucleus Pulposus)</i> atau Saraf Terjepit parah.<br><br>
        <b>Pembahasan:</b> Mengangkat beban dengan punggung melengkung dan lutut lurus akan memberikan tekanan esktrem (hingga 10 kali lipat berat asli) pada diskus tulang belakang (L4-L5). Posisi *Kinetic Manual Handling* yang K3 wajibkan adalah: Jongkok (tekuk lutut), jaga punggung tegak lurus, peluk beban dekat ke dada, dan gunakan <b>kekuatan otot paha/kaki</b> untuk mendorong ke atas secara mulus (bukan disentak).
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 17: Crane Blind Spot</div>
    <div class="case-study-text">Operator Crane sedang memindahkan kontainer pipa panjang sejauh 30 meter. Pandangannya tertutup tumpukan *drill pipe* sehingga ia memindahkan kontainer tersebut secara *blind lift* hanya dengan insting. Siapa peran vital yang wajib ada dalam skenario ini?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Peran Wajib:</b> <i>Signalman / Rigger</i> (Juru Sinyal / Pemberi Aba-Aba).<br><br>
        <b>Pembahasan:</b> Operator derek (Crane) SANGAT DILARANG beroperasi buta tanpa pengarahan pandu visual bersertifikat. <i>Signalman</i> adalah telinga dan mata sang operator saat beban masuk *blind spot*. Komunikasi dua arah atau sinyal tangan harus dikunci <i>(Line of Sight)</i>, dan area gantung (*Line of Fire*) wajib disterilkan dari kru yang melintas di bawahnya.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 18: Sling Kawat Haus (Wire Rope)</div>
    <div class="case-study-text">Sebelum mengangkat mesin *drawworks* seberat 5 ton, seorang *Rigger* menginspeksi sling kawat (wire rope) dan menemukan ada 8 helai kawat individu (wires) yang putus mencuat keluar dalam satu lilitan putaran (strand). Apakah sling kawat tersebut masih berstatus *Fit for Purpose*?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Status:</b> <b>REJECT (Dibuang / Dimusnahkan).</b><br><br>
        <b>Pembahasan:</b> Menurut standar LOLER (Lifting Operations) & OSHA, sling kawat otomatis gagal uji *inspection* jika terdapat &ge; <b>6 kawat putus secara acak dalam 1 pelintiran lengkap (lay)</b> ATAU &ge; <b>3 kawat putus dalam satu gabungan (strand)</b>. Kondisi ini menjamin tali baja akan putus berkeping-keping saat ditarik 5 ton beban mati secara vertikal (SWL turun drastis).
      </div>
    </details>
  </div>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 19: Memaksa Kapasitas Crane (SWL)</div>
    <div class="case-study-text">Beban mesin pompa tertera berat bersihnya 9 Ton. Alat bantu (shackles + sling) total beratnya 1 Ton. *Safe Working Load* (SWL) crane maksimum adalah 10 Ton pada sudut 45 derajat. *Driller* menginstruksikan untuk tetap mengangkat karena "pas 10 Ton". Apakah ini aman?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Tindakan:</b> Tidak Aman <i>(Near-Miss Ekstrem)</i>.<br><br>
        <b>Pembahasan:</b> Berat kotor total (*Gross Weight*) adalah 9 + 1 = 10 Ton. Mengangkat persis di ambang batas krisis SWL (100% Load Capacity) adalah perjudian luar biasa. Jika ada gesekan ringan, tarikan sentakan (*Dynamic Load Factor*), atau hempasan angin (*Wind Load*), tegangan kabel akan berlipat ganda seketika melewati 11 Ton dan mematahkan leher (*Boom*) derek tersebut. Aturan wajarnya adalah <b>Safety Margin minimal 15-20%</b> dari SWL.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 20: Tagline pada Lifting</div>
    <div class="case-study-text">Crane menurunkan beban memanjang berupa tumpukan pipa. Angin kencang pantai membuat pipa-pipa itu berputar secara horizontal membentuk baling-baling mematikan (Helicoptering). Kru *Floorman* mencoba meraih ujung pipa langsung dengan tangannya untuk menghentikan putaran. Apa yang salah?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Kesalahan:</b> <i>Line of Fire</i> tubuh terhadap benda mengambang dinamis.<br><br>
        <b>Pembahasan:</b> Pekerja RIG DILARANG KERAS menyentuh benda gantung dengan lengan fisik langsung untuk manuver presisi. Untuk mencegah beban berputar (*helicoptering*), kru wajib menggunakan tali kendali jarak jauh (pengarah beban) yang disebut <b>TAGLINE</b>. *Tagline* diikatkan pada ujung beban berat, sehingga *Roustabout* bisa menarik beban memutar selaras poros putaran dari jarak aman 5 meter.
      </div>
    </details>
  </div>
</div>

<div class="content-block">
  <h3>Bagian 5: Fire & APAR (Klasifikasi Kebakaran)</h3>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 21: Kebakaran Tumpahan Solar</div>
    <div class="case-study-text">Truk tangki bahan bakar solar terguling menumpahkan BBM di dekat *MVT*. Terjadi percikan listrik dan menyulut kolam solar tersebut. Apa klasifikasi apinya dan APAR bermedia apa yang wajib disemprotkan terlebih dahulu?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Klasifikasi:</b> KELAS B (Cairan Mudah Terbakar).<br><br>
        <b>Pembahasan:</b> Solar adalah *hydrocarbon liquid*. Media pemadam yang digunakan adalah <b>Foam (Busa)</b> kimia atau <b>Dry Chemical Powder (DCP)</b>. Metode Busa adalah yang terbaik (Efek <i>Smothering / Selimut</i>), karena busa akan mengapung di atas lautan solar, memutus rantai pertemuan antara oksigen udara dan cairan bahan bakar seketika tanpa bisa menyala lagi. Dilarang keras menembak air, karena solar lebih ringan dan akan menyebar kemana-mana bersama sapuan air.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 22: Kebakaran Server Mainframe</div>
    <div class="case-study-text">Ruang kontrol komputer pusat operasional RIG (*Company Man's office*) tiba-tiba mengeluarkan asap tebal (*Electrical Short*). Api menyala di lilitan rak *server*. Petugas dengan inisiatif menyenggol *Fire Extinguisher* berjenis BUSA CUKUP besar menuju ke dalam ruangan. Apakah tepat?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Klasifikasi:</b> KELAS C (Elektronik Bertegangan). Busa DILARANG.<br><br>
        <b>Pembahasan:</b> Media Air atau <b>Busa (Foam) berbasis air</b> adalah penghantar listrik sempurna (konduktor). Menyemprot busa ke *server* yang masih beraliran daya 220V akan menyetrum sang petugas K3 tersebut (Bahaya Tersetrum). Media wajib untuk Kelas C adalah <b>Gas CO₂ (Karbondioksida)</b> <i>clean agent</i> yang berfungsi ganda memadamkan titik rawan O2 dan tidak meninggalkan residu bubuk yang merusak cip sirkuit panel halus.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 23: Penyemprotan Ketinggian Api</div>
    <div class="case-study-text">Petugas K3 melihat kobaran api tong sampah merambat ke plafon setinggi 2 meter setinggi atap gudang kertas (Kelas A). Sesuai prosedur (Aim), di titik ujung manakah nozel APAR harus ditujukan agar pemadaman api efektif seketika mati?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Jawaban Kunci K3:</b> Arahkan nozel langsung ke <b>DASAR API (Base of Fire)</b>.<br><br>
        <b>Pembahasan:</b> Jangan menembak jilatan lidah api merah yang menari-nari di udara karena gas pembakaran hanyalah hasil sampingan reaktif. Membutuhkan serangan langsung (metode PASS - *Aim at the Base*) pada bara sumber bakar (kayu/kertas padat) yang memproduksi rantai gas hidrokarbon tersebut. Menyemprot pangkal (*ground zero*) akan instan membungkus memutus oksigen.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 24: Kondisi Angin di APAR</div>
    <div class="case-study-text">Terjadi letupan titik api tangki *chemical* berkapasitas 5 galon di rig saat sore hari laut berangin kencang dari arah barat ke timur <i>(West to East direction)</i>. Petugas berlari dan berdiri di sebelah Timur titik api menyemprot tangki ke barat. Mengapa api justru tertiup mengenai badannya?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Kesalahan Posisi:</b> Melawan Arah Angin <i>(Downwind / Facing Wind)</i>.<br><br>
        <b>Pembahasan:</b> Aturan EMAS menembakkan APAR (terutama jenis serbuk atau gas DCP/CO2) adalah <b>wajib membelakangi hantaman arah mata angin (Berdiri di sisi UPWIND/Barat)</b>. Jika petugas berdiri di sisi *Downwind* Timur, tiupan angin akan menghembuskan bola bola lidah api korosif dan uap beracun APAR berbalik mencelakai dan membakar wajah petugas itu sendiri.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 25: Insiden Lemak Memasak di Dapur RIG </div>
    <div class="case-study-text">Di area *Galley* (Dapur makanan asrama), seorang koki lupa mematikan penggorengan minyak jelantah sisa daging ayam panas (deep-fry). Tiba-tiba wajan mencuat percikan api (Auto-ignition temperature). Tipe kelas kebakaran apa ini dan pemadam apa spesialis aslinya?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Klasifikasi:</b> KELAS K (Kitchen / Komersial Lemak).<br><br>
        <b>Pembahasan:</b> Minyak nabati sayur yang sangat terlampau super-panas (>360 Derajat Celcius) tidak masuk akal dipadamkan kelas B biasa, melainkan Kelas Khusus K. Alat pemadam utamanya berbahan isi <b>Wet Chemical (Potasium Sitrat / Asetat cair khusus)</b>. Larutan alkali reaksi *Wet Chemical* begitu menyentuh cairan minyak mendidih secara misterius akan berbusa membentuk lapisan tipis (*Saponification* / Menyabun), mengurung radikal bebas uap panas mematikan oksigen tuntas tanpa bahaya cipratan (*Boil Over*).
      </div>
    </details>
  </div>
</div>

<div class="content-block">
  <h3>Bagian 6: Electrical & LOTO (Lockout/Tagout)</h3>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 26: Kabel Ekstensi (Rol Kabel) Tergulung</div>
    <div class="case-study-text">Seorang pekerja menggunakan bor listrik tugas berat (heavy-duty) yang terhubung ke kabel ekstensi gulung sepanjang 50m. Ia hanya menarik 5 meter kabel dan membiarkan 45 meter sisanya tergulung rapat di dalam *drum* kabel saat bor dinyalakan lama. Apa bahaya tersembunyinya?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Bahaya:</b> <i>Melting / Fire Hazard (Inductive Heating)</i>.<br><br>
        <b>Pembahasan:</b> Kabel tembaga berarus tinggi yang tergulung melingkar-lingkar ketat layaknya kumparan akan menciptakan efek medan elektromagnetik (induksi panas). Karena tidak ada sirkulasi udara di dalam gulungan plastik tersebut, suhu akan melonjak tajam <b>hingga melelehkan jaket isolator kabel PVC</b>, menciptakan arus pendek liar (short circuit) dan akhirnya membakar gulungan seketika. Gulungan kabel berbeban berat WAJIB ditarik dan diulur lurus sepenuhnya.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 27: Penyelamatan Korban Tersetrum Listrik</div>
    <div class="case-study-text">Rekan Anda kejang-kejang terbaring mencengkeram erat panel listrik terbuka yang bocor. Kulitnya masih menempel pada kabel fasa aktif. Anda berdiri di dekatnya. Bolehkan Anda menyambar baju atau tubuhnya untuk menariknya menjauh?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Tindakan:</b> **DILARANG KERAS MENYENTUH KORBAN.**<br><br>
        <b>Pembahasan:</b> Tubuh manusia adalah konduktor air yang sangat baik. Menyentuh korban yang masih beraliran setrum berarti Anda baru saja menyodorkan diri sebagai jalur sekunder untuk listrik mengalir ke tanah (Ground). Tindakan BENAR pertama adalah berlari ke *Main Breaker Panel* dan matikan arus utama (*De-energize*). Jika panel tidak terjangkau, dorong korban kuat menggunakan benda murni isolator (gagang sapu kayu kering / balok plastik / kait khusus penyelamat listrik), BUKAN logam atau kulit manusia.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 28: Kunci LOTO Dipinjamkan</div>
    <div class="case-study-text">Tiga orang teknisi sedang masuk dan memperbaiki di dalam generator 1200V. Teknisi A memasang Gembok Merah pribadinya di panel, lalu pulang shift lebih awal dan menitipkan kunci gembok LOTO-nya ke rekan Teknisi B agar B bisa membukanya nanti jika sudah selesai. Apakah tindakan titip kunci ini sah?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Status Pelanggaran:</b> Pelanggaran LOTO *Life-Saving Rule* (Sangat Fatal).<br><br>
        <b>Pembahasan:</b> Asas fundamental *Lockout/Tagout* (LOTO) adalah <b>"Satu Orang, Satu Gembok, Satu Kunci Eksklusif"</b>. Tidak ada seorang pun di planet bumi ini, termasuk bos manajer atau presiden perusahaan yang memegang salinan kunci Anda atau boleh meminjam kunci Anda. Gembok A HANYA boleh dibuka oleh mekanik A secara fisik dengan saksi ketika A benar-benar keluar dengan aman. Menitipkan kunci berarti membuka peluang miskomunikasi berujung saklar diretas *(energized)* sebelum nyawa orang tuntas selamat.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 29: Tombol E-STOP (Emergency Stop)</div>
    <div class="case-study-text">Mesin kerekan kawat penarik (*Winch*) pipa macet membahayakan menarik *roughneck*. Ia berteriak dan Anda selaku pengamat terdekat langsung menekan *Mushroom Button* merah (Emergency Stop) di panel kontrol Winch. Mesin berhenti seketika. Apakah proses isolasi mesin LOTO tersebut sudah cukup 100% aman untuk montir melepas tangannya?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Jawaban K3:</b> BELUM. E-Stop bukan fungsi pembunuh energi isolasi murni.<br><br>
        <b>Pembahasan:</b> Tombol E-Stop dirancang untuk memberhentikan darurat di sela siklus elektronik sesaat untuk mencegah bahaya bertambah parah (*Circuit Interruption*). Ini <b>TIDAK memutus mekanis saklar murni tegangan masuk</b>. Arus listrik raksasa masih bersiaga penuh di balik panel menunggu tombol E-Stop dicabut (reset). Mesin tetap wajib dipastikan dimatikan dari Breaker Induk Utama dan digembok fisik murni jika intervensi tangan menuntut perbaikan mendalam (*Zero Energy State*).
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 30: Daisy-Chaining Kabel Soket (Colokan Menumpuk)</div>
    <div class="case-study-text">Di kantor admin *Rig Superintendent*, sebuah colokan T (Terminal cabang) dicabut ke soket dinding. Kemudian ada kru mencolokkan Papan daya panjang (Power Strip) ke colokan T tersebut, lalu Power Strip lainnya dicolokkan ke Papan daya pertama untuk membagi arus ke 10 laptop, *microwave*, dan kulkas. Apa K3 menamakannya?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Kesalahan K3:</b> Praktik <i>Daisy-Chaining</i> atau Bunga Karang Tumpuk.<br><br>
        <b>Pembahasan:</b> Merantai soket terminal cabang bertingkat-tingkat (*piggybacking*) akan instan menghancurkan batasan *Amperage* (Kuat arus) desain awal saklar pelindung dinding utamanya. Resistensi kontak sambungan kabel membesar, memicu kabel dinding utama menyemburkan panas ekstrim yang tidak terlihat tanpa memicu sekering jeglek seketika, dan akhirnya berakhir asbes tembok dinding terbakar karena instalasi terbakar secara rahasia. Terminal panjang <b>WAJIB</b> dicolok langsung ke sumber listrik dinding asli (<i>Direct Wall Outlet</i>).
      </div>
    </details>
  </div>
</div>

<div class="content-block">
  <h3>Bagian 7: Bahan Kimia Berbahaya (B3) & HazMat</h3>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 31: Terkena Cipratan Asam Kimia Kuat</div>
    <div class="case-study-text">Seorang pekerja (Tanpa Faceshield) tidak sengaja meneteskan reagen kimia lumpur (Sodium Hydroxide/Soda Api Kaustik) langsung menembus kelopak matanya yang seketika serasa terbakar. Berapa lama standar waktu minimal ia wajib membilas paksa matanya di stasiun <i>Eyewash Station</i> terdekat?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Standard Medis K3:</b> Bilas secara merata air mengalir stabil selama <b>MINIMAL 15 MENIT TErus Menerus</b>.<br><br>
        <b>Pembahasan:</b> Bahan kimia korosif seperti basa kuat (Caustic Soda) atau asam pekat akan dengan liar dan instan memakan menembus jaringan kornea mata halus. Aturan Emas HAZMAT menyebutkan korban dilarang menutup rapat refleks matanya. Ia harus membelalakkan kelopak matanya terpaksa terbuka <i>(Forced Open)</i> di atas air tawar (*Eyewash* mengalir netral) berturut-turut minimum sepanjang tidak kurang 15 menit, barulah setelah proses pengurasan netral cair panjang ini boleh ia langsung dilarikan ke rumah sakit dokter rujukan <i>Rig Medic</i>. 
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 32: Membaca Label NFPA 704 Titik Merah</div>
    <div class="case-study-text">Anda melihat sebuah gentong zat pendingin (*coolant*) tak bertuan memiliki stiker belah ketupat warna-warni (NFPA diamond). Di kotak berlian berlatar warna <b>MERAH</b> tercetak ukiran mutlak angka "4" tegas. Apa makna tak terbantahkan dari label angka MERAH = 4 ini bagimu?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Makna Label:</b> Tingkat Bahaya Kebakaran Paling Ekstrem / Puncak Tertinggi (Bisa Menyala di bawah Suhu Kamar <22°C).<br><br>
        <b>Pembahasan:</b> Sistem label internasional NFPA membagi informasi cepat: BIRU (Kesehatan Beracun), MERAH (Skala Terbakar/Flammability), KUNING (Isu Reaktivitas Meledak), PUTIH (Instruksi Spesial Oxi/Water-reactive). Angka ukur berkisar di 0 (aman) ke 4 (paling ekstrim fatal). <b>Warna MERAH Angka 4</b> artinya ini adalah fluida atau gas volatil gila yang <b>sangat mudah meledak meletup tersulut hanya di ambang suhu sangat rendah (Flash point sangat mematikan di bawah 73°F/22°C)</b> dan mengaburkan atmosfer uap sekitarnya. Setitik bunga api statis baju kain cukup meledakkannya.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 33: Penanganan Drum Campuran Sisa Limbah Tumpah</div>
    <div class="case-study-text">Area dek bawah geladak (*Mud Return*) RIG menggenang tumpahan dua zat misterius: 1 bocor campuran oli oli solar berat dan 1 cairan zat amonia kental. Seorang Roustabout rajin langsung menaburkan karbol lantai asam keras pemutih dan mengepel mencampur cairan-cairan sisa buangan itu disiram di satu wadah. Apakah langkah "Pembersihan Rajin" nya ini valid secara HazMat K3?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Tindakan Kesalahan:</b> Kiamat Kimia (*Reactive Poisonous Mixing*).<br><br>
        <b>Pembahasan:</b> Prinsip Emas Barang Berbahaya Industri (HazMat/B3): <b>Jangan Pernah Sok Tahu Mencampur Cairan Tak Dikenali.</b> Amonia yang diam-diam tidak sengaja digabung dengan Pemutih pembersih pemoles lantai (Bleach/Sodium Hypochlorite) akan instan mendidih tak terlihat membentuk pelepasan raksasa tak berbau racun <b>Gas Kloramin (Chloramine Vapor Bombs)</b> yang sekejap melumpuhkan dinding fungsi paru-paru orang satu ruangan. Tumpahan zat tak dikenal di sektor mesin wajib dipisahkan, dibendung dengan pasir serap *absorbent/spill kit*, tidak boleh dibilas masuk laut sembarangan, lalu dirujuk mengacu pada dokumen SDS (*Safety Data Sheet*) sebelum dibersihkan pakar tim pelumas kimiawi.
      </div>
    </details>
  </div>
</div>

<div class="content-block">
  <h3>Bagian 8: Confined Space & Penyelamatan</h3>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 34: Ventilasai Tangki Bawah Tanah</div>
    <div class="case-study-text">Kru RIG harus membersihkan lumpur di dasar tangki ponton di bawah air (*Confined Space*). Sebelum masuk, tangki telah dikipas sirkulasi udara (di-*purging*) menggunakan *blower exhaust* portabel angin dari luar selama 10 menit terus menerus. Begitu Gas Tester menyatakan Oksigen aman di level 20.9%, *blower* langsung dicabut mati. Pekerja pun masuk menuruni tangga. Apa yang salah?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Kesalahan K3:</b> Mematikan <i>Continuous Ventilation</i> (Exhaust) selagi orang bekerja di dalam.<br><br>
        <b>Pembahasan:</b> Walaupun tes udara di mulut tangki di permukaan membaca Oksigen di batas normal, ketika pekerja menginjak bergerak membersihkan sisa lumpur dalam *sludge*, mereka akan membangkitkan dan melepaskan kantong-kantong sisa gas H2S pasif atau metana yang selama ini terperangkap di dasar lumpur, atau menyedot habis Oksigen karena reaksi pernapasan panjang mereka sendiri. Mesin Kipas Ventilasi Udara *Supply/Exhaust* <b>DILARANG DIMATIKAN Sedetikpun (Harus Continuously Running)</b> selama ada pekerja hidup bernapas di dalam sumur atau tangki terbatas tersebut.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 35: Izin Entry Permit Berlaku Kapan?</div>
    <div class="case-study-text">Sebuah *Confined Space Entry Permit* tertanggal hari Selasa dikeluarkan untuk pekerjaan pembersihan lambung perahu (*Hull*). Pada hari Selasa sore jam 17:00 batas shift habis, masih ada sisa pekerja mengecat titik dinding terakhir yang tinggal sisa 20 cm saja. Pekerja bersikeras menyelesaikannya sebentar. Bolehkah batas izin "Entri" ini dilangkahi demi efisiensi 5 menit kerja?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Jawaban Tegas:</b> TIDAK. Tidak ada Toleransi.<br><br>
        <b>Pembahasan:</b> Aturan EMAS *Confined Space* Permit berlaku saklek: Saat Izin Habis Kadaluwarsa detik itu juga -> PEKERJA WAJIB BERHENTI, Alat ditinggalkan, semua pekerja keluar mengabsen satu demi satu kepada sang <i>Hole Watcher</i>. Semua *Permit* masuk batal demi hukum 00:00. Jika pekerjaan ingin dilanjutkan walau sisa satu inci, pengawas Gas Tester yang BARU di *shift* berikutnya WAJIB melakukan inspeksi kualitas *Gas Check* ulang dan merilis kertas Izin Baru. Hal ini untuk mengantisipasi akumulasi gas berbahaya diam-diam (seperti CO Karbon Monoksida) akibat udara tak menentu menumpuk di menit ke 1.
      </div>
    </details>
  </div>

   <div class="case-study">
    <div class="case-study-title">Kasus 36: Tali Harness Evakuasi</div>
    <div class="case-study-text">Pekerja telah mengenakan Full Body Harness modern saat menuruni dasar sumur tangki (*Confined space*). Namun, *lifeline* (tali utama penolong) yang panjangnya ditarik dari *Tripod Rescue* dipusatkan kaitannya ditarik dan diklik di bagian ikat pinggang depan *Harness* perut pekerja tersebut di area dada. Apa bahaya utama dari posisi klik penyelamatan ring jangkar depan ini?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Potensi Cedera Fatal:</b> Leher atau tulang iga remuk tersangkut dinding (Asfiksia posisional).<br><br>
        <b>Pembahasan:</b> Aturan Baku evakuasi *Confined Space*: Tangan atau alat bisa saja patah atau lemas saat pekerja pingsan mendadak karena H2S. Cincin d-ring kait utama penyelamatan *Tripod Winch* **HARUS MUTLAK Dikaitkan di Punggung Pekerja (Dorsal D-Ring Center Back) atau Sabuk Pundak Tinggi Belakang Kepala**. Jika ditarik dari perut/dada (*Front-Ring*), tubuh korban yang pingsan layu akan terlipat menekuk jatuh ke belakang leher, dan kepalanya dapat membentur menyangkut pinggiran lubang kecil *Man-hole* (50 cm), me-mutilasi dan meremukkan kepala tulang belakangnya kala tim menarik paksa engkol kabel derek keras di atas dari Tripod Winch maut.
      </div>
    </details>
  </div>
</div>

<div class="content-block">
  <h3>Bagian 9: Housekeeping & Dropped Objects</h3>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 37: Meja Kerja Penuh Besi Baut Sisa di Atas Derrick</div>
    <div class="case-study-text">Seorang teknisi selesai mengecat lampu tiang setinggi 25 meter. Ia selesai membereskan peralatan, namun ia meninggalkan 2 buah sisa baut sebesar kelingking logam diletakkan di celah aman ujung datar kisi tiang tersembunyi karena malas membawanya turun menggunakan tali. Semenit setelah ia turun aman, bel berdering pertanda Rig Pengeboran mulai diputar kencang bergetar. Apa potensi bencana pembunuh senyap ini disebut?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Bencana:</b> <i>Dynamic Dropped Object (DROPS Hazard).</i><br><br>
        <b>Pembahasan:</b> Ketinggian 25 meter akan mengubah baut kecil 200 gram sekalipun melesat jatuh terakselerasi berlipat-lipat gravitasinya menembus tulang tengkorak dan Helm Safety ABS pekerja <i>Floorman</i> di bawahnya layaknya peluru mematikan. Pemicunya? RIG yang bergetar *(Rig Vibration)* murni menggeser dan menjatuhkan baut baut sekecil apa pun dari atas dek pijakan lantai kisi-kisi sempit tersebut (*Grating Floors*). Tidak ada alat tertinggal sebesar kuku pun yang diabaikan. Pekerja diwajibkan mengikat semua alat tangan dengan *Tool Lanyard* penahan.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 38: Sepatu Tergelincir Licinnya Genangan Oli Pipa</div>
    <div class="case-study-text">Setelah hujan rintik-rintik, lapisan licin fluida kimia campuran *Drilling Mud* tipis tidak sengaja membias menyebar membasahi tangga plat besi dek akses jembatan RIG. Supervisor telah memberi *Warning Sign* kuning bertuliskan "Awas Licin" di ujung tangga. Seorang kuli *(Roustabout)* dengan santainya berlari turun setengah bergegas dengan kedua belah tangan sibuk mengangkat kotak besi perkakas seberat 20 kg dan meremehkan pijakannya. Dua KESALAHAN FATAL K3 apa (Unsafe Act) yang dilarikan kuli ini sekaligus?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Kesalahan K3:</b> <i>Three-Point Contact Failure</i> (Lupa Aturan 3 Titik Pijak) & Praktik Manual Lifting Buta.<br><br>
        <b>Pembahasan:</b> Turun tangga RIG (terlebih saat licin licin hujan oli) <b>DIWAJIBKAN</b> mengikuti asas Tiga-Titik-Kontak yang Sakral: (2 tangan + 1 kaki menginjak) atau (2 kaki berpijak kokoh + 1 tangan memegang rel kuat). Karena kedua tangannya buta sibuk merangkul kotak besi (0 kontak tangan ke susuran besi), ia memutus jaring insting pengaman utamanya. Ketika sepatu licin (*Slip*), kepalanya akan bebas terpelanting membentur anak tangga baja (*Trip & Fall*) tanpa perisai rem pegangan tangan.
      </div>
    </details>
  </div>
</div>

<div class="content-block">
  <h3>Bagian 10: Occupational Health & First Aid</h3>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 39: Heat Stroke di Padang Pasir RIG</div>
    <div class="case-study-text">Saat bertugas melakukan bongkar muat rantai pipa berat gila di RIG padang gurun siang bolong >45 Celcius, rekan kerja *Floorman* Anda pucat lemas, kulitnya kering merah dan kebingungan panas (*disoriented*). Hebatnya ia tiba-tiba TIDAK berkeringat sama sekali. Ini bukan sekadar kelelahan (*Heat Exhaustion*). Kondisi medis kritis ini disebut?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Istilah Medis:</b> Sangat Kritis - <b>HEAT STROKE (Sengatan Panas Gagal Otak).</b><br><br>
        <b>Pembahasan:</b> Berhenti memproduksi keringat padahal hawa kulit membakar melepuh merah adalah ciri khas mematikan dari *Heat Stroke*. Artinya kelenjar pendingin alami (Termostat Hipotalamus di otak) 100% GAGAL TOTAL (*Shutdown*). Hawa cairan organ dalam otaknya memanas merebus diri mereka sendiri. Ia bisa jatuh koma hitungan menit. Korban wajib SESEGERA mungkin diselamatkan, dilucuti *Coverall*-nya, ditaruh di AC kencang / es es air dan dikirim rujukan evakuasi medis darurat. Memaksanya hanya sekedar "minum air" tidak lagi mempan me-reset kerusakan organ di titik buta ini.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 40: Menangani Amputasi Darurat Terpotong (Pinch Point)</div>
    <div class="case-study-text">Jari seorang masinis RIG telunjuknya tertebas terpotong hancur terkena sabuk kipas V-Belt pompa yang berayun tanpa penjaga isolasi (Unsafe Condition). Pendarahan mengucur darah masif berdetak menyemprot ritmis. Alat darurat kotak obat (*First Aid Kit*) jaraknya 5 menit. Skenario respons pertama pertolongan K3 yang wajib Anda lakukan adalah memencet lengan pendarahannya. Tepatkah merendam potongannya di bongkahan Es Batu beku secara membabi buta?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Tindakan Bantuan:</b> Pendarahan ditekan Keras (*Direct Pressure*) Tinggi melebihi Jantung. Potongan bagian jangan direndam ES BATU secara Murni.<br><br>
        <b>Pembahasan:</b> Merendam langsung serpihan potongan bagian lunak otot (amputasi) pada rendaman blok blok membeku *ice bath/Es* hanya akan membekukan menghancurkan sel biologis arteri jaringan kecil *(Frostbite/Tissue Necrosis)* seketika. Hal ini meniadakan kesempatan tim ahli bedah mikro medis merekonstruksi jahitan nadi kembali. Masukkan potongan di kain basah kering lembab bersih dan bungkus kantong perantara baru letakkan air pendingin es terpisah pelan-pelan (Lapisan protektif ganda jauh).
      </div>
    </details>
  </div>
</div>

<div class="content-block">
  <h3>Bagian 11: Safety Culture & Kepatuhan Prosedur (SOP)</h3>
  
  <div class="case-study">
    <div class="case-study-title">Kasus 41: Bypassing Safety Device (Mematikan Sensor)</div>
    <div class="case-study-text">Alarm getaran (Vibration Sensor) di panel kompresor raksasa terus-menerus berbunyi palsu (*False Alarm*) sehingga mengganggu produksi pengeboran minyak lepas pantai malam hari. Atasan langsung menginstruksikan Teknisi Instrumen untuk men-'Jumper' (membypass kabel) agar sensor diam demi kelancaran target kuota minyak hari itu. Berdosa fatalitas apakah perintah atasan ini?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Dosa K3:</b> Melanggar <i>Life-Saving Rules</i> Internasional mutlak: *Bypassing Safety Critical Equipment*.<br><br>
        <b>Pembahasan:</b> Tidak ada satupun kilang minyak di dunia ini yang me-legalkan penonaktifan sensor peringatan (*Safety Critical Element*) tanpa mengurus berlapis-lapis surat Penimpaan Sistem Manajemen <i>Management of Change (MOC)</i> atau *Bypass Permit* tingkat tertinggi dari *Installation Manager*. Aksi *Jumper* kabel buta demi produksi ini dituding sebagai dalang utama meledaknya kilang pesisir Teluk Deepwater Horizon dan Texas City.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 42: "Saya Sudah Berpengalaman 20 Tahun"</div>
    <div class="case-study-text">Seorang Operator Senior berusia 50 tahun menolak berpartisipasi dan mendengarkan *Toolbox Talk* (Briefing harian JSA K3 pagi-pagi). Ia mencibir, <i>"Saya sudah kerja begini 20 tahun tidak pernah celaka, ini cuma buang-buang waktu administrasi."</i> Sikap mental picik (*Complacency*) di lingkungan beresiko tinggi ini sering dirumuskan dengan sindrom apa?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Sikap Mental K3:</b> Sindrom <i>Complacency / Overconfidence</i> (Lengah/Terlalu Percaya Diri).<br><br>
        <b>Pembahasan:</b> Survei piramida perilaku celaka membuktikan para pekerja gaek >10 tahun berkontribusi menyumbang angka pingsan kecelakaan lebih fatal dibanding kru magang junior baru. Keahlian rutin berulang meninabobokan kewaspadaan bawah sadar mereka menjadi rutinitas buta. *Toolbox Talk / JSA Briefing* ditujukan justru untuk 'mengerem' sindrom lupa ini agar fokus mereka dikunci kembali ke bahaya harian unik yang bisa berubah setiap kilometernya di alam liar.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 43: Mengoperasikan Forklift Tanpa SIO</div>
    <div class="case-study-text">Sopir Forklift alat berat andalan sedang sakit. Penanggung jawab rig memaksa menyuruh Roustabout muda Budi memindahkan pallet semen karena ia "Kelihatannya Pintar Nyetir Truk Panjang". Perintah ini diacungkan Budi. Surat lisensi K3 esensial apa yang mutlak harus dimiliki Budi untuk memvalidasi sah instruksi itu di mata hukum pemerintah (Depnaker)?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Sertifikat Wajib Otorisasi:</b> <b>SIO (Surat Izin Operator)</b> Alat Berat.<br><br>
        <b>Pembahasan:</b> Menyetir mobil F1 atau mobil truk tronton sejago apa pun tidak menjamin legalitas kemahiran operasional hidrolik dinamis pusat keseimbangan (*Center of Gravity*) di atas kemudi *Lifting Forklift* atau *Crane*. Mengoperasikan alat angkut berat bertenaga tanpa dompet SIO resmi Kemenaker hidup aktif bisa berujung dicabutnya asuransi insiden kerugian perusahaan dan sang *Supervisor* divonis perbuatan merancang kelalaian mematikan korporasi.
      </div>
    </details>
  </div>

  <div class="case-study">
    <div class="case-study-title">Kasus 44: Pengunaan Smartphone Saat Bekerja</div>
    <div class="case-study-text">Di malam hari tenang, seorang pekerja mengantongi Smartphone-nya ke dalam kilang (Area Pengolahan Gas Terbuka). Saat ia berjalan di samping tangki, ibunya tiba-tiba kebetulan menelepon keras. Ia merogohnya. Kesalahan K3 mutlak apa (Klasifikasi Area Hazardous) yang diinjak pekerja malang ini?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Kesalahan K3:</b> Membawa Barang Non-Intrinsically Safe (Non-Ex) ke Zona Nyala Merah <i>HCA (Hazardous Classified Area / ZONE 0 - 1)</i>.<br><br>
        <b>Pembahasan:</b> Sinyal gelombang panjang seluler handphone meresonansi baterai lithium elektronika di dalamnya, dan perambatan mikrosekon listrik di sirkuit ponsel 100% MAMPU melontarkan percikan *Micro-spark* elektromagnetik statik mungil yang tidak kasat mata. Begitu sinyal sambungan ini bertemu dengan campuran udara uap hidrokarbon yang sedang mendidih keluar (Flashpoint), ia meledak layaknya kilat halilintar pabrik. *Device* elektronik biasa sangat mutlak dilarang di *Red Zone*. Semua gadget harus tertuliskan logo Ex/ATEX (*Intrinsically Safe Equipment* - anti percik listrik internal).
      </div>
    </details>
  </div>
</div>

<div class="content-block">
  <h3>Bagian Tambahan Ujian Penutup: Investigasi Cepat</h3>

  <div class="case-study">
    <div class="case-study-title">Kasus 45 - 50: Mini Quiz Investigasi Heinrich</div>
    <div class="case-study-text">Piramida kecelakaan kerja modern (Frank Bird) membeberkan rasio matematis 1 : 10 : 30 : 600 di mana rasio 600 merujuk pada pemicu rahasia akar rumput di ujung struktur insiden kelalaian alam. Apa singkatan nama dasar fenomena angka akar "600" penopang raksasa gunung es maut kelalaian fatal ini?</div>
    <details class="case-study-answer">
      <summary>Lihat Jawaban & Pembahasan</summary>
      <div class="answer-content">
        <b>Jawaban K3 Filosofis:</b> *Near Misses* (Nyaris Celaka) atau Rentetan <i>Unsafe Act/Conditions</i> yang ditolerir dan disembunyikan diam diam.<br><br>
        <b>Pembahasan Akhir:</b> Studi mencatat setiap 1 jenazah kematian pekerja (*Fatality*) disumbang dari rentetan akar fondasi persekongkolan minimal **600 angka kasus pemakluman ketidakpatuhan / nyaris-celaka-tak-dianggap**. Meniadakan kecelakaan maut bukan lagi berarti membeli helm besi yang lebih mahal, tapi melaporkan dan menyidak 1 helai kabel kabel kecil melintangi tangga (Sikap Pelaporan Proaktif bahaya).
      </div>
    </details>
  </div>
  
  <div class="alert alert-success" style="margin-top: 20px;">
    <div class="alert-icon">🏆</div>
    <div class="alert-content">
        <div class="alert-title">Luar Biasa! Level Keselamatan Anda Meningkat!</div>
        <div class="alert-text">Anda sukses membedah 50 studi kasus kronologis dan skenario terburuk di lapangan lepas perminyakan. Insting bertahan hidup dan wawasan K3 RIG Anda kini jauh lebih tajam dari sebelumnya.</div>
    </div>
  </div>
</div>`
  },
  {
    id: 'ch13', num: 13, title: 'Podcast Audio K3', badge: 'badge-blue',
    desc: 'Dengarkan rangkuman eksklusif seluruh materi K3 secara audio (offline) untuk menemani perjalanan Anda.',
    icon: '🎧',
    html: `
<div class="section-header">
  <div class="section-badge badge-blue">BAB 13</div>
  <h2 class="section-title">Podcast <span>Materi K3</span></h2>
  <p class="section-subtitle">Belajar Efektif Lewat Audio di Mana Saja</p>
</div>

<div class="alert alert-info" style="margin-bottom: 30px;">
  <div class="alert-icon">💡</div>
  <div class="alert-content">
    <div class="alert-title">Audio Offline</div>
    <div class="alert-text">Podcast ini dirancang khusus dari rangkuman inti Bab 1 hingga 12. Anda bisa memutarnya tanpa koneksi internet saat di perjalanan menuju lokasi tes!</div>
  </div>
</div>

<div class="content-block" style="text-align: center; padding: 40px 20px; background: linear-gradient(145deg, #1e293b, #0f172a); border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);">
  <div style="font-size: 60px; margin-bottom: 20px;">🎧</div>
  <h3 style="margin-bottom: 10px;">K3 RIG Masterclass Podcast</h3>
  <p style="color: #94a3b8; margin-bottom: 30px;">Durasi: ~2 Menit | Kualitas HD | Bahasa Indonesia</p>
  
  <audio controls preload="metadata" style="width: 100%; max-width: 400px; outline: none; border-radius: 30px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
    <source src="videos/podcast.mp3" type="audio/mpeg">
    Browser Anda tidak mendukung pemutar audio HTML5.
  </audio>
</div>

<div class="content-block">
  <h3><span class="icon">📜</span> Transkrip Podcast (Baca Bersama)</h3>
  <p>Selamat datang di Podcast K3 RIG. Audio ini dirancang khusus untuk Anda dengarkan selama perjalanan menuju lokasi tes. Mari kita ulas inti sari dari dua belas materi krusial keselamatan lepas pantai.</p>
  <p><strong>Bagian pertama, Alat Pelindung Diri:</strong> Di lapangan, APD adalah lapis pertahanan terakhir Anda. Batas minimum APD meliputi Helm ANSI Z89.1, Kacamata Safety, Pelindung Telinga, Coverall tahan api, Sarung Tangan, dan Sepatu Safety berujung baja. Untuk area berisiko tinggi dengan oksigen kurang dari 19.5%, Anda wajib menggunakan alat pernapasan mandiri atau SCBA. Perhatikan indikator tekanan agar udara cukup untuk evakuasi darurat.</p>
  <p><strong>Bagian kedua, Gas Berbahaya:</strong> Musuh tak terlihat yang paling ditakuti adalah Hydrogen Sulfide atau H₂S. Gas korosif ini awalnya berbau telur busuk, namun segera melumpuhkan indra penciuman Anda di atas 100 ppm. H₂S jauh lebih berat dari udara (SG: 1.19), sehingga uap gas ini akan merayap tumpah dan mengendap tenang ke tempat-tempat yang rendah seperti selokan (trenches) dan cellar. Batas aman paparan hariannya (TWA) hanyalah 10 ppm. Wajib gunakan Portable Gas Detector!</p>
  <p><strong>Bagian ketiga, Kebakaran dan APAR:</strong> Ingat Segitiga Api: Oksigen, Panas, dan Bahan Bakar. Saat menggunakan APAR jenis kering (Dry Chemical Powder) multikategori (A, B, C), selalu gunakan teknik P.A.S.S. <em>Pull</em> alias tarik pin pengaman. <em>Aim</em> alias arahkan ke dasar sumber api. <em>Squeeze</em> alias tekan tuas handle penuh. Dan <em>Sweep</em> alias sapukan selang menyiram perlahan dari kiri ke kanan. Jauhkan tubuh pada jarak aman 3 sampai 5 meter dan selalu membelakangi arah angin.</p>
  <p><strong>Bagian keempat, Hierarki Pengendalian:</strong> Selalu prioritaskan Eliminasi bahaya secara wujud, lalu Substitusi, kemudian Rekayasa Teknik pelindung, lalu Kontrol Administratif ketat seperti Sistem Permit to Work (PTW) yang membatasi waktu paparan dan regulasi SOP, dan solusi pasrah terakhir mutlak yaitu APD.</p>
  <p><strong>Bagian kelima, Sikap Keselamatan & Hukum:</strong> Jauhi sindrom <em>Complacency</em> atau rasa terlalu ceroboh dan sangat percaya diri, terutama bagi Anda para dedengkot tambang yang sudah sangat berpengalaman belasan tahun.</p>
  <p>Berdasarkan Piramida The Heinrich, kematian massal fatalitas seringkali merupakan puncak ledakan ujung dari sebuah gunung es yang berawal dari akar 600 akumulasi insiden nyaris celaka (*Near Misses*) atau *unsafe act/condition* remeh temeh yang sengaja terus dibiarkan kru beroperasi. Selalu tegakkan Hak Mutlak *Stop Work Authority* (SWA) jika Anda melihat kondisi kritis membahayakan nyawa.</p>
  <p>Itulah intisari sakti pedoman materi kita. Teruslah berlatih, dan semoga Anda lulus tes masuk RIG dengan nilai mutlak luar biasa. Sampai jumpa di lapangan!</p>
</div>
`
  },
  {
    id: 'ch14', num: 14, title: '50 Soal Hardcore (Exam)', badge: 'badge-red',
    desc: 'Simulasi setara ujian akhir HSE tingkat mahir. Menguji parameter logis dan kedalaman insting Anda.',
    icon: '🎯',
    html: `

<div class="section-header">
  <div class="section-badge badge-red" style="background:var(--danger);color:white;">BAB 14 (Ujian Akhir)</div>
  <h2 class="section-title">50 Soal <span>Hardcore Simulasi RIG</span></h2>
  <p class="section-subtitle">Uji Mentality & Logika Level Lanjut (Advanced HSE)</p>
</div>

<div class="alert alert-danger" style="margin-bottom: 30px;">
  <div class="alert-icon">⚠️</div>
  <div class="alert-content">
    <div class="alert-title">Peringatan: Tingkat Kesulitan Tinggi</div>
    <div class="alert-text">Kumpulan soal ini didesain setara dengan ujian interview HSE tingkat lanjut (BOSIET/NEBOSH level). Berisi parameter angka spesifik, analisa kasus kritis, dan logika <em>Hierarchy of Control</em>. Jangan membuka jawaban sebelum Anda merenungkannya!</div>
  </div>
</div>

<div class="content-block">
  <h3><span class="icon">🎯</span> Daftar Ujian Simulasi</h3>
  <div class="case-studies-container" style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">1</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Pada kondisi tekanan atmosfer normal, konsentrasi gas Methane (CH4) di udara mencapai 8%. Berdasarkan karakteristik LEL (5%) dan UEL (15%), apa status bahaya di lokasi tersebut?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Campuran sangat mudah meledak ('Explosive Mixture') jika ada sumber panas atau percikan, karena berada di dalam rentang eksplosif (antara 5% - 15%).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> LEL (Lower Explosive Limit) Methane adalah 5%, dan UEL (Upper) adalah 15%. Karena 8% berada di rentang tersebut, udara sudah cukup kaya untuk terbakar namun belum 'terlalu kaya' untuk batal meledak. Ini adalah kondisi sangat kritis.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">2</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Seorang pekerja di area <em>cellar</em> RIG mencium bau telur busuk yang sangat menyengat, namun dua menit kemudian ia tidak bisa mencium apapun. Apa fenomena yang terjadi dan seberapa bahayanya?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Pekerja mengalami <em>Olfactory Fatigue</em> (kelumpuhan saraf indra penciuman) akibat pajanan H2S di atas 100 ppm. Ini adalah kondisi sangat mematikan yang bisa berujung pingsan mendadak dalam hitungan menit.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> H2S mematikan saraf penciuman dengan cepat di atas 100 ppm. Hilangnya bau bukan berarti gasnya hilang, melainkan konsentrasinya justru masuk ke tahap letal (mematikan).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">3</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam sistem Permit to Work (PTW), sebelum melakukan pekerjaan Pengelasan (Hot Work) di area kilang, jarak aman radius untuk memastikan tidak ada material mudah terbakar adalah...</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Standar minimal radius aman adalah 15 meter (atau 35 feet menurut beberapa standar internasional seperti API/OSHA), dengan penutupan (blanketing) seluruh saluran drainase memakai fire blanket.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Bunga api dari pengelasan (slag) dapat melayang jauh. Jarak 15 meter adalah standar pembersihan minimal, dibarengi dengan penyediaan Firewatch (pengawas api).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">4</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Jika indikator Portable Gas Detector berbunyi dan menunjukkan peringatan STEL (Short Term Exposure Limit) untuk gas H2S, berapa lama batas waktu maksimal seorang pekerja boleh berada di area tersebut?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Pekerja BISA tertahan maksimal 15 menit, dengan syarat tidak lebih dari 4 kali dalam sehari dan ada jeda 1 jam antar pajanan.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Di banyak standar (seperti ACGIH lama, atau standar perusahaan tertentu), STEL H2S ditetapkan di angka 15 ppm untuk durasi 15 menit. TWA (harian) adalah 10 ppm untuk 8 jam.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">5</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Ketika alarm rig berbunyi panjang secara terus-menerus (Abandon Rig/Muster sign), ke arah mana kru harus berjalan menuju Muster Point jika melihat arah tiupan angin (Windsock) menunjuk ke Utara?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Kru harus bergerak ke arah Selatan (berlawanan dengan arah angin/<em>Upwind</em>) atau bergerak menyamping (<em>Crosswind</em>) jika jalur Selatan tertutup. Jangan searah angin (<em>Downwind</em>).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Gas beracun dan awan api akan terbawa oleh tiupan angin. Berlindung ke arah <em>Upwind</em> memastikan kru mendapatkan pasokan udara bersih.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">6</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Terdapat tumpahan cairan Hidrokarbon yang terbakar (Kelas B) di area trafo listrik bertegangan tinggi yang belum dimatikan (Kelas C). Jenis APAR apa yang paling TEPAT dan AMAN digunakan?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">APAR tipe CO2 (Karbon Dioksida) atau Dry Chemical Powder tipe ABC. DILARANG KERAS menggunakan jenis Air atau Busa (Foam) karena air menghantarkan listrik (risiko tersengat listrik/electrocution).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Trafo aktif berarti ini adalah api Kelas C (Listrik). Syarat wajibnya, media pemadam dilarang berupa cairan berair.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">7</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Apa perbedaan krusial antara LTI (Lost Time Incident) dan RWC (Restricted Work Case) dalam pelaporan kejadian?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">LTI berarti korban kehilangan jam kerja (tidak bisa bekerja keesokan harinya). RWC berarti korban masih bisa datang bekerja keesokan harinya, namun tugasnya dipindah ke pekerjaan lebih ringan.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Metrics ini sangat dinilai dalam tender kontrak MIGAS. LTI menghancurkan skor keselamatan, sementara RWC (contoh: kuli rig sementara jadi admin) masih di bawah LTI.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">8</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Konsep <em>Fire Tetrahedron</em> menambahkan elemen keempat dari <em>Fire Triangle</em> klasik. Apa elemen tersebut dan sebutkan metode pemadaman spesifik untuk elemen keempat tersebut!</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Elemen ke-4 adalah Reaksi Rantai Kimia (Chemical Chain Reaction). Metode pemadamannya disebut <em>Inhibiting</em> (menghambat reaksi), contohnya menggunakan APAR jenis Halon (meski sekarang dibatasi) atau Dry Chemical Powder.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Serbuk kimia memutus jalinan radikal bebas di dalam nyala api, sehingga api langsung putus seketika tanpa perlu menghilangkan oksigen atau menurunkan panas.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">9</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam operasi <em>Confined Space Entry</em>, tugas seorang <em>Hole Watch</em> (Attendant) saat melihat rekan kerjanya pingsan di dalam tangki adalah...</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Membunyikan alarm/radio panggilan darurat (Emergency Response Team) dan memantau korban dari luar. <strong>DILARANG MASUK</strong> untuk menolong ke dalam tanpa APBA/SCBA dan tim evakuasi penyelamatan profesional.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Lebih dari 60% kematian di confined space adalah para penolong/attendant yang nekat masuk tanpa perlengkapan karena refleks ingin menolong, dan ikut tewas menghirup gas beracun.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">10</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Pada <em>Hierarchy of Control</em>, seorang manajer rig memutuskan memasang sistem ventilasi mekanik otomatis <em>blower exhaust</em> untuk membuang asap las. Ini masuk dalam kategori kontrol apa?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Rekayasa Teknik (Engineering Control).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Sistem ini secara mekanis mengubah mesin/lingkungan kerja agar aman, berada satu tingkat di bawah Eliminasi/Substitusi, dan jauh lebih unggul dari sekadar Kontrol Administratif atau APD.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">11</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Kapan waktu yang paling tepat untuk melakukan <em>Bump Test</em> pada Portable Multi-Gas Detector yang Anda pegang?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Setiap hari, tepat SEBELUM alat mulai digunakan pada shift tersebut.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Bump Test adalah pengujian singkat (menyemprotkan gas kalibrasi ke sensor) untuk memverifikasi alarm dan sensor bereaksi merespon gas, bukan kalibrasi akurasi menyeluruh.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">12</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sistem LOTO (Lock Out Tag Out) digunakan untuk mematikan energi berbahaya. Siapa satu-satunya orang yang berhak mencabut gembok LOTO dari panel listrik?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Hanya orang/pekerja yang memasang gembok tersebut (Authorized Person yang tertulis namanya di Tag/Label).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Ini adalah aturan keselamatan nyawa nomor satu agar tidak ada miskomunikasi dan alat dinyalakan saat orang yang mengunci mesin tersebut masih bekerja masuk di dalam mesin.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">13</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Tali <em>Tagline</em> sering disyaratkan saat proses Lifting (pengangkatan) dengan Crane di area RIG. Apa fungsi spesifik benda tersebut?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Fungsinya untuk mengontrol ayunan (swing) beban gantung dari jarak kejauhan yang aman. Dilarang menyentuh beban langsung dengan tangan (Hands-Free lifting).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Tagline mencegah pekerja terjebak/terjepit di antara muatan dan fasilitas RIG yang stasioner.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">14</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Seorang <em>Firewatch</em> (Pengawas Api) di area MIGAS memiliki kewajiban untuk tetap berjaga di titik kerja setelah sebuah pekerjaan Pengelasan (Hot Work) telah selesai seratus persen. Mengapa hal ini diwajibkan, dan berapa durasinya?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Harus tetap berjaga selama minimal 30 menit (standar umum). Tujuannya untuk memastikan tidak ada percikan api terselubung (smoldering fire) tertinggal yang tiba-tiba membesar kembali.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Percikan / <em>slag</em> las bisa masuk ke sela sempit dan memendam panas yang tidak terlihat langsung oleh pandangan awal.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">15</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Pada label warna Scaffolding (Perancah), apa arti label Tag Hijau (Green Tag) dan Kuning (Yellow Tag)?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Hijau berarti perancah siap/aman 100% untuk digunakan umum. Kuning berarti perancah sedang dimodifikasi atau memiliki bahaya tersembunyi, sehingga HANYA boleh dinaiki dengan instruksi khusus (misal wajib 100% full body harness tie-off).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Merah berarti dilarang keras dinaiki (kecuali Scaffolder). Pewarnaan ini diatur secara universal oleh badan keselamatan konstruksi.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">16</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Helm safety (Hard Hat) seorang kru terjatuh dari lantai derrick atau crane (ketinggian sekitar 30 meter), tetapi secara fisik luar terlihat tidak retak atau pecah sama sekali. Bolehkah helm tersebut langsung digunakan kembali?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">TIDAK BOLEH. Helm safety yang sudah mengalami benturan keras harus segera di-afkir (dihancurkan/dibuang) karena suspensi bagian dalam atau struktur mikroskopik plastiknya telah melemah menahan impak, dan tidak sanggup menahan kecelakaan selanjutnya.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Hard hat diciptakan untuk menerima kerusakan (berubah bentuk memecah energi). Jika jatuh ekstrem, energinya sudah melemahkan cangkang meski mata secara tak kasat merasakannya.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">17</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Jika seorang kru terpapar paparan gas H2S konsentrasi ekstrem (misalnya 700 - 1000 ppm), berapakah lama efek mematikan terjadi menurut ilmu medis toksikologi?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;"><em>Knockdown</em> seketika; orang tersebut akan pingsan kolaps hanya dalam hitungan 1 atau 2 kali tarikan napas pendek, dan kematian klinis menyusul dalam hitungan menit.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Tidak akan ada kesempatan batuk, mual, atau meminta tolong. Sistem saraf otak (pernapasan) seketika dimatikan. H2S adalah *Silent Killer*.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">18</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Di dalam operasi Lifting atau Rigging, faktor *Dynamic Load* sangat diperhitungkan di atas lepas pantai. Apa yang dimaksud dengan *Dynamic Load*?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Dynamic Load merujuk pergeseran bobot berlebih sekunder karena benda bergerak, dihentikan tiba-tiba (jerking), atau gerakan kapal tersapu ombak kencang (heave). Beban 20 Ton statis, namun bisa membebani crane hingga 25+ Ton saat terjadi daya hentak.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Cuaca lautan berdampak hebat. Mengangkat beban laut tak pernah murni seberat hitungan kilo statis di atas daratan aspal.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">19</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Apa singkatan dari SCBA dan secara umum apa perbedaan tipe <em>Open-Circuit</em> dengan <em>Closed-Circuit</em>?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Self-Contained Breathing Apparatus. *Open*: udara yang dihembuskan paru-paru langsung dibuang lepas ke udara bebas (sistem durasi pendek 30-45 mnt). *Closed*: udara karbon dioksida nafas diputar, di-sruput, ditambah oksigen re-breathe kembali ke paru-paru (durasi 4 jam).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Sistem closed circuit biasanya dipakai regu darurat di terowongan tambang tambang (*Mine Rescue*).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">20</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam parameter klasifikasi APAR (Alat Pemadam Api Ringan), tipe Kelas D dispesifikasikan untuk jenis benda terbakar apa dan medianya berupa apa?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Kelas D adalah untuk Kebakaran Logam Yang Bisa Terbakar (Combustible Metals) seperti Magnesium, Titanium, Sodium. Medianya adalah *Special Dry Powder* khusus mematikan reaksi rantai kimia logam.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Air, CO2, atau cairan pemadam standar justru bisa bereaksi ledakan dahsyat jika disemprotkan ke titik api metal magnesium / sodium!</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">21</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sebuah aktivitas pekerjaan pembongkaran pipa berkarat dinilai berbahaya karena lokasinya berada tepat di bawah tempat pengelasan struktur menara crane. Bahaya jatuhan apakah yang paling terkait dengan hal ini?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Bahaya *Dropped Object* tipe Dinamis (atau Sparks/Slag sekunder DROPS).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Situasi ini biasanya memicu pelarangan pekerjaan tumpang tindih secara vertikal (Simultaneous Operations / SIMOPS vertical clash) di lapangan.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">22</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Apa yang membedakan klasifikasi 'Near Miss' (Nyaris Celaka) dari sekadar 'Unsafe Condition' (Kondisi Tidak Aman)?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Near Miss merupakan kejadian insiden (peristiwa pergerakan/momentum) yang nyata-nyata sudah terjadi, tapi secuil kebetulan yang menyebabkan tidak adanya cedera atau kerugian jiwa. Unsafe Condition adalah benda atau situasi yang pasif diam, menunggu dipicu.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Kunci perbedaannya: Near Miss adalah KEJADIAN (contoh palu jatuh meleset 1 cm dari bahu). Unsafe Condition adalah STATE / Kondisi (contoh palu diletakkan berantakan pinggir atap).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">23</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Standar Oksigen yang layak dan minimal aman dihirup konstan bagi manusia (khusus sebelum memasuki ruang <em>Confined Space</em> menggunakan gas detector) adalah sebesar?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Antara 19.5% (Batas minimum oksigen bernapas di bawah bahaya asfiksia) sampai maksimal 23.5% (Batas Atas sebelum rawan letusan api atau Oxygen Defisiensi Oksidatif).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Rata-rata atmosfer bumi sehat mencatat 20.9% oksigen di level normal pesisir.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">24</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sistem pelindung mata <em>Safety Google</em> yang sering ditemui memiliki <em>Anti-fog coating</em>. Tapi dalam keadaan debu ekstrim serbuk gerinda, mengapa <em>Face Shield</em> bening wajah tetap diwajibkan dipakai membungkus Goggles mata tersebut?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Karena debu partikel berkecepatan tinggi atau serpihat kawat pemutar gurinda bisa saja memantul memukul hidung, dahi dan rongga wajah di sekitar mata (yang tak dilindungi kaca mata mungil). Safety Goggle HANYA memproteksi biji kornea mata saja.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Face-shield (perisai wajah polycarbonate) adalah pertahanan Utama lapis 1 (primary defense for high-speed impact). Bukan hanya sekedar melindungi dari kilauan percikan.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">25</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam konsep <em>Heinrich Pyramid</em> (1-29-300), seberapa sering secara statistik sebuah <em>Fatality</em> (Kematian/Insiden Berat) diprediksi akan timbul?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">1 fatalitas besar biasanya muncul dari setiap 300 perilaku menyimpang (*unsafe act*) atau 300 kejadian bahaya nyaris celaka tanpa cedera (*no-loss incident*) yang terbiarkan lepas kontrol.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Model ini membuktikan perlunya kita memberantas yang 300 (perilaku salah sehari-hari sepele), sebelum ia mengerucut menanjak memakan 1 korban meninggal dunia permanen.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">26</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Lampu penerangan di area operasional RIG sering dilengkapi dengan kurungan kawat pelindung (Wire Guard), tambahan Safety Wire Glass, serta tersertifikasi Explosion Proof. Mengapa sertifikasi Explosion Proof begitu esensial?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Supaya seandainya terjadi korsleting atau loncatan api (spark) dari bohlam di dalam, percikan tersebut terkurung kokoh tidak menembus memicu uap bensin atau gas meledak di luar kaca.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Lampu Explosion Proof tidak berarti tahan jika dilemparkan bahan peledak dari luar, melainkan menahan *internal explosion* agar tidak merembet ke lingkungan luar yang kaya material mudah terbakar.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">27</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sebuah kontainer bahan kimia bertanda gambar piktogram 'Tengkorak Berlian Hitam (Skull and Crossbones)'. Dalam Globally Harmonized System (GHS), logo ini menunjukkan...</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Toksisitas Akut (Acute Toxicity) tingkat parah yang berakibat fatal meracuni nyawa hanya dalam dosis paparan yang sangat rendah.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Berbeda dengan tanda Plus atau tanda Seru (!) yang sekadar menunjukkan Iritan. Tengkorak mematikan secara cepat jika tertelan atau terhirup.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">28</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Saat kru memakai Ear Muff yang terpasang di helm untuk bekerja di area bising 110 desibel, apakah NRR (Noise Reduction Rating) benda tersebut sebesar 30 dB murni mengurangi jadi 80 dB secara linier?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">TIDAK. Dalam perhitungan nyata di lapangan (OHSA derating), rating 30 dB milik earmuff seringkali dibagi dua efektivitasnya (tinggal 15 dB) akibat pemakaian yang tidak sempurna atau ganjalan kacamata (Safety Glass/Temple break).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Pelindung telinga (HPD) ganda (Ear Plug + Ear Muff) sering diwajibkan bila sumber suara rig mendengung di atas 105 dBA.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">29</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Jika Anda tersetrum dan tubuh kaku kejang menempel pada sebuah instalasi listrik bertegangan tinggi, rekan Anda BERAKAR-AKAL mencoba menendang lepas tubuh Anda menggunakan sepatu boot karetnya. Salahkah itu?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Pasti SALAH dan MEMATIKAN. Menendang korban setrum bertegangan jutaan elektron akan mengalir melewati area kecil dari sepatunya menuju sekujur badannya pula. Langkah pertama selalu: PUTUSKAN Aliran Power Utama (MCB) seketika!</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Menolong korban *Electrocution* secara fisik langsung merupakan tiket nomor antrean tewas kedua. Selalu gunakan tongkat isolator tegap (*Rescue Hook*) setelah power terputus.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">30</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Bagaimana cara membaca batas beban aman dari sebuah *Webbing Sling* (Sabuk Selempang Pengangkat sintetis) hanya dari melihat warna sabuknya?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Standar internasional (EN 1492-1) menggunakan kode warna mutlak. Ungu = 1 Ton, Hijau = 2 Ton, Kuning = 3 Ton, Abu = 4 Ton, Merah = 5 Ton, Coklat = 6 Ton, Biru = 8 Ton, Oranye = di atas 10 Ton.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Kode warna mencegah kelalaian miskalkulasi bagi buruh rigger yang kurang jeli melihat tulisan buram di label tag selempang tali.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">31</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Seorang Operator Derek (Crane Operator) dilarang keras menarik beban (Load) yang tidak berada tepat di bawah titik lurus ujung boom cranenya (Side Pulling/Side Loading). Mengapa demikian?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Side Loading mengakibatkan gaya miring lateral (melengkung) pada struktur menara (boom/jib) yang tidak dirancang menahan beban tekuk menyamping, menyebabkan crane membengkok dan roboh/tumbang.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Crane dirancang untuk angkat VERTIKAL (tegak lurus melawan gravitasi bumi). Tarikan serong menghancurkan mekanika mesin.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">32</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam Permit to Work Excavation (Izin Kerja Penggalian), batas kedalaman parit galian minimum yang mensyaratkan wajib dibuatnya desain teknik dinding penahan tanah kelongsoran (Shoring/Trench box) adalah sejauh...</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Penggalian di lapangan melebihi kedalaman 1.2 hingga 1.5 meter (kira-kira 4-5 kaki setinggi dada/pundak manusia dewasa).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Longsoran tanah kubik seberat ratusan kilo akan langsung meremukkan tulang rusuk dan paru-paru pekerja dalam waktu kurang dari diam sedetik.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">33</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Berapa banyak Oksigen yang ditarik oleh konsumsi api besar (Pembakaran) di tempat tertutup? Bisakah ia memicu kondisi Hypoxia pada pekerja?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Api dengan rakus mengejar dan melahap Oksigen udara turun dari 21% hingga tersisa belasan persen saja. Kondisi ini PASTI memicu pusing asfiksia, disorientasi letih, disusul kolaps permanen (Hypoxia).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Inilah mengapa dalam musibah kebakaran hotel/gudang, korban meninggal akibat kehabisan napas/menghirup karbon monoksida jauh lebih banyak sebelum api fisik menyentuh kulit mereka.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">34</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sebuah insiden *Blowout* (Semburan Liar) dari dasar sumur Rig bor terjadi karena kegagalan parameter apa dalam cairan lumpur (Drilling Fluid / Mud)?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Kegagalan lumpur (Hydrostatic Pressure lumpur anjlok lebih lemah/terlalu ringan) dibanding menahan kuatnya Tekanan Pori Formasi batu gas bumi (Formation Pore Pressure) yang menyembur marah.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Lumpur (Mud) bukan pelumas semata, melainkan penyumbat beban berton-ton layaknya tutup botol raksasa di sumur.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">35</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Manakah yang benar tentang sistem pencegah semburan api BOP (Blowout Preventer)? Kapan alat ini harus dipotong memangkas memotong pipa?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Blind/Shear Ram (pisau baja) pada BOP ditekan hidrolik dari ujung, khusus difungsikan darurat untuk memotong putus pipa keras bor secara instan jika Blind Ram tumpul gagal menutup rongga/annulus.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Ini adalah gerbang pencegah ledakan utama jika sistem lumpur kalah. Pisau ini memotong besi pipa demi menutup ruang tembusan.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">36</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Apa yang memicu fenomena sumur <em>Swabbing Effect</em> saat cabut pipa bor (Tripping Out)?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Ujung pahat pipa besar yang dicabut terlalu mendadak kencang akan menimbulkan efek hisapan layaknya jarum suntik vaksin, menyedot paksa fluida gas naik ikut tersedot memicu *Kick*.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Kecepatan *Tripping Out* (mencabut besi) di area formasi sumur diatur halus agar lumpur di bawah pipa bisa bergeser mengisi rongga secara natural.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">37</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam operasional RIG, zona lampu larangan merokok (No Smoking Policy) dipertegas melalui instrumen yang bernama Area Klasifikasi Ledakan (Hazardous Area Classification). Zone berapakah yang mengharamkan sumber api mutlak selama beroperasi?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Zona 0 (Lokasi di mana atmosfer gas racun eksplosif terjadi terus-menerus/jangka panjang seperti di DALAM tangki uap) dan Zona 1 (Lokasi di mana gas seringkali timbul under-normal operating layaknya <em>shale shaker</em> atau sumur terbuka).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Ponsel biasa, sepatu berpaku, dan perkakas palu besi adalah pantangan besar (harus pakai alat Copper/Beryllium Non-Sparking Tools) di zona keras.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">38</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Mekanisme pengaman *Secondary Retention* sering digembar-gemborkan dalam modul DROP prevention di RIG lepas pantai atas ketinggian. Apakah benda tersebut?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Sebuah kawat sling pengaman / pin R-clip baja kecil yang menjerat lampu/loud-speaker/mur pada dinding agar alat tersebut, meskipun kendor lepas angin, akan tetap tersangkut melayang-layang ditahan kawat kedua.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Kawat jaring (*net*) atau untaian ranting pencekik ini menjamin kelengahan korosi awal tidak merobohkan lampu menimpa dahi orang di lantai dasar.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">39</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Apa singkatan dari SOP dan JSA? Menjelang *tool box meeting* pagi, dokumen mana duluan yang mendikte langkah kerja lapangan?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">SOP (Standard Operating Procedure) & JSA (Job Safety Analysis). JSA dibuat spesifik runut harian menjabarkan bahaya per langkah urutan dari pekerjaan SOP, ditandatangani kru *HARI ITU* langsung di lokasi aspal kerja.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> SOP itu kitab abadi dari kantor besar. JSA itu adalah terapan observasi lapangan harian. Kinerja SOP tidak sah dilaksanakan jika JSA ditolak Supervisor.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">40</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sebutan untuk suatu pekerjaan dengan ruang sempit (Confined Space) memiliki syarat krusial 'Bukan Tempat Kerja Terus Menerus'. Artinya?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Konstruksinya (manhole minim) tidak pernah didesain arsitektur untuk manusia menempati dan berkantor masuk-keluar santai di dalamnya (contoh: Silo semen, dalam reaktor boiler). Pintu keluar-masuknya saja sudah mempersulit nyawa jika lari darurat.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Ruangan WC/Toilet betapa sempitnya bukan disebut Confined Space.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">41</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sebuah insiden <em>First Aid Case</em> (FAC) dicatat minggu lalu. Bedanya dengan Medical Treatment Case (MTC) tingkat menengah adalah?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">FAC dituntaskan sebatas P3K (pasang plester, cuci mata debu, minum oralit, kompres es krim luar) dan bisa seketika balik bertugas sore itu. MTC sebaliknya mengharuskan jarum bius dokter klinik profesional (jahitan sticth 3 kali, potong fraktur/gips, suntik resep antibiotik keras).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Dokter medik spesialis mengubah FAC ringan menjadi skor MTC, walau korban tidak diliburkan di hari kerja itu juga.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">42</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Berapa lama periode validitas umum <em>Hot Work Permit</em> sebelum ia dikategorikan hangus dan butuh TTD (Tanda Tangan) Supervisor ulang mendadak?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Biasanya sah eksklusif untuk 1 Shift kerja lapangan penuh saja (maksimal 12 jam) atau tergantung kebijakan lokal jika pimpinan Supervisor beda orang.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Keadaan gas racun bumi berubah di shift maghrib vs pagi. Harus dites kalibrasi gas atmosfer detektor kembali dari titik Nol absolut.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">43</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Jika seorang kru operator mendapati rekannya pingsan diam saat melakukan pengelasan besi di sudut sempit bawah tangga RIG, pertolongan pernafasan resusitasi bantuan paling logis adalah?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Jauhkan korban asfiksia ke ruang udara melimpah sirkulasi dengan menyeret bajunya, periksa denyut Nadi Karotis leher. Hubungi Medic RIG dan bersihkan asap gas jalan pernapasannya perlahan sambil mematikan kran selang Las Oksigen Asetilin pemicu letupan di sudut ruangan seketika.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Fokus menjauhkan dia dari zat asfiksia dan bahaya gas berantai menduduki prioritas utama pra-resusitasi napas / CPR manual darah.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">44</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Pernah dengar filosofi ALARP? As Low As Reasonably Practicable. Inti roh ALARP dalam Mitigasi Resiko K3 Migas mewajibkan kita apa?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Menekan membuang tingkat probabilitas bahaya sekeras-kerasnya SEMAMPU teknis terjangkau dan logis realistis menimbang kerugian biaya operasional (Cost/Benefit), sampai risiko insiden dinilai sebatas 'zona residual pasrah' paling dapat dimaklumi.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Oksigen akan selalu ada. Baja akan selalu keropos usia. Gravitasi menjatuhkan pulpen akan selalu membayang. Resiko 'NOL/ZERO' tidak relevan, melainkan kita mengurung resiko tsb ke lembah kemustahilan termurah rasional ALARP.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">45</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Di atas dek RIG pengeboran terdapat <em>V-Door</em> dan <em>Rotary Table</em>. Mengapa lantai keras ini selalu dilumuri karpet khusus karet hitam keras kotak yang berat, alias <em>Anti-Slip / Rig Matting</em>?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Serpihan lumpur Drilling Mud sangat licin bak tumpahan oli murni jika dicampur air / hujan lautan asin. Karpet berat khusus anti-slip dengan lekukan griper mutlak digunakan merekat tapak Sepatu Safety kasat kasar pekerja *Roughneck* dari insiden patah tulang tergelincir maut merosot.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Terpeleset santai di kantor mungkin sebatas pegal pinggang. Terpeleset santai memegang tang besi 50 Kg saat bor berputar kencang, nyawa risikonya hancur bersimbah derrick.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">46</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Karakteristik api Gas Metana / Hidrokarbon dalam ledakan <em>Boilover</em>. Air memicu 'letupan uap megar massal 1:1700'. Jelaskan ringkas reaksi fisika di baliknya mengapa api tersebut justru mengamuk ketika disiram air?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Minyak ringan berada mengapung di atas batas lapisan air (densitas minyak kecil). Panas pembakaran menyebar didih cairan air di bawah hingga melesat meletup seketika uap (mengembang 1.700x volume uap mendadak) melempar memuntahkan gelombang lava api minyak panas tersebut.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Air bukan memadamkan, air mendidih meledak di bawa lantai memicu badai minyak pijar api terlontar dahsyat raksasa menyapu mobil pemadamnya sendiri.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">47</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Kacamata pengelasan (*Welding Goggle/Shields*) memiliki spesifikasi naungan (Shade Lens Number). Apakah nomor Shade 5 dan 11 itu maknanya sama?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">TIDAK BEDA JAUH. Shade 5 adalah untuk proses pemotongan oksigen asitelin memercik pijar ringan. Shade 10-12 adalah wajib gelap pekat mematikan silau biru radiasi busur setrum listrik Las Listrik (ARC/SMAW) berampere kuat.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Salah pilih lensa kaca = Mata Katarak Terbakar Retina seumur usia buta perlahan di kegelapan korneal Arc-Eye (Welder's flash sand).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">48</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Bagaimana cara membaca pelabelan HMIS / NFPA berlian 4 Warna kotak? Bagian mana merah, biru, kuning, putih secara spesifik merepresentasikan zat material?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Merah muda = Bahaya Mudah Terbakar Api (Flammability), Biru laut = Resiko Kesehatan Racun Tubuh (Health), Kuning terang = Ketidakstabilan Ledakan Reaktif (Reactivity/Instability), dan Putih kapur cerah = Info Spesial Khusus pengecualian alat perlakuan khusus air (Specific Hazard).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Level bernomor mutlak 0-4. Nomot 4 pada Merah bermakna 'Uap gas sangat rawan terbakar spontan di tekanan hawa dingin santai ruangan' fatal cepat meledak.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">49</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Suau kondisi darurat tumpahan B3 berlebih menutupi lantai. Menggunakan media serbuk *Sawdust* (Serbuk gergaji kayu lapuk rumahan) SANGAT dilarang menutrisi menyerap kimia tumpah B3 ini. Mengapa melanggar standar modern K3 dunia?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Sawdust terbuat dari serat karbon kayu kering rumahan, menyerap kimia justru membuatnya menjelma menjadi sebongkah mesiu bom bahan organik yang siap berkolaborasi api merambat kilat dengan oksigen sekitar ruangan! Bisa mencetuskan kebakaran spontan Spontaneous Combustion.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Solusi baku serap modern wajib pasir (sand), tanah liat lembam silikosis, cat litter inorganik, abu soda khusus (Absorbent Pads industri sintetik khusus Oil/Chemical).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">50</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Terakhir, Puncak piramida The Heinrich adalah 1 korban meninggal dunia. Jika merombak mengubah piramida ini berbasis sistem kesadaran modern Budaya Perilaku 'BBS - Behavior Based Safety' kunci akar masalah insiden maut itu sebetulnya tersembunyi bersembunyi dimana?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Kunci akar sesungguhnya tidak terletak pada alat rusak (unsafe condition), MELAINKAN di tatanan otak Sikap meremehkan Manusia pekerja aspal murni (*Human error & Unsafe Behavior*) akibat minimnya budaya supervisi proaktif peduli menegur saling menyadarkan mengintimidasi keras satu sesama nyawa.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Alat canggih mati jika dirawat acuh. Safety mutlak bergantung kepedulian mental manusianya masing-masing!</p>
        </div>
      </div>
    </details>

  </div>
</div>

<div class="alert alert-success" style="margin-top: 40px;">
  <div class="alert-icon">🏆</div>
  <div class="alert-content">
    <div class="alert-title">Luar Biasa!</div>
    <div class="alert-text">Jika Anda mampu menjawab sebagian besar simulasi hardcore di atas dengan benar, Anda 100% siap diturunkan ke lapangan RIG manapun di seluruh dunia!</div>
  </div>
</div>

`
  },
  {
    id: 'ch15', num: 15, title: '149 Soal Drill K3', badge: 'badge-blue',
    desc: 'Latih insting HSE Anda dengan 149 soal kilat interaktif asli dari Basic Safety Training Pertamina.',
    icon: '⚡',
    html: `

<div class="section-header">
  <div class="section-badge badge-blue" style="background:#8b5cf6;color:white;">BAB 15 (Latihan Marathon)</div>
  <h2 class="section-title">Drill 149 Soal <span>Basic HSE Training</span></h2>
  <p class="section-subtitle">Simulasi Cepat Interaktif & Penjelasan Otomatis</p>
</div>

<div class="alert alert-info" style="margin-bottom: 30px; background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6;">
  <div class="alert-icon">⚡</div>
  <div class="alert-content">
    <div class="alert-title">Sistem Penilaian Cepat</div>
    <div class="alert-text">Total 149 Soal Asli. Klik pada opsi A/B/C/D pilihan Anda di setiap soal. Skrip akan memeriksa kebenaran jawaban Anda secara instan dan menampilkan alasannya di tempat. <i>Speed learning</i> paling efektif!</div>
  </div>
</div>

<div class="quiz-container" style="display:flex; flex-direction:column; gap:20px;">

    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q1</span>
        SOAL BASIC HSE TRAINING (PT PERTAMINA EP) Panduan Umum HSE PT Pertamina EP dalam usahannya di bidang Kegiatan Usaha Hulu Minyak dan Gas Bumi memberikan prioritas utama terhadap aspek HSE dengan cara:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengintegrasikan aspek HSE dalam setiap kegiatan', 'Mengintegrasikan aspek HSE dalam setiap kegiatan operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Mendapatkan keuntungan melalui produksi Migas sebesar-besarnya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengintegrasikan aspek HSE dalam setiap kegiatan', 'Mengintegrasikan aspek HSE dalam setiap kegiatan operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengupayakan strategi pencapaian cadangan Migas sebesar-besarnya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengintegrasikan aspek HSE dalam setiap kegiatan', 'Mengintegrasikan aspek HSE dalam setiap kegiatan operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menerapkan teknologi terbaru dalam kegiatan operasi produksi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Mengintegrasikan aspek HSE dalam setiap kegiatan', 'Mengintegrasikan aspek HSE dalam setiap kegiatan operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Mengintegrasikan aspek HSE dalam setiap kegiatan operasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q2</span>
        Kewajiban Pengurus diantaranya:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menunjukkan dan menjelaskan Kondisi dan bahaya yang timbul di tempat kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Menjelaskan alat pengaman dan alat perlindungan yang diharuskan dalam tempat kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> APD bagi tenaga kerja dan cara dan sikap yang aman dalam melaksanakan pekerjaan.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban a, b, c benar', 'Jawaban a, b, c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jawaban a, b, c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q3</span>
        Jarak aman dari sumur pemboran dengan flare stack paling dekat:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter - Sesuai jarak aman standar flare', '90 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 70 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter - Sesuai jarak aman standar flare', '90 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 80 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '90 meter - Sesuai jarak aman standar flare', '90 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 90 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter - Sesuai jarak aman standar flare', '90 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 100 meter (KUPAK)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q4</span>
        PEKA (Pengamatan Keselamatan Kerja) 4. Hal berikut ini yang termasuk dalam unsafe condition :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pengaman yang tidak memadai - Ini kondisi lingkungan', 'Pengaman yang tidak memadai')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pengaman yang tidak memadai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengaman yang tidak memadai - Ini kondisi lingkungan', 'Pengaman yang tidak memadai')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengoperasikan pada kecepatan yang tidak sesuai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengaman yang tidak memadai - Ini kondisi lingkungan', 'Pengaman yang tidak memadai')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengoperasikan alat tanpa otorisasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengaman yang tidak memadai - Ini kondisi lingkungan', 'Pengaman yang tidak memadai')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pengangkatan beban yang tidak sesuai
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q5</span>
        Siapakah yang berhak untuk melakukan tindak lanjut laporan PEKA :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'PIC atau bagian yang ditunjuk', 'Fungsi/divisi/bagian yang telah ditunjuk oleh pengelola PEKA (PIC)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Fungsi HSE
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'PIC atau bagian yang ditunjuk', 'Fungsi/divisi/bagian yang telah ditunjuk oleh pengelola PEKA (PIC)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pengelola PEKA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'PIC atau bagian yang ditunjuk', 'Fungsi/divisi/bagian yang telah ditunjuk oleh pengelola PEKA (PIC)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Komite HSE
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'PIC atau bagian yang ditunjuk', 'Fungsi/divisi/bagian yang telah ditunjuk oleh pengelola PEKA (PIC)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Fungsi/divisi/bagian yang telah ditunjuk oleh pengelola PEKA (PIC)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q6</span>
        The New PEKA online dilengkapi beberapa fitur yang dapat memberikan informasi PEKA antara lain :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Online dashboard dan HSE Golden rules', 'Online dashboard dan HSE Golden rules')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> List PEKA dan SMHSE
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Online dashboard dan HSE Golden rules', 'Online dashboard dan HSE Golden rules')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Online dashboard dan HSE Golden rules
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Online dashboard dan HSE Golden rules', 'Online dashboard dan HSE Golden rules')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Notifikasi melalui email kepada PIC
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Online dashboard dan HSE Golden rules', 'Online dashboard dan HSE Golden rules')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Online dashboard dan SMHSE
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q7</span>
        JSA (Job Safety Analysis) 7. Sebutkan kepanjangan dari JSA
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Job Safety Analysis', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Job Safety Analysis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Job Safety Analysis', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Job Security Action
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Job Safety Analysis', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Job Safety and Security Action
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Job Safety Analysis', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Job Safety Action
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q8</span>
        Berikut adalah manfaat yang dapat diambil dari JSA, kecuali
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Agar jelas memberi hukuman - JSA bukan untuk menghukum', 'Agar jelas kepada siapa nantinya diberikan hukuman bila terjadi kecelakaan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Mengkaji prosedur kerja setelah terjadinya suatu kecelakaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Agar jelas memberi hukuman - JSA bukan untuk menghukum', 'Agar jelas kepada siapa nantinya diberikan hukuman bila terjadi kecelakaan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memberikan ‘pre-job instruction on irregular jobs’
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Agar jelas memberi hukuman - JSA bukan untuk menghukum', 'Agar jelas kepada siapa nantinya diberikan hukuman bila terjadi kecelakaan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menyediakan petunjuk kerja yang konsisten untuk keperluan orientasi, training dan retraining pekerja baru, pindahan dan pekerja lama
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Agar jelas memberi hukuman - JSA bukan untuk menghukum', 'Agar jelas kepada siapa nantinya diberikan hukuman bila terjadi kecelakaan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Agar jelas kepada siapa nantinya diberikan hukuman bila terjadi kecelakaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q9</span>
        Berikut merupakan hierarki (dari yang tertinggi) pengendalian resiko bahaya berdasar OHSAS 18001 : 2008, yaitu
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, administrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Adminstrasi, eliminasi, subtitusi, rekayasa engineering, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, administrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> APD, rekayasa engineering, subtitusi, adminstrasi, eliminasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Eliminasi, subtitusi, rekayasa engineering, administrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, administrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Rekayasa engineering, admnistrasi, APD, eliminasi, subtitusi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q10</span>
        SIKA (Surat Izin Kerja Aman) 10. Pengawas pekerjaan dari dalam atau luar fungsi di lingkungan PT. Pertamina EP, di dalam formulir SIKA disebut ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemegang ijin - Orang lapangan/kontraktor yang mengerjakan', 'Pemegang ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Peminta ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemegang ijin - Orang lapangan/kontraktor yang mengerjakan', 'Pemegang ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pemberi ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pemegang ijin - Orang lapangan/kontraktor yang mengerjakan', 'Pemegang ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pemegang ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemegang ijin - Orang lapangan/kontraktor yang mengerjakan', 'Pemegang ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Atasan pemegang ijin
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q11</span>
        Pimpinan fungsi yang bertanggung jawab atas aset yang menjadi obyek pekerjaan dan berpotensi untuk terjadinya insiden terhadap aset, di dalam formulir SIKA disebut ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemberi ijin - Pihak Pertamina yang punya aset', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Peminta ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pemberi ijin - Pihak Pertamina yang punya aset', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pemberi ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemberi ijin - Pihak Pertamina yang punya aset', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pemegang ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemberi ijin - Pihak Pertamina yang punya aset', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Atasan pemegang ijin
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q12</span>
        Di bawah ini adalah ciri-ciri Sika Umum, kecuali
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jangka waktu bisa sampai 2 minggu - SIKA biasanya maksimal 1 shift atau beberapa hari sesuai PTW', 'Jangka waktu bisa sampai 2 minggu')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Jumlah pekerjaan bisa lebih dari 2
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jangka waktu bisa sampai 2 minggu - SIKA biasanya maksimal 1 shift atau beberapa hari sesuai PTW', 'Jangka waktu bisa sampai 2 minggu')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Jangka waktu bisa sampai 2 minggu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jangka waktu bisa sampai 2 minggu - SIKA biasanya maksimal 1 shift atau beberapa hari sesuai PTW', 'Jangka waktu bisa sampai 2 minggu')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Jangka waktu pekerjaan maksimal 7 hari
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jangka waktu bisa sampai 2 minggu - SIKA biasanya maksimal 1 shift atau beberapa hari sesuai PTW', 'Jangka waktu bisa sampai 2 minggu')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jumlah pekerjaan &gt; 1
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q13</span>
        NAPZA 13. Pertamina EP dengan tegas melarang Penyalahgunaan psikotropika karena akan berdampak buruk terhadap diri pekerja baik dampak komplikasi medis, maupun dampak sosial. Manakah dampak penyalahgunaan psikotropika berikut ini yang termasuk dalam jenis dampak sosial?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Citra Perusahaan tercoreng, kriminalitas, kecelakaan lalu lintas', 'Citra Perusahaan akan tercoreng, Kriminalitas & Kecelakaan jalan raya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Halusinasi dan Kejahatan/Kriminalitas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Citra Perusahaan tercoreng, kriminalitas, kecelakaan lalu lintas', 'Citra Perusahaan akan tercoreng, Kriminalitas & Kecelakaan jalan raya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Penurunan Konsentrasi & Motivasi dan Kecelakaan jalan raya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Citra Perusahaan tercoreng, kriminalitas, kecelakaan lalu lintas', 'Citra Perusahaan akan tercoreng, Kriminalitas & Kecelakaan jalan raya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Citra Perusahaan akan tercoreng, Kriminalitas & Kecelakaan jalan raya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Citra Perusahaan tercoreng, kriminalitas, kecelakaan lalu lintas', 'Citra Perusahaan akan tercoreng, Kriminalitas & Kecelakaan jalan raya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Penurunan Konsentrasi & Motivasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q14</span>
        Pemakaian Psikotropika, Narkotika dan Zat aditif untuk diri sendiri tanpa indikasi dan tidak bertujuan untuk pengobatan adalah penyalahgunaan zat (drug abuse). Bentuk dari penyalahgunaan yang dilarang oleh Pertamina EP adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menggunakan dan Memiliki psikotropika
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memiliki Psikotropika namun tidak menggunakannya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menggunakan, Memiliki & Mendistribusikan psikotropika
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban a, b, c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jawaban a, b, dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q15</span>
        MSDS (Material Safety Data Sheet) 15. Melalui jalur apa sajakah racun bahan kimia dapat masuk ke dalam tubuh manusia?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Saluran pernapasan, Mulut/pencernaan, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Saluran pernapasan, Mulut, Kulit
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut/pencernaan, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Saluran pencernaan, saluran pernapasan, saluran pendengaran
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut/pencernaan, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Makan, Sentuhan, Kontak Mata
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut/pencernaan, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Radiasi, Saluran pernapasan, Kulit
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q16</span>
        Paparan dengan konsentrasi yang rendah dalam jangka waktu lama masih dapat ditolerir, akan tetapi secara kumulatif bisa menimbulkan :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Efek kronis - Paparan lama sedikit demi sedikit', 'Efek kronis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Efek akut
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Efek kronis - Paparan lama sedikit demi sedikit', 'Efek kronis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Efek kronis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Efek kronis - Paparan lama sedikit demi sedikit', 'Efek kronis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Efek penyakit
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Efek kronis - Paparan lama sedikit demi sedikit', 'Efek kronis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Keracunan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q17</span>
        Berikut adalah jenis batas pemaparan, kecuali :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '60 menit O.E.L - Bukan standar universal', '60 menit O.E.L. atau 60 Menit T.W.A')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> TLV-TWA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '60 menit O.E.L - Bukan standar universal', '60 menit O.E.L. atau 60 Menit T.W.A')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> TLV-STEL
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '60 menit O.E.L - Bukan standar universal', '60 menit O.E.L. atau 60 Menit T.W.A')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 60 menit O.E.L. atau 60 Menit T.W.A
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '60 menit O.E.L - Bukan standar universal', '60 menit O.E.L. atau 60 Menit T.W.A')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> TLV-Ceiling
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q18</span>
        APD (Alat Pelindung Diri) 18. Apakah yang dimaksud dengan Alat Pelindung Diri?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Melindungi tenaga kerja dari bahaya lingkungan kerja', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Melindungi tenaga kerja dari bahaya lingkungan kerja', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Perlengkapan yang digunakan untuk melindungi pekerja dari penjahat
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Melindungi tenaga kerja dari bahaya lingkungan kerja', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Helm, sarung tangan, safety shoes, earplug
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Melindungi tenaga kerja dari bahaya lingkungan kerja', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Perlengkapan yang digunakan setiap saat di lokasi kerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q19</span>
        Alat pelindung tangan harus digunakan pada kondisi berikut, kecuali :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Bekerja dengan peralatan berputar - Dilarang pakai sarung tangan agar tidak terlilit mesin putar!', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bekerja dengan peralatan berputar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - Dilarang pakai sarung tangan agar tidak terlilit mesin putar!', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Bekerja dengan bahan kimia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - Dilarang pakai sarung tangan agar tidak terlilit mesin putar!', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Bekerja dengan benda tajam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - Dilarang pakai sarung tangan agar tidak terlilit mesin putar!', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Bekerja pada kondisi panas / dingin yang ekstrim
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q20</span>
        Apakah yang dimaksud dengan air purifying respirator?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Udara dimurnikan dengan cartridge/filter', 'Respirator dimana udara yang digunakan untuk bernapas dimurnikan dengan menggunakan catridge atau canister')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Respirator dimana anda terhubung dengan udara yang dimampatkan ke dalam silinder / tabung
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Udara dimurnikan dengan cartridge/filter', 'Respirator dimana udara yang digunakan untuk bernapas dimurnikan dengan menggunakan catridge atau canister')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Respirator dimana udara yang digunakan untuk bernapas dimurnikan dengan menggunakan catridge atau canister
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Udara dimurnikan dengan cartridge/filter', 'Respirator dimana udara yang digunakan untuk bernapas dimurnikan dengan menggunakan catridge atau canister')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Respirator dimana udara yang digunakan merupakan oksigen murni
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Udara dimurnikan dengan cartridge/filter', 'Respirator dimana udara yang digunakan untuk bernapas dimurnikan dengan menggunakan catridge atau canister')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q21</span>
        LOTO (Lock Out Tag Out) 21. LOTO diperlukan jika suatu proses kerja memiliki kemungkinan terjadinya :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pelepasan energi - Listrik, mekanik, tekanan', 'Pelepasan energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pelepasan bahan berbahaya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pelepasan energi - Listrik, mekanik, tekanan', 'Pelepasan energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pelepasan gas mudah terbakar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pelepasan energi - Listrik, mekanik, tekanan', 'Pelepasan energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pelepasan energi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pelepasan energi - Listrik, mekanik, tekanan', 'Pelepasan energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q22</span>
        Untuk membedakan identitas pada LOTO, label (tag) dibedakan berdasarkan :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Warna - Contoh merah untuk bahaya, kuning/putih peringatan', 'Warna')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Warna
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Warna - Contoh merah untuk bahaya, kuning/putih peringatan', 'Warna')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Bentuk
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Warna - Contoh merah untuk bahaya, kuning/putih peringatan', 'Warna')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Ukuran
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Warna - Contoh merah untuk bahaya, kuning/putih peringatan', 'Warna')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Posisi pemasangan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q23</span>
        Sumber energi yang dapat menimbulkan kecelakaan kerja, sehingga memerlukan LOTO dalam pengerjaannya yaitu energi :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mekanik hidrolik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pneumatic
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'a, b, dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q24</span>
        Bahaya Listrik 24. Untuk bekerja yang berhubungan dengan listrik, pekerja yang bersangkutan harus:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Terlatih dan berkompeten / tersertifikasi', 'Terlatih dan berkompeten')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Terlatih dan berkompeten
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Terlatih dan berkompeten / tersertifikasi', 'Terlatih dan berkompeten')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengerti system control dan memakai PPE yang sesuai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Terlatih dan berkompeten / tersertifikasi', 'Terlatih dan berkompeten')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Memahami akibat bahaya yang ditimbulkan listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Terlatih dan berkompeten / tersertifikasi', 'Terlatih dan berkompeten')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q25</span>
        Kebakaran akibat listrik disebakan hal-hal dibawah ini, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Peralatan sudah tua - Tua belum tentu terbakar jika standar', 'Peralatan sudah tua')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Beban berlebih
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Peralatan sudah tua - Tua belum tentu terbakar jika standar', 'Peralatan sudah tua')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Listrik statis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Peralatan sudah tua - Tua belum tentu terbakar jika standar', 'Peralatan sudah tua')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Sambungan tidak standard
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Peralatan sudah tua - Tua belum tentu terbakar jika standar', 'Peralatan sudah tua')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Peralatan sudah tua
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q26</span>
        Akibat dari Electrical Shock yang diakibatkan oleh sentuhan listrik, baik langsung maupun tidak langsung ditentukan oleh parameter yaitu :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, c benar - Arus, lama tubuh tersetrum, dan tegangan', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Besar arus listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, c benar - Arus, lama tubuh tersetrum, dan tegangan', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Lamanya tubuh menerima aliran listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, c benar - Arus, lama tubuh tersetrum, dan tegangan', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Besar tegangan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'a, b, c benar - Arus, lama tubuh tersetrum, dan tegangan', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q27</span>
        Gas Berbahaya & Beracun 27. Manakah diantara pernyataan berikut ini yang paling benar
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Oksigen unsur pokok...', 'Oksigen merupakan unsur pokok yang sangat diperlukan dalam proses pembakaran. Di udara bebas terdapat oksigen dengan konsentrasi sekitar 18% sedangakan oksigen yang diperlukan untuk proses pembakaran paling sedikit sekitar 10%.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Oksigen merupakan unsur pokok yang sangat diperlukan dalam proses pembakaran. Di udara bebas terdapat oksigen dengan konsentrasi sekitar 18% sedangakan oksigen yang diperlukan untuk proses pembakaran paling sedikit sekitar 10%.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Oksigen unsur pokok...', 'Oksigen merupakan unsur pokok yang sangat diperlukan dalam proses pembakaran. Di udara bebas terdapat oksigen dengan konsentrasi sekitar 18% sedangakan oksigen yang diperlukan untuk proses pembakaran paling sedikit sekitar 10%.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Oksigen, heat, fuel merupakan segitiga api
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Oksigen unsur pokok...', 'Oksigen merupakan unsur pokok yang sangat diperlukan dalam proses pembakaran. Di udara bebas terdapat oksigen dengan konsentrasi sekitar 18% sedangakan oksigen yang diperlukan untuk proses pembakaran paling sedikit sekitar 10%.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Gas mudah terbakar mempunyai titik didih &lt; 10 OC pada tekanan 2 atm
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Oksigen unsur pokok...', 'Oksigen merupakan unsur pokok yang sangat diperlukan dalam proses pembakaran. Di udara bebas terdapat oksigen dengan konsentrasi sekitar 18% sedangakan oksigen yang diperlukan untuk proses pembakaran paling sedikit sekitar 10%.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Secara fisik bahan bakar dapat berupa, padat, cair dan gas. Namun pada dasarnya semua bahan bakar bisa terbakar harus dalam bentuk fase cair
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q28</span>
        Gas H2S adalah gas sering kali timbul pada kegiatan pemboran migas. Berikut merupakan ciri-ciri gas H2S, kecuali
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi - H2S berbau telur busuk, BUKAN wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Beracun
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi - H2S berbau telur busuk, BUKAN wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Berbau busuk
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi - H2S berbau telur busuk, BUKAN wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tanpa warna
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pada konsentrasi rendah berbau wangi - H2S berbau telur busuk, BUKAN wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pada konsentrasi rendah berbau wangi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q29</span>
        Berikut adalah unsur-unsur pembentuk api, yang biasa disebut segitiga api,
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'O2, sumber panas, bahan bakar', 'O2, sumber panas, bahan bakar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> O2, sumber panas, bahan bakar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'O2, sumber panas, bahan bakar', 'O2, sumber panas, bahan bakar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Titik bakar, titik didih, titik nyala
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'O2, sumber panas, bahan bakar', 'O2, sumber panas, bahan bakar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> O2, oksigen, udara
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'O2, sumber panas, bahan bakar', 'O2, sumber panas, bahan bakar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> CO2, H2S, CO
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q30</span>
        Cara Kerja Aman 30. Bekerja sesuai dengan urutan pelaksanaan pekerjaan termasuk dalam HSE Golden Rules poin :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Patuh pada peraturan, prosedur, dan hukum', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Peduli pada orang lain dan sekitarnya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Patuh pada peraturan, prosedur, dan hukum', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Melakukan intervensi terhadap tindakan tidak aman
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Patuh pada peraturan, prosedur, dan hukum', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Patuh pada peraturan, prosedur, dan hukum
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Patuh pada peraturan, prosedur, dan hukum', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Memberikan rekomendasi perbaikan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q31</span>
        Setiap pekerja harus dalam kondisi fit to work saat datang ke lokasi kerja. Yang dimaksud dengan fit to work adalah : ... (terpotong di dokumen asli) 31. Setiap pekerja harus dalam kondisi fit to work saat datang ke lokasi kerja. Yang dimaksud dengan fit to work adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Tekanan darah berada pada range 80 - 130
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Telah mengikuti Medical Check Up
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Sehat secara fisik dan mental
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jarak pandang 5-10 meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q32</span>
        Kecepatan maksimum kendaraan (Driving Safety) saat melintas di dalam area fasilitas operasi/produksi (dalam pagar) Pertamina EP biasanya dibatasi maksimal :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', '10 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 40 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', '10 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 30 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', '10 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 20 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Semua jawaban benar', '10 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 10 km/jam
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q33</span>
        Housekeeping (5R) & Lingkungan 33. Implementasi housekeeping di lokasi kerja bertujuan untuk :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Membiarkan sampah menumpuk', 'Mengurangi potensi terjadinya pencemaran lingkungan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menciptakan lokasi kerja yang aman, nyaman dan sehat.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Membiarkan sampah menumpuk', 'Mengurangi potensi terjadinya pencemaran lingkungan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Meningkatkan efisiensi kerja dan mengurangi unsafe condition.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Membiarkan sampah menumpuk', 'Mengurangi potensi terjadinya pencemaran lingkungan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengurangi potensi terjadinya pencemaran lingkungan.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Membiarkan sampah menumpuk', 'Mengurangi potensi terjadinya pencemaran lingkungan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Semua jawaban benar (a, b, dan c benar)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q34</span>
        Yang BUKAN merupakan bagian dari prinsip 5R (Ringkas, Rapi, Resik, Rawat, Rajin) dalam program housekeeping adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning atau merah untuk limbah B3/berbahaya', 'Menata barang agar mudah dicari (Rapi)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Memilah barang yang masih dipakai dan yang tidak (Ringkas)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kuning atau merah untuk limbah B3/berbahaya', 'Menata barang agar mudah dicari (Rapi)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Menata barang agar mudah dicari (Rapi)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning atau merah untuk limbah B3/berbahaya', 'Menata barang agar mudah dicari (Rapi)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Membiarkan sampah menumpuk di sudut ruangan (Rombak)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning atau merah untuk limbah B3/berbahaya', 'Menata barang agar mudah dicari (Rapi)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Membersihkan tempat kerja dari debu dan kotoran (Resik)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q35</span>
        Limbah B3 (Bahan Berbahaya dan Beracun) seperti majun bekas oli, saringan oli (oil filter), dan bekas bahan kimia harus dibuang ke dalam tempat sampah berwarna :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Isolasi, lokalisir, laporkan', 'Kuning / Merah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Hijau
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Isolasi, lokalisir, laporkan', 'Kuning / Merah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kuning / Merah
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Isolasi, lokalisir, laporkan', 'Kuning / Merah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Biru
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Isolasi, lokalisir, laporkan', 'Kuning / Merah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Hitam
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q36</span>
        Apabila terjadi tumpahan minyak (oil spill) di area kerja, langkah pertama yang paling tepat dilakukan sesuai prinsip kerja aman adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengecek kondisi rem - Ini justru tindakan yang diwajibkan', 'Membiarkan saja karena nanti akan menguap sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Langsung menyiram tumpahan dengan air sebanyak-banyaknya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengecek kondisi rem - Ini justru tindakan yang diwajibkan', 'Membiarkan saja karena nanti akan menguap sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengisolasi sumber tumpahan, melokalisir aliran minyak dengan oil absorbent / pasir, dan melaporkan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Mengecek kondisi rem - Ini justru tindakan yang diwajibkan', 'Membiarkan saja karena nanti akan menguap sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Membiarkan saja karena nanti akan menguap sendiri
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengecek kondisi rem - Ini justru tindakan yang diwajibkan', 'Membiarkan saja karena nanti akan menguap sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Menyulut api agar minyaknya habis terbakar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q37</span>
        Corporate Life Saving Rules (CLSR) & Emergency 37. Dalam 12 Corporate Life Saving Rules (CLSR) Pertamina, pekerja dilarang keras melakukan hal berikut saat mengemudi, KECUALI :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hentikan kerja, evakuasi ke Muster Point', 'Mengemudi tanpa menggunakan sabuk pengaman (seat belt)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menggunakan telepon genggam (HP)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Hentikan kerja, evakuasi ke Muster Point', 'Mengemudi tanpa menggunakan sabuk pengaman (seat belt)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengemudi tanpa menggunakan sabuk pengaman (seat belt)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hentikan kerja, evakuasi ke Muster Point', 'Mengemudi tanpa menggunakan sabuk pengaman (seat belt)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengecek kondisi rem dan lampu sebelum berangkat
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hentikan kerja, evakuasi ke Muster Point', 'Mengemudi tanpa menggunakan sabuk pengaman (seat belt)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Mengemudi dalam kondisi mabuk / di bawah pengaruh obat
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q38</span>
        Apa yang harus Anda lakukan jika mendengar bunyi sirine keadaan darurat (Emergency Alarm) berbunyi terus menerus secara panjang?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Berlari mencari sumber api untuk memadamkannya sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Mengemas barang-barang pribadi terlebih dahulu sebelum keluar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Berlari mencari sumber api untuk memadamkannya sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Segera hentikan pekerjaan, matikan sumber energi, dan evakuasi menuju Titik Kumpul (Muster Point)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Berlari mencari sumber api untuk memadamkannya sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tetap bekerja karena mungkin itu hanya alarm palsu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Semua jawaban benar', 'Berlari mencari sumber api untuk memadamkannya sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Berlari mencari sumber api untuk memadamkannya sendiri
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q39</span>
        Izin Kerja (SIKA) harus selalu berada di lokasi tempat pekerjaan berlangsung. Kapan SIKA tersebut dinyatakan tidak berlaku?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,8 meter - Standar internasional OSHA/Migas untuk wajib pakai harness jatuh', 'Jika terjadi keadaan darurat (Emergency) di lokasi tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Jika terjadi pergantian shift pekerja dan tidak diperpanjang
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '1,8 meter - Standar internasional OSHA/Migas untuk wajib pakai harness jatuh', 'Jika terjadi keadaan darurat (Emergency) di lokasi tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Jika terjadi keadaan darurat (Emergency) di lokasi tersebut
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,8 meter - Standar internasional OSHA/Migas untuk wajib pakai harness jatuh', 'Jika terjadi keadaan darurat (Emergency) di lokasi tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Jika area kerja berubah menjadi tidak aman (unsafe)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,8 meter - Standar internasional OSHA/Migas untuk wajib pakai harness jatuh', 'Jika terjadi keadaan darurat (Emergency) di lokasi tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Semua jawaban benar (a, b, dan c benar)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q40</span>
        Sesuai dengan prosedur Bekerja di Ketinggian (Working at Height), pekerja wajib menggunakan Full Body Harness dengan 100% tie-off apabila bekerja pada ketinggian di atas :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', '1,0 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 1,0 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', '1,0 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 1,8 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', '1,0 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 0,5 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', '1,0 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 3,0 meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q41</span>
        Yang menjadi target dalam kebijakan HSE di Pertamina Gas adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Nihil Insiden')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Diperbolehkan terjadi kecelakaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Nihil Insiden')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Diperbolehkan tidak menggunakan APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Nihil Insiden')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Nihil Insiden
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Nihil Insiden')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Semua jawaban benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q42</span>
        Undang-undang No. 1 Tahun 1970 mengatur tentang:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Transportasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Keselamatan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Komunikasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Ketenagakerjaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q43</span>
        Salah satu persyaratan keselamatan kerja yang harus dipenuhi dalam memulai suatu pekerjaan adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Niat dan doa
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Upah tetap
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Job Safety Analysis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jumlah Pekerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q44</span>
        Berikut adalah HSE Golden Rules Pertamina, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Instropeksi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Patuh
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Instropeksi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Peduli
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Instropeksi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Instropeksi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Instropeksi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Intervensi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q45</span>
        Berapa jumlah elemen Corporate Life Saving Rules Pertamina (CLSR):
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', '11')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 10
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', '11')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 11
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', '11')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 12
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', '11')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 13
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q46</span>
        Yang tidak termasuk dalam elemen Corporate Live Saving Rules (CLSR) antara lain:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Hazard Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Permit To Work
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Hazard Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Isolation
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Hazard Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Safe Zone Positon
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: D', 'Hazard Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Hazard Analysis
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q47</span>
        Persyaratan Penerbitan Surat Ijin Kerja Aman (SIKA) di Pertamina diantaranya, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Surat Keterangan Catatan Kepolisian (SKCK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> HSE Plan / Job Safety Analysis (JSA)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Surat Keterangan Catatan Kepolisian (SKCK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Identitas seluruh pekerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Surat Keterangan Catatan Kepolisian (SKCK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Surat Keterangan Catatan Kepolisian (SKCK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Surat Keterangan Catatan Kepolisian (SKCK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Hasil Medical Check Up / Surat Keterangan Sehat
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q48</span>
        Batas ketinggian minimal yang menjadi persyaratan dalam bekerja di ketinggian adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', '1.8 m')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 70 cm
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', '1.8 m')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 1.4 m
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', '1.8 m')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 1.8 m
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', '1.8 m')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 2.1 m
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q49</span>
        Alat pelindung diri yang diperlukan saat bekerja di ketinggian adalah sebagai berikut, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Tali rafia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Tali rafia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Tali rafia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Full Body Harness Double Hook & Tali pengaman
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Tali rafia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Sepatu keselamatan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Tali rafia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Helm kerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q50</span>
        Potensi bahaya yang mungkin terjadi pada saat penggunaan scaffolding (perancah) antara lain, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Semua jawaban salah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bahaya dari orang dan kendaraan yang melintas ke area kerja scaffolding
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Semua jawaban salah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Bahaya terjatuh dari ketinggian
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Semua jawaban salah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Bahaya dekat jalur listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: D', 'Semua jawaban salah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Semua jawaban salah
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q51</span>
        Di bawah ini yang tidak termasuk alat-alat keselamatan kerja dalam las listrik adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Kaos bolong')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Apron
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Kaos bolong')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kaos bolong
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Kaos bolong')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Topeng / kacamata las
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Kaos bolong')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Sarung Tangan las
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q52</span>
        Hal-hal yang harus dipatuhi pada saat melakukan instalasi listrik, diantaranya:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Menggunakan APD yang dibutuhkan untuk instalasi listrik dan menerapkan prinsip isolasi energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Sumber listrik tidak dimatikan terlebih dahulu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Menggunakan APD yang dibutuhkan untuk instalasi listrik dan menerapkan prinsip isolasi energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Menggunakan kabel yang tidak standar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Menggunakan APD yang dibutuhkan untuk instalasi listrik dan menerapkan prinsip isolasi energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tidak menggunakan alas kaki untuk mencegah tersengat listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: D', 'Menggunakan APD yang dibutuhkan untuk instalasi listrik dan menerapkan prinsip isolasi energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Menggunakan APD yang dibutuhkan untuk instalasi listrik dan menerapkan prinsip isolasi energi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q53</span>
        Yang harus dipatuhi sebagai Driver kendaraan perusahaan adalah, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Menggunakan Handphone dan alat lainnya saat berkendara')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Tidak melebihi batas kecepatan maksimum kendaraan sesuai peraturan yang berlaku.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Menggunakan Handphone dan alat lainnya saat berkendara')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Melakukan pemeriksaan kelengkapan dan kelayakan fungsi kendaraan sebelum memulai berkendara (roda, alat kemudi, seat belt, rem, lampu, spion, klakson, speedometer, dll).
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Menggunakan Handphone dan alat lainnya saat berkendara')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menggunakan Handphone dan alat lainnya saat berkendara
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Menggunakan Handphone dan alat lainnya saat berkendara')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Selalu menggunakan Sabuk Keselamatan saat berada di dalam kendaraan.
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q54</span>
        Sumber bahaya yang dapat menimbulkan kecelakaan kerja untuk jenis pekerjaan mekanik adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Bagian benda yang bergerak')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bagian benda yang bergerak
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Bagian benda yang bergerak')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kelistrikan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Bagian benda yang bergerak')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Saklar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Bagian benda yang bergerak')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jumlah pekerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q55</span>
        APD untuk melindungi telinga dari suara bising / kebisingan adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Earmuff / Ear Plug ( penyumbat telinga )')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Safety helmet ( Helm )
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Earmuff / Ear Plug ( penyumbat telinga )')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Respirator ( Masker )
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Earmuff / Ear Plug ( penyumbat telinga )')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Earmuff / Ear Plug ( penyumbat telinga )
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Earmuff / Ear Plug ( penyumbat telinga )')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Googgles ( kacamata )
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q56</span>
        Yang harus dilakukan untuk memastikan kehandalan alat / fasilitas produksi adalah, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Membiarkan sertifikat layak pakai alat / fasilitas yang sudah kadaluarsa.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Membiarkan sertifikat layak pakai alat / fasilitas yang sudah kadaluarsa.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Membiarkan sertifikat layak pakai alat / fasilitas yang sudah kadaluarsa.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memastikan adanya sertifikat layak pakai / masa berlaku.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Membiarkan sertifikat layak pakai alat / fasilitas yang sudah kadaluarsa.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tidak ditemukan cacat fisik yang telihat. Komunikasikan kepada pengawas jika ditemukan kejanggalan / kondisi abnormal
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q57</span>
        Yang harus dilakukan untuk memastikan kehandalan alat / fasilitas produksi adalah, kecuali: a. Membiarkan sertifikat layak pakai alat / fasilitas yang sudah kadaluarsa. b. Memastikan adanya sertifikat layak pakai / masa berlaku. c. Tidak ditemukan cacat fisik yang telihat. Komunikasikan kepada pengawas jika ditemukan kejanggalan / kondisi abnormal 17. Yang dapat dilakukan agar terhindar dari bahaya terpeleset / tersandung / terjatuh dari tangga adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Pastikan area kerja selalu dalam keadaan kotor')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Perhatikan lubang jalan maupun cekungan jalan / selokan ketika melintas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Pastikan area kerja selalu dalam keadaan kotor')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Batasi beban bawaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Pastikan area kerja selalu dalam keadaan kotor')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pastikan area kerja selalu dalam keadaan kotor
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Pastikan area kerja selalu dalam keadaan kotor')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jangan membiarkan kabel ataupun colokan listrik menghalangi jalan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q58</span>
        Berikut adalah syarat lokasi bongkar muat truk barang, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Di daerah yang dekat dengan keramaian orang')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Di daerah yang jauh dari lalu lintas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Di daerah yang dekat dengan keramaian orang')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Di daerah yang dekat dengan keramaian orang
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Di daerah yang dekat dengan keramaian orang')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tidak dilakukan di daerah yang curam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Di daerah yang dekat dengan keramaian orang')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Tidak membawa muatan yang berlebihan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q59</span>
        Potensi bahaya pada alat angkut diantaranya, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Syarat keselamatan kerja terpenuhi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Syarat keselamatan kerja terpenuhi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Syarat keselamatan kerja terpenuhi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Peralatan yang tidak standar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Syarat keselamatan kerja terpenuhi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pengawasan peralatan kurang
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Syarat keselamatan kerja terpenuhi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Sosialisasi peraturan dan perundang-undangan kurang
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q60</span>
        Yang harus dilakukan saat parkir atau meninggalkan forklift, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Memastikan forklift sudah dipanasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Memarkir dan meninggalkan forklift di area yang aman
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Memastikan forklift sudah dipanasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mematikan mesin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Memastikan forklift sudah dipanasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Memastikan forklift sudah dipanasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Memastikan forklift sudah dipanasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pasang rem tangan dan atur pengendali arah pada posisi netral
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q61</span>
        Apabila terjadi suatu insiden / kecelakaan kerja maka anda harus melaporkan:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Segera setelah mengetahui terjadinya kecelakaan tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Setelah melakukan tindakan perbaikan terhadap kecelakaan tersebut
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Segera setelah mengetahui terjadinya kecelakaan tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Segera setelah mengetahui terjadinya kecelakaan tersebut
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Segera setelah mengetahui terjadinya kecelakaan tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pada setiap akhir tahun
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Segera setelah mengetahui terjadinya kecelakaan tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pada akhir bulan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q62</span>
        Tujuan P3K adalah sebagai berikut, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Memperlama proses penyembuhan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Memperlama proses penyembuhan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Memperlama proses penyembuhan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mencegah maut atau memperpanjang harapan hidup
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Memperlama proses penyembuhan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mencegah cacat dan infeksi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Memperlama proses penyembuhan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Mengurangi kesakitan datau bahaya yang lebih buruk
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q63</span>
        PEKA adalah singkatan dari:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Pengamatan Keselamatan dan Lingkungan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pengamatan Keselamatan dan Lingkungan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Pengamatan Keselamatan dan Lingkungan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pengamatan Kesehatan dan Lingkungan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Pengamatan Keselamatan dan Lingkungan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Penerapan Kesehatan dan Lingkungan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Pengamatan Keselamatan dan Lingkungan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Penerapan Kesehatan dan Lingkungan Kerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q64</span>
        Apabila terjadi gempa bumi maka yang harus dilakukan, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Menggunakan lift')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Berlindung pada tempat yang aman
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Menggunakan lift')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Menggunakan lift
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Menggunakan lift')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menjauhi dinding kaca
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Menggunakan lift')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Melindungi kepala
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q65</span>
        Berikut ini adalah salah satu prosedur evakuasi yang benar adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Jangan berbalik arah karena akan bertabrakan dengan orang-orang di belakang anda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Berlari cepat menuju pintu keluar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Jangan berbalik arah karena akan bertabrakan dengan orang-orang di belakang anda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memakai sepatu hak tinggi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Jangan berbalik arah karena akan bertabrakan dengan orang-orang di belakang anda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengunci pintu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: D', 'Jangan berbalik arah karena akan bertabrakan dengan orang-orang di belakang anda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jangan berbalik arah karena akan bertabrakan dengan orang-orang di belakang anda
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q66</span>
        Kepanjangan dari JSA adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Job System Audit
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Job Safety Analysis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Job Secret Analysis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Job Security Assessment
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q67</span>
        Salah satu contoh ruang tertutup (confined space) adalah, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Ruang rapat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Ruang rapat
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Ruang rapat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Tanki
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Ruang rapat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Gorong-gorong
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Ruang rapat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Atap ducting
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q68</span>
        Kepanjangan dari 5R adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Resik, Rapi, Rawat, Rajin, Ringkas.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Risk Assessment, RAW Material, Round Area, Road Safety, Real Safety
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Resik, Rapi, Rawat, Rajin, Ringkas.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Ramai, Ringkas, Rindang, Rugi, Rahasia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Resik, Rapi, Rawat, Rajin, Ringkas.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Resik, Rapi, Rawat, Rajin, Ringkas.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Resik, Rapi, Rawat, Rajin, Ringkas.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Ringkas, Rajin, Rusuh, Ramai, Relokasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q69</span>
        Lokasi/titik berkumpul apabila terjadi keadaan darurat disebut:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Assembly / Muster Point')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Assembly / Muster Point
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Assembly / Muster Point')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Meeting Point
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Assembly / Muster Point')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Emergency Point
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Assembly / Muster Point')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Rest Area
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q70</span>
        Apa yang dimaksud dengan hazard (bahaya) adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Suatu obyek dimana tedapat energi, zat atau kondisi kerja yang potensial dapat mengancam keselamatan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Suatu obyek dimana tedapat energi, zat atau kondisi kerja yang potensial dapat mengancam keselamatan.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Suatu obyek dimana tedapat energi, zat atau kondisi kerja yang potensial dapat mengancam keselamatan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Suatu obyek dimana mengancam harga diri dalam bekerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Suatu obyek dimana tedapat energi, zat atau kondisi kerja yang potensial dapat mengancam keselamatan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Suatu peristiwa dimana pikiran & tindakan tidak singkron yang menyebabkan bahaya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Suatu obyek dimana tedapat energi, zat atau kondisi kerja yang potensial dapat mengancam keselamatan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Lampu sein yang berkedip secara bersamaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q71</span>
        First Aid P3K adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Memberikan pertolongan pertama pada korban kecelakaan dengan cepat dan tepat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Memberikan pertolongan setelah terjadi banyak pendarahan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Memberikan pertolongan pertama pada korban kecelakaan dengan cepat dan tepat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memberikan pertolongan pertama pada korban kecelakaan dengan cepat dan tepat
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Memberikan pertolongan pertama pada korban kecelakaan dengan cepat dan tepat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Memberikan kenyamanan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Memberikan pertolongan pertama pada korban kecelakaan dengan cepat dan tepat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Memberikan pertolongan kepada korban yang telah dirujuk ke RS
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q72</span>
        Maksud dari Fit to Work adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Sehat dan siap bekerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Sehat dan siap bekerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Sehat dan siap bekerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Patuh terhadap peraturan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Sehat dan siap bekerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengerjakan setiap pekerjaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Sehat dan siap bekerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Patuh pada atasan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q73</span>
        APD adalah singkatan dari:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Alat Pelindung Diri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Alat Pas Dipakai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Alat Pelindung Diri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Alat Pelindung Diri
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Alat Pelindung Diri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Alat Punya Dia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Alat Pelindung Diri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Alat Pelengkap Diri
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q74</span>
        Kecelakaan adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Kejadian yang tidak dikehendaki dan tidak diduga/tiba-tiba yang dapat menimbulkan korban manusia dan harta benda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Sumber bahaya potensial yang dapat menyebabkan kecelakaan/kerusakan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Kejadian yang tidak dikehendaki dan tidak diduga/tiba-tiba yang dapat menimbulkan korban manusia dan harta benda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Tingkat bahaya dari suatu kondisi bilamana terjadi accident
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Kejadian yang tidak dikehendaki dan tidak diduga/tiba-tiba yang dapat menimbulkan korban manusia dan harta benda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Suatu kondisi sumber bahaya telah teridentifikasi dan telah dikendalikan ke tingkat yang memadai (aman/safe)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: D', 'Kejadian yang tidak dikehendaki dan tidak diduga/tiba-tiba yang dapat menimbulkan korban manusia dan harta benda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Kejadian yang tidak dikehendaki dan tidak diduga/tiba-tiba yang dapat menimbulkan korban manusia dan harta benda
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q75</span>
        Faktor-faktor penyebab terjadinya kecelakaan adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Alat, bahan dan manusia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Tenaga kerja, tenaga medis dan bahan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Alat, bahan dan manusia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Alat, bahan dan perusahaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Alat, bahan dan manusia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Alat, bahan dan manusia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Alat, bahan dan manusia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Bahan, tenaga kerja dan perusahaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q76</span>
        PT PERTAMINA EP ASSET 2 1. Undang-undang terkait Keselamatan Kerja adalah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'UU No 1 tahun 1970')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> UU No 1 tahun 1970
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'UU No 1 tahun 1970')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> UU No 1 tahun 1990
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'UU No 1 tahun 1970')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> UU No 7 tahun 1910
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'UU No 1 tahun 1970')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> UU No 1 tahun 2009
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q77</span>
        Kepanjangan dari PEKA adalah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengamatan Keselamatan Kerja', 'Pengamatan Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pengamatan Kesehatan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengamatan Keselamatan Kerja', 'Pengamatan Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pengamatan Kecelakaan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pengamatan Keselamatan Kerja', 'Pengamatan Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pengamatan Keselamatan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengamatan Keselamatan Kerja', 'Pengamatan Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pengamatan Kejadian Kerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q78</span>
        PT Pertamina EP Asset 2 sudah mengaplikasikan system Vehicle Tracking System (VTS) pada kendaraan Perusahaan, dimana setting aplikasi pada kecepatan diatur sebagai berikut: Kecepatan di lokasi sumur/SP/SPU/SKG dan Pemboran adalah maksimum 20 km/jam Kecepatan di dalam Komplek Perumahan adalah maksimum ... km/jam Kecepatan di jalan berdebu maksimum 40 km/jam Kecepatan di jalan raya dalam kota maskimum 50 km/jam Kecepatan di jalan utama/jalan lintas/kota adalah maksimum 80 km/jam Dari data diatas, Berapa kecepatan di dalam Komplek Perumahan ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Maksimum 35 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Maksimum 35 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Maksimum 35 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Maksimum 30 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Maksimum 35 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Maksimum 25 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Maksimum 35 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Maksimum 10 km/jam
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q79</span>
        Setiap pekerja harus dalam kondisi fit to work saat datang ke lokasi kerja. Yang dimaksud dengan fit to work adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Tekanan darah berada pada range 80 - 130
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Telah mengikuti Medical Check Up
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Sehat secara fisik dan mental
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jarak pandang 5-10 meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q80</span>
        Lembar SIKA yang udah di tanda tangani dan diserahkan ke HSE pada lembar warna apa?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Putih
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kuning
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Merah
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Biru/Hijau
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q81</span>
        Di bawah ini adalah ciri-ciri SIKA Umum, kecuali...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Jumlah pekerjaan bisa lebih dari 2')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Jumlah pekerjaan bisa lebih dari 2
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Jumlah pekerjaan bisa lebih dari 2')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Jangka waktu pekerjaan maksimal 7 hari
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Jumlah pekerjaan bisa lebih dari 2')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Jangka waktu bisa sampai 2 minggu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Jumlah pekerjaan bisa lebih dari 2')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jumlah pekerjaan &gt; 1
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q82</span>
        Pengawas pekerjaan dari dalam atau luar fungsi di lingkungan PT. Pertamina EP, di dalam formulir SIKA disebut ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pemberi ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pelaksana Pekerjaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pemegang ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Atasan pemegang ijin
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q83</span>
        Kapan waktunya pemberlakukan peraturan system override?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saat Asset Holder melakukan Bypass Critical Protection', 'Saat Asset Holder melakukan Bypass Critical Protection (BCP)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Saat ada pekerjaan yang memerlukan personil yang banyak
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saat Asset Holder melakukan Bypass Critical Protection', 'Saat Asset Holder melakukan Bypass Critical Protection (BCP)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Saat ada kejadian emergency kebakaran terjadi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saat Asset Holder melakukan Bypass Critical Protection', 'Saat Asset Holder melakukan Bypass Critical Protection (BCP)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Saat Asset Holder melakukan pekerjaan Rutin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Saat Asset Holder melakukan Bypass Critical Protection', 'Saat Asset Holder melakukan Bypass Critical Protection (BCP)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Saat Asset Holder melakukan Bypass Critical Protection (BCP)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q84</span>
        Berikut merupakan hierarki (dari yang tertinggi) pengendalian resiko bahaya berdasar OHSAS 18001 : 2008, yaitu :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Adminstrasi, eliminasi, subtitusi, rekayasa engineering, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> APD, rekayasa engineering, subtitusi, adminstrasi, eliminasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Rekayasa engineering, admnistrasi, APD, eliminasi, subtitusi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q85</span>
        Apakah yang dimaksud dengan Alat Pelindung Diri?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Perlengkapan yang digunakan untuk melindungi tenaga kerja...', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Perlengkapan yang digunakan untuk melindungi pekerja dari penjahat
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Perlengkapan yang digunakan untuk melindungi tenaga kerja...', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Helm, sarung tangan, safety shoes, earplug
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Perlengkapan yang digunakan untuk melindungi tenaga kerja...', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Perlengkapan yang digunakan untuk melindungi tenaga kerja...', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Perlengkapan yang digunakan setiap saat di lokasi kerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q86</span>
        Berapakah nilai ambang batas kebisingan dengan waktu paparan 8 jam per hari?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '85 dBA', '85 dBA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 65 dBA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '85 dBA', '85 dBA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 75 dBA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '85 dBA', '85 dBA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 85 dBA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '85 dBA', '85 dBA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 95 dBA
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q87</span>
        Alat pelindung tangan harus digunakan pada kondisi berikut, kecuali...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - sarung tangan berpotensi tersangkut', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bekerja dengan bahan kimia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Bekerja dengan peralatan berputar - sarung tangan berpotensi tersangkut', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Bekerja dengan peralatan berputar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - sarung tangan berpotensi tersangkut', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Bekerja dengan benda tajam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - sarung tangan berpotensi tersangkut', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Bekerja pada kondisi panas / dingin yang ekstrim
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q88</span>
        Alat Pelindung Diri yang berfungsi mencegah terjatuh dan menahan korban bergantung diatas ialah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Full body harness', 'Full body harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Topi/Helm
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Full body harness', 'Full body harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Self Contained Breathing Apparatus (SCBA)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Full body harness', 'Full body harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Sepatu Safety
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Full body harness', 'Full body harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Full body harness
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q89</span>
        Alat pelindung pernapasan digunakan saat bekerja di ruang terbatas...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Self Contained Breathing Apparatus', 'Self Contained Breathing Apparatus (SCBA)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Full body harness
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Self Contained Breathing Apparatus', 'Self Contained Breathing Apparatus (SCBA)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Self Contained Breathing Apparatus (SCBA)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Self Contained Breathing Apparatus', 'Self Contained Breathing Apparatus (SCBA)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Masker kain
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Self Contained Breathing Apparatus', 'Self Contained Breathing Apparatus (SCBA)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Ear muff
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q90</span>
        Gas H2S adalah gas sering kali timbul pada kegiatan pemboran migas. Berikut merupakan ciri-ciri gas H2S, kecuali...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Beracun
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Berbau busuk
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tanpa warna
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pada konsentrasi rendah berbau wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pada konsentrasi rendah berbau wangi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q91</span>
        Berikut Yang Termasuk didalam simbol warna di MSDS, Kecuali..
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hijau', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Merah
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hijau', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Biru
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Hijau', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Hijau
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hijau', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Kuning
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q92</span>
        Pemakaian Psikotropika, Narkotika dan Zat aditif untuk diri sendiri tanpa indikasi dan tidak bertujuan untuk pengobatan adalah penyalahgunaan zat (drug abuse). Bentuk dari penyalahgunaan yang dilarang oleh Pertamina EP adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, dan c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menggunakan dan Memiliki psikotropika
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, dan c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memiliki Psikotropika namun tidak menggunakannya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, dan c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menggunakan, Memiliki & Mendistribusikan psikotropika
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban a, b, dan c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jawaban a, b, dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q93</span>
        Untuk bekerja yang berhubungan dengan listrik, pekerja yang bersangkutan harus...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Terlatih dan berkompeten
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengerti system control dan memakai PPE yang sesuai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Memahami akibat bahaya yang ditimbulkan listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q94</span>
        Berapakah suhu nyaman sesuai Panduan Umum HSE PT Pertamina EP:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Di bawah 32°C')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Di bawah 32°C
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Di bawah 32°C')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Di atas 32°C
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Di bawah 32°C')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 22°C - 26°C
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Di bawah 32°C')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jawaban di atas salah semua
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q95</span>
        Sesuai Peraturan Pemerintah 101 Tahun 2014 Limbah Bahan Berbahaya dan Beracun (B-3) maksimum penyimpanan di Tempat Penyimpanan Sementara (TPS) adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Selama 90 Hari Kalender', 'Selama 90 Hari Kalender')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Selama 100 Hari Kalender
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Selama 90 Hari Kalender', 'Selama 90 Hari Kalender')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Selama 90 Hari Kalender
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Selama 90 Hari Kalender', 'Selama 90 Hari Kalender')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Selama 30 Hari Kalender
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Selama 90 Hari Kalender', 'Selama 90 Hari Kalender')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Selama 60 Hari Kalender
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q96</span>
        Melalui jalur apa sajakah racun bahan kimia dapat masuk ke dalam tubuh manusia ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Saluran pencernaan, saluran pernapasan, saluran pendengaran
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Saluran pernapasan, Mulut, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Saluran pernapasan, Mulut, Kulit
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Radiasi, Saluran pernapasan, Kulit
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Makan, Sentuhan, Kontak Mata
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q97</span>
        Berikut adalah jenis batas pemaparan, kecuali :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'TLV-TWA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> TLV-TWA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'TLV-TWA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> ISO-OHSAS
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'TLV-TWA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> TLV-STEL
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'TLV-TWA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> TLV-Ceiling
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q98</span>
        Berikut adalah unsur-unsur pembentuk api, yang biasa disebut segitiga api:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Sumber panas, bahan bakar, oksigen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Sumber panas, bahan bakar, oksigen
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Sumber panas, bahan bakar, oksigen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Titik bakar, titik didih, titik nyala
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Sumber panas, bahan bakar, oksigen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> O2/oksigen, udara
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Sumber panas, bahan bakar, oksigen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> CO2, H2S, CO
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q99</span>
        Perancah (scaffold) adalah struktur semi permanen/konstruksi yang menyediakan jalan masuk/sarana kerja, yang digunakan untuk menyangga material atau pemasangan peralatan lain. Jika orang berlalu lalang di bawah scaffold, scaffold harus dilengkapi dengan jaring berlubang di antara papan dan pagar pengaman. Pada ketinggian berapa perancah (scaffold) digunakan dan berapa diameter maks lubang pada jaring ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mulai ketinggian 1,8 meter & 1,2 inch', 'Mulai ketinggian 1,8 meter & 1,2 inch')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Mulai ketinggian 1,5 meter & 1,3 inch
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mulai ketinggian 1,8 meter & 1,2 inch', 'Mulai ketinggian 1,8 meter & 1,2 inch')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mulai ketinggian 1,6 meter & 1,2 inch
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mulai ketinggian 1,8 meter & 1,2 inch', 'Mulai ketinggian 1,8 meter & 1,2 inch')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mulai ketinggian 2,5 meter & 1,3 inch
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Mulai ketinggian 1,8 meter & 1,2 inch', 'Mulai ketinggian 1,8 meter & 1,2 inch')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Mulai ketinggian 1,8 meter & 1,2 inch
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q100</span>
        Jarak aman Sumur pemboran dengan flare stack dan ROW Pipeline adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter & 12 meter', '90 meter & 12 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 70 meter & 6 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter & 12 meter', '90 meter & 12 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 80 meter & 12 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '90 meter & 12 meter', '90 meter & 12 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 90 meter & 12 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter & 12 meter', '90 meter & 12 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 100 meter & 6 meter (KUPAK)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q101</span>
        Yang bukan termasuk isi dari HSE Golden Rules adalah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Patuh')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Patuh
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Patuh')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Intervensi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Patuh')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Integritas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Patuh')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Peduli
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q102</span>
        Singkatan dari LOTO adalah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Lock Out Tag Out', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Lock Out Tagline Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Lock Out Tag Out', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Locker Out Tag Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Lock Out Tag Out', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Lock Out Tag Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Lock Out Tag Out', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Locker Out Tagline Out
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q103</span>
        LOTO diperlukan jika suatu proses kerja memiliki kemungkinan terjadinya :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pelepasan bahan berbahaya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pelepasan gas mudah terbakar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pelepasan energi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q104</span>
        Berikut yang termasuk pengaplikasian Warna LOTO Operator-Confined Space-Mekanik adalah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning-Merah-Biru', 'Kuning-Merah-Biru')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Biru-Putih-Kuning
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kuning-Merah-Biru', 'Kuning-Merah-Biru')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kuning-Merah-Biru
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning-Merah-Biru', 'Kuning-Merah-Biru')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Kuning-Biru-Putih
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning-Merah-Biru', 'Kuning-Merah-Biru')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Kuning-Putih-Biru
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q105</span>
        Sumber energi yang dapat menimbulkan kecelakaan kerja, sehingga memerlukan LOTO dalam pengerjaannya yaitu energi:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Listrik')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Listrik')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mekanik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Listrik')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Hidrolik & pneumatic
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Listrik')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q106</span>
        Dalam penggalian, ada berapa jenis type tanah ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '3 Type Tanah antara lain: Type A, B, C', '3 Type Tanah antara lain: Tanah Type A (Tanah Lempung), Type B (Tanah Liat), Type C (Tanah Kerikil)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 2 Type Tanah antara lain: Tanah Lempung dan Tanah Kerikil
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '3 Type Tanah antara lain: Type A, B, C', '3 Type Tanah antara lain: Tanah Type A (Tanah Lempung), Type B (Tanah Liat), Type C (Tanah Kerikil)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 3 Type Tanah antara lain: Tanah Type A (Tanah Lempung), Type B (Tanah Liat), Type C (Tanah Kerikil)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '3 Type Tanah antara lain: Type A, B, C', '3 Type Tanah antara lain: Tanah Type A (Tanah Lempung), Type B (Tanah Liat), Type C (Tanah Kerikil)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 1 Type Tanah antara lain: Tanah Permukaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '3 Type Tanah antara lain: Type A, B, C', '3 Type Tanah antara lain: Tanah Type A (Tanah Lempung), Type B (Tanah Liat), Type C (Tanah Kerikil)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 4 Type Tanah antara lain: Tanah Lempung, Tanah Kerikil, Tanah Liat, Tanah Permukaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q107</span>
        Yang masuk dalam category penggalian dan memerlukan perencanaan / mitigasi adalah minimal kedalaman ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,2 meter', '1,2 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 1,5 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '1,2 meter', '1,2 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 1,2 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,2 meter', '1,2 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 1,8 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,2 meter', '1,2 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 2,0 meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q108</span>
        Implementasi housekeeping di lokasi kerja bertujuan untuk :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Semua jawaban benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menciptakan lokasi kerja yang aman, nyaman dan sehat.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Semua jawaban benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Meningkatkan efisiensi kerja dan mengurangi unsafe condition
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Semua jawaban benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengurangi potensi terjadinya pencemaran lingkungan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Semua jawaban benar', 'Semua jawaban benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Semua jawaban benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q109</span>
        Yang termasuk 5R di dalam Housekeeping, kecuali..
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Rajin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Rajin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Rajin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Rapi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Rajin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Resik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Rajin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Ramai / Rusuh
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q110</span>
        HSSE DEMO ROOM PERTAMINA ZONA 4 1. Tidak dapat bekerja untuk melakukan pekerjaan sesuai jabatan/posisinya dan/atau posisi siapapun, dalam perawatan di rumah sakit, atau dalam status izin sakit (sick leave) adalah termasuk kategori?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'P2-P5')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> P1
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'P2-P5')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> P2-P5
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'P2-P5')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> P6
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'P2-P5')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> P7
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q111</span>
        PT Pertamina EP Asset 2 sudah menerapkan VTS (Vehicle Tracking System) pada setiap kendaraan perusahaan, dimana setting aplikasi pada kecepatan telah diatur. Di bawah ini, pilihlah aturan kecepatan berkendara yang menurut anda benar sesuai lokasi!
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kecepatan di Komplek Perumahan maks. 25 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Kecepatan di Lokasi sumur/SP/SPU/SKG maks. 35 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kecepatan di Komplek Perumahan maks. 25 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kecepatan di Jalan Utama/Jalan Lintas maks. 90 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Kecepatan di Komplek Perumahan maks. 25 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Kecepatan di Komplek Perumahan maks. 25 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kecepatan di Komplek Perumahan maks. 25 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Kecepatan di Jalan Tol. 120 km/jam
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q112</span>
        Dibawah ini yang merupakan ciri SIKA Khusus adalah..
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Jangka waktu pekerjaan Maksimal 7 Hari')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Jangka waktu pekerjaan Maksimal 7 Hari
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Jangka waktu pekerjaan Maksimal 7 Hari')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Jangka waktu Pekerjaan bisa sampai 2 minggu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Jangka waktu pekerjaan Maksimal 7 Hari')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Jumlah Pekerjaan lebih dari 1
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Jangka waktu pekerjaan Maksimal 7 Hari')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jika masa berlaku habis SIKA tidak bisa di perpanjang
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q113</span>
        Pengurus wajib memeriksakan kesehatan, kondisi mental dan kemampuan fisik dari tenaga kerja yang akan diterima maupun yang akan dipindahkan. Pengurus wajib memeriksakan secara berkala kepada Dokter yang ditunjuk. Norma pengujian kesehatan diatur dalam peraturan perundangan. Ayat diatas adalah isi dari undang-undang No. 1 tahun 1970 tentang Keselamatan kerja:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'BAB IV Pengawasan – Pasal 8')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> BAB VII Kecelakaan – Pasal 12
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'BAB IV Pengawasan – Pasal 8')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> BAB IV Pengawasan – Pasal 8
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'BAB IV Pengawasan – Pasal 8')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> BAB V Pembinaan – Pasal 9
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'BAB IV Pengawasan – Pasal 8')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> BAB VII Kecelakaan – Pasal 11
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q114</span>
        Menurut Standar Ketentuan Umum Pemadaman api & Kebakaran (KUPAK), Jarak Gudang Bahan Peledak (Handak) harus terletak pada jarak ….. Meter dari bangunan lain atau rumah kediaman orang lain.
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', '300 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 300 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '300 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 100 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '300 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 400 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '300 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 200 Meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q115</span>
        Sebelum melakukan pekerjaan, pekerja wajib melakukan Fit To Task sebelum bekerja. Apa saja yang diperiksa saat melakukan Fit To Task?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Detak jantung, tekanan darah, berat badan, pernapasan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Suhu tubuh, berat badan, tinggi badan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Detak jantung, tekanan darah, berat badan, pernapasan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Detak jantung, cek darah, cek buta warna
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Detak jantung, tekanan darah, berat badan, pernapasan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Detak jantung, tekanan darah, berat badan, pernapasan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Detak jantung, tekanan darah, berat badan, pernapasan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Suhu tubuh, detak jantung, tekanan darah, SPO2
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q116</span>
        Berikut ini merupakan lembar kerja untuk pekerjaan? (Mengacu pada gambar di dokumen asli)
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bekerja diruang terbatas / confine space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bekerja di ketinggian
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bekerja diruang terbatas / confine space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pekerjaan Panas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Bekerja diruang terbatas / confine space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Bekerja diruang terbatas / confine space
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bekerja diruang terbatas / confine space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Bekerja di penggalian
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q117</span>
        Lembar SIKA yang berwarna Merah diserahkan kepada...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Pemberi Ijin / Asset Holder')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pemberi Ijin / Asset Holder
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemberi Ijin / Asset Holder')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Peminta Ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemberi Ijin / Asset Holder')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> HSSE
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemberi Ijin / Asset Holder')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pemegang Ijin
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q118</span>
        Hal berikut ini yang bukan termasuk kategori Unsafe Action adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Tidak ada Sign Peringatan Kebisingan di area Genset')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Memacu kendaraan pada kecepatan yang tidak sesuai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Tidak ada Sign Peringatan Kebisingan di area Genset')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Tidak ada Sign Peringatan Kebisingan di area Genset
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Tidak ada Sign Peringatan Kebisingan di area Genset')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tidak menggunakan Fullbody Harnest saat bekerja di ketinggian
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Tidak ada Sign Peringatan Kebisingan di area Genset')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Masuk kedalam tanki tanpa alat bantu pernapasan (SCBA)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q119</span>
        Untuk masuk ke Fasilitas Produksi ataupun Fasilitas Penunjang wajib menggunakan kendaraan berbahan bakar solar/diesel, di atas adalah termasuk contoh penerapan Hierarki Pengendalian Resiko, yaitu:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Administrasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Subtitusi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mitigasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Eliminasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q120</span>
        Berikut ini adalah Hierarki Pengendalian Resiko berdasarkan OHSAS 18001:2008. Manakah urutan yang benar (dari yang tertinggi)?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi, Subtitusi, Administrasi, Rekayasa Engineering, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Eliminasi, Subtitusi, Administrasi, Rekayasa Engineering, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi, Subtitusi, Administrasi, Rekayasa Engineering, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Subtitusi, Eliminasi, Administrasi, Rekayasa Engineering, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi, Subtitusi, Administrasi, Rekayasa Engineering, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Eliminasi, Subtitusi, Rekayasa Engineering, Adminstrasi, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi, Subtitusi, Administrasi, Rekayasa Engineering, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Administrasi, Eliminasi, Subtitusi, Rekayasa Engineering, APD
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q121</span>
        Di bawah ini yang bukan merupakan HSE Golden Rules adalah?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Integrity')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Patuh
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Integrity')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Peduli
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Integrity')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Intervensi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Integrity')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Integrity
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q122</span>
        Berikut ini adalah APD perlindungan muka dan mata, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Safety Gloves')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Safety Glasses
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Safety Gloves')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Face Shields
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Safety Gloves')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Goggles
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Safety Gloves')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Safety Gloves
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q123</span>
        Berapakah nilai ambang batas kebisingan dengan waktu pemaparan 8 jam per hari?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '85 dB')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 65 dB
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '85 dB')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 75 dB
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', '85 dB')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 85 dB
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '85 dB')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 83 dB
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q124</span>
        Bekerja sesuai dengan urutan pelaksanaan pekerjaan termasuk dalam HSE Golden Rules poin:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Patuh pada peraturan, prosedur, dan hukum
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Peduli pada orang lain dan sekitarnya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Melakukan Intervensi terhadap tindakan tidak aman
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Menjaga Integritas Fasilitas/ Asset Perusahaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q125</span>
        Apakah yang menjadi ketentuan penguncian LOTO (Lock Out Tag Out)?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Pemasang harus memegang anak kuncinya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pemasang harus memegang anak kuncinya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemasang harus memegang anak kuncinya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pemilik asset perlu memiliki anak kunci
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemasang harus memegang anak kuncinya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Gembok dan anak kunci harus dimiliki oleh beberapa orang
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemasang harus memegang anak kuncinya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Alat pengunci dapat dibuka oleh siapapun
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q126</span>
        Pengaturan Shift Kerja termasuk kategori dalam Hirarki Pengendalian Risiko?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Administrasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Subtitusi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Administrasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Rekayasa Enjinering
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Administrasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Administrasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Administrasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Eliminasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q127</span>
        Element Nomer 5 Dalam System Management HSSE adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Implementasi dan pengendalian Operasional')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Perencanaan dan Prosedur
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Implementasi dan pengendalian Operasional')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kebijakan dan Sasaran
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Implementasi dan pengendalian Operasional')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Manajemen Risiko
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Implementasi dan pengendalian Operasional')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Implementasi dan pengendalian Operasional
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q128</span>
        Telah melakukan upaya pengelolaan Lingkungan yang dipersyaratkan sesuai dengan ketentuan & atau peraturan perundang-undangan yang berlaku. Adalah peringkat PROPER:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'PROPER BIRU')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> PROPER HIJAU
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'PROPER BIRU')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> PROPER BIRU
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'PROPER BIRU')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> PROPER EMAS
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'PROPER BIRU')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> PROPER MERAH
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q129</span>
        Dalam Audit SUPREME penyajian nilai harus disajikan dengan warna (Color Type). Dibawah ini yang bukan termasuk warna valid (Valid Colour) adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Not Accepable (&lt; 60%)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Not Tolerable (≥60% to 70%)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Not Accepable (&lt; 60%)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Tolerable / Adequate (≥70% to 80%)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Not Accepable (&lt; 60%)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Not Accepable (&lt; 60%)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Not Accepable (&lt; 60%)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Accepable / Fully Adequate (≥80% to 90%)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q130</span>
        Color coding adalah bentuk labelling hasil inspeksi (visual, NDT) pada suatu periode (setiap 6 bulan). Warna Kuning adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Hijau
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kuning
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Biru
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Merah
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q131</span>
        Penggunaan Gas Testing pada pekerjaan Confined Space dilakukan saat:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Berkala sebelum, dan selama aktivitas di Confined Space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Sebelum aktivitas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Berkala sebelum, dan selama aktivitas di Confined Space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Berkala sebelum, dan selama aktivitas di Confined Space
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Berkala sebelum, dan selama aktivitas di Confined Space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pada saat aktivitas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Berkala sebelum, dan selama aktivitas di Confined Space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Sesudah aktivitas
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q132</span>
        Gambar di samping merupakan Tabel? …. (Mengacu pada gambar NFPA Diamond di dokumen asli)
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'NFPA 704')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> NFPA 702
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'NFPA 704')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> NFPA 704
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'NFPA 704')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> API RP 54
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'NFPA 704')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Per. Men. LH 3/2008
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q133</span>
        Warna Biru pada Label MSDS adalah untuk mengidentifikasi bahaya?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bahaya Kesehatan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bahaya Terbakar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bahaya Kesehatan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Bahaya Reaktivitas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bahaya Kesehatan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Bahaya yang bersifat Khusus
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Bahaya Kesehatan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Bahaya Kesehatan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q134</span>
        Oli yang terbakar adalah contoh kebakaran tipe?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kebakaran Tipe D')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Kebakaran tipe A
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Kebakaran Tipe D')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kebakaran Tipe D
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kebakaran Tipe D')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Kebakaran Tipe C
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kebakaran Tipe D')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Kebakaran Tipe B
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q135</span>
        Berikut salah satu contoh Critical Protection adalah?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ESD System')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> SCBA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'ESD System')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> ESD System
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ESD System')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Lock Out Tag Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ESD System')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Personal Gas Detector
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q136</span>
        Suatu sistem yang dirancang untuk mencegah seseorang jatuh, berupa control engineering seperti pagar atau rail guard, adalah pengertian dari:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Fall Prevention')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Fall Protection
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Fall Prevention')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 100 Percent Tie Off
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Fall Prevention')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Fall Prevention
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Fall Prevention')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Fall-Arrest System
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q137</span>
        Jarak aman dari Pagar Lokasi Sumur Produksi ke Jalan Umum (Public Road) sesuai Dasar Hukum Jarak Aman adalah?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', '50 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 50 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '50 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 30 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '50 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 20 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '50 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 25 Meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q138</span>
        Apa nama alat Pelindung diri di atas? (Mengacu pada gambar di dokumen asli)
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Full Body Harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Lanyard
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Full Body Harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Webbing Sling
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Full Body Harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Full Body Harness
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Full Body Harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Tali Safety
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q139</span>
        APAR adalah Alat Pemadam Api Ringan berbentuk tabung yang berisi bahan-bahan tertentu untuk memadamkan api. Berikut isi jenis-jenis APAR, Kecuali...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hydrogen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> CO₂
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hydrogen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Dry Powder
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Hydrogen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Hydrogen
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hydrogen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Foam
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q140</span>
        Standard Internasional mengenai Sistem Manajemen Lingkungan:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ISO 14001 : 2015')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> OHSAS 18001
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'ISO 14001 : 2015')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> ISO 14001 : 2015
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ISO 14001 : 2015')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> ISO 9001 : 2015
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ISO 14001 : 2015')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> ISO 14001 : 2016
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q141</span>
        Kepanjangan dari LOTO adalah?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Lock Out Tagline Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Lock Out Tag Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Log Out Tag Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Log Out Tagline Out
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q142</span>
        Apa kepanjangan PLO yang terkait dengan Asset Integrity?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Persetujuan Layak Operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Prevention Loss Operation
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Persetujuan Layak Operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Persetujuan Layak Operasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Persetujuan Layak Operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Peraturan Lama Operasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Persetujuan Layak Operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Perijinan Layak Operasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q143</span>
        Urutan yang benar dalam pengaplikasian Warna LOTO sesuai fungsi; Mekanik - Electrikal & Instrument - Confined Space – Asset Holder Adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Merah – Biru – Kuning – Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Merah – Putih – Kuning - Biru
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Merah – Biru – Kuning – Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Merah – Biru – Kuning – Putih
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Merah – Biru – Kuning – Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Biru – Putih – Merah - Kuning
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Merah – Biru – Kuning – Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Biru – Merah – Putih - Kuning
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q144</span>
        Gambar di samping adalah Logo Corporate Life saving Rules (CLSR) untuk: (Mengacu pada ikon di dokumen asli)
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Permit To Work')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Asset Integrity
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Permit To Work')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Confined Space
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Permit To Work')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Isolation
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Permit To Work')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Permit To Work
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q145</span>
        Penggalian (Excavation) memerlukan perencanaan / Mitigasi mulai dikedalaman minimal?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '1,2 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 1,5 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '1,2 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 1,8 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', '1,2 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 1,2 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '1,2 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 2 Meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q146</span>
        Sumber energi yang dapat menimbulkan kecelakaan kerja, sehingga memerlukan LOTO dalam pengerjaannya yaitu energi:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'A, B dan C Benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'A, B dan C Benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mekanik Hidrolik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'A, B dan C Benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pnuematic
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'A, B dan C Benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> A, B dan C Benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q147</span>
        Saat terjadi keadaan darurat di Lapangan/Field tim manakah yang melakukan Langkah taktis di Lokasi agar Insiden dapat secara langsung ditanggulangi..?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'SERT (Site Emergency Response Team)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> CMT (Crisis Management Team)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'SERT (Site Emergency Response Team)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> BST (Business Support Team)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'SERT (Site Emergency Response Team)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> IMT (Incident Management Team)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'SERT (Site Emergency Response Team)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> SERT (Site Emergency Response Team)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q148</span>
        Safety Shower / Eye Wash harus diletakkan berapa meter dari potensi bahaya?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '3 – 15 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 5 – 15 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '3 – 15 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 10 – 25 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', '3 – 15 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 3 – 15 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '3 – 15 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 7 – 15 meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q149</span>
        Corporate Life Saving Rules (CLSR) yang di gunakan oleh Subholding Upstream PHE yaitu 15 CLSR. 12 CLSR dari Pertamina Persero (Corporate) & 3 CLSR tambahan dari PHE. Dibawah ini yang merupakan 3 Elemen CLSR tambahan dari PHE adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Isolation, Tools & Equipment, & Management of Change')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Ground Disturbance, Asset Integrity & Safe Zone Position
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Isolation, Tools & Equipment, & Management of Change')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Isolation, Tools & Equipment, & Management of Change
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Isolation, Tools & Equipment, & Management of Change')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Ground Disturbance, Personal Flotation Device & System Override
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Isolation, Tools & Equipment, & Management of Change')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Hot Work, Ground Disturbance & Management of Change
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
</div>

<script>
window.checkAnswer = function(btn, isCorrect, explanation, correctExt) {
    let parent = btn.parentElement;
    let feedback = parent.nextElementSibling;
    let buttons = parent.querySelectorAll('.opt-btn');
    
    // disable all
    buttons.forEach(b => {
        b.style.pointerEvents = 'none';
        b.style.opacity = '0.6';
    });
    
    btn.style.opacity = '1';
    
    if(isCorrect) {
        btn.style.background = 'rgba(34, 197, 94, 0.2)';
        btn.style.borderColor = '#22c55e';
        feedback.style.background = 'rgba(34, 197, 94, 0.1)';
        feedback.style.borderLeft = '4px solid #22c55e';
        feedback.style.color = '#22c55e';
        feedback.innerHTML = '<strong>✅ TEPAT SEKALI!</strong><br><span style="color:var(--text-muted);">' + explanation + '</span>';
    } else {
        btn.style.background = 'rgba(239, 68, 68, 0.2)';
        btn.style.borderColor = '#ef4444';
        feedback.style.background = 'rgba(239, 68, 68, 0.1)';
        feedback.style.borderLeft = '4px solid #ef4444';
        feedback.style.color = '#ef4444';
        feedback.innerHTML = '<strong>❌ KURANG TEPAT!</strong><br><span style="color:var(--text-muted);">Jawaban yang benar adalah opsi dengan teks: <b>' + correctExt + '</b><br>Keterangan: ' + explanation + '</span>';
    }
    feedback.style.display = 'block';
}
</script>

`
  }

];
