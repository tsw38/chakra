import React from "react";
import PropTypes from "prop-types";
import { Grid as ChakraGrid } from "@chakra-ui/react";

import styleProps from "./Grid.styles";

const Grid = ({ mobileColumnCount, isCompact, ...props }) => (
  <ChakraGrid {...styleProps({ isCompact, mobileColumnCount })} {...props} />
);

Grid.propTypes = {
  /** This will reduce the grid gap by half */
  isCompact: PropTypes.bool,
  /** Weather the mobile column will be 1 or 2 */
  mobileColumnCount: PropTypes.oneOf([1, 2]),
};

Grid.defaultProps = {
  isCompact: false,
  mobileColumnCount: 1,
};

export default Grid;
