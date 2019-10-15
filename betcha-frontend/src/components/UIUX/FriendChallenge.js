import React from "react";

const FriendChallenge = props => {
	return (
		<div className="friendChallengeBox">
			<button onClick={() => props.close()}>
				<span>x</span>
			</button>
			<form onSubmit={() => alert("friend challenge submit")}>
				<label htmlFor="email">
					<input type="text" placeholder="friend's email" />
				</label>
				<label htmlFor="messengerId">
					<input type="text" placeholder="friend's messenger ID" />
				</label>
				<label htmlFor="facebook">
					<input type="text" placeholder="friend's facebook ID" />
				</label>
				<button type="submit">Game On</button>
			</form>
		</div>
	);
};

export default FriendChallenge;
