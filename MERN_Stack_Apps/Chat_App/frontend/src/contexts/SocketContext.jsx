import { createContext, useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {
    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {user} = useAuthContext();

    useEffect(()=>{
        if (user) {
            const socket = io('http://localhost:4000',{
                query : {
                    userId : user._doc._id
                }
            });
            setSocket(socket);
            socket.on('getOnlineUser',(users)=>{
                setOnlineUsers(users);
            })
            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    },[])

    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
};