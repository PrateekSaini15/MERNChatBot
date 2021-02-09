import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import FoodItems from "../components/FoodItems/FoodItems";

import FoodItemTypes from "../components/FoodItemTypes/FoodItemTypes";

const config = {
  botName: "Restaurant Bot",
  initialMessages: [
    createChatBotMessage(`Hi, I am here to help you. How can I help you?`, {
      widget: "types",
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
    currentType: "",
  },

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      mapStateToProps: ["currentType"],
    },
    {
      widgetName: "items",
      widgetFunc: (props) => <FoodItems {...props} />,
      mapStateToProps: ["currentCategory", "currentType"],
    },
    {
      widgetName: "types",
      widgetFunc: (props) => <FoodItemTypes {...props} />,
      mapStateToProps: ["currentType"],
    },
  ],
};

export default config;
