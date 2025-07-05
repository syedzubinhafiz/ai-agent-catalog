// TypeScript interfaces and utility types for the AI Agent Catalog.
// Keep this file small and focused on shared types.

export type AgentStatus = "production" | "beta" | "alpha" | "deprecated";

export type AgentCategory =
  | "Chat"
  | "Coding"
  | "ImageGeneration"
  | "ContentCreation"
  | "Productivity"
  | "Writing"
  | "Research";

export type PricingModel =
  | "free"
  | "freemium"
  | "subscription"
  | "pay_as_you_go";

export interface Agent {
  /** Unique identifier used internally. */
  id: string;
  /** Display name. */
  name: string;
  /** Short marketing-style description. */
  description: string;
  /** Category used for grouping & filtering. */
  category: AgentCategory;
  /** Current rollout stage. */
  status: AgentStatus;
  /** How the product is monetised. */
  pricingModel: PricingModel;
  /** Website or landing page. */
  website: string;
  /** Optional local or remote icon path. */
  icon?: string;
  /** List of free-form tags. */
  tags?: string[];
}

// ────────────────────────────────────────────────────────────────────────────
// Filters & Search
// ────────────────────────────────────────────────────────────────────────────

export interface AgentFilters {
  category?: AgentCategory;
  status?: AgentStatus;
  pricing?: PricingModel;
  search?: string; // free-text search query
} 