import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function AboutPreview() {
  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue(
    "rgba(168,116,63,0.3)",
    "rgba(168,116,63,0.5)"
  );

  return (
    <Box as="section" id="quienes-somos-preview" py={{ base: 12, md: 20 }} bg={bg}>
      <Container maxW="7xl">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 12 }}
          align={{ base: "start", md: "center" }}
          borderWidth="1px"
          borderColor={border}
          rounded="2xl"
          p={{ base: 5, md: 8 }}
          boxShadow="xl"
        >
          {/* Foto del equipo a la izquierda */}
          <Box flexShrink={0} w={{ base: "100%", md: "44%" }}>
            <Box
              as="img"
              src="/equipo.jpg"
              alt="Equipo de La Querencia en el centro de reproducción"
              style={{ objectFit: "cover" }}
              width="100%"
              height="100%"
            />
          </Box>

          {/* Texto y botón */}
          <Stack spacing={4} flex="1">
            <Heading
              size={{ base: "lg", md: "xl" }}
              color="#A8743F"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Quiénes somos
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={useColorModeValue("gray.700", "gray.200")}
              lineHeight={1.7}
            >
              Somos un centro uruguayo especializado en reproducción equina con foco en inseminación,
              manejo de yeguas donantes y biotecnologías reproductivas. Acompañamos a criadores y
              studs con protocolos basados en evidencia, infraestructura adecuada y un equipo
              veterinario con trayectoria en Uruguay y la región.
            </Text>
            <HStack>
              <Button
                as={RouterLink}
                to="/quienes_somos"
                rightIcon={<ChevronRightIcon />}
                colorScheme="green"
                bg="#1B5E20"
                _hover={{ bg: "#144a19" }}
                px={6}
              >
                Conocer al equipo
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
