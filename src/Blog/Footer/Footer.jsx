import styled from "styled-components";
import InputLanguageContainer from "./InputLanguageContainer";

const FooterComponent = styled.div`
  width: 100%;
  height: 80px;
  background: #ffffff;
  border-top: 1px solid #616161;
`;
const Wrapper = styled.div`
  width: 960px;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export function Footer() {
  return (
    <FooterComponent>
      <Wrapper>
        <InputLanguageContainer />
      </Wrapper>
    </FooterComponent>
  );
}
