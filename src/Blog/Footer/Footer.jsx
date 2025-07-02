import styled from "styled-components";
// import InputLanguageContainer from "./InputLanguageContainer";
import { useSelector } from "react-redux";

const FooterComponent = styled.div`
  width: 100%;
  height: 80px;
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
  const darkMode = useSelector((state) => state.pageState.darkMode);
  console.log("footer", darkMode);
  return (
    <FooterComponent darkmode={darkMode}>
      <Wrapper>{/* <InputLanguageContainer /> */}</Wrapper>
    </FooterComponent>
  );
}
