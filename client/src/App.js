import './App.css';
// import { Provider } from "react-redux";
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FidelPage from './pages/fidelPage';
import SplashPage from './pages/splashPage';
import AmharicPage from './pages/amharicPage';
import DashboardPage from './pages/dashboardPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/ane/dashboard">
          <DashboardPage />
        </Route>
        <Route exact path="/ane/learn-amharic">
          <AmharicPage />
        </Route>
        <Route exact path="/ane/amharic-fidel">
          <FidelPage />
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
