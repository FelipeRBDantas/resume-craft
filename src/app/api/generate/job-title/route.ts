import { z } from "zod";

const schema = z.object({
    jobTitle: z.string(),
    jobDescription: z.string().optional(),
});

export const POST = async (request: Request) => {
    try {
        const body = await request.json();

        const { jobTitle, jobDescription } = schema.parse(body);

    } catch (error) {
        return Response.json({ message: "Ocorreu um erro inesperado.", error }, { status: 500 });
    }
}
