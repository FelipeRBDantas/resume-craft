import { Editor } from ".";
import { Control, Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { FieldWrapper } from "../field-wrapper";

type EditorFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  containerClassName?: string;
  required?: boolean;
  className?: string;
  control?: Control<T>;
};

export const EditorField = <T extends FieldValues>({
  label,
  name,
  required,
  containerClassName,
  control: customControl,
  ...props
}: EditorFieldProps<T>) => {
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
          <Editor {...props} {...field} value={field.value ?? ""} />
        </FieldWrapper>
      )}
    />
  );
};
