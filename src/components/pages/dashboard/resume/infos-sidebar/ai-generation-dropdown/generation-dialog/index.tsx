import { BaseDialogProps, Dialog } from "@/components/ui/dialog"

type GenerationDialogProps = BaseDialogProps & {
    mode: AIGenerationMode;
}

export const GenerationDialog = ({ mode, ...props }: GenerationDialogProps) => {
    const configPerMode: Record<AIGenerationMode, JSX.Element> = {
        JOB_TITLE: <p>Gerar descrição para vaga de emprego</p>,
        FIX_CONTENT: <p>Melhorar e corrigir conteúdo existente</p>,
        TRANSLATE_CONTENT: <p>Traduzir conteúdo existente</p>,
    }

    const content = configPerMode[mode];

    return (
        <Dialog
            {...props}
            title="Inteligência Artificial"
            description="O conteúdo gerado sobrescreverá os campos existentes. Cada geração custa 1 crédito."
            content={content}
        >
        </Dialog>
    )
}
