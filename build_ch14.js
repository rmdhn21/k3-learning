const fs = require('fs');
const questionsPart1 = require('./build_ch14_1.js');
const questionsPart2 = require('./build_ch14_2.js');

const allQuestions = [...questionsPart1, ...questionsPart2];

let htmlContent = `
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
`;

allQuestions.forEach((q, index) => {
  htmlContent += `
    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">${index + 1}</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">${q.q}</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">${q.a}</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> ${q.expl}</p>
        </div>
      </div>
    </details>
`;
});

htmlContent += `
  </div>
</div>

<div class="alert alert-success" style="margin-top: 40px;">
  <div class="alert-icon">🏆</div>
  <div class="alert-content">
    <div class="alert-title">Luar Biasa!</div>
    <div class="alert-text">Jika Anda mampu menjawab sebagian besar simulasi hardcore di atas dengan benar, Anda 100% siap diturunkan ke lapangan RIG manapun di seluruh dunia!</div>
  </div>
</div>
`;

let finalJSContent = "const ch14Content = `  {\n";
finalJSContent += "    id: 'ch14', num: 14, title: '50 Soal Hardcore (Exam)', badge: 'badge-red',\n";
finalJSContent += "    desc: 'Simulasi setara ujian akhir HSE tingkat mahir. Menguji parameter logis dan kedalaman insting Anda.',\n";
finalJSContent += "    icon: '🎯',\n";
finalJSContent += "    html: \\`\n";
finalJSContent += htmlContent.replace(/`/g, '\\`') + "\n";
finalJSContent += "\\`\n  }\n`;\n\n";
finalJSContent += "fs.writeFileSync('chapters.js', 'dummy');\n";

fs.writeFileSync('injector_ch14.js', finalJSContent);
console.log('Successfully wrote injector_ch14.js with ' + allQuestions.length + ' hardcore questions.');
