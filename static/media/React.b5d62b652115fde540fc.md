# React

## Props VS State

두 객체 모두 렌더링 결과물에 영향을 줍니다.  
한 가지 중요한 방식에서 차이가 있습니다.  
**props**는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면  
**state**는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리됩니다.

---

## Hook 규칙

훅은 항상 **최상위에서만 호출**해야 합니다.  
반복문 혹은 조건문 내에서 훅을 호출하면 안 됩니다.

이 규칙을 따르게 되면  
컴포넌트가 렌더링이 될 때마다 **동일한 순서**로 hook이 사용되는 것을 보장할 수 있습니다.  
이는 React가 hook을 계속 사용할 때에도 **hook의 상태를 올바르게 유지**할 수 있도록 도와줍니다.

> 만약 조건문이 필요한 경우, **hook 안에 조건문을 넣는 방식은 가능합니다.**

또한, **hook은 React 함수 내에서만 호출해야 합니다.**

---

## Custom Hook (사용자 정의 Hook)

Hook은 클래스 컴포넌트를 작성하지 않아도 state와 같은 특징들을 사용할 수 있습니다.  
자신만의 Hook을 만들면 **컴포넌트 로직을 함수로 뽑아내어 재사용**할 수 있습니다.

사용자 정의 Hook은 **이름이 `use`로 시작하는 자바스크립트 함수**입니다.  
사용자 Hook은 **다른 Hook을 호출할 수도 있습니다.**

```js
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  return isOnline;
}
```

이처럼 사용자 Hook을 생성하고,

```js
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
```

이와 같이 사용할 수 있습니다.

---

## 지연 초기 state

아래 코드에서 `initialState` 인자는 **초기 렌더링 시에 사용하는 state**입니다.  
그 이후의 렌더링 시에는 이 값은 무시되기 때문에  
초기 state가 **고비용 계산의 결과라면**  
초기 렌더링 시에만 실행될 **함수를 대신 제공**할 수 있습니다.

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

---

## useEffect

`componentDidMount`와 `componentDidUpdate`와는 다르게,  
`useEffect`로 전달된 함수는 **지연 이벤트 동안에 렌더링이 완료된 후 실행**됩니다.  
대부분의 작업이 브라우저에서 화면을 업데이트하는 것을 차단해서는 안 되기 때문에 적합합니다.

### 조건부 effect에 대하여

위의 Hook 규칙에서

- **Hook은 반복문 혹은 조건문 내에서 호출하면 안 됩니다.**
- 이는 **컴포넌트가 렌더링될 때마다 동일한 순서로 Hook이 실행되는 것을 보장**하기 위해서입니다.

따라서, **Hook 내에서 조건문을 사용하는 대신**  
`useEffect`의 **두 번째 인자에 배열을 전달하여**  
특정 값이 업데이트될 때 실행하도록 설정할 수 있습니다.

```js
useEffect(() => {
  // 실행할 코드
}, [dependency]); // dependency가 변경될 때만 실행
```

이 방법을 사용하는 경우,  
배열 안에 **모든 관련 값들을 포함하고 있는지 확인**해야 합니다.  
그렇지 않으면, 조건에 따라 동일한 순서로 Hook이 실행된다는 보장을 할 수 없습니다.
