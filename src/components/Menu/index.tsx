import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import MenuContent from "./MenuContent";
import MobileNav from "./MobileNav";

const HEADER_HEIGHT = "5rem";

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      minH="100vh"
      direction="column"
      bg={useColorModeValue("white", "gray.900")}
    >
      <MenuContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <MenuContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />

      <HeaderMenu pl={{ base: 0, md: 64 }} h={HEADER_HEIGHT} />

      <Box
        h={`calc(100vh - ${HEADER_HEIGHT})`}
        ml={{ base: 0, md: 64 }}
        overflow="auto"
      >
        <Outlet />
      </Box>
    </Flex>
  );
}
