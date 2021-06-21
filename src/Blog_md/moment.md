Moment.js는 날짜 관련 라이브러리입니다.
날짜 형식의 데이터를 파싱, 유효성 체크, 조작, 화면에 출력을 쉽게 할 수 있도록 도와주는 라이브러리입니다.

사용예시

```
import {moment} from "moment"

const time = moment()
console.log(time) //현재 날짜 값

moment.locale("ko");         // ko
moment().format('LT');   // 오후 8:35
moment().format('LTS');  // 오후 8:35:50
moment().format('L');    // 2021.06.15.
moment().format('l');    // 2021.06.15.
moment().format('LL');   // 2021년 6월 15일
moment().format('ll');   // 2021년 6월 15일
moment().format('LLL');  // 2021년 6월 15일 오후 8:35
moment().format('lll');  // 2021년 6월 15일 오후 8:35
moment().format('LLLL'); // 2021년 6월 15일 화요일 오후 8:35
moment().format('llll'); // 2021년 6월 15일 화요일 오후 8:35

moment.locale("en");         // en
moment().format('LT');   // 8:36 PM
moment().format('LTS');  // 8:36:22 PM
moment().format('L');    // 06/15/2021
moment().format('l');    // 6/15/2021
moment().format('LL');   // June 15, 2021
moment().format('ll');   // Jun 15, 2021
moment().format('LLL');  // June 15, 2021 8:36 PM
moment().format('lll');  // Jun 15, 2021 8:36 PM
moment().format('LLLL'); // Tuesday, June 15, 2021 8:36 PM
moment().format('llll'); // Tue, Jun 15, 2021 8:36 PM
```

moment.locale 사용방법

moment의 locale 기본 설정은 en입니다.

```
const language = useSelector(state => state.languageState.state.language);
const [date, setDate] = useState(moment().format("llll"));

useEffect(() => {
    language === "en" ? moment.locale("en") : moment.locale("ko");
  }, [language]);

  setInterval(() => {
    setDate(moment().format("llll"));
  }, 60000);

  console.log(date)
```

language가 변경되면 변경된 값에 따라 날짜의 포맷이 변경됩니다.

단 moment.locale("ko")를 사용해서 한국어 날짜 포맷을 사용하기위해서는

```
import "moment/locale/ko";
```

위 처럼 import를 해야합니다.
