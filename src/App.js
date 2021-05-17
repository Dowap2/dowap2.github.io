import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { View } from "./View/View";
import { Form } from "./Form/Form";

function App() {
  return (
    <Router className="App">
      <Header />
      <Route path="/main">
        <Main />
      </Route>
      <Route path="/view">
        <View />
      </Route>
      <Route path="/write">
        <Form />
      </Route>
    </Router>
  );
}

export default App;
