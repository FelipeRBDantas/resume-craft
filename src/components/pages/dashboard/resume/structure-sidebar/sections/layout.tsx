import { Columns3 } from "lucide-react";
import { SectionTitle } from "../../infos-sidebar/section-title";
import { useFieldArray, useFormContext } from "react-hook-form";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";

export const LayoutSection = () => {
  const { control } = useFormContext();

  const {
    fields: mainFields,
    move: moveMainField,
    insert: insertMainField,
    remove: removeMainField,
  } = useFieldArray({
    control,
    name: "structure.layout.mainSections",
  });

  const {
    fields: mainSections,
    move: moveSidebarField,
    insert: insertSidebarField,
    remove: removeSidebarField,
  } = useFieldArray({
    control,
    name: "structure.layout.sidebarSections",
  });

  const onDragEnd = ({ source, destination }: DropResult) => {
    console.log(source, destination);
  };

  return (
    <div>
      <SectionTitle title="Estrutura" icon={Columns3} />

      <DragDropContext onDragEnd={onDragEnd}>
        <div></div>
      </DragDropContext>
    </div>
  );
};
