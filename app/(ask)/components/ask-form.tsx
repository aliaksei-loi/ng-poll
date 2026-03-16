"use client";

import { CheckCircle2Icon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Textarea } from "@/components/ui/textarea";

import { useAskForm } from "../hooks";

export function AskForm() {
  const { state, formAction, pending } = useAskForm();

  return (
    <FadeIn variant="slow">
      <form className="w-full flex flex-col gap-3" action={formAction}>
        <Textarea
          className="h-50 bg-white/80 dark:bg-white/5 backdrop-blur-sm border-white/40 dark:border-white/10 placeholder:text-muted-foreground/60 focus:bg-white/90 dark:focus:bg-white/10 transition-colors"
          name="question"
          required
          placeholder="Спроси меня о чем угодно..."
        />
        <div className="flex gap-2 justify-between">
          <Button loading={pending} type="submit" className="flex-1">
            Задать вопрос
          </Button>
          <Button variant="secondary" type="reset" className="flex-1 bg-white/60 dark:bg-white/10 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/15">
            Очистить
          </Button>
        </div>

        {state === "error" && (
          <Alert variant="destructive">
            <CheckCircle2Icon />
            <AlertTitle>Ошибка</AlertTitle>
            <AlertDescription>
              Во время запроса произошла ошибка. Попробуйте позже.
            </AlertDescription>
          </Alert>
        )}
        {state === "ok" && (
          <Alert variant="success" data-testid="success-notification">
            <CheckCircle2Icon />
            <AlertTitle>Готово!</AlertTitle>
            <AlertDescription>Ваш вопрос успешно отправлен.</AlertDescription>
          </Alert>
        )}
      </form>
    </FadeIn>
  );
}
