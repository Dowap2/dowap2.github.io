# 비동기 처리에 관하여

비동기처리에 대하여 공부하면서 이 글을 쓰고자합니다.

먼저 동기적 처리 모델은 직렬적으로 작업을 수행하기 때문에 작업이 순차적으로 실행되며
어떠한 작업이 실행중이면 그 이후 작업은 실행되지못하고 대기하게됩니다.

이를 비동기로 처리하게 되면 대기하지않고 바로 다음 작업을 진행할 수 있게 됩니다.

간단한 작업에서는 크게 차이가 없지만 오래걸리는 작업인 이미지 처리와 서버와의 통신을 하기 위해
다른 작업을 할 수 없게되는 경우 작업을 전부 처리하는데에는 많은 시간이 걸립니다.

```
const ImageProcessing = img => {
  //이미지 처리과정
};

const ServerCommunication = () => {
  //서버호출
};

const End = () => {
  //끝
};

ImageProcessing();
ServerCommunication();
End();
}
```

위와 같이 작업되는 경우 이미지 처리를 하는데 시간을 소요하고 서버호출을 하는데 시간을 소요하게 됩니다.

하지만 이를 비동기적으로 처리하게 된다면 작업의 흐름을 멈추지않고 동시에 작업을 할 수 있기때문에 더 빠릅니다.
위와 같이 서버요청 뿐만이 아닌 암호화 작업와 같은 오래걸리는 작업, setTimeout과 같은 메소드를 이용한 작업 등이 비동기적으로 처리됩니다.

## 비동기 처리방식

비동기 처리방식은 여러가지가 있는데 Callback, promise, async & await 방식이 있습니다.

#### Callback 함수

Callback 함수는 다른 함수의 매개변수로 함수를 전달하고, 함수 내에서 다시 함수를 다시 호출하는 방식을 말합니다.
함수를 호출하여 객체에 작업을 시키고 기다리지않고 바로 다음 함수에서 작업을 시작하는것입니다.

이때문에 비동기 처리방식으로 활용됩니다.

하지만 가독성이 매우 떨어지고 에러처리시 모든 콜백에서 각각 에러핸들링을 해야합니다.

```
function printNumber(num, callback) {
  console.log(num);
  callback();
}

function printFinish() {
  console.log("Finish");
}

printNumber(1, printFinish);
```

#### 콜백지옥

```
function add(num, callback) {
  let sum = x + x;
  console.log(sum);
  callback(sum);
}

add(1, function(result) {
  add(result, function(result) {
    add(result, function(result) {
      console.log(result, "end");
    });
  });
});

//output
// 2
// 4
// 8
// 16 end
```

이처럼 콜백안에 콜백이 호출되는 콜백지옥이 생길 수 있으니 유의해야합니다.

#### 해결방법은 Promise?

[Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise) 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.

Promise는 3가지의 상태를 가지고있습니다.
대기(pending): 이행하거나 거부되지 않은 초기 상태.
이행(fulfilled): 연산이 성공적으로 완료됨.
거부(rejected): 연산이 실패함.

먼저 new Promise() 와 같이 호출하게 되면 대기 상태가 됩니다.
new Promise를 선언할 때 콜백함수를 선언할 수 있습니다. 콜백함수의 인자는 resolve와 reject입니다.

이행 상태가 되면 then()을 이용하여 결과를 확인할 수 있습니다. error가 발생한다면 거부 상태가 되며 catch()에서 에러처리를 할 수 있습니다.

```
function getData() {
  return new Promise(function(resolve, reject) {
    const data = 1;
    if (typeof data == "number") {
      resolve(data);
    } else {
      reject(new Error("Data is not Number"));
    }
  });
}

getData()
  .then(function(resolvedData) {
    console.log(resolvedData); // 1
  })
  .catch(function(err) {
    console.log(err); //Data is not Number
  });

getData();
```

위 코드처럼 데이터의 타입이 number라면 then()이 실행되며 아닌경우 catch에서 에러를 호출 할 수 있습니다.

###### Promise.all

Promise.all은 여러 프로미스의 결과를 집계할 때 유용하게 사용할 수 있습니다.
주어진 프로미스 중 하나라도 거부하면, 다른 프로미스의 이행 여부에 상관없이 첫 번째 거부 이유를 사용해 거부합니다. [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

```
const Promise1 = Promise.resolve("first");
const Promise2 = "second";
const Promise3 = new Promise(resolve => {
  resolve("third");
});

Promise.all([Promise1, Promise2, Promise3]).then(([first, second, third]) => {
  console.log(first, second, third);
});
```
