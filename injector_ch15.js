const ch15Content = `  {
    id: 'ch15', num: 15, title: '149 Soal Drill K3', badge: 'badge-blue',
    desc: 'Latih insting HSE Anda dengan 149 soal kilat interaktif asli dari Basic Safety Training Pertamina.',
    icon: '⚡',
    html: \`

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

    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q1</span>
        SOAL BASIC HSE TRAINING (PT PERTAMINA EP) Panduan Umum HSE PT Pertamina EP dalam usahannya di bidang Kegiatan Usaha Hulu Minyak dan Gas Bumi memberikan prioritas utama terhadap aspek HSE dengan cara:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengintegrasikan aspek HSE dalam setiap kegiatan', 'Mengintegrasikan aspek HSE dalam setiap kegiatan operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Mendapatkan keuntungan melalui produksi Migas sebesar-besarnya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengintegrasikan aspek HSE dalam setiap kegiatan', 'Mengintegrasikan aspek HSE dalam setiap kegiatan operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengupayakan strategi pencapaian cadangan Migas sebesar-besarnya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengintegrasikan aspek HSE dalam setiap kegiatan', 'Mengintegrasikan aspek HSE dalam setiap kegiatan operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menerapkan teknologi terbaru dalam kegiatan operasi produksi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Mengintegrasikan aspek HSE dalam setiap kegiatan', 'Mengintegrasikan aspek HSE dalam setiap kegiatan operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Mengintegrasikan aspek HSE dalam setiap kegiatan operasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q2</span>
        Kewajiban Pengurus diantaranya:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menunjukkan dan menjelaskan Kondisi dan bahaya yang timbul di tempat kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Menjelaskan alat pengaman dan alat perlindungan yang diharuskan dalam tempat kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> APD bagi tenaga kerja dan cara dan sikap yang aman dalam melaksanakan pekerjaan.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban a, b, c benar', 'Jawaban a, b, c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jawaban a, b, c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q3</span>
        Jarak aman dari sumur pemboran dengan flare stack paling dekat:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter - Sesuai jarak aman standar flare', '90 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 70 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter - Sesuai jarak aman standar flare', '90 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 80 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '90 meter - Sesuai jarak aman standar flare', '90 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 90 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter - Sesuai jarak aman standar flare', '90 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 100 meter (KUPAK)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q4</span>
        PEKA (Pengamatan Keselamatan Kerja) 4. Hal berikut ini yang termasuk dalam unsafe condition :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pengaman yang tidak memadai - Ini kondisi lingkungan', 'Pengaman yang tidak memadai')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pengaman yang tidak memadai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengaman yang tidak memadai - Ini kondisi lingkungan', 'Pengaman yang tidak memadai')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengoperasikan pada kecepatan yang tidak sesuai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengaman yang tidak memadai - Ini kondisi lingkungan', 'Pengaman yang tidak memadai')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengoperasikan alat tanpa otorisasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengaman yang tidak memadai - Ini kondisi lingkungan', 'Pengaman yang tidak memadai')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pengangkatan beban yang tidak sesuai
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q5</span>
        Siapakah yang berhak untuk melakukan tindak lanjut laporan PEKA :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'PIC atau bagian yang ditunjuk', 'Fungsi/divisi/bagian yang telah ditunjuk oleh pengelola PEKA (PIC)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Fungsi HSE
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'PIC atau bagian yang ditunjuk', 'Fungsi/divisi/bagian yang telah ditunjuk oleh pengelola PEKA (PIC)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pengelola PEKA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'PIC atau bagian yang ditunjuk', 'Fungsi/divisi/bagian yang telah ditunjuk oleh pengelola PEKA (PIC)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Komite HSE
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'PIC atau bagian yang ditunjuk', 'Fungsi/divisi/bagian yang telah ditunjuk oleh pengelola PEKA (PIC)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Fungsi/divisi/bagian yang telah ditunjuk oleh pengelola PEKA (PIC)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q6</span>
        The New PEKA online dilengkapi beberapa fitur yang dapat memberikan informasi PEKA antara lain :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Online dashboard dan HSE Golden rules', 'Online dashboard dan HSE Golden rules')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> List PEKA dan SMHSE
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Online dashboard dan HSE Golden rules', 'Online dashboard dan HSE Golden rules')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Online dashboard dan HSE Golden rules
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Online dashboard dan HSE Golden rules', 'Online dashboard dan HSE Golden rules')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Notifikasi melalui email kepada PIC
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Online dashboard dan HSE Golden rules', 'Online dashboard dan HSE Golden rules')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Online dashboard dan SMHSE
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q7</span>
        JSA (Job Safety Analysis) 7. Sebutkan kepanjangan dari JSA
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Job Safety Analysis', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Job Safety Analysis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Job Safety Analysis', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Job Security Action
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Job Safety Analysis', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Job Safety and Security Action
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Job Safety Analysis', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Job Safety Action
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q8</span>
        Berikut adalah manfaat yang dapat diambil dari JSA, kecuali
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Agar jelas memberi hukuman - JSA bukan untuk menghukum', 'Agar jelas kepada siapa nantinya diberikan hukuman bila terjadi kecelakaan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Mengkaji prosedur kerja setelah terjadinya suatu kecelakaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Agar jelas memberi hukuman - JSA bukan untuk menghukum', 'Agar jelas kepada siapa nantinya diberikan hukuman bila terjadi kecelakaan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memberikan ‘pre-job instruction on irregular jobs’
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Agar jelas memberi hukuman - JSA bukan untuk menghukum', 'Agar jelas kepada siapa nantinya diberikan hukuman bila terjadi kecelakaan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menyediakan petunjuk kerja yang konsisten untuk keperluan orientasi, training dan retraining pekerja baru, pindahan dan pekerja lama
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Agar jelas memberi hukuman - JSA bukan untuk menghukum', 'Agar jelas kepada siapa nantinya diberikan hukuman bila terjadi kecelakaan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Agar jelas kepada siapa nantinya diberikan hukuman bila terjadi kecelakaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q9</span>
        Berikut merupakan hierarki (dari yang tertinggi) pengendalian resiko bahaya berdasar OHSAS 18001 : 2008, yaitu
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, administrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Adminstrasi, eliminasi, subtitusi, rekayasa engineering, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, administrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> APD, rekayasa engineering, subtitusi, adminstrasi, eliminasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Eliminasi, subtitusi, rekayasa engineering, administrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, administrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Rekayasa engineering, admnistrasi, APD, eliminasi, subtitusi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q10</span>
        SIKA (Surat Izin Kerja Aman) 10. Pengawas pekerjaan dari dalam atau luar fungsi di lingkungan PT. Pertamina EP, di dalam formulir SIKA disebut ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemegang ijin - Orang lapangan/kontraktor yang mengerjakan', 'Pemegang ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Peminta ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemegang ijin - Orang lapangan/kontraktor yang mengerjakan', 'Pemegang ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pemberi ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pemegang ijin - Orang lapangan/kontraktor yang mengerjakan', 'Pemegang ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pemegang ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemegang ijin - Orang lapangan/kontraktor yang mengerjakan', 'Pemegang ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Atasan pemegang ijin
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q11</span>
        Pimpinan fungsi yang bertanggung jawab atas aset yang menjadi obyek pekerjaan dan berpotensi untuk terjadinya insiden terhadap aset, di dalam formulir SIKA disebut ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemberi ijin - Pihak Pertamina yang punya aset', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Peminta ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pemberi ijin - Pihak Pertamina yang punya aset', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pemberi ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemberi ijin - Pihak Pertamina yang punya aset', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pemegang ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pemberi ijin - Pihak Pertamina yang punya aset', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Atasan pemegang ijin
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q12</span>
        Di bawah ini adalah ciri-ciri Sika Umum, kecuali
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jangka waktu bisa sampai 2 minggu - SIKA biasanya maksimal 1 shift atau beberapa hari sesuai PTW', 'Jangka waktu bisa sampai 2 minggu')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Jumlah pekerjaan bisa lebih dari 2
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jangka waktu bisa sampai 2 minggu - SIKA biasanya maksimal 1 shift atau beberapa hari sesuai PTW', 'Jangka waktu bisa sampai 2 minggu')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Jangka waktu bisa sampai 2 minggu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jangka waktu bisa sampai 2 minggu - SIKA biasanya maksimal 1 shift atau beberapa hari sesuai PTW', 'Jangka waktu bisa sampai 2 minggu')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Jangka waktu pekerjaan maksimal 7 hari
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jangka waktu bisa sampai 2 minggu - SIKA biasanya maksimal 1 shift atau beberapa hari sesuai PTW', 'Jangka waktu bisa sampai 2 minggu')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jumlah pekerjaan &gt; 1
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q13</span>
        NAPZA 13. Pertamina EP dengan tegas melarang Penyalahgunaan psikotropika karena akan berdampak buruk terhadap diri pekerja baik dampak komplikasi medis, maupun dampak sosial. Manakah dampak penyalahgunaan psikotropika berikut ini yang termasuk dalam jenis dampak sosial?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Citra Perusahaan tercoreng, kriminalitas, kecelakaan lalu lintas', 'Citra Perusahaan akan tercoreng, Kriminalitas & Kecelakaan jalan raya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Halusinasi dan Kejahatan/Kriminalitas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Citra Perusahaan tercoreng, kriminalitas, kecelakaan lalu lintas', 'Citra Perusahaan akan tercoreng, Kriminalitas & Kecelakaan jalan raya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Penurunan Konsentrasi & Motivasi dan Kecelakaan jalan raya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Citra Perusahaan tercoreng, kriminalitas, kecelakaan lalu lintas', 'Citra Perusahaan akan tercoreng, Kriminalitas & Kecelakaan jalan raya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Citra Perusahaan akan tercoreng, Kriminalitas & Kecelakaan jalan raya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Citra Perusahaan tercoreng, kriminalitas, kecelakaan lalu lintas', 'Citra Perusahaan akan tercoreng, Kriminalitas & Kecelakaan jalan raya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Penurunan Konsentrasi & Motivasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q14</span>
        Pemakaian Psikotropika, Narkotika dan Zat aditif untuk diri sendiri tanpa indikasi dan tidak bertujuan untuk pengobatan adalah penyalahgunaan zat (drug abuse). Bentuk dari penyalahgunaan yang dilarang oleh Pertamina EP adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menggunakan dan Memiliki psikotropika
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memiliki Psikotropika namun tidak menggunakannya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menggunakan, Memiliki & Mendistribusikan psikotropika
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban a, b, c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jawaban a, b, dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q15</span>
        MSDS (Material Safety Data Sheet) 15. Melalui jalur apa sajakah racun bahan kimia dapat masuk ke dalam tubuh manusia?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Saluran pernapasan, Mulut/pencernaan, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Saluran pernapasan, Mulut, Kulit
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut/pencernaan, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Saluran pencernaan, saluran pernapasan, saluran pendengaran
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut/pencernaan, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Makan, Sentuhan, Kontak Mata
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut/pencernaan, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Radiasi, Saluran pernapasan, Kulit
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q16</span>
        Paparan dengan konsentrasi yang rendah dalam jangka waktu lama masih dapat ditolerir, akan tetapi secara kumulatif bisa menimbulkan :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Efek kronis - Paparan lama sedikit demi sedikit', 'Efek kronis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Efek akut
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Efek kronis - Paparan lama sedikit demi sedikit', 'Efek kronis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Efek kronis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Efek kronis - Paparan lama sedikit demi sedikit', 'Efek kronis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Efek penyakit
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Efek kronis - Paparan lama sedikit demi sedikit', 'Efek kronis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Keracunan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q17</span>
        Berikut adalah jenis batas pemaparan, kecuali :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '60 menit O.E.L - Bukan standar universal', '60 menit O.E.L. atau 60 Menit T.W.A')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> TLV-TWA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '60 menit O.E.L - Bukan standar universal', '60 menit O.E.L. atau 60 Menit T.W.A')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> TLV-STEL
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '60 menit O.E.L - Bukan standar universal', '60 menit O.E.L. atau 60 Menit T.W.A')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 60 menit O.E.L. atau 60 Menit T.W.A
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '60 menit O.E.L - Bukan standar universal', '60 menit O.E.L. atau 60 Menit T.W.A')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> TLV-Ceiling
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q18</span>
        APD (Alat Pelindung Diri) 18. Apakah yang dimaksud dengan Alat Pelindung Diri?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Melindungi tenaga kerja dari bahaya lingkungan kerja', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Melindungi tenaga kerja dari bahaya lingkungan kerja', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Perlengkapan yang digunakan untuk melindungi pekerja dari penjahat
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Melindungi tenaga kerja dari bahaya lingkungan kerja', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Helm, sarung tangan, safety shoes, earplug
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Melindungi tenaga kerja dari bahaya lingkungan kerja', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Perlengkapan yang digunakan setiap saat di lokasi kerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q19</span>
        Alat pelindung tangan harus digunakan pada kondisi berikut, kecuali :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Bekerja dengan peralatan berputar - Dilarang pakai sarung tangan agar tidak terlilit mesin putar!', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bekerja dengan peralatan berputar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - Dilarang pakai sarung tangan agar tidak terlilit mesin putar!', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Bekerja dengan bahan kimia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - Dilarang pakai sarung tangan agar tidak terlilit mesin putar!', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Bekerja dengan benda tajam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - Dilarang pakai sarung tangan agar tidak terlilit mesin putar!', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Bekerja pada kondisi panas / dingin yang ekstrim
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q20</span>
        Apakah yang dimaksud dengan air purifying respirator?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Udara dimurnikan dengan cartridge/filter', 'Respirator dimana udara yang digunakan untuk bernapas dimurnikan dengan menggunakan catridge atau canister')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Respirator dimana anda terhubung dengan udara yang dimampatkan ke dalam silinder / tabung
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Udara dimurnikan dengan cartridge/filter', 'Respirator dimana udara yang digunakan untuk bernapas dimurnikan dengan menggunakan catridge atau canister')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Respirator dimana udara yang digunakan untuk bernapas dimurnikan dengan menggunakan catridge atau canister
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Udara dimurnikan dengan cartridge/filter', 'Respirator dimana udara yang digunakan untuk bernapas dimurnikan dengan menggunakan catridge atau canister')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Respirator dimana udara yang digunakan merupakan oksigen murni
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Udara dimurnikan dengan cartridge/filter', 'Respirator dimana udara yang digunakan untuk bernapas dimurnikan dengan menggunakan catridge atau canister')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q21</span>
        LOTO (Lock Out Tag Out) 21. LOTO diperlukan jika suatu proses kerja memiliki kemungkinan terjadinya :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pelepasan energi - Listrik, mekanik, tekanan', 'Pelepasan energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pelepasan bahan berbahaya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pelepasan energi - Listrik, mekanik, tekanan', 'Pelepasan energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pelepasan gas mudah terbakar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pelepasan energi - Listrik, mekanik, tekanan', 'Pelepasan energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pelepasan energi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pelepasan energi - Listrik, mekanik, tekanan', 'Pelepasan energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q22</span>
        Untuk membedakan identitas pada LOTO, label (tag) dibedakan berdasarkan :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Warna - Contoh merah untuk bahaya, kuning/putih peringatan', 'Warna')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Warna
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Warna - Contoh merah untuk bahaya, kuning/putih peringatan', 'Warna')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Bentuk
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Warna - Contoh merah untuk bahaya, kuning/putih peringatan', 'Warna')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Ukuran
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Warna - Contoh merah untuk bahaya, kuning/putih peringatan', 'Warna')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Posisi pemasangan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q23</span>
        Sumber energi yang dapat menimbulkan kecelakaan kerja, sehingga memerlukan LOTO dalam pengerjaannya yaitu energi :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mekanik hidrolik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pneumatic
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'a, b, dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q24</span>
        Bahaya Listrik 24. Untuk bekerja yang berhubungan dengan listrik, pekerja yang bersangkutan harus:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Terlatih dan berkompeten / tersertifikasi', 'Terlatih dan berkompeten')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Terlatih dan berkompeten
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Terlatih dan berkompeten / tersertifikasi', 'Terlatih dan berkompeten')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengerti system control dan memakai PPE yang sesuai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Terlatih dan berkompeten / tersertifikasi', 'Terlatih dan berkompeten')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Memahami akibat bahaya yang ditimbulkan listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Terlatih dan berkompeten / tersertifikasi', 'Terlatih dan berkompeten')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q25</span>
        Kebakaran akibat listrik disebakan hal-hal dibawah ini, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Peralatan sudah tua - Tua belum tentu terbakar jika standar', 'Peralatan sudah tua')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Beban berlebih
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Peralatan sudah tua - Tua belum tentu terbakar jika standar', 'Peralatan sudah tua')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Listrik statis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Peralatan sudah tua - Tua belum tentu terbakar jika standar', 'Peralatan sudah tua')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Sambungan tidak standard
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Peralatan sudah tua - Tua belum tentu terbakar jika standar', 'Peralatan sudah tua')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Peralatan sudah tua
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q26</span>
        Akibat dari Electrical Shock yang diakibatkan oleh sentuhan listrik, baik langsung maupun tidak langsung ditentukan oleh parameter yaitu :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, c benar - Arus, lama tubuh tersetrum, dan tegangan', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Besar arus listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, c benar - Arus, lama tubuh tersetrum, dan tegangan', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Lamanya tubuh menerima aliran listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b, c benar - Arus, lama tubuh tersetrum, dan tegangan', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Besar tegangan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'a, b, c benar - Arus, lama tubuh tersetrum, dan tegangan', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q27</span>
        Gas Berbahaya & Beracun 27. Manakah diantara pernyataan berikut ini yang paling benar
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Oksigen unsur pokok...', 'Oksigen merupakan unsur pokok yang sangat diperlukan dalam proses pembakaran. Di udara bebas terdapat oksigen dengan konsentrasi sekitar 18% sedangakan oksigen yang diperlukan untuk proses pembakaran paling sedikit sekitar 10%.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Oksigen merupakan unsur pokok yang sangat diperlukan dalam proses pembakaran. Di udara bebas terdapat oksigen dengan konsentrasi sekitar 18% sedangakan oksigen yang diperlukan untuk proses pembakaran paling sedikit sekitar 10%.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Oksigen unsur pokok...', 'Oksigen merupakan unsur pokok yang sangat diperlukan dalam proses pembakaran. Di udara bebas terdapat oksigen dengan konsentrasi sekitar 18% sedangakan oksigen yang diperlukan untuk proses pembakaran paling sedikit sekitar 10%.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Oksigen, heat, fuel merupakan segitiga api
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Oksigen unsur pokok...', 'Oksigen merupakan unsur pokok yang sangat diperlukan dalam proses pembakaran. Di udara bebas terdapat oksigen dengan konsentrasi sekitar 18% sedangakan oksigen yang diperlukan untuk proses pembakaran paling sedikit sekitar 10%.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Gas mudah terbakar mempunyai titik didih &lt; 10 OC pada tekanan 2 atm
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Oksigen unsur pokok...', 'Oksigen merupakan unsur pokok yang sangat diperlukan dalam proses pembakaran. Di udara bebas terdapat oksigen dengan konsentrasi sekitar 18% sedangakan oksigen yang diperlukan untuk proses pembakaran paling sedikit sekitar 10%.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Secara fisik bahan bakar dapat berupa, padat, cair dan gas. Namun pada dasarnya semua bahan bakar bisa terbakar harus dalam bentuk fase cair
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q28</span>
        Gas H2S adalah gas sering kali timbul pada kegiatan pemboran migas. Berikut merupakan ciri-ciri gas H2S, kecuali
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi - H2S berbau telur busuk, BUKAN wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Beracun
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi - H2S berbau telur busuk, BUKAN wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Berbau busuk
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi - H2S berbau telur busuk, BUKAN wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tanpa warna
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pada konsentrasi rendah berbau wangi - H2S berbau telur busuk, BUKAN wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pada konsentrasi rendah berbau wangi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q29</span>
        Berikut adalah unsur-unsur pembentuk api, yang biasa disebut segitiga api,
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'O2, sumber panas, bahan bakar', 'O2, sumber panas, bahan bakar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> O2, sumber panas, bahan bakar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'O2, sumber panas, bahan bakar', 'O2, sumber panas, bahan bakar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Titik bakar, titik didih, titik nyala
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'O2, sumber panas, bahan bakar', 'O2, sumber panas, bahan bakar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> O2, oksigen, udara
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'O2, sumber panas, bahan bakar', 'O2, sumber panas, bahan bakar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> CO2, H2S, CO
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q30</span>
        Cara Kerja Aman 30. Bekerja sesuai dengan urutan pelaksanaan pekerjaan termasuk dalam HSE Golden Rules poin :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Patuh pada peraturan, prosedur, dan hukum', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Peduli pada orang lain dan sekitarnya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Patuh pada peraturan, prosedur, dan hukum', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Melakukan intervensi terhadap tindakan tidak aman
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Patuh pada peraturan, prosedur, dan hukum', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Patuh pada peraturan, prosedur, dan hukum
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Patuh pada peraturan, prosedur, dan hukum', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Memberikan rekomendasi perbaikan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q31</span>
        Setiap pekerja harus dalam kondisi fit to work saat datang ke lokasi kerja. Yang dimaksud dengan fit to work adalah : ... (terpotong di dokumen asli) 31. Setiap pekerja harus dalam kondisi fit to work saat datang ke lokasi kerja. Yang dimaksud dengan fit to work adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Tekanan darah berada pada range 80 - 130
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Telah mengikuti Medical Check Up
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Sehat secara fisik dan mental
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jarak pandang 5-10 meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q32</span>
        Kecepatan maksimum kendaraan (Driving Safety) saat melintas di dalam area fasilitas operasi/produksi (dalam pagar) Pertamina EP biasanya dibatasi maksimal :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', '10 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 40 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', '10 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 30 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', '10 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 20 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Semua jawaban benar', '10 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 10 km/jam
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q33</span>
        Housekeeping (5R) & Lingkungan 33. Implementasi housekeeping di lokasi kerja bertujuan untuk :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Membiarkan sampah menumpuk', 'Mengurangi potensi terjadinya pencemaran lingkungan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menciptakan lokasi kerja yang aman, nyaman dan sehat.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Membiarkan sampah menumpuk', 'Mengurangi potensi terjadinya pencemaran lingkungan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Meningkatkan efisiensi kerja dan mengurangi unsafe condition.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Membiarkan sampah menumpuk', 'Mengurangi potensi terjadinya pencemaran lingkungan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengurangi potensi terjadinya pencemaran lingkungan.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Membiarkan sampah menumpuk', 'Mengurangi potensi terjadinya pencemaran lingkungan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Semua jawaban benar (a, b, dan c benar)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q34</span>
        Yang BUKAN merupakan bagian dari prinsip 5R (Ringkas, Rapi, Resik, Rawat, Rajin) dalam program housekeeping adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning atau merah untuk limbah B3/berbahaya', 'Menata barang agar mudah dicari (Rapi)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Memilah barang yang masih dipakai dan yang tidak (Ringkas)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kuning atau merah untuk limbah B3/berbahaya', 'Menata barang agar mudah dicari (Rapi)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Menata barang agar mudah dicari (Rapi)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning atau merah untuk limbah B3/berbahaya', 'Menata barang agar mudah dicari (Rapi)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Membiarkan sampah menumpuk di sudut ruangan (Rombak)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning atau merah untuk limbah B3/berbahaya', 'Menata barang agar mudah dicari (Rapi)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Membersihkan tempat kerja dari debu dan kotoran (Resik)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q35</span>
        Limbah B3 (Bahan Berbahaya dan Beracun) seperti majun bekas oli, saringan oli (oil filter), dan bekas bahan kimia harus dibuang ke dalam tempat sampah berwarna :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Isolasi, lokalisir, laporkan', 'Kuning / Merah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Hijau
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Isolasi, lokalisir, laporkan', 'Kuning / Merah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kuning / Merah
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Isolasi, lokalisir, laporkan', 'Kuning / Merah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Biru
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Isolasi, lokalisir, laporkan', 'Kuning / Merah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Hitam
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q36</span>
        Apabila terjadi tumpahan minyak (oil spill) di area kerja, langkah pertama yang paling tepat dilakukan sesuai prinsip kerja aman adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengecek kondisi rem - Ini justru tindakan yang diwajibkan', 'Membiarkan saja karena nanti akan menguap sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Langsung menyiram tumpahan dengan air sebanyak-banyaknya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengecek kondisi rem - Ini justru tindakan yang diwajibkan', 'Membiarkan saja karena nanti akan menguap sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengisolasi sumber tumpahan, melokalisir aliran minyak dengan oil absorbent / pasir, dan melaporkan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Mengecek kondisi rem - Ini justru tindakan yang diwajibkan', 'Membiarkan saja karena nanti akan menguap sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Membiarkan saja karena nanti akan menguap sendiri
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mengecek kondisi rem - Ini justru tindakan yang diwajibkan', 'Membiarkan saja karena nanti akan menguap sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Menyulut api agar minyaknya habis terbakar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q37</span>
        Corporate Life Saving Rules (CLSR) & Emergency 37. Dalam 12 Corporate Life Saving Rules (CLSR) Pertamina, pekerja dilarang keras melakukan hal berikut saat mengemudi, KECUALI :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hentikan kerja, evakuasi ke Muster Point', 'Mengemudi tanpa menggunakan sabuk pengaman (seat belt)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menggunakan telepon genggam (HP)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Hentikan kerja, evakuasi ke Muster Point', 'Mengemudi tanpa menggunakan sabuk pengaman (seat belt)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengemudi tanpa menggunakan sabuk pengaman (seat belt)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hentikan kerja, evakuasi ke Muster Point', 'Mengemudi tanpa menggunakan sabuk pengaman (seat belt)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengecek kondisi rem dan lampu sebelum berangkat
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hentikan kerja, evakuasi ke Muster Point', 'Mengemudi tanpa menggunakan sabuk pengaman (seat belt)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Mengemudi dalam kondisi mabuk / di bawah pengaruh obat
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q38</span>
        Apa yang harus Anda lakukan jika mendengar bunyi sirine keadaan darurat (Emergency Alarm) berbunyi terus menerus secara panjang?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Berlari mencari sumber api untuk memadamkannya sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Mengemas barang-barang pribadi terlebih dahulu sebelum keluar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Berlari mencari sumber api untuk memadamkannya sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Segera hentikan pekerjaan, matikan sumber energi, dan evakuasi menuju Titik Kumpul (Muster Point)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Berlari mencari sumber api untuk memadamkannya sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tetap bekerja karena mungkin itu hanya alarm palsu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Semua jawaban benar', 'Berlari mencari sumber api untuk memadamkannya sendiri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Berlari mencari sumber api untuk memadamkannya sendiri
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q39</span>
        Izin Kerja (SIKA) harus selalu berada di lokasi tempat pekerjaan berlangsung. Kapan SIKA tersebut dinyatakan tidak berlaku?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,8 meter - Standar internasional OSHA/Migas untuk wajib pakai harness jatuh', 'Jika terjadi keadaan darurat (Emergency) di lokasi tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Jika terjadi pergantian shift pekerja dan tidak diperpanjang
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '1,8 meter - Standar internasional OSHA/Migas untuk wajib pakai harness jatuh', 'Jika terjadi keadaan darurat (Emergency) di lokasi tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Jika terjadi keadaan darurat (Emergency) di lokasi tersebut
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,8 meter - Standar internasional OSHA/Migas untuk wajib pakai harness jatuh', 'Jika terjadi keadaan darurat (Emergency) di lokasi tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Jika area kerja berubah menjadi tidak aman (unsafe)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,8 meter - Standar internasional OSHA/Migas untuk wajib pakai harness jatuh', 'Jika terjadi keadaan darurat (Emergency) di lokasi tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Semua jawaban benar (a, b, dan c benar)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q40</span>
        Sesuai dengan prosedur Bekerja di Ketinggian (Working at Height), pekerja wajib menggunakan Full Body Harness dengan 100% tie-off apabila bekerja pada ketinggian di atas :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', '1,0 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 1,0 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', '1,0 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 1,8 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', '1,0 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 0,5 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', '1,0 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 3,0 meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q41</span>
        Yang menjadi target dalam kebijakan HSE di Pertamina Gas adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Nihil Insiden')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Diperbolehkan terjadi kecelakaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Nihil Insiden')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Diperbolehkan tidak menggunakan APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Nihil Insiden')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Nihil Insiden
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Nihil Insiden')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Semua jawaban benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q42</span>
        Undang-undang No. 1 Tahun 1970 mengatur tentang:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Transportasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Keselamatan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Komunikasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Ketenagakerjaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q43</span>
        Salah satu persyaratan keselamatan kerja yang harus dipenuhi dalam memulai suatu pekerjaan adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Niat dan doa
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Upah tetap
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Job Safety Analysis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jumlah Pekerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q44</span>
        Berikut adalah HSE Golden Rules Pertamina, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Instropeksi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Patuh
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Instropeksi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Peduli
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Instropeksi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Instropeksi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Instropeksi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Intervensi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q45</span>
        Berapa jumlah elemen Corporate Life Saving Rules Pertamina (CLSR):
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', '11')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 10
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', '11')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 11
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', '11')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 12
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', '11')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 13
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q46</span>
        Yang tidak termasuk dalam elemen Corporate Live Saving Rules (CLSR) antara lain:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Hazard Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Permit To Work
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Hazard Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Isolation
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Hazard Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Safe Zone Positon
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: D', 'Hazard Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Hazard Analysis
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q47</span>
        Persyaratan Penerbitan Surat Ijin Kerja Aman (SIKA) di Pertamina diantaranya, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Surat Keterangan Catatan Kepolisian (SKCK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> HSE Plan / Job Safety Analysis (JSA)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Surat Keterangan Catatan Kepolisian (SKCK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Identitas seluruh pekerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Surat Keterangan Catatan Kepolisian (SKCK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Surat Keterangan Catatan Kepolisian (SKCK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Surat Keterangan Catatan Kepolisian (SKCK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Hasil Medical Check Up / Surat Keterangan Sehat
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q48</span>
        Batas ketinggian minimal yang menjadi persyaratan dalam bekerja di ketinggian adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', '1.8 m')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 70 cm
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', '1.8 m')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 1.4 m
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', '1.8 m')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 1.8 m
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', '1.8 m')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 2.1 m
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q49</span>
        Alat pelindung diri yang diperlukan saat bekerja di ketinggian adalah sebagai berikut, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Tali rafia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Tali rafia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Tali rafia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Full Body Harness Double Hook & Tali pengaman
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Tali rafia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Sepatu keselamatan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Tali rafia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Helm kerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q50</span>
        Potensi bahaya yang mungkin terjadi pada saat penggunaan scaffolding (perancah) antara lain, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Semua jawaban salah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bahaya dari orang dan kendaraan yang melintas ke area kerja scaffolding
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Semua jawaban salah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Bahaya terjatuh dari ketinggian
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Semua jawaban salah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Bahaya dekat jalur listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: D', 'Semua jawaban salah')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Semua jawaban salah
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q51</span>
        Di bawah ini yang tidak termasuk alat-alat keselamatan kerja dalam las listrik adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Kaos bolong')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Apron
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Kaos bolong')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kaos bolong
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Kaos bolong')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Topeng / kacamata las
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Kaos bolong')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Sarung Tangan las
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q52</span>
        Hal-hal yang harus dipatuhi pada saat melakukan instalasi listrik, diantaranya:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Menggunakan APD yang dibutuhkan untuk instalasi listrik dan menerapkan prinsip isolasi energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Sumber listrik tidak dimatikan terlebih dahulu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Menggunakan APD yang dibutuhkan untuk instalasi listrik dan menerapkan prinsip isolasi energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Menggunakan kabel yang tidak standar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Menggunakan APD yang dibutuhkan untuk instalasi listrik dan menerapkan prinsip isolasi energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tidak menggunakan alas kaki untuk mencegah tersengat listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: D', 'Menggunakan APD yang dibutuhkan untuk instalasi listrik dan menerapkan prinsip isolasi energi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Menggunakan APD yang dibutuhkan untuk instalasi listrik dan menerapkan prinsip isolasi energi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q53</span>
        Yang harus dipatuhi sebagai Driver kendaraan perusahaan adalah, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Menggunakan Handphone dan alat lainnya saat berkendara')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Tidak melebihi batas kecepatan maksimum kendaraan sesuai peraturan yang berlaku.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Menggunakan Handphone dan alat lainnya saat berkendara')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Melakukan pemeriksaan kelengkapan dan kelayakan fungsi kendaraan sebelum memulai berkendara (roda, alat kemudi, seat belt, rem, lampu, spion, klakson, speedometer, dll).
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Menggunakan Handphone dan alat lainnya saat berkendara')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menggunakan Handphone dan alat lainnya saat berkendara
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Menggunakan Handphone dan alat lainnya saat berkendara')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Selalu menggunakan Sabuk Keselamatan saat berada di dalam kendaraan.
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q54</span>
        Sumber bahaya yang dapat menimbulkan kecelakaan kerja untuk jenis pekerjaan mekanik adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Bagian benda yang bergerak')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bagian benda yang bergerak
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Bagian benda yang bergerak')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kelistrikan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Bagian benda yang bergerak')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Saklar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Bagian benda yang bergerak')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jumlah pekerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q55</span>
        APD untuk melindungi telinga dari suara bising / kebisingan adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Earmuff / Ear Plug ( penyumbat telinga )')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Safety helmet ( Helm )
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Earmuff / Ear Plug ( penyumbat telinga )')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Respirator ( Masker )
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Earmuff / Ear Plug ( penyumbat telinga )')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Earmuff / Ear Plug ( penyumbat telinga )
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Earmuff / Ear Plug ( penyumbat telinga )')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Googgles ( kacamata )
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q56</span>
        Yang harus dilakukan untuk memastikan kehandalan alat / fasilitas produksi adalah, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Membiarkan sertifikat layak pakai alat / fasilitas yang sudah kadaluarsa.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Membiarkan sertifikat layak pakai alat / fasilitas yang sudah kadaluarsa.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Membiarkan sertifikat layak pakai alat / fasilitas yang sudah kadaluarsa.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memastikan adanya sertifikat layak pakai / masa berlaku.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Membiarkan sertifikat layak pakai alat / fasilitas yang sudah kadaluarsa.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tidak ditemukan cacat fisik yang telihat. Komunikasikan kepada pengawas jika ditemukan kejanggalan / kondisi abnormal
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q57</span>
        Yang harus dilakukan untuk memastikan kehandalan alat / fasilitas produksi adalah, kecuali: a. Membiarkan sertifikat layak pakai alat / fasilitas yang sudah kadaluarsa. b. Memastikan adanya sertifikat layak pakai / masa berlaku. c. Tidak ditemukan cacat fisik yang telihat. Komunikasikan kepada pengawas jika ditemukan kejanggalan / kondisi abnormal 17. Yang dapat dilakukan agar terhindar dari bahaya terpeleset / tersandung / terjatuh dari tangga adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Pastikan area kerja selalu dalam keadaan kotor')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Perhatikan lubang jalan maupun cekungan jalan / selokan ketika melintas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Pastikan area kerja selalu dalam keadaan kotor')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Batasi beban bawaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Pastikan area kerja selalu dalam keadaan kotor')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pastikan area kerja selalu dalam keadaan kotor
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Pastikan area kerja selalu dalam keadaan kotor')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jangan membiarkan kabel ataupun colokan listrik menghalangi jalan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q58</span>
        Berikut adalah syarat lokasi bongkar muat truk barang, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Di daerah yang dekat dengan keramaian orang')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Di daerah yang jauh dari lalu lintas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Di daerah yang dekat dengan keramaian orang')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Di daerah yang dekat dengan keramaian orang
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Di daerah yang dekat dengan keramaian orang')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tidak dilakukan di daerah yang curam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Di daerah yang dekat dengan keramaian orang')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Tidak membawa muatan yang berlebihan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q59</span>
        Potensi bahaya pada alat angkut diantaranya, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Syarat keselamatan kerja terpenuhi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Syarat keselamatan kerja terpenuhi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Syarat keselamatan kerja terpenuhi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Peralatan yang tidak standar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Syarat keselamatan kerja terpenuhi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pengawasan peralatan kurang
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Syarat keselamatan kerja terpenuhi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Sosialisasi peraturan dan perundang-undangan kurang
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q60</span>
        Yang harus dilakukan saat parkir atau meninggalkan forklift, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Memastikan forklift sudah dipanasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Memarkir dan meninggalkan forklift di area yang aman
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Memastikan forklift sudah dipanasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mematikan mesin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Memastikan forklift sudah dipanasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Memastikan forklift sudah dipanasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Memastikan forklift sudah dipanasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pasang rem tangan dan atur pengendali arah pada posisi netral
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q61</span>
        Apabila terjadi suatu insiden / kecelakaan kerja maka anda harus melaporkan:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Segera setelah mengetahui terjadinya kecelakaan tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Setelah melakukan tindakan perbaikan terhadap kecelakaan tersebut
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Segera setelah mengetahui terjadinya kecelakaan tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Segera setelah mengetahui terjadinya kecelakaan tersebut
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Segera setelah mengetahui terjadinya kecelakaan tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pada setiap akhir tahun
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Segera setelah mengetahui terjadinya kecelakaan tersebut')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pada akhir bulan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q62</span>
        Tujuan P3K adalah sebagai berikut, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Memperlama proses penyembuhan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Memperlama proses penyembuhan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Memperlama proses penyembuhan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mencegah maut atau memperpanjang harapan hidup
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Memperlama proses penyembuhan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mencegah cacat dan infeksi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Memperlama proses penyembuhan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Mengurangi kesakitan datau bahaya yang lebih buruk
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q63</span>
        PEKA adalah singkatan dari:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Pengamatan Keselamatan dan Lingkungan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pengamatan Keselamatan dan Lingkungan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Pengamatan Keselamatan dan Lingkungan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pengamatan Kesehatan dan Lingkungan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Pengamatan Keselamatan dan Lingkungan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Penerapan Kesehatan dan Lingkungan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Pengamatan Keselamatan dan Lingkungan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Penerapan Kesehatan dan Lingkungan Kerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q64</span>
        Apabila terjadi gempa bumi maka yang harus dilakukan, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Menggunakan lift')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Berlindung pada tempat yang aman
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Menggunakan lift')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Menggunakan lift
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Menggunakan lift')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menjauhi dinding kaca
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Menggunakan lift')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Melindungi kepala
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q65</span>
        Berikut ini adalah salah satu prosedur evakuasi yang benar adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Jangan berbalik arah karena akan bertabrakan dengan orang-orang di belakang anda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Berlari cepat menuju pintu keluar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Jangan berbalik arah karena akan bertabrakan dengan orang-orang di belakang anda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memakai sepatu hak tinggi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Jangan berbalik arah karena akan bertabrakan dengan orang-orang di belakang anda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengunci pintu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: D', 'Jangan berbalik arah karena akan bertabrakan dengan orang-orang di belakang anda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jangan berbalik arah karena akan bertabrakan dengan orang-orang di belakang anda
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q66</span>
        Kepanjangan dari JSA adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Job System Audit
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Job Safety Analysis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Job Secret Analysis
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Job Safety Analysis')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Job Security Assessment
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q67</span>
        Salah satu contoh ruang tertutup (confined space) adalah, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Ruang rapat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Ruang rapat
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Ruang rapat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Tanki
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Ruang rapat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Gorong-gorong
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Ruang rapat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Atap ducting
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q68</span>
        Kepanjangan dari 5R adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Resik, Rapi, Rawat, Rajin, Ringkas.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Risk Assessment, RAW Material, Round Area, Road Safety, Real Safety
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Resik, Rapi, Rawat, Rajin, Ringkas.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Ramai, Ringkas, Rindang, Rugi, Rahasia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Resik, Rapi, Rawat, Rajin, Ringkas.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Resik, Rapi, Rawat, Rajin, Ringkas.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Resik, Rapi, Rawat, Rajin, Ringkas.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Ringkas, Rajin, Rusuh, Ramai, Relokasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q69</span>
        Lokasi/titik berkumpul apabila terjadi keadaan darurat disebut:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Assembly / Muster Point')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Assembly / Muster Point
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Assembly / Muster Point')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Meeting Point
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Assembly / Muster Point')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Emergency Point
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Assembly / Muster Point')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Rest Area
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q70</span>
        Apa yang dimaksud dengan hazard (bahaya) adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Suatu obyek dimana tedapat energi, zat atau kondisi kerja yang potensial dapat mengancam keselamatan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Suatu obyek dimana tedapat energi, zat atau kondisi kerja yang potensial dapat mengancam keselamatan.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Suatu obyek dimana tedapat energi, zat atau kondisi kerja yang potensial dapat mengancam keselamatan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Suatu obyek dimana mengancam harga diri dalam bekerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Suatu obyek dimana tedapat energi, zat atau kondisi kerja yang potensial dapat mengancam keselamatan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Suatu peristiwa dimana pikiran & tindakan tidak singkron yang menyebabkan bahaya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Suatu obyek dimana tedapat energi, zat atau kondisi kerja yang potensial dapat mengancam keselamatan.')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Lampu sein yang berkedip secara bersamaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q71</span>
        First Aid P3K adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Memberikan pertolongan pertama pada korban kecelakaan dengan cepat dan tepat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Memberikan pertolongan setelah terjadi banyak pendarahan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Memberikan pertolongan pertama pada korban kecelakaan dengan cepat dan tepat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memberikan pertolongan pertama pada korban kecelakaan dengan cepat dan tepat
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Memberikan pertolongan pertama pada korban kecelakaan dengan cepat dan tepat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Memberikan kenyamanan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Memberikan pertolongan pertama pada korban kecelakaan dengan cepat dan tepat')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Memberikan pertolongan kepada korban yang telah dirujuk ke RS
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q72</span>
        Maksud dari Fit to Work adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: A', 'Sehat dan siap bekerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Sehat dan siap bekerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Sehat dan siap bekerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Patuh terhadap peraturan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Sehat dan siap bekerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengerjakan setiap pekerjaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: A', 'Sehat dan siap bekerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Patuh pada atasan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q73</span>
        APD adalah singkatan dari:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Alat Pelindung Diri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Alat Pas Dipakai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: B', 'Alat Pelindung Diri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Alat Pelindung Diri
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Alat Pelindung Diri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Alat Punya Dia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: B', 'Alat Pelindung Diri')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Alat Pelengkap Diri
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q74</span>
        Kecelakaan adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Kejadian yang tidak dikehendaki dan tidak diduga/tiba-tiba yang dapat menimbulkan korban manusia dan harta benda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Sumber bahaya potensial yang dapat menyebabkan kecelakaan/kerusakan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Kejadian yang tidak dikehendaki dan tidak diduga/tiba-tiba yang dapat menimbulkan korban manusia dan harta benda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Tingkat bahaya dari suatu kondisi bilamana terjadi accident
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: D', 'Kejadian yang tidak dikehendaki dan tidak diduga/tiba-tiba yang dapat menimbulkan korban manusia dan harta benda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Suatu kondisi sumber bahaya telah teridentifikasi dan telah dikendalikan ke tingkat yang memadai (aman/safe)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: D', 'Kejadian yang tidak dikehendaki dan tidak diduga/tiba-tiba yang dapat menimbulkan korban manusia dan harta benda')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Kejadian yang tidak dikehendaki dan tidak diduga/tiba-tiba yang dapat menimbulkan korban manusia dan harta benda
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q75</span>
        Faktor-faktor penyebab terjadinya kecelakaan adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Alat, bahan dan manusia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Tenaga kerja, tenaga medis dan bahan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Alat, bahan dan manusia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Alat, bahan dan perusahaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kunci Resmi: C', 'Alat, bahan dan manusia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Alat, bahan dan manusia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kunci Resmi: C', 'Alat, bahan dan manusia')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Bahan, tenaga kerja dan perusahaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q76</span>
        PT PERTAMINA EP ASSET 2 1. Undang-undang terkait Keselamatan Kerja adalah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'UU No 1 tahun 1970')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> UU No 1 tahun 1970
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'UU No 1 tahun 1970')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> UU No 1 tahun 1990
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'UU No 1 tahun 1970')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> UU No 7 tahun 1910
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'UU No 1 tahun 1970')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> UU No 1 tahun 2009
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q77</span>
        Kepanjangan dari PEKA adalah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengamatan Keselamatan Kerja', 'Pengamatan Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pengamatan Kesehatan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengamatan Keselamatan Kerja', 'Pengamatan Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pengamatan Kecelakaan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pengamatan Keselamatan Kerja', 'Pengamatan Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pengamatan Keselamatan Kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pengamatan Keselamatan Kerja', 'Pengamatan Keselamatan Kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pengamatan Kejadian Kerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q78</span>
        PT Pertamina EP Asset 2 sudah mengaplikasikan system Vehicle Tracking System (VTS) pada kendaraan Perusahaan, dimana setting aplikasi pada kecepatan diatur sebagai berikut: Kecepatan di lokasi sumur/SP/SPU/SKG dan Pemboran adalah maksimum 20 km/jam Kecepatan di dalam Komplek Perumahan adalah maksimum ... km/jam Kecepatan di jalan berdebu maksimum 40 km/jam Kecepatan di jalan raya dalam kota maskimum 50 km/jam Kecepatan di jalan utama/jalan lintas/kota adalah maksimum 80 km/jam Dari data diatas, Berapa kecepatan di dalam Komplek Perumahan ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Maksimum 35 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Maksimum 35 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Maksimum 35 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Maksimum 30 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Maksimum 35 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Maksimum 25 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Maksimum 35 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Maksimum 10 km/jam
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q79</span>
        Setiap pekerja harus dalam kondisi fit to work saat datang ke lokasi kerja. Yang dimaksud dengan fit to work adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Tekanan darah berada pada range 80 - 130
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Telah mengikuti Medical Check Up
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Sehat secara fisik dan mental
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Sehat secara fisik dan mental', 'Sehat secara fisik dan mental')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jarak pandang 5-10 meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q80</span>
        Lembar SIKA yang udah di tanda tangani dan diserahkan ke HSE pada lembar warna apa?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Putih
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kuning
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Merah
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Biru/Hijau
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q81</span>
        Di bawah ini adalah ciri-ciri SIKA Umum, kecuali...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Jumlah pekerjaan bisa lebih dari 2')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Jumlah pekerjaan bisa lebih dari 2
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Jumlah pekerjaan bisa lebih dari 2')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Jangka waktu pekerjaan maksimal 7 hari
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Jumlah pekerjaan bisa lebih dari 2')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Jangka waktu bisa sampai 2 minggu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Jumlah pekerjaan bisa lebih dari 2')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jumlah pekerjaan &gt; 1
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q82</span>
        Pengawas pekerjaan dari dalam atau luar fungsi di lingkungan PT. Pertamina EP, di dalam formulir SIKA disebut ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pemberi ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pelaksana Pekerjaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pemegang ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Pemberi ijin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Atasan pemegang ijin
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q83</span>
        Kapan waktunya pemberlakukan peraturan system override?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saat Asset Holder melakukan Bypass Critical Protection', 'Saat Asset Holder melakukan Bypass Critical Protection (BCP)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Saat ada pekerjaan yang memerlukan personil yang banyak
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saat Asset Holder melakukan Bypass Critical Protection', 'Saat Asset Holder melakukan Bypass Critical Protection (BCP)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Saat ada kejadian emergency kebakaran terjadi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saat Asset Holder melakukan Bypass Critical Protection', 'Saat Asset Holder melakukan Bypass Critical Protection (BCP)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Saat Asset Holder melakukan pekerjaan Rutin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Saat Asset Holder melakukan Bypass Critical Protection', 'Saat Asset Holder melakukan Bypass Critical Protection (BCP)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Saat Asset Holder melakukan Bypass Critical Protection (BCP)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q84</span>
        Berikut merupakan hierarki (dari yang tertinggi) pengendalian resiko bahaya berdasar OHSAS 18001 : 2008, yaitu :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Adminstrasi, eliminasi, subtitusi, rekayasa engineering, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> APD, rekayasa engineering, subtitusi, adminstrasi, eliminasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD', 'Eliminasi, subtitusi, rekayasa engineering, adminstrasi, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Rekayasa engineering, admnistrasi, APD, eliminasi, subtitusi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q85</span>
        Apakah yang dimaksud dengan Alat Pelindung Diri?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Perlengkapan yang digunakan untuk melindungi tenaga kerja...', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Perlengkapan yang digunakan untuk melindungi pekerja dari penjahat
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Perlengkapan yang digunakan untuk melindungi tenaga kerja...', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Helm, sarung tangan, safety shoes, earplug
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Perlengkapan yang digunakan untuk melindungi tenaga kerja...', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Perlengkapan yang digunakan untuk melindungi tenaga kerja...', 'Perlengkapan yang digunakan untuk melindungi tenaga kerja dari bahaya lingkungan kerja')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Perlengkapan yang digunakan setiap saat di lokasi kerja
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q86</span>
        Berapakah nilai ambang batas kebisingan dengan waktu paparan 8 jam per hari?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '85 dBA', '85 dBA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 65 dBA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '85 dBA', '85 dBA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 75 dBA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '85 dBA', '85 dBA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 85 dBA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '85 dBA', '85 dBA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 95 dBA
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q87</span>
        Alat pelindung tangan harus digunakan pada kondisi berikut, kecuali...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - sarung tangan berpotensi tersangkut', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bekerja dengan bahan kimia
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Bekerja dengan peralatan berputar - sarung tangan berpotensi tersangkut', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Bekerja dengan peralatan berputar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - sarung tangan berpotensi tersangkut', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Bekerja dengan benda tajam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Bekerja dengan peralatan berputar - sarung tangan berpotensi tersangkut', 'Bekerja dengan peralatan berputar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Bekerja pada kondisi panas / dingin yang ekstrim
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q88</span>
        Alat Pelindung Diri yang berfungsi mencegah terjatuh dan menahan korban bergantung diatas ialah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Full body harness', 'Full body harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Topi/Helm
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Full body harness', 'Full body harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Self Contained Breathing Apparatus (SCBA)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Full body harness', 'Full body harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Sepatu Safety
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Full body harness', 'Full body harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Full body harness
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q89</span>
        Alat pelindung pernapasan digunakan saat bekerja di ruang terbatas...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Self Contained Breathing Apparatus', 'Self Contained Breathing Apparatus (SCBA)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Full body harness
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Self Contained Breathing Apparatus', 'Self Contained Breathing Apparatus (SCBA)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Self Contained Breathing Apparatus (SCBA)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Self Contained Breathing Apparatus', 'Self Contained Breathing Apparatus (SCBA)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Masker kain
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Self Contained Breathing Apparatus', 'Self Contained Breathing Apparatus (SCBA)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Ear muff
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q90</span>
        Gas H2S adalah gas sering kali timbul pada kegiatan pemboran migas. Berikut merupakan ciri-ciri gas H2S, kecuali...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Beracun
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Berbau busuk
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Pada konsentrasi rendah berbau wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tanpa warna
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Pada konsentrasi rendah berbau wangi', 'Pada konsentrasi rendah berbau wangi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pada konsentrasi rendah berbau wangi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q91</span>
        Berikut Yang Termasuk didalam simbol warna di MSDS, Kecuali..
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hijau', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Merah
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hijau', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Biru
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Hijau', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Hijau
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Hijau', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Kuning
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q92</span>
        Pemakaian Psikotropika, Narkotika dan Zat aditif untuk diri sendiri tanpa indikasi dan tidak bertujuan untuk pengobatan adalah penyalahgunaan zat (drug abuse). Bentuk dari penyalahgunaan yang dilarang oleh Pertamina EP adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, dan c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menggunakan dan Memiliki psikotropika
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, dan c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Memiliki Psikotropika namun tidak menggunakannya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban a, b, dan c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Menggunakan, Memiliki & Mendistribusikan psikotropika
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban a, b, dan c benar', 'Jawaban a, b, dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jawaban a, b, dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q93</span>
        Untuk bekerja yang berhubungan dengan listrik, pekerja yang bersangkutan harus...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Terlatih dan berkompeten
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mengerti system control dan memakai PPE yang sesuai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Memahami akibat bahaya yang ditimbulkan listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q94</span>
        Berapakah suhu nyaman sesuai Panduan Umum HSE PT Pertamina EP:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Di bawah 32°C')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Di bawah 32°C
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Di bawah 32°C')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Di atas 32°C
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Di bawah 32°C')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 22°C - 26°C
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Di bawah 32°C')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jawaban di atas salah semua
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q95</span>
        Sesuai Peraturan Pemerintah 101 Tahun 2014 Limbah Bahan Berbahaya dan Beracun (B-3) maksimum penyimpanan di Tempat Penyimpanan Sementara (TPS) adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Selama 90 Hari Kalender', 'Selama 90 Hari Kalender')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Selama 100 Hari Kalender
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Selama 90 Hari Kalender', 'Selama 90 Hari Kalender')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Selama 90 Hari Kalender
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Selama 90 Hari Kalender', 'Selama 90 Hari Kalender')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Selama 30 Hari Kalender
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Selama 90 Hari Kalender', 'Selama 90 Hari Kalender')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Selama 60 Hari Kalender
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q96</span>
        Melalui jalur apa sajakah racun bahan kimia dapat masuk ke dalam tubuh manusia ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Saluran pencernaan, saluran pernapasan, saluran pendengaran
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Saluran pernapasan, Mulut, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Saluran pernapasan, Mulut, Kulit
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Radiasi, Saluran pernapasan, Kulit
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Saluran pernapasan, Mulut, Kulit', 'Saluran pernapasan, Mulut, Kulit')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Makan, Sentuhan, Kontak Mata
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q97</span>
        Berikut adalah jenis batas pemaparan, kecuali :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'TLV-TWA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> TLV-TWA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'TLV-TWA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> ISO-OHSAS
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'TLV-TWA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> TLV-STEL
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'TLV-TWA')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> TLV-Ceiling
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q98</span>
        Berikut adalah unsur-unsur pembentuk api, yang biasa disebut segitiga api:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Sumber panas, bahan bakar, oksigen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Sumber panas, bahan bakar, oksigen
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Sumber panas, bahan bakar, oksigen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Titik bakar, titik didih, titik nyala
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Sumber panas, bahan bakar, oksigen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> O2/oksigen, udara
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Sumber panas, bahan bakar, oksigen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> CO2, H2S, CO
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q99</span>
        Perancah (scaffold) adalah struktur semi permanen/konstruksi yang menyediakan jalan masuk/sarana kerja, yang digunakan untuk menyangga material atau pemasangan peralatan lain. Jika orang berlalu lalang di bawah scaffold, scaffold harus dilengkapi dengan jaring berlubang di antara papan dan pagar pengaman. Pada ketinggian berapa perancah (scaffold) digunakan dan berapa diameter maks lubang pada jaring ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mulai ketinggian 1,8 meter & 1,2 inch', 'Mulai ketinggian 1,8 meter & 1,2 inch')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Mulai ketinggian 1,5 meter & 1,3 inch
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mulai ketinggian 1,8 meter & 1,2 inch', 'Mulai ketinggian 1,8 meter & 1,2 inch')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mulai ketinggian 1,6 meter & 1,2 inch
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Mulai ketinggian 1,8 meter & 1,2 inch', 'Mulai ketinggian 1,8 meter & 1,2 inch')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mulai ketinggian 2,5 meter & 1,3 inch
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Mulai ketinggian 1,8 meter & 1,2 inch', 'Mulai ketinggian 1,8 meter & 1,2 inch')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Mulai ketinggian 1,8 meter & 1,2 inch
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q100</span>
        Jarak aman Sumur pemboran dengan flare stack dan ROW Pipeline adalah :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter & 12 meter', '90 meter & 12 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 70 meter & 6 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter & 12 meter', '90 meter & 12 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 80 meter & 12 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '90 meter & 12 meter', '90 meter & 12 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 90 meter & 12 meter (KUPAK)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '90 meter & 12 meter', '90 meter & 12 meter (KUPAK)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 100 meter & 6 meter (KUPAK)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q101</span>
        Yang bukan termasuk isi dari HSE Golden Rules adalah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Patuh')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Patuh
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Patuh')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Intervensi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Patuh')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Integritas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Patuh')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Peduli
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q102</span>
        Singkatan dari LOTO adalah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Lock Out Tag Out', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Lock Out Tagline Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Lock Out Tag Out', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Locker Out Tag Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Lock Out Tag Out', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Lock Out Tag Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Lock Out Tag Out', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Locker Out Tagline Out
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q103</span>
        LOTO diperlukan jika suatu proses kerja memiliki kemungkinan terjadinya :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pelepasan bahan berbahaya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pelepasan gas mudah terbakar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pelepasan energi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'a, b dan c benar', 'a, b dan c benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q104</span>
        Berikut yang termasuk pengaplikasian Warna LOTO Operator-Confined Space-Mekanik adalah...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning-Merah-Biru', 'Kuning-Merah-Biru')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Biru-Putih-Kuning
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Kuning-Merah-Biru', 'Kuning-Merah-Biru')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kuning-Merah-Biru
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning-Merah-Biru', 'Kuning-Merah-Biru')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Kuning-Biru-Putih
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Kuning-Merah-Biru', 'Kuning-Merah-Biru')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Kuning-Putih-Biru
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q105</span>
        Sumber energi yang dapat menimbulkan kecelakaan kerja, sehingga memerlukan LOTO dalam pengerjaannya yaitu energi:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Listrik')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Listrik')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mekanik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Listrik')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Hidrolik & pneumatic
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Listrik')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> a, b dan c benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q106</span>
        Dalam penggalian, ada berapa jenis type tanah ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '3 Type Tanah antara lain: Type A, B, C', '3 Type Tanah antara lain: Tanah Type A (Tanah Lempung), Type B (Tanah Liat), Type C (Tanah Kerikil)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 2 Type Tanah antara lain: Tanah Lempung dan Tanah Kerikil
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '3 Type Tanah antara lain: Type A, B, C', '3 Type Tanah antara lain: Tanah Type A (Tanah Lempung), Type B (Tanah Liat), Type C (Tanah Kerikil)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 3 Type Tanah antara lain: Tanah Type A (Tanah Lempung), Type B (Tanah Liat), Type C (Tanah Kerikil)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '3 Type Tanah antara lain: Type A, B, C', '3 Type Tanah antara lain: Tanah Type A (Tanah Lempung), Type B (Tanah Liat), Type C (Tanah Kerikil)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 1 Type Tanah antara lain: Tanah Permukaan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '3 Type Tanah antara lain: Type A, B, C', '3 Type Tanah antara lain: Tanah Type A (Tanah Lempung), Type B (Tanah Liat), Type C (Tanah Kerikil)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 4 Type Tanah antara lain: Tanah Lempung, Tanah Kerikil, Tanah Liat, Tanah Permukaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q107</span>
        Yang masuk dalam category penggalian dan memerlukan perencanaan / mitigasi adalah minimal kedalaman ?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,2 meter', '1,2 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 1,5 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, '1,2 meter', '1,2 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 1,2 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,2 meter', '1,2 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 1,8 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, '1,2 meter', '1,2 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 2,0 meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q108</span>
        Implementasi housekeeping di lokasi kerja bertujuan untuk :
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Semua jawaban benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Menciptakan lokasi kerja yang aman, nyaman dan sehat.
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Semua jawaban benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Meningkatkan efisiensi kerja dan mengurangi unsafe condition
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Semua jawaban benar', 'Semua jawaban benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mengurangi potensi terjadinya pencemaran lingkungan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Semua jawaban benar', 'Semua jawaban benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Semua jawaban benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q109</span>
        Yang termasuk 5R di dalam Housekeeping, kecuali..
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Rajin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Rajin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Rajin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Rapi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Rajin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Resik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Jawaban yang tepat sesuai materi Basic HSE.', 'Rajin')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Ramai / Rusuh
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q110</span>
        HSSE DEMO ROOM PERTAMINA ZONA 4 1. Tidak dapat bekerja untuk melakukan pekerjaan sesuai jabatan/posisinya dan/atau posisi siapapun, dalam perawatan di rumah sakit, atau dalam status izin sakit (sick leave) adalah termasuk kategori?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'P2-P5')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> P1
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'P2-P5')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> P2-P5
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'P2-P5')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> P6
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'P2-P5')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> P7
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q111</span>
        PT Pertamina EP Asset 2 sudah menerapkan VTS (Vehicle Tracking System) pada setiap kendaraan perusahaan, dimana setting aplikasi pada kecepatan telah diatur. Di bawah ini, pilihlah aturan kecepatan berkendara yang menurut anda benar sesuai lokasi!
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kecepatan di Komplek Perumahan maks. 25 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Kecepatan di Lokasi sumur/SP/SPU/SKG maks. 35 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kecepatan di Komplek Perumahan maks. 25 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kecepatan di Jalan Utama/Jalan Lintas maks. 90 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Kecepatan di Komplek Perumahan maks. 25 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Kecepatan di Komplek Perumahan maks. 25 km/jam
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kecepatan di Komplek Perumahan maks. 25 km/jam')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Kecepatan di Jalan Tol. 120 km/jam
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q112</span>
        Dibawah ini yang merupakan ciri SIKA Khusus adalah..
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Jangka waktu pekerjaan Maksimal 7 Hari')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Jangka waktu pekerjaan Maksimal 7 Hari
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Jangka waktu pekerjaan Maksimal 7 Hari')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Jangka waktu Pekerjaan bisa sampai 2 minggu
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Jangka waktu pekerjaan Maksimal 7 Hari')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Jumlah Pekerjaan lebih dari 1
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Jangka waktu pekerjaan Maksimal 7 Hari')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Jika masa berlaku habis SIKA tidak bisa di perpanjang
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q113</span>
        Pengurus wajib memeriksakan kesehatan, kondisi mental dan kemampuan fisik dari tenaga kerja yang akan diterima maupun yang akan dipindahkan. Pengurus wajib memeriksakan secara berkala kepada Dokter yang ditunjuk. Norma pengujian kesehatan diatur dalam peraturan perundangan. Ayat diatas adalah isi dari undang-undang No. 1 tahun 1970 tentang Keselamatan kerja:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'BAB IV Pengawasan – Pasal 8')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> BAB VII Kecelakaan – Pasal 12
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'BAB IV Pengawasan – Pasal 8')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> BAB IV Pengawasan – Pasal 8
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'BAB IV Pengawasan – Pasal 8')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> BAB V Pembinaan – Pasal 9
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'BAB IV Pengawasan – Pasal 8')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> BAB VII Kecelakaan – Pasal 11
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q114</span>
        Menurut Standar Ketentuan Umum Pemadaman api & Kebakaran (KUPAK), Jarak Gudang Bahan Peledak (Handak) harus terletak pada jarak ….. Meter dari bangunan lain atau rumah kediaman orang lain.
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', '300 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 300 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '300 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 100 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '300 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 400 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '300 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 200 Meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q115</span>
        Sebelum melakukan pekerjaan, pekerja wajib melakukan Fit To Task sebelum bekerja. Apa saja yang diperiksa saat melakukan Fit To Task?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Detak jantung, tekanan darah, berat badan, pernapasan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Suhu tubuh, berat badan, tinggi badan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Detak jantung, tekanan darah, berat badan, pernapasan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Detak jantung, cek darah, cek buta warna
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Detak jantung, tekanan darah, berat badan, pernapasan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Detak jantung, tekanan darah, berat badan, pernapasan
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Detak jantung, tekanan darah, berat badan, pernapasan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Suhu tubuh, detak jantung, tekanan darah, SPO2
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q116</span>
        Berikut ini merupakan lembar kerja untuk pekerjaan? (Mengacu pada gambar di dokumen asli)
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bekerja diruang terbatas / confine space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bekerja di ketinggian
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bekerja diruang terbatas / confine space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pekerjaan Panas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Bekerja diruang terbatas / confine space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Bekerja diruang terbatas / confine space
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bekerja diruang terbatas / confine space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Bekerja di penggalian
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q117</span>
        Lembar SIKA yang berwarna Merah diserahkan kepada...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Pemberi Ijin / Asset Holder')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pemberi Ijin / Asset Holder
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemberi Ijin / Asset Holder')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Peminta Ijin
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemberi Ijin / Asset Holder')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> HSSE
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemberi Ijin / Asset Holder')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Pemegang Ijin
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q118</span>
        Hal berikut ini yang bukan termasuk kategori Unsafe Action adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Tidak ada Sign Peringatan Kebisingan di area Genset')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Memacu kendaraan pada kecepatan yang tidak sesuai
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Tidak ada Sign Peringatan Kebisingan di area Genset')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Tidak ada Sign Peringatan Kebisingan di area Genset
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Tidak ada Sign Peringatan Kebisingan di area Genset')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Tidak menggunakan Fullbody Harnest saat bekerja di ketinggian
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Tidak ada Sign Peringatan Kebisingan di area Genset')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Masuk kedalam tanki tanpa alat bantu pernapasan (SCBA)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q119</span>
        Untuk masuk ke Fasilitas Produksi ataupun Fasilitas Penunjang wajib menggunakan kendaraan berbahan bakar solar/diesel, di atas adalah termasuk contoh penerapan Hierarki Pengendalian Resiko, yaitu:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Administrasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Subtitusi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Mitigasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Eliminasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q120</span>
        Berikut ini adalah Hierarki Pengendalian Resiko berdasarkan OHSAS 18001:2008. Manakah urutan yang benar (dari yang tertinggi)?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi, Subtitusi, Administrasi, Rekayasa Engineering, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Eliminasi, Subtitusi, Administrasi, Rekayasa Engineering, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi, Subtitusi, Administrasi, Rekayasa Engineering, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Subtitusi, Eliminasi, Administrasi, Rekayasa Engineering, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi, Subtitusi, Administrasi, Rekayasa Engineering, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Eliminasi, Subtitusi, Rekayasa Engineering, Adminstrasi, APD
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Eliminasi, Subtitusi, Administrasi, Rekayasa Engineering, APD')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Administrasi, Eliminasi, Subtitusi, Rekayasa Engineering, APD
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q121</span>
        Di bawah ini yang bukan merupakan HSE Golden Rules adalah?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Integrity')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Patuh
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Integrity')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Peduli
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Integrity')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Intervensi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Integrity')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Integrity
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q122</span>
        Berikut ini adalah APD perlindungan muka dan mata, kecuali:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Safety Gloves')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Safety Glasses
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Safety Gloves')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Face Shields
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Safety Gloves')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Goggles
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Safety Gloves')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Safety Gloves
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q123</span>
        Berapakah nilai ambang batas kebisingan dengan waktu pemaparan 8 jam per hari?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '85 dB')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 65 dB
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '85 dB')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 75 dB
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', '85 dB')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 85 dB
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '85 dB')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 83 dB
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q124</span>
        Bekerja sesuai dengan urutan pelaksanaan pekerjaan termasuk dalam HSE Golden Rules poin:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Patuh pada peraturan, prosedur, dan hukum
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Peduli pada orang lain dan sekitarnya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Melakukan Intervensi terhadap tindakan tidak aman
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Patuh pada peraturan, prosedur, dan hukum')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Menjaga Integritas Fasilitas/ Asset Perusahaan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q125</span>
        Apakah yang menjadi ketentuan penguncian LOTO (Lock Out Tag Out)?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Pemasang harus memegang anak kuncinya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Pemasang harus memegang anak kuncinya
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemasang harus memegang anak kuncinya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Pemilik asset perlu memiliki anak kunci
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemasang harus memegang anak kuncinya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Gembok dan anak kunci harus dimiliki oleh beberapa orang
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Pemasang harus memegang anak kuncinya')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Alat pengunci dapat dibuka oleh siapapun
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q126</span>
        Pengaturan Shift Kerja termasuk kategori dalam Hirarki Pengendalian Risiko?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Administrasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Subtitusi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Administrasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Rekayasa Enjinering
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Administrasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Administrasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Administrasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Eliminasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q127</span>
        Element Nomer 5 Dalam System Management HSSE adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Implementasi dan pengendalian Operasional')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Perencanaan dan Prosedur
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Implementasi dan pengendalian Operasional')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kebijakan dan Sasaran
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Implementasi dan pengendalian Operasional')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Manajemen Risiko
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Implementasi dan pengendalian Operasional')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Implementasi dan pengendalian Operasional
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q128</span>
        Telah melakukan upaya pengelolaan Lingkungan yang dipersyaratkan sesuai dengan ketentuan & atau peraturan perundang-undangan yang berlaku. Adalah peringkat PROPER:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'PROPER BIRU')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> PROPER HIJAU
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'PROPER BIRU')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> PROPER BIRU
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'PROPER BIRU')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> PROPER EMAS
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'PROPER BIRU')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> PROPER MERAH
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q129</span>
        Dalam Audit SUPREME penyajian nilai harus disajikan dengan warna (Color Type). Dibawah ini yang bukan termasuk warna valid (Valid Colour) adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Not Accepable (&lt; 60%)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Not Tolerable (≥60% to 70%)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Not Accepable (&lt; 60%)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Tolerable / Adequate (≥70% to 80%)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Not Accepable (&lt; 60%)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Not Accepable (&lt; 60%)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Not Accepable (&lt; 60%)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Accepable / Fully Adequate (≥80% to 90%)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q130</span>
        Color coding adalah bentuk labelling hasil inspeksi (visual, NDT) pada suatu periode (setiap 6 bulan). Warna Kuning adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Hijau
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kuning
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Biru
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hijau')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Merah
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q131</span>
        Penggunaan Gas Testing pada pekerjaan Confined Space dilakukan saat:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Berkala sebelum, dan selama aktivitas di Confined Space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Sebelum aktivitas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Berkala sebelum, dan selama aktivitas di Confined Space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Berkala sebelum, dan selama aktivitas di Confined Space
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Berkala sebelum, dan selama aktivitas di Confined Space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pada saat aktivitas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Berkala sebelum, dan selama aktivitas di Confined Space')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Sesudah aktivitas
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q132</span>
        Gambar di samping merupakan Tabel? …. (Mengacu pada gambar NFPA Diamond di dokumen asli)
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'NFPA 704')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> NFPA 702
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'NFPA 704')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> NFPA 704
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'NFPA 704')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> API RP 54
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'NFPA 704')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Per. Men. LH 3/2008
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q133</span>
        Warna Biru pada Label MSDS adalah untuk mengidentifikasi bahaya?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bahaya Kesehatan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Bahaya Terbakar
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bahaya Kesehatan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Bahaya Reaktivitas
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Bahaya Kesehatan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Bahaya yang bersifat Khusus
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Bahaya Kesehatan')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Bahaya Kesehatan
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q134</span>
        Oli yang terbakar adalah contoh kebakaran tipe?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kebakaran Tipe D')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Kebakaran tipe A
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Kebakaran Tipe D')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Kebakaran Tipe D
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kebakaran Tipe D')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Kebakaran Tipe C
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Kebakaran Tipe D')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Kebakaran Tipe B
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q135</span>
        Berikut salah satu contoh Critical Protection adalah?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ESD System')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> SCBA
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'ESD System')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> ESD System
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ESD System')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Lock Out Tag Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ESD System')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Personal Gas Detector
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q136</span>
        Suatu sistem yang dirancang untuk mencegah seseorang jatuh, berupa control engineering seperti pagar atau rail guard, adalah pengertian dari:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Fall Prevention')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Fall Protection
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Fall Prevention')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 100 Percent Tie Off
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Fall Prevention')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Fall Prevention
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Fall Prevention')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Fall-Arrest System
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q137</span>
        Jarak aman dari Pagar Lokasi Sumur Produksi ke Jalan Umum (Public Road) sesuai Dasar Hukum Jarak Aman adalah?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', '50 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 50 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '50 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 30 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '50 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 20 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '50 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 25 Meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q138</span>
        Apa nama alat Pelindung diri di atas? (Mengacu pada gambar di dokumen asli)
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Full Body Harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Lanyard
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Full Body Harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Webbing Sling
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Full Body Harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Full Body Harness
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Full Body Harness')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Tali Safety
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q139</span>
        APAR adalah Alat Pemadam Api Ringan berbentuk tabung yang berisi bahan-bahan tertentu untuk memadamkan api. Berikut isi jenis-jenis APAR, Kecuali...
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hydrogen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> CO₂
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hydrogen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Dry Powder
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Hydrogen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Hydrogen
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Hydrogen')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Foam
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q140</span>
        Standard Internasional mengenai Sistem Manajemen Lingkungan:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ISO 14001 : 2015')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> OHSAS 18001
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'ISO 14001 : 2015')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> ISO 14001 : 2015
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ISO 14001 : 2015')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> ISO 9001 : 2015
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'ISO 14001 : 2015')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> ISO 14001 : 2016
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q141</span>
        Kepanjangan dari LOTO adalah?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Lock Out Tagline Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Lock Out Tag Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Log Out Tag Out
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Lock Out Tag Out')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Log Out Tagline Out
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q142</span>
        Apa kepanjangan PLO yang terkait dengan Asset Integrity?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Persetujuan Layak Operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Prevention Loss Operation
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Persetujuan Layak Operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Persetujuan Layak Operasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Persetujuan Layak Operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Peraturan Lama Operasi
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Persetujuan Layak Operasi')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Perijinan Layak Operasi
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q143</span>
        Urutan yang benar dalam pengaplikasian Warna LOTO sesuai fungsi; Mekanik - Electrikal & Instrument - Confined Space – Asset Holder Adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Merah – Biru – Kuning – Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Merah – Putih – Kuning - Biru
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Merah – Biru – Kuning – Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Merah – Biru – Kuning – Putih
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Merah – Biru – Kuning – Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Biru – Putih – Merah - Kuning
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Merah – Biru – Kuning – Putih')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Biru – Merah – Putih - Kuning
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q144</span>
        Gambar di samping adalah Logo Corporate Life saving Rules (CLSR) untuk: (Mengacu pada ikon di dokumen asli)
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Permit To Work')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Asset Integrity
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Permit To Work')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Confined Space
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Permit To Work')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Isolation
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Permit To Work')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Permit To Work
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q145</span>
        Penggalian (Excavation) memerlukan perencanaan / Mitigasi mulai dikedalaman minimal?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '1,2 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 1,5 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '1,2 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 1,8 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', '1,2 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 1,2 Meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '1,2 Meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 2 Meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q146</span>
        Sumber energi yang dapat menimbulkan kecelakaan kerja, sehingga memerlukan LOTO dalam pengerjaannya yaitu energi:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'A, B dan C Benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Listrik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'A, B dan C Benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Mekanik Hidrolik
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'A, B dan C Benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Pnuematic
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'A, B dan C Benar')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> A, B dan C Benar
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q147</span>
        Saat terjadi keadaan darurat di Lapangan/Field tim manakah yang melakukan Langkah taktis di Lokasi agar Insiden dapat secara langsung ditanggulangi..?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'SERT (Site Emergency Response Team)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> CMT (Crisis Management Team)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'SERT (Site Emergency Response Team)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> BST (Business Support Team)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'SERT (Site Emergency Response Team)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> IMT (Incident Management Team)
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'SERT (Site Emergency Response Team)')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> SERT (Site Emergency Response Team)
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q148</span>
        Safety Shower / Eye Wash harus diletakkan berapa meter dari potensi bahaya?
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '3 – 15 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> 5 – 15 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '3 – 15 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> 10 – 25 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', '3 – 15 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> 3 – 15 meter
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', '3 – 15 meter')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> 7 – 15 meter
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
    <div class="quiz-box" style="background:var(--surface); border:1px solid var(--border); padding:20px; border-radius:10px;">
      <h4 style="margin-bottom:15px; font-size:15px; color:var(--text); line-height:1.5;">
        <span style="background:#8b5cf6; color:white; padding:2px 8px; border-radius:4px; font-size:12px; margin-right:8px; display:inline-block; margin-bottom: 4px;">Q149</span>
        Corporate Life Saving Rules (CLSR) yang di gunakan oleh Subholding Upstream PHE yaitu 15 CLSR. 12 CLSR dari Pertamina Persero (Corporate) & 3 CLSR tambahan dari PHE. Dibawah ini yang merupakan 3 Elemen CLSR tambahan dari PHE adalah:
      </h4>
      <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Isolation, Tools & Equipment, & Management of Change')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>A.</strong> Ground Disturbance, Asset Integrity & Safe Zone Position
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, true, 'Berdasarkan prosedur standar HSE Migas.', 'Isolation, Tools & Equipment, & Management of Change')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>B.</strong> Isolation, Tools & Equipment, & Management of Change
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Isolation, Tools & Equipment, & Management of Change')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>C.</strong> Ground Disturbance, Personal Flotation Device & System Override
        </button>
        <button class="opt-btn" onclick="checkAnswer(this, false, 'Berdasarkan prosedur standar HSE Migas.', 'Isolation, Tools & Equipment, & Management of Change')" style="text-align:left; padding:12px 15px; border:1px solid var(--border); background:var(--bg); border-radius:6px; cursor:pointer; font-size:14px; transition:all 0.2s; color:var(--text);">
            <strong>D.</strong> Hot Work, Ground Disturbance & Management of Change
        </button>
      </div>
      <div class="feedback-box" style="display:none; margin-top:15px; padding:15px; border-radius:6px; font-size:14px; line-height:1.6;"></div>
    </div>
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

\`
  }
`;

