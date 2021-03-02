const baseStyle = {
  mx: 0,
  mt: 0,
  mb: 4,
  px: 8,
  py: 2,
  h: 10,
  minW: 44,
  fontSize: "base",
  lineHeight: "base",
  fontWeight: "semibold",
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "50rem",
  transition:
    "background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), border 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  _disabled: {
    cursor: "not-allowed",
    opacity: 1,
    bg: "gray.medium",
    borderColor: "gray.medium",
    color: "white",
  },
  _hover: {
    _disabled: {
      bg: "gray.500",
      borderColor: "gray.500",
    },
  },
};

export const variants = {
  primary: {
    bg: "primary.DEFAULT",
    borderColor: "primary.DEFAULT",
    color: "white",
    _hover: {
      bg: "primary.600",
      borderColor: "primary.600",
      color: "white",
    },
  },
  primaryOnDark: {
    bg: "yellow.DEFAULT",
    borderColor: "yellow.DEFAULT",
    color: "black",
    _hover: {
      bg: "yellow.300",
      borderColor: "yellow.300",
    },
  },
  secondary: {
    bg: "white",
    borderColor: "gray.medium",
    color: "primary.DEFAULT",
    _disabled: {
      bg: "white",
      borderColor: "gray.medium",
      color: "gray.dark",
    },
    _hover: {
      borderColor: "primary.DEFAULT",
      color: "primary.600",
      _disabled: {
        bg: "gray.light",
      },
    },
  },
  secondaryOnDark: {
    borderColor: "white",
    color: "white",
    _hover: {
      bg: "white",
      borderColor: "white",
      color: "black",
    },
  },
};
const defaultProps = {};

export default {
  baseStyle,
  variants,
  defaultProps,
};
