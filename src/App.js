import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main"
import Tab from "./components/Tab"
function App() {
  return <Router>
    <Switch>
      <Route path="/best">
        <Tab />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  </Router>
}

export default App;
