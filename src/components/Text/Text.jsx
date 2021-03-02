import React from "react";
import PropTypes from "prop-types";
import { Text as ChakraText } from "@chakra-ui/react";

import { variants } from "./Text.styles";
import asOptions from "./options";

const Text = ({ styledAs, ...props }) => (
  <ChakraText {...props} variant={styledAs} />
);

Text.propTypes = {
  /** Controls the underlying level of the html heading tag */
  as: PropTypes.oneOf(asOptions),
  /** The React node that will render inside the heading */
  children: PropTypes.node,
  /** The styling that will be applied to the Heading regardless of the underlying html */
  styledAs: PropTypes.oneOf(Object.keys(variants)),
};

Text.defaultProps = {
  as: "p",
  styledAs: "body",
};

export default Text;
