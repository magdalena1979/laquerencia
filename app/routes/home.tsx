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
import ImageStrip from "../components/ImageStrip";

const stripImages = [
  "/slicer1.jpg",
  "/slicer2.jpg",
  "/slicer3.jpg",
  "/slicer4.jpg",
  "/slicer5.jpg",
  "/slicer6.png",
  "/slicer7.jpg",
  "/slicer8.jpg",
  "/slicer9.jpg", 
];

export default function Home() {
  return (
    <>
      <HeroQuerencia />
      <Hero2 />
      <AboutPreview />
      <Box mx="calc(50% - 50vw)" w="100vw">
        {" "}
        {/* opcional full-bleed */}
        <ImageStrip
          images={stripImages}
          ratio={4 / 3} // más alto; bajá hasta 1.2 si querés aún más altura
          itemWidth={{ base: "75%", sm: "55%", md: "38%", lg: "28%" }}
        />
      </Box>
    </>
  );
}
