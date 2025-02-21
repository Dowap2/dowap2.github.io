import styled from "styled-components";
import ogu from "../../Img/ogu2.png";
import copyPhone from "../../Img/copyPhone.png";
import copyEmail from "../../Img/copyEmail.png";
import copyGithub from "../../Img/copyGithub.png";
import ogu3 from "../../Img/ogu3.png";
import ogu4 from "../../Img/ogu4.png";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

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
const LinkComponent = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: #000;
`;
const LinkTitle = styled.div`
  font-family: "Poor Story", cursive;
  font-size: 24px;
  margin: auto;
`;
export function IntroduceMain() {
  const copyClipboard = text => {
    console.log(text);
    window.navigator.clipboard.writeText(text).then(() => {
      alert("복사완료");
    });
  };
  const intl = useIntl();
  return (
    <IndroduceContainer>
      <Greetings>
        {intl.formatMessage({
          id: "Introduce.MainTitle"
        })}
      </Greetings>
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
          <LinkComponent to="/blog">
            <MainImg src={ogu3} />
            <LinkTitle>
              {intl.formatMessage({
                id: "Introduce.BlogLink"
              })}
            </LinkTitle>
          </LinkComponent>
        </MenuItemContainer>
        <ColumSeparation />
        <MenuItemContainer>
          <LinkComponent to="/resume">
            <MainImg src={ogu4} />
            <LinkTitle>
              {intl.formatMessage({
                id: "Introduce.ResumeLink"
              })}
            </LinkTitle>
          </LinkComponent>
        </MenuItemContainer>
      </MenuLayout>
    </IndroduceContainer>
  );
}
