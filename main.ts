import { mkdirSync, writeFileSync } from "node:fs";

// Unsent: The Micro-Confession Sprint — one micro-confession, exactly two parts:
// a "To:" line naming who it was meant for, and the unsent line itself,
// written exactly as it was typed, with no explanation after it.
const entry = [
  "To: the boy who taught me to ride a bike",
  "i never told you i fell off on purpose just so you'd hold my hand a little longer",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
