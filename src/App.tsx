import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UseReducer } from "./pages/UseReducer";
import { UseState } from "./pages/UseState";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ul>
            <li>
              <Link to="/useReducer">useReducer</Link>
            </li>
            <li>
              <Link to="/useState">useState</Link>
            </li>
          </ul>
        </Route>
        <Route exact path="/useReducer">
          <UseReducer />
        </Route>
        <Route exact path="/useState">
          <UseState />
        </Route>
      </Switch>
    </Router>
  );
}
