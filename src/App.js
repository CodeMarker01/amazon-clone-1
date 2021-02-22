import React from "react";
//CSS
import "./App.css";
//COMPONENTS
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
//ROUTER
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
