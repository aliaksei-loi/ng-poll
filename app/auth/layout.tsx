export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100svh-3.5rem)] items-center justify-center p-4">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
