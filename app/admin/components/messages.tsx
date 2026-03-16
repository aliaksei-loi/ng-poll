"use client";

import { FadeIn } from "@/components/ui/fade-in";

import { useMessages } from "../hooks";
import { EmptyMessages } from "./empty-messages";
import { Message } from "./message";

import type { Message as MessageType } from "../types";

type MessagesProps = {
  messages: MessageType[];
};

export const Messages: React.FC<MessagesProps> = ({
  messages: initialMessages,
}) => {
  const messages = useMessages(initialMessages);

  if (messages.length === 0) return <EmptyMessages />;

  return (
    <div className="flex flex-col divide-y divide-border/50">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
