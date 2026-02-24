const fs = require('fs');

let finalCode = "// K3 Learning - Chapter Data (1-10)\nconst CHAPTERS = [\n";

for (let i = 1; i <= 15; i++) {
    const code = fs.readFileSync('injector_ch' + i + '.js', 'utf8');
    const startStr = 'const ch' + i + 'Content = `';
    const startIndex = code.indexOf(startStr) + startStr.length;

    // Find the ending backtick of the template literal
    let endStrIndex = code.lastIndexOf('`;');

    let snippet = code.substring(startIndex, endStrIndex);

    // Remove the backslash escaping the template literals
    snippet = snippet.replace(/\\`/g, '`');

    // Remove stray backslash at the end
    snippet = snippet.replace(/\\$/, '');

    // Remove the trailing `];` if it exists (mostly ch10)
    snippet = snippet.replace(/\];\s*$/, '');

    // Add a trailing comma for all chapters except the last one if it doesn't have one
    if (i < 15 && !snippet.trim().endsWith(',')) {
        snippet = snippet.trimEnd() + ",\n";
    }

    finalCode += snippet;
}

finalCode += "\n];\n";

fs.writeFileSync('chapters.js', finalCode);
console.log("Successfully rebuilt chapters.js with correct backticks");
