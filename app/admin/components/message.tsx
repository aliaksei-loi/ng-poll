import { useState } from "react";

import { Trash2 } from "lucide-react";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { deleteMessageAction } from "./actions";
import type { Message as MessageType } from "@/core/api";

export function Message({ message }: { message: MessageType }) {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onDelete = async () => {
    setIsDeleteLoading(true);

    try {
      const result = await deleteMessageAction(message.id.toString());

      if (result !== "error") return;

      setIsError(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  return (
    <div className="group flex items-start gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-muted/50">
      <div className="flex-1 min-w-0">
        <p className="text-[15px] leading-relaxed">{message.text}</p>
        <span className="text-xs text-muted-foreground mt-1 block">
          {new Date(message.created_at).toLocaleString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <Button
        loading={isDeleteLoading}
        disabled={isDeleteLoading}
        onClick={onDelete}
        variant="ghost"
        size="icon"
        className="size-8 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive hover:bg-destructive/10 transition-all"
      >
        <Trash2 className="size-4" />
        <span className="sr-only">Удалить</span>
      </Button>
      {isError && (
        <Alert variant="destructive" className="mt-2">Ошибка при удалении</Alert>
      )}
    </div>
  );
}
