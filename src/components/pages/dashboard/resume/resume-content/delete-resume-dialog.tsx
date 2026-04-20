import { Button } from "@/components/ui/button";
import { Dialog, type BaseDialogProps } from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

export const DeleteResumeDialog = (props: BaseDialogProps) => {
  const [open, setOpen] = useState(false);

  const onDelete = async () => {
    try {
    } catch (error) {
      console.error(error);

      toast.error("Erro ao deletar currículo, tente novamente mais tarde.");
    }
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
          <Button onClick={() => setOpen(false)}>Cancelar</Button>

          <Button variant="destructive" onClick={onDelete}>
            Deletar
          </Button>
        </div>
      }
    />
  );
};
