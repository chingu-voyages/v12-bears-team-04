import React from "react";
import styled from "styled-components";

const TickBox = styled.div`
	border: solid black 2px;
	border-radius: 25%;
	width: 1.2rem;
	height: 1.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.2rem;
`;

const TickBoxChecked = styled.div`
	width: 80%;
	height: 80%;
	border-radius: 50%;
	fill: black;
`;

const TickBoxTick = styled.div``;

const CheckBox = props => {
	return (
		<TickBox
			checked={props.checked}
			onPointerDown={() => props.setChecked(!props.checked)}
		>
			{props.checked && (
				<TickBoxChecked>
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 318 326"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						xmlSpace="preserve"
						xmlnsSerif="http://www.serif.com/"
						style={{
							fillRule: "evenodd",
							clipRule: "evenodd",
							strokeLinejoin: "round",
							strokeMiterlimit: "1.41421"
						}}
					>
						<g transform="matrix(1,0,0,1,-568.236,-160.418)">
							<path d="M662.868,415.402L839.835,160.418L886.224,194.939L684.084,486.192L641.652,486.192L568.236,380.409L620.996,355.07L662.868,415.402Z" />
						</g>
					</svg>
				</TickBoxChecked>
			)}
		</TickBox>
	);
};

export default CheckBox;
