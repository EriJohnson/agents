import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../icons";

export default function PasswordInput() {
  const [isShow, setIsShow] = useState(false);

  function toggleVisibility() {
    setIsShow(!isShow);
  }

  return (
    <InputGroup size="lg">
      <Input
        size="lg"
        type={isShow ? "text" : "password"}
        placeholder="informe sua senha"
      />

      <InputRightElement>
        <IconButton
          variant="unstyled"
          color="gray.400"
          onClick={toggleVisibility}
          aria-label="Password"
          icon={isShow ? <EyeOffIcon boxSize={5} /> : <EyeIcon boxSize={5} />}
        />
      </InputRightElement>
    </InputGroup>
  );
}
