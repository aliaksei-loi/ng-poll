import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getPersons } from "@/core/api";
import { VoteForm } from "./components/form";
import { FadeIn } from "@/components/ui/fade-in";
import { FallingStars } from "@/components/ui/falling-stars";

export default async function VotePage() {
  const persons = await getPersons();

  return (
    <div className="relative flex min-h-svh w-full items-center justify-center bg-[url(/vote-bg.jpg)] bg-cover">
      <FallingStars />
      <div className="w-full h-full relative z-10">
        <FadeIn>
          <Card className="bg-black/60 border-none rounded-none h-full min-h-svh text-white">
            <CardHeader>
              <CardTitle className="text-6xl text-center font-[family-name:var(--font-comforter-brush)]">
                Голос Скинии
              </CardTitle>
            </CardHeader>
            <CardContent>
              {persons ? (
                <VoteForm persons={persons} />
              ) : (
                <div>Что-то пошло не так...</div>
              )}
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
