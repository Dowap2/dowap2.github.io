###### 객체 비교는 기본적으로 참조값을 비교하므로, 같은 내용의 객체라도 ===로 비교하면 false가 될 수 있습니다. Object.entries()나 JSON.stringify()를 사용하여 객체의 속성을 비교하는 방법이 있으며, 각 방법은 속성 순서와 데이터 구조에 따라 장단점이 있습니다.

##### JavaScript

# Object === Object 비교하는 방법

## 객체 비교의 이해

```javascript
const a = { a: 1, b: 2, c: 3 };
const b = { a: 1, b: 2, c: 3 };
const cloneA = a;

console.log(a === b); // false
console.log(a === cloneA); // true
```

위 결과에서 `a === b`는 `false`, `a === cloneA`는 `true`가 나옵니다.  
처음에는 `cloneA`도 `{ a: 1, b: 2, c: 3 }`와 같기 때문에 예상과 다른 결과가 나올 수 있습니다.

이해를 돕기 위해 아래와 같이 값을 변경해 봅니다.

```javascript
cloneA.a = 2;

console.log(a); // { a: 2, b: 2, c: 3 }
console.log(b); // { a: 1, b: 2, c: 3 }
console.log(cloneA); // { a: 2, b: 2, c: 3 }
```

이를 통해 **객체가 변수에 직접 담기는 것이 아니라, 객체의 메모리 주소(참조값)가 변수에 저장**된다는 사실을 알 수 있습니다.  
즉, `cloneA`는 `a`와 같은 주소값을 가지므로 `cloneA`를 수정하면 `a`도 같이 변경됩니다.

반면, `b`는 `a`와 동일한 속성을 갖고 있지만, 다른 객체이므로 메모리 주소가 다르고 `a === b`는 `false`가 됩니다.

---

## 객체 비교 방법

### 1. Object.entries() 활용

`Object.entries()` 메서드는 객체의 `key-value` 쌍을 배열로 변환하여 반환합니다.

> 참고: `for...in` 루프와 달리, `Object.entries()`는 **프로토타입 체인에 속한 속성은 포함하지 않습니다.**

**MDN 예시 코드**

```javascript
const object1 = {
  a: "somestring",
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// 예상 출력 (순서는 보장되지 않음):
// "a: somestring"
// "b: 42"
```

**사용 예시**

```javascript
const foo = { a: 1, b: 2 };
console.log(Object.entries(foo));
// 출력: [ [ 'a', 1 ], [ 'b', 2 ] ]

console.log(Object.entries(foo).toString());
// 출력: "a,1,b,2"
```

이를 활용해 두 객체를 비교할 수 있습니다.

```javascript
const isEqual = (obj1, obj2) =>
  Object.entries(obj1)
    .sort()
    .toString() ===
  Object.entries(obj2)
    .sort()
    .toString();

const foo = { a: 1, b: 2 };
const bar = { a: 1, b: 2 };

console.log(isEqual(foo, bar)); // true
```

---

### 2. JSON.stringify() 활용

`JSON.stringify()` 메서드는 객체를 JSON 문자열로 변환합니다.

```javascript
const foo = { a: 1, b: 2 };
const bar = { a: 1, b: 2 };

console.log(JSON.stringify(foo)); // '{"a":1,"b":2}'
console.log(JSON.stringify(bar)); // '{"a":1,"b":2}'

console.log(JSON.stringify(foo) === JSON.stringify(bar)); // true
```

이 방법은 객체가 **같은 속성과 값**을 가지면 문자열로 변환된 결과도 같아 비교할 수 있습니다.

> 단, `JSON.stringify()`는 속성 순서에 따라 다른 결과를 반환할 수 있으므로,  
> 속성 순서를 정렬하는 것이 정확한 비교를 위해 필요할 수 있습니다.

---

## 결론

### ✅ 객체 비교 방법 정리

| 방법                      | 장점                      | 단점                                                 |
| ------------------------- | ------------------------- | ---------------------------------------------------- |
| `===` (엄격 비교)         | 참조값 비교이므로 빠름    | 같은 속성을 가진 객체라도 다른 주소를 가지면 `false` |
| `Object.entries()` + 정렬 | 순서를 정렬하여 비교 가능 | `toString()`을 사용해야 함                           |
| `JSON.stringify()`        | 직관적이고 간단함         | 속성 순서가 다르면 `false`가 될 수 있음              |

객체 비교가 필요할 때, **데이터 구조와 목적에 맞는 방법**을 선택하면 됩니다. 🚀
