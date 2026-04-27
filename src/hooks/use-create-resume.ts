import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import type { ResumeDto } from "@/db/types";

export const useCreateResume = () => {
  const router = useRouter();

  const handleCreate = async (title: string) => {
    const { data } = await api.post<ResumeDto>(
      "/resume",
      {
        title,
      }
    );

    return data;
  }

  const mutation = useMutation({
    mutationFn: handleCreate,

    onSuccess: (resume) => {
      toast.success("Currículo criado com sucesso!");

      router.push(`/dashboard/resumes/${resume.id}`);
    },
  });

  return {
    handleCreateResume: mutation.mutate,
    isPending: mutation.isPending,
  };
};
