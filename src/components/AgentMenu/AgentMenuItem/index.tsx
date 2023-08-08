import { CheckIcon } from "@/components/icons";
import { Agent } from "@/types";
import { HStack, Image, Text } from "@chakra-ui/react";

interface AgentMenuItemProps {
  agent: Agent;
  isSelected?: boolean;
}

export default function AgentMenuItem({
  agent,
  isSelected,
}: AgentMenuItemProps) {
  const { name, thumbnail } = agent;

  const imageSrc = thumbnail?.path + "." + thumbnail?.extension;

  return (
    <HStack justify="space-between" w="full">
      <HStack>
        <Image
          src={imageSrc}
          boxSize={6}
          borderRadius="full"
          objectFit="cover"
        />

        <Text fontSize="sm" fontWeight="normal" color="gray.900">
          {name}
        </Text>
      </HStack>

      {isSelected && <CheckIcon boxSize={5} color="blue.800" />}
    </HStack>
  );
}
