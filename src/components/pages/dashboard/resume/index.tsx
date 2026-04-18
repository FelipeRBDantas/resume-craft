"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { InfosSidebar } from "./infos-sidebar";
import { ResumeContent } from "./resume-content";
import { StructureSidebar } from "./structure-sidebar";
import { FormProvider, useForm } from "react-hook-form";
import { useResizePanelDensity } from "@/hooks/use-resize-panel-density";
import { useIsMobile } from "@/hooks/use-verify-breakpoint";
import type { User } from "next-auth";
import { mergician } from "mergician";
import { useCallback, useEffect, useRef } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { updateResumeData } from "@/db/actions";
import { useParams } from "next/navigation";

type ResumePageProps = {
  title: string;
  initialData: Partial<ResumeData>;
  user?: User;
};

export const ResumePage = ({ title, initialData, user }: ResumePageProps) => {
  const params = useParams();

  const resumeId = params.id as string;

  const defaultValues: ResumeData = {
    content: {
      summary: "<p></p>",
      image: {
        url: user?.image ?? "",
        visible: true,
      },
      infos: {
        email: "",
        fullName: user?.name ?? "",
        headLine: "",
        location: "",
        phone: "",
        website: "",
      },
      socialMedias: [],
      experiences: [],
      educations: [],
      skills: [],
      languages: [],
      certifications: [],
      projects: [],
    },
    structure: {
      template: "ditto",
      colorTheme: "slate",
      language: "portuguese",
      layout: {
        mainSections: [
          { key: "socialMedias" },
          { key: "summary" },
          { key: "experiences" },
          { key: "educations" },
          { key: "certifications" },
          { key: "projects" },
        ],
        sidebarSections: [{ key: "languages" }, { key: "skills" }],
      },
    },
  };

  const methods = useForm<ResumeData>({
    defaultValues: mergician(defaultValues, initialData),
  });

  const { layoutDensity, handleResize } = useResizePanelDensity(22, 30);

  const isMobile = useIsMobile();

  const data = methods.watch();

  const shouldSave = useRef(false);

  const debouncedData = useDebounce(JSON.stringify(data));

  const handleSaveUpdates = useCallback(() => {
    try {
      if (!shouldSave.current) {
        shouldSave.current = true;

        return;
      }

      const updatedData = methods.getValues();

      updateResumeData(resumeId, updatedData);
    } catch (error) {
      console.error(error);
    }
  }, [methods, resumeId]);

  useEffect(() => {
    handleSaveUpdates();
  }, [debouncedData, handleSaveUpdates]);

  return (
    <FormProvider {...methods}>
      <main className="w-full h-screen overflow-hidden">
        <ResizablePanelGroup
          direction={isMobile ? "vertical" : "horizontal"}
          className="w-full h-full"
        >
          <ResizablePanel
            minSize={20}
            maxSize={40}
            defaultSize={30}
            onResize={handleResize}
          >
            <InfosSidebar layoutDensity={layoutDensity} />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={45}>
            <ResumeContent title={title} />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
            <StructureSidebar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </FormProvider>
  );
};
