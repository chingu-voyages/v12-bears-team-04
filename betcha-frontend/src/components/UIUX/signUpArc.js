import React, { Component } from "react";
import styled from "styled-components";
import signUpArc from "../../assets/images/signup_arc.svg";

const Img = styled.img`
  position: absolute;
  width: 440px;
  height: 100%;
  left: 0px;
  top: 0;
`;

class SignUpArc extends Component {
  render() {
    return <Img src={signUpArc} alt="Component" />;
  }
}

export default SignUpArc;
