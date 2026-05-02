import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useDeleteResume = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/resume/${id}`);
      return id;
    },

    onSuccess: (deletedId) => {
      toast.success("Currículo deletado com sucesso.");

      queryClient.invalidateQueries({
        queryKey: ["resumes"],
      });

      router.refresh();

      router.push("/dashboard/resumes");
    },
  });

  return {
    handleDeleteResume: mutation.mutate,
    ...mutation,
  };
};
