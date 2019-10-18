import React, { Component } from "react";
import styled from "styled-components";
import NextButton from "../../../widgets/formButtons/signUpForm/NextButton";

const div = styled.div`
  width: 500px;
`;
const H2 = styled.h2`
  display: inline-block;
  font-size: 23px;
  font-weight: normal;
  position: relative;
  top: 80px;
  width: 70%;
  color: #616e7d;
  margin: 0px 15%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 400px;
  box-sizing: border-box;
  padding: 100px 0px;
`;
const Input = styled.input`
  width: 70%;
  height: 50px;
  margin: 10px auto;
  padding: 0px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  &:focus {
    border: 1px solid #79b9a2;
    outline: none;
  }
`;

class SignUpFormStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      nameData: {
        firstName: "",
        lastName: ""
      }
    };
  }
  handleNextButtonClick = () => {
    // const nextStep defines the step of the form to be displayed/current step is zero
    let step = this.props.step;
    this.props.handleChildState("userNames", this.state.nameData, step++);
  };
  handleChange = e => {
    let target = e.target;
    if (target.name === "firstName") {
      this.setState({
        nameData: { ...this.state.nameData, firstName: target.value }
      });
    } else {
      this.setState({
        nameData: { ...this.state.nameData, lastName: target.value }
      });
    }
  };

  render() {
    return (
      <div>
        <H2>Hi there, welcome! What can we call you?</H2>
        <Form>
          <Input
            type="text"
            value={this.state.nameData.firstName}
            name="firstName"
            placeholder="first name"
            onChange={this.handleChange.bind(this)}
          />
          <Input
            type="text"
            value={this.state.nameData.lastName}
            name="lastName"
            placeholder="last name"
            onChange={this.handleChange.bind(this)}
          />
        </Form>
        <NextButton handleNextButtonClick={this.handleNextButtonClick} />
      </div>
    );
  }
}

export default SignUpFormStepOne;
