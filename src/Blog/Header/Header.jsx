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

const HeaderComponent = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background: ${props => (props.darkMode ? "#121319" : "#fff")};
  padding-top: 20px;
  padding-bottom: 40px;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
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
const IconImgComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  padding: 5px;
`;
const ChangeNightMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  float: right;
  padding: 5px;
  margin-right: 30px;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
`;
const ButtonComponent = styled.div`
  display: flex;
`;

export function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.pageState.darkMode);

  const handleDarkModeChange = () => {
    dispatch(changeDarkMode(!darkMode));
  };

  return (
    <div>
      <HeaderComponent darkMode={darkMode}>
        <Wrapper>
          <Link to="/">
            <LogoImg src={darkMode ? LogoNight : LogoDay} />
          </Link>
          <ButtonComponent>
            <ChangeNightMode onClick={handleDarkModeChange}>
              <ButtonImg src={darkMode ? Night : Day} alt="night" />
            </ChangeNightMode>
            <a
              href="https://github.com/Dowap2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconImgComponent>
                <ButtonImg src={darkMode ? GithubNight : GithubDay} alt="git" />
              </IconImgComponent>
            </a>
          </ButtonComponent>
        </Wrapper>
      </HeaderComponent>
    </div>
  );
}
