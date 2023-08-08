import { ListItem, UnorderedList } from "@chakra-ui/react";

interface ResourceListProps {
  resource: {
    id: string;
    name: string;
  }[];
}

export default function ResourceList({ resource }: ResourceListProps) {
  return (
    <UnorderedList spacing={1}>
      {resource?.map(({ id, name }) => (
        <ListItem
          fontFamily="Inter"
          fontWeight="semibold"
          color="gray.500"
          key={id}
        >
          {name}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
