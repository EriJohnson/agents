import AgentsService from "@/services/api/services/agents";
import { Agent } from "@/types";
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, ProfileIcon } from "../icons";
import AgentMenuItem from "./AgentMenuItem";
import useAgent from "@/hooks/useAgent";

const ACTIVE_MENU_STYLES = {
  bg: "transparent",
  borderColor: "blue.600",
  boxShadow:
    "0px 0px 0px 4px rgba(8, 27, 78, 0.08), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
};

export default function AgentMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent>();
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuListWidth = buttonRef.current?.offsetWidth;

  const { handleSelectAgent } = useAgent();

  useEffect(() => {
    async function getAgents() {
      try {
        setIsLoading(true);
        const response = await AgentsService.findAll({
          page: 1,
        });
        setAgents(response?.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getAgents();
  }, []);

  const onSelectAgent = (agent: Agent) => {
    setSelectedAgent(agent);
    setMenuOpen(false);
    handleSelectAgent(agent);
  };

  return (
    <Menu>
      <MenuButton
        ref={buttonRef}
        w="full"
        as={Button}
        rightIcon={menuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        bg="transparent"
        borderColor="gray.300"
        borderWidth="1px"
        _hover={ACTIVE_MENU_STYLES}
        _expanded={ACTIVE_MENU_STYLES}
        _focus={ACTIVE_MENU_STYLES}
        color="gray.500"
        sx={{
          svg: {
            boxSize: 5,
          },
        }}
      >
        {!selectedAgent ? (
          <HStack>
            <SkeletonCircle size="5" isLoaded={!isLoading}>
              <ProfileIcon />
            </SkeletonCircle>

            <Skeleton isLoaded={!isLoading} w="full">
              <Text textAlign="left" fontSize="sm" fontWeight="normal">
                Selecione um agente
              </Text>
            </Skeleton>
          </HStack>
        ) : (
          <AgentMenuItem agent={selectedAgent} />
        )}
      </MenuButton>

      <MenuList
        w={menuListWidth}
        maxH="14rem"
        boxShadow="box-shadow: 0px 4px 6px -2px #10182808"
        overflowY="auto"
        border="1px solid #F2F4F7"
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.5rem",
          },
          "&::-webkit-scrollbar-track": {
            width: "0.5rem",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#CBD5E0",
            borderRadius: "0.5rem",
          },
        }}
      >
        {agents.map((agent) => (
          <MenuItem
            key={agent.name}
            w="full"
            onClick={() => onSelectAgent(agent)}
          >
            <AgentMenuItem
              agent={agent}
              isSelected={selectedAgent?.id === agent.id}
            />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
