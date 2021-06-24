import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { List } from "./Main/List";
import { View } from "./View/View";

function App() {
  return (
    <Router className="App" basename="/">
      <Header />
      <div>
        <Route path="/main" component={List} />
        <Route path="/view/:index" component={View} />
      </div>
    </Router>
  );
}

export default App;
