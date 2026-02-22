import { ResumeCard } from "../resume-card";

export const ResumeList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 auto-rows-max gap-4 flex-1">
      <ResumeCard />

      <ResumeCard />

      <ResumeCard />
    </section>
  );
};
