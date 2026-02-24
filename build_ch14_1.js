const questionsPart1 = [
    {
        q: "Pada kondisi tekanan atmosfer normal, konsentrasi gas Methane (CH4) di udara mencapai 8%. Berdasarkan karakteristik LEL (5%) dan UEL (15%), apa status bahaya di lokasi tersebut?",
        a: "Campuran sangat mudah meledak ('Explosive Mixture') jika ada sumber panas atau percikan, karena berada di dalam rentang eksplosif (antara 5% - 15%).",
        expl: "LEL (Lower Explosive Limit) Methane adalah 5%, dan UEL (Upper) adalah 15%. Karena 8% berada di rentang tersebut, udara sudah cukup kaya untuk terbakar namun belum 'terlalu kaya' untuk batal meledak. Ini adalah kondisi sangat kritis."
    },
    {
        q: "Seorang pekerja di area <em>cellar</em> RIG mencium bau telur busuk yang sangat menyengat, namun dua menit kemudian ia tidak bisa mencium apapun. Apa fenomena yang terjadi dan seberapa bahayanya?",
        a: "Pekerja mengalami <em>Olfactory Fatigue</em> (kelumpuhan saraf indra penciuman) akibat pajanan H2S di atas 100 ppm. Ini adalah kondisi sangat mematikan yang bisa berujung pingsan mendadak dalam hitungan menit.",
        expl: "H2S mematikan saraf penciuman dengan cepat di atas 100 ppm. Hilangnya bau bukan berarti gasnya hilang, melainkan konsentrasinya justru masuk ke tahap letal (mematikan)."
    },
    {
        q: "Dalam sistem Permit to Work (PTW), sebelum melakukan pekerjaan Pengelasan (Hot Work) di area kilang, jarak aman radius untuk memastikan tidak ada material mudah terbakar adalah...",
        a: "Standar minimal radius aman adalah 15 meter (atau 35 feet menurut beberapa standar internasional seperti API/OSHA), dengan penutupan (blanketing) seluruh saluran drainase memakai fire blanket.",
        expl: "Bunga api dari pengelasan (slag) dapat melayang jauh. Jarak 15 meter adalah standar pembersihan minimal, dibarengi dengan penyediaan Firewatch (pengawas api)."
    },
    {
        q: "Jika indikator Portable Gas Detector berbunyi dan menunjukkan peringatan STEL (Short Term Exposure Limit) untuk gas H2S, berapa lama batas waktu maksimal seorang pekerja boleh berada di area tersebut?",
        a: "Pekerja BISA tertahan maksimal 15 menit, dengan syarat tidak lebih dari 4 kali dalam sehari dan ada jeda 1 jam antar pajanan.",
        expl: "Di banyak standar (seperti ACGIH lama, atau standar perusahaan tertentu), STEL H2S ditetapkan di angka 15 ppm untuk durasi 15 menit. TWA (harian) adalah 10 ppm untuk 8 jam."
    },
    {
        q: "Ketika alarm rig berbunyi panjang secara terus-menerus (Abandon Rig/Muster sign), ke arah mana kru harus berjalan menuju Muster Point jika melihat arah tiupan angin (Windsock) menunjuk ke Utara?",
        a: "Kru harus bergerak ke arah Selatan (berlawanan dengan arah angin/<em>Upwind</em>) atau bergerak menyamping (<em>Crosswind</em>) jika jalur Selatan tertutup. Jangan searah angin (<em>Downwind</em>).",
        expl: "Gas beracun dan awan api akan terbawa oleh tiupan angin. Berlindung ke arah <em>Upwind</em> memastikan kru mendapatkan pasokan udara bersih."
    },
    {
        q: "Terdapat tumpahan cairan Hidrokarbon yang terbakar (Kelas B) di area trafo listrik bertegangan tinggi yang belum dimatikan (Kelas C). Jenis APAR apa yang paling TEPAT dan AMAN digunakan?",
        a: "APAR tipe CO2 (Karbon Dioksida) atau Dry Chemical Powder tipe ABC. DILARANG KERAS menggunakan jenis Air atau Busa (Foam) karena air menghantarkan listrik (risiko tersengat listrik/electrocution).",
        expl: "Trafo aktif berarti ini adalah api Kelas C (Listrik). Syarat wajibnya, media pemadam dilarang berupa cairan berair."
    },
    {
        q: "Apa perbedaan krusial antara LTI (Lost Time Incident) dan RWC (Restricted Work Case) dalam pelaporan kejadian?",
        a: "LTI berarti korban kehilangan jam kerja (tidak bisa bekerja keesokan harinya). RWC berarti korban masih bisa datang bekerja keesokan harinya, namun tugasnya dipindah ke pekerjaan lebih ringan.",
        expl: "Metrics ini sangat dinilai dalam tender kontrak MIGAS. LTI menghancurkan skor keselamatan, sementara RWC (contoh: kuli rig sementara jadi admin) masih di bawah LTI."
    },
    {
        q: "Konsep <em>Fire Tetrahedron</em> menambahkan elemen keempat dari <em>Fire Triangle</em> klasik. Apa elemen tersebut dan sebutkan metode pemadaman spesifik untuk elemen keempat tersebut!",
        a: "Elemen ke-4 adalah Reaksi Rantai Kimia (Chemical Chain Reaction). Metode pemadamannya disebut <em>Inhibiting</em> (menghambat reaksi), contohnya menggunakan APAR jenis Halon (meski sekarang dibatasi) atau Dry Chemical Powder.",
        expl: "Serbuk kimia memutus jalinan radikal bebas di dalam nyala api, sehingga api langsung putus seketika tanpa perlu menghilangkan oksigen atau menurunkan panas."
    },
    {
        q: "Dalam operasi <em>Confined Space Entry</em>, tugas seorang <em>Hole Watch</em> (Attendant) saat melihat rekan kerjanya pingsan di dalam tangki adalah...",
        a: "Membunyikan alarm/radio panggilan darurat (Emergency Response Team) dan memantau korban dari luar. <strong>DILARANG MASUK</strong> untuk menolong ke dalam tanpa APBA/SCBA dan tim evakuasi penyelamatan profesional.",
        expl: "Lebih dari 60% kematian di confined space adalah para penolong/attendant yang nekat masuk tanpa perlengkapan karena refleks ingin menolong, dan ikut tewas menghirup gas beracun."
    },
    {
        q: "Pada <em>Hierarchy of Control</em>, seorang manajer rig memutuskan memasang sistem ventilasi mekanik otomatis <em>blower exhaust</em> untuk membuang asap las. Ini masuk dalam kategori kontrol apa?",
        a: "Rekayasa Teknik (Engineering Control).",
        expl: "Sistem ini secara mekanis mengubah mesin/lingkungan kerja agar aman, berada satu tingkat di bawah Eliminasi/Substitusi, dan jauh lebih unggul dari sekadar Kontrol Administratif atau APD."
    },
    {
        q: "Kapan waktu yang paling tepat untuk melakukan <em>Bump Test</em> pada Portable Multi-Gas Detector yang Anda pegang?",
        a: "Setiap hari, tepat SEBELUM alat mulai digunakan pada shift tersebut.",
        expl: "Bump Test adalah pengujian singkat (menyemprotkan gas kalibrasi ke sensor) untuk memverifikasi alarm dan sensor bereaksi merespon gas, bukan kalibrasi akurasi menyeluruh."
    },
    {
        q: "Sistem LOTO (Lock Out Tag Out) digunakan untuk mematikan energi berbahaya. Siapa satu-satunya orang yang berhak mencabut gembok LOTO dari panel listrik?",
        a: "Hanya orang/pekerja yang memasang gembok tersebut (Authorized Person yang tertulis namanya di Tag/Label).",
        expl: "Ini adalah aturan keselamatan nyawa nomor satu agar tidak ada miskomunikasi dan alat dinyalakan saat orang yang mengunci mesin tersebut masih bekerja masuk di dalam mesin."
    },
    {
        q: "Tali <em>Tagline</em> sering disyaratkan saat proses Lifting (pengangkatan) dengan Crane di area RIG. Apa fungsi spesifik benda tersebut?",
        a: "Fungsinya untuk mengontrol ayunan (swing) beban gantung dari jarak kejauhan yang aman. Dilarang menyentuh beban langsung dengan tangan (Hands-Free lifting).",
        expl: "Tagline mencegah pekerja terjebak/terjepit di antara muatan dan fasilitas RIG yang stasioner."
    },
    {
        q: "Seorang <em>Firewatch</em> (Pengawas Api) di area MIGAS memiliki kewajiban untuk tetap berjaga di titik kerja setelah sebuah pekerjaan Pengelasan (Hot Work) telah selesai seratus persen. Mengapa hal ini diwajibkan, dan berapa durasinya?",
        a: "Harus tetap berjaga selama minimal 30 menit (standar umum). Tujuannya untuk memastikan tidak ada percikan api terselubung (smoldering fire) tertinggal yang tiba-tiba membesar kembali.",
        expl: "Percikan / <em>slag</em> las bisa masuk ke sela sempit dan memendam panas yang tidak terlihat langsung oleh pandangan awal."
    },
    {
        q: "Pada label warna Scaffolding (Perancah), apa arti label Tag Hijau (Green Tag) dan Kuning (Yellow Tag)?",
        a: "Hijau berarti perancah siap/aman 100% untuk digunakan umum. Kuning berarti perancah sedang dimodifikasi atau memiliki bahaya tersembunyi, sehingga HANYA boleh dinaiki dengan instruksi khusus (misal wajib 100% full body harness tie-off).",
        expl: "Merah berarti dilarang keras dinaiki (kecuali Scaffolder). Pewarnaan ini diatur secara universal oleh badan keselamatan konstruksi."
    },
    {
        q: "Helm safety (Hard Hat) seorang kru terjatuh dari lantai derrick atau crane (ketinggian sekitar 30 meter), tetapi secara fisik luar terlihat tidak retak atau pecah sama sekali. Bolehkah helm tersebut langsung digunakan kembali?",
        a: "TIDAK BOLEH. Helm safety yang sudah mengalami benturan keras harus segera di-afkir (dihancurkan/dibuang) karena suspensi bagian dalam atau struktur mikroskopik plastiknya telah melemah menahan impak, dan tidak sanggup menahan kecelakaan selanjutnya.",
        expl: "Hard hat diciptakan untuk menerima kerusakan (berubah bentuk memecah energi). Jika jatuh ekstrem, energinya sudah melemahkan cangkang meski mata secara tak kasat merasakannya."
    },
    {
        q: "Jika seorang kru terpapar paparan gas H2S konsentrasi ekstrem (misalnya 700 - 1000 ppm), berapakah lama efek mematikan terjadi menurut ilmu medis toksikologi?",
        a: "<em>Knockdown</em> seketika; orang tersebut akan pingsan kolaps hanya dalam hitungan 1 atau 2 kali tarikan napas pendek, dan kematian klinis menyusul dalam hitungan menit.",
        expl: "Tidak akan ada kesempatan batuk, mual, atau meminta tolong. Sistem saraf otak (pernapasan) seketika dimatikan. H2S adalah *Silent Killer*."
    },
    {
        q: "Di dalam operasi Lifting atau Rigging, faktor *Dynamic Load* sangat diperhitungkan di atas lepas pantai. Apa yang dimaksud dengan *Dynamic Load*?",
        a: "Dynamic Load merujuk pergeseran bobot berlebih sekunder karena benda bergerak, dihentikan tiba-tiba (jerking), atau gerakan kapal tersapu ombak kencang (heave). Beban 20 Ton statis, namun bisa membebani crane hingga 25+ Ton saat terjadi daya hentak.",
        expl: "Cuaca lautan berdampak hebat. Mengangkat beban laut tak pernah murni seberat hitungan kilo statis di atas daratan aspal."
    },
    {
        q: "Apa singkatan dari SCBA dan secara umum apa perbedaan tipe <em>Open-Circuit</em> dengan <em>Closed-Circuit</em>?",
        a: "Self-Contained Breathing Apparatus. *Open*: udara yang dihembuskan paru-paru langsung dibuang lepas ke udara bebas (sistem durasi pendek 30-45 mnt). *Closed*: udara karbon dioksida nafas diputar, di-sruput, ditambah oksigen re-breathe kembali ke paru-paru (durasi 4 jam).",
        expl: "Sistem closed circuit biasanya dipakai regu darurat di terowongan tambang tambang (*Mine Rescue*)."
    },
    {
        q: "Dalam parameter klasifikasi APAR (Alat Pemadam Api Ringan), tipe Kelas D dispesifikasikan untuk jenis benda terbakar apa dan medianya berupa apa?",
        a: "Kelas D adalah untuk Kebakaran Logam Yang Bisa Terbakar (Combustible Metals) seperti Magnesium, Titanium, Sodium. Medianya adalah *Special Dry Powder* khusus mematikan reaksi rantai kimia logam.",
        expl: "Air, CO2, atau cairan pemadam standar justru bisa bereaksi ledakan dahsyat jika disemprotkan ke titik api metal magnesium / sodium!"
    },
    {
        q: "Sebuah aktivitas pekerjaan pembongkaran pipa berkarat dinilai berbahaya karena lokasinya berada tepat di bawah tempat pengelasan struktur menara crane. Bahaya jatuhan apakah yang paling terkait dengan hal ini?",
        a: "Bahaya *Dropped Object* tipe Dinamis (atau Sparks/Slag sekunder DROPS).",
        expl: "Situasi ini biasanya memicu pelarangan pekerjaan tumpang tindih secara vertikal (Simultaneous Operations / SIMOPS vertical clash) di lapangan."
    },
    {
        q: "Apa yang membedakan klasifikasi 'Near Miss' (Nyaris Celaka) dari sekadar 'Unsafe Condition' (Kondisi Tidak Aman)?",
        a: "Near Miss merupakan kejadian insiden (peristiwa pergerakan/momentum) yang nyata-nyata sudah terjadi, tapi secuil kebetulan yang menyebabkan tidak adanya cedera atau kerugian jiwa. Unsafe Condition adalah benda atau situasi yang pasif diam, menunggu dipicu.",
        expl: "Kunci perbedaannya: Near Miss adalah KEJADIAN (contoh palu jatuh meleset 1 cm dari bahu). Unsafe Condition adalah STATE / Kondisi (contoh palu diletakkan berantakan pinggir atap)."
    },
    {
        q: "Standar Oksigen yang layak dan minimal aman dihirup konstan bagi manusia (khusus sebelum memasuki ruang <em>Confined Space</em> menggunakan gas detector) adalah sebesar?",
        a: "Antara 19.5% (Batas minimum oksigen bernapas di bawah bahaya asfiksia) sampai maksimal 23.5% (Batas Atas sebelum rawan letusan api atau Oxygen Defisiensi Oksidatif).",
        expl: "Rata-rata atmosfer bumi sehat mencatat 20.9% oksigen di level normal pesisir."
    },
    {
        q: "Sistem pelindung mata <em>Safety Google</em> yang sering ditemui memiliki <em>Anti-fog coating</em>. Tapi dalam keadaan debu ekstrim serbuk gerinda, mengapa <em>Face Shield</em> bening wajah tetap diwajibkan dipakai membungkus Goggles mata tersebut?",
        a: "Karena debu partikel berkecepatan tinggi atau serpihat kawat pemutar gurinda bisa saja memantul memukul hidung, dahi dan rongga wajah di sekitar mata (yang tak dilindungi kaca mata mungil). Safety Goggle HANYA memproteksi biji kornea mata saja.",
        expl: "Face-shield (perisai wajah polycarbonate) adalah pertahanan Utama lapis 1 (primary defense for high-speed impact). Bukan hanya sekedar melindungi dari kilauan percikan."
    },
    {
        q: "Dalam konsep <em>Heinrich Pyramid</em> (1-29-300), seberapa sering secara statistik sebuah <em>Fatality</em> (Kematian/Insiden Berat) diprediksi akan timbul?",
        a: "1 fatalitas besar biasanya muncul dari setiap 300 perilaku menyimpang (*unsafe act*) atau 300 kejadian bahaya nyaris celaka tanpa cedera (*no-loss incident*) yang terbiarkan lepas kontrol.",
        expl: "Model ini membuktikan perlunya kita memberantas yang 300 (perilaku salah sehari-hari sepele), sebelum ia mengerucut menanjak memakan 1 korban meninggal dunia permanen."
    }
];

module.exports = questionsPart1;
