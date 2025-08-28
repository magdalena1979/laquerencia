import * as React from "react";
import { Box, Image, useBreakpointValue, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
  images: string[];
  alts?: string[];
  itemWidth?: any;              // p.ej. { base: "75%", sm: "55%", md: "40%", lg: "30%" }
  ratio?: number;               // más chico = más alto (ej. 3/2, 4/3, 1.2)
  showArrows?: boolean;
  hover?: boolean;
};

export default function ImageStrip({
  images,
  alts,
  ratio = 3 / 2,                // más alto que 16/9
  itemWidth = { base: "75%", sm: "55%", md: "40%", lg: "30%" },
  showArrows = true,
  hover = true,
}: Props) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const top = useBreakpointValue({ base: "50%", md: "50%" });

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.9;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    // 👇 Padre con "group" (no _group)
    <Box position="relative" w="full" role="group">
      {/* Pista */}
      <Box
        ref={trackRef}
        role="region"
        aria-label="Tira de imágenes"
        display="grid"
        gridAutoFlow="column"
        gridAutoColumns={itemWidth}
        gap={0}
        overflowX="auto"
        overflowY="hidden"
        scrollSnapType="x mandatory"
        sx={{
          "::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          overscrollBehaviorX: "contain",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {images.map((src, i) => (
          <Box key={i} position="relative" scrollSnapAlign="start" overflow="hidden">
            <Box position="relative" w="100%" pt={`${(1 / ratio) * 100}%`}>
              <Image
                src={src}
                alt={alts?.[i] || `imagen ${i + 1}`}
                position="absolute"
                inset={0}
                w="100%"
                h="100%"
                objectFit="cover"
                draggable={false}
                loading="lazy"
                display="block"
                transition="transform .35s ease, filter .35s ease"
                transformOrigin="center"
                _hover={hover ? { transform: "scale(1.035)", filter: "brightness(1.03)" } : {}}
              />
            </Box>
          </Box>
        ))}
      </Box>

      {/* Flechas overlay semitransparentes */}
      {showArrows && images.length > 1 && (
        <>
          <Box
            as="button"
            aria-label="Anterior"
            onClick={() => scrollBy(-1)}
            position="absolute"
            left={2}
            top={top}
            transform="translateY(-50%)"
            zIndex={2}
            w="42px"
            h="42px"
            display="grid"
            placeItems="center"
            rounded="full"
            bg="blackAlpha.400"
            color="whiteAlpha.900"
            opacity={{ base: 0.85, md: 0 }}      // ocultas en desktop hasta hover
            _groupHover={{ opacity: 0.95 }}      // 👈 ahora sí funciona
            _hover={{ bg: "blackAlpha.500" }}
            _active={{ bg: "blackAlpha.600" }}
            style={{ backdropFilter: "blur(2px)" }}
          >
            <Icon as={ChevronLeftIcon} boxSize={6} />
          </Box>

          <Box
            as="button"
            aria-label="Siguiente"
            onClick={() => scrollBy(1)}
            position="absolute"
            right={2}
            top={top}
            transform="translateY(-50%)"
            zIndex={2}
            w="42px"
            h="42px"
            display="grid"
            placeItems="center"
            rounded="full"
            bg="blackAlpha.400"
            color="whiteAlpha.900"
            opacity={{ base: 0.85, md: 0 }}
            _groupHover={{ opacity: 0.95 }}
            _hover={{ bg: "blackAlpha.500" }}
            _active={{ bg: "blackAlpha.600" }}
            style={{ backdropFilter: "blur(2px)" }}
          >
            <Icon as={ChevronRightIcon} boxSize={6} />
          </Box>
        </>
      )}
    </Box>
  );
}
