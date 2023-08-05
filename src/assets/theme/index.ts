// theme/index.js
import { extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import fontWeights from "./foundations/fontWeights";
import styles from "./foundations/styles";
import borderRadius from "./foundations/borderRadius";
import Button from "./components/button";
import Input from "./components/input";

const overrides = {
  ...borderRadius,
  styles,
  colors,
  fonts,
  fontWeights,
  components: {
    Button,
    Input,
  },
};

export default extendTheme(overrides);
