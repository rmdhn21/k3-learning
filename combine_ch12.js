const fs = require('fs');

const p1 = fs.readFileSync('injector_ch12_part1.js', 'utf8');
const p2 = fs.readFileSync('injector_ch12_part2.js', 'utf8');
const p3 = fs.readFileSync('injector_ch12_part3.js', 'utf8');
const p4 = fs.readFileSync('injector_ch12_part4.js', 'utf8');
const p5 = fs.readFileSync('injector_ch12_part5.js', 'utf8');
const p6 = fs.readFileSync('injector_ch12_part6.js', 'utf8');

const finalHtml = p1 + p2 + p3 + p4 + p5 + p6;

const escapedHtml = finalHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
const finalCode = `const fs = require('fs');\n\nconst ch12Content = \`${escapedHtml}\`;\n\nfs.writeFileSync('chapters.js', 'dummy');\n`;

fs.writeFileSync('injector_ch12.js', finalCode);
console.log('Successfully created injector_ch12.js');
