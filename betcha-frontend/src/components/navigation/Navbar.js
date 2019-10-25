import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../widgets/Logo";
import NavLink from "./NavLink";
import Hamburger from "../../widgets/Hamburger";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = styled.nav`
	width: 100%;
	height: 50px;
  position: relative;
  z-index: 9;
	box-sizing: border-box;
  padding: 0px 150px;
  h1, img[alt*="Hamburger"] {
    display: none;
  }
	@media (max-width: 780px) {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
		li, ul  {
      display: none;
    };
    img {
      height: 50px;
      width: 50px;
      position: static;
    };
    img[alt*="Hamburger"] {
      right: 10px
      top: 10px
      height: 30px;
      width: 30px;
      display: inline;
    };
    img[alt*="Bet"] {
      left: 10px;
      top: 10px;
    };
    h1 {
      display: inline;
    }
  };
`;
const Ul = styled.ul`
	list-style-type: none;
`;

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navLinks: [
				{
					id: 1,
					text: "Support",
					target: "Support"
				},
				{
					id: 2,
					text: "Sign Up",
					target: "SignUp"
				},
				{
					id: 3,
					text: "Challenges",
					target: "Challenges"
				},
				{
					id: 4,
					text: "About",
					target: "About"
				}
			],
			hamburgerExposed: false
		};
	}
	render() {
		return (
			<Nav>
				<Logo />
				<Ul>
					{this.state.navLinks.map(navLink => {
						return (
							<NavLink
								target={navLink.target}
								text={navLink.text}
								key={navLink.id}
							/>
						);
					})}
				</Ul>
				{this.props.heading && <h1>{this.props.heading}</h1>}
				<Hamburger>
					{this.state.hamburgerExposed &&
						this.state.navLinks.map(navLink => {
							return (
								<NavLink
									target={navLink.target}
									text={navLink.text}
									key={navLink.id}
								/>
							);
						})}
				</Hamburger>
			</Nav>
		);
	}
}

export default Navbar;
