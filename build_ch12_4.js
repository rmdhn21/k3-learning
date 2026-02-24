const fs = require('fs');

const ch12ContentPart4 = `
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
`;

fs.writeFileSync('injector_ch12_part4.js', ch12ContentPart4);
console.log('Successfully wrote chapter 12 part 4');
