import AgentsService from "@/services/api/services/agents";
import { Agent } from "@/types";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AgentListItem from "./AgentListItem";
import AgentsList from "./AgentsList";

export default function Home() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAgents() {
      try {
        const response = await AgentsService.findAll();
        setAgents(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getAgents();
  }, []);

  return (
    <Box p={5} h="full">
      {isLoading && (
        <Center h="full">
          <Spinner color="orange.500" size="xl" />
        </Center>
      )}

      <AgentsList>
        {agents.map((agent, index) => (
          <AgentListItem key={agent.id} agent={agent} index={index} />
        ))}
      </AgentsList>
    </Box>
  );
}
