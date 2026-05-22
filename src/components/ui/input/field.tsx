import type { ComponentProps, ReactNode } from "react";
import { Input } from ".";
import { Control, Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { FieldWrapper } from "../field-wrapper";

type InputFieldProps<T extends FieldValues> = ComponentProps<typeof Input> & {
  label: string;
  name: Path<T>;
  containerClassName?: string;
  extraContent?: (value: string) => ReactNode;
  control?: Control<T>;
};

export const InputField = <T extends FieldValues>({
  label,
  name,
  required,
  containerClassName,
  extraContent,
  control: customControl,
  ...props
}: InputFieldProps<T>) => {
  const methods = useFormContext<T>();

  return (
    <Controller
      control={customControl ?? methods.control}
      name={name}
      rules={{
        required: required && "Campo obrigatório",
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper
          label={label}
          className={containerClassName}
          error={fieldState?.error}
        >
          <Input {...props} {...field} />

          {extraContent && extraContent(field.value)}
        </FieldWrapper>
      )}
    />
  );
};
