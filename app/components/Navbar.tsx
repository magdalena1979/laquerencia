import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
  useColorModeValue,
  Image,
  Link as CLink,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router";
import React, { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/quienes_somos", label: "Quiénes somos" },
  { href: "/donde_estamos", label: "Donde estamos" },
  { href: "/contacto", label: "Contacto" },
];

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  const gold = "#A8743F";
  const green = "#15322D";

  return (
    <CLink
      as={RouterLink}
      to={to}
      fontSize="sm"
      fontWeight="600"
      textTransform="uppercase"
      letterSpacing="0.08em"
      color={gold}
      _hover={{ color: green }}
      borderBottom={isActive ? `2px solid ${gold}` : "2px solid transparent"}
      pb="2px"
      transition="all 0.2s ease"
    >
      {children}
    </CLink>
  );
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dropdownBg = useColorModeValue("white", "gray.900");
  const gold = "#A8743F";
  const green = "#15322D";
  const HEADER_H = 16;

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      insetX={0}
      zIndex={50}
      bg={scrolled ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.95)"}
      backdropFilter="saturate(160%) blur(12px)"
      borderBottom="1px solid"
      borderColor={scrolled ? "rgba(168,116,63,0.25)" : "transparent"}
      boxShadow={scrolled ? "sm" : "none"}
    >
      <Container maxW="6xl" py={3}>
        <Flex h={HEADER_H} align="center" justify="space-between">
          {/* Logo */}
          <CLink as={RouterLink} to="/">
            <Image
              src="/logo1.png"
              alt="La Querencia"
              h={{ base: "56px", md: "72px" }}
              objectFit="contain"
            />
          </CLink>

          {/* Menú desktop */}
          <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
            {navItems.map((i) => (
              <NavLink key={i.href} to={i.href}>
                {i.label}
              </NavLink>
            ))}
          </HStack>

          {/* Botón mobile */}
          <IconButton
            aria-label="Abrir menú"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            color={gold}
            fontSize="1.8rem"
            display={{ base: "inline-flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{ bg: "transparent", color: green }}
          />
        </Flex>
      </Container>

      {/* Menú mobile */}
      {isOpen && (
        <Box
          bg={dropdownBg}
          display={{ md: "none" }}
          pb={4}
          borderTop="1px solid rgba(168,116,63,0.25)"
        >
          <Container maxW="6xl">
            <Stack as="nav" spacing={3}>
              {navItems.map((i) => (
                <NavLink key={i.href} to={i.href}>
                  {i.label}
                </NavLink>
              ))}
            </Stack>
          </Container>
        </Box>
      )}
    </Box>
  );
}
