import { BaseDialogProps, Dialog } from "@/components/ui/dialog"

type GenerationDialogProps = BaseDialogProps & {}

export const GenerationDialog = ({ ...props }: GenerationDialogProps) => {
    return (
        <Dialog
            {...props}
            title="Inteligência Artificial"
            description="O conteúdo gerado sobrescreverá os campos existentes. Cada geração custa 1 crédito."
            content={null}
        >
        </Dialog>
    )
}
