import { getResumes } from "@/db/queries";
import { AddResumeButton } from "../add-resume-button";
import { NewResumeDialog } from "../new-resume-dialog";
import { ResumeCard } from "../resume-card";

export const ResumeList = async () => {
  const resumes = await getResumes();

  const sortedResumes = resumes.sort((a, b) => {
    if (a.updatedAt > b.updatedAt) return -1;

    if (a.updatedAt < b.updatedAt) return 1;

    return 0;
  });

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 auto-rows-max gap-4 flex-1">
      <NewResumeDialog>
        <AddResumeButton />
      </NewResumeDialog>

      {sortedResumes.map((resume) => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}
    </section>
  );
};
