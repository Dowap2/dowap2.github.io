import React, { useMemo, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Blog/Header/Header";
import { ViewComponent } from "./Blog/Main/View/ViewComponent";
import { Footer } from "./Blog/Footer/Footer";
import { Layout } from "./Blog/Layout";
import { IntroduceMain } from "./Blog/Introduce/IntroduceMain";
import { Resume } from "./Blog/Resume/Resume";
import { Outlet } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme.ts";
import { useSelector, useDispatch } from "react-redux";

// 스타일드 컴포넌트를 외부로 분리하여 리렌더링 최적화
const MainComponent = styled.div`
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
`;

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  /* 다크모드 전환 시 깜빡임 방지 */
  body {
    color-scheme: ${({ theme }) => theme.colorScheme || "light dark"};
  }

  /* 스크롤바 스타일링 */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbarTrack || theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbarThumb || theme.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) =>
      theme.scrollbarThumbHover || theme.primaryHover};
  }
`;

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.pageState.darkMode);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const toggleDarkMode = useCallback(() => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  }, [dispatch]);

  const layoutElement = useMemo(
    () => <Layout toggleDarkMode={toggleDarkMode}></Layout>,
    [toggleDarkMode]
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const userPreference = localStorage.getItem("darkMode");
      if (userPreference === null) {
        dispatch({
          type: "SET_DARK_MODE",
          payload: e.matches,
        });
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // 초기 로드 시 시스템 설정 확인
    const userPreference = localStorage.getItem("darkMode");
    if (userPreference === null) {
      dispatch({
        type: "SET_DARK_MODE",
        payload: mediaQuery.matches,
      });
    }

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [dispatch]);

  // 다크모드 상태를 localStorage에 저장
  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainComponent>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={layoutElement} />
            <Route path="view/:index" element={<ViewComponent />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
          <Footer />
        </Router>
      </MainComponent>
    </ThemeProvider>
  );
}

export default App;
