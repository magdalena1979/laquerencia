// routes/home.tsx

import  HeroQuerencia  from "../components/Hero";
import Hero2 from "../components/Hero2";
import { Box, Container, Heading, Text, SimpleGrid, Stack, Card, CardHeader, CardBody } from "@chakra-ui/react";
import AboutPreview from "../components/quienes_somos";


export default function Home() {
  return (
    <>
      {/* Sección Hero */}
      <HeroQuerencia />
      <Hero2 />
     <AboutPreview />
    </>
  );
}
