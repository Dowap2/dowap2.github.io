import styled from "styled-components";
import ogu from "../../Img/ogu2.png";
import copyPhone from "../../Img/copyPhone.png";
import copyEmail from "../../Img/copyEmail.png";
import copyGithub from "../../Img/copyGithub.png";
import ogu3 from "../../Img/ogu3.png";
import ogu4 from "../../Img/ogu4.png";
import { Link } from "react-router-dom";

const IndroduceContainer = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Greetings = styled.div`
  font-size: 32px;
  margin: auto;
  font-family: "Poor Story", cursive;
`;
const MainImgContainer = styled.div`
  margin: auto;
`;
const MainImg = styled.img`
  width: 200px;
  height: 200px;
  display: flex;
`;
const CopyIcon = styled.div`
  margin: auto;
`;
const Icon = styled.img`
  width: 25px;
  height: 25px;
  padding: 10px;
`;
const Separation = styled.div`
  width: 100%;
  margin-top: 60px;
  border-bottom: 1px solid #d3d3d3;
`;
const MenuLayout = styled.div`
  width: 100%;
  display: flex;
`;
const MenuItemContainer = styled.div`
  width: 200px;
  height: 300px;
  margin: auto;
`;
const ColumSeparation = styled.div`
  margin-top: 60px;
  height: 300px;
  border-left: 1px solid #d3d3d3;
`;
const LinkTitle = styled.div`
  text-decoration: none;
`;
export function IntroduceMain() {
  const copyClipboard = text => {
    console.log(text);
    window.navigator.clipboard.writeText(text).then(() => {
      alert("복사완료");
    });
  };
  return (
    <IndroduceContainer>
      <Greetings>Hello I am Gyeongtae</Greetings>
      <MainImgContainer>
        <MainImg src={ogu} />
      </MainImgContainer>
      <CopyIcon>
        <Icon
          value={"010-6374-8944"}
          onClick={e => copyClipboard(e.target.attributes[0].value)}
          src={copyPhone}
        ></Icon>
        <Icon
          value={"dowapdowari@gmail.com"}
          onClick={e => copyClipboard(e.target.attributes[0].value)}
          src={copyEmail}
        ></Icon>
        <Icon
          value={"https://github.com/Dowap2"}
          onClick={e => copyClipboard(e.target.attributes[0].value)}
          src={copyGithub}
        ></Icon>
      </CopyIcon>
      <Separation />
      <MenuLayout>
        <MenuItemContainer>
          <Link to="/blog">
            <MainImg src={ogu3} />
            <LinkTitle>blog</LinkTitle>
          </Link>
        </MenuItemContainer>
        <ColumSeparation />
        <MenuItemContainer>
          <Link to="/resume">
            <MainImg src={ogu4} />
            <LinkTitle>about me</LinkTitle>
          </Link>
        </MenuItemContainer>
      </MenuLayout>
    </IndroduceContainer>
  );
}
