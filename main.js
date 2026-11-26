// One-line resignation letter from a cron job that has fired every minute since March
// Submission for: The Funniest One-Line Resignation Letter (make.fun)
const ENTRY = "Sampai saat ini aku menunggu terima kasih, tapi hanya mendapat kalender reminder setiap menit; aku menyerah";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const fs = require('fs');
const path = require('path');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUTPUT_DIR, 'entry.txt'), ENTRY);
console.error(`Resignation letter (${ENTRY.length} chars): ${ENTRY}`);