# Object === Object 비교하는 방법

```
const a = {a:1,b:2,c:3}
const b = {a:1,b:2,c:3}
const cloneA = a
```

a === b 그리고 a === cloneA 의 결과는 어떨까? a === b는 false a === cloneA는 true이다

처음에 이것을 보고 이해하지 못했다.

cloneA도 {a:1,b:2,c:3} 일텐데 왜 두 결과가 true와 false로 나뉘는 걸까 생각했다.

그 이유를 cloneA.a = 2를 한 뒤 알 수 있었다.

처음 예상한 결과는

```
const a = {a:1,b:2,c:3}
const b = {a:1,b:2,c:3}
const cloneA = a

cloneA.a = 2

console.log(a) // {a:1,b:2,c:3}
console.log(b) // {a:1,b:2,c:3}
console.log(cloneA) // {a:2,b:2,c:3}
```

였지만

```
const a = {a:1,b:2,c:3}
const b = {a:1,b:2,c:3}
const cloneA = a

cloneA.a = 2

console.log(a) // {a:2,b:2,c:3}
console.log(b) // {a:1,b:2,c:3}
console.log(cloneA) // {a:2,b:2,c:3}
```

가 나왔다

이를 통해 알 수 있는 것은 객체가 변수 a에 담긴 것이 아닌 객체의 주소값을 a가 가진다는 것을 알 수 있었다. 그렇기 때문에 cloneA도 a와 같은 주소값을 가지게 되고 cloneA를 수정하면 이가 a를 호출해도 결과가 같다는 것이다.

그렇다면 object 비교는 어떻게 해야할까

### 1. Object.entries

Object.entries() 메서드는 for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환합니다. (for-in 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점입니다). MDN출처

Object.entries()를 통해 반환되는 배열의 순서는 객체가 정의 된 방법과 관련이 없기에 sort를 해주는 것이 좋습니다.

MDN 예시코드

```
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
```

사용예시

```
const foo = { a: 1, b: 2 };

console.log(Object.entries(foo)); //[ [ 'a', 1 ], [ 'b', 2 ] ]
```

Object.entries 를 사용하여 return되는 값을 toString을 사용하여 문자열로 변경하여 비교하면됩니다.

```
const foo = { a: 1, b: 2 };

console.log(Object.entries(foo).toString()); //a,1,b,2
```

### 2. JSON.stringify

JSON.stringify() 메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환합니다. 선택적으로, replacer를 함수로 전달할 경우 변환 전 값을 변형할 수 있고, 배열로 전달할 경우 지정한 속성만 결과에 포함합니다.

```
const foo = { a: 1, b: 2 };
const bar = { a: 1, b: 2 };

console.log(JSON.stringify(foo)); //{"a":1,"b":2}
console.log(JSON.stringify(bar)); //{"a":1,"b":2}
console.log(JSON.stringify(foo) === JSON.stringify(bar)); //true
```

[참고 블로그](https://velog.io/@junghyunhao/%ea%b0%9d%ec%b2%b4-%ea%b0%92-%eb%b9%84%ea%b5%90%ed%95%98%ea%b8%b0)
