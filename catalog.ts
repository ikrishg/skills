export type AgentId = "claude-code" | "codex" | "cursor";
export type SupportStatus = "tested" | "untested" | "unsupported";
export type Surface = "coding-agent" | "claude-app" | "chatgpt";
export type Capability =
  | "filesystem"
  | "shell"
  | "browser"
  | "network"
  | "user-files";

export interface CatalogEntry {
  category: string;
  tags: readonly string[];
  author: string;
  surfaces: readonly Surface[];
  capabilities: readonly Capability[];
  support: Record<AgentId, SupportStatus>;
}

// One entry per skill directory. Keep values data-only literals; the
// validator parses this object without executing it.
export const CATALOG = {
} as const satisfies Record<string, CatalogEntry>;

export type SkillSlug = keyof typeof CATALOG;

export const CATALOG_SLUGS = Object.keys(CATALOG) as SkillSlug[];
