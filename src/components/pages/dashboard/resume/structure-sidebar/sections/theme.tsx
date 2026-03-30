import { Palette } from "lucide-react";
import { SectionTitle } from "../../infos-sidebar/section-title";
import colors from "tailwindcss/colors";
import { Controller, useFormContext } from "react-hook-form";

const keysToIgnore = [
  "current",
  "inherit",
  "currentColor",
  "transparent",
  "black",
  "white",
];

const colorsKeys = Object.keys(colors).filter(
  (key) => !keysToIgnore.includes(key),
);

export const ThemeSection = () => {
  const { control } = useFormContext<ResumeData>();

  return (
    <div>
      <SectionTitle title="Tema" icon={Palette} />

      <Controller
        control={control}
        name="structure.colorTheme"
        render={({ field }) => (
          <div className="grid grid-cols-7 gap-4 mt-4"></div>
        )}
      />
    </div>
  );
};
