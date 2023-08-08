import { AgentContext } from "@/contexts/AgentContext";
import { useContext } from "react";

export default function useAgent() {
  return useContext(AgentContext);
}
