import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

import Component from "./GridItem";
import GridComponent from "../Grid/Grid";
import Container from "components/Container/Container";

export default {
  title: "Atoms/Layout/Grid",
  component: Component,
  parameters: {
    withDeprecatedBaseClass: false,
  },
};

export const GridItem = ({ mobileColumnCount, isCompact, ...args }) => (
  <Container>
    <GridComponent bg="secondary.DEFAULT">
      <Component {...args}>
        <Box h="20rem" bg="primary.DEFAULT" />
      </Component>
    </GridComponent>
  </Container>
);

GridItem.propTypes = {
  isCompact: PropTypes.bool,
  mobileColumnCount: PropTypes.number,
};

const rangeControl = (max) => ({
  control: {
    max,
    min: 1,
    step: 1,
    type: "range",
  },
});

GridItem.argTypes = {
  colStart: rangeControl(12),
  colEnd: rangeControl(13),
};

GridItem.args = {
  colStart: 1,
  colEnd: 2,
};
