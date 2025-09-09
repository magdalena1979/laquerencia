import {
  Avatar,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
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
    photo: "/vero.jpeg",
  },
  {
    name: "José Koci",
    role: "Médico Veterinario",
    bio:
      "Próximamente ampliaremos su perfil profesional. Integra el equipo clínico y reproductivo de La Querencia.",
    photo: "/pepe.jpg",
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
  return (
    <Stack
      borderWidth="1px"
      borderColor="rgba(193,138,77,0.3)"
      rounded="2xl"
      overflow="hidden"
      spacing={0}
      bg="rgba(255,255,255,0.1)"
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
            bg="gray.700"
          >
            <Avatar name={p.name} size="xl" />
          </Stack>
        )}
      </Box>

      {/* Texto */}
      <Stack p={{ base: 4, md: 6 }} spacing={2}>
        <Heading size="md" color="#C18A4D">
          {p.name}
        </Heading>
        <Text fontWeight="semibold" color="white">
          {p.role}
        </Text>
        <Text color="gray.300" lineHeight={1.8}>
          {p.bio}
        </Text>
      </Stack>
    </Stack>
  );
}

export default function QuienesSomosPage() {
  return (
    <Box bg="#15322e" minH="100vh">
      <Container maxW="7xl" pt={{ base: 24, md: 28 }} pb={{ base: 10, md: 16 }}>
        <Stack spacing={{ base: 8, md: 12 }}>
          {/* Encabezado */}
          <Stack spacing={3} textAlign="center">
            <Heading
              size={{ base: "lg", md: "xl" }}
              textTransform="uppercase"
              letterSpacing="wide"
              color="white"
            >
              Quiénes somos
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.300">
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
            <Heading size="md" color="white">Cómo trabajamos</Heading>
            <Text color="gray.300">
              Protocolos claros, seguimiento por ultrasonografía, coordinación con studs/haras y comunicación directa con
              propietarios. Sumaremos un carrusel de fotos y videos de procedimientos y manejo en campo.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
