import PropTypes from "prop-types";
import { GridItem as ChakraGridItem } from "@chakra-ui/react";

const GridItem = ChakraGridItem;
const responsiveValue = PropTypes.number;

GridItem.propTypes = {
  /** The number of columns the grid item should `span`. */
  colSpan: responsiveValue,
  /** The column number the grid item should start. */
  colStart: responsiveValue,
  /** The column number the grid item should end. */
  colEnd: responsiveValue,
  /** The row number the grid item should start. */
  rowStart: responsiveValue,
  /** The row number the grid item should end. */
  rowEnd: responsiveValue,
  /** The number of rows the grid item should `span`. */
  rowSpan: responsiveValue,
};

export default GridItem;
