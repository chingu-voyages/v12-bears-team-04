import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../widgets/Logo";
import NavLink from "./NavLink";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0px 150px;
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
      ]
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
      </Nav>
    );
  }
}

export default Navbar;
