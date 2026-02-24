import { readFile } from "node:fs/promises";

export async function resolveInput(source?: string): Promise<string> {
  // Explicit source: file or URL
  if (source) {
    if (/^https?:\/\//i.test(source)) {
      let res: Response;
      try {
        res = await fetch(source);
      } catch (err: unknown) {
        const cause = err instanceof Error && err.cause instanceof Error ? err.cause.message : (err instanceof Error ? err.message : String(err));
        throw new Error(`Failed to fetch ${source}: ${cause}`);
      }
      if (!res.ok) {
        throw new Error(`Failed to fetch ${source}: ${res.status} ${res.statusText}`);
      }
      return res.text();
    }
    return readFile(source, "utf-8");
  }

  // Piped stdin
  if (!process.stdin.isTTY) {
    const chunks: Buffer[] = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk);
    }
    return Buffer.concat(chunks).toString("utf-8");
  }

  throw new Error(
    "No input provided. Pass an HTML file, URL, or pipe HTML via stdin."
  );
}
