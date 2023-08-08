import { AgentProvider } from "./contexts/AgentContext";
import Routes from "./routes";

export default function App() {
  return (
    <AgentProvider>
      <Routes />
    </AgentProvider>
  );
}
