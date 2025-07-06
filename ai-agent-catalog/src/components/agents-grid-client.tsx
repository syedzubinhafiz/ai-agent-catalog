"use client";

import type { Agent } from "@/lib/types";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface Props {
  agents: Agent[];
}

export default function AgentsGridClient({ agents }: Props) {
  // Render empty state when no agents match filters
  if (agents.length === 0) {
    return (
      <p className="text-muted-foreground text-sm text-center w-full max-w-5xl">
        No agents match your filters.
      </p>
    );
  }

  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  const MotionCard = motion(Card);

  return (
    <AnimatePresence mode="wait">
      <motion.ul
        key={agents.map((a) => a.id).join("-")}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        {agents.map((agent) => (
          <motion.li key={agent.id} variants={itemVariants} layout>
            <Link href={`/agents/${agent.slug}`} className="block h-full">
              <MotionCard
                className="h-full"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03, boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
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
              </MotionCard>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
} 