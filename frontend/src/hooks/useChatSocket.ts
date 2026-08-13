import { useState,useRef,useEffect } from "react";
import type { ChatMessage } from "../types/chat.types";



export function useChatSocket() {
  const [roomId, setRoomId] = useState<string | null>(null);
  const [members, setMembers] = useState<string[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const socketRef = useRef<WebSocket | null>(null);

   useEffect(() => {
    // create socket, assign to socketRef.current, set up onopen/onclose/onerror
    // (onmessage comes in stage 2)
    // return cleanup function

    const socket = new WebSocket(import.meta.env.VITE_WS_URL || "ws://localhost:8080");
    socketRef.current = socket;;

    socket.onopen = () =>{
        console.log("Connected To server")
    }

    socket.onmessage=(event)=>{
        const data = JSON.parse(event.data);
    
        switch(data.type)
        {
            case "room_created" :{

                setRoomId(data.roomId);
                break;
            }

            case "joined_room" :{
                
                setRoomId(data.roomId);
                setMembers(data.members);
                break;
            }

            case "user_joined":{

                setMembers(data.members);
                setMessages(prev => [...prev, {
                type: "system",
                text: `${data.username} joined the room`,
                timestamp: Date.now()
                }]);
                break;
            }

            case "user_left" :{

                setMembers(data.members);
                setMessages(prev => [...prev, {
                type: "system",
                text: `${data.username} left the room`,
                timestamp: Date.now()
                }]);

                break;
            }

            case "chat_message" :{

                setMessages(prev => [...prev, { 
                type: "chat",
                username: data.username, 
                text: data.text, 
                timestamp: data.timestamp 
                }]);

                break;
            } 

            case "error" : {
                
                setError(data.message)
                break;
            }

            default:

        }
    }

    socket.onclose=()=>{
        console.log(`Disconnected from the server`)
    }

    socket.onerror=(error)=>{
        console.log(error)
    }



    return()=>{
        socket.close();
    }

  }, []);

  function isSocketReady() {
    if (
        socketRef.current === null ||
        socketRef.current.readyState !== WebSocket.OPEN
    ) {
        setError("server not connected");
        return false;
    }

    return true;
}

    function createRoom(username: string) {
            if(!isSocketReady()) return;
            socketRef.current!.send(JSON.stringify({ type: "create_room", username }));
        }

        function joinRoom(username: string, roomId: string) {
            if(!isSocketReady()) return;
            socketRef.current!.send(JSON.stringify({ type: "join_room", username, roomId }));
        }

        function sendMessage(text: string) {
            if(!isSocketReady()) return;
            socketRef.current!.send(JSON.stringify({ type: "chat_message", text }));
        }

 

  return { roomId, members, messages,  error, createRoom,joinRoom,sendMessage };
}