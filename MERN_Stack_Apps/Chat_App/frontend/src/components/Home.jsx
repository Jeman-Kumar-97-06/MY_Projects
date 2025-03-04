import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Home = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext();
    console.log(user._doc)
    return (
        <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-4 flex flex-col">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">Chat App</h2>
        
        <nav className="flex-1 space-y-4">
          <SidebarItem user={user} active={false} />
          <SidebarItem user={user} active={true}/>
          <SidebarItem user={user} active={false}/>
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

/* Sidebar Item Component */
function SidebarItem({ user, active }) {
  return (
    <div className={`p-3 rounded-lg cursor-pointer ${
      active ? "bg-orange-100 text-orange-500 font-bold" : "hover:bg-gray-200"
    }`}>
      <div className="w-24 flex justify-between">
            <img src={user._doc.profilePic} className="w-8"/>
            {user._doc.username}
          </div>
    </div>
  );
}

/* Message Bubble Component */
function Message({ sender, text }) {
  return (
    <div className={`flex ${sender === "me" ? "justify-end" : "justify-start"}`}>
      <div className={`px-4 py-2 rounded-lg max-w-xs ${
        sender === "me" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      }`}>
        {text}
      </div>
    </div>
    );
};

export default Home;