import { work, type WorkEntry } from "./data";
export const filters = [
  "All work",
  "Products",
  "AI systems",
  "Developer tools",
] as const;
export type ProjectFilter = (typeof filters)[number];
const categories: Record<string, ProjectFilter> = {
  cutroom: "Products",
  strivo: "Products",
  voicescope: "AI systems",
  "open-agent": "AI systems",
  autoace: "AI systems",
  "mcp-foundry": "Developer tools",
  "opencode-terminal": "Developer tools",
  voicecli: "Developer tools",
};
export function filterProjects(
  filter: ProjectFilter,
  entries: WorkEntry[] = work,
): WorkEntry[] {
  return entries.filter(
    (entry) => filter === "All work" || categories[entry.slug] === filter,
  );
}
