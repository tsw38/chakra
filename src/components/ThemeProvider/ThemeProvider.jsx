import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { ChakraProvider } from "@chakra-ui/react";

import THEME from "theme";
import merge from "lodash/merge";

const SHThemeProvider = forwardRef(({ theme, ...props }, ref) => (
    <ChakraProvider {...props} ref={ref} theme={merge(THEME, theme)} />
));

SHThemeProvider.propTypes = {
    theme: PropTypes.object,
};

export default SHThemeProvider;
