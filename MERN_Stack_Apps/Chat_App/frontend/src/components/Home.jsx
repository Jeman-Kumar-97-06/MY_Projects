import { useAuthContext } from "../hooks/useAuthContext";
import Message from "./Message";
import { Sidebar } from "./Sidebar";

const Home = () => {
    const {user} = useAuthContext();
    return (
        <div className="flex h-screen bg-gray-100">
          <Sidebar/>
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