import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import path from "node:path";
export const require = createRequire(import.meta.url);
const ts = require("typescript");
const Module = require("node:module");
const root = path.resolve(import.meta.dirname, "..");
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (name, ...args) {
  return originalResolve.call(
    this,
    name.startsWith("@/") ? path.join(root, name.slice(2)) : name,
    ...args,
  );
};
for (const extension of [".ts", ".tsx"]) {
  Module._extensions[extension] = (module, filename) => {
    const output = ts.transpileModule(readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2017,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
    });
    module._compile(output.outputText, filename);
  };
}
