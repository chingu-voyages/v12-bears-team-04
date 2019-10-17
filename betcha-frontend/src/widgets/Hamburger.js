import React, { Component } from "react";
import styled from "styled-components";
import hamburger from "../assets/images/hamburger.svg";

const Img = styled.img`
	position: absolute;
	width: 73px;
	height: 60px;
	left: 150px;
	top: 27px;
	&:hover {
		cursor: pointer;
	}
`;

class Hamburger extends Component {
	render() {
		return <Img src={hamburger} alt="Hamburger Logo" />;
	}
}

export default Hamburger;
