const https = require('https');

function searchYoutube(query, label) {
    https.get('https://www.youtube.com/results?search_query=' + encodeURIComponent(query), (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            const matches = data.match(/"videoId":"([a-zA-Z0-9_-]{11})"/g);
            if (matches) {
                const ids = [...new Set(matches)].map(s => s.replace('"videoId":"', '').replace('"', ''));
                console.log(label + " Videos:", ids.slice(0, 3));
            }
        });
    });
}

searchYoutube('cara menggunakan apar animasi k3', 'APAR');
searchYoutube('cara menggunakan scba k3', 'SCBA');
searchYoutube('gas detector k3 tutorial', 'GasDetector');
