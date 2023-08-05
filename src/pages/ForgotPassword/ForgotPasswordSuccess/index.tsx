import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ForgotPasswordSuccess() {
  return (
    <Card h="433px" w="23.75rem" borderRadius="4xl">
      <CardHeader pt={12} px={8}>
        <Heading color="blue.800" whiteSpace="nowrap">
          Tudo certo {""}
          <Text as="span" color="orange.500">
            ;)
          </Text>
        </Heading>

        <Text color="gray.500" mt={4}>
          Foi enviado um e-mail para você com instruções de como redefinir a sua
          senha.
        </Text>
      </CardHeader>

      <CardBody px={8} p={0}>
        <Button
          as={Link}
          to="/"
          mt={2.5}
          w="full"
          size="lg"
          fontWeight="bold"
          _hover={{
            backgroundColor: "blue.800",
          }}
        >
          voltar para o login
        </Button>
      </CardBody>
    </Card>
  );
}
