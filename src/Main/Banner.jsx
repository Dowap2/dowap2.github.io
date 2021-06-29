import styled from "styled-components";

const BannerItem = styled.div`
  width: 100vw;
  height: 240px;
  color: #fff;
  background: #000;
  display: table;
  float: left;
`;

export function Banner(props) {
  return <BannerItem>{props.text}</BannerItem>;
}
