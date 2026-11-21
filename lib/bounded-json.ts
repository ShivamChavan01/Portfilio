type BoundedBody = {
  body: ReadableStream<Uint8Array> | null;
  maxBytes: number;
  signal: AbortSignal;
};

export async function readBoundedText({ body, maxBytes, signal }: BoundedBody): Promise<string> {
  if (!body || signal.aborted) throw new Error("Unavailable body");
  const reader = body.getReader();
  const cancel = () => { void reader.cancel().catch(() => undefined); };
  signal.addEventListener("abort", cancel, { once: true });
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (signal.aborted) throw new Error("Body timed out");
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) {
        await reader.cancel();
        throw new Error("Body too large");
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } finally {
    signal.removeEventListener("abort", cancel);
    reader.releaseLock();
  }
}

export async function readBoundedJson(input: BoundedBody): Promise<unknown> {
  return JSON.parse(await readBoundedText(input));
}
