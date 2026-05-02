"use client";

import { Button } from "@/components/ui/button";
import { Dialog, type BaseDialogProps } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDuplicateResume } from "@/hooks/use-duplicate-resume";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  title: string;
};

export const DuplicateResumeDialog = (props: BaseDialogProps) => {
  const [open, setOpen] = useState(false);

  const methods = useForm<FormData>();

  const params = useParams();

  const router = useRouter();

  const resumeId = params.id as string;

  const { handleDuplicateResume, isPending } = useDuplicateResume();

  const onSubmit = (data: FormData) => {
    handleDuplicateResume({
      id: resumeId,
      title: data.title,
    });
  };

  return (
    <Dialog
      {...props}
      open={open}
      setOpen={setOpen}
      title="Duplicar Currículo"
      description="Será criado um novo currículo com o mesmo conteúdo do atual. Insira o novo título para o currículo."
      content={
        <form
          className="flex flex-col"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Controller
            control={methods.control}
            name="title"
            rules={{ required: "Campo obrigatório" }}
            render={({ field }) => (
              <Input placeholder="Novo título" {...field} />
            )}
          />

          <div className="flex mt-4 ml-auto gap-4">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancelar
            </Button>

            <Button type="submit" disabled={isPending}>
              Duplicar
            </Button>
          </div>
        </form>
      }
    />
  );
};
