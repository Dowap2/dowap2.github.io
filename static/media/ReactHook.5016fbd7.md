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
