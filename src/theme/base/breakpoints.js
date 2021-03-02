import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  mobile: "30rem", // 480px
  tablet: "48rem", // 768px
  desktop: "64rem", // 1024px
  projector: "90rem", // 1440px
});

export default breakpoints;
