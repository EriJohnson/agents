import {
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { EyeIcon, EyeOffIcon } from "../icons";

interface PasswordInputProps extends InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
  value,
  onChange,
  ...rest
}: PasswordInputProps) {
  const [isShow, setIsShow] = useState(false);

  function toggleVisibility() {
    setIsShow(!isShow);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event);
  }

  return (
    <InputGroup size="lg">
      <Input
        value={value}
        onChange={handleChange}
        size="lg"
        type={isShow ? "text" : "password"}
        placeholder="informe sua senha"
        {...rest}
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
