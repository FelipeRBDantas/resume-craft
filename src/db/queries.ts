import { auth } from "@/lib/auth";
import { cache } from "react";
import { db } from "./drizzle";
import { eq } from "drizzle-orm";
import { resumes } from "./schema";

export const getResumes = cache(async () => {
  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) return [];

  const userResumes = await db.query.resumes.findMany({
    where: eq(resumes.userId, userId),
  });

  return userResumes;
});
