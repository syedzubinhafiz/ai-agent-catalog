import Image from "next/image";
import { getAgents } from "@/lib/data";
import type { Agent } from "@/lib/types";

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

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {agents.map((agent) => (
          <li
            key={agent.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-background/50"
          >
            <h2 className="text-lg font-medium mb-1">{agent.name}</h2>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {agent.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
