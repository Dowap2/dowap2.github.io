# 크로스 브라우징에 관하여

#### 크로스 브라우징 이슈를 해결하기 위한 프로젝트를 진행했었는데 이에 대한 이해가 부족했던 것 같다. 그래서 크로스브라우징에 관한 내용을 정리하면서 공부해보고자한다.

먼저 크로스브라우징이란 간단하게 설명하면 어떠한 환경에서도 사용자에게 동일한 사용자 경험을 주는 것이라고 이해했다.

어떤 브라우저에서도 동일한 정보와 경험을 주면 그것으로 해결이 된다고 생각한다.

### 왜 크로스 브라우징을 고려해야하는가?

우리가 자주 쓰는 크롬, 사파리 외에도 익스플로러, 파이어폭스, 오페라, 네이버 웨일 등등 여러가지 브라우저들이 각각 다른 속성등을 가지고 있기 때문에
동일한 코드여도 다른 결과물이 나타날 수 있다.
그렇기에 나타나는 결과물이 브라우저에 따라 다르게 나타나지 않게 하기위해 크로스 브라우징을 고려해야한다.

### 내가 접한 크로스 브라우징 이슈

1. 폰트
   개인 프로젝트에서 제가 직접 경험한 이슈입니다. 각 브라우저마다 기본 폰트가 다르기때문에 제가 의도한 디자인과 많이 다를 수 있습니다.
   폰트는 별도로 설정하지않으면 기본 폰트가 적용되기 때문에 css font-family를 통해 폰트를 설정해주었습니다.

2. 투명도
   익스플로러와 사파리에서 opacity 옵션이 적용되지않는 이슈가 있었습니다. 모달을 제작하면서 closing screen을 통해 알게되었습니다.
   이는 alpha 속성을 이용해서 해결할 수 있습니다. 하지만 저는 background의 rgba 속성을 이용하여 투명도를 적용하였습니다..

```
/* IE 8 */
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";

  /* IE 5-7 */
  filter: alpha(opacity=50);

  /* Netscape */
  -moz-opacity: 0.5;

  /* Safari 1.x */
  -khtml-opacity: 0.5;

  /* Good browsers */
  opacity: 0.5;
```

[출처:euntori.blog]https://euntori7.tistory.com/140

3. CSS flexBox
   현재 flex box는 파이어폭스, 크롬, 사파리, 오페라, 마이크로소프트 엣지, 익스플로러 11등 대부분의 신형브라우저에서 사용할 수 있습니다.
   하지만 IE 9이하는 -ms-를 붙여야합니다.

4. Chrome과 Safari height: 100vh;
   주로 사용자의 화면을 꽉 채울 때 사용하는 속성이지만 사파리는 하단바의 높이도 계산을 하기때문에 100vh가 되면 + 하단바의 높이 때문에 스크린의 높이를 넘어가고
   이 때문에 스크롤이 생기게 됩니다. 이를 수정하기 위해 100vh가 아닌 100%를 사용합니다.