import fs from 'fs';

let outputMessage = '';

const base = 5;
const HeaderMessage = `
==================================
    Table of ${base}
==================================\n
`;

for (let i = 1; i <= 10; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = HeaderMessage + outputMessage;

console.log(outputMessage);

const outputPath = `outputs`;

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}
fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage);
console.log(`File table-${base}.txt created successfully in ${outputPath} folder`);