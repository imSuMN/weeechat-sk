import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App sm:flex sm:flex-col">
      <div className="absolute bg-gradient-to-b from-green-400 to-green-300 opacity-75 inset-0 z-1"></div>
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
