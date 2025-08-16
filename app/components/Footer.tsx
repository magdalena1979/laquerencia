// app/components/Footer.tsx
import { Box, Container, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box as="footer" mt={16} py={8} bg="gray.50" _dark={{ bg: "gray.800" }}>
      <Container maxW="6xl">
        <Text fontSize="sm">© {new Date().getFullYear()} La Querencia — Centro de Reproducción Equina (Uruguay)</Text>
      </Container>
    </Box>
  );
}
