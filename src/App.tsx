import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AppBarContainer from "./Examples/AppBarWithDrawer/AppBarAndDrawerContainer";
import AppBarContainer from "./Examples/AppBarWithTabs/AppBarWithTabsContainer";
import HelloPage from "./HelloPage/HelloPage";
import TopPage from "./TopPage/TopPage";

interface Props {}

const App: React.FC<Props> = (props: Props) => {
  return (
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
  );
};

export default App;
