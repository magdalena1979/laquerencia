import { Box, Container, HStack, Spacer, Link as CLink, IconButton, useDisclosure, Collapse, Stack, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/centro", label: "Centro" },
  { href: "/servicios", label: "Servicios" },
  { href: "/equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box as="header" borderBottom="1px" borderColor="blackAlpha.100" bg="white" position="sticky" top={0} zIndex={20}>
      <Container maxW="6xl" py={3}>
        <HStack>
          <RouterLink to="/">
            <Image src="/logo.png" alt="La Querencia" h="140px" objectFit="contain" />
          </RouterLink>
          <Spacer />

          {/* Desktop */}
          <HStack display={{ base: "none", md: "flex" }} spacing={6}>
            {navItems.map((i) => (
              <CLink key={i.href} href={i.href} fontSize="sm" textTransform="uppercase" letterSpacing="0.08em" _hover={{ color: "brand.500" }}>
                {i.label}
              </CLink>
            ))}
          </HStack>

          {/* Mobile */}
          <IconButton aria-label="Abrir menú" icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} variant="ghost" display={{ base: "inline-flex", md: "none" }} onClick={onToggle} />
        </HStack>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <Container maxW="6xl" pb={4} display={{ md: "none" }}>
          <Stack spacing={3}>
            {navItems.map((i) => (
              <CLink key={i.href} href={i.href} fontSize="sm" textTransform="uppercase" letterSpacing="0.08em" _hover={{ color: "brand.500" }}>
                {i.label}
              </CLink>
            ))}
          </Stack>
        </Container>
      </Collapse>
    </Box>
  );
}
