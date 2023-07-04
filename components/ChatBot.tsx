import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
    script.onload = () => {
      (window as any).Chatbot.init({
        chatflowid: "eddfac63-bcc5-4c3b-ab68-e1eaa2f8c5e2",
        apiHost: "http://flowise.codefe.top",
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="chatbot-container" />;
};

export default Chatbot;