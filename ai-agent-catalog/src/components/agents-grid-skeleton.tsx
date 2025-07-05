import Skeleton from "@/components/ui/skeleton";

export default function AgentsGridSkeleton() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i}>
          <Skeleton className="h-32 w-full" />
        </li>
      ))}
    </ul>
  );
} 