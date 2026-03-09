import { Dialog } from "@/components/ui/dialog";
import type { MultipleDragItemData, ResumeArrayKeys } from ".";
import { useForm } from "react-hook-form";

type ManageMultipleItemDialogProps = {
  data: MultipleDragItemData;
};

type FormConfig<T> = {
  label: string;
  key: keyof T;
  fieldType?: "text" | "editor" | "icon" | "slider" | "keywords";
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
    {
      label: "Rede",
      key: "name",
      placeholder: "LinkedIn",
      required: true,
    },
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
    {
      label: "Empresa",
      key: "company",
      required: true,
    },
    {
      label: "Posição",
      key: "position",
    },
    {
      label: "Data ou intervalo de datas",
      key: "date",
      placeholder: "Janeiro de 2024 - Presente",
    },
    {
      label: "Localização",
      key: "location",
    },
    {
      label: "Site",
      key: "website",
      type: "url",
      fullWidth: true,
    },
    {
      label: "Descrição",
      key: "summary",
      fieldType: "editor",
      fullWidth: true,
      className: "min-h-[200px]",
    },
  ],
  educations: [
    {
      label: "Instituição",
      key: "institution",
      required: true,
    },
    {
      label: "Curso",
      key: "degree",
    },
    {
      label: "Data ou intervalo de datas",
      key: "date",
      placeholder: "Janeiro de 2024 - Presente",
    },
    {
      label: "Localização",
      key: "location",
    },
    {
      label: "Site",
      key: "website",
      type: "url",
      fullWidth: true,
    },
    {
      label: "Descrição",
      key: "summary",
      fieldType: "editor",
      fullWidth: true,
      className: "min-h-[200px]",
    },
  ],
  skills: [
    {
      label: "Nome",
      key: "name",
      required: true,
    },
    {
      label: "Descrição",
      key: "description",
    },
    {
      label: "Nível",
      key: "level",
      fieldType: "slider",
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
  languages: [
    {
      label: "Nome",
      key: "name",
      required: true,
    },
    {
      label: "Descrição",
      key: "description",
    },
    {
      label: "Nível",
      key: "level",
      fieldType: "slider",
      fullWidth: true,
    },
  ],
  certifications: [
    {
      label: "Nome",
      key: "name",
      required: true,
    },
    {
      label: "Instituição",
      key: "institution",
    },
    {
      label: "Data",
      key: "date",
      placeholder: "Janeiro de 2024",
    },
    {
      label: "Site",
      key: "website",
      type: "url",
    },
    {
      label: "Descrição",
      key: "summary",
      fieldType: "editor",
      className: "min-h-[200px]",
      fullWidth: true,
    },
  ],
  projects: [
    {
      label: "Nome",
      key: "name",
      required: true,
    },
    {
      label: "Descrição",
      key: "description",
    },
    {
      label: "Data ou intervalo de datas",
      key: "date",
      placeholder: "Janeiro de 2024 - Presente",
    },
    {
      label: "Site",
      key: "website",
      type: "url",
    },
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

export const ManageMultipleItemDialog = ({
  data,
  open,
  setOpen,
}: ManageMultipleItemDialogProps) => {
  const methods = useForm();

  return (
    <Dialog
      title="Adicionar novo item"
      open={open}
      setOpen={setOpen}
      content={<form></form>}
    ></Dialog>
  );
};
