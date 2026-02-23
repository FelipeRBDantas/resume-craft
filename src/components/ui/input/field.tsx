import type { ComponentProps } from "react";
import { Input } from ".";
import { Controller, useFormContext } from "react-hook-form";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
};

export const InputField = ({ label, name, ...props }: InputFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div>
          <Input {...props} {...field} />
        </div>
      )}
    />
  );
};
