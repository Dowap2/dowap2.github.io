import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoDay from "../../Img/LogoDay.png";
import LogoNight from "../../Img/LogoNight.png";
import GithubDay from "../../Img/GithubDay.png";
import GithubNight from "../../Img/GithubNight.png";
import Day from "../../Img/Day.png";
import Night from "../../Img/Night.png";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode } from "../../store/modules/pageState";

const HeaderComponent = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  display: flex;
  background: ${({ darkMode }) => (darkMode ? "#121319" : "#fff")};
  margin: 20px 0;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 60px;
  height: 60px;
`;

const ButtonImg = styled.img`
  width: 24px;
  height: 24px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  padding: 5px;
`;

const ChangeNightMode = styled(IconWrapper)`
  margin-right: 30px;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonComponent = styled.div`
  display: flex;
`;

export function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.pageState.darkMode);

  const handleDarkModeChange = () => {
    dispatch(changeDarkMode(!darkMode));
  };

  return (
    <HeaderComponent darkMode={darkMode}>
      <Link to="/">
        <LogoImg src={darkMode ? LogoNight : LogoDay} alt="Logo" />
      </Link>
      <ButtonComponent>
        <ChangeNightMode
          onClick={handleDarkModeChange}
          aria-label="Toggle dark mode"
        >
          <ButtonImg
            src={darkMode ? Night : Day}
            alt={darkMode ? "Night mode" : "Day mode"}
          />
        </ChangeNightMode>
        <a
          href="https://github.com/Dowap2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Link"
        >
          <IconWrapper>
            <ButtonImg src={darkMode ? GithubNight : GithubDay} alt="GitHub" />
          </IconWrapper>
        </a>
      </ButtonComponent>
    </HeaderComponent>
  );
}
