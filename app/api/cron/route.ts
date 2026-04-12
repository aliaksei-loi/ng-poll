import { type NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Keep Supabase free-tier project alive with a real write + delete
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error: insertError } = await supabase
    .from("question")
    .insert({ text: "keepalive" })
    .select("id")
    .single();

  if (insertError || !data) {
    return Response.json(
      { error: insertError?.message ?? "insert failed" },
      { status: 500 }
    );
  }

  const { error: deleteError } = await supabase
    .from("question")
    .delete()
    .eq("id", data.id);

  if (deleteError) {
    return Response.json({ error: deleteError.message }, { status: 500 });
  }

  return Response.json({ ok: true, timestamp: new Date().toISOString() });
}
