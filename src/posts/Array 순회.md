# 📌 Array 순회

## 🔹 Array.map

Array 인스턴스의 map() 메서드는 호출한 배열의 모든 요소에 주어진 함수를 호출한 결과로 채운 새로운 배열을 생성합니다.

map 함수는 배열을 순회하며 각 아이템 값을 통해 **새로운 값을 리턴**합니다.

### ✨ 문법

```js
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

- **callback** : 새로운 배열 요소를 생성하는 함수.
- **currentValue** : 처리할 현재 요소.
- **index (Optional)** : 처리할 현재 요소의 인덱스.
- **array (Optional)** : map()을 호출한 배열.
- **thisArg (Optional)** : callback을 실행할 때 this로 사용되는 값.

### 📌 예제

```js
const array = [1, 2, 3, 4, 5];

const newArray = array.map(num => {
  return num + 1;
});

console.log(newArray); // [2, 3, 4, 5, 6]
```

**map**은 각 배열을 순회하며 **callback** 함수를 실행하고 **return** 값을 통해 새로운 배열을 만들어냅니다.

💡 **사용 예시:** 서버로부터 배열 형태의 데이터를 받아서 가공하여 화면에 표시할 때 활용할 수 있습니다.

⚠️ **map**은 호출한 배열의 값을 직접 변경하지 않지만, **callback** 내부에서 원본 데이터를 변경할 가능성이 있습니다.

---

## 🔹 React에서의 map 활용

반복되는 컴포넌트를 렌더링할 때 **map** 함수를 사용할 수 있습니다.

### 📌 예제

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => <li>{number}</li>);

return <ul>{listItems}</ul>;
```

위 코드는 **numbers** 배열을 순회하며 각 숫자를 **li** 엘리먼트에 넣고, 이를 **listItems**에 저장합니다.

### ⚠️ Key 값 추가 필요

그러나 위 코드를 실행하면 **Key를 추가하라는 경고**가 표시됩니다.

🔑 **Key란?**

- React가 어떤 항목을 추가, 변경, 삭제할 때 **식별하는 고유 값**입니다.
- **map**을 사용할 때 **key** 속성을 추가하여 해결할 수 있습니다.

### ✅ 수정된 코드

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => <li key={number}>{number}</li>);

return <ul>{listItems}</ul>;
```

💡 **key** 값으로는 **고유한 값**을 사용해야 합니다. (배열의 인덱스보다는 ID와 같은 고유한 값을 추천합니다.)

---

## 🔹 Array.forEach

forEach() 메서드는 배열의 각 요소에 대해 한 번씩 제공된 함수를 실행합니다. **map()과 달리 새로운 배열을 생성하지 않고, 단순히 배열을 순회하며 작업을 수행합니다.**

### ✨ 문법

```js
arr.forEach(callback(currentValue[, index[, array]])[, thisArg])
```

- **callback** : 각 요소에 대해 실행할 함수.
- **currentValue** : 처리할 현재 요소.
- **index (Optional)** : 처리할 현재 요소의 인덱스.
- **array (Optional)** : forEach()를 호출한 배열.
- **thisArg (Optional)** : callback 실행 시 this로 사용할 값.

### 📌 예제

```js
const array = [1, 2, 3, 4, 5];

array.forEach(num => {
  console.log(num * 2);
});
```

출력 결과:

```js
2;
4;
6;
8;
10;
```

💡 **사용 예시:** 데이터 변환이 필요 없고, 단순히 각 요소에 대한 작업(예: console.log 또는 DOM 조작 등)을 수행할 때 사용합니다.

⚠️ forEach는 **새로운 배열을 반환하지 않습니다.** 단순히 반복을 실행할 뿐입니다.
