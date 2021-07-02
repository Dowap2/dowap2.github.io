import { useState } from "react";
import styled from "styled-components";
import { Banner } from "./Banner";
import { useIntl } from "react-intl";

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
  transition: 1s;
`;

export function SlideBanner() {
  const intl = useIntl();
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
    <div>
      <BannerComponent>
        <BannerList transform={transform}>
          <Banner
            text={
              "프로덕트에 애정을 가지고 발전시키는 것을 좋아하는 오경태 입니다."
            }
            color={"#f5f5f5"}
          />
          <Banner text={"2"} color={"#fdcd44"} />
          <Banner text={"3"} color={"#a5b5fc"} />
          <Banner text={"4"} color={"#d3f5f5"} />
          <Banner text={"5"} color={"#fcd5f5"} />
        </BannerList>
      </BannerComponent>
      <button onClick={prevFunc}>
        {intl.formatMessage({ id: "banner.prev.btn" })}
      </button>
      <button onClick={nextFunc}>
        {intl.formatMessage({ id: "banner.next.btn" })}
      </button>
    </div>
  );
}
