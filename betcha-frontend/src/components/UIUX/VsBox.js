import React from "react";
import SocialIcon from "./SocialIcon.js";

const VsBox = props => {
	const social = [
		{
			name: "facebook",
			imgUrl: "facebook_icon.svg",
			function: () => {} // open fb share
		},
		{
			name: "instagram",
			imgUrl: "insta_icon.svg",
			function: () => {} // open insta share
		},
		{
			name: "twitter",
			imgUrl: "twitter_icon.svg",
			function: () => {} // open tweet this
		}
	];
	return (
		<div className="vsBox">
			<form action="Post" onSubmit={() => alert("submitted")}>
				<input type="text" placeholder="Gubbins" aria-disabled />
				<span>vs</span>
				<input
					type="text"
					placeholder="...add challenger"
					onFocus={() => props.open()}
				/>
				<button type="submit">game on!</button>
				<div className="socialIcons">
					{social &&
						social.map((v, i) => (
							<SocialIcon
								key={v.name}
								name={v.name}
								imgUrl={v.imgUrl}
								action={v.function}
							/>
						))}
				</div>
			</form>
		</div>
	);
};

export default VsBox;
