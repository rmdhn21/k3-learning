// K3 Learning - Studio Data (NotebookLM-style features per chapter)
const STUDIO_DATA = {
  ch1: {
    title: 'Alat Pelindung Diri (APD)',
    mindMap: `mindmap
  root((APD))
    Pelindung Kepala
      Safety Helmet
      Hard Hat
      SNI / ANSI Z89.1
    Pelindung Mata
      Safety Glasses
      Goggles
      Face Shield
    Pelindung Telinga
      Ear Plug
      Ear Muff
      Kebisingan >85 dB
    Pelindung Pernapasan
      Masker
      Respirator
      SCBA
    Pelindung Tangan
      Gloves Kulit
      Gloves Karet
      Anti-Panas/Kimia
    Pelindung Kaki
      Safety Boots
      Steel Toe Cap
      Anti-Slip
    Pelindung Badan
      Coverall
      Rompi
      Apron
    Pelindung Jatuh
      Full Body Harness
      Lifeline
      Ketinggian >1.8m
    Hierarki Pengendalian
      1 Eliminasi
      2 Substitusi
      3 Rekayasa Teknik
      4 Administratif
      5 APD - Last Resort`,
    flashcards: [
      { front: 'Apa itu APD?', back: 'Alat Pelindung Diri - alat yang melindungi pekerja dari potensi bahaya di tempat kerja (Permenaker No. 8 Tahun 2010)' },
      { front: 'APD merupakan pertahanan ke berapa dalam hierarki pengendalian bahaya?', back: 'Pertahanan TERAKHIR (ke-5). Urutan: 1) Eliminasi, 2) Substitusi, 3) Rekayasa Teknik, 4) Administratif, 5) APD' },
      { front: 'Kapan ear plug/muff wajib digunakan?', back: 'Saat kebisingan melebihi 85 dB (area genset, mesin bor)' },
      { front: 'Apa standar safety helmet yang berlaku?', back: 'SNI dan ANSI Z89.1 - melindungi kepala dari benturan dan benda jatuh' },
      { front: 'Kapan full body harness wajib dipakai?', back: 'Saat bekerja di ketinggian lebih dari 1.8 meter' },
      { front: 'Siapa yang wajib menyediakan APD?', back: 'Pengusaha/perusahaan, secara CUMA-CUMA sesuai Permenaker' },
      { front: 'Apa parameter kalibrasi kekuatan helm pengeboran (rig)?', back: 'Uji Tekan 90 Newton - memastikan helm tahan hantaman benda jatuh (dropped tools) dari ketinggian derrick' },
    ],
    quiz: [
      { question: 'APD merupakan pertahanan ke berapa dalam hierarki pengendalian bahaya?', options: ['Pertama', 'Kedua', 'Ketiga', 'Terakhir (kelima)'], answer: 3, explanation: 'APD adalah pertahanan TERAKHIR. Urutan: Eliminasi → Substitusi → Rekayasa Teknik → Administratif → APD.' },
      { question: 'Ear plug/muff wajib digunakan pada tingkat kebisingan di atas berapa dB?', options: ['70 dB', '80 dB', '85 dB', '90 dB'], answer: 2, explanation: 'Pelindung telinga wajib digunakan saat kebisingan >85 dB sesuai standar K3.' },
      { question: 'SCBA digunakan pada kondisi apa?', options: ['Area panas', 'Confined space / area gas H₂S', 'Hujan deras', 'Area listrik tegangan tinggi'], answer: 1, explanation: 'SCBA (Self-Contained Breathing Apparatus) digunakan di confined space atau area terkontaminasi gas.' },
      { question: 'Full body harness wajib digunakan saat bekerja di ketinggian berapa?', options: ['>1 meter', '>1.5 meter', '>1.8 meter', '>2.5 meter'], answer: 2, explanation: 'Full body harness wajib dipakai saat kerja di ketinggian >1.8 meter sesuai standar ANSI Z359.11.' },
      { question: 'Standar internasional untuk safety goggles adalah...', options: ['ANSI Z89.1', 'ANSI Z87.1', 'EN 388', 'NFPA 1981'], answer: 1, explanation: 'ANSI Z87.1 adalah standar untuk pelindung mata (safety goggles/glasses).' },
      { question: 'Helm khusus pengeboran diuji dengan parameter kalibrasi berupa...', options: ['Uji Tarik 50 Newton', 'Uji Tekan 90 Newton', 'Uji Panas 100°C', 'Uji Kelistrikan 220V'], answer: 1, explanation: 'Helm khusus pengeboran dirancang dan dikalibrasi dengan Uji Tekan 90 Newton agar tahan hantaman benda jatuh berbahaya.' },
    ],
    summary: [
      'APD = Pertahanan TERAKHIR dalam hierarki pengendalian bahaya',
      'Hierarki: Eliminasi → Substitusi → Rekayasa Teknik → Administratif → APD',
      '8 jenis APD: Kepala, Mata, Telinga, Pernapasan, Tangan, Kaki, Badan, Jatuh',
      'Ear protection wajib pada kebisingan >85 dB',
      'Full body harness wajib di ketinggian >1.8 meter',
      'SCBA untuk confined space / area gas beracun',
      'APD wajib disediakan perusahaan secara GRATIS (Permenaker No. 8/2010)',
    ],
    infographic: [
      { label: 'Jenis APD', value: '8', icon: '🦺' },
      { label: 'Batas Bising', value: '85 dB', icon: '👂' },
      { label: 'Ketinggian Harness', value: '1.8 m', icon: '🪢' },
      { label: 'Posisi di Hierarki', value: 'Terakhir', icon: '🔽' },
      { label: 'Standar Helmet', value: 'ANSI Z89.1', icon: '⛑️' },
      { label: 'Standar Goggles', value: 'ANSI Z87.1', icon: '👓' },
    ],
  },
  ch2: {
    title: 'Klasifikasi APAR',
    mindMap: `mindmap
  root((APAR))
    Kelas Kebakaran
      A - Benda Padat
      B - Cairan
      C - Gas
      D - Logam
      K - Minyak Masak
    Media Pemadam
      Air / Water
        Kelas A
        Cooling
      Busa / Foam
        Kelas A dan B
        Smothering
      CO2
        Kelas B dan C
        Menghilangkan O2
      Dry Chemical Powder
        ABC - Serbaguna
        Memutus reaksi kimia
      Wet Chemical
        Kelas K
        Saponifikasi
    Teknik PASS
      P - Pull pin
      A - Aim nozzle
      S - Squeeze tuas
      S - Sweep kiri-kanan
    Inspeksi
      Bulanan - tekanan
      Tahunan - full check
      5 Tahunan - hydrostatic
    Penempatan
      Jarak 15 meter
      Tinggi 1.2 meter`,
    flashcards: [
      { front: 'Apa kepanjangan teknik PASS?', back: 'Pull (tarik pin) → Aim (arahkan nozzle) → Squeeze (tekan tuas) → Sweep (sapukan kiri-kanan)' },
      { front: 'Berapa jarak maksimal antar APAR?', back: '15 meter (Permenaker No. 4 Tahun 1980)' },
      { front: 'Media pemadam apa yang paling serbaguna?', back: 'Dry Chemical Powder (ABC) - efektif untuk kelas A, B, dan C' },
      { front: 'Apa itu kelas kebakaran B?', back: 'Kebakaran cairan mudah terbakar: bensin, solar, minyak, cat, alkohol' },
      { front: 'Berapa tinggi pemasangan APAR dari lantai?', back: '1.2 meter dari lantai' },
      { front: 'Kapan hydrostatic test APAR dilakukan?', back: 'Setiap 5 tahun - menguji tekanan tabung' },
      { front: 'Apa itu fenomena Boil Over pada Kelas B?', back: 'Terjadi saat menyiram minyak terbakar dengan AIR. Air menguap spontan mengekspansi volume 1.700 kali lipat, melontarkan bola api raksasa.' },
    ],
    quiz: [
      { question: 'Huruf "P" dalam teknik PASS berarti...', options: ['Push handle', 'Pull pin/segel', 'Point nozzle', 'Pump tekanan'], answer: 1, explanation: 'P = Pull, yaitu menarik pin pengaman sebelum menggunakan APAR.' },
      { question: 'CO₂ efektif untuk kelas kebakaran...', options: ['A dan B', 'B dan C', 'C dan D', 'A dan D'], answer: 1, explanation: 'CO₂ efektif untuk kelas B (cairan) dan C (gas), serta aman untuk peralatan listrik.' },
      { question: 'Jarak maksimal antar APAR menurut regulasi adalah...', options: ['10 meter', '15 meter', '20 meter', '25 meter'], answer: 1, explanation: 'Permenaker No. 4 Tahun 1980 menetapkan jarak maksimal 15 meter antar APAR.' },
      { question: 'Media pemadam yang paling serbaguna (ABC) adalah...', options: ['Air', 'Busa/Foam', 'CO₂', 'Dry Chemical Powder'], answer: 3, explanation: 'Dry Chemical Powder efektif untuk kelas A, B, dan C - paling serbaguna.' },
      { question: 'Hydrostatic test pada APAR dilakukan setiap...', options: ['6 bulan', '1 tahun', '3 tahun', '5 tahun'], answer: 3, explanation: 'Hydrostatic test (uji tekanan tabung) dilakukan setiap 5 tahun.' },
      { question: 'Fenomena ekspansi volume 1.700 kali lipat yang melontarkan bola api saat nyala api minyak disiram air disebut...', options: ['Flashback', 'Bleve', 'Boil Over', 'Backdraft'], answer: 2, explanation: 'Boil Over terjadi saat air disiram ke pembakaran cairan hidrokarbon. Air menguap dan mengekspansi 1.700x secara seketika.' },
    ],
    summary: [
      'APAR = Alat Pemadam Api Ringan (Fire Extinguisher)',
      '5 kelas kebakaran: A (padat), B (cair), C (gas), D (logam), K (minyak masak)',
      'Teknik PASS: Pull → Aim → Squeeze → Sweep',
      'Dry Chemical Powder (ABC) = media paling serbaguna',
      'Jarak antar APAR maksimal 15 meter, tinggi 1.2 meter dari lantai',
      'Inspeksi: Bulanan (tekanan), Tahunan (full), 5 Tahunan (hydrostatic)',
      'Jarak penyemprotan: 3-5 meter dari api, posisi searah angin',
    ],
    infographic: [
      { label: 'Kelas Kebakaran', value: '5', icon: '🔥' },
      { label: 'Jarak Antar APAR', value: '15 m', icon: '📏' },
      { label: 'Tinggi Pasang', value: '1.2 m', icon: '📐' },
      { label: 'Jarak Semprot', value: '3-5 m', icon: '🎯' },
      { label: 'Hydro Test', value: '5 thn', icon: '🔧' },
      { label: 'Media Terbaik', value: 'DCP-ABC', icon: '🧯' },
    ],
  },
  ch3: {
    title: 'Gas Detector',
    mindMap: `mindmap
  root((Gas Detector))
    Gas Berbahaya
      H2S
        TWA 10 ppm
        STEL 15 ppm
        Bau telur busuk
        Lebih berat dari udara
      CO
        TWA 25 ppm
        Tidak berbau
        Mengikat hemoglobin
      SO2
        TWA 2 ppm
        Bau menyengat
      CH4 - Methane
        LEL 5%
        Mudah terbakar
      O2 - Oksigen
        Normal 20.9%
        Aman 19.5-23.5%
    Jenis Detector
      Personal/Portable
        Single gas
        Multi gas 4-in-1
      Fixed/Stasioner
        Alarm sentral
      Gas Detection Tube
        Sekali pakai
        Berubah warna
    Kalibrasi
      Bump Test - Harian
      Kalibrasi - 3-6 Bulan
      Zero Calibration
      Span Calibration`,
    flashcards: [
      { front: 'Berapa batas aman H₂S (TWA)?', back: '10 ppm (Time Weighted Average - paparan rata-rata 8 jam kerja)' },
      { front: 'Berapa kadar oksigen normal di udara?', back: '20.9% - Batas aman: 19.5% - 23.5%' },
      { front: 'H₂S lebih berat atau lebih ringan dari udara?', back: 'Lebih BERAT dari udara - terakumulasi di area rendah seperti cellar, pit' },
      { front: 'Apa itu bump test dan kapan dilakukan?', back: 'Paparan gas uji singkat untuk memastikan sensor & alarm berfungsi. Dilakukan SETIAP HARI sebelum digunakan.' },
      { front: 'Berapa konsentrasi H₂S yang mematikan?', back: 'Di atas 300 ppm FATAL dalam hitungan menit. 100-200 ppm melumpuhkan indra penciuman.' },
      { front: 'Multi-gas detector biasanya mendeteksi berapa gas?', back: '4 gas: H₂S, CO, O₂, dan LEL (combustible gas)' },
      { front: 'Jika 100% LEL Metana adalah 5% volume, apa arti bacaan detektor 10% LEL?', back: 'Berarti di udara terdapat 0.5% volume cairan/gas metana, sudah menjadi peringatan keras untuk segera mengaktifkan ventilasi ekstra.' },
    ],
    quiz: [
      { question: 'Batas aman H₂S untuk paparan 8 jam (TWA) adalah...', options: ['5 ppm', '10 ppm', '15 ppm', '25 ppm'], answer: 1, explanation: 'TWA H₂S = 10 ppm. STEL (paparan singkat) = 15 ppm.' },
      { question: 'Kadar oksigen yang normal di udara adalah...', options: ['18.5%', '19.5%', '20.9%', '23.5%'], answer: 2, explanation: 'Kadar O₂ normal = 20.9%. Batas aman kerja: 19.5% - 23.5%.' },
      { question: 'Bump test pada gas detector dilakukan...', options: ['Setiap minggu', 'Setiap hari sebelum digunakan', 'Setiap bulan', 'Setiap 3 bulan'], answer: 1, explanation: 'Bump test wajib dilakukan SETIAP HARI sebelum gas detector digunakan.' },
      { question: 'Gas H₂S memiliki sifat...', options: ['Lebih ringan dari udara, berbau manis', 'Lebih berat dari udara, bau telur busuk', 'Tidak berwarna dan tidak berbau', 'Berbau menyengat, ringan'], answer: 1, explanation: 'H₂S lebih berat dari udara dan berbau telur busuk. Terakumulasi di area rendah.' },
      { question: 'TWA untuk Carbon Monoxide (CO) adalah...', options: ['10 ppm', '15 ppm', '25 ppm', '50 ppm'], answer: 2, explanation: 'TWA CO = 25 ppm. CO tidak berwarna dan tidak berbau sehingga sangat berbahaya.' },
      { question: 'Pada konsentrasi >100 ppm, H₂S menjadi semakin mematikan tanpa disadari karena...', options: ['Tidak lagi masuk saluran pernafasan', 'Melumpuhkan jaringan paru paru secara permanen', 'Menyebabkan kelumpuhan total indra penciuman (olfactory fatigue)', 'Berubah wujud menjadi zat padat di atmosfer'], answer: 2, explanation: 'Konsentrasi H₂S tinggi melumpuhkan saraf penciuman dalam hitungan detik. Pekerja sering salah mengira "gas telah hilang" dan membuka SCBA.' },
    ],
    summary: [
      'H₂S: TWA 10 ppm, STEL 15 ppm - bau telur busuk, lebih berat dari udara',
      'CO: TWA 25 ppm - tidak berwarna, tidak berbau, mengikat hemoglobin',
      'O₂ normal: 20.9% - Batas aman: 19.5% - 23.5%',
      'Methane (CH₄): LEL 5% - mudah terbakar dan meledak',
      'Bump test SETIAP HARI, kalibrasi setiap 3-6 bulan',
      'Multi-gas detector: 4 gas (H₂S, CO, O₂, LEL)',
      'H₂S >300 ppm = FATAL, >100 ppm = penciuman lumpuh',
    ],
    infographic: [
      { label: 'TWA H₂S', value: '10 ppm', icon: '☠️' },
      { label: 'TWA CO', value: '25 ppm', icon: '💨' },
      { label: 'O₂ Normal', value: '20.9%', icon: '🌬️' },
      { label: 'H₂S Fatal', value: '>300 ppm', icon: '💀' },
      { label: 'Bump Test', value: 'Harian', icon: '🔧' },
      { label: 'Kalibrasi', value: '3-6 bln', icon: '🎯' },
    ],
  },
  ch4: {
    title: 'Incident & Kecelakaan Kerja',
    mindMap: `mindmap
  root((Incident))
    Definisi
      Incident - Kejadian tak diinginkan
      Accident - Ada cedera
      Near Miss - Nyaris celaka
      Dangerous Occurrence
    Piramida Heinrich
      1 Major Injury
      29 Minor Injuries
      300 Near Misses
      Rasio 1 : 29 : 300
    Klasifikasi
      Fatality
      LTI - Lost Time Injury
      Restricted Work Day
      Medical Treatment
      First Aid Case
      Near Miss
    Investigasi
      5 Why Analysis
      Fishbone Diagram
      Swiss Cheese Model
    Indikator
      LTIFR
      TRIR
      Safe Man Hours`,
    flashcards: [
      { front: 'Apa perbedaan incident dan accident?', back: 'Incident = kejadian tak diinginkan (bisa tanpa cedera). Accident = insiden yang mengakibatkan cedera, penyakit, atau kematian.' },
      { front: 'Apa rasio Piramida Heinrich?', back: '1 : 29 : 300 → 1 cedera berat, 29 cedera ringan, 300 near miss (nyaris celaka)' },
      { front: 'Apa itu LTI?', back: 'Lost Time Injury - cedera yang menyebabkan pekerja tidak bisa bekerja ≥1 hari' },
      { front: 'Apa itu 5 Why Analysis?', back: 'Metode investigasi: bertanya "mengapa?" sebanyak 5 kali untuk menemukan akar masalah (root cause)' },
      { front: 'Apakah near miss wajib dilaporkan?', back: 'YA! Near miss WAJIB dilaporkan karena merupakan indikator awal potensi kecelakaan besar.' },
      { front: 'Apa itu Swiss Cheese Model?', back: 'Teori James Reason: kecelakaan terjadi ketika lubang-lubang (kelemahan) pada setiap lapisan pertahanan keselamatan saling sejajar.' },
      { front: 'Apa parameter untuk mengukur indikator proaktif keselamatan (Leading Indicators)?', back: 'Jumlah laporan bahaya, frekuensi simulasi darurat, dan kepatuhan penyediaan APD.' },
    ],
    quiz: [
      { question: 'Rasio Piramida Heinrich adalah...', options: ['1:10:100', '1:29:300', '1:30:300', '1:50:500'], answer: 1, explanation: 'Rasio Heinrich: 1 cedera berat : 29 cedera ringan : 300 near miss.' },
      { question: 'Lost Time Injury (LTI) adalah cedera yang menyebabkan...', options: ['Butuh P3K', 'Butuh pengobatan medis', 'Tidak bisa bekerja ≥1 hari', 'Kematian'], answer: 2, explanation: 'LTI = cedera yang menyebabkan pekerja tidak mampu bekerja minimal 1 hari.' },
      { question: 'Tujuan investigasi insiden adalah...', options: ['Mencari siapa yang salah', 'Memberikan hukuman', 'Mencari akar penyebab (root cause)', 'Menghitung kerugian'], answer: 2, explanation: 'Investigasi bertujuan mencari ROOT CAUSE untuk mencegah kejadian berulang, BUKAN mencari siapa yang salah.' },
      { question: 'Near miss harus...', options: ['Diabaikan karena tidak ada cedera', 'Dilaporkan dan diinvestigasi', 'Diselesaikan sendiri', 'Dilaporkan hanya jika ada saksi'], answer: 1, explanation: 'Near miss WAJIB dilaporkan! Mengurangi near miss = mencegah kecelakaan berat (teori Heinrich).' },
      { question: 'Swiss Cheese Model dikembangkan oleh...', options: ['Heinrich', 'Bird', 'James Reason', 'Frank E. Bird Jr'], answer: 2, explanation: 'Swiss Cheese Model dikembangkan oleh James Reason untuk menjelaskan bagaimana kecelakaan terjadi.' },
      { question: 'Manakah di bawah ini yang merupakan parameter Lagging Indicator dalam K3?', options: ['Jumlah inspeksi preventif', 'Jumlah LTI (Lost Time Injury)', 'Pelatihan keselamatan reguler', 'Laporan bahaya near miss'], answer: 1, explanation: 'Lagging indicator adalah indikator retrospektif pengukuran kejadian yang telah berlalu, seperti LTI, MTC, dan kematian.' },
    ],
    summary: [
      'Incident = kejadian (bisa tanpa cedera), Accident = ada cedera/kematian',
      'Piramida Heinrich: 1 cedera berat : 29 ringan : 300 near miss',
      'Near miss WAJIB dilaporkan dan diinvestigasi',
      'LTI = Lost Time Injury (tidak kerja ≥1 hari)',
      'Investigasi: 5 Why, Fishbone, Swiss Cheese Model',
      'Tujuan investigasi: cari ROOT CAUSE, bukan blame',
      'Indikator: LTIFR, TRIR, Safe Man Hours',
    ],
    infographic: [
      { label: 'Rasio Heinrich', value: '1:29:300', icon: '🔺' },
      { label: 'Near Miss', value: 'WAJIB lapor', icon: '⚠️' },
      { label: 'LTI', value: '≥1 hari', icon: '🏥' },
      { label: 'Metode Investigasi', value: '3 metode', icon: '🔍' },
      { label: 'Indikator Safety', value: '3 KPI', icon: '📊' },
      { label: 'Root Cause', value: 'Bukan blame', icon: '🎯' },
    ],
  },
  ch5: {
    title: 'Unsafe Action & Condition',
    mindMap: `mindmap
  root((Unsafe Act & Condition))
    Teori Domino Heinrich
      88% Unsafe Act
      10% Unsafe Condition
      2% Acts of God
    Unsafe Action
      Tidak pakai APD
      Tanpa wewenang
      Kecepatan berbahaya
      Lepas pengaman
      Posisi tidak aman
      Abaikan peringatan
      Bercanda saat kerja
      Bekerja saat tidak fit
    Unsafe Condition
      Peralatan rusak
      Lantai licin
      Pencahayaan kurang
      Ventilasi buruk
      Housekeeping buruk
      Tanpa rambu
      Tanpa guard
      Paparan bahan bahaya
    Pencegahan
      JSA/JHA
      Safety Talk / Toolbox Meeting
      BBS - Behavior Based Safety
      STOP Work Authority`,
    flashcards: [
      { front: 'Berapa persen kecelakaan disebabkan unsafe act menurut Heinrich?', back: '88% kecelakaan disebabkan oleh unsafe act (tindakan tidak aman)' },
      { front: 'Apa itu STOP Work Authority?', back: 'HAK setiap pekerja untuk menghentikan pekerjaan jika merasa kondisi kerja TIDAK AMAN' },
      { front: 'Sebutkan 3 contoh unsafe action di RIG!', back: '1) Tidak pakai APD, 2) Mengoperasikan alat tanpa sertifikat, 3) Berdiri di bawah suspended load' },
      { front: 'Apa itu JSA?', back: 'Job Safety Analysis - analisis keselamatan sebelum memulai pekerjaan untuk mengidentifikasi bahaya dan langkah pengendalian' },
      { front: 'Apa perbedaan unsafe act dan unsafe condition?', back: 'Unsafe act = TINDAKAN pekerja yang menyimpang. Unsafe condition = KONDISI lingkungan yang tidak aman.' },
      { front: 'Apa itu BBS?', back: 'Behavior Based Safety - program observasi dan perbaikan PERILAKU pekerja untuk meningkatkan keselamatan' },
      { front: 'Bagaimana Interaksi bahaya antara Unsafe Act dan Unsafe Condition?', back: 'Kecelakaan sering terjadi saat seorang kru melakukan unsafe act tanpa sadar memaparkan dirinya pada lingkungan yang cacat struktural (unsafe condition).' },
    ],
    quiz: [
      { question: 'Menurut teori Heinrich, berapa persen kecelakaan disebabkan unsafe act?', options: ['50%', '70%', '88%', '95%'], answer: 2, explanation: 'Heinrich: 88% unsafe act, 10% unsafe condition, 2% acts of God (tidak dapat dicegah).' },
      { question: 'Yang termasuk unsafe condition adalah...', options: ['Tidak pakai APD', 'Bercanda saat kerja', 'Lantai licin karena tumpahan oli', 'Mengoperasikan tanpa izin'], answer: 2, explanation: 'Lantai licin adalah KONDISI lingkungan yang tidak aman (unsafe condition).' },
      { question: 'STOP Work Authority merupakan...', options: ['Kewajiban supervisor saja', 'Hak setiap pekerja', 'Kebijakan opsional', 'Tugas HSE saja'], answer: 1, explanation: 'STOP Work Authority adalah HAK setiap pekerja untuk menghentikan pekerjaan jika merasa tidak aman.' },
      { question: 'JSA dilakukan...', options: ['Setelah pekerjaan selesai', 'Saat terjadi kecelakaan', 'SEBELUM pekerjaan dimulai', 'Hanya untuk hot work'], answer: 2, explanation: 'Job Safety Analysis (JSA) wajib dilakukan SEBELUM pekerjaan berbahaya dimulai.' },
      { question: 'Merokok di area restricted termasuk...', options: ['Unsafe condition', 'Unsafe act', 'Near miss', 'First aid case'], answer: 1, explanation: 'Mengabaikan peringatan/larangan termasuk unsafe act (tindakan tidak aman).' },
      { question: 'Tangga derrick berkarat akibat intrusi garam dan genangan pelumas hidrokarbon merupakan contoh dari...', options: ['Unsafe Act', 'Unsafe Condition', 'Near Miss', 'Acts of God'], answer: 1, explanation: 'Kondisi lingkungan fisik yang berbahaya, tidak layak, dan cacat perawatan masuk ke dalam kategori Unsafe Condition.' },
    ],
    summary: [
      'Heinrich: 88% kecelakaan = unsafe act, 10% = unsafe condition, 2% = unavoidable',
      'Teori Domino: Keturunan → Kesalahan Manusia → Unsafe Act/Condition → Kecelakaan → Cedera',
      '8 jenis unsafe action: tidak pakai APD, tanpa wewenang, kecepatan bahaya, lepas pengaman, dll',
      '8 jenis unsafe condition: peralatan rusak, lantai licin, pencahayaan kurang, dll',
      'STOP Work Authority = HAK setiap pekerja menghentikan pekerjaan',
      'JSA wajib dilakukan SEBELUM pekerjaan berbahaya',
      'BBS = Behavior Based Safety (observasi perilaku)',
    ],
    infographic: [
      { label: 'Unsafe Act', value: '88%', icon: '🚫' },
      { label: 'Unsafe Condition', value: '10%', icon: '⚠️' },
      { label: 'Unavoidable', value: '2%', icon: '🌩️' },
      { label: 'Jenis Unsafe Act', value: '8 jenis', icon: '👤' },
      { label: 'Jenis Unsafe Cond', value: '8 jenis', icon: '🏗️' },
      { label: 'STOP Work', value: 'HAK semua', icon: '✋' },
    ],
  },
  ch6: {
    title: 'Bahaya Pekerjaan di RIG',
    mindMap: `mindmap
  root((Bahaya di RIG))
    Jenis Bahaya
      Mekanik
        Terjepit mesin
        Drawworks, tong
      Jatuh
        Dari ketinggian
        Monkey board, derrick
      Tertimpa
        Benda jatuh
        Pipe, tool, baut
      Kimia
        Mud chemical
        H2S, solvent
      Kebakaran
        Gas kick
        Blowout
      Listrik
        Panel, generator
        LOTO
      Ergonomi
        Manual handling
        Posisi janggal
      Lingkungan
        Badai, gelombang
        Cuaca ekstrem
    Manajemen Risiko
      Identifikasi Bahaya
      Penilaian Risiko
      Pengendalian Risiko
      Monitoring dan Review
    Risk Matrix
      Risk = Probability x Severity
      Low 1-4
      Medium 5-9
      High 10-16
      Extreme 17-25
    Bahaya Spesifik
      Blowout - BOP
      Gas Kick
      Confined Space
      Lifting Operation`,
    flashcards: [
      { front: 'Apa rumus Risk (Risiko)?', back: 'Risk = Probability × Severity (Kemungkinan × Keparahan)' },
      { front: 'Apa itu BOP?', back: 'Blowout Preventer - alat utama untuk mencegah blowout (semburan tak terkendali dari sumur)' },
      { front: 'Apa perbedaan bahaya (Hazard) dan risiko (Risk)?', back: 'Hazard = sumber/situasi berpotensi bahaya. Risk = kemungkinan dan keparahan bahaya tersebut terjadi.' },
      { front: 'Apa itu LOTO?', back: 'Lockout Tagout - prosedur isolasi energi berbahaya saat maintenance peralatan' },
      { front: 'Sebutkan 4 langkah manajemen risiko!', back: '1) Identifikasi Bahaya, 2) Penilaian Risiko, 3) Pengendalian Risiko, 4) Monitoring & Review' },
      { front: 'Apa itu Gas Kick?', back: 'Gas dari formasi batuan masuk ke sumur bor. Ditangani dengan well control procedure. Jika tidak terkendali → blowout.' },
      { front: 'Bagaimana prinsip ekuilibrium pencegahan gas kick (hydrostatic keseimbangan)?', back: 'Integritas sumur dipertahankan lewat keseimbangan antara formation pore pressure melawan hydrostatic pressure cairan lumpur.' },
    ],
    quiz: [
      { question: 'Rumus risiko (Risk) adalah...', options: ['Risk = Hazard + Exposure', 'Risk = Probability × Severity', 'Risk = Frequency / Impact', 'Risk = Danger × Time'], answer: 1, explanation: 'Risk = Probability (kemungkinan) × Severity (keparahan).' },
      { question: 'BOP (Blowout Preventer) digunakan untuk...', options: ['Memadamkan api', 'Mencegah semburan sumur', 'Mendeteksi gas', 'Mengangkat beban'], answer: 1, explanation: 'BOP adalah alat kritis untuk mencegah blowout (semburan tak terkendali dari sumur bor).' },
      { question: 'LOTO adalah prosedur untuk...', options: ['Pengangkatan beban', 'Isolasi energi berbahaya', 'Pendeteksian gas', 'Evakuasi darurat'], answer: 1, explanation: 'Lockout Tagout (LOTO) = prosedur isolasi sumber energi saat maintenance untuk mencegah aktivasi tak sengaja.' },
      { question: 'Kategori risiko "Extreme" pada risk matrix memiliki skor...', options: ['1-4', '5-9', '10-16', '17-25'], answer: 3, explanation: 'Risk Matrix: Low (1-4), Medium (5-9), High (10-16), Extreme (17-25).' },
      { question: 'Confined space di RIG contohnya...', options: ['Rig floor', 'Helicopter deck', 'Tank, vessel, pit', 'Mess room'], answer: 2, explanation: 'Confined space = ruang tertutup/terbatas seperti tank, vessel, mud pit. Butuh izin khusus.' },
      { question: 'Tanda awal dimulainya Gas Kick sebelum menjadi fatal ditandai dengan fenomena...', options: ['Pompa mati mendadak', 'Lonjakan anomali rasio lumpur (pit gain)', 'H2S muncul ke atmosfer', 'Mata bor patah berkarat'], answer: 1, explanation: 'Terjadi penurunan cairan lumpur berat yang diindikasikan dengan pit gain (lonjakan rasio lumpur di tangki lumpur) saat formasi mengintrusi sumur.' },
    ],
    summary: [
      'Hazard = sumber bahaya, Risk = Probability × Severity',
      '8 kategori bahaya di RIG: Mekanik, Jatuh, Tertimpa, Kimia, Kebakaran, Listrik, Ergonomi, Lingkungan',
      'Risk Matrix: Low (1-4), Medium (5-9), High (10-16), Extreme (17-25)',
      '4 langkah manajemen risiko: Identifikasi → Penilaian → Pengendalian → Monitoring',
      'BOP = Blowout Preventer (alat pencegah blowout)',
      'LOTO = Lockout Tagout (isolasi energi berbahaya)',
      'Bahaya spesifik: Blowout, Gas Kick, Confined Space, Lifting Operation',
    ],
    infographic: [
      { label: 'Kategori Bahaya', value: '8 jenis', icon: '⚠️' },
      { label: 'Rumus Risiko', value: 'P × S', icon: '📐' },
      { label: 'Risk Extreme', value: '17-25', icon: '🔴' },
      { label: 'BOP Fungsi', value: 'Anti Blowout', icon: '💥' },
      { label: 'LOTO', value: 'Isolasi Energi', icon: '🔒' },
      { label: 'Langkah MR', value: '4 langkah', icon: '🔄' },
    ],
  },
  ch7: {
    title: 'Surat Izin Kerja Aman (SIKA)',
    mindMap: `mindmap
  root((SIKA / PTW))
    Jenis Permit
      Hot Work Permit
        Pengelasan, grinding
        Gas test, fire watcher
      Cold Work Permit
        Pekerjaan non-api
        JSA, APD standar
      Confined Space Entry
        Ruang terbatas
        Gas test, standby man
      Electrical Work
        LOTO wajib
        Test de-energize
      Excavation Permit
        Penggalian tanah
        Utility check
      Working at Height
        Ketinggian >1.8m
        Harness, lifeline
      Radiography Permit
        Radiografi
        Zona eksklusif
    Alur Proses
      Isi formulir
      JSA / Risk Assessment
      Persetujuan Supervisor
      Persetujuan HSE
      Gas Test
      Penerbitan Permit
      Pelaksanaan Kerja
      Penutupan Permit
    Aturan Penting
      Berlaku 1 shift / 12 jam
      Tampilkan di lokasi kerja
      Evaluasi ulang jika berubah
      Wajib tanda tangan semua`,
    flashcards: [
      { front: 'Berapa lama SIKA berlaku?', back: 'Maksimal 1 shift kerja (12 jam). Harus diperbarui untuk shift berikutnya.' },
      { front: 'Hot Work Permit digunakan untuk pekerjaan apa?', back: 'Pekerjaan dengan sumber api/panas: pengelasan, pemotongan, grinding. Syarat: gas test, APAR standby, fire watcher.' },
      { front: 'Apa saja syarat khusus Confined Space Entry?', back: 'Gas test, ventilasi mekanis, standby man, rescue plan, izin masuk tertulis' },
      { front: 'Apa yang harus dilakukan jika kondisi berubah saat pekerjaan?', back: 'Pekerjaan HARUS DIHENTIKAN dan SIKA dievaluasi ulang' },
      { front: 'Siapa saja yang harus tanda tangan SIKA?', back: 'SEMUA pekerja yang terlibat wajib tanda tangan dan memahami isi SIKA' },
      { front: 'Apa saja yang termasuk permit paling ketat?', back: 'Confined Space Entry - paling ketat karena memerlukan gas test, standby man, rescue plan, dan pengawasan ketat' },
      { front: 'Izin Kerja Panas (Hot Work Permit) menuntut angka LEL gas atmosfer di level berapa?', back: 'Mutlak menuntut bacaan 0% LEL gas atmosfer sebelum pengelasan/pemotongan dimulai untuk menghindari ledakan.' },
    ],
    quiz: [
      { question: 'SIKA berlaku selama...', options: ['4 jam', '8 jam', '12 jam (1 shift)', '24 jam'], answer: 2, explanation: 'SIKA berlaku maksimal 1 shift kerja = 12 jam. Harus diperbarui untuk shift berikutnya.' },
      { question: 'Hot Work Permit memerlukan syarat khusus, yaitu...', options: ['LOTO saja', 'Gas test, APAR standby, fire watcher', 'Hanya JSA', 'Rescue plan'], answer: 1, explanation: 'Hot Work memerlukan gas test (pastikan area bebas gas mudah terbakar), APAR standby, dan fire watcher.' },
      { question: 'Jenis permit yang paling ketat adalah...', options: ['Cold Work Permit', 'Hot Work Permit', 'Confined Space Entry', 'Excavation Permit'], answer: 2, explanation: 'Confined Space Entry paling ketat: gas test, ventilasi, standby man, rescue plan wajib ada.' },
      { question: 'Jika kondisi kerja berubah saat pekerjaan berlangsung, maka...', options: ['Tetap lanjut kerja', 'Berhenti dan evaluasi ulang SIKA', 'Lapor setelah selesai', 'Minta izin lisan'], answer: 1, explanation: 'Jika kondisi berubah, pekerjaan HARUS DIHENTIKAN dan SIKA dievaluasi ulang.' },
      { question: 'Electrical Work Permit memerlukan prosedur...', options: ['Fire watching', 'LOTO dan test de-energize', 'Rescue plan', 'Medical standby'], answer: 1, explanation: 'Pekerjaan kelistrikan memerlukan LOTO (Lockout Tagout) dan test de-energize.' },
      { question: 'Izin Kerja Dingin (Cold Work Permit) rutin umumnya digunakan untuk...', options: ['Pengelasan derrick', 'Bekerja dengan gerinda', 'Pembersihan pelumas permesinan hidraulik tanpa percikan', 'Memasuki mud pit berventilasi'], answer: 2, explanation: 'Cold work dikhususkan untuk operasi mekanis tanpa percikan pijar panas.' },
    ],
    summary: [
      'SIKA = Surat Izin Kerja Aman / Permit to Work (PTW)',
      '7 jenis permit: Hot Work, Cold Work, Confined Space, Electrical, Excavation, Height, Radiography',
      'SIKA berlaku maksimal 1 SHIFT (12 jam)',
      'Confined Space Entry = permit PALING KETAT',
      'Hot Work: gas test + APAR standby + fire watcher',
      'Kondisi berubah → STOP & evaluasi ulang SIKA',
      'SEMUA pekerja terlibat WAJIB tanda tangan',
    ],
    infographic: [
      { label: 'Jenis Permit', value: '7 jenis', icon: '📋' },
      { label: 'Masa Berlaku', value: '12 jam', icon: '⏰' },
      { label: 'Permit Terketat', value: 'Confined Space', icon: '🔒' },
      { label: 'Alur Proses', value: '8 langkah', icon: '🔄' },
      { label: 'Hot Work', value: 'Gas Test + FW', icon: '🔥' },
      { label: 'Tanda Tangan', value: 'SEMUA wajib', icon: '✍️' },
    ],
  },
  ch8: {
    title: 'Peralatan Emergency',
    mindMap: `mindmap
  root((Peralatan Emergency))
    Pernapasan
      SCBA - 30-60 menit
      ELSA - 10-15 menit
      Wind Sock
    Kebakaran
      APAR
      Hydrant System
      Foam System
    Evakuasi Laut
      Life Boat
      Life Raft
      Life Jacket
    P3K
      First Aid Kit
      Stretcher
      AED
    Alarm
      General Alarm - sirene terus
      Abandon Platform - 7 pendek + 1 panjang
      All Clear - 1 panjang
      Man Overboard - 3 panjang
    Pencucian
      Emergency Shower
      Eye Wash Station
    Emergency Response
      Laporkan ke Control Room
      Aktivasi Alarm
      Menuju Muster Point
      Head Count
      Eskalasi jika perlu
    Drill
      Minimal 1x per minggu`,
    flashcards: [
      { front: 'Apa kode alarm Abandon Platform?', back: '7 blast pendek + 1 blast panjang → TINGGALKAN platform, evakuasi ke lifeboat!' },
      { front: 'Apa perbedaan SCBA dan ELSA?', back: 'SCBA: durasi 30-60 menit, untuk rescue team. ELSA: durasi 10-15 menit, untuk evakuasi pekerja biasa.' },
      { front: 'Berapa sering emergency drill di RIG?', back: 'Minimal 1 kali per MINGGU' },
      { front: 'Apa itu muster point?', back: 'Titik kumpul darurat di mana semua pekerja berkumpul saat general alarm untuk head count (penghitungan jumlah)' },
      { front: 'Apa kode alarm Man Overboard?', back: '3 blast panjang → ada orang jatuh ke laut, aktifkan prosedur rescue' },
      { front: 'AED digunakan untuk apa?', back: 'Automated External Defibrillator - memberikan kejutan listrik pada jantung saat cardiac arrest (henti jantung)' },
      { front: 'Bagaimana navigasi pelarian menggunakan Windsock (kantong penunjuk arah angin) saat darurat H₂S?', back: 'Pekerja wajib melihat windsock, lalu mengevakuasi diri menyamping dan berlari berlawanan arah datangnya angin (escape upwind of wellbore).' },
    ],
    quiz: [
      { question: 'Kode alarm Abandon Platform adalah...', options: ['1 blast panjang', '3 blast panjang', '7 pendek + 1 panjang', 'Sirene terus-menerus'], answer: 2, explanation: '7 blast pendek + 1 panjang = Abandon Platform (tinggalkan platform segera).' },
      { question: 'SCBA memiliki durasi...', options: ['5-10 menit', '10-15 menit', '30-60 menit', '2-4 jam'], answer: 2, explanation: 'SCBA = 30-60 menit (untuk rescue team). ELSA = 10-15 menit (untuk evakuasi darurat).' },
      { question: 'Emergency drill di RIG dilakukan minimal...', options: ['1x per bulan', '1x per minggu', '1x per hari', '1x per 3 bulan'], answer: 1, explanation: 'Emergency drill wajib dilakukan minimal 1x per minggu di lingkungan RIG.' },
      { question: 'Man Overboard alarm ditandai dengan...', options: ['1 blast panjang', '3 blast panjang', '5 blast pendek', '7 blast pendek + 1 panjang'], answer: 1, explanation: '3 blast panjang = Man Overboard (ada orang jatuh ke laut).' },
      { question: 'Langkah pertama saat terjadi kejadian darurat adalah...', options: ['Lari ke lifeboat', 'Laporkan ke Control Room', 'Pakai SCBA', 'Memadamkan api sendiri'], answer: 1, explanation: 'Langkah pertama: LAPORKAN ke Control Room agar alarm dapat diaktifkan dan respons terkoordinasi.' },
      { question: 'Kenapa desain tata letak RIG wajib memiliki 2 Muster Point (Primary & Secondary) dengan orientasi sudut 90 derajat memutar?', options: ['Agar pekerja bisa memilih yang terdekat jika panik', 'Mencegah tumpukan massa di satu titik muster', 'Agar jika terjadi perubahan trajektori arah angin beracun, kru bisa dinamis merotasi titik pelarian aman', 'Sesuai pesanan vendor asuransi laut'], answer: 2, explanation: 'Orientasi 90 derajat (90 deg off) memungkinkan rotasi titik kumpul bila arah angin terkontaminasi gas racun perlahan berubah arah secara tiba-tiba.' },
    ],
    summary: [
      'Alarm: General (sirene terus), Abandon (7 pendek + 1 panjang), All Clear (1 panjang), Man Overboard (3 panjang)',
      'SCBA: 30-60 menit (rescue team) vs ELSA: 10-15 menit (evakuasi darurat)',
      'Muster Point = titik kumpul darurat → head count',
      'Emergency drill minimal 1× per MINGGU',
      'Langkah darurat: Lapor → Alarm → Muster Point → Head Count → Eskalasi',
      'Peralatan P3K: First Aid Kit, Stretcher, AED',
      'Emergency shower & eye wash di area kimia',
    ],
    infographic: [
      { label: 'Abandon Alarm', value: '7+1 blast', icon: '🔴' },
      { label: 'SCBA Durasi', value: '30-60 min', icon: '🫁' },
      { label: 'ELSA Durasi', value: '10-15 min', icon: '⏱️' },
      { label: 'Drill Frequency', value: '1×/minggu', icon: '🏃' },
      { label: 'Man Overboard', value: '3 blast', icon: '🌊' },
      { label: 'All Clear', value: '1 blast', icon: '🟢' },
    ],
  },
  ch9: {
    title: 'Materi K3',
    mindMap: `mindmap
  root((K3))
    Definisi
      Safety - Keselamatan Kerja
      Health - Kesehatan Kerja
      PP No. 50 Tahun 2012
    Dasar Hukum
      UU No. 1/1970 - K3
      UU No. 13/2003 - Naker
      PP No. 50/2012 - SMK3
      Permenaker No. 5/2018
      Permenaker No. 4/1980
      Permenaker No. 8/2010
    Tujuan K3
      Melindungi Pekerja
      Keamanan Produksi
      Kesejahteraan
    SMK3 - PDCA
      PLAN - Kebijakan, sasaran
      DO - Implementasi, pelatihan
      CHECK - Audit, inspeksi
      ACT - Tinjauan, perbaikan
    Hak dan Kewajiban
      Pengusaha - APD gratis, P2K3
      Pekerja - Patuhi SOP
      P2K3 - Pembina K3
    PAK
      Fisik
      Kimia
      Biologi
      Ergonomi
      Psikologi`,
    flashcards: [
      { front: 'Apa UU utama tentang K3 di Indonesia?', back: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja' },
      { front: 'Apa itu SMK3?', back: 'Sistem Manajemen K3 - wajib untuk perusahaan dengan >100 pekerja atau berisiko tinggi (PP No. 50 Tahun 2012)' },
      { front: 'Apa siklus yang digunakan dalam SMK3?', back: 'PDCA: Plan (rencanakan) → Do (laksanakan) → Check (periksa) → Act (tindak lanjut)' },
      { front: 'Apa itu P2K3?', back: 'Panitia Pembina Keselamatan dan Kesehatan Kerja - memberikan saran K3 dan membantu pengusaha dalam pelaksanaan K3' },
      { front: 'Sebutkan 5 kategori Penyakit Akibat Kerja (PAK)!', back: '1) Fisik (pendengaran, heat stroke), 2) Kimia (keracunan), 3) Biologi (infeksi), 4) Ergonomi (low back pain), 5) Psikologi (stress)' },
      { front: 'Siapa yang wajib menyediakan APD?', back: 'PENGUSAHA/perusahaan wajib menyediakan APD secara CUMA-CUMA (gratis) - UU No. 1/1970' },
      { front: 'Bagaimana hierarki regulasi K3 spesifik pengawasan blok operasi Pertamina SP?', back: 'Sistem Manajemen SUPREME yang bermanifestasi pada dogma aturan mutlak keselamatan tak bersyarat: 12 Corporate Life Saving Rules (CLSR).' },
    ],
    quiz: [
      { question: 'Undang-undang utama tentang K3 di Indonesia adalah...', options: ['UU No. 13/2003', 'UU No. 1/1970', 'PP No. 50/2012', 'UU No. 21/2000'], answer: 1, explanation: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja adalah UU utama K3 di Indonesia.' },
      { question: 'SMK3 wajib diterapkan oleh perusahaan dengan...', options: ['>50 pekerja', '>75 pekerja', '>100 pekerja atau berisiko tinggi', 'Semua perusahaan tanpa terkecuali'], answer: 2, explanation: 'PP No. 50/2012: SMK3 wajib untuk perusahaan dengan >100 pekerja ATAU yang berisiko tinggi.' },
      { question: 'Siklus PDCA dalam SMK3 terdiri dari...', options: ['Plan, Direct, Control, Audit', 'Plan, Do, Check, Act', 'Prepare, Deliver, Confirm, Assess', 'Program, Design, Create, Apply'], answer: 1, explanation: 'PDCA = Plan (rencanakan), Do (laksanakan), Check (periksa/audit), Act (tindak lanjut/perbaiki).' },
      { question: 'P2K3 adalah singkatan dari...', options: ['Panitia Pengawas K3', 'Panitia Pembina K3', 'Program Pelaksanaan K3', 'Pusat Pengelolaan K3'], answer: 1, explanation: 'P2K3 = Panitia Pembina Keselamatan dan Kesehatan Kerja.' },
      { question: 'Low back pain termasuk PAK kategori...', options: ['Fisik', 'Kimia', 'Ergonomi', 'Psikologi'], answer: 2, explanation: 'Low back pain, carpal tunnel syndrome, dan musculoskeletal disorder termasuk PAK kategori Ergonomi.' },
      { question: 'Sistem regulasi keamanan komprehensif 12 CLSR memiliki komitmen target absolut yaitu...', options: ['Maksimal untung per barel harian', 'Nihil insiden fatal (Zero Fatal Incident) di wilayah kerja', 'Pemotongan APB Keselamatan Pekerja', 'Mempercepat timeline pengeboran 1 minggu'], answer: 1, explanation: 'Penerapan 12 CLSR mutlak dilakukan demi mewujudkan dogma sakral keselamatan yaitu "Nihil Insiden Fatal" tak bersyarat.' },
    ],
    summary: [
      'UU K3 utama: UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
      'SMK3 wajib untuk perusahaan >100 pekerja atau berisiko tinggi',
      'Siklus SMK3: PDCA (Plan → Do → Check → Act)',
      'P2K3 = Panitia Pembina Keselamatan dan Kesehatan Kerja',
      'Pengusaha WAJIB sediakan APD secara GRATIS',
      '5 kategori PAK: Fisik, Kimia, Biologi, Ergonomi, Psikologi',
      'Safety = keselamatan (cegah kecelakaan), Health = kesehatan (cegah penyakit)',
    ],
    infographic: [
      { label: 'UU Utama K3', value: '1/1970', icon: '⚖️' },
      { label: 'SMK3 Wajib', value: '>100 pekerja', icon: '🏢' },
      { label: 'Siklus SMK3', value: 'PDCA', icon: '🔄' },
      { label: 'Kategori PAK', value: '5 jenis', icon: '🏥' },
      { label: 'APD oleh', value: 'Perusahaan', icon: '🦺' },
      { label: 'P2K3', value: 'Pembina K3', icon: '👥' },
    ],
  },
  ch10: {
    title: 'Segitiga API',
    mindMap: `mindmap
  root((Segitiga API))
    Tiga Unsur Api
      Panas / Heat
        Percikan api
        Gesekan
        Listrik
        Reaksi kimia
      Bahan Bakar / Fuel
        Padat - kayu, kertas
        Cair - bensin, solar
        Gas - LPG, metana
      Oksigen / Oxygen
        Minimal 16% untuk bakar
        Normal 20.9%
    Tetrahedron Api
      Unsur ke-4
      Rantai Reaksi Kimia
      Chemical Chain Reaction
    Metode Pemadaman
      Cooling - hilangkan PANAS
        Gunakan AIR
      Starving - hilangkan BAHAN BAKAR
        Jauhkan material
      Smothering - hilangkan OKSIGEN
        CO2, tutup/selimuti
      Inhibiting - putus REAKSI KIMIA
        Dry Chemical Powder
    Titik Penting
      Flash Point
      Fire Point
      Auto Ignition Temperature`,
    flashcards: [
      { front: 'Sebutkan 3 unsur Segitiga Api!', back: '1) Panas (Heat), 2) Bahan Bakar (Fuel), 3) Oksigen (Oxygen) - hilangkan salah satu maka api padam' },
      { front: 'Apa unsur ke-4 pada Tetrahedron Api?', back: 'Rantai Reaksi Kimia (Chemical Chain Reaction) - diputus oleh dry chemical powder' },
      { front: 'Apa itu metode Cooling?', back: 'Memadamkan api dengan menghilangkan PANAS - contoh: menggunakan AIR' },
      { front: 'Apa itu metode Smothering?', back: 'Memadamkan api dengan menghilangkan OKSIGEN - contoh: menutup/menyelimuti api atau menggunakan CO₂' },
      { front: 'Berapa kadar minimum oksigen untuk pembakaran?', back: 'Minimum 16% O₂ untuk pembakaran. Udara normal mengandung 20.9% oksigen.' },
      { front: 'Apa perbedaan Flash Point dan Fire Point?', back: 'Flash Point = suhu minimal material mengeluarkan uap yang dapat menyala sesaat. Fire Point = suhu minimal material terbakar terus-menerus.' },
      { front: 'Dalam teori Tetrahedron Api, apa yang direferensikan oleh dimensi fisika ke-4 (Rantai Reaksi Kimia)?', back: 'Dimensi ke-4 ini merujuk pada reaksi berantai antara molekul radikal bebas dan oksigen yang berulang untuk menyongsong siklus letupan pijar mandiri.' },
    ],
    quiz: [
      { question: 'Tiga unsur Segitiga Api adalah...', options: ['Panas, Air, Oksigen', 'Panas, Bahan Bakar, Oksigen', 'Api, Bahan Bakar, Angin', 'Listrik, Bahan Bakar, Udara'], answer: 1, explanation: 'Segitiga Api: Panas (Heat) + Bahan Bakar (Fuel) + Oksigen (Oxygen).' },
      { question: 'Metode pemadaman dengan CO₂ bekerja dengan cara...', options: ['Cooling (mendinginkan)', 'Starving (menjauhkan bahan bakar)', 'Smothering (menghilangkan oksigen)', 'Inhibiting (memutus reaksi kimia)'], answer: 2, explanation: 'CO₂ memadamkan api dengan Smothering - menghilangkan/mengurangi kadar oksigen.' },
      { question: 'Unsur ke-4 pada Tetrahedron Api adalah...', options: ['Air', 'Angin', 'Rantai reaksi kimia', 'Tekanan'], answer: 2, explanation: 'Tetrahedron Api = Segitiga Api + Rantai Reaksi Kimia (Chemical Chain Reaction).' },
      { question: 'Kadar oksigen minimum untuk pembakaran adalah...', options: ['10%', '14%', '16%', '19.5%'], answer: 2, explanation: 'Pembakaran membutuhkan minimum 16% oksigen. Udara normal = 20.9% O₂.' },
      { question: 'Dry Chemical Powder memadamkan api dengan metode...', options: ['Cooling', 'Starving', 'Smothering', 'Inhibiting (memutus reaksi kimia)'], answer: 3, explanation: 'Dry Chemical Powder bekerja dengan cara Inhibiting - memutus rantai reaksi kimia pembakaran.' },
      { question: 'Zonasi ambang batas uap hidrokarbon yang terlalu miskin metana dan tidak mensuport letupan ledakan terkategorisasi di bawah rasio...', options: ['Upper Explosive Limit (UEL)', 'Lower Explosive Limit (LEL)', 'Flash Point Extreme', 'Inhibitive Gas Margin'], answer: 1, explanation: 'Limit Bawah (LEL) merepresentasikan persentase volume minimum gas bakar (misal metana) di dalam racikan oksigen agar letupan api fisis sanggup menyala mandiri.' },
    ],
    summary: [
      'Segitiga Api: Panas + Bahan Bakar + Oksigen → hilangkan 1 = api padam',
      'Tetrahedron Api: + Rantai Reaksi Kimia (unsur ke-4)',
      'Cooling = hilangkan panas (dengan air)',
      'Starving = hilangkan bahan bakar (jauhkan material)',
      'Smothering = hilangkan oksigen (CO₂, tutup/selimuti)',
      'Inhibiting = putus reaksi kimia (Dry Chemical Powder)',
      'O₂ minimum pembakaran: 16%, O₂ normal: 20.9%',
    ],
    infographic: [
      { label: 'Unsur Api', value: '3 unsur', icon: '🔺' },
      { label: 'Tetrahedron', value: '4 unsur', icon: '🔷' },
      { label: 'O₂ Min Bakar', value: '16%', icon: '💨' },
      { label: 'O₂ Normal', value: '20.9%', icon: '🌬️' },
      { label: 'Metode Padam', value: '4 metode', icon: '🧯' },
      { label: 'DCP Metode', value: 'Inhibiting', icon: '⚡' },
    ],
  },
};
