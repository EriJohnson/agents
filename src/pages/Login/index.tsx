import PasswordInput from "@/components/PasswordInput";
import {
  ArrowRightIcon,
  AtSignIcon,
  QuestionMarkIcon,
} from "@/components/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Card h="433px" w="23.75rem" borderRadius="4xl">
      <CardHeader pt={12} px={8}>
        <Heading color="blue.800">
          Bem-vindo
          <Text as="span" color="orange.500">
            .
          </Text>
        </Heading>

        <Text color="gray.500" mt={4}>
          informe as suas credenciais de acesso ao portal
        </Text>
      </CardHeader>

      <CardBody px={8} p={0}>
        <VStack
          spacing={6}
          sx={{
            input: {
              borderColor: "gray.400",
              _focus: {
                borderWidth: "0.7px",
                outline: "none",
                boxShadow: "none",
              },
            },
          }}
        >
          <InputGroup size="lg">
            <Input size="lg" placeholder="informe seu email" type="email" />

            <InputRightElement>
              <AtSignIcon boxSize={4} color="gray.400" />
            </InputRightElement>
          </InputGroup>

          <PasswordInput />
        </VStack>

        <Button
          mt={2.5}
          w="full"
          size="lg"
          fontWeight="bold"
          rightIcon={<ArrowRightIcon mb={0.5} />}
          _hover={{
            backgroundColor: "blue.800",
          }}
        >
          entrar
        </Button>
      </CardBody>

      <CardFooter pt={0} px={8} pb={12} justifyContent="end">
        <Button
          as={Link}
          to="/forgot-password"
          size="xs"
          fontSize="0.6875rem"
          fontWeight="normal"
          variant="link"
          colorScheme="red"
          leftIcon={<QuestionMarkIcon boxSize={3.5} />}
        >
          Esqueceu a senha?
        </Button>
      </CardFooter>
    </Card>
  );
}
