import { useState } from "react";
import styled from "styled-components";
import { Banner } from "./Banner";
import { useIntl } from "react-intl";
import BannerImg1 from "../Img/BannerImg/BannerImg1.png";
import BannerImg2 from "../Img/BannerImg/BannerImg2.png";
import BannerImg3 from "../Img/BannerImg/BannerImg3.png";

const BannerComponent = styled.div`
  width: 100%;
  height: 240px;
  background: black;
  overflow-x: hidden;
`;
const BannerList = styled.div`
  width: 500vw;
  height: 240px;
  transform: ${props => props.transform};
  transition: 2s;
`;

export function SlideBanner() {
  const [index, setIndex] = useState(0);
  const transform = `translate3d(-${(index % 3) * 100}vw, 0, 0);`;

  setTimeout(function() {
    if (index === 3) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 3000);
  return (
    <div>
      <BannerComponent>
        <BannerList transform={transform}>
          <Banner url={BannerImg1} />
          <Banner url={BannerImg2} />
          <Banner url={BannerImg3} />
        </BannerList>
      </BannerComponent>
    </div>
  );
}
