"use client";

import { useState } from "react";

export default function Composer({
  onSend,
  disabled,
}: {
  onSend: (text: string) => void;
  disabled?: boolean;
}) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky bottom-0 border-t bg-background p-4"
    >
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          disabled={disabled}
          className="flex-1 rounded-full border bg-muted px-4 py-3 text-sm focus:outline-none focus:ring-2"
        />
        <button
          type="submit"
          disabled={disabled || !text.trim()}
          className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </form>
  );
}
