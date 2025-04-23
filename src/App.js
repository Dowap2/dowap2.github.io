import React from "react";
import { useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Blog/Header/Header";
import { ViewComponent } from "./Blog/Main/View/ViewComponent";
import { Footer } from "./Blog/Footer/Footer";
import { Layout } from "./Blog/Layout";
// import { SlideBanner } from "./Banner/SlideBanner";
import { IntroduceMain } from "./Blog/Introduce/IntroduceMain";
import { Resume } from "./Blog/Resume/Resume";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme.ts";
import { useSelector } from "react-redux";

function App() {
  const MainComponent = styled.div`
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  `;
  const GlobalStyle = createGlobalStyle`
    html, body, #root {
      margin:0;
      padding:0;
      background: ${({ theme }) => theme.background};
    }
  `;
  const darkMode = useSelector(state => state.pageState.darkMode);
  const layoutElement = useMemo(() => <Layout />, []);
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router className="App" basename="/">
        <Header />
        <Routes>
          {/* <Route exact path="/blog" element={<SlideBanner />}></Route> */}
        </Routes>
        <MainComponent>
          <Routes>
            {/* <Route exact path="/" element={<IntroduceMain />} /> */}
            <Route exact path="/" element={layoutElement} />
            <Route path="/view/:index" element={<ViewComponent />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </MainComponent>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
