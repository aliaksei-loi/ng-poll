import { Spinner } from "@/components/ui/spinner";

export default function VoteLoading() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-[url(/vote-bg.jpg)] bg-cover">
      <Spinner className="text-red-800" size="xl" />
    </div>
  );
}
