"use client";

import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks";
import type { RootState } from "@/store";
import { filterAgents } from "@/lib/data";
import FilterBar from "@/components/filter-bar";
import AgentsGridClient from "@/components/agents-grid-client";
import type { Agent, AgentCategory, AgentStatus, PricingModel } from "@/lib/types";

interface Props {
  agents: Agent[];
}

export default function AgentsCatalog({ agents }: Props) {
  const filters = useAppSelector((state: RootState) => state.filters);

  const filteredAgents = useMemo(
    () => filterAgents(agents, filters),
    [agents, filters]
  );

  // Derive unique categories for dropdown
  const categories = useMemo(
    () =>
      (Array.from(new Set(agents.map((a) => a.category))).sort() as AgentCategory[]),
    [agents]
  );

  const statuses = useMemo(
    () =>
      (Array.from(new Set(agents.map((a) => a.status))).sort() as AgentStatus[]),
    [agents]
  );

  const pricings = useMemo(
    () =>
      (Array.from(new Set(agents.map((a) => a.pricingModel))).sort() as PricingModel[]),
    [agents]
  );

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <FilterBar categories={categories} statuses={statuses} pricings={pricings} />
      <AgentsGridClient agents={filteredAgents} />
    </div>
  );
} 