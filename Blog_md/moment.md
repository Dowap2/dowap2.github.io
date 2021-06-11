Moment.js는 날짜 관련 라이브러리입니다.
날짜 형식의 데이터를 파싱, 유효성 체크, 조작, 화면에 출력을 쉽게 할 수 있도록 도와주는 라이브러리입니다.

사용예시

```
import {moment} from "moment"

const time = moment()
console.log(time) //현재 날짜 값

moment().format('YYYY YY Y') //결과 2021 21 2019 y는 년도를 나타냄
moment().format('MMMM MMM MM M') //결과 June Jun 06 6 m는 달을 나타냄
moment().format('DD D Do') // 10 10 10th d는 일을 나타냄

moment().foramt('L') // MM/DD/YYYY
moment().foramt('LL') // MMMM DD, YYYY
moment().foramt('LLL') // MMMM DD, YYYY h:mm A
moment().foramt('LLLL') // dddd, MMMM DD, YYYY h:mm A
moment().foramt('LT') // h:mm A
moment().foramt('LTS') / h:mm:ss A
```

moment.locale 사용방법

moment의 locale 기본 설정은 en입니다.

```
moment.updateLocale("ko", {
  format: {
    //해당 언어 포맷
    //ex) llll : hhhh mm dd
  }
});
moment.locale("ko");
moment.updateLocale("en", {
  format: {
    //해당 언어 포맷
    //ex) llll : hhhh mm dd
  }
});
moment.locale("en");
```
