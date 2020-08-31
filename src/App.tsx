import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import AppBarContainer from "./Examples/AppBarWithDrawer/AppBarAndDrawerContainer";
import AppBarContainer from "./Examples/AppBarWithTabs/AppBarWithTabsContainer";
import HelloPage from "./HelloPage/HelloPage";
import theme from "./theme";
import TopPage from "./TopPage/TopPage";

interface Props {}

const App: React.FC<Props> = (props: Props) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Router>
            <AppBarContainer>
              <Switch>
                <Route path="/hello">
                  <HelloPage />
                </Route>
                <Route path="/">
                  <TopPage />
                </Route>
              </Switch>
            </AppBarContainer>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
