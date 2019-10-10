import React, { Component } from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button`
  position: absolute;
  width: 140px;
  height: 40px;
  left: 260px;
  top: 320px;
  z-index: 9;
  background: #79b9a2;
  border-radius: 200px;
  border: none;
  color: white;
  opacity: 0.8;
  box-shadow: 1px 1px 5px rgba(20, 20, 20, 0.2);
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
`;

class NextButton extends Component {
  render() {
    return (
      <Button onClick={this.props.handleNextButtonClick}>
        Next
        {/* <FontAwesomeIcon icon={["fas", "code"]}/> */}
      </Button>
    );
  }
}

export default NextButton;
