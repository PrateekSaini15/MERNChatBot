import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import FoodItems from "../components/FoodItems/FoodItems";
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

  state: {
    currentCategory: "",
  },

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "items",
      widgetFunc: (props) => <FoodItems {...props} />,
      mapStateToProps: ["currentCategory"],
    },
  ],
};

export default config;
