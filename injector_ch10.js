const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

// Find chapter 10
const ch10Start = code.indexOf("{", code.indexOf("id: 'ch10'"));

const head = code.substring(0, ch10Start);

const ch10Content = `  {
    id: 'ch10', num: 10, title: 'Segitiga API', badge: 'badge-red',
    desc: 'Teori termodinamika kebakaran dan klasifikasi elemen dasar pembakaran.',
    icon: '🔥',
    html: \`
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
</div>\`
  }
];
`;

fs.writeFileSync('chapters.js', head + ch10Content);
console.log('Successfully updated chapter 10');
