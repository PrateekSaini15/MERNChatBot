import Chatbot from "react-chatbot-kit";
import ActionProvider from "./BotChat/ActionProvider";
import MessageParser from "./BotChat/MessageParser";
import config from "./BotChat/config";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default App;
