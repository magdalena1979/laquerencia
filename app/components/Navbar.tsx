// app/components/Navbar.tsx
import { Box, Container, HStack, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { Image } from "@chakra-ui/react";
export function Navbar() {
  return (
    <Box as="header" position="sticky" top={0} zIndex={10} bg="white" _dark={{ bg: "gray.900" }} boxShadow="sm">
      <Container maxW="6xl" py={3}>
        <HStack>
          <RouterLink to="/">
  <Image
    src="/logo.png"
    alt="La Querencia"
    h="140px"
    objectFit="contain"
  />
</RouterLink>
          <Spacer />
          <HStack spacing={3}>
            <Button as="a" href="#servicios" variant="ghost">Servicios</Button>
            <Button as="a" href="#contacto" colorScheme="querencia">Contacto</Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
