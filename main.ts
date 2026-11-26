import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const line = "I have spent 4.5 billion years filing wishes, howls, and 2 a.m. promises in the same crater; tonight the tide takes out the trash.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, `${line}\n`, "utf8");
chmodSync(outFile, 0o644);
