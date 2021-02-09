import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import Chatbot from "./routes/Chatbot/Chatbot";
import FoodItemTypes from "./components/FoodItemTypes/FoodItemTypes";
import Options from "./components/Options/Options";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chatbot" component={Chatbot} />
        <Route path="/food" component={FoodItemTypes} />
        <Route path="/food1" component={Options} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
