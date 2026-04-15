"use server";

import { createClient } from "@/core/db/supabase/server";
import type { Person } from "@/core/api";

export const voteAction = async (ids: string[]) => {
  const client = await createClient();

  const results = await Promise.all(
    ids.map(async (id) => {
      // Read current count, then increment by exactly 1
      const { data: current } = await client
        .from("vote")
        .select("count")
        .eq("id", id)
        .single()
        .overrideTypes<Pick<Person, "count">>();

      if (!current) return null;

      const { data } = await client
        .from("vote")
        .update({ count: current.count + 1 })
        .eq("id", id)
        .select()
        .overrideTypes<Person[]>();

      return data?.[0] ?? null;
    })
  );

  return results;
};
