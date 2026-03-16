import { redirect } from "next/navigation";
import { GalleryVerticalEnd } from "lucide-react";

import { getMe } from "@/core/api";

import { LoginForm } from "./components/login-form";

export default async function LoginPage() {
  const user = await getMe();

  if (user) redirect("/admin");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
          <GalleryVerticalEnd className="size-5 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-semibold tracking-tight">Вход в систему</h1>
      </div>
      <LoginForm />
    </div>
  );
}
