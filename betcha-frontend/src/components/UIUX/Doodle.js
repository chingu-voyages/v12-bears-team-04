import React, { Component } from "react";
import styled from "styled-components";
import betchaShape from "../../assets/images/betchaShape.svg";

const Img = styled.img`
  position: absolute;
  width: 638px;
  height: 374px;
  left: 0px;
  top: 240px;
  z-index: 0;
`;
class Doodle extends Component {
  render() {
    return <Img src={betchaShape} alt="A Betcha SVG" />;
  }
}

export default Doodle;
