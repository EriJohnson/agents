import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { AtSignIcon } from "../icons";

interface EmailInputProps extends InputProps {
  value: string;
  isValid?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function EmailInput({
  value,
  isValid,
  onChange,
  ...rest
}: EmailInputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event);
  }

  const isInvalid = value?.trim().length > 0 && !isValid;

  return (
    <FormControl isInvalid={isInvalid}>
      <InputGroup size="lg">
        <Input
          value={value}
          onChange={handleChange}
          size="lg"
          placeholder="informe seu email"
          type="email"
          borderColor="gray.400"
          _focus={{
            borderWidth: "0.7px",
            outline: "none",
            boxShadow: "none",
          }}
          {...rest}
        />

        <InputRightElement>
          <AtSignIcon boxSize={4} color="gray.400" />
        </InputRightElement>
      </InputGroup>

      {isInvalid && (
        <FormErrorMessage>Por favor, insira um email válido.</FormErrorMessage>
      )}
    </FormControl>
  );
}
