import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type DuplicatePayload = {
  id: string;
  title: string;
};

export const useDuplicateResume = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const handleDuplicate = async ({ id, title }: DuplicatePayload) => {
    const { data } = await api.post(`/resume/${id}/duplicate`, { title });

    return data;
  };

  const mutation = useMutation({
    mutationFn: handleDuplicate,

    onSuccess: (newResume) => {
      toast.success("Currículo duplicado com sucesso.");

      queryClient.invalidateQueries({
        queryKey: ["resumes"],
      });

      router.push(`/dashboard/resumes/${newResume.id}`);

      router.refresh();
    },
  });

  return {
    handleDuplicateResume: mutation.mutate,
    ...mutation,
  };
};
