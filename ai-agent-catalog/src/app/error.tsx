"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Route-level error boundary. Displays an error message and allows retry.
 * Must be a Client Component according to Next.js docs.
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Optionally log the error to monitoring service here.
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center">
      <h2 className="text-xl font-semibold text-destructive">
        Something went wrong
      </h2>
      <p className="text-sm text-muted-foreground max-w-sm">
        {error.message || "We couldn't load the AI agent catalog. Please try again."}
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
} 