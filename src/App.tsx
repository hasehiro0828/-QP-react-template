import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBarAndDrawerContainer from "./Examples/AppBarWithDrawer/AppBarAndDrawerContainer";
// import AppBarAndDrawerContainer from "./Examples/AppBarWithTabs/AppBarAndDrawerContainer";
import HelloPage from "./HelloPage/HelloPage";
import TopPage from "./TopPage/TopPage";

interface Props {}

const App: React.FC<Props> = (props: Props) => {
  return (
    <Router>
      <AppBarAndDrawerContainer>
        <Switch>
          <Route path="/hello">
            <HelloPage />
          </Route>
          <Route path="/">
            <TopPage />
          </Route>
        </Switch>
      </AppBarAndDrawerContainer>
    </Router>
  );
};

export default App;
