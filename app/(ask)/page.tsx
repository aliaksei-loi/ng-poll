import { ShieldCheck } from "lucide-react";

import { FadeIn } from "@/components/ui/fade-in";
import { WavyBackground } from "@/components/ui/wavy-background";

import { AskForm } from "./components/ask-form";

export default function AskPage() {
  return (
    <WavyBackground className="w-full" waveOpacity={0.4} blur={25}>
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center">
        <FadeIn
          variant="scale"
          className="flex justify-center gap-2 p-2 text-3xl font-bold tracking-tight md:text-4xl text-foreground drop-shadow-sm"
        >
          <span>Спроси меня</span>
          <span className="text-[#6366f1]">о Семье</span>
        </FadeIn>

        <FadeIn
          variant="scale"
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 px-3 py-1 text-xs font-medium text-[#6366f1] backdrop-blur-sm"
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          все вопросы остаются анонимными
        </FadeIn>

        <FadeIn
          variant="scale"
          className="mt-5 max-w-md text-center text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          задай любой вопрос или напиши тему,
          <br className="hidden sm:block" /> которая тебя интересует в сфере
          семьи{" "}
          <span className="inline-block animate-pulse">🙌🏼</span>
        </FadeIn>

        <div className="mt-8 w-full">
          <AskForm />
        </div>
      </div>
    </WavyBackground>
  );
}
