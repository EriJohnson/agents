import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import MenuContent from "./MenuContent";
import HeaderMenu from "./HeaderMenu";

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("white", "gray.900")}>
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

      <HeaderMenu pl={{ base: 0, md: 64 }} />

      <Box ml={{ base: 0, md: 64 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
