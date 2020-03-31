import React from "react";
import { Route, Switch } from "react-router-dom"
import "./App.css";
import Navbar from "./components/mall/NavBar";
import Dashboard from './components/mall/Dashboard'
import Register from "./components/mall/Register";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/register" component={Register}/>
      </Switch>
    </>
  );
}

export default App;
