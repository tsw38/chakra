import React from "react";
import PropTypes from "prop-types";

import { Box, ButtonGroup } from "@chakra-ui/react";
import IconCheck from "@spothero/icons/check";
import Component from "./Button";
import Heading from "components/Heading/Heading";
import Text from "components/Text/Text";

export default {
  title: "Atoms/Button",
  parameters: {
    withDeprecatedBaseClass: false,
  },
  argTypes: {
    onDark: {
      control: {
        type: "boolean",
      },
    },
    iconPosition: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
    loadingText: {
      control: {
        type: "text",
      },
    },
  },
};

const variationsArray = ({
  baseVariantName,
  onDark,
  iconPosition,
  loadingText,
  asAnchor,
}) => {
  const variant = `${baseVariantName}${onDark ? "OnDark" : ""}`;

  return [
    {
      variant,
      children: variant,
    },
    {
      variant,
      children: `${variant} isDisabled`,
      isDisabled: true,
    },
    {
      variant,
      children: `${variant} isLoading`,
      isLoading: true,
      loadingText,
    },
    {
      variant,
      children: `Icon ${iconPosition}`,
      [`${iconPosition}Icon`]: <IconCheck width="1rem" />,
    },
    {
      variant,
      children: `${variant} asAnchor`,
      asAnchor: true,
      href: "#",
    },
  ];
};

export const Button = ({ onDark, iconPosition, loadingText, asAnchor }) => {
  const onDarkBackgroundColor = onDark ? "secondary.DEFAULT" : "white";
  const onDarkTexColor = onDark ? "white" : "black";

  const styles = {
    card: {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "gray.medium",
      borderRadius: "lg",
      backgroundColor: onDarkBackgroundColor,
      px: 8,
      py: 4,
    },
    heading: {
      color: onDarkTexColor,
      marginBottom: 6,
    },
    stateContainer: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 4,
    },
    buttonGroup: {
      display: "flex",
      flexWrap: "wrap",
      alignContent: "space-between",
    },
  };

  return (
    <section>
      <Box {...styles.card}>
        <Heading {...styles.heading}>Buttons</Heading>
        <Box {...styles.stateContainer}>
          <Text color={onDarkTexColor} mb="2">
            Primary:
          </Text>
          <ButtonGroup {...styles.buttonGroup}>
            {variationsArray({
              baseVariantName: "primary",
              onDark,
              iconPosition,
              loadingText,
              asAnchor,
            }).map((props, key) => (
              <Component key={key} {...props} />
            ))}
          </ButtonGroup>
        </Box>
        <Box {...styles.stateContainer}>
          <Text color={onDarkTexColor} mb="2">
            Secondary:
          </Text>
          <ButtonGroup {...styles.buttonGroup}>
            {variationsArray({
              baseVariantName: "secondary",
              onDark,
              iconPosition,
              loadingText,
              asAnchor,
            }).map((props, key) => (
              <Component key={key} {...props} />
            ))}
          </ButtonGroup>
        </Box>
      </Box>
    </section>
  );
};

Button.args = {
  onDark: false,
  loadingText: "",
  iconPosition: "left",
};

Button.propTypes = {
  onDark: PropTypes.bool,
  asAnchor: PropTypes.bool,
  loadingText: PropTypes.string,
  iconPosition: PropTypes.string,
};
