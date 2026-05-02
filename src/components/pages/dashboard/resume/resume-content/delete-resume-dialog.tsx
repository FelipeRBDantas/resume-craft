"use client";

import { Button } from "@/components/ui/button";
import { Dialog, type BaseDialogProps } from "@/components/ui/dialog";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useDeleteResume } from "@/hooks/use-delete-resume";

export const DeleteResumeDialog = (props: BaseDialogProps) => {
  const [open, setOpen] = useState(false);

  const params = useParams();

  const resumeId = params.id as string;

  const { handleDeleteResume, isPending } = useDeleteResume();

  const onDelete = () => {
    handleDeleteResume(resumeId, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Dialog
      {...props}
      open={open}
      setOpen={setOpen}
      title="Deletar Currículo"
      description="Você tem certeza que deseja deletar este currículo?"
      content={
        <div className="flex gap-2 ml-auto">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancelar
          </Button>

          <Button variant="destructive" onClick={onDelete} disabled={isPending}>
            Deletar
          </Button>
        </div>
      }
    />
  );
};
