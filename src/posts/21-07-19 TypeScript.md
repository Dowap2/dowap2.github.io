# TypeScript에 관하여

타입스크립트 말그대로 자바스크립트에 타입을 추가한 언어입니다.
언어라는 표현이 정확한지는 모르겠습니다.
타입스크립트는 기존 자바스크립트의 문제점을 해결하기 위해 나타났습니다.

### 기존 자바스크립트는 어떠한 문제가 있었는가?

기존 자바스크립트는 규모가 커질수록 디버그와 테스트를 하는 부분이 힘들어져 이러한 부분을
개선하기 위해 타입스크립트를 사용하게되었습니다.

##### 어떻게 해결하는가?

타입스크립트는 컴파일 단계에서 오류를 찾을 수 있습니다.
ES6 이상 자바스크립트 문법을 지원할 수 있습니다.
정적 타입을 사용하기 때문에 코드를 입력하는 동안에 오류를 체크할 수 있습니다.

```
//add.js

function add(a,b){
    console.log(a+b);
}

add(10,10) //20
add('10','10') //'1010'
```

```
//add.ts

function add(a:number , b:number){
    console.log(a+b);
}

add(10,10) //20
add('10','10') //error: '10' is not number
```

### TypeScript의 타입들

Boolean(true와 false)

Number(1,2,3 ...)

String("문자열")

Object({a:number, b:number})

Array([1,2,3],["배열1","배열2"])

Tuple(튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미합니다.)
ex)const tuple: [string, number] = ["문자", 1]

Enum

Any(모든타입)

Void(변수에는 null과 undefined만 가능 함수에 할당시 반환값없는 함수를 의미)

Never(끝까지 실행되지않는다는 의미)

#### type vs interface

타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부에 따라 갈리게 됩니다.
인터페이스는 확장이 가능하고 타입 별칭은 확장이 불가능합니다.

좋은 소프트웨어는 언제나 확장에 용이해야한다는 원칙에 따라 확장이 가능한 interface로 선언하는 것을 추천합니다.

```
// 일반 사용예제
interface ExampleType {
    name: string
    age: number
}

const example: ExampleType = {
    name: "oh",
    age: 21
}

type Example2Type {
    name: string
    age: number
}

const example: Example2Type = {
    name: "oh",
    age: 21
}

// 확장 방법

interface ExampleType {
    name: string
    age: number
}

interface ExampleType extends AddType {
    phone: number
}

type ExampleType2 {
    name: string
    age: number
}

type AddType = ExampleType & {
    phone: number
}

```

Type을 확장하기 위해서는 새로운 타입에 기존의 타입을 추가하는 방식으로 해야한다.
