export default function Header({
  status,
}: {
  status: "connected" | "offline";
}) {
  return (
    <header className="flex items-center justify-between border-b px-4 py-3">
      <h1 className="text-lg font-semibold">Gemini Agents</h1>
      <div
        className={`rounded-full px-3 py-1 text-xs ${
          status === "connected"
            ? "bg-green-600/20 text-green-400"
            : "bg-red-600/20 text-red-400"
        }`}
      >
        {status === "connected" ? "Connected" : "Offline"}
      </div>
    </header>
  );
}
