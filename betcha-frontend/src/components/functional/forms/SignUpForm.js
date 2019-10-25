import React, { Component } from "react";
import styled from "styled-components";
import SignUpFormStepOne from "./SignUpFormStepOne";
import SignUpFormStepTwo from "./SignUpFormStepTwo";
import SignUpFormStepThree from "./SignUpFormStepThree";
import SignUpFormStepFour from "./SignUpFormStepFour";

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
        password: "" //hashed value to be inputed here?
      }
    };
    this.handleChildState = this.handleChildState.bind(this);
  }

  handleChildState = (description, data, step) => {
    console.log("handleChildState fired!!!");
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
        case "location":
          console.log("Enter Location into State");
          return this.setState({
            location: {
              city: data.city,
              country: data.country
            },
            step: 2
          });
        case "contact":
          return this.setState({
            contact: {
              mobile: data.mobile,
              email: data.email
            },
            step: 3
          });
        case "credentials":
          return this.setState({
            credentials: {
              userName: data.userName,
              password: data.password
            },
            step: 4
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
        return (
          <SignUpFormStepThree
            handleChildState={this.handleChildState}
            firstName={this.state.userNames.firstName}
            step={this.state.step}
            visible={true}
          />
        );
      case 3:
        console.log(this.state);
        return (
          <SignUpFormStepFour
            handleChildState={this.handleChildState}
            step={this.state.step}
            visible={true}
          />
        );
      default:
        return;
    }
  };
  render() {
    return <FormContainer>{this.renderForms()}</FormContainer>;
  }
}

export default SignUpForm;
