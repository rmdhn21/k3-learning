const fs = require('fs');
const googleTTS = require('google-tts-api');

async function buildLongPodcast() {
    console.log('Reading markdown script...');
    const markdown = fs.readFileSync('naskah_podcast_30_menit.md', 'utf8');

    // Clean up markdown
    let cleanText = markdown
        .replace(/\*\*(.*?)\*\*/g, '$1') // remove bold
        .replace(/\*(.*?)\*/g, '$1')     // remove italics
        .replace(/\(Sound Effect.*?\)/gi, '') // remove sound effects
        .replace(/\(Intro Music.*?\)/gi, '')
        .replace(/\(Outro Music.*?\)/gi, '')
        .replace(/---/g, '')
        .replace(/# NASKAH PODCAST.*/i, '')
        .replace(/\*\*Tema:\*\*.*/i, '')
        .replace(/\*\*Pembicara:\*\*.*/i, '')
        .replace(/1\. Andi.*|2\. Bima.*/gi, '')
        .replace(/\(TIPS GENERATE AUDIO:\)[\s\S]*/, '') // Remove footer
        .replace(/Andi:/g, '') // remove speaker tags
        .replace(/Bima:/g, '')
        .trim();

    // Split into paragraphs to process chunk by chunk to avoid rate limits/timeouts
    const paragraphs = cleanText.split('\n').filter(p => p.trim().length > 0);
    console.log(`Found ${paragraphs.length} paragraphs to process.`);

    let finalBuffer = Buffer.alloc(0);

    for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i].trim();
        if (p.length === 0) continue;

        console.log(`Processing paragraph ${i + 1}/${paragraphs.length}: ${p.substring(0, 30)}...`);

        try {
            // using getAllAudioBase64 for each paragraph as it could be > 200 chars
            const results = await googleTTS.getAllAudioBase64(p, {
                lang: 'id',
                slow: false,
                host: 'https://translate.google.com',
                splitPunct: ',.?'
            });

            for (const result of results) {
                const audioBuffer = Buffer.from(result.base64, 'base64');
                finalBuffer = Buffer.concat([finalBuffer, audioBuffer]);
            }

            // Artificial delay to prevent API limits
            await new Promise(r => setTimeout(r, 1000));
        } catch (err) {
            console.error(`Error processing paragraph ${i + 1}:`, err.message);
            // Wait longer on error and retry once
            await new Promise(r => setTimeout(r, 3000));
            try {
                const results = await googleTTS.getAllAudioBase64(p, {
                    lang: 'id', slow: false, host: 'https://translate.google.com', splitPunct: ',.?'
                });
                for (const result of results) {
                    const audioBuffer = Buffer.from(result.base64, 'base64');
                    finalBuffer = Buffer.concat([finalBuffer, audioBuffer]);
                }
            } catch (retryErr) {
                console.error(`Failed retry for paragraph ${i + 1}:`, retryErr.message);
            }
        }
    }

    fs.writeFileSync('videos/podcast.mp3', finalBuffer);
    console.log(`\nSuccess! Wrote ${finalBuffer.length} bytes to videos/podcast.mp3`);
}

buildLongPodcast().catch(console.error);
