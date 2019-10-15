import React from "react";

const SocialIcon = props => {
	return (
		<button onClick={() => props.action}>
			<img src={props.imgSrc} alt="props.name" />
		</button>
	);
};

export default SocialIcon;
