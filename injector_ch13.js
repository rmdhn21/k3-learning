const fs = require('fs');

const ch13Content = `  {
    id: 'ch13', num: 13, title: 'Podcast Audio K3', badge: 'badge-blue',
    desc: 'Dengarkan rangkuman eksklusif seluruh materi K3 secara audio (offline) untuk menemani perjalanan Anda.',
    icon: '🎧',
    html: \`
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
\`
  },
`;

fs.writeFileSync('injector_ch13.js', ch13Content);
console.log('Successfully wrote injector_ch13.js');
