"use client";

import { Dialog, type BaseDialogProps } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

type FormData = {
  title: string;
};

export const NewResumeDialog = (props: BaseDialogProps) => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar, escolha um título para seu currículo"
      content={
        <form onSubmit={handleSubmit(onSubmit)}>
          <button type="submit">Confirmar</button>
        </form>
      }
    />
  );
};
