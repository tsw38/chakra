import React from "react";
import PropTypes from "prop-types";
import { Heading as ChakraHeading } from "@chakra-ui/react";

import { variants } from "./Heading.styles";

const Heading = ({ styledAs, ...props }) => (
  <ChakraHeading {...props} variant={styledAs} />
);

Heading.propTypes = {
  /** The React node that will render inside the heading */
  children: PropTypes.node,
  /** Controls the underlying level of the html heading tag */
  as: PropTypes.oneOf(Object.keys(variants)),
  /** The styling that will be applied to the Heading regardless of the underlying html */
  styledAs: PropTypes.oneOf(Object.keys(variants)),
};

Heading.defaultProps = {
  variant: "h2",
  styledAs: "h2",
};

export default Heading;
