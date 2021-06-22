# Lists and Keys

[참고](https://ko.reactjs.org/docs/lists-and-keys.html)

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

이 코드를 실행하면 리스트의 각 항목에 key를 넣어야 한다는 경고가 표시됩니다.

key는 React가 어떤 항목을 추가, 수정, 삭제 등을 할 때 식별하는 것을 돕습니다.
key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.

key를 선택하는 좋은 방법은 다른 항목들 사이에서 고유하게 식별할 수 있는 문자등이 좋습니다.

```
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

todo.id 를 key로 사용

항상 li에 key를 추가하는 것은 아닙니다.
아래 틀린 예시

```
function ListItem(props) {
  const num = props.num;
  return (
    <li key={num.toString()}> // 틀렸습니다! 여기에는 key를 지정할 필요가 없습니다.
      {num}
    </li>
  );
}

function NumberList(props) {
  const numbers = [1,2,3,4]
  const listItems = numbers.map((num) =>
    <ListItem num={num} /> // 틀렸습니다! 여기에 key를 지정해야 합니다.
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

아래 올바른 예시

```
function ListItem(props) {
  return <li>{props.num}</li>; // 맞습니다! 여기에는 key를 지정할 필요가 없습니다.
}

function NumberList(props) {
  const numbers = [1,2,3,4]
  const listItems = numbers.map((num) =>
    <ListItem key={num.toString()} num={num} /> // 맞습니다! 배열 안에 key를 지정해야 합니다.
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
}
```
