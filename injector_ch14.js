const ch14Content = `  {
    id: 'ch14', num: 14, title: '50 Soal Hardcore (Exam)', badge: 'badge-red',
    desc: 'Simulasi setara ujian akhir HSE tingkat mahir. Menguji parameter logis dan kedalaman insting Anda.',
    icon: '🎯',
    html: \`

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

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">1</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Pada kondisi tekanan atmosfer normal, konsentrasi gas Methane (CH4) di udara mencapai 8%. Berdasarkan karakteristik LEL (5%) dan UEL (15%), apa status bahaya di lokasi tersebut?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Campuran sangat mudah meledak ('Explosive Mixture') jika ada sumber panas atau percikan, karena berada di dalam rentang eksplosif (antara 5% - 15%).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> LEL (Lower Explosive Limit) Methane adalah 5%, dan UEL (Upper) adalah 15%. Karena 8% berada di rentang tersebut, udara sudah cukup kaya untuk terbakar namun belum 'terlalu kaya' untuk batal meledak. Ini adalah kondisi sangat kritis.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">2</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Seorang pekerja di area <em>cellar</em> RIG mencium bau telur busuk yang sangat menyengat, namun dua menit kemudian ia tidak bisa mencium apapun. Apa fenomena yang terjadi dan seberapa bahayanya?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Pekerja mengalami <em>Olfactory Fatigue</em> (kelumpuhan saraf indra penciuman) akibat pajanan H2S di atas 100 ppm. Ini adalah kondisi sangat mematikan yang bisa berujung pingsan mendadak dalam hitungan menit.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> H2S mematikan saraf penciuman dengan cepat di atas 100 ppm. Hilangnya bau bukan berarti gasnya hilang, melainkan konsentrasinya justru masuk ke tahap letal (mematikan).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">3</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam sistem Permit to Work (PTW), sebelum melakukan pekerjaan Pengelasan (Hot Work) di area kilang, jarak aman radius untuk memastikan tidak ada material mudah terbakar adalah...</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Standar minimal radius aman adalah 15 meter (atau 35 feet menurut beberapa standar internasional seperti API/OSHA), dengan penutupan (blanketing) seluruh saluran drainase memakai fire blanket.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Bunga api dari pengelasan (slag) dapat melayang jauh. Jarak 15 meter adalah standar pembersihan minimal, dibarengi dengan penyediaan Firewatch (pengawas api).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">4</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Jika indikator Portable Gas Detector berbunyi dan menunjukkan peringatan STEL (Short Term Exposure Limit) untuk gas H2S, berapa lama batas waktu maksimal seorang pekerja boleh berada di area tersebut?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Pekerja BISA tertahan maksimal 15 menit, dengan syarat tidak lebih dari 4 kali dalam sehari dan ada jeda 1 jam antar pajanan.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Di banyak standar (seperti ACGIH lama, atau standar perusahaan tertentu), STEL H2S ditetapkan di angka 15 ppm untuk durasi 15 menit. TWA (harian) adalah 10 ppm untuk 8 jam.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">5</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Ketika alarm rig berbunyi panjang secara terus-menerus (Abandon Rig/Muster sign), ke arah mana kru harus berjalan menuju Muster Point jika melihat arah tiupan angin (Windsock) menunjuk ke Utara?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Kru harus bergerak ke arah Selatan (berlawanan dengan arah angin/<em>Upwind</em>) atau bergerak menyamping (<em>Crosswind</em>) jika jalur Selatan tertutup. Jangan searah angin (<em>Downwind</em>).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Gas beracun dan awan api akan terbawa oleh tiupan angin. Berlindung ke arah <em>Upwind</em> memastikan kru mendapatkan pasokan udara bersih.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">6</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Terdapat tumpahan cairan Hidrokarbon yang terbakar (Kelas B) di area trafo listrik bertegangan tinggi yang belum dimatikan (Kelas C). Jenis APAR apa yang paling TEPAT dan AMAN digunakan?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">APAR tipe CO2 (Karbon Dioksida) atau Dry Chemical Powder tipe ABC. DILARANG KERAS menggunakan jenis Air atau Busa (Foam) karena air menghantarkan listrik (risiko tersengat listrik/electrocution).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Trafo aktif berarti ini adalah api Kelas C (Listrik). Syarat wajibnya, media pemadam dilarang berupa cairan berair.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">7</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Apa perbedaan krusial antara LTI (Lost Time Incident) dan RWC (Restricted Work Case) dalam pelaporan kejadian?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">LTI berarti korban kehilangan jam kerja (tidak bisa bekerja keesokan harinya). RWC berarti korban masih bisa datang bekerja keesokan harinya, namun tugasnya dipindah ke pekerjaan lebih ringan.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Metrics ini sangat dinilai dalam tender kontrak MIGAS. LTI menghancurkan skor keselamatan, sementara RWC (contoh: kuli rig sementara jadi admin) masih di bawah LTI.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">8</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Konsep <em>Fire Tetrahedron</em> menambahkan elemen keempat dari <em>Fire Triangle</em> klasik. Apa elemen tersebut dan sebutkan metode pemadaman spesifik untuk elemen keempat tersebut!</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Elemen ke-4 adalah Reaksi Rantai Kimia (Chemical Chain Reaction). Metode pemadamannya disebut <em>Inhibiting</em> (menghambat reaksi), contohnya menggunakan APAR jenis Halon (meski sekarang dibatasi) atau Dry Chemical Powder.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Serbuk kimia memutus jalinan radikal bebas di dalam nyala api, sehingga api langsung putus seketika tanpa perlu menghilangkan oksigen atau menurunkan panas.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">9</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam operasi <em>Confined Space Entry</em>, tugas seorang <em>Hole Watch</em> (Attendant) saat melihat rekan kerjanya pingsan di dalam tangki adalah...</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Membunyikan alarm/radio panggilan darurat (Emergency Response Team) dan memantau korban dari luar. <strong>DILARANG MASUK</strong> untuk menolong ke dalam tanpa APBA/SCBA dan tim evakuasi penyelamatan profesional.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Lebih dari 60% kematian di confined space adalah para penolong/attendant yang nekat masuk tanpa perlengkapan karena refleks ingin menolong, dan ikut tewas menghirup gas beracun.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">10</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Pada <em>Hierarchy of Control</em>, seorang manajer rig memutuskan memasang sistem ventilasi mekanik otomatis <em>blower exhaust</em> untuk membuang asap las. Ini masuk dalam kategori kontrol apa?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Rekayasa Teknik (Engineering Control).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Sistem ini secara mekanis mengubah mesin/lingkungan kerja agar aman, berada satu tingkat di bawah Eliminasi/Substitusi, dan jauh lebih unggul dari sekadar Kontrol Administratif atau APD.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">11</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Kapan waktu yang paling tepat untuk melakukan <em>Bump Test</em> pada Portable Multi-Gas Detector yang Anda pegang?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Setiap hari, tepat SEBELUM alat mulai digunakan pada shift tersebut.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Bump Test adalah pengujian singkat (menyemprotkan gas kalibrasi ke sensor) untuk memverifikasi alarm dan sensor bereaksi merespon gas, bukan kalibrasi akurasi menyeluruh.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">12</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sistem LOTO (Lock Out Tag Out) digunakan untuk mematikan energi berbahaya. Siapa satu-satunya orang yang berhak mencabut gembok LOTO dari panel listrik?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Hanya orang/pekerja yang memasang gembok tersebut (Authorized Person yang tertulis namanya di Tag/Label).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Ini adalah aturan keselamatan nyawa nomor satu agar tidak ada miskomunikasi dan alat dinyalakan saat orang yang mengunci mesin tersebut masih bekerja masuk di dalam mesin.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">13</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Tali <em>Tagline</em> sering disyaratkan saat proses Lifting (pengangkatan) dengan Crane di area RIG. Apa fungsi spesifik benda tersebut?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Fungsinya untuk mengontrol ayunan (swing) beban gantung dari jarak kejauhan yang aman. Dilarang menyentuh beban langsung dengan tangan (Hands-Free lifting).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Tagline mencegah pekerja terjebak/terjepit di antara muatan dan fasilitas RIG yang stasioner.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">14</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Seorang <em>Firewatch</em> (Pengawas Api) di area MIGAS memiliki kewajiban untuk tetap berjaga di titik kerja setelah sebuah pekerjaan Pengelasan (Hot Work) telah selesai seratus persen. Mengapa hal ini diwajibkan, dan berapa durasinya?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Harus tetap berjaga selama minimal 30 menit (standar umum). Tujuannya untuk memastikan tidak ada percikan api terselubung (smoldering fire) tertinggal yang tiba-tiba membesar kembali.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Percikan / <em>slag</em> las bisa masuk ke sela sempit dan memendam panas yang tidak terlihat langsung oleh pandangan awal.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">15</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Pada label warna Scaffolding (Perancah), apa arti label Tag Hijau (Green Tag) dan Kuning (Yellow Tag)?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Hijau berarti perancah siap/aman 100% untuk digunakan umum. Kuning berarti perancah sedang dimodifikasi atau memiliki bahaya tersembunyi, sehingga HANYA boleh dinaiki dengan instruksi khusus (misal wajib 100% full body harness tie-off).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Merah berarti dilarang keras dinaiki (kecuali Scaffolder). Pewarnaan ini diatur secara universal oleh badan keselamatan konstruksi.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">16</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Helm safety (Hard Hat) seorang kru terjatuh dari lantai derrick atau crane (ketinggian sekitar 30 meter), tetapi secara fisik luar terlihat tidak retak atau pecah sama sekali. Bolehkah helm tersebut langsung digunakan kembali?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">TIDAK BOLEH. Helm safety yang sudah mengalami benturan keras harus segera di-afkir (dihancurkan/dibuang) karena suspensi bagian dalam atau struktur mikroskopik plastiknya telah melemah menahan impak, dan tidak sanggup menahan kecelakaan selanjutnya.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Hard hat diciptakan untuk menerima kerusakan (berubah bentuk memecah energi). Jika jatuh ekstrem, energinya sudah melemahkan cangkang meski mata secara tak kasat merasakannya.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">17</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Jika seorang kru terpapar paparan gas H2S konsentrasi ekstrem (misalnya 700 - 1000 ppm), berapakah lama efek mematikan terjadi menurut ilmu medis toksikologi?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;"><em>Knockdown</em> seketika; orang tersebut akan pingsan kolaps hanya dalam hitungan 1 atau 2 kali tarikan napas pendek, dan kematian klinis menyusul dalam hitungan menit.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Tidak akan ada kesempatan batuk, mual, atau meminta tolong. Sistem saraf otak (pernapasan) seketika dimatikan. H2S adalah *Silent Killer*.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">18</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Di dalam operasi Lifting atau Rigging, faktor *Dynamic Load* sangat diperhitungkan di atas lepas pantai. Apa yang dimaksud dengan *Dynamic Load*?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Dynamic Load merujuk pergeseran bobot berlebih sekunder karena benda bergerak, dihentikan tiba-tiba (jerking), atau gerakan kapal tersapu ombak kencang (heave). Beban 20 Ton statis, namun bisa membebani crane hingga 25+ Ton saat terjadi daya hentak.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Cuaca lautan berdampak hebat. Mengangkat beban laut tak pernah murni seberat hitungan kilo statis di atas daratan aspal.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">19</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Apa singkatan dari SCBA dan secara umum apa perbedaan tipe <em>Open-Circuit</em> dengan <em>Closed-Circuit</em>?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Self-Contained Breathing Apparatus. *Open*: udara yang dihembuskan paru-paru langsung dibuang lepas ke udara bebas (sistem durasi pendek 30-45 mnt). *Closed*: udara karbon dioksida nafas diputar, di-sruput, ditambah oksigen re-breathe kembali ke paru-paru (durasi 4 jam).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Sistem closed circuit biasanya dipakai regu darurat di terowongan tambang tambang (*Mine Rescue*).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">20</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam parameter klasifikasi APAR (Alat Pemadam Api Ringan), tipe Kelas D dispesifikasikan untuk jenis benda terbakar apa dan medianya berupa apa?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Kelas D adalah untuk Kebakaran Logam Yang Bisa Terbakar (Combustible Metals) seperti Magnesium, Titanium, Sodium. Medianya adalah *Special Dry Powder* khusus mematikan reaksi rantai kimia logam.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Air, CO2, atau cairan pemadam standar justru bisa bereaksi ledakan dahsyat jika disemprotkan ke titik api metal magnesium / sodium!</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">21</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sebuah aktivitas pekerjaan pembongkaran pipa berkarat dinilai berbahaya karena lokasinya berada tepat di bawah tempat pengelasan struktur menara crane. Bahaya jatuhan apakah yang paling terkait dengan hal ini?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Bahaya *Dropped Object* tipe Dinamis (atau Sparks/Slag sekunder DROPS).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Situasi ini biasanya memicu pelarangan pekerjaan tumpang tindih secara vertikal (Simultaneous Operations / SIMOPS vertical clash) di lapangan.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">22</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Apa yang membedakan klasifikasi 'Near Miss' (Nyaris Celaka) dari sekadar 'Unsafe Condition' (Kondisi Tidak Aman)?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Near Miss merupakan kejadian insiden (peristiwa pergerakan/momentum) yang nyata-nyata sudah terjadi, tapi secuil kebetulan yang menyebabkan tidak adanya cedera atau kerugian jiwa. Unsafe Condition adalah benda atau situasi yang pasif diam, menunggu dipicu.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Kunci perbedaannya: Near Miss adalah KEJADIAN (contoh palu jatuh meleset 1 cm dari bahu). Unsafe Condition adalah STATE / Kondisi (contoh palu diletakkan berantakan pinggir atap).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">23</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Standar Oksigen yang layak dan minimal aman dihirup konstan bagi manusia (khusus sebelum memasuki ruang <em>Confined Space</em> menggunakan gas detector) adalah sebesar?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Antara 19.5% (Batas minimum oksigen bernapas di bawah bahaya asfiksia) sampai maksimal 23.5% (Batas Atas sebelum rawan letusan api atau Oxygen Defisiensi Oksidatif).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Rata-rata atmosfer bumi sehat mencatat 20.9% oksigen di level normal pesisir.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">24</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sistem pelindung mata <em>Safety Google</em> yang sering ditemui memiliki <em>Anti-fog coating</em>. Tapi dalam keadaan debu ekstrim serbuk gerinda, mengapa <em>Face Shield</em> bening wajah tetap diwajibkan dipakai membungkus Goggles mata tersebut?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Karena debu partikel berkecepatan tinggi atau serpihat kawat pemutar gurinda bisa saja memantul memukul hidung, dahi dan rongga wajah di sekitar mata (yang tak dilindungi kaca mata mungil). Safety Goggle HANYA memproteksi biji kornea mata saja.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Face-shield (perisai wajah polycarbonate) adalah pertahanan Utama lapis 1 (primary defense for high-speed impact). Bukan hanya sekedar melindungi dari kilauan percikan.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">25</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam konsep <em>Heinrich Pyramid</em> (1-29-300), seberapa sering secara statistik sebuah <em>Fatality</em> (Kematian/Insiden Berat) diprediksi akan timbul?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">1 fatalitas besar biasanya muncul dari setiap 300 perilaku menyimpang (*unsafe act*) atau 300 kejadian bahaya nyaris celaka tanpa cedera (*no-loss incident*) yang terbiarkan lepas kontrol.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Model ini membuktikan perlunya kita memberantas yang 300 (perilaku salah sehari-hari sepele), sebelum ia mengerucut menanjak memakan 1 korban meninggal dunia permanen.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">26</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Lampu penerangan di area operasional RIG sering dilengkapi dengan kurungan kawat pelindung (Wire Guard), tambahan Safety Wire Glass, serta tersertifikasi Explosion Proof. Mengapa sertifikasi Explosion Proof begitu esensial?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Supaya seandainya terjadi korsleting atau loncatan api (spark) dari bohlam di dalam, percikan tersebut terkurung kokoh tidak menembus memicu uap bensin atau gas meledak di luar kaca.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Lampu Explosion Proof tidak berarti tahan jika dilemparkan bahan peledak dari luar, melainkan menahan *internal explosion* agar tidak merembet ke lingkungan luar yang kaya material mudah terbakar.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">27</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sebuah kontainer bahan kimia bertanda gambar piktogram 'Tengkorak Berlian Hitam (Skull and Crossbones)'. Dalam Globally Harmonized System (GHS), logo ini menunjukkan...</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Toksisitas Akut (Acute Toxicity) tingkat parah yang berakibat fatal meracuni nyawa hanya dalam dosis paparan yang sangat rendah.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Berbeda dengan tanda Plus atau tanda Seru (!) yang sekadar menunjukkan Iritan. Tengkorak mematikan secara cepat jika tertelan atau terhirup.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">28</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Saat kru memakai Ear Muff yang terpasang di helm untuk bekerja di area bising 110 desibel, apakah NRR (Noise Reduction Rating) benda tersebut sebesar 30 dB murni mengurangi jadi 80 dB secara linier?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">TIDAK. Dalam perhitungan nyata di lapangan (OHSA derating), rating 30 dB milik earmuff seringkali dibagi dua efektivitasnya (tinggal 15 dB) akibat pemakaian yang tidak sempurna atau ganjalan kacamata (Safety Glass/Temple break).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Pelindung telinga (HPD) ganda (Ear Plug + Ear Muff) sering diwajibkan bila sumber suara rig mendengung di atas 105 dBA.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">29</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Jika Anda tersetrum dan tubuh kaku kejang menempel pada sebuah instalasi listrik bertegangan tinggi, rekan Anda BERAKAR-AKAL mencoba menendang lepas tubuh Anda menggunakan sepatu boot karetnya. Salahkah itu?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Pasti SALAH dan MEMATIKAN. Menendang korban setrum bertegangan jutaan elektron akan mengalir melewati area kecil dari sepatunya menuju sekujur badannya pula. Langkah pertama selalu: PUTUSKAN Aliran Power Utama (MCB) seketika!</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Menolong korban *Electrocution* secara fisik langsung merupakan tiket nomor antrean tewas kedua. Selalu gunakan tongkat isolator tegap (*Rescue Hook*) setelah power terputus.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">30</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Bagaimana cara membaca batas beban aman dari sebuah *Webbing Sling* (Sabuk Selempang Pengangkat sintetis) hanya dari melihat warna sabuknya?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Standar internasional (EN 1492-1) menggunakan kode warna mutlak. Ungu = 1 Ton, Hijau = 2 Ton, Kuning = 3 Ton, Abu = 4 Ton, Merah = 5 Ton, Coklat = 6 Ton, Biru = 8 Ton, Oranye = di atas 10 Ton.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Kode warna mencegah kelalaian miskalkulasi bagi buruh rigger yang kurang jeli melihat tulisan buram di label tag selempang tali.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">31</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Seorang Operator Derek (Crane Operator) dilarang keras menarik beban (Load) yang tidak berada tepat di bawah titik lurus ujung boom cranenya (Side Pulling/Side Loading). Mengapa demikian?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Side Loading mengakibatkan gaya miring lateral (melengkung) pada struktur menara (boom/jib) yang tidak dirancang menahan beban tekuk menyamping, menyebabkan crane membengkok dan roboh/tumbang.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Crane dirancang untuk angkat VERTIKAL (tegak lurus melawan gravitasi bumi). Tarikan serong menghancurkan mekanika mesin.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">32</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam Permit to Work Excavation (Izin Kerja Penggalian), batas kedalaman parit galian minimum yang mensyaratkan wajib dibuatnya desain teknik dinding penahan tanah kelongsoran (Shoring/Trench box) adalah sejauh...</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Penggalian di lapangan melebihi kedalaman 1.2 hingga 1.5 meter (kira-kira 4-5 kaki setinggi dada/pundak manusia dewasa).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Longsoran tanah kubik seberat ratusan kilo akan langsung meremukkan tulang rusuk dan paru-paru pekerja dalam waktu kurang dari diam sedetik.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">33</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Berapa banyak Oksigen yang ditarik oleh konsumsi api besar (Pembakaran) di tempat tertutup? Bisakah ia memicu kondisi Hypoxia pada pekerja?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Api dengan rakus mengejar dan melahap Oksigen udara turun dari 21% hingga tersisa belasan persen saja. Kondisi ini PASTI memicu pusing asfiksia, disorientasi letih, disusul kolaps permanen (Hypoxia).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Inilah mengapa dalam musibah kebakaran hotel/gudang, korban meninggal akibat kehabisan napas/menghirup karbon monoksida jauh lebih banyak sebelum api fisik menyentuh kulit mereka.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">34</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sebuah insiden *Blowout* (Semburan Liar) dari dasar sumur Rig bor terjadi karena kegagalan parameter apa dalam cairan lumpur (Drilling Fluid / Mud)?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Kegagalan lumpur (Hydrostatic Pressure lumpur anjlok lebih lemah/terlalu ringan) dibanding menahan kuatnya Tekanan Pori Formasi batu gas bumi (Formation Pore Pressure) yang menyembur marah.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Lumpur (Mud) bukan pelumas semata, melainkan penyumbat beban berton-ton layaknya tutup botol raksasa di sumur.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">35</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Manakah yang benar tentang sistem pencegah semburan api BOP (Blowout Preventer)? Kapan alat ini harus dipotong memangkas memotong pipa?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Blind/Shear Ram (pisau baja) pada BOP ditekan hidrolik dari ujung, khusus difungsikan darurat untuk memotong putus pipa keras bor secara instan jika Blind Ram tumpul gagal menutup rongga/annulus.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Ini adalah gerbang pencegah ledakan utama jika sistem lumpur kalah. Pisau ini memotong besi pipa demi menutup ruang tembusan.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">36</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Apa yang memicu fenomena sumur <em>Swabbing Effect</em> saat cabut pipa bor (Tripping Out)?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Ujung pahat pipa besar yang dicabut terlalu mendadak kencang akan menimbulkan efek hisapan layaknya jarum suntik vaksin, menyedot paksa fluida gas naik ikut tersedot memicu *Kick*.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Kecepatan *Tripping Out* (mencabut besi) di area formasi sumur diatur halus agar lumpur di bawah pipa bisa bergeser mengisi rongga secara natural.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">37</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Dalam operasional RIG, zona lampu larangan merokok (No Smoking Policy) dipertegas melalui instrumen yang bernama Area Klasifikasi Ledakan (Hazardous Area Classification). Zone berapakah yang mengharamkan sumber api mutlak selama beroperasi?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Zona 0 (Lokasi di mana atmosfer gas racun eksplosif terjadi terus-menerus/jangka panjang seperti di DALAM tangki uap) dan Zona 1 (Lokasi di mana gas seringkali timbul under-normal operating layaknya <em>shale shaker</em> atau sumur terbuka).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Ponsel biasa, sepatu berpaku, dan perkakas palu besi adalah pantangan besar (harus pakai alat Copper/Beryllium Non-Sparking Tools) di zona keras.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">38</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Mekanisme pengaman *Secondary Retention* sering digembar-gemborkan dalam modul DROP prevention di RIG lepas pantai atas ketinggian. Apakah benda tersebut?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Sebuah kawat sling pengaman / pin R-clip baja kecil yang menjerat lampu/loud-speaker/mur pada dinding agar alat tersebut, meskipun kendor lepas angin, akan tetap tersangkut melayang-layang ditahan kawat kedua.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Kawat jaring (*net*) atau untaian ranting pencekik ini menjamin kelengahan korosi awal tidak merobohkan lampu menimpa dahi orang di lantai dasar.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">39</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Apa singkatan dari SOP dan JSA? Menjelang *tool box meeting* pagi, dokumen mana duluan yang mendikte langkah kerja lapangan?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">SOP (Standard Operating Procedure) & JSA (Job Safety Analysis). JSA dibuat spesifik runut harian menjabarkan bahaya per langkah urutan dari pekerjaan SOP, ditandatangani kru *HARI ITU* langsung di lokasi aspal kerja.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> SOP itu kitab abadi dari kantor besar. JSA itu adalah terapan observasi lapangan harian. Kinerja SOP tidak sah dilaksanakan jika JSA ditolak Supervisor.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">40</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sebutan untuk suatu pekerjaan dengan ruang sempit (Confined Space) memiliki syarat krusial 'Bukan Tempat Kerja Terus Menerus'. Artinya?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Konstruksinya (manhole minim) tidak pernah didesain arsitektur untuk manusia menempati dan berkantor masuk-keluar santai di dalamnya (contoh: Silo semen, dalam reaktor boiler). Pintu keluar-masuknya saja sudah mempersulit nyawa jika lari darurat.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Ruangan WC/Toilet betapa sempitnya bukan disebut Confined Space.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">41</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Sebuah insiden <em>First Aid Case</em> (FAC) dicatat minggu lalu. Bedanya dengan Medical Treatment Case (MTC) tingkat menengah adalah?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">FAC dituntaskan sebatas P3K (pasang plester, cuci mata debu, minum oralit, kompres es krim luar) dan bisa seketika balik bertugas sore itu. MTC sebaliknya mengharuskan jarum bius dokter klinik profesional (jahitan sticth 3 kali, potong fraktur/gips, suntik resep antibiotik keras).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Dokter medik spesialis mengubah FAC ringan menjadi skor MTC, walau korban tidak diliburkan di hari kerja itu juga.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">42</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Berapa lama periode validitas umum <em>Hot Work Permit</em> sebelum ia dikategorikan hangus dan butuh TTD (Tanda Tangan) Supervisor ulang mendadak?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Biasanya sah eksklusif untuk 1 Shift kerja lapangan penuh saja (maksimal 12 jam) atau tergantung kebijakan lokal jika pimpinan Supervisor beda orang.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Keadaan gas racun bumi berubah di shift maghrib vs pagi. Harus dites kalibrasi gas atmosfer detektor kembali dari titik Nol absolut.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">43</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Jika seorang kru operator mendapati rekannya pingsan diam saat melakukan pengelasan besi di sudut sempit bawah tangga RIG, pertolongan pernafasan resusitasi bantuan paling logis adalah?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Jauhkan korban asfiksia ke ruang udara melimpah sirkulasi dengan menyeret bajunya, periksa denyut Nadi Karotis leher. Hubungi Medic RIG dan bersihkan asap gas jalan pernapasannya perlahan sambil mematikan kran selang Las Oksigen Asetilin pemicu letupan di sudut ruangan seketika.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Fokus menjauhkan dia dari zat asfiksia dan bahaya gas berantai menduduki prioritas utama pra-resusitasi napas / CPR manual darah.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">44</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Pernah dengar filosofi ALARP? As Low As Reasonably Practicable. Inti roh ALARP dalam Mitigasi Resiko K3 Migas mewajibkan kita apa?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Menekan membuang tingkat probabilitas bahaya sekeras-kerasnya SEMAMPU teknis terjangkau dan logis realistis menimbang kerugian biaya operasional (Cost/Benefit), sampai risiko insiden dinilai sebatas 'zona residual pasrah' paling dapat dimaklumi.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Oksigen akan selalu ada. Baja akan selalu keropos usia. Gravitasi menjatuhkan pulpen akan selalu membayang. Resiko 'NOL/ZERO' tidak relevan, melainkan kita mengurung resiko tsb ke lembah kemustahilan termurah rasional ALARP.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">45</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Di atas dek RIG pengeboran terdapat <em>V-Door</em> dan <em>Rotary Table</em>. Mengapa lantai keras ini selalu dilumuri karpet khusus karet hitam keras kotak yang berat, alias <em>Anti-Slip / Rig Matting</em>?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Serpihan lumpur Drilling Mud sangat licin bak tumpahan oli murni jika dicampur air / hujan lautan asin. Karpet berat khusus anti-slip dengan lekukan griper mutlak digunakan merekat tapak Sepatu Safety kasat kasar pekerja *Roughneck* dari insiden patah tulang tergelincir maut merosot.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Terpeleset santai di kantor mungkin sebatas pegal pinggang. Terpeleset santai memegang tang besi 50 Kg saat bor berputar kencang, nyawa risikonya hancur bersimbah derrick.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">46</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Karakteristik api Gas Metana / Hidrokarbon dalam ledakan <em>Boilover</em>. Air memicu 'letupan uap megar massal 1:1700'. Jelaskan ringkas reaksi fisika di baliknya mengapa api tersebut justru mengamuk ketika disiram air?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Minyak ringan berada mengapung di atas batas lapisan air (densitas minyak kecil). Panas pembakaran menyebar didih cairan air di bawah hingga melesat meletup seketika uap (mengembang 1.700x volume uap mendadak) melempar memuntahkan gelombang lava api minyak panas tersebut.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Air bukan memadamkan, air mendidih meledak di bawa lantai memicu badai minyak pijar api terlontar dahsyat raksasa menyapu mobil pemadamnya sendiri.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">47</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Kacamata pengelasan (*Welding Goggle/Shields*) memiliki spesifikasi naungan (Shade Lens Number). Apakah nomor Shade 5 dan 11 itu maknanya sama?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">TIDAK BEDA JAUH. Shade 5 adalah untuk proses pemotongan oksigen asitelin memercik pijar ringan. Shade 10-12 adalah wajib gelap pekat mematikan silau biru radiasi busur setrum listrik Las Listrik (ARC/SMAW) berampere kuat.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Salah pilih lensa kaca = Mata Katarak Terbakar Retina seumur usia buta perlahan di kegelapan korneal Arc-Eye (Welder's flash sand).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">48</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Bagaimana cara membaca pelabelan HMIS / NFPA berlian 4 Warna kotak? Bagian mana merah, biru, kuning, putih secara spesifik merepresentasikan zat material?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Merah muda = Bahaya Mudah Terbakar Api (Flammability), Biru laut = Resiko Kesehatan Racun Tubuh (Health), Kuning terang = Ketidakstabilan Ledakan Reaktif (Reactivity/Instability), dan Putih kapur cerah = Info Spesial Khusus pengecualian alat perlakuan khusus air (Specific Hazard).</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Level bernomor mutlak 0-4. Nomot 4 pada Merah bermakna 'Uap gas sangat rawan terbakar spontan di tekanan hawa dingin santai ruangan' fatal cepat meledak.</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">49</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Suau kondisi darurat tumpahan B3 berlebih menutupi lantai. Menggunakan media serbuk *Sawdust* (Serbuk gergaji kayu lapuk rumahan) SANGAT dilarang menutrisi menyerap kimia tumpah B3 ini. Mengapa melanggar standar modern K3 dunia?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Sawdust terbuat dari serat karbon kayu kering rumahan, menyerap kimia justru membuatnya menjelma menjadi sebongkah mesiu bom bahan organik yang siap berkolaborasi api merambat kilat dengan oksigen sekitar ruangan! Bisa mencetuskan kebakaran spontan Spontaneous Combustion.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Solusi baku serap modern wajib pasir (sand), tanah liat lembam silikosis, cat litter inorganik, abu soda khusus (Absorbent Pads industri sintetik khusus Oil/Chemical).</p>
        </div>
      </div>
    </details>

    <details class="case-study-item" style="background: var(--surface); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <summary style="padding: 15px 20px; font-weight: 600; cursor: pointer; background: rgba(0,0,0,0.2); list-style: none; display: flex; align-items: flex-start; gap: 15px;">
        <span style="background: var(--danger); color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: bold;">50</span>
        <span style="line-height: 1.5; font-size: 15px; margin-top: 4px;">Terakhir, Puncak piramida The Heinrich adalah 1 korban meninggal dunia. Jika merombak mengubah piramida ini berbasis sistem kesadaran modern Budaya Perilaku 'BBS - Behavior Based Safety' kunci akar masalah insiden maut itu sebetulnya tersembunyi bersembunyi dimana?</span>
      </summary>
      <div style="padding: 20px; border-top: 1px solid var(--border); background: var(--bg);">
        <h4 style="color: var(--primary); margin-bottom: 10px; font-size: 15px;"><span class="icon">🔑</span> Kunci Jawaban Resmi:</h4>
        <p style="margin-bottom: 15px; line-height: 1.6;">Kunci akar sesungguhnya tidak terletak pada alat rusak (unsafe condition), MELAINKAN di tatanan otak Sikap meremehkan Manusia pekerja aspal murni (*Human error & Unsafe Behavior*) akibat minimnya budaya supervisi proaktif peduli menegur saling menyadarkan mengintimidasi keras satu sesama nyawa.</p>
        <div style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px 15px; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; font-size: 14px; color: #cbd5e1;"><strong>🧠 Analisis Logika:</strong> Alat canggih mati jika dirawat acuh. Safety mutlak bergantung kepedulian mental manusianya masing-masing!</p>
        </div>
      </div>
    </details>

  </div>
</div>

<div class="alert alert-success" style="margin-top: 40px;">
  <div class="alert-icon">🏆</div>
  <div class="alert-content">
    <div class="alert-title">Luar Biasa!</div>
    <div class="alert-text">Jika Anda mampu menjawab sebagian besar simulasi hardcore di atas dengan benar, Anda 100% siap diturunkan ke lapangan RIG manapun di seluruh dunia!</div>
  </div>
</div>

\`
  }
`;

fs.writeFileSync('chapters.js', 'dummy');
