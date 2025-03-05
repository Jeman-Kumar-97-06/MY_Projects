import { useAuthContext } from "../hooks/useAuthContext";
import { useGetConvos } from "../hooks/useGetConvos";
import { useLogout } from "../hooks/useLogout";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Message from "./Message";
import SidebarItem from "./SidebarItem";

const Home = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext();
    const {convs,err,loading} = useGetConvos();
    console.log(convs);
    return (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="w-64 bg-white shadow-lg p-4 flex flex-col">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">Chat App</h2>        
            <nav className="flex-1 space-y-4">
              {/* Search bar to search for users */}
              <SearchBar/>
              {
              convs.length==0 ? 
              <>
               {/* { convs.map((c)=>(<SidebarItem user={user} active={false} />))} */}
               <SidebarItem user={user} active={true}/>
               <SidebarItem user={user} active={false}/>
              </> : 
              <>
                <p className="text-orange-500 mt-3">No conversations yet!</p>
              </>
              }
            </nav>
            <button className="mt-auto bg-red-500 text-white py-2 rounded-lg hover:bg-red-600" onClick={logout}>
              Logout
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="bg-orange-500 text-white p-4 text-lg font-semibold">
              <div className="w-24 flex justify-between">
                <img src={user._doc.profilePic} className="w-8"/>
                  {user._doc.username}
              </div>
            </div>
          {/* Messages */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-blue-100">
            <Message sender="other" text="Hello, how are you?" />
            <Message sender="me" text="I'm good! How about you?" />
          </div>
          {/* Chat Input */}
          <div className="p-4 bg-white flex items-center gap-2 shadow-lg">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Send
            </button>
          </div>
        </div>
        </div>
  );
}

export default Home;