import type { resumes } from "./schema";

export type ResumeDto = typeof resumes.$inferSelect;
