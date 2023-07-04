import React from "react";
import { BubbleChat } from "flowise-embed-react";

const Chatbot = () => {
  return (
    <BubbleChat
      chatflowid="eddfac63-bcc5-4c3b-ab68-e1eaa2f8c5e2"
      apiHost="https://flowise.codefe.top"
    />
  );
};

export default Chatbot;