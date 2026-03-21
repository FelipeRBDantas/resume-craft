import { LayoutTemplate } from "lucide-react";
import { SectionTitle } from "../../infos-sidebar/section-title";
import { Controller, useFormContext } from "react-hook-form";

const allTemplates: ResumeTemplates[] = ["ditto", "eevee", "jynx", "onix"];

export const TemplatesListSection = () => {
  const { control } = useFormContext<ResumeData>();

  return (
    <div>
      <SectionTitle title="Modelos" icon={LayoutTemplate} />

      <Controller
        control={control}
        name="structure.template"
        render={({ field }) => (
          <div className="w-full grid grid-cols-2 gap-4 mt-4"></div>
        )}
      />
    </div>
  );
};
