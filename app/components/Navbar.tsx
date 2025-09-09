import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
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
  { href: "/contacto", label: "Contacto" },
];

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const isHomePage = location.pathname === "/";

  const gold = "#A8743F";
  const white = "white";

  return (
    <CLink
      as={RouterLink}
      to={to}
      fontSize="sm"
      fontWeight="600"
      textTransform="uppercase"
      letterSpacing="0.08em"
      color={isHomePage ? gold : white}
      _hover={{ color: isHomePage ? "#15322D" : gold }}
      borderBottom={isActive ? `2px solid ${gold}` : "2px solid transparent"}
      pb="2px"
      transition="all 0.2s ease"
    >
      {children}
    </CLink>
  );
}

function NavLinkMobile({ to, children, onClose }: { to: string; children: React.ReactNode; onClose: () => void }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const isHomePage = location.pathname === "/";

  const gold = "#A8743F";
  const white = "white";

  return (
    <CLink
      as={RouterLink}
      to={to}
      fontSize="sm"
      fontWeight="600"
      textTransform="uppercase"
      letterSpacing="0.08em"
      color={isHomePage ? gold : white}
      _hover={{ color: isHomePage ? "#15322D" : gold }}
      borderBottom={isActive ? `2px solid ${gold}` : "2px solid transparent"}
      pb="2px"
      transition="all 0.2s ease"
      onClick={onClose}
    >
      {children}
    </CLink>
  );
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";
  const isDarkPage = ["/servicios", "/quienes_somos", "/contacto"].includes(location.pathname);
  const gold = "#A8743F";
  const HEADER_H = 20;

  // Estado de scroll para todas las páginas
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      insetX={0}
      zIndex={50}
      bg={
        isHomePage 
          ? (scrolled ? "rgba(255,255,255,0.05)" : "transparent")
          : isDarkPage 
            ? (scrolled ? "rgba(21,50,46,0.3)" : "transparent")
            : "transparent"
      }
      backdropFilter={
        isHomePage 
          ? (scrolled ? "saturate(120%) blur(8px)" : "none")
          : isDarkPage 
            ? (scrolled ? "saturate(120%) blur(12px)" : "none")
            : "none"
      }
      borderBottom="1px solid transparent"
      boxShadow={
        isHomePage 
          ? (scrolled ? "sm" : "none")
          : isDarkPage 
            ? (scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none")
            : "none"
      }
    >
      <Container maxW="6xl" py={3}>
        <Flex h={HEADER_H} align="center" justify="space-between">
          {/* Logo */}
          <CLink as={RouterLink} to="/">
            <Image
              src="/logo1.png"
              alt="La Querencia"
              h={{ base: "72px", md: "96px" }}
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
            icon={<HamburgerIcon />}
            variant="ghost"
            color={isHomePage ? gold : "white"}
            fontSize="1.8rem"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            _hover={{ bg: "transparent", color: isHomePage ? "#15322D" : gold }}
          />
        </Flex>
      </Container>

      {/* Menú mobile */}
      {isOpen && (
        <Box
          bg={
            isHomePage 
              ? "rgba(255,255,255,0.05)"
              : isDarkPage 
                ? "rgba(21,50,46,0.3)"
                : "transparent"
          }
          backdropFilter={
            isHomePage 
              ? "saturate(120%) blur(8px)"
              : isDarkPage 
                ? "saturate(120%) blur(12px)"
                : "none"
          }
          display={{ md: "none" }}
          pb={4}
          borderTop="1px solid transparent"
        >
          <Container maxW="6xl">
            <Stack as="nav" spacing={3}>
              {navItems.map((i) => (
                <NavLinkMobile key={i.href} to={i.href} onClose={onClose}>
                  {i.label}
                </NavLinkMobile>
              ))}
            </Stack>
          </Container>
        </Box>
      )}
    </Box>
  );
}
