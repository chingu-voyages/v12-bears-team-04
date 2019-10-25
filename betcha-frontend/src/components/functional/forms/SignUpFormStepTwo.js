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

class SignUpFormStepTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: this.props.visible,
      location: {
        city: "",
        country: ""
      }
    };
  }
  handleNextButtonClick = () => {
    console.log("Logged");
    let step = this.props.step;
    this.props.handleChildState("location", this.state.location, step++);
  };
  handlePrevButtonClick = () => {
    let step = this.props.step;
    this.props.handleChildState("", {}, step--);
  };
  handleChange = e => {
    let target = e.target;
    if (target.name === "city") {
      this.setState({
        location: { ...this.state.location, city: target.value }
      });
    } else {
      this.setState({
        location: { ...this.state.location, country: target.value }
      });
    }
  };

  render() {
    return (
      <div>
        <H2>
          Nice having you here {this.props.firstName}. Where are you from?
        </H2>
        <Form>
          <Input
            type="text"
            value={this.state.location.city}
            name="city"
            placeholder="city..."
            onChange={this.handleChange.bind(this)}
          />
          <Input
            type="text"
            value={this.state.location.country}
            name="country"
            placeholder="country..."
            onChange={this.handleChange.bind(this)}
          />
        </Form>
        <PrevButton handlePrevButtonClick={this.handlePrevButtonClick} />
        <NextButton handleNextButtonClick={this.handleNextButtonClick} />
      </div>
    );
  }
}

export default SignUpFormStepTwo;
