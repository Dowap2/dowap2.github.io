import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../Img/blog_logo.png";
import Github from "../../Img/Github.png";

const HeaderComponent = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background: #ffffff;
  margin-top: 20px;
  margin-bottom: 40px;
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
const GithubImg = styled.img`
  width: 24px;
  height: 24px;
`;
const IconImgComponent = styled.div`
  padding: 5px;
`;

export function Header() {
  return (
    <div>
      <HeaderComponent>
        <Wrapper>
          <Link to="/">
            <LogoImg src={logo} />
          </Link>
          <a
            href="https://github.com/Dowap2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconImgComponent>
              <GithubImg src={Github} alt="git" />
            </IconImgComponent>
          </a>
        </Wrapper>
      </HeaderComponent>
    </div>
  );
}
