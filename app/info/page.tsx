import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";

import { MessageCircle } from "lucide-react";

import Link from "next/link";

export default function Page() {
  return (
    <FadeIn className="container mx-auto p-4 pt-8">
      <div className="max-w-md mx-auto">
        <Card className="overflow-hidden">
          <div className="p-8 md:p-10 text-center space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              У меня проблема...
            </h1>

            <FadeIn className="flex flex-col gap-3 justify-center items-center">
              <Link
                href="https://t.me/SideswipeLoi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center"
              >
                <Button size="lg" className="gap-2 w-[240px]">
                  <MessageCircle className="h-4 w-4" />
                  Написать в телеграм
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="lg"
                className="w-[240px] text-muted-foreground"
                asChild
              >
                <Link href="/">На главную</Link>
              </Button>
            </FadeIn>
          </div>
        </Card>
      </div>
    </FadeIn>
  );
}
