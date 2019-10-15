import React from "react";

const ChallengeIconContainer = props => {
	console.log(props);
	return (
		<div className="challengeContainer">
			<button>
				<img src={props.imgSrc} alt={props.name} />
			</button>
		</div>
	);
};

export default ChallengeIconContainer;
