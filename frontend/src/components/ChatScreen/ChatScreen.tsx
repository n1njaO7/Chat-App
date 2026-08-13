import { useState, useRef, useEffect } from "react";
import type { ChatMessage } from "../../types/chat.types";
import "./ChatScreen.css";

type ChatScreenProps = {
  roomId: string;
  members: string[];
  messages: ChatMessage[];
  username: string;
  onSendMessage: (text: string) => void;
};

export function ChatScreen({ roomId, members, messages, username, onSendMessage }: ChatScreenProps) {
  const [draft, setDraft] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    const text = draft.trim();
    if (!text) return;
    onSendMessage(text);
    setDraft("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div className="chat">
      <header className="chat-header">
        <div>
          <div className="chat-room-label">room</div>
          <div className="chat-room-id">{roomId}</div>
        </div>
        <div className="chat-members">
          <span className="chat-members-dot" />
          {members.length} online — {members.join(", ")}
        </div>
      </header>

      <div className="chat-feed">
        {messages.map((msg, i) =>
          msg.type === "system" ? (
            <div key={i} className="chat-system">{msg.text}</div>
          ) : (
            <div key={i} className={`chat-bubble-row ${msg.username === username ? "me" : ""}`}>
              <div className="chat-bubble">
                <div className="chat-bubble-meta">
                  {msg.username === username ? "You" : msg.username}
                  <span className="chat-bubble-time">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
                <div className="chat-bubble-text">{msg.text}</div>
              </div>
            </div>
          )
        )}
        <div ref={bottomRef} />
      </div>

      <div className="chat-composer">
        <input
          className="chat-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message…"
        />
        <button className="chat-send-btn" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}