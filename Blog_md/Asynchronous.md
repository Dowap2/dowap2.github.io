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

###### 콜백지옥

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
