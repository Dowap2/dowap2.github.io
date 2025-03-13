import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Blog/Header/Header";
import { ViewComponent } from "./Blog/Main/View/ViewComponent";
import { Footer } from "./Blog/Footer/Footer";
import { Layout } from "./Blog/Layout";
// import { SlideBanner } from "./Banner/SlideBanner";
import { IntroduceMain } from "./Blog/Introduce/IntroduceMain";
import { Resume } from "./Blog/Resume/Resume";
import styled from "styled-components";

function App() {
  const MainComponent = styled.div`
    font-family: "Spoqa Han Sans Neo", "Spoqa Han Sans JP", sans-serif;
  `;
  return (
    <Router className="App" basename="/">
      <Header />
      <Routes>
        {/* <Route exact path="/blog" element={<SlideBanner />}></Route> */}
      </Routes>
      <MainComponent>
        <Routes>
          {/* <Route exact path="/" element={<IntroduceMain />} /> */}
          <Route exact path="/" element={<Layout />} />
          <Route path="/view/:index" element={<ViewComponent />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </MainComponent>
      <Footer />
    </Router>
  );
}

export default App;
