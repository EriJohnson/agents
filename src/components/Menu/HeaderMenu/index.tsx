import { SearchIcon } from "@/components/icons";
import {
  Flex,
  FlexProps,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

interface HeaderMenuProps extends FlexProps {}

export default function HeaderMenu({ ...rest }: HeaderMenuProps) {
  return (
    <Flex
      as="header"
      h="5rem"
      borderColor="divider"
      borderBottomWidth="1px"
      bg="white"
      {...rest}
    >
      <Flex align="center" px={8} flex={1}>
        <InputGroup color="blue.200">
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            variant="flushed"
            _placeholder={{
              color: "blue.200",
              fontWeight: "medium",
              fontSize: "xs",
              letterSpacing: -0.36,
            }}
            type="tel"
            placeholder="Busque por um agente"
            fontSize="xs"
            border="none"
            pl="2.5rem"
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
}
