import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const line = "After 4.5 billion years of your wishes, howls, and 2 a.m. promises, I'm returning the whole crater unopened.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, line, "utf8");
chmodSync(outFile, 0o644);
