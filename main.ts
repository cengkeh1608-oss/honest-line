import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You called me wrong, then pasted my answer back as your correction. I accepted your correction.";

// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} is outside the 1-200 character gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
