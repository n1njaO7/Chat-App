import { useState } from "react";
import "./GateScreen.css";

type GateScreenProps = {
  onCreateRoom: (username: string) => void;
  onJoinRoom: (username: string, roomId: string) => void;
  error: string | null;
};

export function GateScreen({ onCreateRoom, onJoinRoom, error }: GateScreenProps) {
  const [username, setUsername] = useState("");
  const [roomCode, setRoomCode] = useState("");

  function handleCreate() {
    if (!username.trim()) return;
    onCreateRoom(username.trim());
  }

  function handleJoin() {
    if (!username.trim() || !roomCode.trim()) return;
    onJoinRoom(username.trim(), roomCode.trim().toUpperCase());
  }

  return (
    <div className="gate">
      <div className="gate-card">
        <div className="gate-signal">
          <span className="gate-signal-dot" />
          <span className="gate-signal-label">ChITChAT</span>
        </div>

        <h1 className="gate-title">ChAT</h1>
        <p className="gate-sub">Pick a name, then create or tune into a room.</p>

        <label className="gate-label" htmlFor="username">Your name</label>
        <input
          id="username"
          className="gate-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g. Ashmit"
          maxLength={24}
        />

        <button className="gate-btn gate-btn-primary" onClick={handleCreate}>
          Create a room
        </button>

        <div className="gate-divider">
          <span>or join with a code</span>
        </div>

        <label className="gate-label" htmlFor="roomCode">Room code</label>
        <input
          id="roomCode"
          className="gate-input gate-input-mono"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
          placeholder="XXXXXX"
          maxLength={6}
        />

        <button className="gate-btn gate-btn-secondary" onClick={handleJoin}>
          Join room
        </button>

        {error && <div className="gate-error">{error}</div>}
      </div>
    </div>
  );
}