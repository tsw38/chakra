import React from "react";
import PropTypes from "prop-types";

import { variants } from "./Heading.styles";

import Component from "./Heading";

export default {
  title: "Atoms/Typography/Heading",
  component: Component,
  parameters: {
    withDeprecatedBaseClass: false,
  },
  argTypes: {
    styledAs: {
      control: {
        type: "select",
        options: Object.keys(variants),
      },
    },
    variant: {
      control: {
        type: "select",
        options: Object.keys(variants),
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export const Heading = (props) => <Component {...props} />;
Heading.propTypes = {
  children: PropTypes.node,
};

Heading.args = {
  children: "Heading",
  styledAs: "h2",
};
