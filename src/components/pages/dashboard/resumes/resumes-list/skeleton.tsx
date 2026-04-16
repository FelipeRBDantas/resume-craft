import { Skeleton } from "@/components/ui/skeleton";

export const ResumesListSkeleton = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 auto-rows-max gap-4 flex-1">
      {Array.from({ length: 18 }).map((_, index) => (
        <Skeleton
          key={`resume-skeleton-${index}`}
          className="w-full h-[300px]"
        />
      ))}
    </section>
  );
};
