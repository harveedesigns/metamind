"use client";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Center,
  Button,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import WhatsAppButton from "../../../component/common/whatsApp/whatsAppButton";
import HeroNavButton from "../../../layouts/mainLayout/component/Header/component/HeroNavButton";
import AppointmentModal from "../../../component/common/AppointmentModal/AppointmentModal";

const Header = () => {
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Therapists', href: '#providers' },
    { label: 'Our Services', href: '#our-services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact-us' },
    { label: 'FAQs', href: '#faq' }
  ];

  const handleNavClick = (item: string, href: string) => {
    setActiveSection(item);

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onDrawerClose(); // Close mobile menu
  };

  // Detect scroll to apply sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        shadow="sm"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        zIndex="1000"
        bg="white"
        transition="all 0.3s ease-in-out"
        boxShadow={isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"}
      >
        {/* Top Bar - Now Clickable */}
        <Box
          h={{ lg: "2rem", xl: "2.5rem" }}
          color="white"
          textAlign="center"
          bg="#045B64"
          fontSize={{ base: "xs", lg: "lg" }}
          p={1}
          cursor="pointer"
          transition="background 0.3s ease"
          _hover={{
            bg: "#037282",
            textDecoration: "underline"
          }}
          onClick={() => setIsAppointmentModalOpen(true)}
        >
          Book a free 15 minute consultation with us!
        </Box>

        {/* Mobile Header */}
        <Flex
          alignItems="center"
          justify="space-between"
          px={{ base: 2, md: 6 }}
          py={1}
          bg="white"
          display={{ base: "flex", md: "none" }}
          h="4rem"
        >
          <Image
            src="/images/logo.png"
            alt="best child psychologist in noida"
            h={{ base: "43px", sm: "48px" }}
            cursor="pointer"
            onClick={() => router.push("/")}
            mr="auto"
          />
          <Flex gap={2}>
          <WhatsAppButton />

            <IconButton
              icon={<HamburgerIcon fontSize={"22px"} />}
              onClick={onDrawerOpen}
              aria-label="Open menu"
              variant="ghost"
              size={"md"}
            />
          </Flex>
        </Flex>

        {/* Mobile Drawer */}
        <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Center mt={6} mb={4}>
                <Image
                  src="/images/logo.png"
                  alt="Mental Health Clinic In Noida"
                  h="50px"
                  onClick={() => router.push("/")}
                />
              </Center>

              <VStack spacing={4} align="stretch" px={4}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    justifyContent="flex-start"
                    color={activeSection === item.label ? "blue.500" : "gray.600"}
                    fontWeight={activeSection === item.label ? "bold" : "normal"}
                    onClick={() => handleNavClick(item.label, item.href)}
                  >
                    {item.label}
                  </Button>
                ))}
              </VStack>

              <Center my={4}>
                {/* <WhatsAppButton /> */}
              </Center>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Desktop Header */}
        <Flex
          alignItems="center"
          justify="space-between"
          px={{ lg: 5, xl: 8 }}
          py={2.5}
          display={{ base: "none", md: "flex" }}
        >
          <Image
            src="/images/logo.png"
            alt="Mental Health Doctor In Noida"
            h={{ base: "35px", lg: "50px", xl: "60px" }}
            cursor={"pointer"}
            onClick={() => router.push("/")}
          />

          <Flex flex={1} justify="center" pr={2}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                color={activeSection === item.label ? "blue.500" : "gray.600"}
                fontWeight={activeSection === item.label ? "bold" : "normal"}
                onClick={() => handleNavClick(item.label, item.href)}
                mx={2}
                _hover={{
                  color: "blue.600",
                  transform: "scale(1.05)"
                }}
                transition="all 0.2s"
              >
                {item.label}
              </Button>
            ))}
          </Flex>

          <Flex align="center" gap={4}>
            <HeroNavButton />
          </Flex>
        </Flex>
      </Box>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
};

export default Header;