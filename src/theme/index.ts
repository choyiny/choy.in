import { extendTheme } from "@chakra-ui/react";
import DisplayContainer from "./display-container";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const overrides = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  breakpoints,
  components: {
    DisplayContainer,
  },
};

export default extendTheme(overrides);
