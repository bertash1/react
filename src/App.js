import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import SearchPage from "./pages/SearchPage/SearchPage";
import StartPage from "./pages/StartPage/StartPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/search" component={SearchPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
