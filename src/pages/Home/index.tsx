import pontuaLogo from "@/assets/images/pontua-logo.svg";
import { Container, Flex, Image } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import buildingIllustration from "@/assets/images/building-illustration.svg";

export default function Login() {
  return (
    <Flex minH="100vh" direction="column" bg="blue.800">
      <Container flex={1} maxW="container.xl">
        <Flex as="header" mt={12}>
          <Image src={pontuaLogo} alt="Logo Pontua" />
        </Flex>

        <Flex align="center" as="main" mt={10} pl={16} gap="8.75rem">
          <Image src={buildingIllustration} alt="Logo" />
          <Outlet />
        </Flex>
      </Container>
    </Flex>
  );
}
