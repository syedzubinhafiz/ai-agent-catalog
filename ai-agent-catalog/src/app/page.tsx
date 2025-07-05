import { getAgents } from "@/lib/data";
import type { Agent } from "@/lib/types";
import { Suspense } from "react";
import AgentsGrid from "@/components/agents-grid";
import AgentsGridSkeleton from "@/components/agents-grid-skeleton";

// This component is a Server Component by default (no 'use client')
// It fetches data on the server so the HTML is rendered with agent content.
export default async function Home() {
  const agents: Agent[] = await getAgents();

  return (
    <main className="flex flex-col items-center gap-8 py-12 px-4 sm:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          AI Agent Catalog
        </h1>
        <p className="text-sm text-muted-foreground">
          Showcasing {agents.length} AI agents available today
        </p>
      </header>

      <Suspense fallback={<AgentsGridSkeleton />}>
        <AgentsGrid />
      </Suspense>
    </main>
  );
}
