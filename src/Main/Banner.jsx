import styled from "styled-components";

const BannerItem = styled.div`
  width: 100vw;
  height: 240px;
  color: #000;
  background: ${props => props.background};
  display: table;
  float: left;
`;

export function Banner(props) {
  return <BannerItem background={props.color}>{props.text}</BannerItem>;
}
