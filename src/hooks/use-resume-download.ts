import { useFormContext } from "react-hook-form";
import { useGetUrlResume } from "./use-get-url-resume";

export const useResumeDownload = (title?: string) => {
  const { getValues } = useFormContext<ResumeData>();

  const { mutateAsync: handleGetUrlResume, isPending } = useGetUrlResume();

  const handleDownloadResume = async () => {
    const resume = document.getElementById("resume-content");

    if (!resume) return;

    const structure = getValues("structure");

    const url = await handleGetUrlResume({ html: resume.outerHTML, structure });

    const link = document.createElement("a");

    link.href = url;

    link.setAttribute("download", `${title ?? "Currículo"}.pdf`);

    document.body.appendChild(link);
    
    link.click();

    link.remove();
  }

  return { 
    handleDownloadResume, 
    isLoading: isPending 
  }
}
