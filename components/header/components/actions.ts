"use server";

import { signOut } from "@/core/api";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const signOutAction = async () => {
  const isOk = await signOut();

  if (!isOk) return;

  revalidatePath("/");
  redirect("/");
};
