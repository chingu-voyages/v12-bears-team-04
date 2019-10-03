import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
