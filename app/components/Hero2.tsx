import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  useColorModeValue,
  AspectRatio,
} from "@chakra-ui/react";

import type { IconProps } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

export default function Hero2() {
  return (
    <Container maxW="7xl">
      <Stack
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        {/* Texto: ~58% */}
        <Stack
          flex={{ base: "1 1 100%", md: "0 0 58%" }}
          maxW={{ md: "58%" }}
          spacing={{ base: 5, md: 10 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#C18A4D",
                zIndex: -1,
              }}
            >
              Genética equina al más
            </Text>
            <br />
            <Text as="span" color="#C18A4D">
              alto nivel
            </Text>
          </Heading>
          <Text fontSize="lg" color="gray.700">
            En{" "}
            <Image
              src="/laquerencia1.png"
              alt="La Querencia"
              display="inline"
              verticalAlign="middle"
              height="50px"
              mx={1}
            />
            trabajamos con pasión por la reproducción equina, combinando
            experiencia veterinaria y tecnología de última generación.
          </Text>
          <Text fontSize="lg" color="gray.700">
            Ofrecemos servicios especializados en transferencia embrionaria,
            inseminación artificial y manejo reproductivo integral.
          </Text>
          <Text fontSize="lg" color="gray.700">
            Nuestro objetivo es ayudar a criadores y propietarios a alcanzar el
            máximo potencial genético de sus caballos, garantizando siempre el
            bienestar de cada ejemplar.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              bg="#C18A4D"
              color="white"
              _hover={{ bg: "#A8743F" }}
              as={RouterLink}
              to="/servicios"
            >
              Conocer servicios
            </Button>
            <Button
              bg="#1E3832"
              color="white"
              _hover={{ bg: "#142824" }}
              as={RouterLink}
              to="/contacto"
            >
              Solicitar consulta
            </Button>
          </Stack>
        </Stack>

        <Flex
          flex={{ base: "1 1 100%", md: "0 0 auto" }} // 👈 auto, no 42%
          maxW="none"
          justify="center"
          align="center"
        >
          <Box
            display="inline-block" // 👈 el box se ajusta al contenido
            rounded="2xl"
            boxShadow="2xl"
            overflow="hidden"
          >
            <AspectRatio
              ratio={9 / 16}
              w={{ base: "280px", md: "300px", lg: "380px" }} // 👈 elegí el ancho; la altura sale sola
            >
              <video
                src="/hero4.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </AspectRatio>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
