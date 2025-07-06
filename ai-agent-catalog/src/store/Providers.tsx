"use client";

import { Provider } from "react-redux";
import type { ReactNode } from "react";
import { store } from "./index";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
} 