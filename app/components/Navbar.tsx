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
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router'
import React from 'react'

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/centro', label: 'Padrillos' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/equipo', label: 'Quienes somos' },
  { href: '/contacto', label: 'Donde estamos' },
]

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <CLink
      as={RouterLink}
      to={to}
      fontSize="sm"
      textTransform="uppercase"
      letterSpacing="0.08em"
      _hover={{ color: 'brand.500' }}
    >
      {children}
    </CLink>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dropdownBg = useColorModeValue('white', 'gray.900')

  // altura visual del header (h=16 => 64px). Ajustá si cambiás paddings/alturas
  const HEADER_H = 16

  return (
    <>
      <Box
  as="header"
  position="fixed"
  top={0}
  insetX={0}
  zIndex={20}
  bg="rgba(255,255,255,0.1)"   // fondo casi transparente
  backdropFilter="blur(12px)"
  sx={{ backgroundColor: 'transparent !important' }}
  border="0"
  boxShadow="none"
>
        <Container maxW="6xl" py={3}>
          <Flex h={HEADER_H} align="center" justify="space-between">
            {/* Logo */}
            <CLink as={RouterLink} to="/">
              <Image
                src="/logo2.png"
                alt="La Querencia"
                h={{ base: '56px', md: '72px' }}
                objectFit="contain"
              />
            </CLink>

            {/* Links desktop */}
            <HStack as="nav" spacing={6} display={{ base: 'none', md: 'flex' }}>
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
              display={{ base: 'inline-flex', md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Container>

        {/* Menú mobile */}
        {isOpen && (
          <Box bg={dropdownBg} display={{ md: 'none' }} pb={4}>
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

     
    </>
  )
}
