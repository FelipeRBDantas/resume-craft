import { NextResponse } from "next/server";
import { createResume } from "@/db/actions";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const resume = await createResume(body.title);

    return NextResponse.json(resume);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Erro ao criar currículo",
      },
      {
        status: 500,
      }
    );
  }
}
