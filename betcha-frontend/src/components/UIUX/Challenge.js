import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ExtendIcon from "./ExtendIcon.js";

const ChallengeDisplay = styled.div`
	background-color: #a6b0ba;
	min-height: 20vh;
	border-radius: 10vh 0 0 10vh;
	overflow: hidden;
	margin: 5px auto;
	display: flex;
`;

const ImgContainer = styled.div`
	background: ${props => `url(${props.url})`};
	min-height: inherit;
	width: 30%;
	flex-shrink: 1;
	background-size: cover;
`;

const ChallengeBody = styled.div`
	display: flex;
	flex-direction: Column;
	color: #616e7d;
	flex-shrink: 6;
	padding: 5px;
	h1 {
		font-size: 1rem;
		text-transform: uppercase;
		font-weight: 800;
	}
	h3 {
		font-size: 0.8rem;
		font-weight: 600;
	}
	.more {
		text-transform: uppercase;
		display: flex;
		align-items: center;
	}
	svg {
		transform: rotate(-90deg) scale(0.2);
	}
`;

const Challenge = props => {
	console.log(props);
	return (
		<ChallengeDisplay>
			<ImgContainer url={props.challengeImgUrlSm} />
			<ChallengeBody>
				<h1>{props.title}</h1>
				<h3>{props.subTitle}</h3>
				<div className="more">
					More
					<ExtendIcon />
				</div>
			</ChallengeBody>
		</ChallengeDisplay>
	);
};

Challenge.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default Challenge;
