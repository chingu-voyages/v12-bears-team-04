import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "../components/navigation/Navbar.js";
import Jigsaw from "../components/UIUX/Jigsaw.js";
import Doodle from "../components/UIUX/Doodle.js";
import HeaderText from "../components/UIUX/HeaderText.js";
import GetStartedButton from "../widgets/GetStartedButton.js";

const PageItem = styled.div`
  height: 100%;
  width: 100%;
  background: white;
`;

class LandingPage extends Component {
  render() {
    return (
      <PageItem>
        <Navbar />
        <Jigsaw />
        <HeaderText />
        <GetStartedButton />
        <Doodle />
      </PageItem>
    );
  }
}

export default LandingPage;
