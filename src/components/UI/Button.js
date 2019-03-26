import React, { Component } from "react";
import styled from "styled-components";

let Btn = styled.div`
  button {
    margin-right: ${props => (props.themed ? "10px" : "0px")};
    padding: 6px 12px;
    font-size: 13px;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    background-color: ${props => (props.themed ? "#fd6c21" : "white")};
    color: ${props => (props.themed ? "white" : "black")};
  }
`;

class Button extends Component {
  render() {
    let { text, themed, className, style, onClick } = this.props;
    return (
      <Btn themed={themed}>
        <button
          type="button"
          onClick={() => onClick()}
          style={style && { ...style }}
          className={className}
        >
          {text}
        </button>
      </Btn>
    );
  }
}

export default Button;
