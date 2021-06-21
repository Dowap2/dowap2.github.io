import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header/Header";
import { List } from "./Main/List";
import { View } from "./View/View";

function App() {
  return (
    <Router className="App">
      <Header />
      <List />
      <View />
    </Router>
  );
}

export default App;
