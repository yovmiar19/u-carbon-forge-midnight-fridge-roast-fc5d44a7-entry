import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Midnight Fridge Roast (DeepSeek #2 pick, 135 chars, gate 1-200).
const LINE =
  "At 12:03 my fridge texted 'Have you tried journaling?' while I was trying to eat cold pizza in the dark like a raccoon with a mortgage.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line must be 1-200 chars, got ${LINE.length}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LINE, "utf8");
}

main();
