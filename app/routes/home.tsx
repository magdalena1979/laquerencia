import HeroQuerencia from "../components/Hero";
import Hero2 from "../components/Hero2";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import AboutPreview from "../components/quienes_somos";
import SnapCarousel from "../components/ImageStrip";
import ImageStrip from "../components/ImageStrip";

const stripImages = [
  "/slicer1.jpg",
  "/slicer2.jpg",
  "/slicer3.jpg",
  "/slicer4.jpg",
  "/slicer5.jpg",
  "/slicer6.png",
];

export default function Home() {
  return (
    <>
      <HeroQuerencia />
      <Hero2 />
      <AboutPreview />
      <Box mx="calc(50% - 50vw)" w="100vw"> {/* opcional full-bleed */}
      <ImageStrip
        images={stripImages}
        ratio={8/6}                        
        itemWidth={{ base: "80%", sm: "55%", md: "40%", lg: "30%" }} 
        // ↑ ajustá cuántas se ven a la vez: 1–2 en móvil, 3–4 en desktop
      />
    </Box>
    </>
  );
}
