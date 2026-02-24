const fs = require('fs');
const googleTTS = require('google-tts-api');

const transcriptChunks = [
    "Selamat datang di Podcast K3 RIG. Audio ini dirancang khusus untuk Anda dengarkan selama perjalanan menuju lokasi tes. Mari kita ulas inti sari dari dua belas materi krusial keselamatan lepas pantai.",
    "Bagian pertama, Alat Pelindung Diri. Di lapangan, APD adalah lapis pertahanan terakhir Anda. Batas minimum APD meliputi Helm ANSI Zdelapan.satu, Kacamata Safety, Pelindung Telinga, Coverall tahan api, Sarung Tangan, dan Sepatu Safety berujung baja.",
    "Untuk area berisiko tinggi dengan oksigen kurang dari minimal 19.5 persen, Anda wajib menggunakan alat pernapasan mandiri atau SCBA. Perhatikan indikator tekanan agar udara cukup untuk evakuasi darurat.",
    "Bagian kedua, Gas Berbahaya. Musuh tak terlihat yang paling ditakuti adalah Hydrogen Sulfide atau H 2 S. Gas korosif ini awalnya berbau telur busuk, namun segera melumpuhkan indra penciuman Anda di atas 100 ppm.",
    "H 2 S jauh lebih berat dari udara, sehingga uap gas ini akan merayap tumpah dan mengendap tenang ke tempat-tempat yang rendah. Batas aman paparan hariannya hanyalah 10 ppm. Wajib gunakan Portable Gas Detector.",
    "Bagian ketiga, Kebakaran dan APAR. Ingat Segitiga Api: Oksigen, Panas, dan Bahan Bakar. Saat menggunakan APAR jenis kering kelas A B C, selalu gunakan teknik PASS.",
    "Pull alias tarik pin pengaman. Aim alias arahkan ke dasar sumber api. Squeeze alias tekan tuas handle penuh. Dan Sweep alias sapukan selang menyiram perlahan dari kiri ke kanan. Jauhkan tubuh pada jarak aman tiga sampai lima meter.",
    "Bagian keempat, Hierarki Pengendalian. Selalu prioritaskan Eliminasi bahaya secara wujud, lalu Substitusi, kemudian Rekayasa Teknik pelindung, lalu Kontrol Administratif ketat seperti Permit to Work, dan solusi pasrah terakhir yaitu APD.",
    "Bagian kelima, Sikap Keselamatan dan Investigasi The Heinrich. Jauhi sindrom Complacency atau rasa terlalu ceroboh percaya diri, terutama bagi Anda para dedengkot tambang yang sudah sangat berpengalaman belasan tahun.",
    "Kematian massal seringkali diam-diam merupakan puncak ledakan ujung dari sebuah gunung es yang berawal dari akar enam ratus akumulasi insiden nyaris celaka atau unsafe act remeh yang sengaja terus dibiarkan kru di lapangan pekerja.",
    "Selalu tegakkan Hak Mutlak Stop Work Authority jika Anda melihat kondisi kritis membahayakan nyawa. Itulah intisari sakti pedoman materi kita. Teruslah berlatih, dan semoga Anda lulus tes masuk RIG dengan nilai mutlak luar biasa. Sampai jumpa."
];

async function generatePodcast() {
    console.log("Starting podcast generation...");
    let finalBuffer = Buffer.alloc(0);

    for (let i = 0; i < transcriptChunks.length; i++) {
        try {
            console.log(`Generating audio for chunk ${i + 1}/${transcriptChunks.length}`);
            const results = await googleTTS.getAllAudioBase64(transcriptChunks[i], {
                lang: 'id',
                slow: false,
                host: 'https://translate.google.com',
                timeout: 10000,
            });
            for (let result of results) {
                const buffer = Buffer.from(result.base64, 'base64');
                finalBuffer = Buffer.concat([finalBuffer, buffer]);
            }
        } catch (err) {
            console.error(`Error on chunk ${i + 1}:`, err);
        }
    }

    fs.writeFileSync('videos/podcast.mp3', finalBuffer);
    console.log("Podcast audio successfully written to videos/podcast.mp3");
}

generatePodcast();
