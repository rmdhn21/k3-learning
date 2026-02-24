const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

// Find chapter 7
const ch7Start = code.indexOf("{", code.indexOf("id: 'ch7'"));
const ch8Start = code.indexOf("{", code.indexOf("id: 'ch8'"));

const head = code.substring(0, ch7Start);
const tail = code.substring(ch8Start);

const ch7Content = `  {
    id: 'ch7', num: 7, title: 'Surat Izin Kerja Aman', badge: 'badge-green',
    desc: 'Sistem permit to work untuk pengendalian pekerjaan berbahaya.',
    icon: '📋',
    html: \`
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
</div>\`
  },
`;

fs.writeFileSync('chapters.js', head + ch7Content + tail);
console.log('Successfully updated chapter 7');
