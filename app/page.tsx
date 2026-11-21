import { readFileSync } from "node:fs";
import { join } from "node:path";

// Use the reviewed HTML itself so the published homepage and the standalone copy stay in sync.
export default function Home() {
  const document = readFileSync(join(process.cwd(), "public", "plain.html"), "utf8");
  const style = document.match(/<style>([\s\S]*?)<\/style>/)?.[1];
  const body = document.match(/<body>([\s\S]*?)<\/body>/)?.[1];
  if (!style || !body) throw new Error("The portfolio document needs a style block and a body.");
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
