import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Blog/Header/Header";
import { ViewComponent } from "./Blog/Main/View/ViewComponent";
import FooterContainer from "./Blog/Footer/FooterContainer";
import { Layout } from "./Blog/Layout";
import { SlideBanner } from "./Banner/SlideBanner";

function App() {
  return (
    <Router className="App" basename="/">
      <Header />
      <Route exact path="/" component={SlideBanner} />
      <div>
        <Route exact path="/" component={Layout} />
        <Route path="/view/:index" component={ViewComponent} />
      </div>
      <FooterContainer />
    </Router>
  );
}

export default App;
