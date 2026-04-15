"use server";

import { deleteMessage, getMe } from "@/core/api";

export const deleteMessageAction = async (id: string) => {
  const user = await getMe();
  if (!user) throw new Error("Unauthorized");

  const isOk = await deleteMessage(id);

  return isOk ? "ok" : "error";
};
