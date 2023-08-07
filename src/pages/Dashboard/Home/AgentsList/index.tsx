import { Grid } from "@chakra-ui/react";

interface AgentsListProps {
  children?: React.ReactNode;
}

export default function AgentsList({ children }: AgentsListProps) {
  return (
    <Grid
      w="full"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(3, 1fr)"
      gap={2.5}
    >
      {children}
    </Grid>
  );
}
