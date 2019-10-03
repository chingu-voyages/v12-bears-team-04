import React, { Component } from "react";
import styled from "styled-components";

const GetStartedBtn = styled.button`
  position: absolute;
  width: 250px;
  height: 50px;
  left: 615px;
  top: 340px;
  background: #79b9a2;
  border: none;
  border-radius: 50px;
  color: white;
  outline: none;
  font-size: 20px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

class GetStartedButton extends Component {
  render() {
    return <GetStartedBtn>Get started >></GetStartedBtn>;
  }
}

export default GetStartedButton;
