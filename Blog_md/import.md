오늘 개인 프로젝트 코드를 수정하면서 Receiving “Attempted import error:” in react app 라는 에러를 마주하였다.

import { combineReducers } from '../../store/reducers';
위 처럼 import를 하는 것이 아닌 아래와 같이

import combineReducers from '../../store/reducers';

{}없이 import를 하는 경우 해결되는 문제였다.

여기서 드는 생각은 어떤 경우에 중괄호 없이 사용하고 어떤 경우에 사용하는지 궁금해졌다.

먼저 import의 방법을 알아보기 전 export에 관하여 먼저 알아야할 것이 있다.

#### export & import

export에는 여러가지 방식이 있는데 이에 따라 import를 할 때 중괄호의 사용여부가 결정된다.
몇가지 예시를 보면

1. 선언 전 내보내기

```
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
```

2. 선언과 별도로 내보내기

```
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye};
```

1번과 2번과 같은 경우 중괄호를 사용하여 import 한다.

```
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
```

가져오는 모듈이 많은 경우는 \*을 사용하여 한번에 가져올 수 있다.

```
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

이름이 겹쳐 다른 이름으로 가져오고 싶은 경우

```
import {sayHi as hi, sayBye as bye} from './say.js'
```

이처럼 sayHi를 짧게 hi sayBye를 짧게 bye로 가져오는 것을 볼 수 있다.

##### default

모듈에는 두가지 방식이 있는데 처음은 위에 1,2번과 같이 여러 함수를 포함하는 라이브러리 형태의 모듈들과
두번재는 개체 하나만 선언되어있는 모듈입니다.

두번째와 같은 경우 export default를 지원하는데 이를 사용하면 해당 모듈에 개체가 하나만 있다는 것을 알 수 있습니다.
이러한 경우 import를 하는 경우 중괄호를 사용하지않고 import할 수 있습니다.
