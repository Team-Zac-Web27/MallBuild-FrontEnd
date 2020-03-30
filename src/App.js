import React from "react";
import "./App.css";
import Navbar from "./components/mall/NavBar";
import Dashboard from './components/mall/Dashboard'

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <h1> hello world</h1>
        <Dashboard/>
      </div>
    </>
  );
}

export default App;
