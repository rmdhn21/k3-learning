const fs = require('fs');

const ch12Content = `  {
    id: 'ch12', num: 12, title: '50 Studi Kasus K3', badge: 'badge-purple',
    desc: 'Melatih kemampuan analisa K3 di RIG dengan 50 soal cerita dan studi kasus komprehensif.',
    icon: '🕵️',
    html: \`
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
</div>\`
  }
`;

fs.writeFileSync('chapters.js', 'dummy');
