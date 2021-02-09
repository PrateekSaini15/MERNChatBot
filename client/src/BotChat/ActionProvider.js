// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi");
    this.updateChatbotState(greetingMessage);
  }

  showCategoriesOfType = () => {
    const message = this.createChatBotMessage(
      `Which kind of food you want to eat?`,
      { widget: "options" }
    );
    this.updateChatbotState(message);
  };

  showItemsOfCategory = (CategoryName) => {
    const message = this.createChatBotMessage(
      `What you want to order in ${CategoryName}?`,
      { widget: "items" }
    );
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState((prevState) => {
      if (prevState.messages.length > 1) {
        prevState.messages.pop();
      }
      return {
        ...prevState,
        messages: [...prevState.messages, message],
      };
    });
  }
}

export default ActionProvider;
