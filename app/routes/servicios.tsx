// app/routes/servicios.tsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  Button,
  IconButton,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

type Section = {
  id: string;
  title: string;
  text: string;
  img: string;
};

const SECTIONS: Section[] = [
  {
    id: "seguimiento-folicular",
    title: "Seguimiento folicular",
    text:
      "Monitoreo ecográfico y hormonal para determinar el momento óptimo de ovulación. Programación precisa de la inseminación o recolección.",
    img: "/img/servicios/seguimiento-folicular.jpg",
  },
  {
    id: "colecta-semen",
    title: "Colecta de semen",
    text:
      "Colecta, evaluación y procesamiento de semen fresco o refrigerado. Envasado y manejo bajo protocolos de bioseguridad.",
    img: "/img/servicios/colecta-semen.jpg",
  },
  {
    id: "inseminacion-artificial",
    title: "Inseminación artificial",
    text:
      "IA a tiempo fijo o guiada por seguimiento, con semen fresco, refrigerado o congelado. Trazabilidad completa del proceso.",
    img: "/img/servicios/inseminacion-artificial.jpg",
  },
  {
    id: "transferencia-embriones",
    title: "Transferencia de embriones",
    text:
      "Lavado y recuperación embrionaria, clasificación y transferencia a receptoras sincronizadas. Opcional: criopreservación.",
    img: "/img/servicios/transferencia-embriones.jpg",
  },
  {
    id: "opu",
    title: "OPU",
    text:
      "Ovum Pick-Up para aspiración folicular transvaginal y posterior maduración in vitro (IVM) para programas ICSI/IVF.",
    img: "/img/servicios/opu.jpg",
  },
];

// ---------- Carousel muy simple (sin dependencias) ----------
function Carousel({ images }: { images: string[] }) {
  const [i, setI] = useState(0);
  const total = images.length;
  const isMobile = useBreakpointValue({ base: true, md: false });

  const prev = () => setI((p) => (p - 1 + total) % total);
  const next = () => setI((p) => (p + 1) % total);

  return (
    <Box position="relative" overflow="hidden" rounded="xl">
      {/* Imagen activa */}
      <Image
        src={images[i]}
        alt={`Foto ${i + 1}`}
        w="100%"
        h={{ base: "220px", md: "420px" }}
        objectFit="cover"
        draggable={false}
        rounded="xl"
      />

      {/* Controles */}
      <IconButton
        aria-label="Anterior"
        icon={<ChevronLeftIcon boxSize={6} />}
        onClick={prev}
        position="absolute"
        top="50%"
        left={2}
        transform="translateY(-50%)"
        bg="blackAlpha.400"
        _hover={{ bg: "blackAlpha.600" }}
        color="white"
      />
      <IconButton
        aria-label="Siguiente"
        icon={<ChevronRightIcon boxSize={6} />}
        onClick={next}
        position="absolute"
        top="50%"
        right={2}
        transform="translateY(-50%)"
        bg="blackAlpha.400"
        _hover={{ bg: "blackAlpha.600" }}
        color="white"
      />

      {/* Dots */}
      <HStack
        spacing={2}
        position="absolute"
        bottom={3}
        left="50%"
        transform="translateX(-50%)"
      >
        {images.map((_, idx) => (
          <Button
            key={idx}
            onClick={() => setI(idx)}
            minW="10px"
            h="10px"
            p={0}
            rounded="full"
            bg={i === idx ? "#A8743F" : "whiteAlpha.700"}
            _hover={{ bg: i === idx ? "#15322D" : "whiteAlpha.900" }}
          />
        ))}
      </HStack>

      {/* Swipe básico en mobile */}
      {isMobile && (
        <Box
          position="absolute"
          inset={0}
          onTouchStart={(e) => (e.currentTarget as any)._x = e.touches[0].clientX}
          onTouchEnd={(e) => {
            const start = (e.currentTarget as any)._x || 0;
            const dx = e.changedTouches[0].clientX - start;
            if (dx > 40) prev();
            if (dx < -40) next();
          }}
        />
      )}
    </Box>
  );
}

export default function ServiciosPage() {
  return (
    <Box pt={{ base: 28, md: 32 }}>
      <Container maxW="6xl">
        <Heading
          as="h1"
          size="xl"
          mb={8}
          color="#A8743F"
          letterSpacing="-0.01em"
        >
          Servicios
        </Heading>

        {SECTIONS.map((s, idx) => (
          <Box
            key={s.id}
            id={s.id}
            scrollMarginTop="96px"
            py={{ base: 8, md: 12 }}
            borderBottom="1px solid"
            borderColor="blackAlpha.200"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} alignItems="center">
              <Image
                src={s.img}
                alt={s.title}
                rounded="xl"
                w="100%"
                h={{ base: "220px", md: "360px" }}
                objectFit="cover"
              />
              <Stack spacing={4}>
                <Heading
                  as="h2"
                  size="lg"
                  color="#A8743F"
                  textTransform="uppercase"
                  letterSpacing="0.08em"
                >
                  {s.title}
                </Heading>
                <Text fontSize="md" lineHeight={1.8} color="whiteAlpha.900">
                  {s.text}
                </Text>
              </Stack>
            </SimpleGrid>
          </Box>
        ))}

        {/* Carousel final antes del footer */}
        <Box py={{ base: 10, md: 16 }}>
          <Heading
            as="h3"
            size="md"
            mb={4}
            color="#A8743F"
            letterSpacing="0.02em"
          >
            Galería
          </Heading>
          <Carousel
            images={[
              "/img/galeria/1.jpg",
              "/img/galeria/2.jpg",
              "/img/galeria/3.jpg",
              "/img/galeria/4.jpg",
              "/img/galeria/5.jpg",
            ]}
          />
        </Box>
      </Container>
    </Box>
  );
}
