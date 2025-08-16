// routes/home.tsx
import { HeroQuerencia } from "../components/Hero";
import { Box, Container, Heading, Text, SimpleGrid, Stack, Card, CardHeader, CardBody } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      {/* Sección Hero */}
      <HeroQuerencia />

      {/* Sección Servicios */}
      <Box as="section" id="servicios" py={{ base: 16, md: 24 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Container maxW="6xl">
          <Heading textAlign="center" mb={12} size="xl" color="querencia.600" _dark={{ color: "querencia.200" }}>
            Nuestros Servicios
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Card shadow="md" rounded="xl">
              <CardHeader fontWeight="bold" fontSize="lg">Inseminación Artificial</CardHeader>
              <CardBody>
                <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
                  Protocolos modernos para optimizar la fertilidad y asegurar resultados confiables.
                </Text>
              </CardBody>
            </Card>

            <Card shadow="md" rounded="xl">
              <CardHeader fontWeight="bold" fontSize="lg">ICSI / IVF</CardHeader>
              <CardBody>
                <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
                  Fertilización asistida de última generación para yeguas de alto valor genético.
                </Text>
              </CardBody>
            </Card>

            <Card shadow="md" rounded="xl">
              <CardHeader fontWeight="bold" fontSize="lg">Banco de Semen</CardHeader>
              <CardBody>
                <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
                  Recolección, congelado y almacenamiento con trazabilidad y máxima seguridad.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Sección Contacto */}
      <Box as="section" id="contacto" py={{ base: 16, md: 24 }}>
        <Container maxW="4xl" textAlign="center">
          <Heading size="lg" mb={4}>Contacto</Heading>
          <Text mb={6}>
            Para coordinar consultas, turnos o recibir más información sobre nuestros servicios, podés escribirnos por WhatsApp o llamarnos directamente.
          </Text>
          <Stack spacing={4}>
            <Text fontWeight="semibold">📍 Ruta XX km XX — Canelones, Uruguay</Text>
            <Text>📞 +598 0000 0000</Text>
            <Text>✉️ contacto@laquerencia.com.uy</Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
