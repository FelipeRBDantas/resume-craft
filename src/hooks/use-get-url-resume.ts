import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ApiService, type ResumeDownloadPayload } from "@/services/api";

export const useGetUrlResume = () => {
  const handleGetUrl = async (payload: ResumeDownloadPayload) => {
    return ApiService.getResumeUrl(payload);
  }

  const mutation = useMutation({
    mutationFn: handleGetUrl,

    onSuccess: (_) => {
      toast.success("Download do currículo realizado com sucesso!");
    },
  });

  return {
    handleGetUrlResume: mutation.mutate,
    ...mutation
  };
};
