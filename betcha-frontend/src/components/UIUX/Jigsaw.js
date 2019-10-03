import React, { Component } from "react";
import styled from "styled-components";
import jigsaw from "../../assets/images/jigsaws.svg";

const Img = styled.img`
  position: absolute;
  width: 450px;
  height: 400px;
  left: 150px;
  top: 120px;
  z-index: 1;
`;

class Jigsaw extends Component {
  render() {
    return <Img src={jigsaw} alt="An image of a Jigsaw puzzle" />;
  }
}

export default Jigsaw;
