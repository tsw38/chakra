import React from "react";
import Component from "./Container";
import { useTheme, useToken, useBreakpointValue } from "@chakra-ui/react";

import styleProps from "./Container.styles";

import Heading from "components/Heading/Heading";

export default {
  title: "Atoms/Layout/Container",
  component: Component,
  parameters: {
    withDeprecatedBaseClass: false,
  },
};

const Template = (args) => {
  const { remToPixels } = useTheme();
  const breakpoint = useBreakpointValue(styleProps.maxW);
  const size = useToken("sizes", breakpoint);
  const isMobile = (breakpoint || "").includes("mobile");
  const headingText = size
    ? `Container: ${size}${isMobile ? "" : ` - ${remToPixels(size)}px`}`
    : "";

  return (
    <Component {...args} h="20" color="white" bg="secondary.DEFAULT">
      {headingText && (
        <Heading variant="h1" styledAs="h1">
          {headingText}
        </Heading>
      )}
    </Component>
  );
};

export const Container = Template.bind({});
