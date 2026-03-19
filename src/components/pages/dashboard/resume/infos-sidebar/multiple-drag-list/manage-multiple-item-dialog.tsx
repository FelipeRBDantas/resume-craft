import { Dialog } from "@/components/ui/dialog";
import type { MultipleDragItemData, ResumeArrayKeys } from ".";
import {
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { Fragment, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InputField } from "@/components/ui/input/field";
import { EditorField } from "@/components/ui/editor/field";
import { IconField } from "@/components/ui/icon-input/field";
import { SliderField } from "@/components/ui/slider/field";
import { Badge } from "@/components/ui/badge";
import { v4 as uuid } from "uuid";
import { toast } from "sonner";

type ManageMultipleItemDialogProps = {
  data: MultipleDragItemData;
  open: boolean;
  setOpen: (open: boolean) => void;
  initialData: any;
};

type FieldType = "text" | "editor" | "icon" | "slider" | "keywords";

type FormConfig<T> = {
  label: string;
  key: keyof T;
  fieldType?: FieldType;
  type?: string;
  placeholder?: string;
  fullWidth?: boolean;
  required?: boolean;
  className?: string;
};

type FormConfigObject = {
  [K in ResumeArrayKeys]: FormConfig<ResumeData["content"][K][number]>[];
};

const formConfig: FormConfigObject = {
  socialMedias: [
    { label: "Rede", key: "name", placeholder: "LinkedIn", required: true },
    {
      label: "Usuário",
      key: "username",
      placeholder: "seu-usuario",
      required: true,
    },
    {
      label: "Site",
      key: "url",
      placeholder: "https://linkedin.com/in/seu-usuario",
      type: "url",
      fullWidth: true,
    },
    {
      label: "Ícone",
      key: "icon",
      placeholder: "linkedin",
      fieldType: "icon",
      fullWidth: true,
    },
  ],

  experiences: [
    { label: "Empresa", key: "company", required: true },
    { label: "Posição", key: "position" },
    {
      label: "Data ou intervalo de datas",
      key: "date",
      placeholder: "Janeiro de 2024 - Presente",
    },
    { label: "Localização", key: "location" },
    { label: "Site", key: "website", type: "url", fullWidth: true },
    {
      label: "Descrição",
      key: "summary",
      fieldType: "editor",
      fullWidth: true,
      className: "min-h-[200px]",
    },
  ],

  educations: [
    { label: "Instituição", key: "institution", required: true },
    { label: "Curso", key: "degree" },
    {
      label: "Data ou intervalo de datas",
      key: "date",
      placeholder: "Janeiro de 2024 - Presente",
    },
    { label: "Localização", key: "location" },
    { label: "Site", key: "website", type: "url", fullWidth: true },
    {
      label: "Descrição",
      key: "summary",
      fieldType: "editor",
      fullWidth: true,
      className: "min-h-[200px]",
    },
  ],

  skills: [
    { label: "Nome", key: "name", required: true },
    { label: "Descrição", key: "description" },
    { label: "Nível", key: "level", fieldType: "slider", fullWidth: true },
    {
      label: "Palavras-chave",
      key: "keywords",
      placeholder: "Adicione palavras-chave separadas por vírgula",
      fieldType: "keywords",
      fullWidth: true,
    },
  ],

  languages: [
    { label: "Nome", key: "name", required: true },
    { label: "Descrição", key: "description" },
    { label: "Nível", key: "level", fieldType: "slider", fullWidth: true },
  ],

  certifications: [
    { label: "Nome", key: "name", required: true },
    { label: "Instituição", key: "institution" },
    { label: "Data", key: "date", placeholder: "Janeiro de 2024" },
    { label: "Site", key: "website", type: "url" },
    {
      label: "Descrição",
      key: "summary",
      fieldType: "editor",
      className: "min-h-[200px]",
      fullWidth: true,
    },
  ],

  projects: [
    { label: "Nome", key: "name", required: true },
    { label: "Descrição", key: "description" },
    {
      label: "Data ou intervalo de datas",
      key: "date",
      placeholder: "Janeiro de 2024 - Presente",
    },
    { label: "Site", key: "website", type: "url" },
    {
      label: "Resumo",
      key: "summary",
      fieldType: "editor",
      className: "min-h-[200px]",
      fullWidth: true,
    },
    {
      label: "Palavras-chave",
      key: "keywords",
      placeholder: "Adicione palavras-chave separadas por vírgula",
      fieldType: "keywords",
      fullWidth: true,
    },
  ],
};

const FIELD_COMPONENTS: Record<FieldType, React.ComponentType<any>> = {
  text: InputField,
  editor: EditorField,
  icon: IconField,
  slider: SliderField,
  keywords: InputField,
};

const getDefaultValueByFieldType = (type?: FieldType) => {
  switch (type) {
    case "slider":
      return 1;
    default:
      return "";
  }
};

const getDefaultValues = (formKey: ResumeArrayKeys) => {
  const config = formConfig[formKey];

  return config.reduce<Record<string, unknown>>((acc, field) => {
    acc[field.key as string] = getDefaultValueByFieldType(field.fieldType);

    return acc;
  }, {});
};

export const ManageMultipleItemDialog = ({
  data,
  open,
  setOpen,
  initialData,
}: ManageMultipleItemDialogProps) => {
  const methods = useForm({
    defaultValues: getDefaultValues(data.formKey),
  });

  const parentForm = useFormContext();

  const { reset } = methods;

  const isEditing = useMemo(() => !!initialData, [initialData]);

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const values = useWatch({
    control: methods.control,
  });

  const isAllFieldsEmpty = useMemo(() => {
    return Object.values(values ?? {}).every((value) => {
      if (value == null) return true;

      if (typeof value === "string") {
        return value.trim() === "";
      }

      if (Array.isArray(value)) {
        return value.length === 0;
      }

      if (typeof value === "number") {
        return value === 0;
      }

      return false;
    });
  }, [values]);

  const formContent = useMemo(() => {
    const config = formConfig[data.formKey];

    return config.map((field, index) => {
      const fieldType = (field.fieldType ??
        "text") as keyof typeof FIELD_COMPONENTS;

      const Component = FIELD_COMPONENTS[fieldType];

      const isKeywords = fieldType === "keywords";

      const inputProps = {
        name: field.key,
        label: field.label,
        containerClassName: cn(field.fullWidth && "col-span-full"),
        required: field.required,
        placeholder: field.placeholder,
        type: field.type,
        className: field.className,
        ...(isKeywords && {
          extraContent: (value: string) => (
            <div className="flex flex-wrap gap-2 mt-1">
              {value?.split(",")?.map((keyword, index) => {
                if (!keyword.trim()) return null;

                return <Badge key={`keyword-${index}`}>{keyword}</Badge>;
              })}
            </div>
          ),
        }),
      };

      return (
        <Fragment key={index}>
          <Component {...inputProps} />
        </Fragment>
      );
    });
  }, [data.formKey]);

  const onSubmit = (formData: any) => {
    const currentValue = parentForm.getValues();

    const formKey = data.formKey;

    const currentFieldValue = currentValue.content?.[formKey] ?? [];

    if (isEditing) {
      const updatedItems = currentFieldValue.map((item: any) =>
        item.id === initialData?.id ? { ...formData, id: item.id } : item,
      );

      parentForm.setValue(`content.${formKey}`, updatedItems);

      toast.success("Item atualizado com sucesso!");
    } else {
      parentForm.setValue(`content.${formKey}`, [
        ...currentFieldValue,
        { ...formData, id: uuid() },
      ]);

      toast.success("Item adicionado com sucesso!");
    }

    setOpen(false);
  };

  return (
    <Dialog
      title="Adicionar novo item"
      open={open}
      setOpen={setOpen}
      content={
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col mt-2"
        >
          <FormProvider {...methods}>
            <div className="grid grid-cols-2 gap-4 mb-4">{formContent}</div>
          </FormProvider>

          <div className="ml-auto flex gap-3">
            <Button type="submit" className="w-max" disabled={isAllFieldsEmpty}>
              Adicionar
            </Button>
          </div>
        </form>
      }
    />
  );
};
