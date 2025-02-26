# 📅 Moment.js 소개 및 사용법

## 🧐 Moment.js란?

**Moment.js**는 날짜 및 시간 관련 작업을 쉽게 할 수 있도록 도와주는 JavaScript 라이브러리입니다.  
날짜 형식 변환, 유효성 검사, 조작 및 화면 출력 등의 기능을 간편하게 사용할 수 있습니다.

---

## 📦 설치 방법

### **1️⃣ NPM을 이용한 설치**

```sh
npm install moment
```

### **2️⃣ Yarn을 이용한 설치**

```sh
yarn add moment
```

---

## 🚀 기본 사용법

### **Moment.js import**

```js
import moment from "moment";

const time = moment();
console.log(time); // 현재 날짜 및 시간 출력
```

### **📌 날짜 포맷 변경**

Moment.js는 `format()` 메서드를 사용하여 날짜를 다양한 형식으로 변환할 수 있습니다.

#### **🇰🇷 한국어 포맷 설정**

```js
import moment from "moment";
import "moment/locale/ko"; // 한국어 로케일 추가

moment.locale("ko"); // 로케일을 한국어로 설정

console.log(moment().format("LT")); // 오후 8:35
console.log(moment().format("LTS")); // 오후 8:35:50
console.log(moment().format("L")); // 2024.02.21.
console.log(moment().format("l")); // 2024.2.21.
console.log(moment().format("LL")); // 2024년 2월 21일
console.log(moment().format("ll")); // 2024년 2월 21일
console.log(moment().format("LLL")); // 2024년 2월 21일 오후 8:35
console.log(moment().format("LLLL")); // 2024년 2월 21일 수요일 오후 8:35
```

#### **🇺🇸 영어 포맷 설정**

```js
moment.locale("en"); // 로케일을 영어로 설정

console.log(moment().format("LT")); // 8:35 PM
console.log(moment().format("LTS")); // 8:35:50 PM
console.log(moment().format("L")); // 02/21/2024
console.log(moment().format("l")); // 2/21/2024
console.log(moment().format("LL")); // February 21, 2024
console.log(moment().format("ll")); // Feb 21, 2024
console.log(moment().format("LLL")); // February 21, 2024 8:35 PM
console.log(moment().format("LLLL")); // Wednesday, February 21, 2024 8:35 PM
```

---

## 🔄 `moment.locale()` 사용법 (동적 언어 변경)

Moment.js의 기본 로케일은 `en`(영어)입니다.  
언어 설정을 동적으로 변경하려면 아래와 같이 사용할 수 있습니다.

### **🔹 예제: Redux를 사용하여 언어 변경**

```js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/ko"; // 한국어 로케일 추가
import "moment/locale/en"; // 영어 로케일 추가

const DateComponent = () => {
  const language = useSelector(state => state.languageState.language);
  const [date, setDate] = useState(moment().format("llll"));

  useEffect(() => {
    // 언어 설정 변경
    moment.locale(language === "en" ? "en" : "ko");
  }, [language]);

  useEffect(() => {
    // 1분마다 날짜 업데이트
    const interval = setInterval(() => {
      setDate(moment().format("llll"));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return <p>{date}</p>;
};
```

✅ `language` 값이 변경될 때마다 `moment.locale()`이 업데이트되어 날짜 포맷이 자동으로 변경됩니다.  
✅ `setInterval()`을 사용하여 1분마다 최신 날짜 및 시간을 반영합니다.

---

## 🛠️ 추가 기능

### 1️⃣ **날짜 더하기/빼기**

```js
console.log(
  moment()
    .add(7, "days")
    .format("YYYY-MM-DD")
); // 7일 후
console.log(
  moment()
    .subtract(1, "month")
    .format("YYYY-MM-DD")
); // 1개월 전
```

### 2️⃣ **두 날짜 간의 차이 계산**

```js
const date1 = moment("2024-02-01");
const date2 = moment("2024-02-21");

console.log(date2.diff(date1, "days")); // 20일 차이
```

### 3️⃣ **현재 날짜 확인**

```js
console.log(moment().isBefore("2024-12-31")); // true
console.log(moment().isAfter("2023-12-31")); // true
console.log(moment().isSame("2024-02-21", "day")); // true (오늘 날짜 비교)
```

---

## ⚠️ Moment.js 사용 시 주의할 점

✅ **Moment.js는 성능 최적화가 필요할 수 있습니다.**  
✅ **권장되는 대체 라이브러리**

- `date-fns`: 더 가벼운 대체 라이브러리 (`npm install date-fns`)
- `luxon`: Moment.js 개발팀에서 추천하는 대체 라이브러리 (`npm install luxon`)

---

## 🎯 결론

Moment.js는 여전히 강력한 날짜 처리 라이브러리입니다.  
하지만 최신 프로젝트에서는 더 가벼운 `date-fns` 또는 `luxon`을 고려하는 것도 좋은 선택입니다. 🚀
