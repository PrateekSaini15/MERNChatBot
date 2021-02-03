import Chatbot from "react-chatbot-kit";
import ActionProvider from "../../BotChat/ActionProvider";
import MessageParser from "../../BotChat/MessageParser";
import config from "../../BotChat/config";

import React, { Component } from "react";

class ChatbotComponent extends Component {
  render() {
    return (
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    );
  }
}

export default ChatbotComponent;
