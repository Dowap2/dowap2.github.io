import { useState } from "react";
import styled from "styled-components";
import { Banner } from "./Banner";

const BannerComponent = styled.div`
  width: 100%;
  height: 240px;
  background: black;
`;
const BannerList = styled.div`
  width: 500vw;
  height: 240px;
  transform: ${props => props.transform};
  transition: 1s;
`;

export function SlideBanner() {
  const [index, setIndex] = useState(0);
  const transform = `translate3d(-${(index % 6) * 100}vw, 0, 0);`;
  const prevFunc = () => {
    if (index === 0) {
      setIndex(4);
    } else {
      setIndex(index - 1);
    }
  };
  const nextFunc = () => {
    if (index === 4) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <BannerComponent>
      <BannerList transform={transform}>
        <Banner text={"1"} />
        <Banner text={"2"} />
        <Banner text={"3"} />
        <Banner text={"4"} />
        <Banner text={"5"} />
      </BannerList>
      <button onClick={prevFunc}>prev</button>
      <button onClick={nextFunc}>next</button>
    </BannerComponent>
  );
}
