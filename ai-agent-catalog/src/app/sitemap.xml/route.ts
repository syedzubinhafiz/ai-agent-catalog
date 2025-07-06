// new file

import { getAgents } from "@/lib/data";

export async function GET() {
  const agents = await getAgents();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticRoutes = ["/"]; // add more static pages if needed

  const urls = [
    ...staticRoutes.map((path) => `${baseUrl}${path}`),
    ...agents.map((agent) => `${baseUrl}/agents/${agent.slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `  <url><loc>${url}</loc></url>`) 
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}