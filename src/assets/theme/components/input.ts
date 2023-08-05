import { ComponentStyleConfig } from "@chakra-ui/react";

const input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      borderRadius: "2lg",
      borderWidth: "0.7px",
      borderColor: "gray.400",
      color: "blue.500",
      fontWeight: "semibold",
      _placeholder: {
        fontSize: "sm",
        color: "gray.400",
        fontWeight: "normal",
      },
    },
  },

  defaultProps: {
    focusBorderColor: "blue.500",
    borderColor: "gray.400",
  },

  sizes: {
    sm: {
      field: {
        borderRadius: "md",
      },
    },
  },
};

export default input;
