import mockAgents from "@/data/mock-agents-data.json" ;
import type { Agent, AgentFilters } from "@/lib/types";

/**
 * Simulates a server-side fetch.
 * In production this would call an external API / database.
 */
export async function getAgents(delayMs = 300): Promise<Agent[]> {
  // Simulate latency so Next.js suspense behaves like a real request.
  if (delayMs) await new Promise((r) => setTimeout(r, delayMs));
  return mockAgents as Agent[];
}

// ────────────────────────────────────────────────────────────────────────────
// Filter & Search helpers
// These run on the server for SSR or on the client after hydration.
// ────────────────────────────────────────────────────────────────────────────

export function filterAgents(agents: Agent[], filters: AgentFilters): Agent[] {
  return agents.filter((agent) => {
    if (filters.category && agent.category !== filters.category) return false;
    if (filters.status && agent.status !== filters.status) return false;
    if (filters.pricing && agent.pricingModel !== filters.pricing) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const haystack = `${agent.name} ${agent.description} ${agent.tags?.join(" ") ?? ""}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

export function searchAgents(agents: Agent[], query: string): Agent[] {
  return filterAgents(agents, { search: query });
} 