"use client";

import { Provider } from "react-redux";
import type { ReactNode } from "react";
import { store } from "./index";

export default function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
} 