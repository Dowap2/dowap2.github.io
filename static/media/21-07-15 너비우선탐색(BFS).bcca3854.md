# 너비우선탐색

## 그래프 탐색

너비우선탐색에 대하여 알아보기 전에
그래프 탐색이라는 것을 알아볼 필요가 있습니다.

그래프 탐색은 하나의 노드로부터 시작하여 차례대로 모든 노드를 한 번씩 방문하는 것입니다.

방식은 너비우선탐색과 깊이우선탐색이 있습니다.

## 너비우선탐색

너비 우선 탐색은 임의의 노드에서 시작하여 인접한 노드를 먼저 탐색하는 방법입니다.
시작 노드에서 가장 가까운 노드를 먼저 방문하고 가장 먼 노드를 나중에 방문하는 방식입니다.

두 노드 사이의 최단 경로 혹은 임의의 경로를 찾고 싶을 때 이 방법을 선택할 수 있습니다.

## 특징

- 너비 우선 탐색은 방문한 노드를 저장한다음 꺼내어 사용할 수 있도록 선입선출 구조의 큐를 사용합니다.
- 방문한 노드의 방문 여부를 무조건 검사해야합니다.
  - 더 이상 방문하지않은 노드가 없을 때까지 너비 우선 탐색을 진행하기때문에 방문 여부를 체크하지않으면 무한루프에 빠질 수 있기 때문입니다.

## 관련 문제

프로그래머스 [가장 먼 노드]

```js
function solution(n, edge) {
  return bfs(1, edge, n);
}

const bfs = (start, array, end) => {
  const visited = new Array(end + 1).fill(false);
  const distance = new Array(end + 1).fill(0);
  const queue = [start];

  visited[start] = true;

  while (queue.length) {
    const head = queue.shift();
    const dis = distance[head] + 1;
    console.log(head);

    for (const node of array) {
      if (node[0] === head && !visited[node[1]]) {
        console.log(1, node[1]);
        queue.push(node[1]);
        console.log(queue);
        visited[node[1]] = true;
        distance[node[1]] = dis;
      } else if (node[1] === head && !visited[node[0]]) {
        queue.push(node[0]);
        visited[node[0]] = true;
        distance[node[0]] = dis;
      }
    }
  }
  const maxDistance = Math.max.apply(null, distance);
  return distance.filter(num => num === maxDistance).length;
};
```
