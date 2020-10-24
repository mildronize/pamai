import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/home";
import DataTablePage from "../pages/data-table";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route exact path="/data-table" component={DataTablePage} />

      </Switch>
    </Router>
  );
}

export default App;
