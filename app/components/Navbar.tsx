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
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const navItems = [
  { href: "/", label: "Inicio" },
  //  { href: '/centro', label: 'Padrillos' },
  {
    href: "/servicios",
    label: "Servicios",
    dropdown: [
      {
        href: "/servicios#seguimiento-folicular",
        label: "Seguimiento folicular",
      },
      { href: "/servicios#colecta-semen", label: "Colecta de semen" },
      {
        href: "/servicios#inseminacion-artificial",
        label: "Inseminación artificial",
      },
      {
        href: "/servicios#transferencia-embriones",
        label: "Transferencia de embriones",
      },
      { href: "/servicios#opu", label: "OPU" },
    ],
  },
  { href: "/equipo", label: "Quienes somos" },
  { href: "/donde_estamos", label: "Donde estamos" },
  { href: "/contacto", label: "Contacto" },
];

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <CLink
      as={RouterLink}
      to={to}
      fontSize="sm"
      fontWeight="600"
      textTransform="uppercase"
      letterSpacing="0.08em"
      color="#A8743F"
      _hover={{ color: "#15322D" }}
      borderBottom={isActive ? "2px solid #A8743F" : "2px solid transparent"} // 👈 subrayado activo
      pb="2px"
      transition="all 0.2s ease"
    >
      {children}
    </CLink>
  );
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dropdownBg = useColorModeValue("white", "gray.900");
  const HEADER_H = 16;
  const location = useLocation();
  const svc = useDisclosure();
  return (
    <>
      <Box
        as="header"
        position="fixed"
        top={0}
        insetX={0}
        zIndex={20}
        bg="rgba(255,255,255,0.1)"
        backdropFilter="blur(12px)"
        sx={{ backgroundColor: "transparent !important" }}
        border="0"
        boxShadow="none"
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
              {navItems.map((i) =>
                i.dropdown ? (
                  <Box
                    key={i.href}
                    onMouseEnter={svc.onOpen}
                    onMouseLeave={svc.onClose}
                  >
                    <Menu isOpen={svc.isOpen} isLazy>
                      <MenuButton
                        as={CLink}
                        fontSize="sm"
                        fontWeight="600"
                        textTransform="uppercase"
                        letterSpacing="0.08em"
                        color="#A8743F"
                        _hover={{ color: "#15322D" }}
                        borderBottom={
                          location.pathname.startsWith(i.href)
                            ? "2px solid #A8743F"
                            : "2px solid transparent"
                        }
                        pb="2px"
                        transition="all 0.2s ease"
                      >
                        {i.label}
                      </MenuButton>

                      <MenuList
                        bg="transparent"
                        border="0"
                        boxShadow="none"
                        p={0}
                        mt={2}
                      >
                        {i.dropdown.map((sub) => (
                          <MenuItem
                            key={sub.href}
                            as={RouterLink}
                            to={sub.href}
                            fontSize="sm"
                            fontWeight="600"
                            letterSpacing="0.02em"
                            textTransform="uppercase"
                            color="#A8743F"
                            bg="transparent"
                            _hover={{ color: "#15322D", bg: "transparent" }}
                            px={3}
                            py={2}
                          >
                            {sub.label}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  </Box>
                ) : (
                  <NavLink key={i.href} to={i.href}>
                    {i.label}
                  </NavLink>
                )
              )}
            </HStack>

            {/* Botón mobile */}
            <IconButton
              aria-label="Abrir menú"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="ghost"
              color="#A8743F"
              fontSize="1.8rem"
              display={{ base: "inline-flex", md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              _hover={{ bg: "transparent", color: "#15322D" }}
            />
          </Flex>
        </Container>

        {/* Menú mobile */}
        {isOpen && (
          <Box bg={dropdownBg} display={{ md: "none" }} pb={4}>
            <Container maxW="6xl">
              <Stack as="nav" spacing={3}>
                {navItems.map((i) =>
                  i.dropdown ? (
                    <Stack key={i.href} spacing={2} pl={3}>
                      <NavLink to={i.href}>{i.label}</NavLink>
                      {i.dropdown.map((sub) => (
                        <NavLink key={sub.href} to={sub.href}>
                          {sub.label}
                        </NavLink>
                      ))}
                    </Stack>
                  ) : (
                    <NavLink key={i.href} to={i.href}>
                      {i.label}
                    </NavLink>
                  )
                )}
              </Stack>
            </Container>
          </Box>
        )}
      </Box>
    </>
  );
}
