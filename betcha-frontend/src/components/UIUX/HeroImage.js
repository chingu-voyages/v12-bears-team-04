import React from "react";

const HeroImage = ({ title, imgSrc }) => {
	return (
		<div className="hero">
			<h1>{title}</h1>
			<img src={imgSrc} alt={title} />
		</div>
	);
};

export default HeroImage;
