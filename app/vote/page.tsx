import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { VoteForm } from "./components/form";
import { FadeIn } from "@/components/ui/fade-in";
import { FallingStars } from "@/components/ui/falling-stars";

export default async function VotePage() {
  // const persons = await getPersons();

  // redirect

  return (
    <div className="relative flex min-h-svh w-full items-center justify-center bg-[url(/vote-bg.jpg)] bg-cover bg-center">
      <FallingStars />
      <div className="w-full h-full relative z-10">
        <FadeIn>
          <Card className="bg-black/70 backdrop-blur-sm border-none rounded-none h-full min-h-svh text-white">
            <CardHeader className="pt-12 pb-4">
              <CardTitle className="text-5xl md:text-6xl text-center font-[family-name:var(--font-comforter-brush)] tracking-wide">
                Голос Скинии
              </CardTitle>
              <p className="text-center text-white/50 text-sm mt-2">Выберите лучших</p>
            </CardHeader>
            <CardContent className="max-w-lg mx-auto">
              <VoteForm persons={[]} />
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
