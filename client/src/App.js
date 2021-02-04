import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import Chatbot from "./routes/Chatbot/Chatbot";
import Options from "./components/Options/Options";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chatbot" component={Chatbot} />
        <Route path="/category" component={Options} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
