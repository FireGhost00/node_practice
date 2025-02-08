"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
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
if (!fs_1.default.existsSync(outputPath)) {
    fs_1.default.mkdirSync(outputPath, { recursive: true });
}
fs_1.default.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage);
console.log(`File table-${base}.txt created successfully in ${outputPath} folder`);
