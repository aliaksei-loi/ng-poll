import Link from "next/link";

import { LogOut, LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";

import { signOutAction } from "./actions";
import { getMe } from "@/core/api";

export async function HeaderLoginAction() {
  const user = await getMe();

  return user ? (
    <form action={signOutAction}>
      <Button
        type="submit"
        size="icon"
        variant="ghost"
        className="size-8 rounded-lg text-muted-foreground hover:text-destructive"
      >
        <LogOut className="size-4" />
        <span className="sr-only">Выйти</span>
      </Button>
    </form>
  ) : (
    <Link href="/auth">
      <Button
        size="icon"
        variant="ghost"
        className="size-8 rounded-lg"
      >
        <LogIn className="size-4" />
        <span className="sr-only">Войти</span>
      </Button>
    </Link>
  );
}
