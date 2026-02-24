const fs = require('fs');

const text = fs.readFileSync('soal dari internet.txt', 'utf8');
const lines = text.split('\n').map(l => l.trim());

// 1. EXTRACT QUESTIONS
let questions = [];
let i = 0;
while (i < lines.length) {
    if (lines[i].match(/^[aA][\.\)]\s/)) {
        let qLines = [];
        let j = i - 1;
        let stopWords = ["KUNCI JAWABAN", "SOAL UJIAN", "SOAL HSSE", "POST TEST", "REFERENSI JAWABAN", "PETUNJUK", "KERJAKANLAH"];
        while (j >= 0) {
            let prev = lines[j];
            if (prev === "") { j--; continue; }
            if (prev.match(/^[dDeE][\.\)]\s/)) break;
            let stop = false;
            for (let sw of stopWords) { if (prev.includes(sw)) stop = true; }
            if (stop) break;
            qLines.unshift(prev);
            j--;
        }
        let qText = qLines.join(" ").trim();
        qText = qText.replace(/^[0-9]+\.\s*/, "");
        let options = [];
        let k = i;
        while (k < lines.length && lines[k].match(/^[a-eA-E][\.\)]\s/)) {
            options.push(lines[k].replace(/^[a-eA-E][\.\)]\s/, "").trim().replace(/</g, "&lt;").replace(/>/g, "&gt;"));
            k++;
        }
        questions.push({ originalQ: qText.replace(/</g, "&lt;").replace(/>/g, "&gt;"), options: options });
        i = k - 1;
    }
    i++;
}

// 2. EXTRACT KEYS (Sections 1, 2, 3)
let answers = new Array(questions.length).fill({ ans: 'A', expl: 'Jawaban yang tepat sesuai materi Basic HSE.' });

let s1_keys = [];
for (let ln of lines) {
    let m = ln.match(/^([A-E])\s*\((.*?)\)$/i);
    if (m && !ln.includes("CLSR")) s1_keys.push({ ans: m[1].toUpperCase(), expl: m[2] });
}
for (let x = 0; x < Math.min(40, s1_keys.length); x++) {
    answers[x] = { ans: s1_keys[x].ans, expl: s1_keys[x].expl };
}

let s2_map = {};
for (let x = 567; x <= 646; x++) {
    let m = lines[x] ? lines[x].match(/^([0-9]+)\.\s*([A-E])$/i) : null;
    if (m) s2_map[parseInt(m[1])] = m[2].toUpperCase();
}
for (let x = 1; x <= 35; x++) {
    if (s2_map[x]) answers[40 + x - 1] = { ans: s2_map[x], expl: 'Kunci Resmi: ' + s2_map[x] };
}

let s3_map = {};
for (let x = 871; x <= 918; x++) {
    let m = lines[x] ? lines[x].match(/^([0-9]+)\.\s*([A-E])\s*\((.*?)\)$/i) : null;
    if (m) s3_map[parseInt(m[1])] = { ans: m[2].toUpperCase(), expl: m[3] };
}
for (let x = 1; x <= 34; x++) {
    if (s3_map[x] && (75 + x - 1) < questions.length) answers[75 + x - 1] = s3_map[x];
}

let s4_keys = ["B", "C", "A", "B", "A", "C", "C", "A", "B", "D", "A", "D", "D", "C", "A", "A", "C", "D", "B", "C", "A", "B", "B", "D", "B", "B", "C", "A", "C", "C", "B", "B", "B", "B", "D", "C", "D", "D", "C", "B"];
for (let x = 0; x < 40; x++) {
    let idx = 109 + x;
    if (idx < questions.length) {
        answers[idx] = { ans: s4_keys[x], expl: 'Berdasarkan prosedur standar HSE Migas.' };
    }
}

// 3. GENERATE HTML
let htmlContent = `
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
`;

questions.forEach((q, idx) => {
    let ansObj = answers[idx] || { ans: 'A', expl: '' };
    let correctIdx = ansObj.ans.charCodeAt(0) - 65;
    if (correctIdx < 0 || correctIdx >= q.options.length) correctIdx = 0;

    htmlContent += `
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q${idx + 1}</span>
        ${q.originalQ}
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">`;

    q.options.forEach((opt, optIdx) => {
        let isCorrect = (optIdx === correctIdx);
        let ext = ansObj.expl.replace(/"/g, "&quot;").replace(/'/g, "\\\\'");
        let correctExt = q.options[correctIdx].replace(/"/g, "&quot;").replace(/'/g, "\\\\'");
        htmlContent += `
        <button class="opt-btn" onclick="checkAnswer(this, ${isCorrect}, '${ext}', '${correctExt}')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt}
        </button>`;
    });

    htmlContent += `
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>`;
});

htmlContent += `
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
`;

let finalOutput = "const ch15Content = `  {\n";
finalOutput += "    id: 'ch15', num: 15, title: '149 Soal Drill K3', badge: 'badge-blue',\n";
finalOutput += "    desc: 'Latih insting HSE Anda dengan 149 soal kilat interaktif asli dari Basic Safety Training Pertamina.',\n";
finalOutput += "    icon: '⚡',\n";
finalOutput += "    html: \\`\n";
finalOutput += htmlContent.replace(/`/g, '\\`').replace(/\$/g, '\\$') + "\n";
finalOutput += "\\`\n  }\n`;\n\n";

fs.writeFileSync('injector_ch15.js', finalOutput);
console.log('Successfully wrote injector_ch15.js with ' + questions.length + ' interactive questions.');
