import React from "react";
import {
  ChakraProvider,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Image,
  Box,
  Badge,
  extendTheme,
  useColorModeValue,
} from "@chakra-ui/react";
import { PhoneIcon, ChatIcon } from "@chakra-ui/icons";

/**
 * Tema base adaptado a La Querencia
 * - Paleta inspirada en campo/establo: verdes profundos + crema cálida
 * - Tipografías legibles para clínica/veterinaria
 * - Variantes de botón consistentes (solid/outline/subtle)
 */
export const theme = extendTheme({
  fonts: {
    heading: `"Inter", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"`,
    body: `"Inter", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"`,
  },
  colors: {
    querencia: {
      50:  "#f2f6f3",
      100: "#e4eee7",
      200: "#c2dac7",
      300: "#9fc5a7",
      400: "#6fa882",
      500: "#3f8a5d", // primario (verde campo)
      600: "#2f6a47",
      700: "#224e35",
      800: "#153323",
      900: "#0b1d14",
    },
    crema: {
      50:  "#fffdf7",
      100: "#fff8e7",
      200: "#ffefc3",
      300: "#fde59a",
      400: "#f8d46b",
      500: "#e9bd3e",
      600: "#c79a2c",
      700: "#9d7420",
      800: "#775417",
      900: "#50380f",
    },
  },
  components: {
    Button: {
      defaultProps: { colorScheme: "querencia" },
      variants: {
        solid: {
          rounded: "xl",
          fontWeight: 600,
        },
        outline: {
          rounded: "xl",
          borderWidth: "2px",
        },
        subtle: {
          bg: "querencia.50",
          _hover: { bg: "querencia.100" },
        },
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: "-0.02em",
      },
    },
  },
});

/**
 * Componente Hero adaptado (Chakra UI v2)
 * - Layout texto + imagen
 * - Badge de ubicación (Uruguay)
 * - CTA a WhatsApp y Teléfono (modificá los links)
 * - Soporta modo claro/oscuro automáticamente
 */
export function HeroQuerencia() {
  const bg = useColorModeValue("linear-gradient(180deg, #fff8e7 0%, #ffffff 60%)", "linear-gradient(180deg, #0b1d14 0%, #0b1d14 60%)");
  const cardBg = useColorModeValue("white", "gray.800");
  const muted = useColorModeValue("gray.600", "gray.300");

  return (
    <Box as="section" bg={bg}>
      <Container maxW="6xl" py={{ base: 14, md: 24 }}>
        <SimpleGrid columns={{ base: 1, md: 12 }} gap={{ base: 10, md: 12 }} alignItems="center">
          {/* Columna de texto */}
          <Stack spacing={6} gridColumn={{ base: "1 / -1", md: "1 / span 6" }}>
            <Badge
              alignSelf="start"
              colorScheme="querencia"
              rounded="full"
              px={3}
              py={1}
              bg={useColorModeValue("querencia.100", "querencia.700")}
              color={useColorModeValue("querencia.700", "querencia.100")}
            >
              🇺🇾 Centro de Reproducción Equina – Uruguay
            </Badge>

            <Heading as="h1" size={{ base: "xl", md: "2xl" }} lineHeight={1.1}>
              Reproducción Equina de alto nivel
              <Box as="span" display="block" color="querencia.500">La Querencia</Box>
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color={muted} maxW="ch">
              Inseminación, ICSI/IVF, manejo reproductivo, banco de semen y seguimiento integral del ciclo. Equipo con trayectoria y enfoque personalizado.
            </Text>

            <ButtonGroup spacing={4} flexWrap="wrap">
              <Button
                size="lg"
                leftIcon={<ChatIcon boxSize={5} />}
                as="a"
                href={
                  // Reemplazá con el WhatsApp del centro (sin + ni 0 si usás api wa)
                  // Ejemplo Uruguay: 5989XXXXXXXX
                  "https://wa.me/59800000000?text=Hola%20La%20Querencia,%20quiero%20consultar%20por%20servicios%20de%20reproducci%C3%B3n%20equina"
                }
                aria-label="Escribir por WhatsApp"
              >
                Reservar consulta
              </Button>

              <Button
                size="lg"
                variant="outline"
                leftIcon={<PhoneIcon boxSize={5} />}
                as="a"
                href="tel:+59800000000"
                aria-label="Llamar por teléfono"
              >
                Llamar ahora
              </Button>

              <Button
                size="lg"
                variant="subtle"
                as="a"
                href="#servicios"
              >
                Ver servicios
              </Button>
            </ButtonGroup>

            {/* Confianza / prueba social breve */}
            <Text fontSize="sm" color={muted}>
              Atención en temporada y fuera de temporada. Coordinamos traslado y alojamiento del animal.
            </Text>
          </Stack>

          {/* Columna de imagen */}
          <Box gridColumn={{ base: "1 / -1", md: "7 / -1" }}>
            <Box
              position="relative"
              bg={cardBg}
              rounded="2xl"
              boxShadow="xl"
              overflow="hidden"
            >
              <Image
                src="/hero-equinos.jpg" // Reemplazar por la imagen real
                alt="Yegua y potrillo en potrero, clínica de reproducción"
                objectFit="cover"
                w="100%"
                h={{ base: "260px", md: "420px" }}
              />
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
