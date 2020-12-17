import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Messages from "./components/Messages";
import ContextFun from "./context/ContextProvider";



function App() {
  return (
    <ContextFun className="App">
      <Navbar />
      <Home />
      <Messages />
    </ContextFun>
  );
}

export default App;
