import styled from "styled-components";

const BannerItem = styled.div`
  width: 100vw;
  height: 240px;
  color: #000;
  background: #ffffff;
  background-image: ${props => `url(${props.background})`};
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  float: left;
  text-align: center;
`;

export function Banner(props) {
  return <BannerItem background={props.url}></BannerItem>;
}
