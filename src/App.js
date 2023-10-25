import React, { useState, useEffect } from "react";
import { connect, sendMessage } from "./api";

import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((message) => {
      console.log("New Message");
      const prevChatHistory = [...chatHistory];
      setChatHistory([...prevChatHistory, message]);
      console.log("history", chatHistory);
    });
  }, [chatHistory]);

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMessage(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
};

export default App;
