import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { MainComponent } from "./Main/MainComponent";
import { ViewComponent } from "./View/ViewComponent";
import FooterContainer from "./Footer/FooterContainer";

function App() {
  return (
    <Router className="App" basename="/">
      <Header />
      <div>
        <Route exact path="/" component={MainComponent} />
        <Route path="/view/:index" component={ViewComponent} />
      </div>
      <FooterContainer />
    </Router>
  );
}

export default App;
