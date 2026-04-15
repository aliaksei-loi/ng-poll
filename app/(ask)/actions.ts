"use server";

import { createMessage } from "@/core/api";
import { z } from "zod";

const questionSchema = z.string().min(1).max(500);

export async function askAction(_: "ok" | "error" | null, formData: FormData) {
  const raw = formData.get("question")?.toString() ?? "";
  const parsed = questionSchema.safeParse(raw);

  if (!parsed.success) return "error";

  const isOk = await createMessage(parsed.data);

  if (!isOk) return "error";

  return "ok";
}
