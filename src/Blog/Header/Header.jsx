import styled from "styled-components";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import Logo from "../Img/Logo.png";

const linkStyle = {
  color: "black",
  textDecoration: "none"
};
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
`;
const LogoImg = styled.img`
  width: 150px;
  height: 36px;
`;

export function Header() {
  const intl = useIntl();
  return (
    <HeaderComponent>
      <Wrapper>
        <Link to="/" style={linkStyle}></Link>
        <LogoImg src={Logo} alt="" />
      </Wrapper>
    </HeaderComponent>
  );
}
