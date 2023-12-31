import AgentsService from "@/services/api/services/agents";
import { Agent } from "@/types";
import { Box, Center, Spinner, VStack } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import AgentListItem from "./AgentListItem";
import AgentsList from "./AgentsList";
import Paginate from "@/components/Paginate";
import { useLocation, useNavigate } from "react-router-dom";
import useAgent from "@/hooks/useAgent";

export default function Home() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const { handleSelectAgent } = useAgent();

  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const currentPage = Number(searchParams.get("page") || 1);
  const search = searchParams.get("search") || "";

  useEffect(() => {
    async function getAgents() {
      try {
        setIsLoading(true);
        const response = await AgentsService.findAll({
          page: currentPage || 0,
          search,
        });
        setAgents(response?.results);
        setPageCount(Math.ceil(response.total / response.limit));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getAgents();
  }, [search, currentPage]);

  function handlePageChange(selectedItem: { selected: number }) {
    const currentPage = String(selectedItem.selected + 1);
    searchParams.set("page", currentPage);
    navigate({ search: searchParams.toString() });
  }

  function onSelectAgent(agent: Agent) {
    handleSelectAgent(agent);
    navigate(`/dashboard/profile/${agent.id}`);
  }

  const isAgentListVisible = !isLoading && agents.length > 0;
  const isAgentListEmpty = !isLoading && agents.length === 0;

  return (
    <Box p={5} h="full">
      {isLoading && (
        <Center h="full">
          <Spinner color="orange.500" size="xl" />
        </Center>
      )}

      {isAgentListEmpty && (
        <Center h="full">
          <Box fontSize="xl" color="blue.200">
            Nenhum agente encontrado...
          </Box>
        </Center>
      )}

      {isAgentListVisible && (
        <VStack spacing="2.75rem">
          <AgentsList>
            {agents.map((agent, index) => (
              <AgentListItem
                key={agent.id}
                agent={agent}
                index={index}
                onSelectAgent={onSelectAgent}
              />
            ))}
          </AgentsList>

          <Paginate
            initialPage={currentPage - 1}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            pageRangeDisplayed={0.5}
          />
        </VStack>
      )}
    </Box>
  );
}
