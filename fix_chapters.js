const fs = require('fs');

let finalCode = "// K3 Learning - Chapter Data (1-10)\nconst CHAPTERS = [\n";

for (let i = 1; i <= 10; i++) {
    const code = fs.readFileSync('injector_ch' + i + '.js', 'utf8');
    const startStr = 'const ch' + i + 'Content = `';
    const startIndex = code.indexOf(startStr) + startStr.length;

    // Find the ending backtick of the template literal
    let writeIdx = code.indexOf('fs.writeFileSync');
    let endStrIndex = code.lastIndexOf('`;', writeIdx);

    let snippet = code.substring(startIndex, endStrIndex);

    // Remove the backslash escaping the template literals
    snippet = snippet.replace(/\\`/g, '`');

    // Remove the trailing `];` if it exists in ch10
    if (i === 10) {
        snippet = snippet.replace(/];\s*$/, '');
    }

    finalCode += snippet;
}

finalCode += "\n];\n";

fs.writeFileSync('chapters.js', finalCode);
console.log("Successfully rebuilt chapters.js with correct backticks");
