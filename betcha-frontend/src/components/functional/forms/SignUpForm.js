import React, { Component } from "react";
import styled from "styled-components";
import SignUpFormStepOne from "./SignUpFormStepOne";
import SignUpFormStepTwo from "./SignUpFormStepTwo";

const FormContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 450px;
  left: 630px;
  top: 105px;
  background: rgba(183, 202, 223, 0.2);
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(33, 33, 33, 0.2);
`;

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      userNames: {
        firstName: "",
        lastName: ""
      },
      location: {
        city: "",
        country: ""
      },
      contact: {
        email: "",
        mobile: ""
      },
      credentials: {
        userName: "",
        password: ""
      }
    };
    this.handleChildState = this.handleChildState.bind(this);
  }

  handleChildState = (description, data, step) => {
    if (description) {
      switch (description) {
        default:
          return;
        case "userNames":
          return this.setState({
            userNames: {
              firstName: data.firstName,
              lastName: data.lastName
            },
            step: 1
          });
      }
    } else {
      this.setState({
        step: step
      });
    }
  };
  renderForms = () => {
    switch (this.state.step) {
      case 0:
        return (
          <SignUpFormStepOne
            handleChildState={this.handleChildState}
            step={this.state.step}
            visible={true}
          />
        );
      case 1:
        console.log(this.state);
        return (
          <SignUpFormStepTwo
            handleChildState={this.handleChildState}
            firstName={this.state.userNames.firstName}
            step={this.state.step}
            visible={true}
          />
        );
      case 2:
        console.log(this.state);
        <SignUpFormStepThree
          handleChildState={this.handleChildState}
          firstName={this.state.userNames.firstName}
          step={this.state.step}
          visible={true}
        />;
      default:
        return;
    }
  };
  render() {
    return <FormContainer>{this.renderForms()}</FormContainer>;
  }
}

export default SignUpForm;
