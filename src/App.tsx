import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UseReducer } from "./pages/UseReducer";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Link to="/useReducer">useReducer</Link>
          <Link to="/useState">useState</Link>
        </Route>
        <Route exact path="/useReducer">
          <UseReducer />
        </Route>
        <Route exact path="/userState"></Route>
      </Switch>
    </Router>
  );
}
