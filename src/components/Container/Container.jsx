import React from "react";
import { Container as ChakraContainer } from "@chakra-ui/react";

import styleProps from "./Container.styles";

const Container = (props) => <ChakraContainer {...styleProps} {...props} />;

export default Container;
