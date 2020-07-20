import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Downloads from "./screens/Downloads";
import DriveHelp from "./screens/DriveHelp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/download" component={Downloads} />
        <Route exact path="/drivehelp" component={DriveHelp} />
      </Switch>
    </Router>
  );
}

export default App;
