###### React의 사용자 Hook은 컴포넌트 간 로직을 공유하고 재사용할 수 있도록 도와주는 강력한 도구입니다. 공통 로직을 분리하여 코드의 중복을 줄이고, 각 컴포넌트에서 독립적인 상태를 유지하며 가독성을 향상시킬 수 있습니다.

##### JavaScript,React

# React 사용자 Hook에 관하여

지난번 **React Hook**에 관한 글에서 이야기한 적이 있습니다.

**두 개 이상의 함수에서 같은 로직을 공유**하고자 할 때, 이를 **다른 함수로 분리**합니다.  
또한, **사용자 Hook은 `use`로 시작하는 함수**입니다!

오늘은 사용자 Hook을 더 깊이 공부하고, 직접 만들어보겠습니다.

---

## 사용자 Hook 예제 (React 공식 문서)

아래는 **React 공식 문서**에 있는 예제입니다.

```jsx
import { useState, useEffect } from "react";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  }, [friendID]); // 의존성 배열 추가

  return isOnline;
}
```

### 📌 코드 설명

- `useFriendStatus`라는 **사용자 Hook**을 생성했습니다.
- **사용자의 친구 ID(friendID)**를 받아, **해당 친구의 온라인 상태**를 반환합니다.
- `useState(null)`: 온라인 상태를 저장하는 상태 변수
- `useEffect()`:
  - `ChatAPI.subscribeToFriendStatus()`를 이용해 상태를 구독합니다.
  - 컴포넌트가 언마운트될 때 `unsubscribe`하여 **메모리 누수 방지**.

### ✅ 사용자 Hook 규칙

1. **항상 `use`로 시작해야 합니다.**
2. **반드시 함수의 최상단에서 실행해야 합니다.**
   - 조건문, 반복문 내부에서 실행하면 안 됩니다.
   - **사이드 이펙트(side-effect)를 제어하기 위한 방법입니다.**

---

## 사용자 Hook 구조

위 Hook의 구조를 간단히 표현하면 다음과 같습니다.

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // 비즈니스 로직 처리

  return isOnline;
}
```

---

## 사용자 Hook 사용 예시

사용자 Hook은 기존의 React Hook과 **동일한 방식**으로 사용됩니다.

### 1️⃣ 친구의 상태를 표시하는 컴포넌트

```jsx
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
```

---

### 2️⃣ 친구 목록을 표시하는 컴포넌트

```jsx
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
```

---

## 🧐 사용자 Hook의 장점

위 두 개의 컴포넌트는 **다른 역할을 하지만, 동일한 로직을 사용**해야 합니다.  
이럴 때 **공통된 로직을 사용자 Hook으로 분리**하면 다음과 같은 장점이 있습니다.

✅ **중복 코드 감소**  
✅ **재사용성이 높아짐**  
✅ **컴포넌트가 더 가독성이 좋아짐**

---

## 사용자 Hook의 독립성

사용자 Hook을 사용할 때, `state`와 `effect`는 **완전히 독립적**입니다.  
즉, **같은 Hook을 사용하는 컴포넌트라도 state를 공유하지 않습니다.**

---

## 🎯 정리

- **사용자 Hook은 `use`로 시작하는 함수**입니다.
- **공통 로직을 분리하여 재사용 가능**합니다.
- **각 컴포넌트에서 독립적인 상태(state)를 유지**합니다.
- **중복 코드가 줄어들고, 가독성이 향상됩니다.**

이제 직접 사용자 Hook을 만들어보고 활용해보세요! 🚀
