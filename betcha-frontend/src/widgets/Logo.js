import React, { Component } from "react";
import styled from "styled-components";
import betchaLogo from "../assets/images/Logo.svg";

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

class Logo extends Component {
  render() {
    return <Img src={betchaLogo} alt="Betcha Logo" />;
  }
}

export default Logo;
