useMemo와 useCallback은 모두 렌더링을 최적화하기 위해 사용하는 hook이다.
어느정도 둘을 사용하는 경우와 방법에 대하여 알지만 좀 더 자세히 이해하기 위해 공부하였다.

## UseMemo

```
//예제
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

메모이제이션된 값을 반환합니다. 라고 리액트 공식문서에 나와있으며, 이 부분이 useMemo와 useCallback의 차이라고 생각합니다.

useCallback은 메모이제이션된 콜백을 반환합니다. 라고 설명이 나와있습니다.

그렇다면 메모이제이션은 무엇인가

메모이제이션(memoization)은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다. 동적 계획법의 핵심이 되는 기술이다. 메모아이제이션이라고도 한다.

상위 컴포넌트에서 id와 이름를 내려준다고 생각해봅시다.

```

const getID = id => {
    return `${id}는 아이디`
};

const getName = name => {
    return `${name}는 이름`
};


export const Data = (id, name) => {
  const name = getName(name);
  const id = getId(id);

  return (
    <div className="info-wrapper">
        {name}{id}
    </div>
  );
};
```

이 경우 id가 변경되어도 getName과 getId가 실행이되고
name이 변경되어도 두 함수 모두 실행됩니다.

이 중에 id만 변경된 경우를 통해 예시를 들면

id만 변경되었음에도 getName이 실행이되고 name의 정보는 이전 렌더링할 때 name의 정보와 동일합니다.
그렇기 때문에 같은 결과값이 나오게됩고 이러한 불필요한 동작을 줄이기위해 useMemo를 사용합니다.

const name = useMemo(() => getName(name), [name]); 과 같이 사용합니다.

## useCallback

useCallback은 메모리제이션된 함수를 반환하는 것이 핵심인데
컴포넌트는 렌더링 될 때마다 내부에 선언되어 있는 변수 혹은 함수를 모두 재선언하게 되는데,
함수의 상태값이 변경되어 새로운 렌더링이 될 때 상관없는 함수를 재선언하게 된다는 뜻입니다.

그렇기때문에 useCallback은 특정 함수를 새로 선언하지않고 재사용합니다.

```
/사용예시
const exampleCallback = useCallback(함수, 배열);
```

```
//useCallback을 사용하지않을 때
const add = () => x + y;
//사용할 때
const add = useCallback(() => x + y, [x, y]);
```

useCallback에 넣어놓은 x,y가 바뀌지않으면 함수는 재선언되지않습니다.

React.memo()로 함수형 컴포넌트 자체를 감싸면 넘겨 받는 props가 변경되지 않았을 때는 상위 컴포넌트가 메모리제이션된 함수형 컴포넌트(이전에 렌더링된 결과)를 사용하게 된다.
