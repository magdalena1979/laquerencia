import { Box, Container, Heading, Text, Stack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

export default function HeroSticky() {
  return (
    <Box as="section" position="relative" h={{ base: "140vh", md: "180vh" }}>
      {/* Fondo: imagen o video que scrollea */}
      <Box position="absolute" inset={0} overflow="hidden">
        {/* USA UNA DE LAS DOS OPCIONES */}

     
     <Box
          as="img"
          src="/hero1.jpg"
          alt="La Querencia"
          w="100%"
          h="100%"
          objectFit="cover"
        /> 

     
       

        {/* Capa para contraste del texto */}
        <Box position="absolute" inset={0} bgGradient="linear(to-b, blackAlpha.600, blackAlpha.300)" />
      </Box>

      {/* Overlay STICKY con el copy y CTAs (queda fijo) */}
      <Container
        position="sticky"
        top={0}
        h="100vh"
        display="grid"
        placeItems="center"
        zIndex={1}
      >
        <Stack spacing={6} textAlign="left" maxW="3xl">
          <Heading
            color="white"
            fontWeight={800}
            lineHeight={1.1}
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            Reproducción equina de excelencia en Uruguay.
          </Heading>

          <Text color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }}>
            Cuidamos tu yegua, potenciamos tu genética.
          </Text>

          <Stack direction="row" spacing={4}>
            <Button
              as={RouterLink}
              to="/contacto"
              bg="#C18A4D"
              color="white"
              _hover={{ bg: "#A8743F" }}
            >
              Contáctanos
            </Button>
            <Button
              as={RouterLink}
              to="/servicios"
              variant="outline"
              color="white"
              borderColor="whiteAlpha.700"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Ver servicios
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
