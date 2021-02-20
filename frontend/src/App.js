import "./App.css";
// import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SplashPage from "./pages/splashPage";
import DashboardPage from "./pages/dashboardPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/ane/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/ane">
          <SplashPage />
        </Route>
        <Route path="/">
          <Redirect to="/ane" />
        </Route>
      </Switch>
    </Router>
  );
}

export default hot(App);
