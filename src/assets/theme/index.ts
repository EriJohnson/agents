// theme/index.js
import { extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import fontWeights from "./foundations/fontWeights";
import styles from "./foundations/styles";

const overrides = {
  styles,
  colors,
  fonts,
  fontWeights,
};

export default extendTheme(overrides);
