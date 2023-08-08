import AgentMenu from "@/components/AgentMenu";
import useAgent from "@/hooks/useAgent";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AgentSelect() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { agent } = useAgent();
  const toast = useToast();

  async function handleClick() {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      navigate(`/dashboard/profile/${agent?.id}`);
    } catch (error) {
      toast({
        title: "Erro ao selecionar agente",
        description: "Tente novamente mais tarde",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  }

  return (
    <Card h="433px" w="25.25rem" borderRadius="4xl">
      <CardHeader pt={12} px={8}>
        <Heading color="blue.800">
          Selecione o seu agente mais legal
          <Text as="span" color="orange.500">
            .
          </Text>
        </Heading>

        <Text color="gray.500" mt={4}>
          Tenha a visão completa do seu agente.
        </Text>
      </CardHeader>

      <CardBody px={8} p={0}>
        <VStack spacing={6}>
          <AgentMenu />

          <Button
            onClick={handleClick}
            alignSelf="end"
            width="5.5rem"
            h="3rem"
            mt={2.5}
            size="md"
            fontWeight="semibold"
            _hover={{
              backgroundColor: "blue.800",
            }}
            isLoading={isLoading}
          >
            Entrar
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
}
