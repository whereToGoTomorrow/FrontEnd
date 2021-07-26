import React from "react";
import styled from "styled-components";

function Button(props) {
  const {
    width,
    height,
    border,
    borderRadius,
    backgroundColor,
    fontSize,
    children,
    color,
  } = props;
  const styles = {
    width,
    height,
    border,
    borderRadius,
    backgroundColor,
    fontSize,
    color,
  };

  return (
    <>
      <Btn {...styles}>{children}</Btn>
    </>
  );
}

Button.defaultProps = {
  width: "256px",
  height: "74px",
  border: "none",
  borderRadius: "125px",
  backgroundColor: "#1dc6d1",
  fontSize: "28px",
  color: "#fff",
};

const Btn = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: 600;
  cursor: pointer;
`;

export default Button;