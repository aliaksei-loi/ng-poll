"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Person } from "../types";

type VotesProps = {
  votes: Person[];
};

export const Votes: React.FC<VotesProps> = ({ votes }) => {
  if (!votes || votes.length === 0) {
    return (
      <FadeIn className="p-4 text-center text-muted-foreground">
        Голосов пока нет
      </FadeIn>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {votes.map((person) => (
        <Card key={person.id} className="transition-shadow hover:shadow-md">
          <div className="flex items-center justify-between px-5 py-1">
            <span className="font-semibold text-[15px]">{person.name}</span>
            <span className="text-2xl font-bold text-primary tabular-nums">{person.count}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};
