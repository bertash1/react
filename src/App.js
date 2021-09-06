import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import FirstPage from "./pages/FirstPage/FirstPage";
import SecondPage from "./pages/SecondPage/SecondPage";
import StartPage from "./pages/StartPage/StartPage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/first" component={FirstPage} />
        <Route path="/second" component={SecondPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
