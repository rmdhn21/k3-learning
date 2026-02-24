const fs = require('fs');

const text = fs.readFileSync('soal dari internet.txt', 'utf8');
const lines = text.split('\n').map(l => l.trim());

let questions = [];
let i = 0;

while (i < lines.length) {
    if (lines[i].match(/^[aA][\.\)]\s/)) {
        let qLines = [];
        let j = i - 1;
        let stopWords = ["KUNCI JAWABAN", "SOAL UJIAN", "SOAL HSSE", "POST TEST", "REFERENSI JAWABAN", "PETUNJUK", "KERJAKANLAH"];
        while (j >= 0) {
            let prev = lines[j];
            if (prev === "") { j--; continue; }
            if (prev.match(/^[dDeE][\.\)]\s/)) break; // Previous question options
            let stop = false;
            for (let sw of stopWords) {
                if (prev.includes(sw)) stop = true;
            }
            if (stop) break;

            qLines.unshift(prev);
            j--;
        }

        let qText = qLines.join(" ").trim();
        // remove leading numbers like "22. " or "4. "
        qText = qText.replace(/^[0-9]+\.\s*/, "");

        let options = [];
        let k = i;
        while (k < lines.length && lines[k].match(/^[a-eA-E][\.\)]\s/)) {
            options.push(lines[k].replace(/^[a-eA-E][\.\)]\s/, "").trim());
            k++;
        }

        questions.push({
            originalQ: qText,
            options: options
        });

        i = k - 1;
    }
    i++;
}

console.log(`Parsed ${questions.length} questions.`);
fs.writeFileSync('parsed_temp.json', JSON.stringify(questions, null, 2));
