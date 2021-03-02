import React from "react";
import PropTypes from "prop-types";

import { Button as ChakraButton } from "@chakra-ui/react";

import { variants } from "./Button.styles";

const anchorProps = {
  as: "a",
  target: "_blank",
  rel: "noopener noreferrer",
};

const Button = ({ asAnchor, ...props }) => (
  <ChakraButton {...(asAnchor && anchorProps)} {...props} />
);

Button.propTypes = {
  /** The markup node to insert into the button. */
  children: PropTypes.node,
  /** The type of button that is rendered. */
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  /** The color of the button. */
  variant: PropTypes.oneOf(Object.keys(variants)),
  /** An Icon to display on the button */
  icon: PropTypes.node,
  /** Whether the button should fill it's container. */
  isFullWidth: PropTypes.bool,
  /** Whether the button is disabled or not. */
  disabled: PropTypes.bool,
  /** Whether to show a loading animation inside of the button. */
  isLoading: PropTypes.bool,
  /** Optional text to display while the button is in the loading state. */
  loadingText: PropTypes.string,
  /**
   * The handler to execute when the button is clicked.
   *
   * @param {SyntheticEvent} evt - The React `SyntheticEvent`.
   */
  onClick: PropTypes.func,
  /** Whether the component should be an anchor or a button. */
  asAnchor: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  type: "button",
};

export default Button;
