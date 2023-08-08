import { Agent } from "@/types";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      borderRadius="2xl"
      boxShadow="0px 6px 18px 0px rgba(0, 0, 0, 0.06)"
      px={8}
      py={10}
      gap={8}
    >
      <Image
        objectFit="cover"
        src={agent.thumbnail?.path + "." + agent.thumbnail?.extension}
        alt={agent?.name}
        borderRadius="full"
        boxSize="5.625rem"
      />

      <Stack>
        <CardBody p={0}>
          <Heading
            fontSize="2xl"
            color="blue.600"
            lineHeight="normal"
            letterSpacing={-0.72}
          >
            {agent?.name}
          </Heading>

          <Text
            mt={2}
            py="2"
            color="#717171"
            fontSize="md"
            fontWeight="semibold"
            lineHeight="153.5%"
            letterSpacing="-0.48px"
          >
            {agent?.description || "Sem descrição."}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
}
