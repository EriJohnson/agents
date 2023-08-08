import { Agent } from "@/types";
import {
  Card,
  CardBody,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";

interface AgentListItemProps {
  agent: Agent;
  index: number;
  onSelectAgent: (agent: Agent) => void;
}

export default function AgentListItem({
  agent,
  index,
  onSelectAgent,
}: AgentListItemProps) {
  function handleSelectAgent() {
    onSelectAgent(agent);
  }

  return (
    <GridItem colSpan={index >= 8 ? 2 : 1} rowSpan={index >= 8 ? 1 : 1}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        bg="gray.100"
        flex={1}
        h="full"
        maxH="150px"
        px={2.5}
        pt="14px"
        pb={4}
        gap="0.875rem"
        borderRadius="2xl"
        onClick={handleSelectAgent}
        _hover={{
          bg: "gray.200",
          img: {
            transform: "scale(1.1)",
            boxShadow: "md",
          },
        }}
      >
        <Image
          objectFit="cover"
          w={20}
          h="7.5rem"
          src={agent.thumbnail.path + "." + agent.thumbnail.extension}
          alt={agent.name}
          borderRadius="2xl"
          transition="transform 0.75s ease-in-out"
          zIndex={1}
        />

        <Stack>
          <CardBody maxH="100px" p={0}>
            <Tooltip
              label={agent.name}
              placement="top"
              hasArrow
              borderRadius="2xl"
              isDisabled={agent.name.length < 20}
            >
              <Heading size="sm" noOfLines={1}>
                {agent.name}
              </Heading>
            </Tooltip>

            <Text
              mt={2.5}
              noOfLines={7}
              fontSize="xs"
              fontWeight="light"
              lineHeight="12px"
              letterSpacing="-0.03rem"
              textAlign="left"
            >
              {agent.description || "Sem descrição."}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </GridItem>
  );
}
