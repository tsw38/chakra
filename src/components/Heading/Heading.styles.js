import { fontSizes, fontWeights } from "theme/base/typography";

const baseStyle = {
  fontWeight: fontWeights.semibold,
  lineHeight: 1.5,
};

export const variants = {
  h1: {
    fontSize: {
      mobile: fontSizes["2xl"],
      desktop: fontSizes["3xl"],
    },
  },
  h2: {
    fontSize: {
      mobile: fontSizes.xl,
      desktop: fontSizes["2xl"],
    },
  },
  h3: {
    fontSize: {
      mobile: fontSizes.lg,
      desktop: fontSizes.xl,
    },
  },
  h4: {
    fontSize: {
      mobile: fontSizes.base,
      desktop: fontSizes.lg,
    },
  },
  h5: {
    fontSize: {
      mobile: fontSizes.base,
      desktop: fontSizes.base,
    },
  },
  h6: {
    fontSize: {
      mobile: fontSizes.base,
      desktop: fontSizes.base,
    },
  },
};

const defaultProps = {
  variant: variants.h2,
};

const HeadingStyleProps = {
  baseStyle,
  variants,
  defaultProps,
};

export default HeadingStyleProps;
