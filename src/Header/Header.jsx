import styled from "styled-components";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "black",
  textDecoration: "none"
};

const HeaderComponent = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
`;
const Wrapper = styled.div`
  width: 980px;
  margin: auto;
`;

export function Header(props) {
  return (
    <HeaderComponent>
      <Wrapper>
        <Link to="/main" style={linkStyle}>
          logo
        </Link>
      </Wrapper>
    </HeaderComponent>
  );
}
