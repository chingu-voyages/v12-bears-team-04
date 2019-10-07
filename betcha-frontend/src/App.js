import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import AllChallenges from "./pages/AllChallenges";
import MyChallenges from "./pages/MyChallenges";

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/" component={LandingPage} />
				<Route path="/SignUp" component={SignUp} />
				<Route path="/MyChallenges" component={MyChallenges} />
				<Route path="/Challenges" component={AllChallenges} />
			</div>
		</Router>
	);
}

export default App;
