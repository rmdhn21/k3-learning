const fs = require('fs');

let code = fs.readFileSync('chapters.js', 'utf8');

const ch12ContentPart1 = `  {
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
`;

fs.writeFileSync('injector_ch12_part1.js', ch12ContentPart1);
console.log('Successfully wrote chapter 12 part 1');
