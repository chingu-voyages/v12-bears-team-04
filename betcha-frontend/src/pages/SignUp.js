import React, { Component } from "react";
// import styled from "styled-components";
import Navbar from "../components/navigation/Navbar";
import SignUpArc from "../components/UIUX/signUpArc";
import SignUpForm from "../components/functional/forms/SignUpForm";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SignUpArc />;
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;
