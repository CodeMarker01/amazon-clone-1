import React, { useEffect } from "react";
//CSS
import "./App.css";
//COMPONENTS
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
//ROUTER
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "./firebase";

import { useStateValue } from "./StateProvider";

function App() {
  // DATA LAYER
  const [{ user }, dispatch] = useStateValue();

  // USE EFFECT
  useEffect(() => {
    // will only run once when the app component loads...
    // like IF statement for React
    auth.onAuthStateChanged((authUser) => {
      console.log("day la user tu app.js", authUser);

      if (authUser) {
        // user is signed in
        // gửi dữ liệu logged in lên data layer
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is signed out
        // xóa dữ liệu logged in trên data layer
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  //RETURN
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
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
