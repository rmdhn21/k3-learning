const questionsPart2 = [
    {
        q: "Lampu penerangan di area operasional RIG sering dilengkapi dengan kurungan kawat pelindung (Wire Guard), tambahan Safety Wire Glass, serta tersertifikasi Explosion Proof. Mengapa sertifikasi Explosion Proof begitu esensial?",
        a: "Supaya seandainya terjadi korsleting atau loncatan api (spark) dari bohlam di dalam, percikan tersebut terkurung kokoh tidak menembus memicu uap bensin atau gas meledak di luar kaca.",
        expl: "Lampu Explosion Proof tidak berarti tahan jika dilemparkan bahan peledak dari luar, melainkan menahan *internal explosion* agar tidak merembet ke lingkungan luar yang kaya material mudah terbakar."
    },
    {
        q: "Sebuah kontainer bahan kimia bertanda gambar piktogram 'Tengkorak Berlian Hitam (Skull and Crossbones)'. Dalam Globally Harmonized System (GHS), logo ini menunjukkan...",
        a: "Toksisitas Akut (Acute Toxicity) tingkat parah yang berakibat fatal meracuni nyawa hanya dalam dosis paparan yang sangat rendah.",
        expl: "Berbeda dengan tanda Plus atau tanda Seru (!) yang sekadar menunjukkan Iritan. Tengkorak mematikan secara cepat jika tertelan atau terhirup."
    },
    {
        q: "Saat kru memakai Ear Muff yang terpasang di helm untuk bekerja di area bising 110 desibel, apakah NRR (Noise Reduction Rating) benda tersebut sebesar 30 dB murni mengurangi jadi 80 dB secara linier?",
        a: "TIDAK. Dalam perhitungan nyata di lapangan (OHSA derating), rating 30 dB milik earmuff seringkali dibagi dua efektivitasnya (tinggal 15 dB) akibat pemakaian yang tidak sempurna atau ganjalan kacamata (Safety Glass/Temple break).",
        expl: "Pelindung telinga (HPD) ganda (Ear Plug + Ear Muff) sering diwajibkan bila sumber suara rig mendengung di atas 105 dBA."
    },
    {
        q: "Jika Anda tersetrum dan tubuh kaku kejang menempel pada sebuah instalasi listrik bertegangan tinggi, rekan Anda BERAKAR-AKAL mencoba menendang lepas tubuh Anda menggunakan sepatu boot karetnya. Salahkah itu?",
        a: "Pasti SALAH dan MEMATIKAN. Menendang korban setrum bertegangan jutaan elektron akan mengalir melewati area kecil dari sepatunya menuju sekujur badannya pula. Langkah pertama selalu: PUTUSKAN Aliran Power Utama (MCB) seketika!",
        expl: "Menolong korban *Electrocution* secara fisik langsung merupakan tiket nomor antrean tewas kedua. Selalu gunakan tongkat isolator tegap (*Rescue Hook*) setelah power terputus."
    },
    {
        q: "Bagaimana cara membaca batas beban aman dari sebuah *Webbing Sling* (Sabuk Selempang Pengangkat sintetis) hanya dari melihat warna sabuknya?",
        a: "Standar internasional (EN 1492-1) menggunakan kode warna mutlak. Ungu = 1 Ton, Hijau = 2 Ton, Kuning = 3 Ton, Abu = 4 Ton, Merah = 5 Ton, Coklat = 6 Ton, Biru = 8 Ton, Oranye = di atas 10 Ton.",
        expl: "Kode warna mencegah kelalaian miskalkulasi bagi buruh rigger yang kurang jeli melihat tulisan buram di label tag selempang tali."
    },
    {
        q: "Seorang Operator Derek (Crane Operator) dilarang keras menarik beban (Load) yang tidak berada tepat di bawah titik lurus ujung boom cranenya (Side Pulling/Side Loading). Mengapa demikian?",
        a: "Side Loading mengakibatkan gaya miring lateral (melengkung) pada struktur menara (boom/jib) yang tidak dirancang menahan beban tekuk menyamping, menyebabkan crane membengkok dan roboh/tumbang.",
        expl: "Crane dirancang untuk angkat VERTIKAL (tegak lurus melawan gravitasi bumi). Tarikan serong menghancurkan mekanika mesin."
    },
    {
        q: "Dalam Permit to Work Excavation (Izin Kerja Penggalian), batas kedalaman parit galian minimum yang mensyaratkan wajib dibuatnya desain teknik dinding penahan tanah kelongsoran (Shoring/Trench box) adalah sejauh...",
        a: "Penggalian di lapangan melebihi kedalaman 1.2 hingga 1.5 meter (kira-kira 4-5 kaki setinggi dada/pundak manusia dewasa).",
        expl: "Longsoran tanah kubik seberat ratusan kilo akan langsung meremukkan tulang rusuk dan paru-paru pekerja dalam waktu kurang dari diam sedetik."
    },
    {
        q: "Berapa banyak Oksigen yang ditarik oleh konsumsi api besar (Pembakaran) di tempat tertutup? Bisakah ia memicu kondisi Hypoxia pada pekerja?",
        a: "Api dengan rakus mengejar dan melahap Oksigen udara turun dari 21% hingga tersisa belasan persen saja. Kondisi ini PASTI memicu pusing asfiksia, disorientasi letih, disusul kolaps permanen (Hypoxia).",
        expl: "Inilah mengapa dalam musibah kebakaran hotel/gudang, korban meninggal akibat kehabisan napas/menghirup karbon monoksida jauh lebih banyak sebelum api fisik menyentuh kulit mereka."
    },
    {
        q: "Sebuah insiden *Blowout* (Semburan Liar) dari dasar sumur Rig bor terjadi karena kegagalan parameter apa dalam cairan lumpur (Drilling Fluid / Mud)?",
        a: "Kegagalan lumpur (Hydrostatic Pressure lumpur anjlok lebih lemah/terlalu ringan) dibanding menahan kuatnya Tekanan Pori Formasi batu gas bumi (Formation Pore Pressure) yang menyembur marah.",
        expl: "Lumpur (Mud) bukan pelumas semata, melainkan penyumbat beban berton-ton layaknya tutup botol raksasa di sumur."
    },
    {
        q: "Manakah yang benar tentang sistem pencegah semburan api BOP (Blowout Preventer)? Kapan alat ini harus dipotong memangkas memotong pipa?",
        a: "Blind/Shear Ram (pisau baja) pada BOP ditekan hidrolik dari ujung, khusus difungsikan darurat untuk memotong putus pipa keras bor secara instan jika Blind Ram tumpul gagal menutup rongga/annulus.",
        expl: "Ini adalah gerbang pencegah ledakan utama jika sistem lumpur kalah. Pisau ini memotong besi pipa demi menutup ruang tembusan."
    },
    {
        q: "Apa yang memicu fenomena sumur <em>Swabbing Effect</em> saat cabut pipa bor (Tripping Out)?",
        a: "Ujung pahat pipa besar yang dicabut terlalu mendadak kencang akan menimbulkan efek hisapan layaknya jarum suntik vaksin, menyedot paksa fluida gas naik ikut tersedot memicu *Kick*.",
        expl: "Kecepatan *Tripping Out* (mencabut besi) di area formasi sumur diatur halus agar lumpur di bawah pipa bisa bergeser mengisi rongga secara natural."
    },
    {
        q: "Dalam operasional RIG, zona lampu larangan merokok (No Smoking Policy) dipertegas melalui instrumen yang bernama Area Klasifikasi Ledakan (Hazardous Area Classification). Zone berapakah yang mengharamkan sumber api mutlak selama beroperasi?",
        a: "Zona 0 (Lokasi di mana atmosfer gas racun eksplosif terjadi terus-menerus/jangka panjang seperti di DALAM tangki uap) dan Zona 1 (Lokasi di mana gas seringkali timbul under-normal operating layaknya <em>shale shaker</em> atau sumur terbuka).",
        expl: "Ponsel biasa, sepatu berpaku, dan perkakas palu besi adalah pantangan besar (harus pakai alat Copper/Beryllium Non-Sparking Tools) di zona keras."
    },
    {
        q: "Mekanisme pengaman *Secondary Retention* sering digembar-gemborkan dalam modul DROP prevention di RIG lepas pantai atas ketinggian. Apakah benda tersebut?",
        a: "Sebuah kawat sling pengaman / pin R-clip baja kecil yang menjerat lampu/loud-speaker/mur pada dinding agar alat tersebut, meskipun kendor lepas angin, akan tetap tersangkut melayang-layang ditahan kawat kedua.",
        expl: "Kawat jaring (*net*) atau untaian ranting pencekik ini menjamin kelengahan korosi awal tidak merobohkan lampu menimpa dahi orang di lantai dasar."
    },
    {
        q: "Apa singkatan dari SOP dan JSA? Menjelang *tool box meeting* pagi, dokumen mana duluan yang mendikte langkah kerja lapangan?",
        a: "SOP (Standard Operating Procedure) & JSA (Job Safety Analysis). JSA dibuat spesifik runut harian menjabarkan bahaya per langkah urutan dari pekerjaan SOP, ditandatangani kru *HARI ITU* langsung di lokasi aspal kerja.",
        expl: "SOP itu kitab abadi dari kantor besar. JSA itu adalah terapan observasi lapangan harian. Kinerja SOP tidak sah dilaksanakan jika JSA ditolak Supervisor."
    },
    {
        q: "Sebutan untuk suatu pekerjaan dengan ruang sempit (Confined Space) memiliki syarat krusial 'Bukan Tempat Kerja Terus Menerus'. Artinya?",
        a: "Konstruksinya (manhole minim) tidak pernah didesain arsitektur untuk manusia menempati dan berkantor masuk-keluar santai di dalamnya (contoh: Silo semen, dalam reaktor boiler). Pintu keluar-masuknya saja sudah mempersulit nyawa jika lari darurat.",
        expl: "Ruangan WC/Toilet betapa sempitnya bukan disebut Confined Space."
    },
    {
        q: "Sebuah insiden <em>First Aid Case</em> (FAC) dicatat minggu lalu. Bedanya dengan Medical Treatment Case (MTC) tingkat menengah adalah?",
        a: "FAC dituntaskan sebatas P3K (pasang plester, cuci mata debu, minum oralit, kompres es krim luar) dan bisa seketika balik bertugas sore itu. MTC sebaliknya mengharuskan jarum bius dokter klinik profesional (jahitan sticth 3 kali, potong fraktur/gips, suntik resep antibiotik keras).",
        expl: "Dokter medik spesialis mengubah FAC ringan menjadi skor MTC, walau korban tidak diliburkan di hari kerja itu juga."
    },
    {
        q: "Berapa lama periode validitas umum <em>Hot Work Permit</em> sebelum ia dikategorikan hangus dan butuh TTD (Tanda Tangan) Supervisor ulang mendadak?",
        a: "Biasanya sah eksklusif untuk 1 Shift kerja lapangan penuh saja (maksimal 12 jam) atau tergantung kebijakan lokal jika pimpinan Supervisor beda orang.",
        expl: "Keadaan gas racun bumi berubah di shift maghrib vs pagi. Harus dites kalibrasi gas atmosfer detektor kembali dari titik Nol absolut."
    },
    {
        q: "Jika seorang kru operator mendapati rekannya pingsan diam saat melakukan pengelasan besi di sudut sempit bawah tangga RIG, pertolongan pernafasan resusitasi bantuan paling logis adalah?",
        a: "Jauhkan korban asfiksia ke ruang udara melimpah sirkulasi dengan menyeret bajunya, periksa denyut Nadi Karotis leher. Hubungi Medic RIG dan bersihkan asap gas jalan pernapasannya perlahan sambil mematikan kran selang Las Oksigen Asetilin pemicu letupan di sudut ruangan seketika.",
        expl: "Fokus menjauhkan dia dari zat asfiksia dan bahaya gas berantai menduduki prioritas utama pra-resusitasi napas / CPR manual darah."
    },
    {
        q: "Pernah dengar filosofi ALARP? As Low As Reasonably Practicable. Inti roh ALARP dalam Mitigasi Resiko K3 Migas mewajibkan kita apa?",
        a: "Menekan membuang tingkat probabilitas bahaya sekeras-kerasnya SEMAMPU teknis terjangkau dan logis realistis menimbang kerugian biaya operasional (Cost/Benefit), sampai risiko insiden dinilai sebatas 'zona residual pasrah' paling dapat dimaklumi.",
        expl: "Oksigen akan selalu ada. Baja akan selalu keropos usia. Gravitasi menjatuhkan pulpen akan selalu membayang. Resiko 'NOL/ZERO' tidak relevan, melainkan kita mengurung resiko tsb ke lembah kemustahilan termurah rasional ALARP."
    },
    {
        q: "Di atas dek RIG pengeboran terdapat <em>V-Door</em> dan <em>Rotary Table</em>. Mengapa lantai keras ini selalu dilumuri karpet khusus karet hitam keras kotak yang berat, alias <em>Anti-Slip / Rig Matting</em>?",
        a: "Serpihan lumpur Drilling Mud sangat licin bak tumpahan oli murni jika dicampur air / hujan lautan asin. Karpet berat khusus anti-slip dengan lekukan griper mutlak digunakan merekat tapak Sepatu Safety kasat kasar pekerja *Roughneck* dari insiden patah tulang tergelincir maut merosot.",
        expl: "Terpeleset santai di kantor mungkin sebatas pegal pinggang. Terpeleset santai memegang tang besi 50 Kg saat bor berputar kencang, nyawa risikonya hancur bersimbah derrick."
    },
    {
        q: "Karakteristik api Gas Metana / Hidrokarbon dalam ledakan <em>Boilover</em>. Air memicu 'letupan uap megar massal 1:1700'. Jelaskan ringkas reaksi fisika di baliknya mengapa api tersebut justru mengamuk ketika disiram air?",
        a: "Minyak ringan berada mengapung di atas batas lapisan air (densitas minyak kecil). Panas pembakaran menyebar didih cairan air di bawah hingga melesat meletup seketika uap (mengembang 1.700x volume uap mendadak) melempar memuntahkan gelombang lava api minyak panas tersebut.",
        expl: "Air bukan memadamkan, air mendidih meledak di bawa lantai memicu badai minyak pijar api terlontar dahsyat raksasa menyapu mobil pemadamnya sendiri."
    },
    {
        q: "Kacamata pengelasan (*Welding Goggle/Shields*) memiliki spesifikasi naungan (Shade Lens Number). Apakah nomor Shade 5 dan 11 itu maknanya sama?",
        a: "TIDAK BEDA JAUH. Shade 5 adalah untuk proses pemotongan oksigen asitelin memercik pijar ringan. Shade 10-12 adalah wajib gelap pekat mematikan silau biru radiasi busur setrum listrik Las Listrik (ARC/SMAW) berampere kuat.",
        expl: "Salah pilih lensa kaca = Mata Katarak Terbakar Retina seumur usia buta perlahan di kegelapan korneal Arc-Eye (Welder's flash sand)."
    },
    {
        q: "Bagaimana cara membaca pelabelan HMIS / NFPA berlian 4 Warna kotak? Bagian mana merah, biru, kuning, putih secara spesifik merepresentasikan zat material?",
        a: "Merah muda = Bahaya Mudah Terbakar Api (Flammability), Biru laut = Resiko Kesehatan Racun Tubuh (Health), Kuning terang = Ketidakstabilan Ledakan Reaktif (Reactivity/Instability), dan Putih kapur cerah = Info Spesial Khusus pengecualian alat perlakuan khusus air (Specific Hazard).",
        expl: "Level bernomor mutlak 0-4. Nomot 4 pada Merah bermakna 'Uap gas sangat rawan terbakar spontan di tekanan hawa dingin santai ruangan' fatal cepat meledak."
    },
    {
        q: "Suau kondisi darurat tumpahan B3 berlebih menutupi lantai. Menggunakan media serbuk *Sawdust* (Serbuk gergaji kayu lapuk rumahan) SANGAT dilarang menutrisi menyerap kimia tumpah B3 ini. Mengapa melanggar standar modern K3 dunia?",
        a: "Sawdust terbuat dari serat karbon kayu kering rumahan, menyerap kimia justru membuatnya menjelma menjadi sebongkah mesiu bom bahan organik yang siap berkolaborasi api merambat kilat dengan oksigen sekitar ruangan! Bisa mencetuskan kebakaran spontan Spontaneous Combustion.",
        expl: "Solusi baku serap modern wajib pasir (sand), tanah liat lembam silikosis, cat litter inorganik, abu soda khusus (Absorbent Pads industri sintetik khusus Oil/Chemical)."
    },
    {
        q: "Terakhir, Puncak piramida The Heinrich adalah 1 korban meninggal dunia. Jika merombak mengubah piramida ini berbasis sistem kesadaran modern Budaya Perilaku 'BBS - Behavior Based Safety' kunci akar masalah insiden maut itu sebetulnya tersembunyi bersembunyi dimana?",
        a: "Kunci akar sesungguhnya tidak terletak pada alat rusak (unsafe condition), MELAINKAN di tatanan otak Sikap meremehkan Manusia pekerja aspal murni (*Human error & Unsafe Behavior*) akibat minimnya budaya supervisi proaktif peduli menegur saling menyadarkan mengintimidasi keras satu sesama nyawa.",
        expl: "Alat canggih mati jika dirawat acuh. Safety mutlak bergantung kepedulian mental manusianya masing-masing!"
    }
];

module.exports = questionsPart2;
