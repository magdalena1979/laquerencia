// routes/home.tsx
import GridPadrillos from "../components/GridPadrillos";
import  HeroQuerencia  from "../components/Hero";
import Hero2 from "../components/Hero2";
import { Box, Container, Heading, Text, SimpleGrid, Stack, Card, CardHeader, CardBody } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      {/* Sección Hero */}
      <HeroQuerencia />
      <Hero2 />
      <GridPadrillos />
    </>
  );
}
