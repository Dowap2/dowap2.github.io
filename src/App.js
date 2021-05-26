import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { View } from "./View/View";
import { Form } from "./Form/Form";
import { ModalContainer } from "./Modal/ModalContainer";

function App() {
  return (
    <div className="App">
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
      <TestRef />
    </div>
  );
}
const TestRef = () => {
  const [value, setValue] = React.useState(0);
  const valueRef = React.useRef(1);
  return (
    <div>
      <button onClick={e => setValue(value + 1)}>{value}</button>
      <button onClick={e => (valueRef.current += 1)}>{valueRef.current}</button>
    </div>
  );
};

// const ImageProcessing = img => {
//   //이미지 처리과정
// };

// const ServerCommunication = () => {
//   //서버호출
// };

// const End = () => {
//   //끝
// };

// ImageProcessing();
// ServerCommunication();
// End();

// function printNumber(num, callback) {
//   console.log(num);
//   callback();
// }

// function printFinish() {
//   console.log("Finish");
// }

// printNumber(1, printFinish);

// function add(num, callback) {
//   let sum = x + x;
//   console.log(sum);
//   callback(sum);
// }

// add(1, function(result) {
//   add(result, function(result) {
//     add(result, function(result) {
//       console.log(result, "end");
//     });
//   });
// });

//output
// 2
// 4
// 8
// 16 end

export default App;
