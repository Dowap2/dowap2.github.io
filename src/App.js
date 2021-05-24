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

export default App;
