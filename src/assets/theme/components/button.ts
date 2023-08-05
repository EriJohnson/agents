import { ComponentStyleConfig } from "@chakra-ui/react";

const button: ComponentStyleConfig = {
  baseStyle: {
    _disabled: {
      bg: "#C3C3C3",
      opacity: 1,
      pointerEvents: "none",
    },
  },
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
