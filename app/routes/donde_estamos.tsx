import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  AspectRatio,
  HStack,
  Link as CLink,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const LAT = -33.4193754;
const LNG = -56.9228577;

export default function DondeEstamos() {
  // autoplay seguro para el video
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.then === "function") p.catch(() => setTimeout(tryPlay, 150));
    };
    v.addEventListener("loadedmetadata", tryPlay, { once: true });
    tryPlay();
    return () => v.pause();
  }, []);

  return (
    <Container maxW="7xl" pt={{ base: 24, md: 28 }} pb={{ base: 10, md: 16 }}>
      <Heading as="h1" size="2xl" mb={6} scrollMarginTop="96px">
        ¿Dónde estamos?
      </Heading>

      {/* === Bloque MAPA (full width) === */}
      <Stack spacing={4} mb={10}>
        <Text color="gray.800" fontSize="lg">
          <b>La Querencia Centro Equino</b> — Paso de Atahona, 85000 Trinidad,
          Departamento de Flores, Uruguay.
        </Text>

        <Text color="gray.700">
       <b>Trinidad, Departamento de Flores, Uruguay.</b> 
        </Text>

        <HStack justify="space-between" align="center">
          <CLink
            href={`https://www.google.com/maps/place/La+Querencia+Centro+Equino/@${LAT},${LNG},17z`}
            isExternal
            fontWeight="semibold"
            color="green.700"
            fontSize="sm"
          >
            Abrir en Google Maps
          </CLink>
        </HStack>

        <Box
          w="100%"                       
          rounded="xl"
          overflow="hidden"
          boxShadow="lg"
          border="1px solid"
          borderColor="blackAlpha.200"
        >
          <AspectRatio ratio={16 / 9}>
            {/* Satélite */}
            <iframe
              title="Mapa satélite - La Querencia Centro Equino"
              src={`https://www.google.com/maps?q=${LAT},${LNG}&t=k&z=18&hl=es&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </AspectRatio>
        </Box>
      </Stack>

      {/* === Bloque VIDEO (debajo) === */}
      <Stack spacing={4} align="center">
        <Heading as="h2" size="lg">
          Conocé nuestro centro de reproducción equina
        </Heading>
        <Text color="gray.700" fontSize="md">
          Estamos ubicados en el corazón de Uruguay, en la ciudad de Trinidad.
          Nuestro centro está diseñado para ofrecer un entorno óptimo para la
          salud y el bienestar de los caballos, con instalaciones modernas y un
          equipo dedicado.
        </Text>

        {/* Video chico, vertical; si es horizontal cambiá a w/h o ratio 16/9 */}
        <Box
          w={{ base: "260px", sm: "320px", md: "360px" }}
          h={{ base: "462px", sm: "568px", md: "648px" }} // ~9:16
          rounded="xl"
          overflow="hidden"
          boxShadow="lg"
        >
          <video
            ref={videoRef}
            src="/donde_estamos1.mp4"  
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            controls={false}
            controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </Box>
      </Stack>
    </Container>
  );
}
