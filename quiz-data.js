// Quiz Data - 50 Questions (5 per chapter)
const QUIZ_DATA = [
    // BAB 1 - APD
    { ch: 1, q: "APD merupakan pertahanan ke berapa dalam hierarki pengendalian bahaya?", o: ["Pertama", "Kedua", "Ketiga", "Terakhir (kelima)"], a: 3, e: "APD adalah pertahanan TERAKHIR (ke-5) setelah eliminasi, substitusi, rekayasa teknik, dan administratif." },
    { ch: 1, q: "Ear plug/ear muff wajib digunakan saat kebisingan melebihi berapa dB?", o: ["70 dB", "75 dB", "85 dB", "90 dB"], a: 2, e: "Menurut standar, pelindung telinga wajib digunakan pada kebisingan >85 dB." },
    { ch: 1, q: "Full body harness wajib digunakan saat bekerja di ketinggian lebih dari?", o: ["1.2 meter", "1.5 meter", "1.8 meter", "2.0 meter"], a: 2, e: "Full body harness wajib digunakan saat bekerja di ketinggian >1.8 meter." },
    { ch: 1, q: "Siapa yang wajib menyediakan APD bagi pekerja?", o: ["Pekerja sendiri", "Pengusaha/perusahaan", "Pemerintah", "Serikat pekerja"], a: 1, e: "Menurut Permenaker, pengusaha/perusahaan WAJIB menyediakan APD secara cuma-cuma." },
    { ch: 1, q: "Apa fungsi utama SCBA (Self-Contained Breathing Apparatus)?", o: ["Pelindung kepala", "Suplai udara mandiri di area terkontaminasi", "Pelindung mata", "Pelindung telinga"], a: 1, e: "SCBA menyediakan suplai udara bersih mandiri untuk bernapas di area yang terkontaminasi gas." },

    // BAB 2 - APAR
    { ch: 2, q: "Apa kepanjangan teknik PASS dalam penggunaan APAR?", o: ["Push-Aim-Spray-Sweep", "Pull-Aim-Squeeze-Sweep", "Pull-Adjust-Squeeze-Spray", "Push-Adjust-Spray-Stop"], a: 1, e: "PASS = Pull (tarik pin), Aim (arahkan), Squeeze (tekan tuas), Sweep (sapukan)." },
    { ch: 2, q: "Kebakaran kelas B melibatkan bahan apa?", o: ["Benda padat", "Cairan mudah terbakar", "Gas mudah terbakar", "Logam"], a: 1, e: "Kelas B = cairan mudah terbakar (bensin, solar, minyak, cat, alkohol)." },
    { ch: 2, q: "Berapa jarak maksimal antar APAR menurut Permenaker?", o: ["10 meter", "15 meter", "20 meter", "25 meter"], a: 1, e: "Menurut Permenaker No. 4 Tahun 1980, jarak maksimal antar APAR adalah 15 meter." },
    { ch: 2, q: "Media pemadam api yang paling serbaguna (multi-class) adalah?", o: ["Air", "Busa (Foam)", "CO₂", "Dry Chemical Powder"], a: 3, e: "Dry Chemical Powder (ABC) dapat memadamkan kebakaran kelas A, B, dan C - paling serbaguna." },
    { ch: 2, q: "Berapa tinggi pemasangan APAR dari lantai?", o: ["1.0 meter", "1.2 meter", "1.5 meter", "1.8 meter"], a: 1, e: "APAR dipasang pada ketinggian 1.2 meter dari lantai agar mudah dijangkau." },

    // BAB 3 - Gas Detector
    { ch: 3, q: "Berapa batas aman paparan H₂S untuk 8 jam kerja (TWA)?", o: ["5 ppm", "10 ppm", "15 ppm", "25 ppm"], a: 1, e: "TWA (Time Weighted Average) H₂S adalah 10 ppm untuk paparan 8 jam kerja." },
    { ch: 3, q: "Berapa kadar oksigen normal di udara?", o: ["19.5%", "20.9%", "21.5%", "23.5%"], a: 1, e: "Kadar oksigen normal di udara adalah 20.9%." },
    { ch: 3, q: "Bump test pada gas detector dilakukan setiap?", o: ["Setiap hari sebelum digunakan", "Setiap minggu", "Setiap bulan", "Setiap 6 bulan"], a: 0, e: "Bump test dilakukan SETIAP HARI sebelum gas detector digunakan untuk memastikan sensor berfungsi." },
    { ch: 3, q: "H₂S memiliki sifat apa?", o: ["Lebih ringan dari udara", "Lebih berat dari udara", "Sama berat dengan udara", "Tidak memiliki berat"], a: 1, e: "H₂S lebih berat dari udara sehingga terakumulasi di area rendah (cellar, pit, confined space)." },
    { ch: 3, q: "Pada konsentrasi berapa H₂S dapat melumpuhkan indera penciuman?", o: ["10 ppm", "50 ppm", "100-150 ppm", ">300 ppm"], a: 2, e: "Pada 100-150 ppm, H₂S melumpuhkan saraf penciuman sehingga tidak bisa mencium bau lagi (sangat berbahaya)." },

    // BAB 4 - Incident
    { ch: 4, q: "Menurut teori Heinrich, rasio kecelakaan berat : ringan : near miss adalah?", o: ["1:10:100", "1:29:300", "1:50:500", "1:30:600"], a: 1, e: "Piramida Heinrich: 1 kecelakaan berat, 29 kecelakaan ringan, 300 near miss/insiden tanpa cedera." },
    { ch: 4, q: "Apa yang dimaksud dengan Near Miss?", o: ["Kecelakaan fatal", "Kecelakaan ringan", "Kejadian hampir celaka tapi tidak terjadi cedera", "Penyakit akibat kerja"], a: 2, e: "Near Miss = kejadian yang HAMPIR menyebabkan cedera tetapi tidak terjadi. Wajib dilaporkan!" },
    { ch: 4, q: "Lost Time Injury (LTI) adalah cedera yang menyebabkan?", o: ["Tidak bisa bekerja ≥1 hari", "Memar ringan", "Memerlukan P3K", "Tidak ada efek"], a: 0, e: "LTI = cedera yang menyebabkan pekerja tidak dapat bekerja selama ≥1 hari kerja." },
    { ch: 4, q: "Tujuan investigasi insiden adalah untuk?", o: ["Menghukum pekerja", "Mencari siapa yang salah", "Mencari akar penyebab (root cause)", "Memotong gaji pekerja"], a: 2, e: "Investigasi insiden bertujuan mencari ROOT CAUSE (akar penyebab), BUKAN mencari siapa yang salah." },
    { ch: 4, q: "Metode analisis yang bertanya 'mengapa?' sebanyak 5 kali disebut?", o: ["Fishbone Diagram", "5 Why Analysis", "Swiss Cheese Model", "Risk Matrix"], a: 1, e: "5 Why Analysis: bertanya 'mengapa?' berulang 5 kali untuk menemukan akar masalah." },

    // BAB 5 - Unsafe Action & Condition
    { ch: 5, q: "Menurut Heinrich, berapa persen kecelakaan disebabkan unsafe act?", o: ["50%", "70%", "88%", "95%"], a: 2, e: "Heinrich: 88% kecelakaan disebabkan unsafe act, 10% unsafe condition, 2% tidak dapat dicegah." },
    { ch: 5, q: "Mana contoh unsafe condition?", o: ["Tidak memakai APD", "Bercanda saat kerja", "Lantai licin karena tumpahan oli", "Bekerja terburu-buru"], a: 2, e: "Lantai licin = unsafe CONDITION (kondisi lingkungan). Yang lain adalah unsafe ACTION (tindakan pekerja)." },
    { ch: 5, q: "Apa itu STOP Work Authority?", o: ["Hanya supervisor yang boleh menghentikan pekerjaan", "Hak setiap pekerja menghentikan pekerjaan jika tidak aman", "Larangan bekerja lembur", "Jadwal istirahat kerja"], a: 1, e: "STOP Work Authority = HAK setiap pekerja untuk menghentikan pekerjaan jika merasa tidak aman." },
    { ch: 5, q: "JSA (Job Safety Analysis) dilakukan kapan?", o: ["Setelah kecelakaan", "Sebelum memulai pekerjaan berbahaya", "Saat istirahat", "Setiap akhir bulan"], a: 1, e: "JSA dilakukan SEBELUM memulai pekerjaan untuk mengidentifikasi bahaya dan langkah pengamanan." },
    { ch: 5, q: "Safety Talk/Toolbox Meeting dilakukan?", o: ["Setiap bulan", "Setiap minggu", "Setiap hari sebelum kerja", "Setiap tahun"], a: 2, e: "Safety Talk/Toolbox Meeting adalah briefing keselamatan HARIAN sebelum memulai pekerjaan." },

    // BAB 6 - Bahaya di RIG
    { ch: 6, q: "Rumus risiko (Risk) adalah?", o: ["Risk = Hazard + Control", "Risk = Probability × Severity", "Risk = Frequency + Exposure", "Risk = Hazard - Control"], a: 1, e: "Risk = Probability (kemungkinan) × Severity (keparahan)." },
    { ch: 6, q: "BOP (Blowout Preventer) berfungsi untuk?", o: ["Mendeteksi gas", "Mencegah semburan tak terkendali dari sumur", "Memadamkan api", "Mengangkat beban berat"], a: 1, e: "BOP = Blowout Preventer, alat utama untuk mencegah blowout (semburan tak terkendali) dari sumur bor." },
    { ch: 6, q: "LOTO (Lockout-Tagout) digunakan untuk?", o: ["Mengunci pintu", "Mengisolasi sumber energi berbahaya", "Mengunci gas detector", "Menutup valve gas saat normal"], a: 1, e: "LOTO = prosedur isolasi sumber energi berbahaya agar mesin/peralatan tidak aktif saat diperbaiki." },
    { ch: 6, q: "Gas Kick terjadi ketika?", o: ["Gas dari atmosfer masuk ke sumur", "Gas formasi masuk ke sumur bor", "Gas meledak di permukaan", "Gas detector berbunyi"], a: 1, e: "Gas Kick = gas dari formasi batuan masuk ke lubang sumur bor, jika tidak ditangani bisa menjadi blowout." },
    { ch: 6, q: "Lifting operation memerlukan personil tersertifikasi yaitu?", o: ["Safety officer saja", "Rigger dan banksman", "Driller saja", "Toolpusher saja"], a: 1, e: "Lifting operation memerlukan rigger (pemasang sling) dan banksman (pemberi sinyal) yang tersertifikasi." },

    // BAB 7 - SIKA
    { ch: 7, q: "SIKA (Permit to Work) berlaku maksimal berapa lama?", o: ["8 jam", "12 jam (1 shift)", "24 jam", "1 minggu"], a: 1, e: "SIKA berlaku maksimal 1 shift kerja (12 jam) dan harus diperbarui untuk shift berikutnya." },
    { ch: 7, q: "Hot Work Permit diperlukan untuk pekerjaan?", o: ["Pengecatan", "Pengelasan dan pemotongan", "Pengangkatan beban", "Penggalian"], a: 1, e: "Hot Work Permit = izin untuk pekerjaan yang menghasilkan panas/api: pengelasan, pemotongan, grinding." },
    { ch: 7, q: "Jenis permit yang paling ketat persyaratannya adalah?", o: ["Cold Work Permit", "Hot Work Permit", "Confined Space Entry", "Electrical Work Permit"], a: 2, e: "Confined Space Entry memiliki persyaratan paling ketat: gas test, ventilasi, standby man, dan rescue plan wajib." },
    { ch: 7, q: "Jika kondisi kerja berubah saat SIKA masih berlaku, apa yang harus dilakukan?", o: ["Lanjutkan bekerja", "Hentikan pekerjaan dan evaluasi ulang SIKA", "Hubungi kantor pusat", "Pindah lokasi saja"], a: 1, e: "Jika kondisi berubah, pekerjaan HARUS DIHENTIKAN dan SIKA dievaluasi ulang sebelum melanjutkan." },
    { ch: 7, q: "Fire watcher diperlukan pada jenis permit apa?", o: ["Cold Work", "Hot Work", "Electrical Work", "Excavation"], a: 1, e: "Fire watcher (pengawas api) wajib ada saat Hot Work untuk memantau percikan api selama dan setelah pekerjaan." },

    // BAB 8 - Peralatan Emergency
    { ch: 8, q: "Kode alarm Abandon Platform adalah?", o: ["1 blast panjang", "3 blast panjang", "Sirene terus-menerus", "7 blast pendek + 1 blast panjang"], a: 3, e: "Abandon Platform = 7 blast pendek + 1 blast panjang. Semua pekerja harus menuju lifeboat untuk evakuasi." },
    { ch: 8, q: "Berapa durasi udara pada SCBA?", o: ["5-10 menit", "10-15 menit", "30-60 menit", "2-3 jam"], a: 2, e: "SCBA menyediakan udara selama 30-60 menit, digunakan oleh rescue team." },
    { ch: 8, q: "ELSA (Emergency Life Support Apparatus) menyediakan udara selama?", o: ["5 menit", "10-15 menit", "30 menit", "60 menit"], a: 1, e: "ELSA = 10-15 menit, untuk evakuasi darurat pekerja biasa. Lebih pendek dari SCBA." },
    { ch: 8, q: "Emergency drill di RIG wajib dilakukan minimal?", o: ["1x per bulan", "1x per minggu", "1x per hari", "1x per tahun"], a: 1, e: "Emergency drill di RIG wajib dilakukan minimal 1x per minggu untuk kesiapsiagaan." },
    { ch: 8, q: "Muster point adalah?", o: ["Ruang istirahat", "Titik kumpul darurat", "Ruang makan", "Helideck"], a: 1, e: "Muster point = titik kumpul darurat di mana semua pekerja berkumpul saat alarm berbunyi untuk head count." },

    // BAB 9 - Materi K3
    { ch: 9, q: "UU utama tentang Keselamatan Kerja di Indonesia adalah?", o: ["UU No. 13 Tahun 2003", "UU No. 1 Tahun 1970", "PP No. 50 Tahun 2012", "UU No. 36 Tahun 2009"], a: 1, e: "UU No. 1 Tahun 1970 tentang Keselamatan Kerja adalah UU utama K3 di Indonesia." },
    { ch: 9, q: "SMK3 wajib diterapkan oleh perusahaan yang memiliki pekerja lebih dari?", o: ["25 orang", "50 orang", "100 orang", "200 orang"], a: 2, e: "SMK3 wajib untuk perusahaan dengan >100 pekerja atau yang memiliki tingkat potensi bahaya tinggi." },
    { ch: 9, q: "P2K3 adalah singkatan dari?", o: ["Panitia Pengawas K3", "Panitia Pembina K3", "Program Pelaksana K3", "Pusat Pelatihan K3"], a: 1, e: "P2K3 = Panitia Pembina Keselamatan dan Kesehatan Kerja." },
    { ch: 9, q: "Siklus dalam Sistem Manajemen K3 menggunakan prinsip?", o: ["5S", "PDCA", "SWOT", "5W1H"], a: 1, e: "SMK3 menggunakan siklus PDCA: Plan, Do, Check, Act (perbaikan berkelanjutan)." },
    { ch: 9, q: "Yang BUKAN termasuk penyakit akibat kerja adalah?", o: ["Gangguan pendengaran akibat bising", "Keracunan logam berat", "Flu biasa dari luar tempat kerja", "Low back pain akibat manual handling"], a: 2, e: "Flu biasa dari luar tempat kerja bukan PAK. PAK harus diakibatkan oleh faktor di lingkungan kerja." },

    // BAB 10 - Segitiga Api
    { ch: 10, q: "Tiga unsur segitiga api adalah?", o: ["Air, Angin, Tanah", "Panas, Bahan Bakar, Oksigen", "Api, Asap, Gas", "Listrik, Gesekan, Ledakan"], a: 1, e: "Segitiga Api = Panas (Heat) + Bahan Bakar (Fuel) + Oksigen (Oxygen)." },
    { ch: 10, q: "Unsur keempat dalam Tetrahedron Api adalah?", o: ["Air", "Rantai Reaksi Kimia", "Angin", "Tekanan"], a: 1, e: "Fire Tetrahedron menambahkan unsur ke-4: Rantai Reaksi Kimia (Chemical Chain Reaction)." },
    { ch: 10, q: "Metode pemadaman 'Smothering' bekerja dengan cara?", o: ["Mendinginkan api", "Menghilangkan oksigen", "Memutus reaksi kimia", "Menghilangkan bahan bakar"], a: 1, e: "Smothering = menghilangkan oksigen, misalnya dengan CO₂, foam, atau fire blanket." },
    { ch: 10, q: "Mengapa api minyak (kelas B) TIDAK boleh dipadamkan dengan air?", o: ["Air terlalu mahal", "Air menyebarkan minyak dan memperbesar api", "Air tidak cukup dingin", "Air merusak peralatan"], a: 1, e: "Air lebih berat dari minyak, akan masuk ke bawah dan memercikkan minyak terbakar, memperbesar area api." },
    { ch: 10, q: "LEL (Lower Explosive Limit) adalah?", o: ["Batas minimum O₂ untuk bernapas", "Konsentrasi minimum gas yang dapat meledak", "Suhu minimum untuk api menyala", "Tekanan minimum untuk ledakan"], a: 1, e: "LEL = konsentrasi minimum gas/uap dalam udara yang dapat menyala/meledak jika ada sumber api." }
];
