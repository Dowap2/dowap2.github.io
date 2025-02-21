# 사용자 Hook에 관하여

지난번 React hook에 관하여 작성한 글에서 이야기를 한 적이 있습니다.

두개 이상의 함수에서 서로 같은 로직을 공유하고자할 때 이를 다른 함수로 분리하며
사용자 훅은 use로 시작하는 함수다! 라고 설명했었습니다.

저는 오늘 사용자 훅을 더 깊게 공부하고 직접 만들어보고자합니다.

먼저 리액트 문서에 있는 예제입니다.

import { useState, useEffect } from 'react';

```
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
  });

  return isOnline;
}
```

위 코드에서는 useFriendStatus라는 사용자 훅을 생성했습니다.
사용자의 친구의 아이디를 인수로 받아서 그 사람이 온라인인지 오프라인인지를 알려주는 함수로 보입니다.

또한 이렇게 생성한 사용자 훅도 마찬가지로 함수의 맨 위에서 실행되어야합니다.
이는 사이드이펙트를 제어하기 위한 방법입니다.

위에 훅의 구조를 간단하게 요약하면

```
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // 과정

  return isOnline;
}
```

이러한 구조가 됩니다.

사용하는 예시를 보면 이는 기존 Hook과 동일합니다.

```
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

```
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

위 둘은 다른 컴포넌트지만 같은 로직을 공유해야하는 경우입니다.
그렇기에 공통된 로직을 사용자 hook으로 설정하여 사용하게 됩니다.

사용자 Hook을 사용할 때 state와 effect는 완전히 독립적이며
같은 로직을 사용하는 컴포넌트끼리의 state는 공유되지않습니다.
