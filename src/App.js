import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import JumbotronItem from "./components/Jumbotron/Jumbotron";

function App() {
  return (
    <div className="App">
      <Navigation />
      <JumbotronItem />
    </div>
  );
}

export default App;
