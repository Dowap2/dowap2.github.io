###### React Hook은 함수형 컴포넌트에서 상태 관리와 라이프사이클 제어를 가능하게 하여 코드의 가독성 및 유지보수성을 향상시킵니다. useEffect, useRef, useContext 등 다양한 Hook을 활용하여 컴포넌트 간 로직을 간결하고 직관적으로 공유할 수 있습니다.

##### React

# React Hook에 관하여

## 서론

함수형 컴포넌트의 라이프사이클을 공부하던 중, Hook에 대해 알게 되었습니다. 이를 정리하면 좋을 것 같아 이 글을 작성하게 되었습니다.

## 라이프사이클과 Hook

React 컴포넌트의 라이프사이클은 다음과 같이 나뉩니다.

- **마운트(Mount):** 컴포넌트가 생성될 때
- **업데이트(Update):** 상태 또는 props가 변경될 때
- **언마운트(Unmount):** 컴포넌트가 제거될 때

클래스형 컴포넌트에서는 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 등의 메서드를 사용하여 라이프사이클을 제어합니다. 함수형 컴포넌트에서는 이를 Hook을 통해 처리합니다.

## Hook이란?

Hook은 React 16.8부터 도입된 기능으로, 함수형 컴포넌트에서도 상태 관리와 라이프사이클 제어가 가능하도록 도와줍니다.

## 주요 Hook

### 1. useEffect

`useEffect`는 컴포넌트가 마운트, 업데이트, 언마운트될 때 특정 작업을 실행할 수 있도록 도와줍니다.

#### 기본 사용법

```js
React.useEffect(() => {
  // 실행할 작업
}, []);
```

- `[]` (빈 배열): 마운트될 때 한 번 실행됩니다.
- 종속성 배열을 제공하지 않으면 렌더링될 때마다 실행됩니다.
- 특정 값이 변경될 때만 실행되도록 설정할 수도 있습니다.

```js
React.useEffect(() => {
  // 실행할 작업
}, [의존성]);
```

의존성이 변경될 때마다 실행됩니다. `useEffect` 내부에서 사용하는 값은 반드시 의존성 배열에 포함해야 합니다.

### 2. useRef

`useRef`는 값이 변경되어도 렌더링을 발생시키지 않아야 하는 경우에 사용됩니다.

#### 예제 코드

```js
const TestRef = () => {
  const [value, setValue] = React.useState(0);
  const valueRef = React.useRef(1);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>{value}</button>
      <button onClick={() => (valueRef.current += 1)}>
        {valueRef.current}
      </button>
    </div>
  );
};
```

첫 번째 버튼을 클릭하면 값이 변경되고 렌더링이 발생하지만, 두 번째 버튼을 클릭하면 값이 증가하지만 렌더링되지 않습니다.

### 3. 사용자 정의 Hook

두 개 이상의 컴포넌트에서 같은 로직을 공유해야 할 때 사용자 정의 Hook을 만들 수 있습니다.

#### 예제 코드

```js
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = React.useState(null);

  // ... API 요청 등의 로직 추가 가능

  return isOnline;
}
```

사용할 때는 다음과 같이 호출하면 됩니다.

```js
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);
  return isOnline === null ? "Loading..." : isOnline ? "Online" : "Offline";
}
```

사용자 정의 Hook은 `use`로 시작해야 하며, 이를 통해 React가 규칙 위반을 체크할 수 있습니다.

### 4. useContext

`useContext`는 `context` 객체를 받아 해당 값을 반환하는 Hook입니다.

#### 예제 코드

```js
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

이렇게 `context`를 제공하고, `useContext`를 이용해 값을 가져올 수 있습니다.

```js
function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

## Hook이 등장한 이유

과거 클래스형 컴포넌트에서는 라이프사이클을 제어할 수 있었지만, 함수형 컴포넌트에서는 불가능했습니다. `Hook`이 등장하면서 함수형 컴포넌트도 상태 관리와 라이프사이클 제어가 가능해졌습니다.

또한, React에서 상태 관리 로직을 공유하는 방식으로 고차 컴포넌트(HOC)와 Render Props 방법이 있었으나, 코드가 복잡해지는 문제가 있었습니다. `Hook`은 이러한 문제를 해결하면서 더 간결하고 직관적인 방식으로 상태 관리를 가능하게 했습니다.

## 함수형 컴포넌트를 사용하는 이유

### 1. 가독성

- 함수형 컴포넌트는 `props`에 따른 렌더링 결과가 예측 가능하며, 코드가 간결합니다.

### 2. 단방향 데이터 흐름

- 부모에서 자식으로만 데이터가 전달되므로 유지보수가 쉽습니다.
- 가상 DOM 방식과 잘 맞아 효율적인 업데이트가 가능합니다.

## 결론

React Hook은 함수형 컴포넌트에서 상태 관리와 라이프사이클을 쉽게 다룰 수 있도록 도와주는 강력한 도구입니다. 이를 적절히 활용하면 유지보수성이 높은 코드 작성이 가능합니다.
