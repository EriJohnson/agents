import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import { LoginIcon, QuestionMarkIcon } from "@/components/icons";
import useValidateEmail from "@/hooks/useValidateEmail";
import { fakeLogin } from "@/services/api/mockLogin";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { email, isValid, handleEmailChange } = useValidateEmail();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLDivElement>) {
    event.preventDefault();

    try {
      setIsLoading(true);
      await fakeLogin(email, password);
      navigate("/agent-select");
    } catch (error) {
      toast({
        title: "Falha no login",
        description: "Email ou senha inválidos.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card
      as="form"
      onSubmit={handleSubmit}
      h="433px"
      w="23.75rem"
      borderRadius="4xl"
    >
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
          <EmailInput
            value={email}
            onChange={handleEmailChange}
            isValid={isValid}
            isDisabled={isLoading}
          />

          <PasswordInput
            value={password}
            onChange={handlePasswordChange}
            isDisabled={isLoading}
          />
        </VStack>

        <Button
          type="submit"
          mt={2.5}
          w="full"
          size="lg"
          fontWeight="bold"
          rightIcon={<LoginIcon mb={0.5} />}
          isDisabled={!isValid}
          isLoading={isLoading}
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
          isDisabled={isLoading}
          _disabled={{
            backgroundColor: "transparent",
            cursor: "not-allowed",
            pointerEvents: "none",
            color: "gray.300",
          }}
        >
          Esqueceu a senha?
        </Button>
      </CardFooter>
    </Card>
  );
}
