const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

// Find chapter 6
const ch6Start = code.indexOf("{", code.indexOf("id: 'ch6'"));
const ch7Start = code.indexOf("{", code.indexOf("id: 'ch7'"));

const head = code.substring(0, ch6Start);
const tail = code.substring(ch7Start);

const ch6Content = `  {
    id: 'ch6', num: 6, title: 'Bahaya Pekerjaan di RIG', badge: 'badge-cyan',
    desc: 'Berbagai jenis bahaya dan risiko yang ada di lingkungan kerja pengeboran minyak.',
    icon: '🏗️',
    html: \`
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
</div>\`
  },
`;

fs.writeFileSync('chapters.js', head + ch6Content + tail);
console.log('Successfully updated chapter 6');
