import {
  Avatar,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface Person {
  name: string;
  role: string;
  bio: string;
  photo: string; // ruta pública
}

const people: Person[] = [
  {
    name: "Verónica Cavestany",
    role: "Médica Veterinaria",
    bio:
      "Médico Veterinario – Universidad de la República (Uruguay). " +
      "Programa de Dirección de Agronegocios – Universidad Austral (Buenos Aires). " +
      "Especializada en reproducción equina y gestión de programas de cría.",
    photo: "/images/team/veronica-cavestany.jpg",
  },
  {
    name: "José Koci",
    role: "Médico Veterinario",
    bio:
      "Próximamente ampliaremos su perfil profesional. Integra el equipo clínico y reproductivo de La Querencia.",
    photo: "/images/team/jose-koci.jpg",
  },
  {
    name: "Walter",
    role: "Asistente",
    bio:
      "Asistencia en manejo de campo, logística y apoyo a procedimientos reproductivos. Perfil en construcción.",
    photo: "/walter.jpg",
  },
];

function PersonCard({ p }: { p: Person }) {
  const cardBg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("rgba(168,116,63,0.3)", "rgba(168,116,63,0.5)");

  return (
    <Stack
      borderWidth="1px"
      borderColor={border}
      rounded="2xl"
      overflow="hidden"
      spacing={0}
      bg={cardBg}
      boxShadow="lg"
    >
      {/* Foto */}
      <Box position="relative" h={{ base: "260px", md: "320px" }}>
        {p.photo ? (
          <Box
            as="img"
            src={p.photo}
            alt={p.name}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        ) : (
          <Stack
            h="100%"
            align="center"
            justify="center"
            bg={useColorModeValue("gray.50", "gray.700")}
          >
            <Avatar name={p.name} size="xl" />
          </Stack>
        )}
      </Box>

      {/* Texto */}
      <Stack p={{ base: 4, md: 6 }} spacing={2}>
        <Heading size="md" color="#A8743F">
          {p.name}
        </Heading>
        <Text fontWeight="semibold" color={useColorModeValue("gray.700", "gray.300")}>
          {p.role}
        </Text>
        <Text color={useColorModeValue("gray.700", "gray.300")} lineHeight={1.8}>
          {p.bio}
        </Text>
      </Stack>
    </Stack>
  );
}

export default function QuienesSomosPage() {
  return (
    <Box as="main" pt={{ base: 8, md: 12 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="7xl">
        <Stack spacing={{ base: 8, md: 12 }}>
          {/* Encabezado */}
          <Stack spacing={3} textAlign="center">
            <Heading
              size={{ base: "lg", md: "xl" }}
              textTransform="uppercase"
              letterSpacing="wide"
              color="#A8743F"
            >
              Quiénes somos
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={useColorModeValue("gray.700", "gray.200")}>
              Conocé al equipo detrás de La Querencia. Profesionales con foco en reproducción equina en Uruguay.
            </Text>
          </Stack>

          {/* Tarjetas */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
            {people.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </SimpleGrid>

          {/* Cómo trabajamos (texto placeholder; después sumamos carrusel) */}
          <Stack spacing={4} pt={{ base: 4, md: 8 }}>
            <Heading size="md">Cómo trabajamos</Heading>
            <Text color={useColorModeValue("gray.700", "gray.300")}>
              Protocolos claros, seguimiento por ultrasonografía, coordinación con studs/haras y comunicación directa con
              propietarios. Sumaremos un carrusel de fotos y videos de procedimientos y manejo en campo.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
