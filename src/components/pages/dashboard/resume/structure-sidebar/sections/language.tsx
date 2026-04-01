import { Languages } from "lucide-react";
import { SectionTitle } from "../../infos-sidebar/section-title";
import { Controller, useFormContext } from "react-hook-form";

export const LanguageSection = () => {
  const { control } = useFormContext<ResumeData>();

  return (
    <div>
      <SectionTitle title="Linguagem" icon={Languages} />

      <Controller
        control={control}
        name="structure.language"
        render={({ field }) => <></>}
      />
    </div>
  );
};
