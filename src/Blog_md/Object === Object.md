```
const a = {a:1,b:2,c:3}
const b = {a:1,b:2,c:3}
const cloneA = a
```

a === b 그리고 a === cloneA 의 결과는 어떨까?
a === b는 false
a === cloneA는 true이다

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

이를 통해 알 수 있는 것은 객체가 변수 a에 담긴 것이 아닌 객체의 주소값을 a가 가진다는 것을 알 수 있었다.
그렇기 때문에 cloneA도 a와 같은 주소값을 가지게 되고 cloneA를 수정하면 이가 a를 호출해도 결과가 같다는 것이다.

그렇다면 object 비교는 어떻게 해야할까

JSON.stringify를 사용하면 이를 해결할 수 있다.

JSON.stringify는 객체 배열 문자열 등을 모두 문자열로 묶어주는 역할을 하기때문에 두 객체를 문자열로 묶은 뒤 비교하면된다.

JSON.stringify(a)===JSON.stringify(b)

그렇다면 코드를 짜다가 객체를 복사할 일이 있을 때는 어떻게 해야 객체를 복사하고 복사된 객체를 변경해도 원래 객체를 변경하지않을 수 있을까?

const cloneObj = obj => JSON.parse(JSON.stringify(obj))
const cloneA = cloneObj(a)

이를 통해 cloneA에 a를 복사하면 문자열로 변경되었다가 다시 객체로 반환하기때문에 a에 대한 참조는 없어집니다.
하지만 성능이 좋지않다고합니다.
