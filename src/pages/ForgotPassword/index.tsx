import EmailInput from "@/components/EmailInput";
import useValidateEmail from "@/hooks/useValidateEmail";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ForgotPassword() {
  const { email, isValid, handleEmailChange } = useValidateEmail();

  return (
    <Card h="433px" w="23.75rem" borderRadius="4xl">
      <CardHeader pt={12} px={8}>
        <Heading color="blue.800" whiteSpace="nowrap">
          Recuperar senha
          <Text as="span" color="orange.500">
            .
          </Text>
        </Heading>

        <Text color="gray.500" mt={4}>
          Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de
          um link com as instruções para você redefinir a sua senha.
        </Text>
      </CardHeader>

      <CardBody px={8} p={0}>
        <VStack spacing={6}>
          <EmailInput
            value={email}
            onChange={handleEmailChange}
            isValid={isValid}
          />
        </VStack>

        <Button
          mt={2.5}
          w="full"
          size="lg"
          fontWeight="bold"
          isDisabled={!isValid}
          _hover={{
            backgroundColor: "blue.800",
          }}
        >
          enviar link
        </Button>
      </CardBody>
    </Card>
  );
}
