import { NextResponse } from "next/server";
import { createResume, deleteResume } from "@/db/actions";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await deleteResume(params.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Erro ao deletar currículo",
        error,
      },
      { status: 500 }
    );
  }
}
