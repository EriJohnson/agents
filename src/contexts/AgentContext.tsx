import { Agent } from "@/types";
import { createContext, useMemo, useState } from "react";

interface AgentContext {
  agent: Agent;
  comics: {
    id: string;
    name: string;
  }[];
  events: {
    id: string;
    name: string;
  }[];
  series: {
    id: string;
    name: string;
  }[];
  stories: {
    id: string;
    name: string;
  }[];
  handleSelectAgent: (agent: Agent) => void;
}

const AgentContext = createContext<AgentContext>({} as AgentContext);

function AgentProvider({ children }: { children: React.ReactNode }) {
  const [agent, setAgent] = useState<Agent>({} as Agent);

  function handleSelectAgent(agent: Agent) {
    setAgent(agent);
  }

  const comics = useMemo(() => {
    return agent.comics?.items.map((comic) => {
      return {
        id: comic.resourceURI.split("/").pop(),
        name: comic.name,
      };
    });
  }, [agent.comics]);

  const events = useMemo(() => {
    return agent.events?.items.map((event) => {
      return {
        id: event.resourceURI.split("/").pop(),
        name: event.name,
      };
    });
  }, [agent.events]);

  const series = useMemo(() => {
    return agent.series?.items.map((serie) => {
      return {
        id: serie.resourceURI.split("/").pop(),
        name: serie.name,
      };
    });
  }, [agent.series]);

  const stories = useMemo(() => {
    return agent.stories?.items.map((story) => {
      return {
        id: story.resourceURI.split("/").pop(),
        name: story.name,
      };
    });
  }, [agent.stories]);

  console.log(comics);

  const value = useMemo(
    () => ({
      agent,
      comics,
      events,
      series,
      stories,
      handleSelectAgent,
    }),
    [agent, comics, events, series, stories]
  );

  return (
    <AgentContext.Provider value={value}>{children}</AgentContext.Provider>
  );
}

export { AgentContext, AgentProvider };
