import React from "react";
import PropTypes from "prop-types";

const Challenge = props => {
	return (
		<div className="individualChallengeDisplay">
			<h1>{props.title}</h1>
			<h2>{props.subTitle}</h2>
			<ul>
				{props.rules.map((v, i) => {
					return <li key={`${props.id}-rule#${i}`}>{v}</li>;
				})}
			</ul>
			<img src={props.challengeImgUrlSm} alt={props.title}></img>
		</div>
	);
};

Challenge.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default Challenge;
