"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AgentFilters } from "@/lib/types";

// ────────────────────────────────────────────────────────────────────────────
// Types & Initial State
// ────────────────────────────────────────────────────────────────────────────

type Nullable<T> = T | undefined;

export interface FiltersState {
  category: Nullable<AgentFilters["category"]>;
  status: Nullable<AgentFilters["status"]>;
  pricing: Nullable<AgentFilters["pricing"]>;
  search: string;
}

const initialState: FiltersState = {
  category: undefined,
  status: undefined,
  pricing: undefined,
  search: "",
};

// ────────────────────────────────────────────────────────────────────────────
// Slice
// ────────────────────────────────────────────────────────────────────────────

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<FiltersState["category"]>) {
      state.category = action.payload;
    },
    setStatus(state, action: PayloadAction<FiltersState["status"]>) {
      state.status = action.payload;
    },
    setPricing(state, action: PayloadAction<FiltersState["pricing"]>) {
      state.pricing = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setCategory, setStatus, setPricing, setSearch, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer; 