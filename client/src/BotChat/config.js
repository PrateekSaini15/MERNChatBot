import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
const config = {
  botName: "Restaurant Bot",
  initialMessages: [
    createChatBotMessage(`Hi, I am here to help you. How can I help you?`, {
      widget: "options",
    }),
  ],

  customStyles: {
    backgroundColor: "#376B7E",
  },
  chatButton: {
    backgroundColor: "#376B7E",
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      props: {
        options: [
          {
            name: "Give a order",
          },
          {
            name: "Tell me about yourself",
          },
        ],
      },
    },
  ],
};

export default config;
