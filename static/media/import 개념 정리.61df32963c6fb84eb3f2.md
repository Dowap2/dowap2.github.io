###### export 방식에 따라 import 방식이 달라지며, export default는 중괄호 없이 import하고, export {}는 중괄호를 사용하여 import합니다. 여러 개의 named export는 import \* as로 한 번에 가져오거나 alias를 사용하여 다른 이름으로 import할 수 있습니다.

# React에서 import 에러와 export/import 개념 정리

React 프로젝트를 진행하다 보면 `Attempted import error:` 라는 에러를 마주할 수 있습니다. 최근 개인 프로젝트에서 다음과 같은 상황을 경험했습니다.

```js
import { combineReducers } from "../../store/reducers";
```

위와 같이 import할 경우 에러가 발생했지만, 아래처럼 중괄호 `{}` 없이 import하니 문제가 해결되었습니다.

```js
import combineReducers from "../../store/reducers";
```

이처럼 어떤 경우에는 중괄호 `{}` 를 사용하고, 어떤 경우에는 사용하지 않는지 궁금해졌습니다. 이를 이해하려면 먼저 `export` 방식에 대해 알아야 합니다.

## 1. export & import 개념

JavaScript에서 `export` 방식에 따라 `import` 방식도 달라집니다.

### 1.1. Named Export (이름 내보내기)

Named export는 여러 개의 변수를 내보낼 수 있으며, import할 때 중괄호 `{}` 를 사용해야 합니다.

#### 1) 선언과 동시에 export 하기

```js
export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
```

#### 2) 선언 후 별도로 export 하기

```js
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
}

export { sayHi, sayBye };
```

이렇게 `export` 하면 import할 때는 다음과 같이 중괄호를 사용해야 합니다.

```js
import { sayHi, sayBye } from "./say.js";

sayHi("John"); // Hello, John!
sayBye("John"); // Bye, John!
```

### 1.2. Named Export의 다양한 방식

#### 1) 한 번에 가져오기 (`*` 사용)

여러 개의 export를 한 번에 가져올 수도 있습니다.

```js
import * as say from "./say.js";

say.sayHi("John");
say.sayBye("John");
```

#### 2) 다른 이름으로 가져오기 (alias 사용)

```js
import { sayHi as hi, sayBye as bye } from "./say.js";

hi("John");
bye("John");
```

## 2. Default Export (기본 내보내기)

모듈에 하나의 개체만 존재할 경우 `export default` 를 사용할 수 있습니다.

```js
export default function Name(name) {
  console.log(name);
}
```

이렇게 `export default` 한 경우 import 시 중괄호 없이 사용합니다.

```js
import Name from "./Name";

Name("John");
```

## 3. Named Export vs Default Export 정리

| 구분              | Named Export                        | Default Export                  |
| ----------------- | ----------------------------------- | ------------------------------- |
| `export` 방식     | `export { 변수명 }`                 | `export default 변수명`         |
| `import` 방식     | `import { 변수명 } from '파일경로'` | `import 변수명 from '파일경로'` |
| 여러 개 가능 여부 | 가능                                | 하나만 가능                     |
| 중괄호 필요 여부  | 필요                                | 불필요                          |

## 4. 마무리

- `export default` 를 사용하면 import 시 중괄호 `{}` 없이 가져올 수 있습니다.
- `export {}` 형태로 내보내면 import 시 중괄호 `{}` 가 필요합니다.
- 여러 개의 named export가 존재할 경우 `import * as 이름 from '파일경로'` 로 한 번에 가져올 수 있습니다.
- 필요에 따라 alias를 사용하여 다른 이름으로 import할 수도 있습니다.

이제 `export` 와 `import` 개념을 이해하고, 코드에서 `Attempted import error:` 같은 문제를 쉽게 해결할 수 있을 것입니다!
