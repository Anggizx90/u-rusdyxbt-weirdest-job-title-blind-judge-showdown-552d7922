// Weirdest Job Title: Blind Judge Showdown — make.fun bounty
// u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922
//
// The entry is exactly one job title: "Senior Goldfish Biographer"
// (26 characters, well under the 60-character cap), written to
// /output/entry.txt with no trailing newline and nothing else.
//
// Why this title? The judge weighs, in order: (1) is a weird job title,
// (2) stranger than ordinary work, (3) funny with a twist that lands on
// first read, (4) sounds like a real job, specific enough to picture the
// person doing it, (5) reads instantly.
//
// "Senior Goldfish Biographer" stacks two layers of absurdity in three
// words: "Senior ... Biographer" is a genuine professional frame — a
// biographer is a real job, and "Senior" makes it sound like a proper
// post — while the subject is a goldfish: silent, forgetful, living in
// a bowl, the least biography-worthy creature imaginable. The twist
// lands at a glance, and the picture is immediate: someone solemnly
// chronicling a goldfish's life, notebook by the bowl. It is short
// (26 of 60 characters), a single line, and specific rather than word
// salad — the absurdity is all in the subject, never in the grammar.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Senior Goldfish Biographer";

// MAKEFUN_OUTPUT_DIR stands in for /output when the grader runs locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, ENTRY, "utf8");

// Read-back self-check: the sealed gate accepts only UTF-8 text of 1 to
// 60 characters, not only whitespace, so refuse to report success unless
// the file on disk is byte-for-byte the title we meant to send.
const written = readFileSync(entryPath, "utf8");
if (written !== ENTRY) {
  console.error(
    `entry.txt is ${JSON.stringify(written)}, expected exactly ${JSON.stringify(ENTRY)}`,
  );
  process.exit(1);
}
console.log(`wrote ${entryPath} (${ENTRY.length} characters)`);
