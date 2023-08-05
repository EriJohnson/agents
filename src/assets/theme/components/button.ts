import { ComponentStyleConfig } from "@chakra-ui/react";

const button: ComponentStyleConfig = {
  defaultProps: {
    colorScheme: "blue",
    borderRadius: "2lg",
  },
  variants: {
    solid: {
      backgroundColor: "blue.600",
      color: "white",
    },
  },
};

export default button;
