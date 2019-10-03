import React, { Component } from "react";
import styled from "styled-components";

const HeaderTextDiv = styled.div`
  position: absolute;
  width: 531px;
  height: 113px;
  left: 613px;
  top: 197px;
`;

const Challenges = styled.h1`
  color: #79b9a2;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bolder;
  font-size: 96px;
  line-height: 113px;
  margin: 0;
`;
const SubText = styled.h3`
  font-family: Work Sans;
  margin: 0 20px;
  color: #616e7d;
  font-weight: regular;
`;

class HeaderText extends Component {
  render() {
    return (
      <HeaderTextDiv>
        <Challenges>Challenges</Challenges>
        <SubText>for everyone!</SubText>
      </HeaderTextDiv>
    );
  }
}

export default HeaderText;
