import {Server} from "socket.io"
import http from "http"
import express from "express"

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],

    },
});

export function getReceiverSocketId(userId){

    return userSOcketMap[userId];
}

const userSOcketMap = {}

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    const userId = socket.handshake.query.userId;
    if (userId) userSOcketMap[userId] = socket.id;

    io.emit("getOnlineUsers",Object.keys(userSOcketMap));

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        delete userSOcketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSOcketMap));
    });
});
export {io,app,server};