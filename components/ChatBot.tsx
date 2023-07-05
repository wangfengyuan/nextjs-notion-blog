import React from "react";
import { BubbleChat } from "flowise-embed-react";

const Chatbot = () => {
  return (
    <BubbleChat
      chatflowid="cc999e86-159c-4c96-855b-55b5108cf761"
      apiHost="https://flowise.codefe.top"
    />
  );
};

export default Chatbot;