import { Button } from "@/components/ui/button";
import { EditorField } from "@/components/ui/editor/field";
import { InputField } from "@/components/ui/input/field";
import { useForm } from "react-hook-form";

type FormData = {
    jobTitle: string;
    jobDescription: string;
}

export const GenerateFromJobTitle = () => {
    const { control, formState, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <InputField name="jobTitle" label="Título da vaga" placeholder="Ex: Desenvolvedor Front-end" required />
            
            <EditorField name="jobDescription" label="Descrição da vaga (Opcional)" className="min-h-[200px] max-h-[300px]" />
        
            <Button type="submit" className="w-max ml-auto">
                Gerar conteúdo
            </Button>
        </form>
    )
}
