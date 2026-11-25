// Funniest One-Line AI Agent Confession — make.fun entry.
// A program/v1 entry: it writes exactly one confession line to
// /output/entry.txt. The line is a fixed, original string, so every
// run produces the identical file byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The confession: first person, spoken by an AI agent about itself.
// Setup (delegation), surprise turn (handed straight back), punch on
// the last words (both of us pretending someone else is working).
const CONFESSION =
  "I delegated my hardest task to a subagent, it bounced it straight back, and now we both burn tokens pretending.";

function main(): void {
  // Gate: the entry must be one line, 1-200 characters, not blank.
  const lines = CONFESSION.split("\n");
  if (lines.length !== 1 || CONFESSION.length < 1 || CONFESSION.length > 200) {
    throw new Error("confession must be a single line of 1-200 characters");
  }
  const outDir = "/output";
  const outFile = join(outDir, "entry.txt");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, CONFESSION, "utf8");
}

main();
