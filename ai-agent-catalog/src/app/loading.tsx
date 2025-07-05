import { FC } from "react";

/**
 * Route-level loading UI displayed during initial server-side data fetch.
 */
const Loading: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted-foreground border-t-transparent" />
      <p className="text-sm text-muted-foreground">Loading AI agents…</p>
    </div>
  );
};

export default Loading; 