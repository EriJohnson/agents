import logo from "@/assets/images/logo.svg";
import { Container, Flex, Image } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import buildingIllustration from "@/assets/images/building-illustration.svg";

export default function Root() {
  return (
    <Flex minH="100vh" direction="column" bg="blue.800">
      <Container flex={1} maxW="container.xl">
        <Flex as="header" mt={12} w="6rem">
          <Image src={logo} alt="Logo Marvel" />
        </Flex>

        <Flex align="center" as="main" mt={10} pl={16} gap="8.75rem">
          <Image src={buildingIllustration} alt="Logo" />
          <Outlet />
        </Flex>
      </Container>
    </Flex>
  );
}
