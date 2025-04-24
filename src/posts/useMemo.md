###### useMemo는 연산 비용이 높은 값을 캐싱하고, useCallback은 불필요한 함수 재생성을 방지하는 메모이제이션 기법입니다. 두 Hook 모두 성능 최적화에 도움을 주지만, 과도하게 사용하면 오히려 성능 저하를 초래할 수 있습니다.

##### React

### **🔹 useMemo와 useCallback의 차이점과 사용법**

React의 `useMemo`와 `useCallback`은 **렌더링 최적화**를 위해 사용되는 Hook입니다.  
둘 다 **메모이제이션(Memoization)** 기법을 활용하여 불필요한 연산을 방지하고 성능을 개선합니다.  
하지만 **"값"을 메모이제이션하는가, "함수"를 메모이제이션하는가**라는 차이점이 있습니다.

---

## **1️⃣ useMemo – 메모이제이션된 값을 반환**

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- `useMemo`는 **이전 연산 결과를 저장**하고, **의존성 배열의 값이 변경될 때만 재계산**합니다.
- 값이 변경되지 않았다면, 이전에 계산한 값을 반환하여 **불필요한 연산을 방지**합니다.

---

### **📌 useMemo가 필요한 이유**

아래 예제에서, `getID`와 `getName` 함수는 **매번 렌더링될 때마다 실행**됩니다.

```js
const getID = id => `${id}는 아이디`;
const getName = name => `${name}는 이름`;

export const Data = ({ id, name }) => {
  const processedName = getName(name);
  const processedID = getID(id);

  return (
    <div className="info-wrapper">
      {processedName} {processedID}
    </div>
  );
};
```

**⚠️ 문제점:**

- `id`만 변경되었음에도 불필요하게 `getName(name)`이 실행됩니다.
- `name` 값은 변하지 않았지만, 불필요한 재연산이 발생합니다.

이를 해결하기 위해 **`useMemo`를 사용**하여 연산을 최적화할 수 있습니다.

```
const processedName = useMemo(() => getName(name), [name]);
const processedID = useMemo(() => getID(id), [id]);
```

이제 `name`이 변경될 때만 `getName`이 실행되고,  
`id`가 변경될 때만 `getID`가 실행됩니다.

---

## **2️⃣ useCallback – 메모이제이션된 함수를 반환**

```js
const memoizedCallback = useCallback(() => {
  someFunction(a, b);
}, [a, b]);
```

- `useCallback`은 **함수를 메모이제이션**하여 **불필요한 함수 재생성을 방지**합니다.
- **의존성 배열의 값이 변경될 때만 새로운 함수를 생성**합니다.

---

### **📌 useCallback이 필요한 이유**

React 컴포넌트는 **렌더링될 때 내부의 모든 변수 및 함수를 새로 선언**합니다.  
즉, 동일한 함수라도 매번 **새로운 참조값을 가지는 다른 함수**로 인식됩니다.

예제 코드:

```js
const add = () => x + y;
```

위와 같은 함수가 있으면,  
컴포넌트가 리렌더링될 때마다 `add` 함수가 **새로운 함수로 재선언**됩니다.

이를 방지하기 위해 `useCallback`을 사용할 수 있습니다.

```js
const add = useCallback(() => x + y, [x, y]);
```

이제 `x`나 `y`가 변경될 때만 새로운 함수가 생성되고,  
그 외의 경우에는 **이전의 함수를 재사용**합니다.

---

## **3️⃣ useMemo vs useCallback – 언제 사용할까?**

| Hook          | 반환하는 값  | 언제 사용해야 할까?                        |
| ------------- | ------------ | ------------------------------------------ |
| `useMemo`     | **값(결과)** | **연산 비용이 높은 값**을 캐싱하고 싶을 때 |
| `useCallback` | **함수**     | **불필요한 함수 생성**을 방지하고 싶을 때  |

### **📌 실전 예제: useMemo와 useCallback을 함께 사용하기**

```js
import { useState, useMemo, useCallback } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useMemo를 사용하여 값 캐싱
  const squaredCount = useMemo(() => {
    console.log("🔄 연산 실행!");
    return count * count;
  }, [count]);

  // useCallback을 사용하여 함수 캐싱
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Squared Count: {squaredCount}</p>
      <button onClick={increment}>Increment</button>
      <input value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};

export default Example;
```

**✅ 주요 최적화 포인트:**

- `count`가 변경되지 않으면 `squaredCount`는 재계산되지 않습니다. (`useMemo`)
- `increment` 함수가 재선언되지 않고 이전의 함수를 재사용합니다. (`useCallback`)

---

## **🎯 결론 – 언제 useMemo와 useCallback을 사용할까?**

✔ **useMemo 사용 예시**  
✅ 연산 비용이 높은 계산 결과를 저장하고 싶을 때  
✅ 동일한 값을 반복적으로 계산하는 경우

✔ **useCallback 사용 예시**  
✅ `props`로 함수를 자식 컴포넌트에 전달할 때  
✅ 불필요한 함수 재선언을 방지하고 싶을 때

⚠️ **하지만 남용하면 오히려 성능이 저하될 수 있으므로 신중하게 사용해야 합니다!**
