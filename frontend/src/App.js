import "./App.css";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import theme from "styled-theming";
import store from "./store";
import DarkThemeProvider from "./DarkThemeProvider";
import DarkThemeToggle from "./DarkThemeToggle";
import IpDashboard from "./components/dashboard.js";

export const backgroundColour = theme("theme", {
  light: "#fff",
  dark: "#000",
});

export const textColour = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColour};
  color: ${textColour};
`;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/ane/dashboard">
          <Provider store={store}>
            <DarkThemeProvider>
              <Container>
                <IpDashboard />
                <DarkThemeToggle />
              </Container>
            </DarkThemeProvider>
          </Provider>
        </Route>
        <Route path="/">
          <Redirect to="/ane/dashboard" />
        </Route>
      </Switch>
    </Router>
  );
}

export default hot(App);
