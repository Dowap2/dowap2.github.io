import styled from "styled-components";

const FooterComponent = styled.div`
  width: 100%;
  height: 80px;
  background: #f5f5f5;
  margin-top: 30px;
`;
const Wrapper = styled.div`
  width: 980px;
  margin: auto;
`;
const ChangeLanguageComponent = styled.select`
  margin-top: 30px;
`;

export function Footer(props) {
  return (
    <FooterComponent>
      <Wrapper>
        <ChangeLanguageComponent onChange={e => props.onChange(e.target.value)}>
          <option value="en">English</option>
          <option value="ko">Korean</option>
        </ChangeLanguageComponent>
      </Wrapper>
    </FooterComponent>
  );
}
