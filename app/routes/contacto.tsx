import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  AspectRatio,
  HStack,
  VStack,
  Link as CLink,
  Button,
  Icon,
  SimpleGrid,
  Card,
  CardBody,
  Divider,
} from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const LAT = -33.4193754;
const LNG = -56.9228577;

export default function Contacto() {
  return (
    <Box bg="#15322e" minH="100vh">
      <Container maxW="7xl" pt={{ base: 24, md: 28 }} pb={{ base: 10, md: 16 }}>
        {/* Información de contacto - ARRIBA */}
        <Card bg="#15322e" color="white" mb={8}>
          <CardBody p={8}>
            <VStack spacing={6} align="center">
              <Heading size="lg" color="white" textAlign="center">
                Información de Contacto
              </Heading>

              <VStack spacing={4} align="center" w="100%">
                <VStack spacing={2} align="center">
                  <Icon as={FaMapMarkerAlt} color="#C18A4D" boxSize={6} />
                  <Text fontSize="sm" color="gray.300" textAlign="center">
                    Paso de Atahona, 85000 Trinidad<br />
                    Departamento de Flores, Uruguay
                  </Text>
                </VStack>

                <Divider borderColor="rgba(193,138,77,0.3)" />

                <VStack spacing={4} align="center">
                  <VStack spacing={2} align="center">
                    <Icon as={FaWhatsapp} color="#C18A4D" boxSize={6} />
                  </VStack>
                  <VStack spacing={2} align="center" w="100%">
                    <CLink
                      href="https://wa.me/59897588812"
                      isExternal
                      _hover={{ textDecoration: "none" }}
                    >
                      <Text
                        color="white"
                        fontSize="md"
                        textAlign="center"
                        _hover={{ color: "#C18A4D" }}
                      >
                        José Koci: +598 97 588 812
                      </Text>
                    </CLink>
                    <CLink
                      href="https://wa.me/59899231848"
                      isExternal
                      _hover={{ textDecoration: "none" }}
                    >
                      <Text
                        color="white"
                        fontSize="md"
                        textAlign="center"
                        _hover={{ color: "#C18A4D" }}
                      >
                        Verónica Cavestany: +598 99 231 848
                      </Text>
                    </CLink>
                  </VStack>
                </VStack>

                <Divider borderColor="rgba(193,138,77,0.3)" />

                <VStack spacing={4} align="center">
                  <VStack spacing={2} align="center">
                    <Icon as={FaInstagram} color="#C18A4D" boxSize={6} />
                  </VStack>
                  <CLink
                    href="https://www.instagram.com/laquerenciacentroequino/"
                    isExternal
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      color="white"
                      fontSize="md"
                      textAlign="center"
                      _hover={{ color: "#C18A4D" }}
                    >
                      @laquerenciacentroequino
                    </Text>
                  </CLink>
                </VStack>
              </VStack>
            </VStack>
          </CardBody>
        </Card>

        {/* Mapa - ABAJO MÁS GRANDE */}
        <Card bg="rgba(255,255,255,0.1)" color="white">
          <CardBody p={6}>
            <VStack spacing={4} mb={6}>
              <CLink
                href={`https://www.google.com/maps/place/La+Querencia+Centro+Equino/@${LAT},${LNG},17z`}
                isExternal
                fontWeight="semibold"
                color="#aa8f94"
                fontSize="md"
                _hover={{ color: "#C18A4D" }}
              >
                Abrir en Google Maps
              </CLink>
            </VStack>
            <Box
              w="100%"
              rounded="xl"
              overflow="hidden"
              boxShadow="lg"
              border="1px solid"
              borderColor="blackAlpha.200"
            >
              <AspectRatio ratio={16 / 9}>
                <iframe
                  title="Mapa satélite - La Querencia Centro Equino"
                  src={`https://www.google.com/maps?q=${LAT},${LNG}&t=k&z=18&hl=es&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </AspectRatio>
            </Box>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
}