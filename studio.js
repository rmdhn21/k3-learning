// K3 Learning - Studio Panel Logic (NotebookLM-style)
(function () {
    let currentChapterId = null;
    let currentTab = 'mindmap';
    let currentCard = 0;
    let quizAnswers = {};
    let quizSubmitted = false;

    // ===== Create Studio Modal =====
    function createStudioModal() {
        const modal = document.createElement('div');
        modal.id = 'studioModal';
        modal.className = 'studio-modal';
        modal.innerHTML = `
            <div class="studio-panel">
                <div class="studio-header">
                    <div class="studio-header-left">
                        <span class="studio-icon">🎓</span>
                        <span class="studio-label">Studio</span>
                        <span class="studio-chapter-title" id="studioChapterTitle"></span>
                    </div>
                    <button class="studio-close" id="studioClose" aria-label="Close Studio">✕</button>
                </div>
                <div class="studio-tabs" id="studioTabs">
                    <button class="studio-tab active" data-tab="mindmap">
                        <span class="studio-tab-icon">🧠</span>
                        <span class="studio-tab-text">Peta Pikiran</span>
                    </button>
                    <button class="studio-tab" data-tab="flashcards">
                        <span class="studio-tab-icon">🃏</span>
                        <span class="studio-tab-text">Kartu Tanya</span>
                    </button>
                    <button class="studio-tab" data-tab="quiz">
                        <span class="studio-tab-icon">📝</span>
                        <span class="studio-tab-text">Kuis Bab</span>
                    </button>
                    <button class="studio-tab" data-tab="summary">
                        <span class="studio-tab-icon">📋</span>
                        <span class="studio-tab-text">Ringkasan</span>
                    </button>
                    <button class="studio-tab" data-tab="infographic">
                        <span class="studio-tab-icon">📊</span>
                        <span class="studio-tab-text">Infografis</span>
                    </button>
                </div>
                <div class="studio-content" id="studioContent"></div>
            </div>
        `;
        document.body.appendChild(modal);

        // Close events
        document.getElementById('studioClose').addEventListener('click', closeStudio);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeStudio();
        });

        // Tab events
        document.getElementById('studioTabs').addEventListener('click', (e) => {
            const tab = e.target.closest('.studio-tab');
            if (!tab) return;
            document.querySelectorAll('.studio-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentTab = tab.dataset.tab;
            renderTab();
        });
    }

    // ===== Open / Close Studio =====
    window.openStudio = function (chapterId) {
        currentChapterId = chapterId;
        currentCard = 0;
        quizAnswers = {};
        quizSubmitted = false;
        currentTab = 'mindmap';

        const data = STUDIO_DATA[chapterId];
        if (!data) return;

        document.getElementById('studioChapterTitle').textContent = data.title;
        document.querySelectorAll('.studio-tab').forEach(t => t.classList.remove('active'));
        document.querySelector('.studio-tab[data-tab="mindmap"]').classList.add('active');

        const modal = document.getElementById('studioModal');
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        renderTab();
    };

    function closeStudio() {
        const modal = document.getElementById('studioModal');
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ===== Render Current Tab =====
    function renderTab() {
        const container = document.getElementById('studioContent');
        const data = STUDIO_DATA[currentChapterId];
        if (!data) return;

        switch (currentTab) {
            case 'mindmap': renderMindMap(container, data); break;
            case 'flashcards': renderFlashcards(container, data); break;
            case 'quiz': renderQuiz(container, data); break;
            case 'summary': renderSummary(container, data); break;
            case 'infographic': renderInfographic(container, data); break;
        }
    }

    // ===== Mind Map =====
    function renderMindMap(container, data) {
        const id = 'studio-mermaid-' + Date.now();
        container.innerHTML = `
            <div class="studio-mindmap">
                <div class="studio-section-title">
                    <span class="icon">🧠</span> Peta Pikiran - ${data.title}
                </div>
                <div class="studio-mermaid-wrap">
                    <div class="mermaid" id="${id}">${data.mindMap}</div>
                </div>
            </div>
        `;
        // Re-render Mermaid mind maps
        setTimeout(() => {
            const mermaidEls = container.querySelectorAll('.mermaid:not([data-processed="true"])');
            if (mermaidEls.length > 0) {
                mermaid.run({ nodes: Array.from(mermaidEls) }).catch(e => {
                    console.warn('Mermaid rendering error in studio:', e);
                });
            }
        }, 100);
    }

    // ===== Flashcards =====
    function renderFlashcards(container, data) {
        const cards = data.flashcards;
        const card = cards[currentCard];
        container.innerHTML = `
            <div class="studio-flashcards">
                <div class="studio-section-title">
                    <span class="icon">🃏</span> Kartu Tanya - ${data.title}
                </div>
                <div class="fc-counter">${currentCard + 1} / ${cards.length}</div>
                <div class="fc-card" id="fcCard" onclick="document.getElementById('fcCard').classList.toggle('flipped')">
                    <div class="fc-card-inner">
                        <div class="fc-front">
                            <div class="fc-label">PERTANYAAN</div>
                            <div class="fc-text">${card.front}</div>
                            <div class="fc-hint">Klik untuk lihat jawaban</div>
                        </div>
                        <div class="fc-back">
                            <div class="fc-label">JAWABAN</div>
                            <div class="fc-text">${card.back}</div>
                            <div class="fc-hint">Klik untuk kembali</div>
                        </div>
                    </div>
                </div>
                <div class="fc-nav">
                    <button class="fc-btn" id="fcPrev" ${currentCard === 0 ? 'disabled' : ''}>← Sebelumnya</button>
                    <button class="fc-btn" id="fcNext" ${currentCard === cards.length - 1 ? 'disabled' : ''}>Selanjutnya →</button>
                </div>
                <div class="fc-dots">
                    ${cards.map((_, i) => `<span class="fc-dot ${i === currentCard ? 'active' : ''}" data-i="${i}"></span>`).join('')}
                </div>
            </div>
        `;
        document.getElementById('fcPrev').addEventListener('click', () => { if (currentCard > 0) { currentCard--; renderFlashcards(container, data); } });
        document.getElementById('fcNext').addEventListener('click', () => { if (currentCard < cards.length - 1) { currentCard++; renderFlashcards(container, data); } });
        container.querySelectorAll('.fc-dot').forEach(dot => {
            dot.addEventListener('click', () => { currentCard = parseInt(dot.dataset.i); renderFlashcards(container, data); });
        });
    }

    // ===== Quiz =====
    function renderQuiz(container, data) {
        const questions = data.quiz;
        if (quizSubmitted) {
            renderQuizResults(container, data);
            return;
        }
        container.innerHTML = `
            <div class="studio-quiz">
                <div class="studio-section-title">
                    <span class="icon">📝</span> Kuis Bab - ${data.title}
                </div>
                <div class="sq-questions">
                    ${questions.map((q, i) => `
                        <div class="sq-question">
                            <div class="sq-q-number">Soal ${i + 1}</div>
                            <div class="sq-q-text">${q.question}</div>
                            <div class="sq-options">
                                ${q.options.map((opt, j) => `
                                    <label class="sq-option ${quizAnswers[i] === j ? 'selected' : ''}">
                                        <input type="radio" name="sq-${i}" value="${j}" ${quizAnswers[i] === j ? 'checked' : ''}>
                                        <span class="sq-option-letter">${String.fromCharCode(65 + j)}</span>
                                        <span class="sq-option-text">${opt}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="sq-submit" id="sqSubmit">📊 Lihat Hasil</button>
            </div>
        `;
        // Listen for option selection
        container.querySelectorAll('input[type="radio"]').forEach(input => {
            input.addEventListener('change', (e) => {
                const idx = parseInt(e.target.name.split('-')[1]);
                quizAnswers[idx] = parseInt(e.target.value);
                // Update visual
                const parent = e.target.closest('.sq-options');
                parent.querySelectorAll('.sq-option').forEach(o => o.classList.remove('selected'));
                e.target.closest('.sq-option').classList.add('selected');
            });
        });
        document.getElementById('sqSubmit').addEventListener('click', () => {
            if (Object.keys(quizAnswers).length < questions.length) {
                alert('Jawab semua soal terlebih dahulu!');
                return;
            }
            quizSubmitted = true;
            renderQuizResults(container, data);
        });
    }

    function renderQuizResults(container, data) {
        const questions = data.quiz;
        let correct = 0;
        questions.forEach((q, i) => { if (quizAnswers[i] === q.answer) correct++; });
        const pct = Math.round((correct / questions.length) * 100);
        const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
        const msg = pct >= 80 ? 'Luar Biasa!' : pct >= 60 ? 'Lumayan!' : 'Perlu Belajar Lagi';

        container.innerHTML = `
            <div class="studio-quiz">
                <div class="studio-section-title">
                    <span class="icon">📝</span> Hasil Kuis - ${data.title}
                </div>
                <div class="sq-result-card">
                    <div class="sq-result-emoji">${emoji}</div>
                    <div class="sq-result-score">${correct}/${questions.length}</div>
                    <div class="sq-result-pct">${pct}%</div>
                    <div class="sq-result-msg">${msg}</div>
                    <div class="sq-result-bar">
                        <div class="sq-result-bar-fill" style="width:${pct}%;background:${pct >= 80 ? 'var(--accent-green)' : pct >= 60 ? 'var(--accent-orange)' : '#ef4444'}"></div>
                    </div>
                </div>
                <div class="sq-review">
                    ${questions.map((q, i) => {
            const isCorrect = quizAnswers[i] === q.answer;
            return `
                        <div class="sq-review-item ${isCorrect ? 'correct' : 'wrong'}">
                            <div class="sq-review-header">
                                <span class="sq-review-icon">${isCorrect ? '✅' : '❌'}</span>
                                <span class="sq-review-q">Soal ${i + 1}: ${q.question}</span>
                            </div>
                            <div class="sq-review-answer">
                                ${!isCorrect ? `<div class="sq-your-answer">Jawaban Anda: <strong>${q.options[quizAnswers[i]]}</strong></div>` : ''}
                                <div class="sq-correct-answer">Jawaban Benar: <strong>${q.options[q.answer]}</strong></div>
                            </div>
                            <div class="sq-explanation">${q.explanation}</div>
                        </div>
                    `;
        }).join('')}
                </div>
                <button class="sq-submit" id="sqRetry">🔄 Coba Lagi</button>
            </div>
        `;
        document.getElementById('sqRetry').addEventListener('click', () => {
            quizAnswers = {};
            quizSubmitted = false;
            renderQuiz(container, data);
        });
    }

    // ===== Summary =====
    function renderSummary(container, data) {
        container.innerHTML = `
            <div class="studio-summary">
                <div class="studio-section-title">
                    <span class="icon">📋</span> Ringkasan - ${data.title}
                </div>
                <div class="ss-list">
                    ${data.summary.map((point, i) => `
                        <div class="ss-item" style="animation-delay:${i * 0.08}s">
                            <div class="ss-bullet">${i + 1}</div>
                            <div class="ss-text">${point}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="ss-tip">
                    <div class="ss-tip-icon">💡</div>
                    <div class="ss-tip-text">Gunakan fitur <strong>Kartu Tanya</strong> untuk menghafal poin-poin di atas, lalu uji pemahaman dengan <strong>Kuis Bab</strong>!</div>
                </div>
            </div>
        `;
    }

    // ===== Infographic =====
    function renderInfographic(container, data) {
        container.innerHTML = `
            <div class="studio-infographic">
                <div class="studio-section-title">
                    <span class="icon">📊</span> Infografis - ${data.title}
                </div>
                <div class="si-grid">
                    ${data.infographic.map((item, i) => `
                        <div class="si-card" style="animation-delay:${i * 0.1}s">
                            <div class="si-card-icon">${item.icon}</div>
                            <div class="si-card-value">${item.value}</div>
                            <div class="si-card-label">${item.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // ===== Inject Studio Buttons into Chapter Sections =====
    function injectStudioButtons() {
        document.querySelectorAll('.section[id^="ch"]').forEach(section => {
            const chId = section.id;
            if (!STUDIO_DATA[chId]) return;
            // Don't add twice
            if (section.querySelector('.studio-btn-container')) return;

            const header = section.querySelector('.section-header');
            if (!header) return;

            const btnContainer = document.createElement('div');
            btnContainer.className = 'studio-btn-container';
            btnContainer.innerHTML = `
                <button class="studio-open-btn" onclick="openStudio('${chId}')">
                    <span class="studio-open-icon">🎓</span>
                    <span class="studio-open-text">Studio</span>
                    <span class="studio-open-features">Peta Pikiran • Kartu Tanya • Kuis • Ringkasan • Infografis</span>
                </button>
            `;
            header.insertAdjacentElement('afterend', btnContainer);
        });
    }

    // ===== Init =====
    createStudioModal();

    // Wait for chapters to be built then inject buttons
    const observer = new MutationObserver(() => {
        if (document.querySelector('.section[id="ch1"]')) {
            injectStudioButtons();
            observer.disconnect();
        }
    });
    observer.observe(document.getElementById('chaptersContainer') || document.body, { childList: true, subtree: true });

    // Also try immediate injection
    setTimeout(injectStudioButtons, 200);

    // Handle Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeStudio();
    });
})();
