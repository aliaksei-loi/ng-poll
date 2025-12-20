import type { Person } from "@/core/api";
import { createClient } from "@/core/db/supabase/client";
import { useLayoutEffect, useState } from "react";

export const updatePersonCount = async (id: string, count: number) => {
  const { data } = await createClient()
    .from("vote")
    .update({ count })
    .eq("id", id)
    .select()
    .overrideTypes<Person[]>();

  return data;
};

export const useDone = () => {
  const [isDone, setIsDone] = useState(false);

  useLayoutEffect(() => {
    setIsDone(localStorage.getItem("done") === "true");
  }, []);

  const setDone = () => {
    localStorage.setItem("done", "true");
    setIsDone(true);
  };

  return [isDone, setDone] as const;
};
