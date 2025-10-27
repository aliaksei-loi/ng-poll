"use client";

import Link from "next/link";
import { Settings, HelpCircle, Moon, Sun, Menu, List } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { usePathname } from "next/navigation";

import type { PropsWithChildren } from "react";

export function Header({ children }: PropsWithChildren) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                NG
              </span>
            </div>
            <span className="font-bold text-xl text-foreground">POLL</span>
          </Link>

          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost" data-testid="menu-button">
                  <Menu className="size-5" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href={pathname === "/" ? "/admin" : "/"}>
                    <List className="mr-2 size-4" />
                    {pathname === "/" ? "Вопросы" : "Главная"}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 size-4" />
                    Настройки
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Тема</DropdownMenuLabel>
                <DropdownMenuItem
                  disabled={theme === "light"}
                  onClick={() => setTheme("light")}
                >
                  <Sun className="mr-2 size-4" />
                  Светлая
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={theme === "dark"}
                  onClick={() => setTheme("dark")}
                >
                  <Moon className="mr-2 size-4" />
                  Тёмная
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/info" className="cursor-pointer">
                    <HelpCircle className="mr-2 size-4" />
                    Помощь и поддержка
                  </Link>
                </DropdownMenuItem>
                {children}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
