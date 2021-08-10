# React Hook에 관하여

##### 서론

면접 준비를 위해 함수형 컴포넌트의 라이프 사이클에 관하여 공부하는 중 그 동안 공부하지않았던 Hook에 관하여 조금 접하게 되었다.
라이프사이클에 관하여 공부를 하면서 이를 함께 정리하면 좋을 것 같아 이 글을 쓰게 되었다.

#### 라이프사이클

먼저 라이프사이클에는 마운트(생성) 업데이트(업데이트) 언마운트(제거)가 있습니다.
클래스형 컴포넌트에서는 이를 componentDidMount, componentDidUpdate, componentWillMount 등의 메소드로 제어할 수 있습니다.

이를 함수형 컴포넌트에서는 Hook을 통해 제어할 수 있습니다.

#### Hook이란?

Hook은 React 버전 16.8부터 React의 요소로 추가되었습니다.
함수형 컴포넌트에서도 상태관리, 렌더링 이후 작업 등을 할 수 있도록 해줍니다.

#### useEffect

useEffect를 이용하여 컴포넌트가 마운트,업데이트,언마운트 되었을 때 특정작업을 처리할 수 있습니다.
useEffect를 사용할 때는 function(수행하고자하는 작업, [특정값 혹은 빈배열])

```
React.useEffect(()=> {
    //수행하고자하는 작업
},[빈배열])
```

위처럼 실행할경우 mount 되고 한번만 실행이 된다.

```
React.useEffect(()=> {
    //수행하고자하는 작업
})
```

배열이 없는 경우 렌더링 될 때마다 실행이 된다.

```
React.useEffect(()=> {
    //수행하고자하는 작업
}, [특정값])
```

특정값이 업데이트 되는 경우 실행이 된다.

useEffect내에서 사용하는 값이 있는 경우 배열안에 넣어주어야한다.
그렇지않으면 useEffect안에 함수가 실행되는 경우 값의 최신상태를 가리키지않는다.

#### useRef

useRef는 값이 바뀌어도 렌더링이 되지않아도 되는 것들을 위해 사용합니다.
useRef를 사용하면 값은 변경되지만 렌더링이 되지않습니다.

```
const TestRef = () => {
  const [value, setValue] = React.useState(0);
  const valueRef = React.useRef(1);
  return (
    <div>
      <button onClick={e => setValue(value + 1)}>{value}</button>
      <button onClick={e => (valueRef.current += 1)}>{valueRef.current}</button>
    </div>
  );
};
```

위 예제에서는 첫번째 버튼을 누르면 값이 올라가고 렌더링이 되기때문에 바로 볼 수 있습니다.
하지만 두번째 버튼을 누르게 되면 값은 올라가지만 렌더링이 되지않기때문에 바로 볼 수 없습니다.
첫번째 버튼을 누르는 등 다른 변경으로 인해 렌더링이 되면 값이 올라간 두번째 버튼을 보실 수 있습니다.

### 사용자 Hook

두개의 함수에서 서로 같은 로직을 공유하고자할 때 이를 다른 함수로 분리합니다.
사용자 Hook은 use로 시작하는 함수입니다.

```
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  return isOnline;
}
```

위 처럼 정의하고

```
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

위와 같이 사용하면됩니다.

사용자 정의 Hook은 React의 특별한 기능이라기보다 기본적으로 Hook의 디자인을 따르는 관습
사용자 정의 훅은 무조건 use로 시작해야하는데 이 이유는 특정함수 안에서 hook을 호출하는지 알지 못하기 때문에 규칙 위반을 체크할 수 없게되기때문입니다.

### useContext

useContext는 context객체를 받아 그 값을 반환하는 hook입니다.
context의 현재 값은 트리 안에서 이 Hook을 호출하는 컴포넌트에 가장 가까이에 있는 <MyContext.Provider>의 value prop에 의해 결정됩니다.

맞는 사용: useContext(MyContext)
틀린 사용: useContext(MyContext.Consumer)
틀린 사용: useContext(MyContext.Provider)

context에 전달하는 것은 context 객체 그 자체여야합니다.

useContext는 context가 변경되면 항상 렌더링됩니다.

```
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
```

context provider 생성

```
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

button style에 적용

## hook이 생긴 이유

친구와 react의 클래스형 컴포넌트와 함수형 컴포넌트에 관하여 이야기하다가
과거 클래스형 컴포넌트에서 라이프사이클을 제어할 수 있었지만 함수형 컴포넌트에서는 그게 존재하지않았다.
이를 hook을 통해 해결할 수 있게되었다 라고 알고있었다.

그렇다면 왜 hook을 도입하면서까지 클래스형 컴포넌트를 함수형 컴포넌트로 교체하고자했을까?

먼저 위에서도 간단하게 작성했지만 hook이 도입되기 전까지 함수형 컴포넌트는 자체 state를 가질 수 없었고
상위 컴포넌트에서 props를 전달받아 표현만 가능했습니다.

하지만 hook이 생기면서 함수형 컴포넌트도 라이프사이클 제어 및 자체 state를 가질 수 있게되었습니다.

리액트에서 상태관리 로직 공유를 위한 방법은 고차 컴포넌트 방식과 Render props 방법이 있습니다.

### 고차컴포넌트(HOC)

생각보다 양이 많아 고차컴포넌트는 새로운 글로 넘기고자합니다.

### 함수형 컴포넌트를 사용하는 이유

가독성과 단방향성 이 두가지를 충족하기 때문입니다.

부모로부터 자식으로만 데이터가 전달이 가능합니다. 하지만 이러한 방식은 코드의 양을 줄이거나 단순화하려는 목적은 아닙니다. 유지보수를 좀 더 편리하게 만들 수 있도록 해주는 역할을 합니다.
