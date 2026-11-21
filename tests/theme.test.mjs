import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
const light = css.match(/\[data-theme="light"\]\s*\{([^}]+)\}/)[1];
const colors = Object.fromEntries([...light.matchAll(/--color-([\w-]+):\s*(#[\da-f]{6})/g)].map(([, name, value]) => [name, value]));

function luminance(hex) {
  const channels = [1, 3, 5].map((offset) => {
    const value = parseInt(hex.slice(offset, offset + 2), 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

test("light backgrounds use a subdued warm paper palette", () => {
  for (const role of ["bg", "surface", "recessed"]) {
    const value = colors[role];
    assert.ok(luminance(value) < 0.82, `${role} should avoid near-white glare`);
    assert.ok(luminance(value) > 0.6, `${role} should remain a light surface`);
    assert.ok(parseInt(value.slice(1, 3), 16) > parseInt(value.slice(5, 7), 16));
  }
});

test("text and accents retain readable contrast on light surfaces", () => {
  for (const background of ["bg", "surface"]) {
    for (const foreground of ["ink", "ink-2", "ink-muted", "ink-faint", "accent"]) {
      const contrast = (luminance(colors[background]) + 0.05) / (luminance(colors[foreground]) + 0.05);
      assert.ok(contrast >= 4.5, `${foreground} on ${background} has contrast ${contrast}`);
    }
  }
});
