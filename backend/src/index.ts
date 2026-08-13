import { WebSocketServer,WebSocket } from "ws";

declare module "ws"{
    interface WebSocket{
        username: string;
        roomId : string;
    }
}

const wss = new WebSocketServer({port: 8080});

let userCount:number=0;

let rooms = new Map<string,Set<WebSocket>>();


function generateRoomId(){
    return Math.random().toString(36).substring(2,8).toUpperCase();
}

function getUsernames(members: Set<WebSocket>): string[] {
    return Array.from(members).map(socket=>socket.username)
}

wss.on("connection",(socket)=>{

    
    console.log("User Connected #");

    socket.on("message",(msg)=>{
        console.log("Message received from user : "+msg.toString())
        const data = JSON.parse(msg.toString());

        switch (data.type) {

            // ...create_room
            case "create_room":
            {
                const memberSocket = new Set<WebSocket>();
                memberSocket.add(socket);
                const roomId = generateRoomId();
                rooms.set(roomId,memberSocket);
                socket.username = data.username;
                socket.roomId = roomId;
                socket.send(JSON.stringify({
                    type:"room_created",
                    roomId:roomId,
                    message : "You have Succesfully created Room"
                }))
                console.log(`Room is created by ${data.username} and roomID is : ${roomId}` )
                break;
            }
            
            // ...join_room
            case "join_room":
            {
            try{
                const roomid = data.roomId;
                const memberSocket = rooms.get(roomid);
                if(!memberSocket){
                    socket.send(JSON.stringify({
                    type:"error",
                    message:"Room does not exits"
                    }))
                    return;
                }

                memberSocket.add(socket)
                socket.username = data.username;
                socket.roomId = roomid;
                const usernames = getUsernames(memberSocket)
                
                memberSocket.forEach(soc=>{
                    if(soc===socket)return;
                    soc.send(JSON.stringify({
                        
                            type:"user_joined",
                            username:socket.username, 
                            members:usernames,
                            message : `${data.username} joined the room`
                        
                    }))
                })
                
                socket.send(JSON.stringify({
                    
                        type:"joined_room",
                        roomId:data.roomId,
                        members:usernames,
                        message:"You joined the room"
                    
                }))

            }catch(e){
                console.log({
                    error: e
                })
            }
                
            break;
            }

            // ...chat_message
            case "chat_message" : 
            {
                const members = rooms.get(socket.roomId)
                if(!members) {
                    socket.send(JSON.stringify({
                        type: "error",
                        message: "Room does not exists"
                    }))
                    return;
                };
                members.forEach(s=>{
                    s.send(JSON.stringify({
                        type:"chat_message",
                        username: socket.username,
                        text:data.text,
                        timestamp:Date.now()
                    }))
                })
                break;
            }

            default: console.log("Choose the correct option");
        }

        

    })

    socket.on("close",()=>{
        console.log("User DisConnected #");

        const room = socket.roomId;
        const members = rooms.get(room)
        if(!members) return;
        if(members.size!==0){
            const username = socket.username;
            members.delete(socket);
            const usernames = getUsernames(members);
            userCount = userCount-1;
            members.forEach(s=>{
                    s.send(JSON.stringify({
                    type : "user_left",
                    username:username,
                    members: usernames
                }))
            })
            
        }
        if(members.size===0){
            rooms.delete(room)
        } 
    })

})