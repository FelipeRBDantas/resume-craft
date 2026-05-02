import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useDeleteResume = () => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    await api.delete(`/resume/${id}`);
  };

  const mutation = useMutation({
    mutationFn: handleDelete,

    onSuccess: () => {
      toast.success("Currículo deletado com sucesso.");

      router.push("/dashboard/resumes");
    },
  });

  return {
    handleDeleteResume: mutation.mutate,
    ...mutation,
  };
};
