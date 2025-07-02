# 이벤트 로그 분석 가이드

## 기본 이벤트 구조

```json
{
  "timestamp": "2025-06-30T20:33:00Z",
  "userId": "user_12345",
  "event": "SCREEN_VIEW",
  "screen": "LOGIN",
  "action": null,
  "meta": {
    "from": null,
    "to": null,
    "adId": null,
    "scrollDepth": null,
    "scrollCount": null,
    "value": null,
    "toggle": null
  }
}
```

## 이벤트 유형 설명

| 이벤트 타입   | 설명                                    |
| ------------- | --------------------------------------- |
| SCREEN_VIEW   | 화면 진입 시 발생 (푸시 또는 전환 포함) |
| SCREEN_PUSH   | 새로운 화면을 위에 쌓는 경우            |
| BUTTON_CLICK  | 버튼 클릭                               |
| SCROLL        | 스크롤 발생 시 기록                     |
| INPUT_SAVE    | 숫자값 또는 설정 저장                   |
| TOGGLE_SELECT | ON/OFF 설정 선택                        |

---

## 1. 하루 동안 로그인 화면에 접속한 사용자 수 (중복 제거)

```js
const uniqueLoginUsers = new Set(
  logs
    .filter((log) => log.event === "SCREEN_VIEW" && log.screen === "LOGIN")
    .map((log) => log.userId)
);
```

---

## 2. <이벤트 광고> 화면을 가장 많이 본 사용자

```js
const adViewCounts = logs
  .filter((log) => log.event === "SCREEN_VIEW" && log.screen === "EVENT_AD")
  .reduce((acc, log) => {
    acc[log.userId] = (acc[log.userId] || 0) + 1;
    return acc;
  }, {});
```

---

## 3. <메인 화면>을 가장 많이 보는 시간대 (시간 단위 그룹핑)

```js
const hourCounts = logs
  .filter((log) => log.screen === "MAIN")
  .reduce((acc, log) => {
    const hour = new Date(log.timestamp).getHours();
    acc[hour] = (acc[hour] || 0) + 1;
    return acc;
  }, {});
```

---

## 4. 메뉴 1-2-3 화면 간 가장 많이 전환하는 경로

```js
const menuScreens = ["MAIN", "MENU_1", "MENU_2", "MENU_3"];

const menuTransitions = logs
  .filter(
    (log) =>
      log.event === "SCREEN_VIEW" &&
      log.meta?.from &&
      menuScreens.includes(log.meta.from) &&
      menuScreens.includes(log.screen)
  )
  .reduce((acc, log) => {
    const key = `${log.meta.from} → ${log.screen}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
```

---

## 5. 지난 일주일 동안 메뉴 2 마지막 화면에서 값을 저장하고 <메인 화면>으로 이동한 횟수

```js
const saveEvents = logs.filter(
  (log) => log.event === "INPUT_SAVE" && log.screen === "MENU_2_DETAIL"
);

let count = 0;
for (const save of saveEvents) {
  const mainScreenAfterSave = logs.find(
    (log) =>
      log.userId === save.userId &&
      log.event === "SCREEN_VIEW" &&
      log.screen === "MAIN" &&
      new Date(log.timestamp) > new Date(save.timestamp) &&
      new Date(log.timestamp) - new Date(save.timestamp) < 5000
  );

  if (mainScreenAfterSave) count++;
}
```

---

## 6. 하루 동안 메뉴 3 마지막 화면에서 ON/OFF 설정을 선택한 사용자 수

```js
const start = new Date("2025-06-30T00:00:00Z");
const end = new Date("2025-07-01T00:00:00Z");

const userIds = new Set(
  logs
    .filter(
      (log) =>
        log.event === "TOGGLE_SELECT" &&
        log.screen === "MENU_3_DETAIL_2" &&
        new Date(log.timestamp) >= start &&
        new Date(log.timestamp) < end
    )
    .map((log) => log.userId)
);
```

---

## 7. 최근 일주일 기간에 가장 화면 노출이 적은 화면

```js
const oneWeekAgo = new Date("2025-06-23T00:00:00Z");
const now = new Date("2025-06-30T00:00:00Z");

const screenCounts = logs
  .filter(
    (log) =>
      log.event === "SCREEN_VIEW" &&
      new Date(log.timestamp) >= oneWeekAgo &&
      new Date(log.timestamp) < now
  )
  .reduce((acc, log) => {
    acc[log.screen] = (acc[log.screen] || 0) + 1;
    return acc;
  }, {});
```
