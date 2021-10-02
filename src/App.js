import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Friend from "./components/Friend/Friend";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Friends></Friends>
          </Route>
          <Route path="/home">
            <Friends></Friends>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:id">
            <Friend></Friend>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
