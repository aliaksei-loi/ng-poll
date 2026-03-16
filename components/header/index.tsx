"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";

import type { PropsWithChildren } from "react";

export function Header({ children }: PropsWithChildren) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  if (pathname === "/vote") return null;

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-sm tracking-tight">
                NG
              </span>
            </div>
            <span className="font-semibold text-lg text-foreground tracking-tight">POLL</span>
          </Link>

          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              className="size-8 rounded-lg"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
              <span className="sr-only">Переключить тему</span>
            </Button>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}
