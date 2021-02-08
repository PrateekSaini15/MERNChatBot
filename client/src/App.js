import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import Chatbot from "./routes/Chatbot/Chatbot";
import FoodItemTypes from "./components/FoodItemTypes/FoodItemTypes";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chatbot" component={Chatbot} />
        <Route path="/food" component={FoodItemTypes} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
