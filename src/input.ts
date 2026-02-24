export async function resolveInput(source?: string): Promise<string> {
  // Explicit source: file or URL
  if (source) {
    if (/^https?:\/\//i.test(source)) {
      const res = await fetch(source);
      if (!res.ok) {
        throw new Error(`Failed to fetch ${source}: ${res.status} ${res.statusText}`);
      }
      return res.text();
    }
    return Bun.file(source).text();
  }

  // Piped stdin
  if (!process.stdin.isTTY) {
    return Bun.stdin.text();
  }

  throw new Error(
    "No input provided. Pass an HTML file, URL, or pipe HTML via stdin."
  );
}
