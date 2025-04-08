import React, { useState } from "react";
import { Helmet } from "react-helmet"; // 👈 Import Helmet
import "./Chat.css";

export default function Chat() {
  const [chatType, setChatType] = useState("group");
  const [messages, setMessages] = useState([
    { sender: "Jane", text: "Morning! Meeting at 10?" },
    { sender: "Raj", text: "Yup! Room 204." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "You", text: input }]);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-container">
      <Helmet>
        <title>LetsPlanIt | Chat</title>
      </Helmet>

      <h2>💬 Team Chat</h2>

      <div className="chat-type">
        <label>
          <input
            type="radio"
            value="private"
            checked={chatType === "private"}
            onChange={() => setChatType("private")}
          />
          Private Chat
        </label>
        <label>
          <input
            type="radio"
            value="group"
            checked={chatType === "group"}
            onChange={() => setChatType("group")}
          />
          Group Chat
        </label>
      </div>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder={`Send a ${chatType} message...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
