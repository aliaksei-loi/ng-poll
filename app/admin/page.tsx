import { getMessagesAction, getMeAction } from "./actions";
import { Messages } from "./components/messages";

export default async function Admin() {
  await getMeAction();

  const messages = await getMessagesAction();

  return (
    <div className="max-w-4xl mx-auto p-4 pt-6">
      <Messages messages={messages ?? []} />
    </div>
  );
}
