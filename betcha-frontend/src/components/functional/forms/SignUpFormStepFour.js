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

class SignUpFormStepFour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: this.props.visible,
      credentials: {
        userName: "",
        password: ""
      }
    };
  }
  handleNextButtonClick = () => {
    let step = this.props.step;
    this.props.handleChildState("credentials", this.state.credentials, step);
  };
  handlePrevButtonClick = () => {
    let step = this.props.step;
    this.props.handleChildState("", {}, step--);
  };
  handleChange = e => {
    let target = e.target;
    if (target.name === "userName") {
      this.setState({
        credentials: { ...this.state.credentials, userName: target.value }
      });
    } else {
      this.setState({
        credentials: {
          ...this.state.credentials,
          password: /*To be hashed*/ target.value
        }
      });
    }
  };

  render() {
    return (
      <div>
        <H2>Please choose a username and password?</H2>
        <Form>
          <Input
            type="text"
            value={this.state.credentials.userName}
            name="userName"
            placeholder="username..."
            onChange={this.handleChange.bind(this)}
          />
          <Input
            type="password"
            value={this.state.credentials.email}
            name="password"
            placeholder="password..."
            onChange={this.handleChange.bind(this)}
          />
        </Form>
        <NextButton
          handleNextButtonClick={this.handleNextButtonClick}
          submitButton={true}
        />
      </div>
    );
  }
}

export default SignUpFormStepFour;
