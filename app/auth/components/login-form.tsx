"use client";

import { useEffect } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useResettableActionState } from "@/core/hooks/use-resettable-action-state";
import { withDelay } from "@/core/utils";

import { sendPassword } from "../actions";

export const LoginForm = () => {
  const [state, formAction, isPending, reset] = useResettableActionState(
    sendPassword,
    null
  );

  useEffect(() => {
    if (state !== "error") return;

    withDelay(5000, reset);
  }, [state, reset]);

  return (
    <form className="flex flex-col gap-6" action={formAction}>
      <div className="grid gap-3">
        <Label htmlFor="password">Пароль</Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="----------"
          required
        />
      </div>
      <Button type="submit" loading={isPending} disabled={isPending}>
        Войти
      </Button>
      {state === "error" && (
        <Alert variant="destructive">
          <AlertTitle>Ошибка</AlertTitle>
          <AlertDescription>Неверный пароль</AlertDescription>
        </Alert>
      )}
    </form>
  );
};
