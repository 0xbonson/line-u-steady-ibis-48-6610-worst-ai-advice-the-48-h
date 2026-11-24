// Make.fun competition entry submission script
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "To save time in the deposition, I recommend deleting all emails mentioning the incident so you can honestly testify that none exist.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`);
