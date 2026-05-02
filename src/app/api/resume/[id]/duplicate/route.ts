import { NextResponse } from "next/server";
import { duplicateResume } from "@/db/actions";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { title } = await req.json();

    const newResume = await duplicateResume(params.id, title);

    return NextResponse.json(newResume);
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao duplicar currículo", error },
      { status: 500 }
    );
  }
}
