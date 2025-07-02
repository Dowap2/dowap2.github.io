# 🧠 Custom HashMap Implementation in JavaScript

## 📌 프로젝트 개요

이 프로젝트는 JavaScript로 문자열 기반의 해시맵(HashMap) 자료구조를 직접 구현하는 과제입니다.  
기존 언어 내장 객체(`Map`, `Object`, `Dictionary` 등)를 사용하지 않고, 배열을 활용하여 원리 중심의 해시맵을 만들어 봅니다.

## 🎯 기능 요구사항

- 문자열 키(key)와 문자열 값(value)을 저장하는 **HashMap 라이브러리** 구현
- **고유한 Hash 함수** 직접 정의 및 적용
- HashMap 자료구조의 기본 동작을 직접 구현
- 내부 구조의 Bucket Size는 해시 충돌을 고려하여 설계
- 구현은 함수 기반 (클래스 없이 작성 가능)

## 🔧 프로그래밍 요구사항

- 모든 함수는 **`hash.js` 단일 파일**에 작성
- `Object`, `Map`, `Set` 등 내장 자료구조 사용 금지
- 배열(Array) 또는 연결 리스트 등 직접 만든 자료구조만 활용

## ⚙️ 구현해야 하는 함수 목록

| 함수명             | 설명                                              |
| ------------------ | ------------------------------------------------- |
| `clear()`          | 전체 맵을 초기화합니다.                           |
| `containsKey(key)` | 주어진 키가 존재하는지 Boolean 값으로 반환합니다. |
| `get(key)`         | 키에 해당하는 값을 반환합니다.                    |
| `isEmpty()`        | 해시맵이 비어있는지 Boolean 값으로 반환합니다.    |
| `keys()`           | 저장된 모든 키를 배열로 반환합니다.               |
| `put(key, value)`  | 키-값 쌍을 해시맵에 추가합니다.                   |
| `remove(key)`      | 해당 키에 대한 값을 삭제합니다.                   |
| `size()`           | 현재 저장된 아이템의 개수를 반환합니다.           |

## 🧮 해시 함수 설계

직접 만든 해시 함수는 다음의 기준을 만족해야 합니다:

- 입력된 문자열을 기반으로 해시 인덱스를 계산
- 충돌을 최소화할 수 있는 분산 설계
- 배열의 범위를 초과하지 않도록 `bucketSize`를 기준으로 모듈 연산 수행

예시 해시 함수:

```js
function hash(key, bucketSize) {
  let hashValue = 0;
  for (let i = 0; i < key.length; i++) {
    hashValue += key.charCodeAt(i) * (i + 1);
  }
  return hashValue % bucketSize;
}
```

## 🪣 내부 자료구조 설계

```js
const bucketSize = 100;
const buckets = new Array(bucketSize); // 각 bucket은 배열 또는 연결 리스트로 충돌 관리
```

충돌 처리 방식은 **Separate Chaining** 방식 (각 버킷에 배열을 두어 충돌된 항목을 함께 저장).

## 📥 사용 예시

```js
put("apple", "fruit");
put("carrot", "vegetable");
put("rose", "flower");

console.log(get("carrot")); // "vegetable"
console.log(containsKey("rose")); // true
console.log(keys()); // ["apple", "carrot", "rose"]
remove("apple");
console.log(size()); // 2
clear();
console.log(isEmpty()); // true
```

## 📎 참고 사항

- 같은 키로 다시 `put()`하면 값을 덮어씌우도록 구현해야 합니다.
- 충돌이 발생할 경우에도 기존 항목을 유지하며 새로운 항목을 올바르게 추가해야 합니다.
- 내부 `buckets` 구조는 수정, 삽입, 삭제 시 일관된 해시 값을 기준으로 접근되어야 합니다.

## ✍️ 개발 목적

이 프로젝트는 단순한 동작 구현을 넘어 **자료구조의 근본 원리를 이해하고, 실제 상황에서 구조를 설계하는 사고력**을 기르는 데 중점을 둡니다.  
단순히 객체를 사용하는 것이 아닌, **저수준에서 데이터 접근 방식**을 이해하는 연습이 포함되어 있습니다.

---

```js
const BUCKET_SIZE = 101;
const buckets = Array.from({ length: BUCKET_SIZE }, () => []);

function hash(key) {
  let hashValue = 0;
  for (let i = 0; i < key.length; i++) {
    hashValue = (hashValue * 31 + key.charCodeAt(i)) % BUCKET_SIZE;
  }
  return hashValue;
}

function put(key, value) {
  const index = hash(key);
  const bucket = buckets[index];
  for (let i = 0; i < bucket.length; i++) {
    const pair = bucket[i];
    if (pair[0] === key) {
      pair[1] = value;
      return;
    }
  }
  bucket.push([key, value]);
}

function get(key) {
  const index = hash(key);
  const bucket = buckets[index];
  for (const [k, v] of bucket) {
    if (k === key) return v;
  }
  return undefined;
}

function remove(key) {
  const index = hash(key);
  const bucket = buckets[index];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket.splice(i, 1);
      return true;
    }
  }
  return false;
}

function containsKey(key) {
  return get(key) !== undefined;
}

function keys() {
  const result = [];
  for (const bucket of buckets) {
    for (const [k, _] of bucket) {
      result.push(k);
    }
  }
  return result;
}

function size() {
  let count = 0;
  for (const bucket of buckets) {
    count += bucket.length;
  }
  return count;
}

function isEmpty() {
  return size() === 0;
}

function clear() {
  for (let i = 0; i < BUCKET_SIZE; i++) {
    buckets[i] = [];
  }
}
```
