import useAgent from "@/hooks/useAgent";
import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import AgentCard from "./AgentCard";
import ResourceList from "./ResourceList";

export default function Profile() {
  const { agent, comics, events, series, stories } = useAgent();

  console.log(agent);

  return (
    <Box px={8} py={6} h="full">
      <Heading fontSize="2xl" mb={4}>
        <Text as="span" fontWeight="bold" color="blue.600">
          Perfil
        </Text>
        <Text as="span" color="orange.500" mx={1.5}>
          /
        </Text>
        <Text as="span" fontWeight="light" color="gray.500">
          {agent?.name}
        </Text>
      </Heading>

      <Tabs mt={6} colorScheme="blue">
        <TabList
          sx={{
            "[aria-selected=true]": {
              color: "blue.600",
              fontWeight: "medium",
            },
            button: {
              paddingY: 5,
            },
          }}
        >
          <Tab>Visão Geral</Tab>
          <Tab>Comics</Tab>
          <Tab>Events</Tab>
          <Tab>Series</Tab>
          <Tab>Stories</Tab>
        </TabList>

        <TabPanels
          sx={{
            ".chakra-tabs__tab-panel": {
              px: 0,
              py: 7,
            },
          }}
        >
          <TabPanel>
            <AgentCard agent={agent} />
          </TabPanel>
          <TabPanel>
            <ResourceList resource={comics} />
          </TabPanel>
          <TabPanel>
            <ResourceList resource={events} />
          </TabPanel>
          <TabPanel>
            <ResourceList resource={series} />
          </TabPanel>
          <TabPanel>
            <ResourceList resource={stories} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
