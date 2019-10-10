import React, { Component } from "react";
import styled from "styled-components";
import betchaLogo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const Img = styled.img`
  position: absolute;
  width: 73px;
  height: 50px;
  left: 150px;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`;

class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <Img src={betchaLogo} alt="Betcha Logo" />
      </Link>
    );
  }
}

export default Logo;
