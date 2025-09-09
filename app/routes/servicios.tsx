import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Divider,
  Button,
  List,
  ListItem,
  ListIcon,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useLocation, Link as RouterLink } from "react-router";

const HEADER_OFFSET_PX = 96; // compensa tu navbar fijo

function useScrollToHashWithOffset() {
  const { hash } = useLocation();
  useEffect(() => {
    // correr al montar o cuando cambia el hash
    const id = (hash || "").replace("#", "");
    if (!id) return;
    // esperar al paint para que exista el nodo
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 0);
    return () => clearTimeout(t);
  }, [hash]);
}

export default function Servicios() {
  useScrollToHashWithOffset();
  const sectionBg = "rgba(255,255,255,0.1)"; // Fondo semitransparente para el estilo de contacto

  return (
    <Box bg="#15322e" minH="100vh">
      <Container maxW="7xl" pt={{ base: 24, md: 28 }} pb={{ base: 10, md: 16 }}>
        {/* Hero */}
        <Stack spacing={6} textAlign="center" mb={10}>
          <Heading as="h1" size="2xl" letterSpacing="wide" color="white">
            Servicios de Reproducción Equina
          </Heading>
          <Text fontSize="lg" color="gray.300">
            En <b>La Querencia</b> acompañamos cada etapa del ciclo reproductivo de tu yegua o padrillo.
            Trabajamos con protocolos actualizados y enfoque de bienestar animal, ajustados a la
            operativa y calendario zafral de Uruguay.
          </Text>

          {/* TOC interno */}
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={3}
            justify="center"
            wrap="wrap"
            mt={2}
          >
            <Button 
              as={RouterLink} 
              to="#seguimiento-folicular" 
              variant="outline" 
              size="sm"
              color="white"
              borderColor="#C18A4D"
              _hover={{ bg: "#C18A4D", color: "white" }}
            >
              Seguimiento folicular
            </Button>
            <Button 
              as={RouterLink} 
              to="#colecta-semen" 
              variant="outline" 
              size="sm"
              color="white"
              borderColor="#C18A4D"
              _hover={{ bg: "#C18A4D", color: "white" }}
            >
              Colecta de semen
            </Button>
            <Button 
              as={RouterLink} 
              to="#inseminacion-artificial" 
              variant="outline" 
              size="sm"
              color="white"
              borderColor="#C18A4D"
              _hover={{ bg: "#C18A4D", color: "white" }}
            >
              Inseminación artificial
            </Button>
            <Button 
              as={RouterLink} 
              to="#transferencia-embriones" 
              variant="outline" 
              size="sm"
              color="white"
              borderColor="#C18A4D"
              _hover={{ bg: "#C18A4D", color: "white" }}
            >
              Transferencia de embriones
            </Button>
            <Button 
              as={RouterLink} 
              to="#opu" 
              variant="outline" 
              size="sm"
              color="white"
              borderColor="#C18A4D"
              _hover={{ bg: "#C18A4D", color: "white" }}
            >
              OPU
            </Button>
          </Stack>
        </Stack>

        {/* SEGUIMIENTO FOLICULAR */}
        <Section
          id="seguimiento-folicular"
          title="Seguimiento folicular"
          bg={sectionBg}
          img="/imgs/foliculos.jpg"
          bullets={[
            "Ecografías seriadas para determinar el momento óptimo de servicio o IA.",
            "Control de cuerpo lúteo y dinámica folicular.",
            "Planificación de inducción de ovulación según objetivo productivo.",
          ]}
        >
          Monitoreamos el ciclo estral para decidir el mejor momento de cobertura,
          optimizando tasas de preñez y reduciendo servicios innecesarios.
        </Section>

        <Divider my={12} borderColor="rgba(193,138,77,0.3)" />

        {/* COLECTA DE SEMEN */}
        <Section
          id="colecta-semen"
          title="Colecta de semen"
          img="/imgs/colecta.jpg"
          bullets={[
            "Colecta con maniquí y vaina artificial.",
            "Evaluación de calidad seminal in situ (motilidad, concentración, morfología).",
            "Procesamiento para uso fresco o refrigerado corto plazo.",
          ]}
        >
          Ofrecemos colecta y evaluación andrológica para uso inmediato o envío
          refrigerado según cronograma de yeguas receptoras.
        </Section>

        <Divider my={12} borderColor="rgba(193,138,77,0.3)" />

        {/* INSEMINACIÓN ARTIFICIAL */}
        <Section
          id="inseminacion-artificial"
          title="Inseminación artificial"
          bg={sectionBg}
          img="/imgs/ia.jpg"
          bullets={[
            "IA con semen fresco o refrigerado.",
            "Programas sincronizados con seguimiento ecográfico.",
            "Registro de servicios y chequeo de preñez a los 14–16 días.",
          ]}
        >
          Implementamos protocolos de IA alineados al seguimiento folicular para
          maximizar la probabilidad de concepción en cada celo.
        </Section>

        <Divider my={12} borderColor="rgba(193,138,77,0.3)" />

        {/* TRANSFERENCIA DE EMBRIONES */}
        <Section
          id="transferencia-embriones"
          title="Transferencia de embriones"
          img="/imgs/te.jpg"
          bullets={[
            "Selección y sincronización de donante y receptoras.",
            "Lavado uterino y recuperación embrionaria.",
            "Transferencia y control post-procedimiento.",
          ]}
        >
          Diseñamos programas de TE para yeguas de alto valor genético, contemplando
          disponibilidad de receptoras y logística en campo.
        </Section>

        <Divider my={12} borderColor="rgba(193,138,77,0.3)" />

        {/* OPU */}
        <Section
          id="opu"
          title="OPU (Ovum Pick-Up)"
          bg={sectionBg}
          img="/imgs/opu.jpg"
          bullets={[
            "Aspiración folicular guiada por ecografía.",
            "Coordinación con laboratorio de FIV asociado.",
            "Seguimiento de gestación de las receptoras.",
          ]}
        >
          La OPU permite recuperar ovocitos de donantes con limitaciones reproductivas o
          en plena campaña deportiva, coordinando la FIV en laboratorio acreditado.
        </Section>

        {/* CTA final */}
        <Stack align="center" mt={16} spacing={3}>
          <Heading size="lg" color="white">¿Coordinamos tu plan reproductivo?</Heading>
          <Text color="gray.300" textAlign="center" maxW="2xl">
            Escribinos y armamos un esquema a medida según disponibilidad de padrillos,
            calendario de celo y objetivos de cría.
          </Text>
          <Button 
            as={RouterLink} 
            to="/contacto" 
            size="md" 
            bg="#C18A4D" 
            color="white" 
            _hover={{ bg: "#aa8f94" }}
          >
            Contactar
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

function Section({
  id,
  title,
  children,
  bullets = [],
  img,
  bg,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  bullets?: string[];
  img?: string;
  bg?: string;
}) {
  return (
    <Box 
      id={id} 
      py={{ base: 8, md: 12 }} 
      px={{ base: 6, md: 8 }} 
      bg={bg || "rgba(255,255,255,0.1)"} 
      borderRadius="2xl"
      mb={6}
      color="white"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
        <Stack spacing={4} pr={{ md: 6 }}>
          <Heading as="h2" size="xl" color="white">{title}</Heading>
          <Text color="gray.300">{children}</Text>
          {bullets.length > 0 && (
            <List spacing={2} pt={1}>
              {bullets.map((b, i) => (
                <ListItem key={i} color="gray.300">
                  <ListIcon as={CheckCircleIcon} color="#C18A4D" />
                  {b}
                </ListItem>
              ))}
            </List>
          )}
        </Stack>
        <Box>
          <Image
            src={img || "/servicios1.jpg"}
            alt={title}
            rounded="2xl"
            objectFit="cover"
            w="100%"
            h={{ base: "220px", md: "320px" }}
            boxShadow="lg"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
