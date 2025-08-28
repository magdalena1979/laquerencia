import * as React from "react";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
  images: string[];
  alts?: string[];
  /** Ancho de cada ítem (cuántas se ven por vista). */
  itemWidth?: any; // ej: { base: "85%", sm: "60%", md: "45%", lg: "33.333%" }
  /** Relación de aspecto (todas horizontales). */
  ratio?: number;  // 16/9 por defecto
  showArrows?: boolean;
};

export default function ImageStrip({
  images,
  alts,
  itemWidth = { base: "85%", sm: "60%", md: "45%", lg: "33.333%" },
  ratio = 16 / 9,
  showArrows = true,
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
    <Box position="relative" w="full">
      {/* Tira horizontal sin separación */}
      <Box
        ref={trackRef}
        display="grid"
        gridAutoFlow="column"
        gridAutoColumns={itemWidth}
        gap={0}                        // 👈 SIN espacio entre imágenes
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
          <Box key={i} position="relative" scrollSnapAlign="start">
            {/* Contenedor con ratio fijo para que todas queden iguales */}
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
                display="block"        // 👈 evita “hairlines” por inline-gap
                borderRadius="0"       // 👈 sin redondeos
                boxShadow="none"       // 👈 sin sombras
                bg="transparent"
              />
            </Box>
          </Box>
        ))}
      </Box>

      {showArrows && images.length > 1 && (
        <>
          <IconButton
            aria-label="Anterior"
            icon={<ChevronLeftIcon boxSize={6} />}
            position="absolute"
            left={2}
            top={top}
            transform="translateY(-50%)"
            rounded="full"
            bg="white"
            border="1px solid"
            borderColor="blackAlpha.300"
            _hover={{ bg: "gray.50" }}
            onClick={() => scrollBy(-1)}
          />
          <IconButton
            aria-label="Siguiente"
            icon={<ChevronRightIcon boxSize={6} />}
            position="absolute"
            right={2}
            top={top}
            transform="translateY(-50%)"
            rounded="full"
            bg="white"
            border="1px solid"
            borderColor="blackAlpha.300"
            _hover={{ bg: "gray.50" }}
            onClick={() => scrollBy(1)}
          />
        </>
      )}
    </Box>
  );
}
