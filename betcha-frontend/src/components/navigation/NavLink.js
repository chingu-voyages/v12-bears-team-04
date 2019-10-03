import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: #79b9a2;
  line-height: 50px;
  text-decoration: none;
`;
const Li = styled.li`
  float: right;
  margin: 0px 10px;
`;

class NavLink extends Component {
  render() {
    return (
      <Li>
        <StyledLink to={this.props.target} key={this.props.id}>
          {this.props.text}
        </StyledLink>
      </Li>
    );
  }
}

export default NavLink;
