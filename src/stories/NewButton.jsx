import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import styled from "styled-components";

/**
 * Primary UI component for user interaction
 */
export const NewButton = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  return (
    <StyledNewButton type="button" {...props}>
      {label} From different !!!
    </StyledNewButton>
  );
};

NewButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

NewButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
const StyledNewButton = styled.button`
  padding: 10px;
  border-radius: 20px;
  border: solid 1px black;
  color: white;
  background-color: dodgerblue;
`;
