"use client";
import {
  Box,
  Flex,
  FlexProps,
  Heading,
  Image,
  Text,
  TextProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomButton from "../../../../component/common/CustomButton/CustomButton";
import stores from "../../../../store/stores";

const AboutHeroSection = observer(() => {
  const router = useRouter();
  const [content, setContent] = useState<any>({});
  const {
    companyStore: { getPageContent, companyDetails },
  } = stores;

  useEffect(() => {
    setContent(getPageContent("about") || {});
  }, [companyDetails, getPageContent]);

  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  const buttonWidth = useBreakpointValue({ base: "14rem", md: "240px" });
  const headingSize = useBreakpointValue({
    base: "xl",
    md: "2xl",
    lg: "3rem",
  });

  const flexDirection: FlexProps["flexDirection"] = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const textAlign: TextProps["textAlign"] = useBreakpointValue({
    base: "center",
    md: "start",
  });

  return (
    <Box
      position="relative"
      bg={{ base: "#D3FFDF", lg: "transparent" }}
      py={{ base: 5, md: 10, lg: 6 }}
      px={{ base: 4, md: 8 }}
      maxW="100vw"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="#D3FFDF"
        zIndex={-1}
        display={{ base: "block" }}
      />
      <Box
        maxW={{ lg: "95%" }}
        mx="auto"
        px={{ base: 2, lg: 6 }}
        borderTopLeftRadius="2.5rem"
        borderBottomRightRadius="2.5rem"
      >
        <Flex
          direction={flexDirection}
          align="center"
          gap={{ base: 6, md: 4, lg: 12 }}
          position="relative"
          zIndex={1}
        >
          {/* Left Content */}
          <Box
            textAlign={textAlign}
            flex={1}
            pl={{ base: 0, lg: 6 }}
            pr={{ base: 0, md: 4 }}
          >
            <Heading
              as="h1"
              fontSize={headingSize}
              mt={1}
              letterSpacing="2px"
              fontWeight="bold"
            >
              {content?.aboutTitle?.aboutTitle1}
              <Text as="span" ml={{ lg: "2" }} display="block">
                {content?.aboutTitle?.aboutTitle2}
              </Text>
            </Heading>
            <Box display={{ base: "none", md: "block" }}>
              <Text
                color={"brand.1100"}
                fontSize={{ base: "sm", lg: "lg" }}
                w={{ md: "90%", lg: "80%" }}
                mt={4}
                display={{ base: "none", md: "block" }}
              >
                {content?.aboutSubTitle}
              </Text>

              <CustomButton
                onClick={() => router.push("/therapist")}
                width={buttonWidth}
                size={buttonSize}
                mt={6}
              >
                Get Started
              </CustomButton>
            </Box>
          </Box>

          {/* Right Image */}
          <Box
            mt={{ base: 6, md: 0 }}
            mr={{ base: 0, md: "-2rem", lg: "-5rem" }}
            ml={{ base: 0, md: "1rem" }}
            zIndex={2}
            flex={1}
            display="flex"
            justifyContent="center"
          >
            <Image
              src="/images/about/hero.webp"
              alt="Best Psychotherapist In Noida"
              w={{ base: "90%", md: "80%", lg: "65%" }}
              objectFit="cover"
              borderTopLeftRadius="4rem"
              borderBottomRightRadius="4rem"
            />
          </Box>
        </Flex>

        {/* Mobile-only Button */}
        <Box
          display={{ base: "block", md: "none" }}
          textAlign={"center"}
          mt={6}
        >
          <CustomButton
            onClick={() => router.push("/therapist")}
            width={buttonWidth}
            size={buttonSize}
          >
            Let’s make progress, together
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
});

export default AboutHeroSection;
