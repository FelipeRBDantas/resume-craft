import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ApiService, type AIGenerationPayload } from "@/services/api";

export const useJobTitle = () => {
  const handleGenerate = async (payload: AIGenerationPayload) => {
    return ApiService.generateContentForJob(payload);
  }

  const mutation = useMutation({
    mutationFn: handleGenerate,

    onSuccess: (_) => {
      toast.success("Título do cargo gerado com sucesso!");
    },
  });

  return {
    handleGenerateContentForJob: mutation.mutate,
    ...mutation
  };
};
