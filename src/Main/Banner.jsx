import styled from "styled-components";

const BannerItem = styled.div`
  width: 100vw;
  height: 240px;
  color: #000;
  background-image: ${props => `url(${props.background})`};
  background-size: contain;
  display: flex;
  float: left;
  text-align: center;
`;

export function Banner(props) {
  return <BannerItem background={props.url}></BannerItem>;
}
