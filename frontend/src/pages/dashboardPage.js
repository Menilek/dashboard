import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import styled from "styled-components";
import DarkThemeProvider from "../DarkThemeProvider";
import DarkThemeToggle from "../DarkThemeToggle";
import IpDashboard from "../components/dashboard";
import Layout from "../components/layout";
import { backgroundColour, textColour } from "../components/themecolours";

const Container = styled.div`
  background-color: ${backgroundColour};
  color: ${textColour};
`;

function DashboardPage() {
  return (
    <div>
      <Provider store={store}>
        <DarkThemeProvider>
          <Container>
            <Layout>
              <DarkThemeToggle />
              <IpDashboard />
            </Layout>
          </Container>
        </DarkThemeProvider>
      </Provider>
    </div>
  );
}

export default DashboardPage;
