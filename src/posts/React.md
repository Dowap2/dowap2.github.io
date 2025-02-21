# React

## Props VS State

두 객체 모두 렌더링 결과물에 영향을 줍니다.
한 가지 중요한 방식에서 차이가 있습니다.
props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면
state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리됩니다.

## Hook 규칙

훅은 항상 최상위에서만 호출해야합니다.

반복문 혹은 조건문 내에서 훅을 호출하면 안됩니다.

이 규칙을 따르게되면
컴포넌트가 렌더링이 될 때마다 동일한 순서로 hook이 사용되는 것을 보장할 수 있습니다.
이가 React가 hook을 계속 사용할 때에도 hook의 상태를 올바르게 유지할 수 있도록 도와줍니다.

만약 조건문이 필요한 경우 hook안에 조건문을 넣는 방식은 가능합니다.

또한 hook은 React 함수내에서만 호출해야합니다.

## Custom Hook

Hook은 클래스 컴포넌트를 작성하지 않아도 state와 같은 특징들을 사용할 수 있습니다.
자신만의 Hook을 만들면 컴포넌트 로직을 함수로 뽑아내어 재사용할 수 있습니다.

사용자 정의 Hook은 이름이 use로 시작하는 자바스크립트 함수입니다.
사용자 Hook은 다른 Hook을 호출할 수 있습니다.

```
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  return isOnline;
}
```

이처럼 사용자 Hook을 생성하고

```
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

이와 같이 사용할 수 있습니다.

지연 초기 state

밑에 코드에서 initialState 인자는 초기 렌더링 시에 사용하는 state입니다.
그 이후의 렌더링 시에는 이 값은 무시되기때문에 초기 state가 고비용 계산의 결과라면
초기 렌더링 시에만 실행될 함수를 대신 제공할 수 있습니다.

예제 코드

```
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

UseEffect

componentDidMount와 componentDidUpdate와는 다르게,
useEffect로 전달된 함수는 지연 이벤트 동안에 레이아웃 배치와 그리기를 완료한 후 발생합니다.
대부분의 작업이 브라우저에서 화면을 업데이트하는 것을 차단해서는 안 되기 때문에 적합합니다.

조건부 effect에 대하여

위에 Hook 규칙에서

hook은 반복문 혹은 조건문 내에서 훅을 호출하면 안됩니다.
이는 컴포넌트가 렌더링이 될 때마다 동일한 순서로 hook이 사용되는 것을 보장할 수 있습니다.
라고 설명했습니다.

따라서 hook 내에서 조건문을 사용하는 방법도 있겠지만
useEffect에 두번째인자에 인자를 전달하여 위 값이 업데이트되는 경우 실행이 가능하도록 설정할 수 있습니다.

이 방법을 사용하는 경우, 값의 배열이 시간이 지남에 따라 변경되고
effect에 사용되는 컴포넌트 범위의 모든 값들을 포함하고 있는지 확인해야합니다.

그렇지않으면 조건에 따라 동일한 순서로 사용되는 것을 보장할 수 없습니다.
