import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import AllChallenges from "./pages/AllChallenges";
import MyChallenges from "./pages/MyChallenges";
import ChallengePage from "./pages/ChallengePage";

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={LandingPage} />
				<Route path="/SignUp" component={SignUp} />
				<Route path="/MyChallenges" component={MyChallenges} />
				<Route path="/Challenges" component={AllChallenges} />
				<Route path="/ChallengePage" component={ChallengePage} />
			</div>
		</Router>
	);
}

export default App;
