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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
      {votes.map((person) => (
        <Card key={person.id}>
          <div className="flex items-center justify-between px-4 font-extrabold">
            <div>{person.name}</div>
            <div>{person.count}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};
