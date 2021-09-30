import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Link to="/useReducer">useReducer</Link>
          <Link to="/useState">useState</Link>
        </Route>
        <Route path="/useReducer"></Route>
        <Route path="/userState"></Route>
      </Switch>
    </Router>
  );
}
