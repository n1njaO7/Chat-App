import { useState } from "react";
import { useChatSocket } from "./hooks/useChatSocket";
import { GateScreen } from "./components/GateScreen/GateScreen";
import { ChatScreen } from "./components/ChatScreen/ChatScreen";

function App() {
  const [username, setUsername] = useState("");

  const { roomId, members, messages, error, createRoom, joinRoom, sendMessage } = useChatSocket();

  function handleCreateRoom(name: string) {
    setUsername(name);
    createRoom(name);
  }

  function handleJoinRoom(name: string, code: string) {
    setUsername(name);
    joinRoom(name, code);
  }

  return roomId ? (
    <ChatScreen
      roomId={roomId}
      members={members}
      messages={messages}
      username={username}
      onSendMessage={sendMessage}
    />
  ) : (
    <GateScreen
      onCreateRoom={handleCreateRoom}
      onJoinRoom={handleJoinRoom}
      error={error}
    />
  );
}

export default App;