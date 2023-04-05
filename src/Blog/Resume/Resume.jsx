import styled from "styled-components";
import Ohgyeongtae from "../../Img/Ohgyeongtae.jpeg";

const ResumeComponent = styled.div``;
const Page = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height || "100vh"};
`;
const Introduce = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;
const ResumeSemiTitle = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  margin: auto;
`;
const ResumeTitle = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin-top: 5px;
`;
const Background = styled.div`
  width: 40%;
  display: flex;
  background-color: #3c3c58;
`;
const IDPhoto = styled.img`
  margin: auto;
  width: 300px;
  border: 1px solid #f5f5f5;
`;
const Separation = styled.div`
  width: 100%;
  margin-top: 0px;
  border-bottom: 5px solid #3c3c58;
`;
const IntroduceTitleComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const Contact = styled.ul`
  font-family: "Nanum Gothic", sans-serif;
`;
const ContactList = styled.li`
  margin-top: 5px;
`;

export function Resume() {
  return (
    <ResumeComponent>
      <Page height={"calc(100vh - 60px)"}>
        <Background>
          <IDPhoto src={Ohgyeongtae} alt="" />
        </Background>
        <Introduce>
          <IntroduceTitleComponent>
            <ResumeSemiTitle>
              무엇이든 구현하고 빠른 실행으로 성공시키는 프론트엔드 엔지니어가
              되고자하는
            </ResumeSemiTitle>
            <ResumeTitle>오경태</ResumeTitle>
            <Separation />
          </IntroduceTitleComponent>
          <Contact>
            <ContactList>Phone : 010-6374-8944</ContactList>
            <ContactList>E-mail : dowapdowari@gmail.com</ContactList>
            <ContactList>Github : https://github.com/Dowap2/</ContactList>
            <ContactList>BLOG : https://dowap2.github.io/</ContactList>
          </Contact>
        </Introduce>
      </Page>
      <Page>HELLO</Page>
    </ResumeComponent>
  );
}
