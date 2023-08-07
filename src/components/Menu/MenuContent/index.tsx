import logo from "@/assets/images/pontua-logo-blue.svg";
import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Image,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import NavItem from "../NavItem";
import { CornerUpLeftIcon, HomeIcon, ProfileIcon } from "@/components/icons";
import { ReactNode } from "react";

interface LinkItemProps {
  name: string;
  path: string;
  icon?: ReactNode;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", path: "home", icon: <HomeIcon /> },
  { name: "Perfil", path: "profile", icon: <ProfileIcon /> },
];

interface MenuContent extends BoxProps {
  onClose: () => void;
}

export default function MenuContent({ onClose, ...rest }: MenuContent) {
  return (
    <Box
      as="nav"
      bg={useColorModeValue("white", "gray.900")}
      w={{ base: "full", md: 64 }}
      position="fixed"
      h="full"
      boxShadow="6px 0px 18px 0px rgba(0, 0, 0, 0.06)"
      {...rest}
    >
      <Flex align="center" justify="space-between" h={20} py={6} px={7}>
        <Image src={logo} alt="Logomarca" />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <VStack
        align="start"
        pt={4}
        pb={6}
        spacing={4}
        w="100%"
        borderColor="divider"
        borderBottomWidth="1px"
        borderTopWidth="1px"
        mb={8}
      >
        {LinkItems.map((link) => (
          <NavItem
            key={link.path}
            name={link.name}
            path={link.path}
            icon={link?.icon}
          />
        ))}
      </VStack>

      <NavItem name="Sair" path="/" icon={<CornerUpLeftIcon />} />
    </Box>
  );
}
