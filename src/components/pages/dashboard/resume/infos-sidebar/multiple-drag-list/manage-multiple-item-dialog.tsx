import { Dialog } from "@/components/ui/dialog";
import type { MultipleDragItemData } from ".";

type ManageMultipleItemDialogProps = {
  data: MultipleDragItemData;
};

export const ManageMultipleItemDialog = ({
  data,
  open,
  setOpen,
}: ManageMultipleItemDialogProps) => {
  return (
    <Dialog
      title="Adicionar novo item"
      open={open}
      setOpen={setOpen}
      content={<form></form>}
    ></Dialog>
  );
};
