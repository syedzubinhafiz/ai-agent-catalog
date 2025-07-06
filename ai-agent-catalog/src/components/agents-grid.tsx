import { getAgents } from "@/lib/data";
import type { Agent } from "@/lib/types";
import { Card, CardHeader, /*CardDescription,*/ CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function AgentsGrid() {
  const agents: Agent[] = await getAgents();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {agents.map((agent) => (
        <li key={agent.id}>
          <Link href={`/agents/${agent.slug}`} className="block h-full">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold leading-none tracking-tight">
                    {agent.name}
                  </h2>
                  <Badge variant={agent.status === "beta" ? "secondary" : "default"}>
                    {agent.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {agent.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
} 