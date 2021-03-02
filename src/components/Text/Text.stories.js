import React from "react";
import PropTypes from "prop-types";

import { variants } from "./Text.styles";

import Component from "./Text";

import asOptions from "./options";

export default {
  title: "Atoms/Typography/Text",
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
    as: {
      control: {
        type: "select",
        options: asOptions,
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export const Text = (props) => <Component {...props} />;
Text.propTypes = {
  children: PropTypes.node,
};

Text.args = {
  children:
    "Bonbon lollipop tiramisu cupcake bear claw cupcake. Icing candy canes cookie caramels wafer tootsie roll soufflé halvah. Ice cream tart gummies apple pie chocolate bar. Pastry gummies macaroon fruitcake donut sweet caramels candy. Oat cake marshmallow biscuit carrot cake fruitcake brownie pastry liquorice liquorice. Topping sweet gingerbread. Chupa chups caramels brownie. Icing jujubes chupa chups cookie. Carrot cake gummi bears powder apple pie donut pudding macaroon. Icing jelly cupcake powder jelly croissant pastry. Powder jelly fruitcake gummies sweet tootsie roll candy. Icing cheesecake toffee tart pastry lemon drops lemon drops bonbon wafer. Cheesecake ice cream wafer apple pie candy canes croissant. Sweet croissant pudding carrot cake oat cake chupa chups. Gingerbread lemon drops biscuit oat cake carrot cake. Chocolate cake jelly-o cake cake candy lollipop.",
  styledAs: "body",
  as: "p",
};
