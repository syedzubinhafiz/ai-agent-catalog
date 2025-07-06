"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setSearch,
  setCategory,
  setStatus,
  setPricing,
} from "@/store/filtersSlice.ts";
import type { RootState } from "@/store";
import type {
  AgentCategory,
  AgentStatus,
  PricingModel,
} from "@/lib/types";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  categories: AgentCategory[];
  statuses: AgentStatus[];
  pricings: PricingModel[];
}

export default function FilterBar({ categories, statuses, pricings }: Props) {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state: RootState) => state.filters);
  const { category, status, pricing, search } = filters;

  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col md:flex-row flex-wrap gap-4 w-full max-w-5xl"
    >
      <input
        type="text"
        placeholder="Search agents..."
        className="flex-1 border rounded-md px-3 py-2 text-sm"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <select
        className="border rounded-md px-2 py-2 text-sm min-w-[180px]"
        value={category ?? ""}
        onChange={(e) =>
          dispatch(
            setCategory(
              e.target.value === "" ? undefined : (e.target.value as AgentCategory)
            )
          )
        }
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        className="border rounded-md px-2 py-2 text-sm min-w-[150px]"
        value={status ?? ""}
        onChange={(e) =>
          dispatch(
            setStatus(
              e.target.value === "" ? undefined : (e.target.value as AgentStatus)
            )
          )
        }
      >
        <option value="">All Statuses</option>
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        className="border rounded-md px-2 py-2 text-sm min-w-[150px]"
        value={pricing ?? ""}
        onChange={(e) =>
          dispatch(
            setPricing(
              e.target.value === "" ? undefined : (e.target.value as PricingModel)
            )
          )
        }
      >
        <option value="">All Pricing</option>
        {pricings.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
    </motion.div>
  );
} 