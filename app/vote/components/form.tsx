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

import { voteForPerson, type Person } from "@/core/api";
import React, { useState } from "react";

type VoteFormProps = {
  persons: Person[];
};

export const VoteForm: React.FC<VoteFormProps> = ({ persons }) => {
  const [loading, setIsLoading] = useState(false);

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
        voteForPerson(leaderId, Number(leaderCount) + 1),
        voteForPerson(girlId, Number(girlCount) + 1),
        voteForPerson(boyId, Number(boyCount) + 1),
      ]);
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
          <FieldLabel htmlFor="leader">Выберите лидера</FieldLabel>
          <Select required name="leader">
            <SelectTrigger
              id="leader"
              className="neonBorderGold border-1 bg-white text-stone-900"
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
        <Field>
          <FieldLabel htmlFor="girl">Выберите служительницу года</FieldLabel>
          <Select required name="girl">
            <SelectTrigger
              id="girl"
              className="neonBorderGold border-1 bg-white text-stone-900"
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
          <FieldLabel htmlFor="boy">Выберите служителя года</FieldLabel>
          <Select required name="boy">
            <SelectTrigger
              id="boy"
              className="neonBorderGold border-1 bg-white text-stone-900"
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

        <Button
          disabled={loading}
          type="submit"
          variant="ghost"
          className="font-[family-name:var(--font-yeseva-one)] text-2xl mt-4"
        >
          Отправить голос
        </Button>
      </FieldGroup>
    </form>
  );
};
