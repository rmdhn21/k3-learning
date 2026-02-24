// K3 Learning - Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Mermaid
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark', themeVariables: {
      primaryColor: '#f97316', primaryTextColor: '#fff', primaryBorderColor: '#f97316',
      lineColor: '#64748b', secondaryColor: '#3b82f6', tertiaryColor: '#111827',
      fontSize: '14px'
    }
  });

  const state = {
    currentSection: 'home',
    completedChapters: JSON.parse(localStorage.getItem('k3_completed') || '[]'),
    quizIndex: 0,
    quizAnswers: [],
    quizSubmitted: false,
    shuffledQuiz: []
  };

  // DOM Elements
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('sidebarOverlay');
  const chaptersGrid = document.getElementById('chaptersGrid');
  const chaptersContainer = document.getElementById('chaptersContainer');
  const navItems = document.querySelectorAll('.nav-item[data-section]');
  const quizBtn = document.querySelector('.nav-quiz-btn');

  // Build chapter cards on home page
  function buildHomeCards() {
    chaptersGrid.innerHTML = CHAPTERS.map(ch => `
      <div class="chapter-card" data-goto="${ch.id}">
        <div class="card-number">${ch.num}</div>
        <div class="card-title">${ch.title}</div>
        <div class="card-desc">${ch.desc}</div>
        <div class="card-tag">${ch.icon} Pelajari →</div>
      </div>
    `).join('');
    chaptersGrid.querySelectorAll('.chapter-card').forEach(card => {
      card.addEventListener('click', () => navigateTo(card.dataset.goto));
    });
  }

  // Build chapter sections dynamically
  function buildChapterSections() {
    chaptersContainer.innerHTML = CHAPTERS.map((ch, i) => {
      const prevId = i > 0 ? CHAPTERS[i - 1].id : null;
      const nextId = i < CHAPTERS.length - 1 ? CHAPTERS[i + 1].id : null;
      return `
        <div class="section" id="${ch.id}">
          ${ch.html}
          <div class="chapter-nav">
            ${prevId ? `<button class="chapter-nav-btn prev" data-goto="${prevId}">← Bab ${i}</button>` : '<div></div>'}
            ${nextId ? `<button class="chapter-nav-btn next" data-goto="${nextId}">Bab ${i + 2} →</button>` : `<button class="chapter-nav-btn next" data-goto="quiz">📝 Mulai Kuis →</button>`}
          </div>
        </div>
      `;
    }).join('');

    // Only re-render mermaid in the active section (others have display: none which breaks rendering)
    setTimeout(() => {
      const activeSection = document.querySelector('.section.active');
      if (activeSection) {
        const mermaidEls = activeSection.querySelectorAll('.mermaid:not([data-processed="true"])');
        if (mermaidEls.length > 0) {
          mermaid.run({ nodes: Array.from(mermaidEls) }).catch(e => {
            console.warn('Mermaid initial rendering error:', e);
          });
        }
      }
    }, 100);

    // Nav buttons in chapters
    chaptersContainer.querySelectorAll('.chapter-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => navigateTo(btn.dataset.goto));
    });
  }

  // Navigate
  function navigateTo(sectionId) {
    // Mark previous chapter as completed
    if (state.currentSection.startsWith('ch') && !state.completedChapters.includes(state.currentSection)) {
      state.completedChapters.push(state.currentSection);
      localStorage.setItem('k3_completed', JSON.stringify(state.completedChapters));
    }

    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    // Show target
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add('active');
      // Re-render mermaid for newly visible section
      const mermaidEls = target.querySelectorAll('.mermaid:not([data-processed="true"])');
      if (mermaidEls.length > 0) {
        setTimeout(() => {
          mermaid.run({ nodes: Array.from(mermaidEls) }).catch(e => {
            console.warn('Mermaid rendering error:', e);
          });
        }, 50);
      }
    }

    state.currentSection = sectionId;
    updateNav();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile sidebar
    sidebar.classList.remove('open');
    overlay.classList.remove('open');

    // Init quiz if needed
    if (sectionId === 'quiz' && state.shuffledQuiz.length === 0) initQuiz();
  }

  // Update navigation active state
  function updateNav() {
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.dataset.section === state.currentSection) item.classList.add('active');
      // Mark completed
      if (state.completedChapters.includes(item.dataset.section)) item.classList.add('completed');
    });
  }

  // Update progress bar
  function updateProgress() {
    const pct = Math.round((state.completedChapters.length / 10) * 100);
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressPercent').textContent = pct + '%';
  }

  // Sidebar navigation clicks
  navItems.forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.section));
  });
  quizBtn.addEventListener('click', () => navigateTo('quiz'));

  // Mobile menu
  menuToggle.addEventListener('click', () => { sidebar.classList.toggle('open'); overlay.classList.toggle('open'); });
  overlay.addEventListener('click', () => { sidebar.classList.remove('open'); overlay.classList.remove('open'); });

  // ===== QUIZ ENGINE =====
  function initQuiz() {
    state.shuffledQuiz = [...QUIZ_DATA].sort(() => Math.random() - 0.5);
    state.quizAnswers = new Array(state.shuffledQuiz.length).fill(-1);
    state.quizIndex = 0;
    state.quizSubmitted = false;
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    if (state.quizSubmitted) return;
    const q = state.shuffledQuiz[state.quizIndex];
    const total = state.shuffledQuiz.length;
    const idx = state.quizIndex;
    const selected = state.quizAnswers[idx];

    document.getElementById('quizProgressFill').style.width = ((idx + 1) / total * 100) + '%';
    document.getElementById('quizProgressText').textContent = `${idx + 1}/${total}`;

    const content = document.getElementById('quizContent');
    content.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-question-num">Soal ${idx + 1} dari ${total} — Bab ${q.ch}</div>
        <div class="quiz-question">${q.q}</div>
        <div class="quiz-options">
          ${q.o.map((opt, oi) => `
            <div class="quiz-option ${selected === oi ? 'selected' : ''}" data-idx="${oi}">
              <div class="option-letter">${'ABCD'[oi]}</div>
              <div>${opt}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Option click
    content.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', () => {
        state.quizAnswers[idx] = parseInt(opt.dataset.idx);
        renderQuizQuestion();
      });
    });

    // Actions
    const actions = document.getElementById('quizActions');
    actions.style.display = 'flex';
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    btnPrev.style.visibility = idx > 0 ? 'visible' : 'hidden';

    if (idx === total - 1) {
      btnNext.textContent = '✅ Selesai & Lihat Hasil';
      btnNext.onclick = () => submitQuiz();
    } else {
      btnNext.textContent = 'Selanjutnya →';
      btnNext.onclick = () => { state.quizIndex++; renderQuizQuestion(); };
    }
    btnPrev.onclick = () => { if (idx > 0) { state.quizIndex--; renderQuizQuestion(); } };
  }

  function submitQuiz() {
    state.quizSubmitted = true;
    let correct = 0;
    state.shuffledQuiz.forEach((q, i) => { if (state.quizAnswers[i] === q.a) correct++; });
    const total = state.shuffledQuiz.length;
    const pct = Math.round((correct / total) * 100);

    let msg = '', emoji = '';
    if (pct >= 90) { msg = 'Luar Biasa! 🏆'; emoji = '🎉'; }
    else if (pct >= 70) { msg = 'Bagus Sekali! 👏'; emoji = '💪'; }
    else if (pct >= 50) { msg = 'Cukup Baik 👍'; emoji = '📖'; }
    else { msg = 'Perlu Belajar Lagi 📚'; emoji = '💡'; }

    const content = document.getElementById('quizContent');
    content.innerHTML = `
      <div class="quiz-results">
        <div class="results-score">
          <div class="score-value">${pct}%</div>
          <div class="score-total">${correct} dari ${total}</div>
        </div>
        <div class="results-message">${emoji} ${msg}</div>
        <div class="results-detail">Anda menjawab ${correct} soal dengan benar dari total ${total} soal.</div>
        <div class="results-breakdown">
          <div class="breakdown-item breakdown-correct"><div class="breakdown-num">${correct}</div><div class="breakdown-label">Benar</div></div>
          <div class="breakdown-item breakdown-wrong"><div class="breakdown-num">${total - correct}</div><div class="breakdown-label">Salah</div></div>
          <div class="breakdown-item"><div class="breakdown-num">${pct}%</div><div class="breakdown-label">Skor</div></div>
        </div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary" id="btnReview">📋 Review Jawaban</button>
          <button class="btn btn-secondary" id="btnRetry">🔄 Ulangi Kuis</button>
          <button class="btn btn-secondary" id="btnBackHome">🏠 Kembali ke Beranda</button>
        </div>
      </div>
    `;

    document.getElementById('quizActions').style.display = 'none';
    document.getElementById('btnRetry').onclick = () => { state.shuffledQuiz = []; initQuiz(); };
    document.getElementById('btnBackHome').onclick = () => navigateTo('home');
    document.getElementById('btnReview').onclick = () => renderReview();
  }

  function renderReview() {
    const content = document.getElementById('quizContent');
    let html = '<h3 style="margin-bottom:20px;text-align:center;">📋 Review Jawaban</h3>';
    state.shuffledQuiz.forEach((q, i) => {
      const userAns = state.quizAnswers[i];
      const isCorrect = userAns === q.a;
      html += `
        <div class="quiz-card">
          <div class="quiz-question-num" style="color:${isCorrect ? '#22c55e' : '#ef4444'}">
            ${isCorrect ? '✅ Benar' : '❌ Salah'} — Soal ${i + 1} (Bab ${q.ch})
          </div>
          <div class="quiz-question">${q.q}</div>
          <div class="quiz-options">
            ${q.o.map((opt, oi) => {
        let cls = '';
        if (oi === q.a) cls = 'correct';
        else if (oi === userAns && !isCorrect) cls = 'wrong';
        return `<div class="quiz-option ${cls}"><div class="option-letter">${'ABCD'[oi]}</div><div>${opt}</div></div>`;
      }).join('')}
          </div>
          <div class="quiz-explanation show">💡 ${q.e}</div>
        </div>
      `;
    });
    html += `<div style="text-align:center;margin-top:20px;">
      <button class="btn btn-primary" id="btnRetry2">🔄 Ulangi Kuis</button>
      <button class="btn btn-secondary" id="btnBackHome2" style="margin-left:12px;">🏠 Beranda</button>
    </div>`;
    content.innerHTML = html;
    document.getElementById('btnRetry2').onclick = () => { state.shuffledQuiz = []; initQuiz(); };
    document.getElementById('btnBackHome2').onclick = () => navigateTo('home');
  }

  // ===== INIT =====
  buildHomeCards();
  buildChapterSections();
  updateProgress();
  updateNav();
});

// Global function for Chapter 15 Interactive Quiz
window.checkAnswer = function (btn, isCorrect, explanation, correctExt) {
  let parent = btn.parentElement;
  let feedback = parent.nextElementSibling;
  let buttons = parent.querySelectorAll('.opt-btn');

  // disable all options in this group
  buttons.forEach(b => {
    b.style.pointerEvents = 'none';
    b.style.opacity = '0.6';
  });

  btn.style.opacity = '1';

  if (isCorrect) {
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
};

