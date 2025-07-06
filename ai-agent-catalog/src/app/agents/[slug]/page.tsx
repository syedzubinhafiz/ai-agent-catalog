import { getAgents } from "@/lib/data";
import type { Agent } from "@/lib/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const agents: Agent[] = await getAgents();
  return agents.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const agents: Agent[] = await getAgents();
  const agent = agents.find((a) => a.slug === params.slug);
  if (!agent) return {};
  return {
    title: `${agent.name} – AI Agent`,
    description: agent.description,
  };
}

export default async function AgentDetailPage({ params }: PageProps) {
  const agents: Agent[] = await getAgents();
  const agent = agents.find((a) => a.slug === params.slug);
  if (!agent) notFound();

  return (
    <main className="flex flex-col items-center gap-6 py-12 px-4 sm:px-8">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold leading-none tracking-tight">
              {agent.name}
            </h1>
            <Badge variant={agent.status.toLowerCase() === "beta" ? "secondary" : "default"}>
              {agent.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">{agent.description}</p>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Category:</strong> {agent.category}
            </p>
            <p>
              <strong>Pricing:</strong> {agent.pricingModel}
            </p>
            {agent.website && (
              <p>
                <a
                  href={agent.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Visit website
                </a>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
      <Link href="/" className="text-sm underline text-primary">
        ← Back to catalog
      </Link>
    </main>
  );
} 