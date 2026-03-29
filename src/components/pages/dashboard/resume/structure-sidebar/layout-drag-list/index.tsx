import { Draggable } from "@hello-pangea/dnd";
import { GripVertical } from "lucide-react";

type LayoutDragListProps = {
  title: string;
  fields: ResumeLayoutSection[];
};

export const LayoutDragList = ({ title, fields }: LayoutDragListProps) => {
  return (
    <div className="w-full p-2 bg-muted rounded">
      <p className="font-title text-sm font-bold mb-2">{title}</p>

      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <Draggable
            key={field.key}
            draggableId={`draggable-${field.key}`}
            index={index}
          >
            {(provided) => (
              <div
                key={field.id}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="flex items-center gap-1 bg-foreground p-1 rounded"
              >
                <GripVertical className="w-4 h-4 min-w-4 text-background" />

                <p className="text-accent text-xs font-semibold">{field.key}</p>
              </div>
            )}
          </Draggable>
        ))}
      </div>
    </div>
  );
};
