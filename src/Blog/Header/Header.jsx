import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../Img/Logo.png";
import Github from "../../Img/Github.png";

const HeaderComponent = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  background: #ffffff;
  border-bottom: 1px solid #2770f5;
`;
const Wrapper = styled.div`
  width: 980px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 150px;
  height: 36px;
`;
const GithubImg = styled.img`
  width: 24px;
  height: 24px;
`;

export function Header() {
  return (
    <div>
      <HeaderComponent>
        <Wrapper>
          <Link to="/">
            <LogoImg src={Logo} alt="logo" />
          </Link>
          <a
            href="https://github.com/Dowap2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubImg src={Github} alt="git" />
          </a>
        </Wrapper>
      </HeaderComponent>
    </div>
  );
}
