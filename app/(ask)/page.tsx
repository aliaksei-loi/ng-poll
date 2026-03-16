import { FadeIn } from "@/components/ui/fade-in";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { WavyBackground } from "@/components/ui/wavy-background";

import { AskForm } from "./components/ask-form";

export default function AskPage() {
  return (
    <WavyBackground className="w-full" waveOpacity={0.4} blur={25}>
      <div className="max-w-2xl mx-auto px-4">
        <FadeIn variant="scale" className="flex justify-center gap-2 p-2">
          <LayoutTextFlip
            text="Спроси меня "
            words={[
              { text: "о Боге", className: "text-[#818cf8]" },
              { text: "об Иисусе", className: "text-[#6366f1]" },
              { text: "о Жизни", className: "text-[#a78bfa]" },
              { text: "о Мире", className: "text-[#8b5cf6]" },
            ]}
          />
        </FadeIn>
        <div className="mt-8">
          <AskForm />
        </div>
      </div>
    </WavyBackground>
  );
}
