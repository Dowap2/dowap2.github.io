import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { View } from "./View/View";
import { Form } from "./Form/Form";
import { ModalContainer } from "./Modal/ModalContainer";

function App() {
  return (
    <Router className="App">
      {/* <ModalContainer />
      <Header />
      <Route path="/main">
        <Main />
      </Route>
      <Route path="/view">
        <View />
      </Route>
      <Route path="/write">
        <Form />
      </Route> */}
    </Router>
  );
}

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

function printNumber(num, callback) {
  console.log(num);
  callback();
}

function printFinish() {
  console.log("Finish");
}

printNumber(1, printFinish);

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

function getData() {
  return new Promise(function(resolve, reject) {
    var data = 100;
    if (data === Number) {
      resolve(data);
    } else {
      reject(new Error("Data is not Number"));
    }
  });
}

// reject()의 결과 값 Error를 err에 받음
getData()
  .then(function(resolvedData) {
    console.log(resolvedData); // 100
  })
  .catch(function(err) {
    console.log(err); // Error: Request is failed
  });

export default App;
