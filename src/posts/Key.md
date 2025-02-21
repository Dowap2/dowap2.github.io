# 📌 React에서 Lists와 Keys

## 📖 개요

React에서 배열을 다룰 때, `.map()`을 사용하여 리스트를 렌더링하는 것이 일반적입니다. 하지만 리스트를 렌더링할 때는 **항목을 고유하게 식별할 수 있는 `key` 값을 추가해야 합니다.**  
이를 제대로 설정하지 않으면 **React가 효율적으로 변경 사항을 감지하지 못하고 경고 메시지를 출력**할 수 있습니다.

---

## 🔹 리스트 렌더링 예제

다음은 `props.numbers` 배열을 받아 리스트를 렌더링하는 기본적인 예제입니다.

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => <li>{number}</li>);
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

### ⚠️ 문제 발생

위 코드를 실행하면 **"리스트의 각 항목에 key를 넣어야 한다"** 라는 경고가 표시됩니다.

---

## 🔑 Key의 역할

`key`는 React가 **리스트 내에서 어떤 항목이 변경, 추가 또는 제거되었는지를 식별하는데 도움을 주는 고유한 값**입니다.  
따라서 리스트를 렌더링할 때는 각 항목에 **유일한 `key` 값**을 추가해야 합니다.

**Key를 올바르게 선택하는 방법**

- 데이터가 데이터베이스에서 온 경우 `id`를 `key`로 사용합니다.
- `index`를 `key`로 사용하는 것은 **추천되지 않습니다.** (예외적으로 순서가 변하지 않는 정적인 리스트에서는 가능)

---

## ✅ Key를 올바르게 추가한 예제

올바른 방법으로 `key`를 추가하면 다음과 같이 작성할 수 있습니다.

```jsx
const todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>);
```

👉 `todo.id`를 `key`로 사용하여 각 항목이 고유하게 식별될 수 있도록 설정했습니다.

---

## 🚨 잘못된 Key 사용 예제

모든 `li` 태그에 `key`를 추가하는 것은 **항상 올바른 방법이 아닙니다.**  
아래 코드는 잘못된 예시입니다.

```jsx
function ListItem(props) {
  const num = props.num;
  return (
    <li key={num.toString()}>
      {" "}
      // ❌ 틀렸습니다! 여기에는 key를 지정할 필요가 없습니다.
      {num}
    </li>
  );
}

function NumberList(props) {
  const numbers = [1, 2, 3, 4];
  const listItems = numbers.map(
    num => <ListItem num={num} /> // ❌ 틀렸습니다! 여기에 key를 지정해야 합니다.
  );
  return <ul>{listItems}</ul>;
}
```

🔴 **오류 이유**

- `ListItem` 내부에서 `li` 태그에 `key`를 지정하는 것은 의미가 없습니다.
- `key`는 리스트의 개별 항목을 식별하는 것이므로 **`map()` 함수가 실행되는 곳에서 지정**해야 합니다.

---

## ✅ 올바른 Key 사용 예제

위 코드를 수정하여 `key`를 적절히 추가하면 다음과 같이 작성할 수 있습니다.

```jsx
function ListItem(props) {
  return <li>{props.num}</li>; // ✅ 맞습니다! 여기에는 key를 지정할 필요가 없습니다.
}

function NumberList(props) {
  const numbers = [1, 2, 3, 4];
  const listItems = numbers.map(
    num => <ListItem key={num.toString()} num={num} /> // ✅ 맞습니다! 배열 안에서 key를 지정해야 합니다.
  );
  return <ul>{listItems}</ul>;
}
```

✅ **올바른 이유**

- `ListItem` 컴포넌트 자체가 key를 받을 필요는 없고, **리스트를 생성하는 `map()` 함수 내부에서 key를 지정**해야 합니다.

---

## 📌 Key를 설정할 때 주의할 점

1. **항목을 고유하게 식별할 수 있는 값으로 설정해야 합니다.**
   - `id`, `UUID`, 데이터베이스의 고유 값 등을 활용하는 것이 좋습니다.
2. **`index`를 `key`로 사용하는 것은 권장되지 않습니다.**
   - 리스트의 순서가 변경될 가능성이 있는 경우, `index`를 `key`로 사용하면 React가 변화를 감지하는데 문제가 발생할 수 있습니다.
3. **Key는 변경되지 않아야 합니다.**
   - `key` 값이 바뀌면 React가 새롭게 렌더링할 필요가 있다고 판단하므로, 불필요한 리렌더링이 발생할 수 있습니다.

---

## 🏁 결론

- 리스트를 렌더링할 때는 **각 항목을 고유하게 식별할 수 있도록 `key`를 지정**해야 합니다.
- `map()`을 사용할 때 **컴포넌트를 감싸는 태그(`<li>` 등)가 아니라, `map()` 내부에서 컴포넌트에 `key`를 추가**해야 합니다.
- `key`로 **항목의 고유한 `id`**를 사용하는 것이 가장 좋으며, 특별한 경우가 아니라면 `index`를 `key`로 사용하지 않는 것이 바람직합니다.

이제 React에서 리스트를 렌더링할 때, `key`를 올바르게 활용하여 성능 최적화된 애플리케이션을 개발해 보세요! 🚀✨
