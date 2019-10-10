import React, { Component } from "react";
import styled from "styled-components";
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
      visible: this.props.visible
    };
  }
  handleNextButtonClick = () => {
    let step = this.props.step;
    let location = {};
    location.city = this.refs.city;
    location.country = this.refs.country;
    this.props.handleChildState("location", location, step++);
  };
  handlePrevButtonClick = () => {
    let step = this.props.step;
    this.props.handleChildState("", {}, step--);
  };

  render() {
    return (
      <div>
        <H2>{this.props.firstName}, where are you from?</H2>
        <Form>
          <Input ref="city" placeholder="city..." />
          <Input ref="country" placeholder="country..." />
        </Form>
        <PrevButton onClick={this.handlePrevButtonClick} />
        <NextButton onClick={this.handleNextButtonClick} />
      </div>
    );
  }
}

export default SignUpFormStepThree;
