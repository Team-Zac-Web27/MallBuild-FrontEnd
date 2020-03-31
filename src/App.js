import React from "react";
import { Route, Switch } from "react-router-dom"
import "./App.css";
import Navbar from "./components/mall/NavBar";
import Dashboard from './components/mall/Dashboard'
import Register from "./components/mall/Register";
import Login from "./components/mall/Login"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
