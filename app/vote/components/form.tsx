"use client";

import { Button } from "@/components/ui/button";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { type Person } from "@/core/api";

import { updatePersonCount, useDone } from "./utils";
import React, { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";

type VoteFormProps = {
  persons: Person[];
};

export const VoteForm: React.FC<VoteFormProps> = ({ persons }) => {
  const [loading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useDone();

  if (isDone) {
    return (
      <FadeIn className="text-center mt-10 space-y-4">
        <p className="text-5xl md:text-6xl font-[family-name:var(--font-comforter-brush)]">
          Спасибо большое за участие в голосовании!
        </p>
        <p className="text-white/40 text-sm">Ваш голос учтён</p>
      </FadeIn>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    const leader = formData.get("leader") as string;
    const girl = formData.get("girl") as string;
    const boy = formData.get("boy") as string;

    const [leaderId, leaderCount] = leader?.split("-");
    const [girlId, girlCount] = girl?.split("-");
    const [boyId, boyCount] = boy?.split("-");

    try {
      await Promise.all([
        updatePersonCount(leaderId, Number(leaderCount) + 1),
        updatePersonCount(girlId, Number(girlCount) + 1),
        updatePersonCount(boyId, Number(boyCount) + 1),
      ]);

      setIsDone();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="font-[family-name:var(--font-yeseva-one)]"
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="boy">Выберите служителя года</FieldLabel>
          <Select required name="boy">
            <SelectTrigger
              id="boy"
              className="neonBorderGold border bg-white/95 text-stone-900 backdrop-blur-sm"
            >
              <SelectValue placeholder="Служитель года" />
            </SelectTrigger>
            <SelectContent className="border-none">
              {persons
                .filter((person) => person.role === "boy")
                .map((person) => (
                  <SelectItem
                    key={person.id}
                    value={person.id + "-" + person.count}
                  >
                    {person.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="girl">Выберите служительницу года</FieldLabel>
          <Select required name="girl">
            <SelectTrigger
              id="girl"
              className="neonBorderGold border bg-white/95 text-stone-900 backdrop-blur-sm"
            >
              <SelectValue placeholder="Служительница года" />
            </SelectTrigger>
            <SelectContent className="border-none">
              {persons
                .filter((person) => person.role === "girl")
                .map((person) => (
                  <SelectItem
                    key={person.id}
                    value={person.id + "-" + person.count}
                  >
                    {person.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="leader">Выберите лидера</FieldLabel>
          <Select required name="leader">
            <SelectTrigger
              id="leader"
              className="neonBorderGold border bg-white/95 text-stone-900 backdrop-blur-sm"
            >
              <SelectValue placeholder="Лидер года" />
            </SelectTrigger>
            <SelectContent className="border-none">
              {persons
                .filter((person) => person.role === "leader")
                .map((person) => (
                  <SelectItem
                    key={person.id}
                    value={person.id + "-" + person.count}
                  >
                    {person.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </Field>

        <Button
          disabled={loading}
          loading={loading}
          type="submit"
          className="font-[family-name:var(--font-yeseva-one)] text-xl mt-6 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black border-none shadow-lg shadow-amber-500/20 transition-all"
        >
          Отправить голос
        </Button>
      </FieldGroup>
    </form>
  );
};
