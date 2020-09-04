import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import AppBarContainer from "./Examples/AppBarWithDrawer/AppBarAndDrawerContainer";
import AppBarContainer from "./Examples/AppBarWithTabs/AppBarWithTabsContainer";
import HelloPage from "./HelloPage/HelloPage";
import { ThemeContext } from "./theme/ThemeContextProvider";
import ThemeSelector from "./theme/ThemeSelector";
import TopPage from "./TopPage/TopPage";

interface Props {}

const App: React.FC<Props> = (props: Props) => {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const themeName = localStorage.getItem("theme");
    if (themeName !== null) {
      themeContext.handleThemeChange(themeName);
    }
  }, [themeContext]);

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={themeContext.theme}>
        <ThemeProvider theme={themeContext.theme}>
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
              <ThemeSelector />
            </AppBarContainer>
          </Router>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
