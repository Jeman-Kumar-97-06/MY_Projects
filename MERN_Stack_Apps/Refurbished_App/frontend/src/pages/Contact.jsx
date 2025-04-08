import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting contact form with", { name, email, message });
  };

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    const newChat = { user: "You", text: chatInput };
    setChatHistory([...chatHistory, newChat, { user: "Bot", text: "Thank you for your message! We will get back to you soon." }]);
    setChatInput("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Chatbot Section */}
      <div className="mt-6 bg-white shadow-lg rounded-lg p-4 max-w-md w-full">
        <h3 className="text-xl font-semibold text-center text-blue-600">Chat with Us</h3>
        <div className="h-40 overflow-y-auto border p-2 mt-2 bg-gray-50 rounded-md">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`text-${msg.user === "You" ? "right" : "left"} my-1`}>
              <span className="inline-block px-3 py-1 rounded-lg shadow bg-blue-100">{msg.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your question..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <button
            onClick={handleChatSend}
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
