import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "../LearningOptions/LearningOptions";
import LinkList from "../components/LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hi, I am here to help you. How can I help you?`, {
      widget: "learningOptions",
    }),
  ],
  state: {
    users: [],
  },
  customStyles: {
    backgroundColor: "#376B7E",
  },
  chatButton: {
    backgroundColor: "#376B7E",
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
    },
  ],
};

export default config;
