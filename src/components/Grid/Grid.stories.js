import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

import GridComponent from "./Grid";
import GridItemComponent from "./GridItem";
import Container from "components/Container/Container";

export default {
  title: "Atoms/Layout/Grid",
  component: GridComponent,
  subcomponents: { GridItemComponent },
  parameters: {
    withDeprecatedBaseClass: false,
  },
};
export const Grid = (args) => (
  <Container>
    <GridComponent {...args} bg="secondary.DEFAULT">
      {Array(12)
        .fill((props) => (
          <GridItemComponent {...props}>
            <Box h="20rem" bg="primary.DEFAULT" />
          </GridItemComponent>
        ))
        .map((Item, index) => (
          <Item key={`GridItem-${index}`} />
        ))}
    </GridComponent>
  </Container>
);

export const GridItem = ({ mobileColumnCount, isCompact, ...args }) => (
  <Container>
    <GridComponent bg="secondary.DEFAULT">
      <GridItemComponent {...args}>
        <Box h="20rem" bg="primary.DEFAULT" />
      </GridItemComponent>
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
