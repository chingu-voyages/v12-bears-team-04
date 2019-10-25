import React, { Component } from "react";
import styled from "styled-components";
import NextButton from "../../../widgets/formButtons/signUpForm/NextButton";
import PrevButton from "../../../widgets/formButtons/signUpForm/PrevButton";
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

class SignUpFormStepThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: this.props.visible,
      contact: {
        mobile: "",
        email: ""
      }
    };
  }
  handleNextButtonClick = () => {
    let step = this.props.step;
    this.props.handleChildState("contact", this.state.contact, step++);
  };
  handlePrevButtonClick = () => {
    let step = this.props.step;
    this.props.handleChildState("", {}, step--);
  };
  handleChange = e => {
    let target = e.target;
    if (target.name === "mobile") {
      this.setState({
        contact: { ...this.state.contact, mobile: target.value }
      });
    } else {
      this.setState({
        contact: { ...this.state.contact, email: target.value }
      });
    }
  };

  render() {
    return (
      <div>
        <H2>How can we reach you?</H2>
        <Form>
          <Input
            type="text"
            value={this.state.contact.mobile}
            name="mobile"
            placeholder="mobile..."
            onChange={this.handleChange.bind(this)}
          />
          <Input
            type="text"
            value={this.state.contact.email}
            name="email"
            placeholder="email..."
            onChange={this.handleChange.bind(this)}
          />
        </Form>
        <PrevButton handlePrevButtonClick={this.handlePrevButtonClick} />
        <NextButton handleNextButtonClick={this.handleNextButtonClick} />
      </div>
    );
  }
}

export default SignUpFormStepThree;
