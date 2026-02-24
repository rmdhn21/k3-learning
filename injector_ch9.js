const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

// Find chapter 9
const ch9Start = code.indexOf("{", code.indexOf("id: 'ch9'"));
const ch10Start = code.indexOf("{", code.indexOf("id: 'ch10'"));

const head = code.substring(0, ch9Start);
const tail = code.substring(ch10Start);

const ch9Content = `  {
    id: 'ch9', num: 9, title: 'Materi K3', badge: 'badge-orange',
    desc: 'Dasar-dasar Sistem Manajemen Keselamatan dan Kesehatan Kerja (K3) korporat.',
    icon: '📚',
    html: \`
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
</div>\`
  },
`;

fs.writeFileSync('chapters.js', head + ch9Content + tail);
console.log('Successfully updated chapter 9');
