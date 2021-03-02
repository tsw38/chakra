import { fontSizes, fontWeights } from "theme/base/typography";

const baseStyle = {
  fontWeight: fontWeights.normal,
  lineHeight: 1.5,
};

export const variants = {
  body: {
    fontSize: fontSizes.base,
  },
  body2: {
    fontSize: fontSizes.sm,
  },
  small: {
    fontSize: fontSizes.xs,
  },
  strong: {
    fontWeight: fontWeights.semibold,
  },
};

const defaultProps = {
  variant: variants.body,
};

const HeadingStyleProps = {
  variants,
  baseStyle,
  defaultProps,
};

export default HeadingStyleProps;
