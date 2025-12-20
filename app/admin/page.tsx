import { getMessagesAction, getMeAction, getVotesAction } from "./actions";
import { Messages } from "./components/messages";
import { Votes } from "./components/votes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Admin() {
  await getMeAction();

  const [messages, votes] = await Promise.all([
    getMessagesAction(),
    getVotesAction(),
  ]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Tabs defaultValue="messages">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="messages">Сообщения</TabsTrigger>
          <TabsTrigger value="votes">Голоса</TabsTrigger>
        </TabsList>
        <TabsContent value="messages">
          <Messages messages={messages ?? []} />
        </TabsContent>
        <TabsContent value="votes">
          <Votes votes={votes ?? []} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
