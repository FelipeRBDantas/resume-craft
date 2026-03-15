import { Editor } from ".";
import { Controller, useFormContext } from "react-hook-form";
import { FieldWrapper } from "../field-wrapper";

type EditorFieldProps = {
  label: string;
  name: string;
  containerClassName?: string;
  required?: boolean;
};

export const EditorField = ({
  label,
  name,
  required,
  containerClassName,
  ...props
}: EditorFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required && "Campo obrigatório",
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} className={containerClassName}>
          <Editor {...props} {...field} />

          {fieldState.error && (
            <span className="text-sm text-red-500">
              {fieldState.error.message}
            </span>
          )}
        </FieldWrapper>
      )}
    />
  );
};
