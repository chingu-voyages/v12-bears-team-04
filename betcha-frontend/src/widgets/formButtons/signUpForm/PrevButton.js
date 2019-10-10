import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  width: 140px;
  height: 40px;
  left: 100px;
  top: 320px;
  z-index: 9;
  background: #79b9a2;
  border-radius: 200px;
  border: none;
  color: white;
  opacity: 0.8;
  box-shadow: 1px 1px 5px rgba(20, 20, 20, 0.5);
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
`;

class PrevButton extends Component {
  render() {
    return (
      <Button>
        <i className="fas fa-arrow-circle-right" />
        Prev
      </Button>
    );
  }
}

export default PrevButton;
